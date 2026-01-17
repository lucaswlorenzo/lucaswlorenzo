import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function Styling() {
  return (
    <main style={{ padding: "48px", maxWidth: 1200, margin: "0 auto" }}>
      <header style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 48, margin: 0, fontWeight: "normal" }}>Lucas W. Lorenzo</h1>
      </header>

      <Navigation />

      <section style={{ marginTop: 80 }}>
        <h2 style={{ fontSize: 24, fontWeight: "normal", marginBottom: 24 }}>Styling</h2>
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

      <Footer />
    </main>
  );
}
