'use client';

import { useEffect } from "react";
import Image from "next/image";
import SiteName from "./components/SiteName";

export default function Home() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const scrollY = window.scrollY;
    html.style.overflow = "hidden";
    html.style.height = "100%";
    body.style.overflow = "hidden";
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overscrollBehavior = "none";
    body.style.touchAction = "none";
    return () => {
      html.style.overflow = "";
      html.style.height = "";
      body.style.overflow = "";
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overscrollBehavior = "";
      body.style.touchAction = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  return (
    <main style={{ 
      backgroundColor: "#000000",
      height: "100vh",
      width: "100%",
      maxWidth: "100%",
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
        width: "100%",
        height: "100%"
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
