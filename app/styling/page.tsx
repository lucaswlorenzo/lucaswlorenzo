import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import MenuDropdown from "../components/MenuDropdown";
import SiteName from "../components/SiteName";

export default function Styling() {
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
      color: "#000000"
    }}>
      <MenuDropdown textColor="#000000" />
      <SiteName textColor="#000000" />

      <div style={{ flex: 1, maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <Navigation />

        <section style={{ marginTop: 40 }}>
        <h2 style={{ fontSize: 24, fontWeight: 500, marginBottom: 24, color: "#000000", fontFamily: "'Manrope Medium', sans-serif" }}>Styling</h2>
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
