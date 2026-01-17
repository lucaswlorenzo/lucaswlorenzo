export default function Home() {
  return (
    <main style={{ padding: "48px", maxWidth: 960, margin: "0 auto" }}>
      <header style={{ marginBottom: 48 }}>
        <h1 style={{ fontSize: 48, margin: 0 }}>Lucas W. Lorenzo</h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, marginTop: 16, maxWidth: 720 }}>
          Photography · Styling · Art Direction
        </p>
      </header>

      <section style={{ display: "grid", gap: 16 }}>
        <a href="/work" style={{ fontSize: 18, textDecoration: "underline" }}>
          Work
        </a>
        <a href="/about" style={{ fontSize: 18, textDecoration: "underline" }}>
          About
        </a>
        <a href="/contact" style={{ fontSize: 18, textDecoration: "underline" }}>
          Contact
        </a>
      </section>

      <footer style={{ marginTop: 80, fontSize: 14, opacity: 0.7 }}>
        © {new Date().getFullYear()} Lucas W. Lorenzo
      </footer>
    </main>
  );
}
