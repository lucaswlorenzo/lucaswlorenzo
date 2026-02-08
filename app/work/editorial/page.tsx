'use client';

import Image from "next/image";
import MenuDropdown from "../../components/MenuDropdown";
import Footer from "../../components/Footer";
import SiteName from "../../components/SiteName";

export default function EditorialWork() {
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
            marginBottom: 24,
            fontFamily: "'Manrope Medium', sans-serif",
            letterSpacing: "0.05em",
            color: "#000000"
          }}>Editorial & Campaign</h2>
          <div style={{ 
            position: "relative",
            aspectRatio: "16/9", 
            marginBottom: 48,
            overflow: "hidden"
          }}>
            <Image
              src="/media/work/editorial/hero.png"
              alt="Editorial & Campaign"
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
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
