'use client';

import { useMemo } from "react";
import Link from "next/link";
import MenuDropdown from "../components/MenuDropdown";
import Footer from "../components/Footer";

// Simple seeded random function for consistent randomness
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Consistent aspect ratio for all frames (3:4 portrait)
const FRAME_ASPECT_RATIO = 3 / 4;

// Multiple size variants for variety (maintaining 3:4 aspect ratio)
const SIZE_VARIANTS = [
  { baseWidth: 260, label: 'xsmall' },
  { baseWidth: 300, label: 'small' },
  { baseWidth: 320, label: 'medium-small' },
  { baseWidth: 340, label: 'medium' },
  { baseWidth: 380, label: 'medium-large' },
  { baseWidth: 420, label: 'large' }
];

// Placeholder for gallery images - all same crop, limited size variation
const galleryImages = Array.from({ length: 20 }, (_, i) => ({ id: i + 1 }));

export default function Gallery() {
  // Pre-calculate layout values for each image to keep them consistent
  const imageLayouts = useMemo(() => {
    const spacings = [20, 24, 28, 32, 36, 40]; // Spacing variation
    return galleryImages.map((image, index) => {
      const seed = index * 17 + image.id * 23; // Create unique seed per image
      
      // Assign one of 3 size variants
      const sizeVariant = SIZE_VARIANTS[Math.floor(seededRandom(seed) * SIZE_VARIANTS.length)];
      const baseWidth = sizeVariant.baseWidth;
      const baseHeight = baseWidth / FRAME_ASPECT_RATIO;
      
      // Spacing and positioning - brick pattern (alternating columns)
      const randomSpacing = [24, 28, 32, 36, 40, 44]; // Spacing variation
      const randomSpacingValue = randomSpacing[Math.floor(seededRandom(seed + 1) * randomSpacing.length)];
      
      // Brick pattern: alternate between left and right columns
      // Column 0 = left, Column 1 = right
      const column = index % 2;
      
      // Horizontal positions for brick pattern - with edge margins
      // Current gap between columns: 87% - 8% = 79%
      // Reduce gap by 75% = keep 25% = 79% * 0.25 = ~20% gap between column centers
      // Left column: 8% (leaves ~5% margin from left edge)
      // Right column: 28% (20% gap from left, leaves plenty of margin on right for navigation)
      const horizontalPositionPercent = column === 0 ? 8 : 28;
      
      // Vertical offset variation - allows images to overlap vertically (horizontal lines intersect both)
      // More variation to break checkerboard pattern while keeping images in proper sequence
      const randomVerticalOffset = Math.floor(seededRandom(seed + 3) * 100) - 50; // Moderate stagger (-50 to 50px) for overlap
      const randomRotation = (seededRandom(seed + 4) - 0.5) * 0.6; // Rotation for organic feel
      
      return {
        ...image,
        baseWidth,
        baseHeight,
        randomSpacing: randomSpacingValue,
        horizontalPositionPercent,
        randomVerticalOffset,
        randomRotation,
        column,
        index
      };
    });
  }, [galleryImages]);

  return (
    <main style={{ 
      backgroundColor: "#ffffff",
      minHeight: "100vh",
      width: "100vw",
      position: "relative",
      padding: "clamp(24px, 4vw, 48px)",
      paddingTop: "clamp(96px, 14vw, 140px)",
      margin: 0
    }}>
      <MenuDropdown textColor="#000000" />

      {/* Title - same size and placement as landing page */}
      <header style={{ 
        position: "absolute",
        top: "clamp(32px, 6vw, 64px)",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 100,
        margin: 0,
        padding: 0
      }}>
        <h1 style={{ 
          fontSize: "clamp(28px, 5vw, 48px)", 
          margin: 0, 
          fontFamily: "'Melodrama Light', sans-serif",
          fontWeight: 300,
          letterSpacing: "0.05em",
          color: "#000000",
          textAlign: "center"
        }}>
          Lucas W. Lorenzo
        </h1>
      </header>

      {/* Salon-style Gallery - Max 2 per row, intentional spacing, no overlap */}
      <div style={{
        position: "relative",
        width: "100%",
        margin: "0 auto",
        padding: "0 clamp(24px, 3vw, 48px)",
        paddingBottom: "clamp(40px, 5vw, 80px)"
      }}>
        <div style={{
          position: "relative",
          width: "100%",
          minHeight: `${galleryImages.length * 780 + 800}px`
        }}>
          {imageLayouts.map((image, index) => {
            // Responsive frame sizes - scale from small to large based on viewport
            // Calculate size multiplier based on baseWidth relative to smallest (260px)
            const sizeMultiplier = image.baseWidth / 260;
            // Base responsive width: scales based on size variant - LARGER to fill extended space
            // Formula: clamp(min, preferred (vw-based), max)
            const minWidth = Math.round(280 + (sizeMultiplier - 1) * 60); // Larger min based on variant
            const maxWidth = Math.round(400 + (sizeMultiplier - 1) * 300); // 400-700px range (much larger)
            const vwPreferred = Math.round(28 + sizeMultiplier * 6); // Larger vw values
            const responsiveBaseWidth = `clamp(${minWidth}px, ${vwPreferred}vw, ${maxWidth}px)`;
            
            // Calculate padding to account for hover scale (1.05 = 5% increase)
            // Use a percentage-based padding that scales with the frame size
            const hoverPaddingScale = `clamp(12px, 2vw, 30px)`;
            
            // Alternating columns with overlapping vertical space
            // Images should overlap vertically so horizontal lines always intersect both columns
            // Calculate frame index within its column (0, 1, 2, 3... for left and right)
            const columnIndex = Math.floor(index / 2);
            
            // Base spacing between same-column images - must prevent touching even with variations
            // Largest frame: ~560px height (420px/0.75), + max padding 60px = ~620px total height
            // With hover scale (5%): +31px = ~651px effective height
            // With ±50px random offset, need spacing to ensure no touch even in worst case
            // Spacing needed: 651px (frame with hover) + 50px (max negative offset) + 80px (safety) = ~780px
            // Use 780px base spacing to ensure frames never touch
            const baseVerticalSpacing = 780;
            
            // Left column starts at 0, right column starts with offset to create overlap
            // Offset allows vertical overlap while maintaining safe horizontal separation (25% vs 75%)
            const columnOffset = image.column === 0 ? 0 : 400;
            
            // Calculate vertical position: column offset + (column index * spacing) + variation
            // The randomVerticalOffset creates the overlap so horizontal lines intersect both columns
            // Base spacing of 750px ensures no touching even with ±50px random offset variation
            const verticalPosition = columnOffset + (columnIndex * baseVerticalSpacing) + image.randomVerticalOffset;
            
            return (
              <div
                key={image.id}
                style={{
                  position: "absolute",
                  left: `${image.horizontalPositionPercent}%`,
                  top: `${verticalPosition}px`,
                  padding: hoverPaddingScale,
                  boxSizing: "border-box",
                  transform: "translateX(-50%)",
                  zIndex: index
                }}
              >
                <div
                  style={{
                    width: responsiveBaseWidth,
                    aspectRatio: `${FRAME_ASPECT_RATIO}`,
                    position: "relative",
                    overflow: "visible",
                    cursor: "pointer",
                    transform: `rotate(${image.randomRotation}deg)`,
                    transformOrigin: "center center",
                    transition: "transform 0.4s ease, opacity 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
                    backgroundColor: "#000000",
                    border: "8px solid #000000",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = `rotate(${image.randomRotation * 0.5}deg) scale(1.05)`;
                    e.currentTarget.style.opacity = "0.95";
                    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = `rotate(${image.randomRotation}deg) scale(1)`;
                    e.currentTarget.style.opacity = "1";
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.15)";
                  }}
                >
                  {/* White frame placeholder */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </main>
  );
}
