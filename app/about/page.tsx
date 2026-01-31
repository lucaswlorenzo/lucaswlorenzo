'use client';

import Link from "next/link";
import MenuDropdown from "../components/MenuDropdown";

export default function About() {
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
              fontFamily: "'Manrope Light', sans-serif",
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

        <section style={{ marginTop: 80, maxWidth: 720 }}>
        <h2 style={{ 
          fontSize: 24, 
          fontWeight: 300, 
          marginBottom: 24,
          fontFamily: "'Manrope Light', sans-serif",
          letterSpacing: "0.05em",
          color: "#000000"
        }}>About</h2>
        <div style={{ 
          fontSize: 18, 
          lineHeight: 1.6,
          fontFamily: "'Manrope Light', sans-serif",
          fontWeight: 300,
          letterSpacing: "0.02em",
          color: "#000000"
        }}>
          {/* Placeholder text - replace with actual content */}
          <p style={{ marginBottom: 24 }}>
            [Your about text will go here. This is placeholder content that you can replace with your actual biography, background, and information about your work in photography, styling, and art direction.]
          </p>
          <p>
            [Additional content about your experience, approach, and what makes your work unique.]
          </p>
        </div>
      </section>
      </div>
    </main>
  );
}
