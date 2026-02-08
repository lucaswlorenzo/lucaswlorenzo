'use client';

import Image from "next/image";
import MenuDropdown from "../components/MenuDropdown";
import SiteName from "../components/SiteName";
import Footer from "../components/Footer";

export default function About() {
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

      <div style={{ flex: 1, maxWidth: 1200, margin: "0 auto", width: "100%", paddingLeft: "clamp(24px, 5vw, 80px)", paddingRight: "clamp(24px, 5vw, 80px)" }}>
        <section style={{ marginTop: 40 }}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: 40,
            alignItems: "stretch",
            flexWrap: "nowrap"
          }}>
            <div style={{
              flex: "0 0 auto",
              width: "clamp(200px, 32vw, 440px)",
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
            }}>
              <div>
                <Image
                  src="/media/About Page/headshots/Lucas_Headshots_September_2025-4.png"
                  alt="Lucas W. Lorenzo"
                  width={400}
                  height={500}
                  priority
                  unoptimized
                  quality={100}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover"
                  }}
                />
              </div>
              <div className="about-select-clients-narrow" style={{ textAlign: "center", marginTop: 40 }}>
                <h2 style={{ 
                  fontSize: 24, 
                  fontWeight: 500, 
                  marginBottom: 24,
                  fontFamily: "'Manrope Medium', sans-serif",
                  letterSpacing: "0.05em",
                  color: "#000000"
                }}>Select Clients</h2>
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "0 1.25em",
                  fontSize: 15,
                  fontFamily: "'Manrope Light', sans-serif",
                  fontWeight: 300,
                  letterSpacing: "0.02em",
                  color: "#000000"
                }}>
                  <span>Carhartt</span>
                  <span>Uniqlo</span>
                  <span>Rag & Bone</span>
                  <span>Cecilia</span>
                  <span>Free Agency</span>
                  <span>Industry of All Nations</span>
                  <span>Animal Epitaph</span>
                  <span>Naadam</span>
                </div>
              </div>
            </div>
            <div 
              className="about-text-column"
              style={{ 
                flex: "1 1 300px",
                minWidth: 0,
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div style={{ 
                fontSize: 15, 
                lineHeight: 1.5,
                fontFamily: "'Manrope Light', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.02em",
                color: "#000000"
              }} className="about-body-text">
                <h2 className="about-bio-heading" style={{ 
                  fontSize: 22, 
                  fontWeight: 500, 
                  marginBottom: 8,
                  fontFamily: "'Manrope Medium', sans-serif",
                  letterSpacing: "0.05em",
                  color: "#000000"
                }}>Bio</h2>
                <p style={{ marginBottom: 10 }}>
                  Lucas Lorenzo is an experimental fashion stylist and artist working across editorial, campaign, and branded productions. His practice is rooted in precise, narrative-driven styling that unites wardrobe and visual direction into a cohesive image language. He approaches each project with strong conceptual intent and careful execution, shaping clear visual stories with a distinct aesthetic. Additionally, he also designs and handcrafts sculptural headpieces as prop objects for fashion-forward, highly stylized shoots.
                </p>
                <p style={{ marginBottom: 10 }}>
                  He studied at Otis College of Art and Design and Pratt Institute and is now completing his BFA at Parsons School of Design, graduating next year. With a focus on fashion design, styling, photography, and integrated accessories, his education has developed a rigorous technical foundation and a multidisciplinary creative approach.
                </p>
                <h2 className="about-work-heading" style={{ 
                  fontSize: 22, 
                  fontWeight: 500, 
                  margin: "12px 0 8px 0",
                  fontFamily: "'Manrope Medium', sans-serif",
                  letterSpacing: "0.05em",
                  color: "#000000"
                }}>Work</h2>
                <p style={{ margin: 0 }}>
                  Lucas Lorenzo works fluidly across collaborative and independent productions, partnering with photographers, set designers, makeup artists, producers, and talent while also leading projects hands-on when full creative focus is needed. He brings a precise eye for visual cohesion and a process that is both structured and instinctive, grounded in planning, craft, and strong aesthetic judgment. His work translates abstract concepts into vivid, tactile scenes, shaping fashion imagery that balances mood, message, and narrative to create lasting, story-driven series and experiences.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-select-clients-wide" style={{ marginTop: 80, textAlign: "center" }}>
          <h2 style={{ 
            fontSize: 24, 
            fontWeight: 500, 
            marginBottom: 24,
            fontFamily: "'Manrope Medium', sans-serif",
            letterSpacing: "0.05em",
            color: "#000000"
          }}>Select Clients</h2>
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: "0 1.25em",
            fontSize: 15,
            fontFamily: "'Manrope Light', sans-serif",
            fontWeight: 300,
            letterSpacing: "0.02em",
            color: "#000000"
          }}>
            <span>Carhartt</span>
            <span>Uniqlo</span>
            <span>Rag & Bone</span>
            <span>Cecilia</span>
            <span>Free Agency</span>
            <span>Industry of All Nations</span>
            <span>Animal Epitaph</span>
            <span>Naadam</span>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
