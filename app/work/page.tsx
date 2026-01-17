'use client';

import Link from "next/link";

export default function Work() {
  return (
    <main style={{ 
      padding: "48px", 
      width: "100vw",
      position: "relative",
      backgroundColor: "#000000",
      minHeight: "100vh",
      margin: 0
    }}>
      {/* Navigation - Top Right */}
      <nav style={{
        position: "fixed",
        top: "clamp(24px, 4vw, 40px)",
        right: "clamp(24px, 4vw, 40px)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "clamp(12px, 2vw, 20px)",
        alignItems: "flex-end",
        pointerEvents: "auto"
      }}>
        <Link 
          href="/work" 
          style={{ 
            fontSize: "clamp(14px, 1.5vw, 18px)",
            textDecoration: "none",
            color: "#ffffff",
            fontFamily: "'Melodrama Light', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.05em",
            opacity: 0.8,
            transition: "opacity 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}
        >
          Work
        </Link>
        <Link 
          href="/hands" 
          style={{ 
            fontSize: "clamp(14px, 1.5vw, 18px)",
            textDecoration: "none",
            color: "#ffffff",
            fontFamily: "'Melodrama Light', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.05em",
            opacity: 0.8,
            transition: "opacity 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}
        >
          Hands
        </Link>
        <Link 
          href="/about" 
          style={{ 
            fontSize: "clamp(14px, 1.5vw, 18px)",
            textDecoration: "none",
            color: "#ffffff",
            fontFamily: "'Melodrama Light', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.05em",
            opacity: 0.8,
            transition: "opacity 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}
        >
          About
        </Link>
      </nav>

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
              color: "#ffffff",
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
          color: "#ffffff"
        }}>Work</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {/* Placeholder images - replace with actual images */}
          <div style={{ aspectRatio: "4/3", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
            Image 1
          </div>
          <div style={{ aspectRatio: "4/3", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
            Image 2
          </div>
          <div style={{ aspectRatio: "4/3", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
            Image 3
          </div>
          <div style={{ aspectRatio: "4/3", backgroundColor: "#f0f0f0", display: "flex", alignItems: "center", justifyContent: "center", color: "#999" }}>
            Image 4
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}
