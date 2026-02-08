'use client';

import { useMemo, useState } from "react";
import Link from "next/link";
import MenuDropdown from "../../components/MenuDropdown";
import Footer from "../../components/Footer";
import SiteName from "../../components/SiteName";
import Lightbox from "../../components/Lightbox";

const backArrowSvg = (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#000000" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <polyline points="28 8 16 20 28 32" />
  </svg>
);

function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

const ASPECT_RATIOS = [
  { w: 1, h: 1 },
  { w: 3, h: 4 },
  { w: 4, h: 3 },
  { w: 5, h: 4 },
  { w: 4, h: 5 },
  { w: 5, h: 6 },
  { w: 6, h: 5 },
];

const GAP = 12;
const IMAGES = Array.from({ length: 12 }, (_, i) => ({ id: i + 1 }));

export default function AccessoryDesignWork() {
  const [lightbox, setLightbox] = useState<{ src?: string; aspectRatio: string } | null>(null);

  const frameLayouts = useMemo(() => {
    const ratios = ASPECT_RATIOS.map((r) => `${r.w} / ${r.h}`);
    const layouts: { id: number; aspectRatio: string }[] = [];
    for (let i = 0; i < IMAGES.length; i++) {
      const forbidden = new Set<string>();
      if (i >= 1) forbidden.add(layouts[i - 1].aspectRatio);
      if (i >= 2) forbidden.add(layouts[i - 2].aspectRatio);
      const available = ratios.filter((r) => !forbidden.has(r));
      const pool = available.length > 0 ? available : ratios;
      const seed = i * 17 + IMAGES[i].id * 23;
      const pick = Math.floor(seededRandom(seed) * pool.length);
      layouts.push({ id: IMAGES[i].id, aspectRatio: pool[pick] });
    }
    return layouts;
  }, []);

  return (
    <main style={{ 
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      padding: "clamp(24px, 4vw, 48px)",
      paddingTop: "clamp(96px, 14vw, 140px)",
      paddingLeft: "clamp(16px, 4vw, 180px)",
      paddingRight: "clamp(16px, 4vw, 180px)",
      width: "100%",
      maxWidth: "100%",
      position: "relative",
      backgroundColor: "#ffffff",
      margin: 0
    }}>
      <MenuDropdown textColor="#000000" />
      <SiteName textColor="#000000" />

      <Link
        href="/work"
        aria-label="Back to Work"
        style={{
          position: "absolute",
          top: "clamp(24px, 4vw, 40px)",
          left: "clamp(24px, 4vw, 40px)",
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 48,
          height: 48,
          color: "#000000",
          textDecoration: "none",
          transition: "opacity 0.2s ease",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.7"; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
      >
        {backArrowSvg}
      </Link>

      <div style={{ flex: 1, maxWidth: 1600, margin: "0 auto", width: "100%" }}>
        <section style={{ marginTop: 40 }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            columnGap: GAP,
            rowGap: GAP,
            width: "100%",
          }}>
            {frameLayouts.map((frame, idx) => (
              <div
                key={frame.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 0,
                  marginTop: idx % 4 === 1 || idx % 4 === 3 ? "8%" : 0,
                }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  onClick={() => { if (!lightbox) setLightbox({ aspectRatio: frame.aspectRatio }); }}
                  onKeyDown={(e) => { if (!lightbox && e.key === "Enter") setLightbox({ aspectRatio: frame.aspectRatio }); }}
                  style={{
                    width: "100%",
                    aspectRatio: frame.aspectRatio,
                    backgroundColor: "#000000",
                    cursor: "pointer",
                    transition: "opacity 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.95";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)";
                  }}
                >
                  {/* Placeholder for media */}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Lightbox
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
        src={lightbox?.src}
        aspectRatio={lightbox?.aspectRatio ?? "4/3"}
      />
      <Footer />
    </main>
  );
}
