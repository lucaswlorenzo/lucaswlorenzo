import Link from "next/link";

export default function Navigation() {
  return (
    <nav style={{ marginBottom: 48 }}>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", gap: 24, flexWrap: "wrap" }}>
        <li>
          <Link href="/styling" style={{ fontSize: 18, textDecoration: "none", color: "inherit" }}>
            Styling
          </Link>
        </li>
        <li>
          <Link href="/work" style={{ fontSize: 18, textDecoration: "none", color: "inherit" }}>
            Work
          </Link>
        </li>
        <li>
          <Link href="/hands" style={{ fontSize: 18, textDecoration: "none", color: "inherit" }}>
            Hands
          </Link>
        </li>
        <li>
          <Link href="/about" style={{ fontSize: 18, textDecoration: "none", color: "inherit" }}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
