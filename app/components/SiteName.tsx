'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

const SITE_NAME_STYLES = {
  position: "absolute" as const,
  top: "calc(clamp(24px, 4vw, 40px) + 16px)",
  left: "50%",
  transform: "translate(-50%, -50%)",
  zIndex: 100,
  fontSize: "clamp(28px, 5vw, 48px)",
  margin: 0,
  fontFamily: "'Melodrama Light', sans-serif",
  fontWeight: 300,
  letterSpacing: "0.05em",
  textAlign: "center" as const,
  cursor: "pointer",
  transition: "opacity 0.3s ease, filter 0.3s ease",
};

interface SiteNameProps {
  textColor: string;
  hoverEffect?: "opacity" | "brightness";
  fadeIn?: boolean;
}

export default function SiteName({ textColor, hoverEffect = "opacity", fadeIn = false }: SiteNameProps) {
  const [showTitle, setShowTitle] = useState(!fadeIn);

  useEffect(() => {
    if (!fadeIn) return;
    const timer = setTimeout(() => setShowTitle(true), 250);
    return () => clearTimeout(timer);
  }, [fadeIn]);

  return (
    <Link href="/gallery" style={{ textDecoration: "none", color: "inherit" }}>
      <h1
        className={fadeIn && showTitle ? "fade-in" : ""}
        style={{
          ...SITE_NAME_STYLES,
          color: textColor,
          opacity: fadeIn ? (showTitle ? 1 : 0) : undefined,
        }}
        onMouseEnter={(e) => {
          if (hoverEffect === "brightness") {
            e.currentTarget.style.filter = "brightness(0.3)";
          } else {
            e.currentTarget.style.opacity = "0.7";
          }
        }}
        onMouseLeave={(e) => {
          if (hoverEffect === "brightness") {
            e.currentTarget.style.filter = "brightness(1)";
          } else {
            e.currentTarget.style.opacity = "1";
          }
        }}
      >
        Lucas W. Lorenzo
      </h1>
    </Link>
  );
}
