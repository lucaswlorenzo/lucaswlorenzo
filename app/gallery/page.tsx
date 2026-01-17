'use client';

import Image from "next/image";
import Link from "next/link";

export default function Gallery() {
  // Placeholder for gallery images - you can replace these with actual images
  const galleryImages = [
    { id: 1, width: 400, height: 600, src: "/media/landing/animal-epitaph.JPG" },
    { id: 2, width: 500, height: 400, src: "/media/landing/animal-epitaph.JPG" },
    { id: 3, width: 350, height: 500, src: "/media/landing/animal-epitaph.JPG" },
    { id: 4, width: 450, height: 350, src: "/media/landing/animal-epitaph.JPG" },
    { id: 5, width: 400, height: 550, src: "/media/landing/animal-epitaph.JPG" },
    { id: 6, width: 500, height: 450, src: "/media/landing/animal-epitaph.JPG" },
    { id: 7, width: 350, height: 400, src: "/media/landing/animal-epitaph.JPG" },
    { id: 8, width: 450, height: 600, src: "/media/landing/animal-epitaph.JPG" },
    { id: 9, width: 400, height: 450, src: "/media/landing/animal-epitaph.JPG" },
    { id: 10, width: 500, height: 500, src: "/media/landing/animal-epitaph.JPG" },
  ];

  return (
    <main style={{ 
      backgroundColor: "#000000",
      minHeight: "100vh",
      width: "100vw",
      padding: "clamp(24px, 4vw, 48px)",
      paddingTop: "clamp(48px, 6vw, 80px)",
      margin: 0
    }}>
      {/* Navigation - Top Right */}
      <nav style={{
        position: "fixed",
        top: "clamp(24px, 4vw, 40px)",
        right: "clamp(24px, 4vw, 40px)",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        gap: "clamp(12px, 2vw, 20px)",
        alignItems: "flex-end",
        pointerEvents: "auto"
      }}>
        <Link 
          href="/work" 
          style={{ 
            fontSize: "clamp(14px, 1.5vw, 18px)",
            textDecoration: "none",
            color: "#ffffff",
            fontFamily: "'Melodrama Light', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.05em",
            opacity: 0.8,
            transition: "opacity 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}
        >
          Work
        </Link>
        <Link 
          href="/hands" 
          style={{ 
            fontSize: "clamp(14px, 1.5vw, 18px)",
            textDecoration: "none",
            color: "#ffffff",
            fontFamily: "'Melodrama Light', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.05em",
            opacity: 0.8,
            transition: "opacity 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}
        >
          Hands
        </Link>
        <Link 
          href="/about" 
          style={{ 
            fontSize: "clamp(14px, 1.5vw, 18px)",
            textDecoration: "none",
            color: "#ffffff",
            fontFamily: "'Melodrama Light', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.05em",
            opacity: 0.8,
            transition: "opacity 0.3s ease"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "0.8"}
        >
          About
        </Link>
      </nav>

      {/* Header */}
      <header style={{ 
        marginBottom: "clamp(48px, 8vw, 96px)",
        textAlign: "center"
      }}>
        <Link href="/" style={{ textDecoration: "none", color: "inherit" }}>
          <h1 style={{ 
            fontSize: "clamp(32px, 5vw, 56px)", 
            margin: 0, 
            fontFamily: "'Melodrama Light', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.05em",
            color: "#ffffff",
            cursor: "pointer",
            transition: "opacity 0.3s",
            display: "inline-block"
          }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = "0.7"}
          onMouseLeave={(e) => e.currentTarget.style.opacity = "1"}
          >
            Lucas W. Lorenzo
          </h1>
        </Link>
      </header>

      {/* Salon-style Gallery */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gap: "clamp(16px, 2vw, 24px)",
        maxWidth: "1600px",
        margin: "0 auto",
        gridAutoRows: "10px"
      }}>
        {galleryImages.map((image, index) => {
          // Create varied sizes for salon-style layout
          const rowSpan = Math.ceil(image.height / 10);
          const aspectRatio = image.width / image.height;
          
          return (
            <div
              key={image.id}
              style={{
                gridRowEnd: `span ${rowSpan}`,
                position: "relative",
                overflow: "hidden",
                cursor: "pointer",
                transition: "transform 0.3s ease, opacity 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.02)";
                e.currentTarget.style.opacity = "0.9";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.opacity = "1";
              }}
            >
              <Image
                src={image.src}
                alt={`Gallery image ${image.id}`}
                width={image.width}
                height={image.height}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block"
                }}
              />
            </div>
          );
        })}
      </div>
    </main>
  );
}
