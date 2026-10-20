"use client";

import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";

export function AudioToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const osc1Ref = useRef<OscillatorNode | null>(null);
  const osc2Ref = useRef<OscillatorNode | null>(null);

  const toggleAudio = async () => {
    if (!isPlaying) {
      // Start ambient architectural acoustic hum
      try {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // iOS Safari AudioContext unlock: strictly resume context on user gesture
        if (ctx.state === "suspended") {
          await ctx.resume();
        }

        const masterGain = ctx.createGain();
        masterGain.gain.setValueAtTime(0.001, ctx.currentTime);
        masterGain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3); // Very gentle and soft
        masterGain.connect(ctx.destination);
        gainNodeRef.current = masterGain;

        // Warm 60Hz architectural electrical hum (mains frequency)
        const osc1 = ctx.createOscillator();
        osc1.type = "sine";
        osc1.frequency.setValueAtTime(60, ctx.currentTime);
        osc1.connect(masterGain);
        osc1.start();
        osc1Ref.current = osc1;

        // Gentle sub-harmonic 120Hz warmth
        const osc2 = ctx.createOscillator();
        osc2.type = "sine";
        osc2.frequency.setValueAtTime(120, ctx.currentTime);
        const gain2 = ctx.createGain();
        gain2.gain.setValueAtTime(0.015, ctx.currentTime);
        osc2.connect(gain2);
        gain2.connect(masterGain);
        osc2.start();
        osc2Ref.current = osc2;

        setIsPlaying(true);
      } catch (err) {
        console.error("Audio initialization error:", err);
      }
    } else {
      // Stop audio
      if (gainNodeRef.current && audioCtxRef.current) {
        gainNodeRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 0.8);
        setTimeout(() => {
          osc1Ref.current?.stop();
          osc2Ref.current?.stop();
          audioCtxRef.current?.close();
          setIsPlaying(false);
        }, 800);
      } else {
        setIsPlaying(false);
      }
    }
  };

  return (
    <button
      onClick={toggleAudio}
      className="flex items-center gap-2 px-3 py-2 min-h-[40px] rounded-full border border-white/10 hover:border-[#D89F54]/40 bg-[#121213]/80 backdrop-blur-md text-[11px] font-mono-tech tracking-wider text-[#A3A29E] hover:text-[#FAF7F2] active:scale-95 transition-all duration-200"
      title={isPlaying ? "Mute architectural ambience" : "Enable atmospheric soundscape"}
      aria-label={isPlaying ? "Mute architectural ambience" : "Enable atmospheric soundscape"}
    >
      {isPlaying ? (
        <>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D89F54] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D89F54]"></span>
          </span>
          <Volume2 className="w-3.5 h-3.5 text-[#D89F54]" />
          <span className="hidden sm:inline">60Hz HUM</span>
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 text-zinc-500" />
          <span className="hidden sm:inline">SOUND OFF</span>
        </>
      )}
    </button>
  );
}
