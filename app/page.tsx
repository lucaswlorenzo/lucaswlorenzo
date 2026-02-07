'use client';

import Image from "next/image";
import SiteName from "./components/SiteName";

export default function Home() {
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
      <SiteName textColor="#ffffff" hoverEffect="brightness" fadeIn />

      {/* Full Screen Image */}
      <div style={{
        position: "absolute",
        inset: 0,
        width: "100vw",
        height: "100vh"
      }}>
        <Image
          src="/media/landing/website_landing_page2.png"
          alt="Landing"
          fill
          style={{
            objectFit: "cover"
          }}
          priority
        />
      </div>
    </main>
  );
}
