'use client';

import Link from "next/link";
import MenuDropdown from "../components/MenuDropdown";
import Footer from "../components/Footer";

export default function Hands() {
  return (
    <main style={{ 
      padding: "48px", 
      width: "100vw",
      position: "relative",
      backgroundColor: "#ffffff",
      minHeight: "100vh",
      margin: 0
    }}>
      <MenuDropdown textColor="#000000" />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <header style={{ 
          marginBottom: "clamp(48px, 8vw, 96px)",
          textAlign: "center",
          paddingTop: "clamp(24px, 4vw, 48px)"
        }}>
          <Link href="/gallery" style={{ textDecoration: "none", color: "inherit" }}>
            <h1 style={{ 
              fontSize: "clamp(32px, 5vw, 56px)", 
              margin: 0, 
              fontFamily: "'Melodrama Light', sans-serif",
              fontWeight: 300,
              letterSpacing: "0.05em",
              color: "#000000",
              cursor: "pointer",
              transition: "opacity 0.3s",
              display: "inline-block"
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
            onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
            >
              Lucas W. Lorenzo
            </h1>
          </Link>
        </header>

        <section style={{ marginTop: 80 }}>
        <h2 style={{ 
          fontSize: 24, 
          fontWeight: 300, 
          marginBottom: 24,
          fontFamily: "'Melodrama Light', sans-serif",
          letterSpacing: "0.05em",
          color: "#000000"
        }}>Hands</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {/* Placeholder images - replace with actual images */}
          <div style={{ aspectRatio: "4/3", backgroundColor: "#000000", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)" }}>
            Image 1
          </div>
          <div style={{ aspectRatio: "4/3", backgroundColor: "#000000", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)" }}>
            Image 2
          </div>
          <div style={{ aspectRatio: "4/3", backgroundColor: "#000000", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)" }}>
            Image 3
          </div>
          <div style={{ aspectRatio: "4/3", backgroundColor: "#000000", display: "flex", alignItems: "center", justifyContent: "center", color: "rgba(255,255,255,0.5)" }}>
            Image 4
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </main>
  );
}
