"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import * as THREE from "three";
import { RotateCcw, AlertCircle } from "lucide-react";

// Convert Kelvin temperature to RGB
function kelvinToRGB(kelvin: number): THREE.Color {
  const temp = kelvin / 100;
  let red = 0;
  let green = 0;
  let blue = 0;

  // Red
  if (temp <= 66) {
    red = 255;
  } else {
    red = temp - 60;
    red = 329.698727446 * Math.pow(red, -0.1332047592);
    if (red < 0) red = 0;
    if (red > 255) red = 255;
  }

  // Green
  if (temp <= 66) {
    green = temp;
    green = 99.4708025861 * Math.log(green) - 161.1195681661;
    if (green < 0) green = 0;
    if (green > 255) green = 255;
  } else {
    green = temp - 60;
    green = 288.1221695283 * Math.pow(green, -0.0755148492);
    if (green < 0) green = 0;
    if (green > 255) green = 255;
  }

  // Blue
  if (temp >= 66) {
    blue = 255;
  } else if (temp <= 19) {
    blue = 0;
  } else {
    blue = temp - 10;
    blue = 138.5177312231 * Math.log(blue) - 305.0447927307;
    if (blue < 0) blue = 0;
    if (blue > 255) blue = 255;
  }

  return new THREE.Color(red / 255, green / 255, blue / 255);
}

// Convert Kelvin to Hex string for CSS/Fallback
function kelvinToHex(kelvin: number): string {
  const c = kelvinToRGB(kelvin);
  const r = Math.round(c.r * 255).toString(16).padStart(2, "0");
  const g = Math.round(c.g * 255).toString(16).padStart(2, "0");
  const b = Math.round(c.b * 255).toString(16).padStart(2, "0");
  return `#${r}${g}${b}`;
}

interface Preset {
  name: string;
  kelvin: number;
  intensity: number;
  angle: number;
  azimuth: number;
  ambient: number;
  tag: string;
  fallbackImage: string;
}

const PRESETS: Preset[] = [
  {
    name: "Tungsten Monolith",
    kelvin: 2700,
    intensity: 1.8,
    angle: 35,
    azimuth: -40,
    ambient: 0.25,
    tag: "Warm Intimacy",
    fallbackImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
  },
  {
    name: "Zenith Noon",
    kelvin: 5500,
    intensity: 2.4,
    angle: 75,
    azimuth: 15,
    ambient: 0.45,
    tag: "Daylight Clarity",
    fallbackImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
  },
  {
    name: "Golden Equinox",
    kelvin: 3100,
    intensity: 2.1,
    angle: 18,
    azimuth: -70,
    ambient: 0.2,
    tag: "Long Raking Shadows",
    fallbackImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
  },
  {
    name: "Gallery Chiaroscuro",
    kelvin: 3800,
    intensity: 3.2,
    angle: 50,
    azimuth: 0,
    ambient: 0.08,
    tag: "High Contrast Void",
    fallbackImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
  },
  {
    name: "Nocturne Sanctuary",
    kelvin: 2000,
    intensity: 0.9,
    angle: 12,
    azimuth: 85,
    ambient: 0.05,
    tag: "Sub-Horizon Ember",
    fallbackImage: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
  },
];

export function LightRoom3D({ isStandalone = false }: { isStandalone?: boolean }) {
  const mountRef = useRef<HTMLDivElement>(null);

  // WebGL support state
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);

  // Lighting state
  const [kelvin, setKelvin] = useState<number>(2700);
  const [intensity, setIntensity] = useState<number>(1.8);
  const [elevation, setElevation] = useState<number>(35); // degrees
  const [azimuth, setAzimuth] = useState<number>(-40); // degrees
  const [ambientIntensity, setAmbientIntensity] = useState<number>(0.25);
  const [activePreset, setActivePreset] = useState<string>("Tungsten Monolith");
  const [controlsExpanded, setControlsExpanded] = useState<boolean>(true);
  const [hasInteracted, setHasInteracted] = useState<boolean>(false);

  // Three.js refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const dirLightRef = useRef<THREE.DirectionalLight | null>(null);
  const ambientLightRef = useRef<THREE.AmbientLight | null>(null);
  const slitLightRef = useRef<THREE.PointLight | null>(null);

  // Mouse drag camera orbit state
  const isDraggingRef = useRef(false);
  const previousMousePositionRef = useRef({ x: 0, y: 0 });
  const cameraAngleRef = useRef({ theta: 0.35, phi: 1.2 });
  const cameraDistanceRef = useRef(6.2);

  // Update light parameters in 3D scene
  const updateLights = useCallback(() => {
    if (!dirLightRef.current || !ambientLightRef.current || !slitLightRef.current) return;

    const lightColor = kelvinToRGB(kelvin);

    const phi = THREE.MathUtils.degToRad(90 - elevation);
    const theta = THREE.MathUtils.degToRad(azimuth);

    const x = 5 * Math.sin(phi) * Math.sin(theta);
    const y = 5 * Math.cos(phi);
    const z = 5 * Math.sin(phi) * Math.cos(theta);

    dirLightRef.current.position.set(x, Math.max(0.5, y), z);
    dirLightRef.current.color = lightColor;
    dirLightRef.current.intensity = intensity;

    ambientLightRef.current.intensity = ambientIntensity;
    ambientLightRef.current.color = lightColor.clone().multiplyScalar(0.7);

    slitLightRef.current.color = lightColor;
    slitLightRef.current.intensity = intensity * 0.8;
  }, [kelvin, intensity, elevation, azimuth, ambientIntensity]);

  useEffect(() => {
    if (webGLSupported) {
      updateLights();
    }
  }, [updateLights, webGLSupported]);

  // Apply Preset
  const applyPreset = (preset: Preset) => {
    setActivePreset(preset.name);
    setKelvin(preset.kelvin);
    setIntensity(preset.intensity);
    setElevation(preset.angle);
    setAzimuth(preset.azimuth);
    setAmbientIntensity(preset.ambient);
  };

  // Reset Camera View
  const resetCamera = () => {
    cameraAngleRef.current = { theta: 0.35, phi: 1.2 };
    cameraDistanceRef.current = 6.2;
    if (cameraRef.current) {
      updateCameraPosition();
    }
  };

  const updateCameraPosition = () => {
    if (!cameraRef.current) return;
    const { theta, phi } = cameraAngleRef.current;
    const r = cameraDistanceRef.current;

    cameraRef.current.position.x = r * Math.sin(phi) * Math.sin(theta);
    cameraRef.current.position.y = Math.max(0.8, r * Math.cos(phi));
    cameraRef.current.position.z = r * Math.sin(phi) * Math.cos(theta);
    cameraRef.current.lookAt(0, 0.4, 0);
  };

  // Three.js Scene Setup with graceful WebGL fallback
  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // First check if WebGL is supported
    const checkWebGL = () => {
      try {
        const testCanvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (testCanvas.getContext("webgl") || testCanvas.getContext("experimental-webgl"))
        );
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      requestAnimationFrame(() => {
        setWebGLSupported(false);
      });
      return;
    }

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 560;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.0;
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;
    } catch (e) {
      console.warn("WebGL renderer creation failed, falling back to 2D simulation mode:", e);
      requestAnimationFrame(() => {
        setWebGLSupported(false);
      });
      return;
    }

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color("#080808");
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    cameraRef.current = camera;
    updateCameraPosition();

    // 3. Materials with procedurally generated architectural concrete canvas
    const createNoiseTexture = () => {
      const size = 256;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.fillStyle = "#808080";
        ctx.fillRect(0, 0, size, size);
        const imgData = ctx.getImageData(0, 0, size, size);
        for (let i = 0; i < imgData.data.length; i += 4) {
          const noise = (Math.random() - 0.5) * 40;
          imgData.data[i] = Math.min(255, Math.max(0, 128 + noise));
          imgData.data[i + 1] = Math.min(255, Math.max(0, 128 + noise));
          imgData.data[i + 2] = Math.min(255, Math.max(0, 128 + noise));
        }
        ctx.putImageData(imgData, 0, 0);
      }
      const tex = new THREE.CanvasTexture(canvas);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      tex.repeat.set(4, 4);
      return tex;
    };

    const noiseTex = createNoiseTexture();

    const concreteMat = new THREE.MeshStandardMaterial({
      color: 0x2c2c2f,
      roughness: 0.88,
      metalness: 0.05,
      bumpMap: noiseTex,
      bumpScale: 0.015,
    });

    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x1f1f22,
      roughness: 0.65,
      metalness: 0.1,
      bumpMap: noiseTex,
      bumpScale: 0.008,
    });

    const plinthMat = new THREE.MeshStandardMaterial({
      color: 0x36363a,
      roughness: 0.45,
      metalness: 0.2,
      bumpMap: noiseTex,
      bumpScale: 0.02,
    });

    // 4. Geometry: Brutalist Architectural Chamber
    const floorGeo = new THREE.PlaneGeometry(10, 10);
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.receiveShadow = true;
    scene.add(floor);

    const wallGeo = new THREE.PlaneGeometry(10, 5);
    const backWall = new THREE.Mesh(wallGeo, concreteMat);
    backWall.position.set(0, 2.5, -4);
    backWall.receiveShadow = true;
    scene.add(backWall);

    const leftWall = new THREE.Mesh(wallGeo, concreteMat);
    leftWall.position.set(-4, 2.5, 0);
    leftWall.rotation.y = Math.PI / 2;
    leftWall.receiveShadow = true;
    scene.add(leftWall);

    const ceilingPart1 = new THREE.Mesh(new THREE.PlaneGeometry(6, 4), concreteMat);
    ceilingPart1.position.set(-2, 4.8, 0);
    ceilingPart1.rotation.x = Math.PI / 2;
    ceilingPart1.receiveShadow = true;
    scene.add(ceilingPart1);

    const ceilingPart2 = new THREE.Mesh(new THREE.PlaneGeometry(2, 4), concreteMat);
    ceilingPart2.position.set(2.5, 4.8, 0);
    ceilingPart2.rotation.x = Math.PI / 2;
    ceilingPart2.receiveShadow = true;
    scene.add(ceilingPart2);

    const plinth = new THREE.Mesh(new THREE.BoxGeometry(1.2, 1.4, 1.2), plinthMat);
    plinth.position.set(0, 0.7, 0);
    plinth.castShadow = true;
    plinth.receiveShadow = true;
    scene.add(plinth);

    const stepPlinth = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.4, 0.8), plinthMat);
    stepPlinth.position.set(1.4, 0.2, -1.2);
    stepPlinth.castShadow = true;
    stepPlinth.receiveShadow = true;
    scene.add(stepPlinth);

    const finMat = new THREE.MeshStandardMaterial({
      color: 0x18181a,
      roughness: 0.3,
      metalness: 0.8,
    });
    const fin = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 3.2, 16), finMat);
    fin.position.set(-1.8, 1.6, -1.5);
    fin.castShadow = true;
    scene.add(fin);

    // 5. Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(ambientLight);
    ambientLightRef.current = ambientLight;

    const dirLight = new THREE.DirectionalLight(0xfff0e0, 2.0);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    dirLight.shadow.camera.near = 0.5;
    dirLight.shadow.camera.far = 15;
    dirLight.shadow.camera.left = -4;
    dirLight.shadow.camera.right = 4;
    dirLight.shadow.camera.top = 4;
    dirLight.shadow.camera.bottom = -4;
    dirLight.shadow.bias = -0.0005;
    scene.add(dirLight);
    dirLightRef.current = dirLight;

    const slitLight = new THREE.PointLight(0xfff0e0, 1.2, 8, 1.5);
    slitLight.position.set(1.2, 4.6, 0);
    slitLight.castShadow = false;
    scene.add(slitLight);
    slitLightRef.current = slitLight;
    updateLights();

    // 6. Mouse Orbit Drag Event Handlers
    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePositionRef.current.x;
      const deltaY = e.clientY - previousMousePositionRef.current.y;

      cameraAngleRef.current.theta -= deltaX * 0.007;
      cameraAngleRef.current.phi = Math.max(
        0.3,
        Math.min(1.5, cameraAngleRef.current.phi - deltaY * 0.007)
      );

      previousMousePositionRef.current = { x: e.clientX, y: e.clientY };
      updateCameraPosition();
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isDraggingRef.current = true;
        previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isDraggingRef.current || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - previousMousePositionRef.current.x;
      const deltaY = e.touches[0].clientY - previousMousePositionRef.current.y;

      cameraAngleRef.current.theta -= deltaX * 0.009;
      cameraAngleRef.current.phi = Math.max(
        0.3,
        Math.min(1.5, cameraAngleRef.current.phi - deltaY * 0.009)
      );

      previousMousePositionRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      updateCameraPosition();
    };

    const onTouchEnd = () => {
      isDraggingRef.current = false;
    };

    const domElem = renderer.domElement;
    domElem.style.touchAction = "none"; // Required for iOS Safari WebGL touch orbit without browser scroll conflicts
    domElem.style.width = "100%";
    domElem.style.height = "100%";

    const handleInteractionStart = () => {
      setHasInteracted(true);
    };

    domElem.addEventListener("mousedown", onMouseDown);
    domElem.addEventListener("mousedown", handleInteractionStart);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    domElem.addEventListener("touchstart", onTouchStart, { passive: true });
    domElem.addEventListener("touchstart", handleInteractionStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd);

    const handleResize = () => {
      if (!container || !renderer || !camera) return;
      const newWidth = container.clientWidth || 800;
      const newHeight = container.clientHeight || 560;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = Math.round(entry.contentRect.width);
        const newHeight = Math.round(entry.contentRect.height) || 560;
        if (newWidth > 10 && newHeight > 10 && camera && renderer) {
          camera.aspect = newWidth / newHeight;
          camera.updateProjectionMatrix();
          renderer.setSize(newWidth, newHeight);
        }
      }
    });
    resizeObserver.observe(container);

    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isDraggingRef.current) {
        cameraAngleRef.current.theta += 0.0006;
        updateCameraPosition();
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
      domElem.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      domElem.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const currentPresetData = PRESETS.find((p) => p.name === activePreset) || PRESETS[0];

  return (
    <div
      className={`relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 bg-[#080808] ${
        isStandalone
          ? "h-[75svh] sm:h-[82vh] min-h-[460px] sm:min-h-[580px]"
          : "h-[460px] sm:h-[560px] lg:h-[620px]"
      }`}
    >
      {/* 3D WebGL Canvas Mount Container */}
      {webGLSupported ? (
        <div
          ref={mountRef}
          className="w-full h-full cursor-grab active:cursor-grabbing select-none"
          data-lenis-prevent
        />
      ) : (
        /* Graceful High-Fidelity 2D Photographic & Lighting Simulation Fallback */
        <div className="relative w-full h-full select-none overflow-hidden bg-[#0A0A0C]">
          <Image
            src={currentPresetData.fallbackImage}
            alt={currentPresetData.name}
            fill
            sizes="100vw"
            className="object-cover object-center transition-all duration-700 ease-out"
            style={{
              filter: `brightness(${0.5 + intensity * 0.25}) contrast(${1.0 + (elevation / 90) * 0.3})`,
            }}
          />
          {/* Dynamic Kelvin color temperature overlay filter */}
          <div
            className="absolute inset-0 pointer-events-none transition-colors duration-700 mix-blend-color"
            style={{
              backgroundColor: kelvinToHex(kelvin),
              opacity: 0.35,
            }}
          />
          {/* Dynamic sun position light gradient */}
          <div
            className="absolute inset-0 pointer-events-none transition-all duration-700"
            style={{
              background: `radial-gradient(circle at ${50 + (azimuth / 180) * 40}% ${
                90 - elevation
              }%, ${kelvinToHex(kelvin)} 0%, transparent 60%)`,
              opacity: 0.45 * intensity,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]/40 pointer-events-none" />

          {/* Fallback Notice */}
          <div className="absolute top-16 sm:top-20 left-4 sm:left-6 px-3 py-1.5 rounded-full bg-[#080808]/80 backdrop-blur-md border border-white/10 text-[10px] font-mono-tech text-[#D89F54] flex items-center gap-1.5">
            <AlertCircle className="w-3 h-3" />
            <span>2D ATMOSPHERIC SIMULATION MODE</span>
          </div>
        </div>
      )}

      {/* Orbit Interaction Hint (fades out on first touch/drag) */}
      {!hasInteracted && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-20 px-3.5 py-1.5 rounded-full bg-[#080808]/85 backdrop-blur-md border border-[#D89F54]/40 text-[10px] sm:text-xs font-mono-tech text-[#D89F54] animate-pulse text-center whitespace-nowrap shadow-xl">
          Drag to orbit chamber
        </div>
      )}

      {/* Top Floating Telemetry HUD */}
      <div className="absolute top-3 sm:top-6 left-3 sm:left-6 right-3 sm:right-6 flex items-center justify-between gap-2 pointer-events-none z-20">
        <div className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-[#080808]/90 backdrop-blur-md border border-white/10 text-[11px] sm:text-xs font-mono-tech flex items-center gap-2 sm:gap-3">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D89F54] animate-pulse" />
            <span className="text-[#FAF7F2] font-semibold text-[10px] sm:text-xs">LIGHT ROOM</span>
          </div>
          <span className="text-[#787774]">|</span>
          <span className="text-[#A3A29E] font-medium">{kelvin}K</span>
          <span className="text-[#787774] hidden xs:inline">|</span>
          <span className="text-[#D89F54] font-medium hidden xs:inline truncate max-w-[120px]">{activePreset}</span>
        </div>

        <div className="flex items-center gap-2 pointer-events-auto">
          {webGLSupported && (
            <button
              onClick={resetCamera}
              className="p-2 sm:p-2.5 rounded-full bg-[#080808]/90 hover:bg-[#18181A] backdrop-blur-md border border-white/10 text-[#A3A29E] hover:text-[#FAF7F2] active:scale-95 transition-all"
              title="Reset Camera View"
              aria-label="Reset Camera View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Bottom Floating Interactive Controller Dock */}
      <div className="absolute bottom-3 sm:bottom-6 left-3 sm:left-6 right-3 sm:right-6 pointer-events-none z-20">
        <div className="max-w-4xl mx-auto p-3 sm:p-5 rounded-2xl bg-[#0C0C0E]/92 backdrop-blur-xl border border-white/10 pointer-events-auto shadow-2xl">
          {/* Mobile Collapse/Expand Bar */}
          <div className="flex items-center justify-between pb-2 mb-2 sm:hidden border-b border-white/[0.08]">
            <span className="text-[10px] font-mono-tech uppercase tracking-widest text-[#D89F54]">
              {activePreset}
            </span>
            <button
              onClick={() => setControlsExpanded(!controlsExpanded)}
              className="text-[10px] font-mono-tech uppercase text-[#FAF7F2] bg-white/10 hover:bg-white/20 px-2.5 py-1 rounded-full transition-colors"
            >
              {controlsExpanded ? "Collapse ▾" : "Fine-Tune ▴"}
            </button>
          </div>

          {/* Preset Buttons with smooth horizontal swipe */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-3 mb-2 sm:mb-4 ios-scroll-x text-xs font-mono-tech -mx-1 px-1">
            <span className="text-[10px] uppercase tracking-widest text-[#787774] shrink-0 mr-1 hidden sm:inline">
              Atmospheres:
            </span>
            {PRESETS.map((preset) => (
              <button
                key={preset.name}
                onClick={() => applyPreset(preset)}
                className={`px-3 py-1.5 rounded-full whitespace-nowrap transition-all active:scale-95 shrink-0 text-[11px] sm:text-xs ${
                  activePreset === preset.name
                    ? "bg-[#D89F54] text-[#080808] font-bold shadow-md shadow-[#D89F54]/20"
                    : "bg-[#18181C] text-[#A3A29E] hover:text-white hover:bg-[#222226] border border-white/[0.06]"
                }`}
              >
                {preset.name}
              </button>
            ))}
          </div>

          {/* Precision Sliders (Collapsible on mobile) */}
          <div className={`${controlsExpanded ? "grid" : "hidden sm:grid"} grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 text-xs font-mono-tech pt-1`}>
            {/* Kelvin Slider */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-[#787774]">Color Temp (CCT):</span>
                <span className="text-[#FAF7F2] font-semibold">{kelvin}K</span>
              </div>
              <input
                type="range"
                min="1800"
                max="6500"
                step="50"
                value={kelvin}
                onChange={(e) => {
                  setKelvin(Number(e.target.value));
                  setActivePreset("Custom Calibration");
                }}
                className="w-full accent-[#D89F54] h-2 sm:h-1.5 bg-zinc-800 rounded-lg cursor-pointer touch-pan-x"
              />
            </div>

            {/* Sun Angle / Elevation */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-[#787774]">Sun Elevation:</span>
                <span className="text-[#FAF7F2] font-semibold">{elevation}°</span>
              </div>
              <input
                type="range"
                min="5"
                max="85"
                step="1"
                value={elevation}
                onChange={(e) => {
                  setElevation(Number(e.target.value));
                  setActivePreset("Custom Calibration");
                }}
                className="w-full accent-[#D89F54] h-2 sm:h-1.5 bg-zinc-800 rounded-lg cursor-pointer touch-pan-x"
              />
            </div>

            {/* Intensity / Lux */}
            <div>
              <div className="flex justify-between text-[11px] mb-1">
                <span className="text-[#787774]">Lux Intensity:</span>
                <span className="text-[#FAF7F2] font-semibold">{(intensity * 50).toFixed(0)}%</span>
              </div>
              <input
                type="range"
                min="0.3"
                max="3.5"
                step="0.1"
                value={intensity}
                onChange={(e) => {
                  setIntensity(Number(e.target.value));
                  setActivePreset("Custom Calibration");
                }}
                className="w-full accent-[#D89F54] h-2 sm:h-1.5 bg-zinc-800 rounded-lg cursor-pointer touch-pan-x"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
