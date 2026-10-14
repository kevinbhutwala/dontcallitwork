export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  category: "Architecture" | "Interior Spaces" | "Lighting Design" | "Spatial Experiences" | "Experiments";
  year: string;
  location: string;
  kelvin: string;
  luxRange: string;
  heroImage: string;
  aspectRatio: "portrait" | "landscape" | "cinematic";
  summary: string;
  concept: string;
  lightingStrategy: string;
  materials: string[];
  gallery: {
    url: string;
    caption: string;
    mood: string;
  }[];
  photometrics: {
    fixtureType: string;
    beamAngle: string;
    cri: string;
    lumens: string;
  };
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    slug: "monolith-pavilion",
    title: "Monolith Gallery Pavilion",
    subtitle: "Hidden perimeter wash over cast concrete & raked mineral aggregate",
    category: "Architecture",
    year: "2025",
    location: "Kyoto, Japan",
    kelvin: "2700K Warm Tungsten",
    luxRange: "40 — 180 Lux",
    heroImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    aspectRatio: "cinematic",
    summary: "A monolithic brutalist sanctuary where light is admitted only through calibrated 80mm perimeter ground reveals and a solitary zenith aperture.",
    concept: "We treated the structure not as an object to be lit, but as a hollow sculpture formed to capture darkness and allow light to graze upon raw concrete aggregates.",
    lightingStrategy: "Recessed linear sub-floor extrusions concealed behind acoustic stone reveals cast a soft vertical gradient upwards, leaving the ceiling mass seemingly floating in shadow.",
    materials: ["Board-formed Concrete", "Basalt Stone", "Blackened Steel", "Smoked Oak"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1600&q=85",
        caption: "Main pavilion colonnade at dusk with perimeter grazing coves",
        mood: "Dusk Transition",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
        caption: "Central void illuminated by indirect ceiling bounce",
        mood: "Nocturne Silence",
      },
      {
        url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85",
        caption: "Tactile concrete junction under 10-degree narrow beam spot",
        mood: "Chiaroscuro Focus",
      },
    ],
    photometrics: {
      fixtureType: "Concealed Ground Micro-Linear Grazer",
      beamAngle: "12° × 45° Oval Asymmetric",
      cri: "98 CRI (R9 > 90)",
      lumens: "850 lm/m",
    },
    featured: true,
  },
  {
    slug: "fluted-atrium",
    title: "House of Diffused Light",
    subtitle: "Double-height fluted glass, raw travertine and vertical daylight caustics",
    category: "Interior Spaces",
    year: "2025",
    location: "Basel, Switzerland",
    kelvin: "3000K to 5000K Dynamic",
    luxRange: "80 — 420 Lux",
    heroImage: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1800&q=85",
    aspectRatio: "portrait",
    summary: "An introspective private residence designed around a central vertical atrium that transforms exterior daylight into textured tactile veils.",
    concept: "Diffused light softens the passage of time. Instead of sharp sunbeams, rhythmic fluted glass fins shatter direct rays into undulating vertical caustics that sweep across honed travertine.",
    lightingStrategy: "Tunable white fixtures embedded within the structural glass mullions mimic the color temperature of the sky, synchronizing the interior biological atmosphere with external circadian phases.",
    materials: ["Fluted Architectural Glass", "Honed Roman Travertine", "Cast Bronze", "White Plaster"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=85",
        caption: "Staircase geometry bathed in diffused daylight",
        mood: "Morning Zenith",
      },
      {
        url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1600&q=85",
        caption: "Evening mood with low-level bronze step luminaires",
        mood: "Twilight Calm",
      },
    ],
    photometrics: {
      fixtureType: "Integrated Mullion Tunable White Linear",
      beamAngle: "120° Diffuse Batwing",
      cri: "97 CRI",
      lumens: "1200 lm/m",
    },
    featured: true,
  },
  {
    slug: "chiaroscuro-vault",
    title: "Chiaroscuro Residence",
    subtitle: "Sculpting architectural volume through negative space and shadow",
    category: "Lighting Design",
    year: "2024",
    location: "Milan, Italy",
    kelvin: "2400K Candlelight Tone",
    luxRange: "15 — 90 Lux",
    heroImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    aspectRatio: "landscape",
    summary: "A study in extreme contrast. Rooms are deliberately under-illuminated, allowing selected textures and sculptural art objects to emerge from velvety darkness.",
    concept: "We resist the modern impulse to uniformly flood spaces with electric light. When light is rare, it possesses weight, dignity, and quiet intimacy.",
    lightingStrategy: "Pinspot luminaires with snoots and honeycomb louvers produce glare-free pools of light with zero spill onto surrounding dark plaster walls.",
    materials: ["Charred Black Cedar", "Nero Marquina Marble", "Raw Linen", "Tungsten Filaments"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
        caption: "Living sanctuary with low-hung brass custom pendants",
        mood: "Midnight Glow",
      },
      {
        url: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=85",
        caption: "Sculptural niche revealing raw marble striations",
        mood: "Chiaroscuro Accent",
      },
    ],
    photometrics: {
      fixtureType: "Magnetic Micro Track Pinspot with Honeycomb",
      beamAngle: "8° Ultra-Narrow Concentrated",
      cri: "99 CRI",
      lumens: "350 lm",
    },
    featured: true,
  },
  {
    slug: "subterranean-sound-vault",
    title: "Subterranean Listening Sanctuary",
    subtitle: "Acoustic timber baffles and 2200K low-horizon floor washing",
    category: "Spatial Experiences",
    year: "2024",
    location: "Copenhagen, Denmark",
    kelvin: "2200K Deep Amber",
    luxRange: "10 — 60 Lux",
    heroImage: "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1800&q=85",
    aspectRatio: "portrait",
    summary: "An underground private listening chamber where acoustic engineering and lighting choreography heighten auditory perception.",
    concept: "Lowering ambient lighting increases acoustic sensitivity. By keeping all light sources below eye level (sub-400mm), the ceiling plane dissolves into infinity.",
    lightingStrategy: "Continuously dimmed warm-dim LED ribbons concealed beneath floating benchwork and baseboards cast horizontal amber light across polished aggregate floors.",
    materials: ["Perforated Walnut", "Cast Earth Concrete", "Raw Brass", "Wool Felt"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85",
        caption: "Acoustic timber fins framing low-level floor lighting",
        mood: "Acoustic Trance",
      },
    ],
    photometrics: {
      fixtureType: "Sub-bench Cove Recessed Grazer",
      beamAngle: "30° Downward Grazing",
      cri: "96 CRI",
      lumens: "500 lm/m",
    },
    featured: true,
  },
  {
    slug: "zenith-aperture-pavilion",
    title: "The Zenith Observatory",
    subtitle: "Cantilevered concrete canopy with calibrated celestial light slits",
    category: "Architecture",
    year: "2025",
    location: "Zurich, Switzerland",
    kelvin: "Natural Daylight & 3500K Dusk",
    luxRange: "100 — 800 Lux",
    heroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1800&q=85",
    aspectRatio: "cinematic",
    summary: "An open-air architectural pavilion overlooking the lake, featuring a razor-sharp 150mm roof aperture calibrated to track the sun equinox.",
    concept: "The building acts as a monumental sundial. A single beam of natural solar geometry slices through the dark concrete volume, moving across the floor throughout the seasons.",
    lightingStrategy: "Hidden optical lenses inside concrete reveals simulate moonlight reflections at night, tracing the natural celestial trajectory in the dark.",
    materials: ["Precast White Concrete", "Polished Terrazzo", "Anodized Slate Aluminum", "Structural Water"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
        caption: "Solar aperture tracing across the north wall",
        mood: "Equinox Alignment",
      },
    ],
    photometrics: {
      fixtureType: "Architectural Exterior Concealed Uplight",
      beamAngle: "24° Flood with Soft Edge",
      cri: "95 CRI",
      lumens: "1600 lm",
    },
    featured: false,
  },
  {
    slug: "nocturne-tea-house",
    title: "Nocturne Tea Pavilion",
    subtitle: "Charred Shou Sugi Ban timber, black granite plinth & ember illumination",
    category: "Experiments",
    year: "2024",
    location: "Alibaug, India",
    kelvin: "1900K — 2400K Warm Dim",
    luxRange: "5 — 40 Lux",
    heroImage: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1800&q=85",
    aspectRatio: "landscape",
    summary: "An experimental contemplative tea pavilion set within a grove of mature trees, balancing darkness, firelight temperature, and nocturnal shadows.",
    concept: "In traditional Eastern spatial philosophy, beauty does not reside in the object itself, but in the patterns of shadows and the light that darkness engenders.",
    lightingStrategy: "Custom ceramic lanterns hand-thrown with micro-perforations produce starlight caustics across blackened timber decks.",
    materials: ["Yakisugi / Shou Sugi Ban Wood", "Honed Black Granite", "Washi Paper", "Raw Terracotta"],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
        caption: "Plinth threshold emerging from nocturnal shadows",
        mood: "Ember Whispers",
      },
      {
        url: "/images/yakisugi.jpg",
        caption: "Alligator-skin Yakisugi charred cedar timber facade under tungsten raking light",
        mood: "Carbonized Texture Study",
      },
    ],
    photometrics: {
      fixtureType: "Custom Pierced Ceramic Point Luminaires",
      beamAngle: "360° Omnidirectional Caustic",
      cri: "99 CRI Warm-Dim",
      lumens: "120 lm",
    },
    featured: true,
  },
];
