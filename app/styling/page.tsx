import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Styling() {
  return (
    <main style={{ padding: "48px", maxWidth: 1200, margin: "0 auto", backgroundColor: "#ffffff", color: "#000000", minHeight: "100vh" }}>
      <header style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 48, margin: 0, fontWeight: "normal", color: "#000000" }}>Lucas W. Lorenzo</h1>
      </header>

      <Navigation />

      <section style={{ marginTop: 80 }}>
        <h2 style={{ fontSize: 24, fontWeight: "normal", marginBottom: 24, color: "#000000" }}>Styling</h2>
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

      <Footer />
    </main>
  );
}
