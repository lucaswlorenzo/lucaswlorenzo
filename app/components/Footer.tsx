export default function Footer() {
  return (
    <footer style={{ marginTop: 80, fontSize: 14, opacity: 0.7 }}>
      <div style={{ marginBottom: 16 }}>
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit", marginRight: 16 }}
        >
          Instagram
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          LinkedIn
        </a>
      </div>
      <div style={{ marginBottom: 8 }}>
        <a href="mailto:lucaswlorenzo@gmail.com" style={{ textDecoration: "none", color: "inherit" }}>
          Lucaswlorenzo@gmail.com
        </a>
        {" ︱ "}
        <a href="tel:3105258734" style={{ textDecoration: "none", color: "inherit" }}>
          310.525.8734
        </a>
      </div>
      <div>© All rights reserved</div>
    </footer>
  );
}
