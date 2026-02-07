'use client';

import MenuDropdown from "../../components/MenuDropdown";
import Footer from "../../components/Footer";
import SiteName from "../../components/SiteName";

export default function AccessoryDesignWork() {
  return (
    <main style={{ 
      padding: "clamp(24px, 4vw, 48px)",
      paddingTop: "clamp(96px, 14vw, 140px)",
      width: "100vw",
      position: "relative",
      backgroundColor: "#ffffff",
      minHeight: "100vh",
      margin: 0
    }}>
      <MenuDropdown textColor="#000000" />
      <SiteName textColor="#000000" />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <section style={{ marginTop: 80 }}>
          <h2 style={{ 
            fontSize: 24, 
            fontWeight: 300, 
            marginBottom: 24,
            fontFamily: "'Manrope Light', sans-serif",
            letterSpacing: "0.05em",
            color: "#000000"
          }}>Accessory Design</h2>
          <div style={{ 
            aspectRatio: "16/9", 
            marginBottom: 48,
            backgroundColor: "#000000"
          }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                style={{
                  aspectRatio: "4/3",
                  backgroundColor: "#000000",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "rgba(255,255,255,0.5)"
                }}
              >
                Image {i}
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
