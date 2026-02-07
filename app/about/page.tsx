'use client';

import Image from "next/image";
import MenuDropdown from "../components/MenuDropdown";
import SiteName from "../components/SiteName";
import Footer from "../components/Footer";

export default function About() {
  return (
    <main style={{ 
      padding: "clamp(24px, 4vw, 48px)",
      paddingTop: "clamp(96px, 14vw, 140px)",
      width: "100vw",
      position: "relative",
      backgroundColor: "#ffffff",
      minHeight: "100vh",
      margin: 0
    }}>
      <MenuDropdown textColor="#000000" />
      <SiteName textColor="#000000" />

      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <section style={{ marginTop: 40 }}>
          <div style={{
            display: "flex",
            flexDirection: "row",
            gap: "clamp(32px, 5vw, 64px)",
            alignItems: "flex-start",
            flexWrap: "nowrap"
          }}>
            <div style={{ 
              flex: "1 1 300px",
              minWidth: 0
            }}>
              <div style={{ 
                fontSize: 15, 
                lineHeight: 1.6,
                fontFamily: "'Manrope Light', sans-serif",
                fontWeight: 300,
                letterSpacing: "0.02em",
                color: "#000000"
              }} className="about-body-text">
                <h2 className="about-bio-heading" style={{ 
                  fontSize: 24, 
                  fontWeight: 300, 
                  marginBottom: 20,
                  fontFamily: "'Manrope Light', sans-serif",
                  letterSpacing: "0.05em",
                  color: "#000000"
                }}>Bio</h2>
                <p style={{ marginBottom: 24 }}>
                  Lucas Lorenzo is an experimental fashion stylist and artist working across editorial, campaign, and branded productions. His practice is rooted in precise, narrative-driven styling that unites wardrobe and visual direction into a cohesive image language. He approaches each project with strong conceptual intent and careful execution, shaping clear visual stories with a distinct aesthetic. Additionally, he also designs and handcrafts sculptural headpieces as prop objects for fashion-forward, highly stylized shoots.
                </p>
                <p style={{ marginBottom: 24 }}>
                  He studied at Otis College of Art and Design and Pratt Institute and is now completing his BFA at Parsons School of Design, graduating next year. With a focus on fashion design, styling, photography, and integrated accessories, his education has developed a rigorous technical foundation and a multidisciplinary creative approach.
                </p>
                <h2 className="about-work-heading" style={{ 
                  fontSize: 24, 
                  fontWeight: 300, 
                  margin: "24px 0 16px 0",
                  fontFamily: "'Manrope Light', sans-serif",
                  letterSpacing: "0.05em",
                  color: "#000000"
                }}>Work</h2>
                <p style={{ margin: 0 }}>
                  Lucas Lorenzo works fluidly across collaborative and independent productions, partnering with photographers, set designers, makeup artists, producers, and talent while also leading projects hands-on when full creative focus is needed. He brings a precise eye for visual cohesion and a process that is both structured and instinctive, grounded in planning, craft, and strong aesthetic judgment. His work translates abstract concepts into vivid, tactile scenes, shaping fashion imagery that balances mood, message, and narrative to create lasting, story-driven series and experiences.
                </p>
              </div>
            </div>
            <div style={{
              flex: "0 0 auto",
              width: "clamp(300px, 38vw, 440px)"
            }}>
              <Image
                src="/media/About Page/headshots/Lucas_Headshots_September_2025-4.png"
                alt="Lucas W. Lorenzo"
                width={400}
                height={500}
                unoptimized
                quality={100}
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "cover"
                }}
              />
            </div>
          </div>
        </section>

        <section style={{ marginTop: 80, textAlign: "center" }}>
          <h2 style={{ 
            fontSize: 24, 
            fontWeight: 300, 
            marginBottom: 24,
            fontFamily: "'Manrope Light', sans-serif",
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
