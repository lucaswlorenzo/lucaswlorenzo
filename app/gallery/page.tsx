'use client';

import { useMemo } from "react";
import MenuDropdown from "../components/MenuDropdown";
import SiteName from "../components/SiteName";
import Footer from "../components/Footer";

// Seeded random for consistent layout
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Salon-style: mix of shapes - keep ratios close to minimize height variation for even gaps
const ASPECT_RATIOS = [
  { w: 1, h: 1 },      // square
  { w: 3, h: 4 },      // portrait
  { w: 4, h: 3 },      // landscape
  { w: 5, h: 4 },      // subtle portrait
  { w: 4, h: 5 },      // subtle landscape
  { w: 5, h: 6 },
  { w: 6, h: 5 },
];

const GAP = 14;

// Placeholder for gallery images
const galleryImages = Array.from({ length: 20 }, (_, i) => ({ id: i + 1 }));

export default function Gallery() {
  const frameLayouts = useMemo(() => {
    const ratios = ASPECT_RATIOS.map((r) => `${r.w} / ${r.h}`);
    const layouts: { id: number; aspectRatio: string; index: number }[] = [];
    const usedInRightCol: string[] = [];
    const usedInLeftCol: string[] = [];

    for (let i = 0; i < galleryImages.length; i++) {
      const col = i % 2;
      const usedInCol = col === 0 ? usedInLeftCol : usedInRightCol;

      const forbidden = new Set<string>();
      if (i >= 1) forbidden.add(layouts[i - 1].aspectRatio);
      if (i >= 2) forbidden.add(layouts[i - 2].aspectRatio);
      usedInCol.forEach((r) => forbidden.add(r));

      const available = ratios.filter((r) => !forbidden.has(r));
      const pool = available.length > 0 ? available : ratios;

      const seed = i * 17 + galleryImages[i].id * 23;
      const pick = Math.floor(seededRandom(seed) * pool.length);
      const chosen = pool[pick];

      usedInCol.push(chosen);

      layouts.push({
        id: galleryImages[i].id,
        aspectRatio: chosen,
        index: i,
      });
    }
    return layouts;
  }, []);

  return (
    <main style={{ 
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      backgroundColor: "#ffffff",
      width: "100%",
      maxWidth: "100%",
      position: "relative",
      padding: "clamp(24px, 4vw, 48px)",
      paddingTop: "clamp(96px, 14vw, 140px)",
      paddingLeft: "clamp(140px, 10vw, 180px)",
      paddingRight: "clamp(140px, 10vw, 180px)",
      margin: 0
    }}>
      <MenuDropdown textColor="#000000" hideOnScroll={false} />
      <SiteName textColor="#000000" />

      <div style={{
        flex: 1,
        maxWidth: 1200,
        margin: "0 auto",
        marginTop: 40,
        width: "100%",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          columnGap: GAP,
          rowGap: GAP,
          width: "100%",
        }}>
          {frameLayouts.map((frame) => {
            const isFirstRowRight = frame.index === 1;
            return (
              <div
                key={frame.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: 0,
                  marginTop: isFirstRowRight ? "12%" : 0,
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: frame.aspectRatio,
                    backgroundColor: "#000000",
                    transition: "opacity 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {/* Placeholder for media content */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
