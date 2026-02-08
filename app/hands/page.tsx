'use client';

import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import MenuDropdown from "../components/MenuDropdown";
import Footer from "../components/Footer";
import SiteName from "../components/SiteName";

const slides = [
  { src: "/media/hands/hands1.jpg", alt: "Hands" },
  { src: "/media/hands/hands2.jpg", alt: "Hands" },
  { src: "/media/hands/hands3.jpg", alt: "Hands" },
  { src: "/media/hands/hands4.jpg", alt: "Hands" },
  { src: "/media/hands/hands5.jpeg", alt: "Hands" },
];

const arrowStyle = {
  width: 48,
  height: 48,
  flexShrink: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "none",
  background: "none",
  padding: 0,
  outline: "none",
  color: "#000000",
  cursor: "pointer",
  transition: "opacity 0.2s ease",
};

const TRANSITION_DURATION = 600;
const AUTO_ADVANCE_INTERVAL = 3500;

// Preload all images to prevent flash on transition
function preloadImages() {
  slides.forEach((s) => {
    const img = new Image();
    img.src = s.src;
  });
}

export default function Hands() {
  const [currentIndex, setCurrentIndex] = useState(() =>
    Math.floor(Math.random() * slides.length)
  );
  const [transitionToIndex, setTransitionToIndex] = useState<number | null>(null);
  const scrollRestoreRef = useRef<number | null>(null);

  const isTransitioning = transitionToIndex !== null;
  const [nextImageVisible, setNextImageVisible] = useState(false);
  const nextImageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    preloadImages();
  }, []);

  useEffect(() => {
    if (transitionToIndex === null) {
      setNextImageVisible(false);
      nextImageRef.current = null;
      return;
    }
    setNextImageVisible(false);
    requestAnimationFrame(() => {
      if (nextImageRef.current?.complete) {
        setNextImageVisible(true);
      }
    });
    const fallback = setTimeout(() => setNextImageVisible(true), 100);
    return () => clearTimeout(fallback);
  }, [transitionToIndex]);

  const restoreScroll = useCallback((clear = true) => {
    if (scrollRestoreRef.current !== null) {
      window.scrollTo(0, scrollRestoreRef.current);
      if (clear) scrollRestoreRef.current = null;
    }
  }, []);

  const goToNext = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (transitionToIndex !== null) return;
    const next = (currentIndex + 1) % slides.length;
    scrollRestoreRef.current = window.scrollY;
    setTransitionToIndex(next);
    requestAnimationFrame(() => requestAnimationFrame(() => restoreScroll(false)));
    setTimeout(() => {
      setCurrentIndex(next);
      setTransitionToIndex(null);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          restoreScroll(false);
          scrollRestoreRef.current = null;
        })
      );
    }, TRANSITION_DURATION);
  }, [currentIndex, transitionToIndex, restoreScroll]);

  const goToPrevious = useCallback((e?: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();
    if (transitionToIndex !== null) return;
    const prev = (currentIndex - 1 + slides.length) % slides.length;
    scrollRestoreRef.current = window.scrollY;
    setTransitionToIndex(prev);
    requestAnimationFrame(() => requestAnimationFrame(() => restoreScroll(false)));
    setTimeout(() => {
      setCurrentIndex(prev);
      setTransitionToIndex(null);
      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          restoreScroll(false);
          scrollRestoreRef.current = null;
        })
      );
    }, TRANSITION_DURATION);
  }, [currentIndex, transitionToIndex, restoreScroll]);

  useLayoutEffect(() => {
    restoreScroll(false);
  });

  useEffect(() => {
    const interval = setInterval(goToNext, AUTO_ADVANCE_INTERVAL);
    return () => clearInterval(interval);
  }, [goToNext]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNext, goToPrevious]);

  return (
    <main style={{ 
      display: "flex",
      flexDirection: "column",
      minHeight: "100vh",
      padding: "clamp(24px, 4vw, 48px)",
      paddingTop: "clamp(96px, 14vw, 140px)",
      paddingLeft: "clamp(16px, 4vw, 180px)",
      paddingRight: "clamp(16px, 4vw, 180px)",
      width: "100%",
      maxWidth: "100%",
      position: "relative",
      backgroundColor: "#ffffff",
      margin: 0
    }}>
      <MenuDropdown textColor="#000000" />
      <SiteName textColor="#000000" />

      <div style={{ flex: 1, maxWidth: 1200, margin: "0 auto", width: "100%" }}>
        <section style={{ marginTop: 40 }}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "clamp(24px, 3vw, 40px)",
            alignItems: "flex-start",
            flexWrap: "wrap",
          }}>
            {/* Left: Header and description */}
            <div style={{
              flex: "1 1 300px",
              minWidth: 0,
            }}>
              <h2 style={{ 
                fontSize: 24, 
                fontWeight: 500, 
                marginBottom: 16,
                fontFamily: "'Manrope Medium', sans-serif",
                letterSpacing: "0.05em",
                color: "#000000"
              }}>Hands</h2>
              <p style={{ 
                fontSize: 15, 
                lineHeight: 1.6,
                fontFamily: "'Manrope Light', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.02em",
                color: "#000000",
                margin: 0,
                textAlign: "justify"
              }}>
                These are a behind-the-scenes study of process and precision. Across these images, my hands enter the frame as I adjust garments, refine details, and shape the final silhouette—small interventions that often make the difference between "good" and finished. These show a direct look at how I work on set: attentive, tactile, and intent on visual cohesion. It's a record of the touch-ups, fixes, and micro-decisions that bring an image into alignment, revealing the care and control behind each look and the standard I hold myself to in every production.
              </p>
            </div>

            {/* Right: Photo gallery - shifts below text when narrow */}
            <div style={{
              flex: "1 1 min(400px, 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 24,
              minWidth: 0,
            }}>
              <button
                type="button"
                onClick={(e) => goToPrevious(e)}
                aria-label="Previous image"
                style={arrowStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#000000" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="28 8 16 20 28 32" />
                </svg>
              </button>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: 700,
                  minHeight: 300,
                  lineHeight: 0,
                }}
              >
                {slides.map((slide, i) => {
                  const isCurrent = i === currentIndex;
                  const isTransitionTarget = i === transitionToIndex;
                  const isVisible =
                    (isCurrent && !isTransitioning) ||
                    (isCurrent && isTransitioning && !nextImageVisible) ||
                    (isTransitionTarget && isTransitioning && nextImageVisible);
                  return (
                    <img
                      key={slide.src}
                      ref={isTransitionTarget ? nextImageRef : null}
                      src={slide.src}
                      alt={slide.alt}
                      onLoad={isTransitionTarget ? () => setNextImageVisible(true) : undefined}
                      style={{
                        position: i === 0 ? "relative" : "absolute",
                        top: i === 0 ? undefined : 0,
                        left: i === 0 ? undefined : 0,
                        display: "block",
                        maxWidth: "100%",
                        width: "auto",
                        height: "auto",
                        maxHeight: "78vh",
                        opacity: isVisible ? 1 : 0,
                        pointerEvents: isVisible ? "auto" : "none",
                        transition: `opacity ${TRANSITION_DURATION}ms ease-in-out`,
                      }}
                    />
                  );
                })}
              </div>
              <button
                type="button"
                onClick={(e) => goToNext(e)}
                aria-label="Next image"
                style={arrowStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.7";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#000000" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="12 8 24 20 12 32" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
