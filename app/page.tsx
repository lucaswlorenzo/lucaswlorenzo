'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // Animation duration is 2.5s, so start at 0.5s to finish at 3s
    const timer = setTimeout(() => {
      setShowTitle(true);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ 
      backgroundColor: "#000000",
      minHeight: "100vh",
      width: "100vw",
      position: "relative",
      overflow: "hidden",
      padding: 0,
      margin: 0
    }}>
      {/* Title - Centered at top */}
      <Link href="/gallery" style={{ textDecoration: "none", color: "inherit" }}>
        <h1 
          className={showTitle ? "fade-in" : ""}
          style={{ 
            position: "absolute",
            top: "clamp(32px, 6vw, 64px)",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "clamp(28px, 5vw, 48px)", 
            margin: 0, 
            fontFamily: "'Melodrama Light', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.05em",
            color: "#ffffff",
            textAlign: "center",
            zIndex: 100,
            opacity: showTitle ? undefined : 0,
            cursor: "pointer",
            transition: "opacity 0.3s"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = showTitle ? "0.8" : "0"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = showTitle ? "1" : "0"}
        >
          Lucas W. Lorenzo
        </h1>
      </Link>

      {/* Full Height Image */}
      <div style={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "auto",
        height: "100%",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
      }}>
        <Image
          src="/media/landing/animal-epitaph.JPG"
          alt="Animal Epitaph"
          width={1200}
          height={1600}
          style={{
            width: "auto",
            height: "100vh",
            objectFit: "contain"
          }}
          priority
        />
      </div>
    </main>
  );
}
