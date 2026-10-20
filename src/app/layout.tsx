import type { Metadata, Viewport } from "next";
import { SmoothScroll } from "@/components/SmoothScroll";
import { ScrollProgress } from "@/components/ScrollProgress";
import "./globals.css";

export const metadata: Metadata = {
  title: "DON’T CALL IT WORK | Architecture, Light & Spatial Experiences",
  description:
    "An architectural and lighting design studio exploring the emotional resonance of space, materials, shadow, and illumination.",
  keywords: [
    "Architecture",
    "Lighting Design",
    "Spatial Experience",
    "Interior Architecture",
    "Materiality",
    "Concrete",
    "Tungsten",
    "Atmospheric Lighting",
    "DON'T CALL IT WORK",
    "Diya Dayal",
  ],
  authors: [{ name: "DON’T CALL IT WORK" }],
  openGraph: {
    title: "DON’T CALL IT WORK — Between Concrete and Light",
    description:
      "We don't design spaces. We design how they feel. Exploring architectural lighting, raw materials, and emotional spatial atmospheres.",
    url: "https://dontcallitwork.com",
    siteName: "DON’T CALL IT WORK",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "DON’T CALL IT WORK — Architecture & Lighting Studio",
    description: "Architecture is not just structure. Lighting is not just illumination.",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DON’T CALL IT WORK",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#080808" },
    { media: "(prefers-color-scheme: light)", color: "#080808" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  interactiveWidget: "resizes-content",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-[#080808] text-[#F3F1EC] selection:bg-[#C9A063]/30 selection:text-[#FBF9F5] antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700&family=Space+Grotesk:wght@300;400;500;600;700&family=Syne:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "DON’T CALL IT WORK",
              "url": "https://dontcallitwork.com",
              "description":
                "An architectural and lighting design studio exploring the emotional resonance of space, materials, shadow, and illumination.",
              "sameAs": ["https://www.instagram.com/dontcallitwork/"],
              "knowsAbout": [
                "Architecture",
                "Lighting Design",
                "Spatial Experience",
                "Materiality",
                "Concrete Architecture",
                "Tungsten Lighting"
              ]
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-[#080808] text-[#F3F1EC] font-sans overflow-x-hidden">
        {/* Buttery Smooth Kinetic Inertial Scroll */}
        <SmoothScroll />
        {/* Subtle Architectural Scroll Progress Indicator */}
        <ScrollProgress />
        {children}
      </body>
    </html>
  );
}
