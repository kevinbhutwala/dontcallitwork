export interface MaterialStudy {
  id: string;
  name: string;
  subtitle: string;
  reflectance: string;
  colorTempAffinity: string;
  texture: string;
  tactileDescription: string;
  image: string;
  specularBehavior: string;
  architecturalApplication: string;
}

export const MATERIALS: MaterialStudy[] = [
  {
    id: "board-formed-concrete",
    name: "Board-Formed Concrete",
    subtitle: "Tactile relief of timber formwork & aggregate texture",
    reflectance: "28% Diffuse Matte",
    colorTempAffinity: "2700K to 3200K (Accentuates warm amber grain)",
    texture: "Raked pine grain with micro-cavities & form-tie impressions",
    tactileDescription:
      "When grazed at an acute angle (< 15°), each grain of the wood formwork casts an elongated shadow, turning solid structural mass into a dramatic relief map.",
    image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1200&q=85",
    specularBehavior: "Ultra-low specular reflection with high volumetric scattering",
    architecturalApplication: "Load-bearing vertical shear walls, cantilevered soffits, monolithic altar plinths",
  },
  {
    id: "honed-roman-travertine",
    name: "Honed Roman Travertine",
    subtitle: "Porous sedimentary stone with warm internal luminance",
    reflectance: "48% Semi-Diffuse",
    colorTempAffinity: "2400K to 3000K (Enhances golden calcite veins)",
    texture: "Honed matte with natural un-filled fissures and rhythmic strata",
    tactileDescription:
      "Travertine has a biological warmth. It absorbs daylight deeply into its porous matrix, re-emitting light with an organic, velvety softness impossible with synthetic composites.",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1200&q=85",
    specularBehavior: "Soft velvety sheen with anisotropic highlights along stone vein lines",
    architecturalApplication: "Monolithic atrium flooring, monolithic basin blocks, light-well wall cladding",
  },
  {
    id: "fluted-architectural-glass",
    name: "Fluted Reeded Glass",
    subtitle: "Linear prisms transforming raw light into vertical caustics",
    reflectance: "8% Surface / 88% Direct Transmission",
    colorTempAffinity: "All spectrums (Transmutes daylight into golden dusk)",
    texture: "12mm rounded convex flutes with flame-polished clarity",
    tactileDescription:
      "A spatial filter between public and private. It bends, stretches, and rhythmically multiplies light rays into shimmering vertical light curtains, obscuring silhouettes while keeping illumination intact.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85",
    specularBehavior: "Directional prismatic caustics and continuous linear specular ribbons",
    architecturalApplication: "Double-height atrium enclosures, luminous screens, acoustic bathroom partitions",
  },
  {
    id: "brushed-patinated-brass",
    name: "Brushed Patinated Brass",
    subtitle: "Living metallic surface that warms tungsten emissions",
    reflectance: "62% Warm Specular",
    colorTempAffinity: "2200K to 2700K (Creates molten honey reflections)",
    texture: "Directional 320-grit micro-brushing with natural beeswax passivation",
    tactileDescription:
      "Raw metal interacts with illumination by becoming an active secondary light source. A tiny pinspot bouncing off hand-brushed brass bathes the entire room in a golden secondary aura.",
    image: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85",
    specularBehavior: "Controlled anisotropic specular reflection with zero harsh glare",
    architecturalApplication: "Custom luminaire housings, door thresholds, concealed cove reflector trays",
  },
  {
    id: "shou-sugi-ban",
    name: "Yakisugi / Charred Cedar",
    subtitle: "Carbonized alligator skin absorbing 96% of light",
    reflectance: "4% Obsidian Absorbent",
    colorTempAffinity: "1800K to 2400K (Pungent contrast against ember light)",
    texture: "Alligator carbon crinkles with iridescent charcoal sheen",
    tactileDescription:
      "The ultimate light sponge. Deeply charred timber swallows stray illumination, creating intense visual contrast where adjacent illuminated surfaces shine with jewel-like clarity.",
    image: "/images/yakisugi.jpg",
    specularBehavior: "Zero primary reflection with subtle micro-facet diamond glints under raking spots",
    architecturalApplication: "Acoustic ceiling baffles, tea house exterior envelopes, contemplative alcoves",
  },
];
