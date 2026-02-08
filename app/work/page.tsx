'use client';

import { useState } from "react";
import Link from "next/link";
import MenuDropdown from "../components/MenuDropdown";
import Footer from "../components/Footer";
import SiteName from "../components/SiteName";

const categories = [
  { title: "Styling and Direction", href: "/work/styling" },
  { title: "Accessory Design", href: "/work/accessory-design" },
];

export default function Work() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

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

      <div style={{ flex: 1, maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <section style={{ marginTop: 40 }}>
          <h2 style={{ 
            fontSize: 24, 
            fontWeight: 500, 
            marginBottom: 32,
            fontFamily: "'Manrope Medium', sans-serif",
            letterSpacing: "0.05em",
            color: "#000000"
          }}>Work</h2>
          <div style={{ 
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(24px, 4vw, 64px)",
            flexWrap: "wrap",
          }}>
            {categories.map((category) => (
              <Link
                key={category.href}
                href={category.href}
                style={{ textDecoration: "none", color: "inherit", flex: "1 1 min(400px, 100%)", minWidth: 0, maxWidth: 560 }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 560,
                    minWidth: 0,
                    aspectRatio: "4/3",
                    backgroundColor: "#000000",
                    overflow: "hidden",
                    cursor: "pointer",
                  }}
                  onMouseEnter={() => setHoveredCard(category.href)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: "rgba(0,0,0,0.5)",
                      opacity: hoveredCard === category.href ? 1 : 0,
                      pointerEvents: "none",
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <h2 style={{ 
                      fontSize: 20, 
                      fontWeight: 300, 
                      margin: 0,
                      fontFamily: "'Manrope Light', sans-serif",
                      letterSpacing: "0.05em",
                      color: "#ffffff",
                      textAlign: "center",
                      padding: "0 16px"
                    }}>{category.title}</h2>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
