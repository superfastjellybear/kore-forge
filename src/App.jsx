import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";

const LOGO_FULL  = "/images/logos/logo-full.webp";
const LOGO_ICON  = "/images/logos/logo-icon.webp";
const LOGO_SFJ  = "/images/logos/logo-sfj.webp";
const LOGO_PIKK  = "/images/logos/logo-pikk.webp";
const LOGO_TWIN  = "/images/logos/logo-twin.webp";
const LOGO_EVOLVE  = "/images/logos/logo-evolve.webp";
const LOGO_HERO  = "/images/logos/logo-hero.webp";

// ─── Images Lexus Micro Concept ─────────────────────────────────────────────
const IMG_MICRO_1 = "/images/micro/micro-1.webp";
const IMG_MICRO_2 = "/images/micro/micro-2.webp";
const IMG_MICRO_3 = "/images/micro/micro-3.webp";
const IMG_MICRO_4 = "/images/micro/micro-4.webp";
const IMG_MICRO_5 = "/images/micro/micro-5.webp";
const IMG_MICRO_6 = "/images/micro/micro-6.webp";
const IMG_MICRO_7 = "/images/micro/micro-7.webp";
const IMG_MICRO_8 = "/images/micro/micro-8.webp";
const IMG_MICRO_9 = "/images/micro/micro-9.webp";


// ─── Images Imagery & Communication ──────────────────────────────────────────
const IMG_IMGERIE_1 = "/images/imgerie/imgerie-1.webp";
const IMG_IMGERIE_2 = "/images/imgerie/imgerie-2.webp";
const IMG_IMGERIE_3 = "/images/imgerie/imgerie-3.webp";
const IMG_IMGERIE_4 = "/images/imgerie/imgerie-4.webp";
const IMG_IMGERIE_5 = "/images/imgerie/imgerie-5.webp";
const IMG_IMGERIE_6 = "/images/imgerie/imgerie-6.webp";
const IMG_IMGERIE_7 = "/images/imgerie/imgerie-7.webp";
const IMG_IMGERIE_8 = "/images/imgerie/imgerie-8.webp";
const IMG_IMGERIE_9 = "/images/imgerie/imgerie-9.webp";
const IMG_IMGERIE_10 = "/images/imgerie/imgerie-10.webp";
const IMG_IMGERIE_11 = "/images/imgerie/imgerie-11.webp";
const IMG_IMGERIE_12 = "/images/imgerie/imgerie-12.webp";
const IMG_IMGERIE_13 = "/images/imgerie/imgerie-13.webp";
const IMGERIE_GALLERY = [IMG_IMGERIE_1, IMG_IMGERIE_2, IMG_IMGERIE_3, IMG_IMGERIE_4, IMG_IMGERIE_5, IMG_IMGERIE_6, IMG_IMGERIE_7, IMG_IMGERIE_8, IMG_IMGERIE_9, IMG_IMGERIE_10, IMG_IMGERIE_11, IMG_IMGERIE_12, IMG_IMGERIE_13];

const IMG_SALOMON_WIP = "/images/projects/salomon-wip.webp";

const AUDIO_SRC       = "/audio/midnight-focus.mp3";
const VIDEO_B64        = "/video/teaser.webm";
const IMG_UNO_1  = "/images/projects/uno-1.webp";
const IMG_UNO_2  = "/images/projects/uno-2.webp";
const IMG_UNO_3  = "/images/projects/uno-3.webp";
const IMG_UNO_4  = "/images/projects/uno-4.webp";
const IMG_EYE_1  = "/images/projects/eye-1.webp";
const IMG_EYE_2  = "/images/projects/eye-2.webp";
const IMG_EYE_3  = "/images/projects/eye-3.webp";
const IMG_EYE_4  = "/images/projects/eye-4.webp";
const IMG_EYE_5  = "/images/projects/eye-5.webp";
const IMG_EYE_6  = "/images/projects/eye-6.webp";
const IMG_CHR_1  = "/images/projects/chr-1.webp";
const IMG_CHR_2  = "/images/projects/chr-2.webp";
const IMG_CHR_3  = "/images/projects/chr-3.webp";
const IMG_CHR_4  = "/images/projects/chr-4.webp";
const IMG_CHR_5  = "/images/projects/chr-5.webp";
const IMG_CHR_6  = "/images/projects/chr-6.webp";
const IMG_TEASER_THUMB = "/images/showcase/teaser-thumb.webp";
const IMG_BT06_1  = "/images/projects/bt06-1.webp";
const IMG_BT06_2  = "/images/projects/bt06-2.webp";
const IMG_BT06_3  = "/images/projects/bt06-3.webp";
const IMG_BT06_4  = "/images/projects/bt06-4.webp";
const IMG_BT06_5  = "/images/projects/bt06-5.webp";
const IMG_5E_1   = "/images/projects/5e-1.webp";
const IMG_5E_2   = "/images/projects/5e-2.webp";
const IMG_5E_3   = "/images/projects/5e-3.webp";
const IMG_5E_4   = "/images/projects/5e-4.webp";
const IMG_5E_5   = "/images/projects/5e-5.webp";
const IMG_5E_6   = "/images/projects/5e-6.webp";
const IMG_CONCEPT  = "/images/showcase/concept.webp";
const IMG_3DMODEL  = "/images/showcase/3dmodel.webp";
const IMG_CMF  = "/images/showcase/cmf.webp";
const IMG_ELEC  = "/images/showcase/elec.webp";
const IMG_MODELLAB  = "/images/showcase/modellab.webp";
const IMG_SFJ_1  = "/images/entities/sfj-1.webp";
const IMG_SFJ_2  = "/images/entities/sfj-2.webp";
const IMG_SFJ_3  = "/images/entities/sfj-3.webp";
const IMG_SFJ_4  = "/images/entities/sfj-4.webp";
const IMG_SFJ_5  = "/images/entities/sfj-5.webp";
const IMG_SFJ_6  = "/images/entities/sfj-6.webp";
const IMG_SFJ_7  = "/images/entities/sfj-7.webp";
const IMG_SFJ_8  = "/images/entities/sfj-8.webp";
const IMG_SFJ_9  = "/images/entities/sfj-9.webp";
// Placeholders for other entities — replace when images arrive
const IMG_PIKK_1  = "/images/entities/pikk-1.webp";
const IMG_PIKK_2  = "/images/entities/pikk-2.webp";
const IMG_PIKK_3  = "/images/entities/pikk-3.webp";
const IMG_PIKK_4  = "/images/entities/pikk-4.webp";
const IMG_PIKK_5  = "/images/entities/pikk-5.webp";
const IMG_PIKK_6  = "/images/entities/pikk-6.webp";
const IMG_PIKK_7  = "/images/entities/pikk-7.webp";
const IMG_PIKK_8  = "/images/entities/pikk-8.webp";
const IMG_PIKK_9  = "/images/entities/pikk-9.webp";
const IMG_EVOLVE_1  = "/images/entities/evolve-1.webp";
const IMG_EVOLVE_2  = "/images/entities/evolve-2.webp";
const IMG_EVOLVE_3  = "/images/entities/evolve-3.webp";
const IMG_EVOLVE_4 = "/images/entities/evolve-4.webp";
const IMG_EVOLVE_5 = "/images/entities/evolve-5.webp";
const IMG_EVOLVE_6 = "/images/entities/evolve-6.webp";
const IMG_EVOLVE_7 = "/images/entities/evolve-7.webp";
const IMG_EVOLVE_8 = "/images/entities/evolve-8.webp";
const IMG_EVOLVE_9 = "/images/entities/evolve-9.webp";
const IMG_EVOLVE_10 = "/images/entities/evolve-10.webp";
const IMG_EVOLVE_11 = "/images/entities/evolve-11.webp";
const IMG_EVOLVE_12 = "/images/entities/evolve-12.webp";
const IMG_EVOLVE_13 = "/images/entities/evolve-13.webp";
const IMG_TWIN_1  = "/images/entities/twin-1.webp";
const IMG_TWIN_2  = "/images/entities/twin-2.webp";
const IMG_TWIN_3  = "/images/entities/twin-3.webp";
const IMG_TWIN_4 = "/images/entities/twin-4.webp";
const IMG_TWIN_5 = "/images/entities/twin-5.webp";
const IMG_TWIN_6 = "/images/entities/twin-6.webp";
const IMG_TWIN_7 = "/images/entities/twin-7.webp";
const IMG_TWIN_8 = "/images/entities/twin-8.webp";
const IMG_TWIN_9 = "/images/entities/twin-9.webp";
const IMG_TWIN_10 = "/images/entities/twin-10.webp";


// ─── TOKENS ───────────────────────────────────────────────────────────────────
const C = {
  bg:     "#0C0C0C",
  bg2:    "#141414",
  bg3:    "#1C1C1C",
  line:   "#232323",
  acid:   "#C5F000",
  white:  "#EFEFEF",
  mid:    "#888888",
  dim:    "#3A3A3A",
  sfj:    "#FF5E00",
  pikk:   "#00C4B7",
  evolve: "#D113D1",
  twin:   "#A0D400",
};

// ─── DATA ─────────────────────────────────────────────────────────────────────
const ENTITIES = [
  {
    id: "sfj", color: "#FF5E00", initials: "SJ", logo: "LOGO_SFJ",
    name: "Super Fast Jellybear",
    role: "Design & AI",
    xp: "25 years",
    industries: "Automotive, Mobility, Powersports, Marine",
    body: "Senior industrial design and creative direction. Concept generation from hand sketch to resolved direction, integrated AI workflows for exploration and production-quality imagery.",
    email: "contact@jelly-bear.com",
    gallery: [IMG_SFJ_1, IMG_SFJ_2, IMG_SFJ_3, IMG_SFJ_4, IMG_SFJ_5, IMG_SFJ_6, IMG_SFJ_7, IMG_SFJ_8, IMG_SFJ_9],
  },
  {
    id: "pikk", color: "#00C4B7", initials: "P²", logo: "LOGO_PIKK",
    name: "Pikk²",
    role: "3D",
    xp: "15 years",
    industries: "Automotive, Mobility, Consumer product",
    body: "From polygonal concept model to Class-A surface data. Physical prototype follow-through, CNC preparation, photorealistic CGI and studio animation.",
    email: "contact@pikk2.com",
    gallery: [IMG_PIKK_1, IMG_PIKK_2, IMG_PIKK_3, IMG_PIKK_4, IMG_PIKK_5, IMG_PIKK_6, IMG_PIKK_7, IMG_PIKK_8, IMG_PIKK_9],
  },
  {
    id: "evolve", color: "#D113D1", initials: "EV", logo: "LOGO_EVOLVE",
    name: "Evolve",
    role: "CMF & Graphic Design",
    xp: "25 years",
    industries: "Automotive, Fashion, Consumer goods",
    body: "Colour, material and finish strategy from concept to production validation. Visual identity, graphic assets, pattern and livery design.",
    email: "contact@evolve.com",
    gallery: [IMG_EVOLVE_1, IMG_EVOLVE_2, IMG_EVOLVE_3, IMG_EVOLVE_4, IMG_EVOLVE_5, IMG_EVOLVE_6, IMG_EVOLVE_7, IMG_EVOLVE_8, IMG_EVOLVE_9, IMG_EVOLVE_10, IMG_EVOLVE_11, IMG_EVOLVE_12, IMG_EVOLVE_13],
  },
  {
    id: "twin", color: "#A0D400", initials: "TC", logo: "LOGO_TWIN",
    name: "Twin Core",
    role: "Electronics & Integration",
    xp: "20 years",
    industries: "Mobility, Industrial, Embedded systems",
    body: "Embedded electronics designed and integrated on-site. Battery management, concept lighting systems, HMI, firmware and full-system validation.",
    email: "contact@twin-core.com",
    gallery: [IMG_TWIN_1, IMG_TWIN_2, IMG_TWIN_3, IMG_TWIN_4, IMG_TWIN_5, IMG_TWIN_6, IMG_TWIN_7, IMG_TWIN_8, IMG_TWIN_9, IMG_TWIN_10],
  },
];

const PIPELINE = [
  { label: "Concept",      detail: "Sketch, AI exploration, Direction" },
  { label: "3D Model",     detail: "Polygonal, Surface, Class-A" },
  { label: "CMF",          detail: "Colour, Material, Finish" },
  { label: "Electronics",  detail: "Embedded, HMI, Firmware" },
  { label: "Model Lab",    detail: "From validation tool to exhibition piece" },
];

const CASES = [
  {
    type: "Concept Study",
    title: "Porsche Retrofit, Styling & Feasibility Study",
    desc: "Complete styling and feasibility study for a heritage Porsche retrofit. Design leadership by Alan Derosier. Delivered as sketch direction, Class A surface data, 3D model, and photorealistic imagery. Scale model by Model Lab.",
    entities: ["pikk", "sfj"],
    gallery: [IMG_UNO_1, IMG_UNO_2, IMG_UNO_3, IMG_UNO_4],
  },
  {
    type: "Full Development Program",
    title: "Rocket One — Concept Bike, Sketch to Prototype",
    desc: "Complete design and development program for Eyelights. Design leadership by Alan Derosier. Sketch direction, 3D development, Class A surfacing, prototype parts, custom lighting system, headlamp concept, functional concept bike with associated helmet, final imagery, and logotype. Every Kore Forge entity contributed.",
    entities: ["sfj", "pikk", "evolve", "twin"],
    gallery: [IMG_EYE_1, IMG_EYE_2, IMG_EYE_3, IMG_EYE_4, IMG_EYE_5, IMG_EYE_6],
  },
  {
    type: "Full Development Program",
    title: "Electric Mobility Platform, Sketch to Scale-1 Prototype",
    desc: "End-to-end program for a light electric mobility platform designed for outdoor and off-road use. From initial design direction and CMF to Class A surfacing, mechanical and electronic pre-studies, and a full-scale physical prototype.",
    entities: ["sfj", "pikk", "evolve", "twin"],
    gallery: [IMG_SALOMON_WIP],
  },
];

// ─── RESPONSIVE HOOK ─────────────────────────────────────────────────────────
function useBreakpoint() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const fn = () => setW(window.innerWidth);
    window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);
  return { isMobile: w < 768, isTablet: w < 1100, w };
}

// ─── REVEAL ───────────────────────────────────────────────────────────────────
function Reveal({ children, delay = 0, y = 24, style = {} }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} style={{ textAlign: "left", ...style }}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
}

// ─── NAV ──────────────────────────────────────────────────────────────────────
function Nav({ audioRef, audioPlaying, setAudioPlaying }) {
  const scroll = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  const { isMobile } = useBreakpoint();
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    audioRef.current = new Audio(AUDIO_SRC);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.35;
    return () => { audioRef.current.pause(); audioRef.current = null; };
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;
    if (audioPlaying) {
      audioRef.current.pause();
      setAudioPlaying(false);
    } else {
      audioRef.current.play();
      setAudioPlaying(true);
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.2 }}
      style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, height: 60, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 48px", background: "rgba(12,12,12,0.88)", backdropFilter: "blur(20px)", borderBottom: "1px solid #232323" }}>
      <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: 10 }}>
        <img src={LOGO_ICON} alt="Kore Forge" style={{ height: 30, display: "block" }} />
      </button>
      <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
        <div style={{ display: isMobile ? "none" : "flex", gap: 32, alignItems: "center" }}>
          {[["Expertise", "pipeline"], ["Collective", "collective"], ["Model Lab", "modellab"], ["Projects", "projects"], ["Contact", "contact"]].map(([label, id]) => (
            <button key={id} onClick={() => scroll(id)}
              style={{ background: "none", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#CCCCCC", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#EFEFEF"}
              onMouseLeave={e => e.target.style.color = "#888888"}>
              {label}
            </button>
          ))}
        </div>
        <button onClick={toggleSound}
          title={audioPlaying ? "Mute" : "Sound on"}
          style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 8px", display: "flex", alignItems: "center", gap: 6, opacity: audioPlaying ? 1 : 0.4, transition: "opacity 0.2s" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={audioPlaying ? "#C5F000" : "#AAAAAA"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            {audioPlaying ? (
              <>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              </>
            ) : (
              <line x1="23" y1="9" x2="17" y2="15" />
            )}
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}

// ─── HERO ─────────────────────────────────────────────────────────────────────
function Hero() {
  const { isMobile } = useBreakpoint();
  return (
    <section style={{ minHeight: "100vh", background: "#0C0C0C", display: "flex", flexDirection: "column", justifyContent: "center", padding: isMobile ? "80px 20px 60px" : "80px 48px 80px", position: "relative", overflow: "hidden" }}>

      {/* Hero background image — replace src with your image in public/ */}
      <div style={{ position: "absolute", inset: 0, background: "#0C0C0C", zIndex: 0 }} />

      {/* Animated background shapes */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        style={{ position: "absolute", top: "-10%", right: "-5%", width: 400, height: 400, background: "radial-gradient(circle, rgba(255,94,0,0.08) 0%, transparent 70%)", borderRadius: "50%", zIndex: 1, pointerEvents: "none" }}
      />
      <motion.div
        animate={{ y: [0, 30, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{ position: "absolute", bottom: "-15%", left: "-5%", width: 350, height: 350, background: "radial-gradient(circle, rgba(0,196,183,0.08) 0%, transparent 70%)", borderRadius: "50%", zIndex: 1, pointerEvents: "none" }}
      />
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ position: "absolute", top: "20%", left: "-10%", width: 300, height: 300, background: "radial-gradient(circle, rgba(160,212,0,0.06) 0%, transparent 70%)", borderRadius: "50%", zIndex: 1, pointerEvents: "none" }}
      />

      {/* Acid bar left */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "#C5F000", zIndex: 3 }} />

      {/* Ghost FORGE behind everything */}
      <div style={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%, -50%)", fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(140px, 22vw, 340px)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.05em", color: "rgba(197,240,0,0.03)", pointerEvents: "none", userSelect: "none", whiteSpace: "nowrap" }}>
        KORE FORGE
      </div>

      {/* Main content, vertically centered, left-aligned */}
      <div style={{ paddingLeft: isMobile ? 20 : 44, position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: 0 }}>

        {/* Logo block: icon alone, full impact */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", alignItems: "center", gap: "clamp(20px, 3vw, 44px)", marginBottom: "clamp(32px, 5vh, 56px)" }}>

          {/* Picto X, large */}
          <img src={LOGO_HERO} alt="Kore Forge" style={{ height: "clamp(120px, 18vw, 240px)", display: "block", flexShrink: 0 }} />
        </motion.div>

        {/* Divider line */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          style={{ height: 1, background: "#232323", marginBottom: "clamp(24px, 3.5vh, 40px)", maxWidth: 720 }}
        />

        {/* Tagline + descriptor side by side */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          style={{ display: "flex", alignItems: "flex-start", gap: "clamp(32px, 6vw, 96px)", flexWrap: "wrap", maxWidth: 820 }}>

          <div>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C5F000", marginBottom: 10 }}>
              Automotive, Mobility, Product Design
            </div>
            <p style={{ fontSize: "clamp(15px, 1.4vw, 18px)", color: "#CCCCCC", lineHeight: 1.0, fontStyle: "italic", fontWeight: 300 }}>
              A curated collective, from sketch to prototype.
            </p>
          </div>

          <p style={{ fontSize: "clamp(13px, 1.1vw, 15px)", color: "#CCCCCC", maxWidth: 380, lineHeight: 1.75 }}>
            One brief, one contract, one point of contact. Independent specialists assembled exactly around your project, no more, no less.
          </p>
        </motion.div>

        {/* Discipline pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.15 }}
          style={{ display: "flex", gap: 3, flexWrap: "wrap", marginTop: "clamp(28px, 4vh, 48px)" }}>
          {["Design & AI", "3D & Engineering", "CMF", "Electronics", "Model Lab"].map((t) => (
            <div key={t} style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", padding: "9px 16px", border: "1px solid #232323", color: "#BBBBBB", borderRadius: 2 }}>{t}</div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─── PIPELINE ─────────────────────────────────────────────────────────────────

const PIPELINE_VISUALS = {
  "Concept":     { bg: `url(${IMG_CONCEPT}) center/cover no-repeat`,   label: "Sketch, AI exploration, ideation" },
  "3D Model":    { bg: `url(${IMG_3DMODEL}) center/cover no-repeat`,   label: "Surface modelling, Class-A, digital prototype" },
  "CMF":         { bg: `url(${IMG_CMF}) center/cover no-repeat`,       label: "Colour strategy, material sourcing, finish validation" },
  "Electronics": { bg: `url(${IMG_ELEC}) center/cover no-repeat`,      label: "Embedded systems, HMI, firmware, on-site integration" },
  "Model Lab":   { bg: `url(${IMG_MODELLAB}) center/cover no-repeat`,  label: "From validation tool to exhibition piece" },
};

function Pipeline() {
  const [active, setActive] = useState(null);
  const { isMobile, isTablet } = useBreakpoint();
  const activeData = active !== null ? PIPELINE_VISUALS[PIPELINE[active].label] : null;

  return (
    <section id="pipeline" style={{ borderTop: "1px solid #232323", position: "relative", overflow: "hidden" }}>

      {/* Background image */}
      <div style={{
        position: "absolute", inset: 0,
        background: activeData ? activeData.bg : "#141414",
        transition: "background 0.5s ease",
        zIndex: 0,
      }} />
      {/* Dark overlay for text readability */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: activeData ? "rgba(0,0,0,0.45)" : "transparent",
        transition: "background 0.4s ease",
        pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 2, padding: isMobile ? "64px 20px" : "100px 48px" }}>
        <Reveal>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C5F000", marginBottom: 16 }}>Full Spectrum Coverage</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.0, color: "#FFFFFF", marginBottom: 16 }}>
            Everything your project needs.<br />Nothing it doesn't.
          </h2>
          <div style={{ height: 48, marginBottom: 40, display: "flex", alignItems: "center" }}>
            <motion.p
              key={active}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              style={{ fontSize: 16, color: active !== null ? "#CCCCCC" : "#555", maxWidth: 520, lineHeight: 1.7 }}>
              {active !== null ? activeData.label : "Hover a discipline to explore."}
            </motion.p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "repeat(3, 1fr)" : "repeat(5, 1fr)", gap: 2, marginBottom: 2 }}>
            {PIPELINE.map((step, i) => {
              const isAct = active === i;
              return (
                <motion.div key={step.label}
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                  animate={{ background: isAct ? "#C5F000" : "rgba(20,20,20,0.75)" }}
                  transition={{ duration: 0.2 }}
                  style={{ padding: "28px 20px 24px", cursor: "default", borderTop: `3px solid ${isAct ? "#C5F000" : "#333"}`, backdropFilter: "blur(4px)" }}>
                  <motion.div animate={{ color: isAct ? "#111" : "#FFFFFF" }}
                    style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 700, marginBottom: 8 }}>
                    {step.label}
                  </motion.div>
                  <motion.div animate={{ color: isAct ? "#333" : "#888" }}
                    style={{ fontSize: 12, lineHeight: 1.6 }}>
                    {step.detail}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 2 }}>
            <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, #C5F000, transparent)" }} />
            <div style={{ fontSize: 11, color: "#C5F000", marginLeft: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Design development. Physical validation. One collective.</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
// ─── COLLECTIVE ───────────────────────────────────────────────────────────────
function EntityRow({ e, isMobile }) {
  const logoSrc = e.id === "sfj" ? LOGO_SFJ : e.id === "pikk" ? LOGO_PIKK : e.id === "twin" ? LOGO_TWIN : LOGO_EVOLVE;
  const isSFJ = e.id === "sfj";
  const isTwin = e.id === "twin";
  const isEvolve = e.id === "evolve";
  const [hovered, setHovered] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const timerRef = useRef(null);
  const gallery = (e.gallery || []).filter(Boolean);
  const hasGallery = gallery.length > 0;

  const handleEnter = () => {
    setHovered(true);
    if (!hasGallery) return;
    setSlideIndex(0);
    timerRef.current = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % gallery.length);
    }, 1800);
  };

  const handleLeave = () => {
    setHovered(false);
    clearInterval(timerRef.current);
    setSlideIndex(0);
  };

  const currentImg = hasGallery ? gallery[slideIndex % gallery.length] : null;

  // Image zone: fixed 480x280px, always 16/9-ish, crop center
  const IMG_W = 480;
  const IMG_H = 280;

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ background: "#1C1C1C", display: "flex", borderLeft: `4px solid ${e.color}`, overflow: "hidden", minHeight: IMG_H }}>

      {/* Logo column */}
      <div style={{ flexShrink: 0, width: isMobile ? 72 : 200, borderRight: "1px solid #232323", display: "flex", alignItems: "center", justifyContent: "center", padding: isMobile ? "16px 10px" : "24px 20px", background: hovered ? "#222" : "#161616", transition: "background 0.3s" }}>
        <img src={logoSrc} alt={e.name}
          style={{
            maxWidth: isMobile ? 48 : isSFJ ? 130 : isTwin ? 150 : isEvolve ? 110 : 190,
            maxHeight: isMobile ? (isSFJ ? 48 : isTwin ? 48 : isEvolve ? 48 : 30) : (isSFJ ? 130 : isTwin ? 115 : isEvolve ? 140 : 70),
            objectFit: "contain", display: "block"
          }} />
      </div>

      {/* Text column — fills remaining space, shrinks when gallery open */}
      <motion.div
        animate={{ flex: hovered && hasGallery && !isMobile ? "0 0 auto" : "1 1 auto", width: hovered && hasGallery && !isMobile ? "calc(100% - 200px - " + IMG_W + "px)" : "auto" }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{ padding: isMobile ? "20px 16px" : "28px 32px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 10, overflow: "hidden", minWidth: 0, flex: 1 }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: e.color, letterSpacing: "0.1em", textTransform: "uppercase" }}>{e.role}</div>
        <div style={{ fontSize: 11, color: "#555" }}>{e.xp} experience &nbsp;&middot;&nbsp; {e.industries}</div>
        <p style={{ fontSize: 13, color: "#CCCCCC", lineHeight: 1.8 }}>{e.body}</p>
      </motion.div>

      {/* Image zone — fixed size, slides in */}
      {hasGallery && !isMobile && (
        <motion.div
          animate={{ width: hovered ? IMG_W : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          style={{ flexShrink: 0, overflow: "hidden", position: "relative", height: IMG_H, alignSelf: "center", borderLeft: hovered ? "1px solid #232323" : "none" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={slideIndex}
              initial={{ opacity: 0, scale: 1.03 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              style={{ position: "absolute", inset: 0, backgroundImage: `url(${currentImg})`, backgroundSize: "cover", backgroundPosition: "center", width: IMG_W, height: IMG_H }}>
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(28,28,28,0.4) 0%, transparent 25%)" }} />
            </motion.div>
          </AnimatePresence>
          {/* Dots */}
          <div style={{ position: "absolute", bottom: 10, right: 12, display: "flex", gap: 5, zIndex: 10 }}>
            {gallery.map((_, di) => (
              <div key={di} style={{ width: 5, height: 5, borderRadius: "50%", background: di === slideIndex % gallery.length ? "#C5F000" : "rgba(255,255,255,0.25)", transition: "background 0.3s" }} />
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}

function Collective() {
  const { isMobile } = useBreakpoint();

  return (
    <section id="collective" style={{ background: "#0C0C0C", borderTop: "1px solid #232323", padding: isMobile ? "64px 20px" : "100px 48px" }}>
      <Reveal>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C5F000", marginBottom: 16 }}>The Collective</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.0, color: "#FFFFFF", marginBottom: 16 }}>
          Four independent specialists.<br />One unified delivery.
        </h2>
        <p style={{ fontSize: 16, color: "#CCCCCC", maxWidth: 560, lineHeight: 1.75, marginBottom: 72 }}>
          Each entity is a senior independent studio with deep expertise in its domain. Not a network of generalists — specialists who have spent careers in the automotive and mobility industry.
        </p>
      </Reveal>

      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {ENTITIES.map((e, i) => (
          <Reveal key={e.id} delay={i * 0.08}>
            <EntityRow e={e} isMobile={isMobile} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
// ─── WHAT YOU CAN ORDER ─────────────────────────────────────────────────────────
function WhatYouCanOrder() {
  const { isMobile, isTablet } = useBreakpoint();

  const offerings = [
    { title: "Visuals & Design", items: "Concept sketches, Realistic renders, Close-up visuals, Presentation videos, Style explorations" },
    { title: "Digital Models", items: "Polygonal models, Surface models, Class A & B data, Digital prototypes" },
    { title: "CMF", items: "CMF strategy, Colour development, Material sourcing, Graphic assets, Pattern and logotype" },
    { title: "HMI UX/UI", items: "UX research, Interaction design, Graphic interface design, Wireframing, Functional prototyping, UI implementation" },
    { title: "Physical Production", items: "CNC milled parts, 3D printed parts, Laser cutting, Covering, Printing, Adhesive transfers" },
    { title: "Assembly & Prototyping", items: "Concept assembly, Scale models, Partner network coordination, Workshop prototype assembly follow-up, Design proof-of-concept mock-up" },
    { title: "Electronics & Systems", items: "Battery management, Lighting concept, Software & firmware, HMI systems, On-site integration" },
    { title: "Imagery & Communication", items: "Photorealistic 3D renders, Studio animations, Visual storytelling assets, Storyboard" },
  ];

  return (
    <section id="order" style={{ background: "#141414", borderTop: "1px solid #232323", padding: isMobile ? "64px 20px" : "100px 48px" }}>
      <Reveal>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C5F000", marginBottom: 16 }}>What You Can Order</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.0, color: "#FFFFFF", marginBottom: 24 }}>
          Everything your project needs.<br />Nothing it doesn't.
        </h2>
        <p style={{ fontSize: 16, color: "#CCCCCC", maxWidth: 660, lineHeight: 1.8, marginBottom: 64 }}>
          You engage only the phases your project requires, assembled and coordinated as one.
        </p>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)", gap: 2 }}>
        {offerings.map((o, i) => (
          <Reveal key={o.title} delay={i * 0.06}>
            <div style={{ background: "#1C1C1C", padding: "28px 24px 32px", height: "100%", borderTop: "3px solid #C5F000" }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 700, color: "#EFEFEF", marginBottom: 14, lineHeight: 1.25 }}>{o.title}</div>
              <p style={{ fontSize: 13, color: "#CCCCCC", lineHeight: 1.85 }}>{o.items}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ─── CASES ────────────────────────────────────────────────────────────────────
function CaseCard({ c, expanded, onToggle, isMobile, isTablet }) {
  const gallery = (c.gallery || []).filter(Boolean);
  const hasGallery = gallery.length > 0;
  const [slideIndex, setSlideIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!hasGallery) return;
    timerRef.current = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % gallery.length);
    }, 2200);
    return () => clearInterval(timerRef.current);
  }, [gallery.length, hasGallery]);

  const currentImg = hasGallery ? gallery[slideIndex % gallery.length] : null;
  const imgHeight = expanded ? 380 : 220;

  return (
    <motion.div
      layout
      onClick={onToggle}
      style={{
        background: "#1C1C1C",
        display: "flex",
        flexDirection: expanded && !isMobile ? "row" : "column",
        gridColumn: expanded && !isMobile ? "span 2" : "span 1",
        overflow: "hidden",
        border: expanded ? "1px solid #333" : "1px solid transparent",
        transition: "border 0.3s",
      }}>

      {/* Image zone */}
      <motion.div
        layout
        style={{
          flexShrink: 0,
          width: expanded && !isMobile ? "55%" : "100%",
          height: expanded && !isMobile ? "auto" : imgHeight,
          minHeight: imgHeight,
          background: "#0C0C0C",
          position: "relative",
          overflow: "hidden",
        }}>
        {hasGallery ? (
          <>
            <img src={currentImg} alt="Case visual" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.6s ease" }} />
            <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 4 }}>
              {gallery.map((_, di) => (
                <div key={di} style={{ width: 5, height: 5, borderRadius: "50%", background: di === slideIndex % gallery.length ? "#C5F000" : "rgba(255,255,255,0.25)", transition: "background 0.3s" }} />
              ))}
            </div>
            {expanded && (
              <div style={{ position: "absolute", top: 12, right: 12, fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", color: "#C5F000", background: "rgba(0,0,0,0.6)", padding: "4px 8px", borderRadius: 2 }}>
                {slideIndex + 1} / {gallery.length}
              </div>
            )}
          </>
        ) : (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
            <span style={{ fontSize: 11, color: "#AAAAAA", letterSpacing: "0.15em", textTransform: "uppercase" }}>Visual to come</span>
          </div>
        )}
      </motion.div>

      {/* Text zone */}
      <div style={{ padding: expanded && !isMobile ? "36px 40px" : "28px 28px 36px", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000", marginBottom: 10 }}>{c.type}</div>
        <div style={{ fontSize: expanded ? 22 : 17, fontWeight: 700, color: "#EFEFEF", marginBottom: 14, lineHeight: 1.25, transition: "font-size 0.3s" }}>{c.title}</div>
        <p style={{ fontSize: 14, color: "#CCCCCC", lineHeight: 1.8, flex: 1, marginBottom: 24 }}>{c.desc}</p>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ fontSize: 11, color: "#AAAAAA", letterSpacing: "0.08em", textTransform: "uppercase", marginRight: 4 }}>Team</span>
          {c.entities.map(id => {
            const e = ENTITIES.find(x => x.id === id);
            const logoSrc = e.id === "sfj" ? LOGO_SFJ : e.id === "pikk" ? LOGO_PIKK : e.id === "twin" ? LOGO_TWIN : LOGO_EVOLVE;
            const isSFJ = e.id === "sfj";
            const isTwin = e.id === "twin";
            const isEvolve = e.id === "evolve";
            return (
              <div key={id} title={e.name}
                style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", gap: 6, padding: "0 8px", height: 40 }}>
                <img src={logoSrc} alt={e.name}
                  style={{ maxHeight: isSFJ ? 28 : isTwin ? 27 : isEvolve ? 32 : 20, maxWidth: isSFJ ? 28 : isTwin ? 48 : isEvolve ? 26 : 80, objectFit: "contain", display: "block" }} />
                <div style={{ width: "100%", height: 2, background: e.color, borderRadius: 1, flexShrink: 0 }} />
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

// ─── CASES ────────────────────────────────────────────────────────────────────
function Cases() {
  const { isMobile, isTablet } = useBreakpoint();

  return (
    <section id="cases" style={{ background: "#141414", borderTop: "1px solid #232323", padding: isMobile ? "64px 20px" : "100px 48px" }}>
      <Reveal>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C5F000", marginBottom: 16 }}>Typical Engagements</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.0, color: "#FFFFFF", marginBottom: 64 }}>
          How we work<br />in practice.
        </h2>
      </Reveal>
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: 2 }}>
        {CASES.map((c, i) => (
          <CaseCard key={c.title} c={c} expanded={false} onToggle={() => {}} isMobile={isMobile} isTablet={isTablet} />
        ))}
      </div>
    </section>
  );
}

const FIVEE_GALLERY = [IMG_5E_1, IMG_5E_2, IMG_5E_3, IMG_5E_4, IMG_5E_5, IMG_5E_6];


// ─── Lexus Micro Concept Card ─────────────────────────────────────────────────
const MICRO_IMAGES = [IMG_MICRO_1, IMG_MICRO_2, IMG_MICRO_3, IMG_MICRO_4, IMG_MICRO_5, IMG_MICRO_6, IMG_MICRO_7, IMG_MICRO_8, IMG_MICRO_9];

const MICRO_LABELS = [
  "Hero Visual — Lexus badge infinity mirror",
  "3/4 Front View — Final render",
  "3/4 Rear View — Final render",
  "Full wireframe — Class A & B surfaces",
  "Technical detail — Wheel bay components",
  "Parts breakdown — Color & material coding",
  "Electronics — LED matrix & PCB prototypes",
  "Interior — Premium cabin experience",
  "Open configuration — Access & boarding"
];

function ImgerieCard({ expanded, onToggle }) {
  return (
    <div onClick={onToggle} style={{ background: "#1C1C1C", cursor: "pointer", overflow: "hidden", border: expanded ? "1px solid #C5F000" : "1px solid transparent", transition: "border 0.3s" }}>
      <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
        <img src={IMGERIE_GALLERY[0]} alt="Imagery & Communication" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.5)", borderRadius: 2, padding: "3px 8px", fontSize: 10, color: expanded ? "#C5F000" : "#AAAAAA", letterSpacing: "0.1em" }}>
          {expanded ? "↑ CLOSE" : "↓ MORE"}
        </div>
      </div>
      <div style={{ padding: "20px 24px 28px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000", marginBottom: 6 }}>Imagery & Communication</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#EFEFEF" }}>Hero Visuals</div>
      </div>
    </div>
  );
}

function LexusMicroCard({ expanded, onToggle }) {
  return (
    <div onClick={onToggle} style={{ background: "#1C1C1C", cursor: "pointer", overflow: "hidden", border: expanded ? "1px solid #C5F000" : "1px solid transparent", transition: "border 0.3s" }}>
      <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
        <img src={MICRO_IMAGES[0]} alt="Lexus Micro Concept" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.5)", borderRadius: 2, padding: "3px 8px", fontSize: 10, color: expanded ? "#C5F000" : "#AAAAAA", letterSpacing: "0.1em" }}>
          {expanded ? "↑ CLOSE" : "↓ MORE"}
        </div>
      </div>
      <div style={{ padding: "20px 24px 28px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000", marginBottom: 6 }}>Full Development Program</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#EFEFEF" }}>Lexus Micro Concept</div>
      </div>
    </div>
  );
}

function FiveECard({ expanded, onToggle }) {
  return (
    <div onClick={onToggle} style={{ background: "#1C1C1C", cursor: "pointer", overflow: "hidden", border: expanded ? "1px solid #C5F000" : "1px solid transparent", transition: "border 0.3s" }}>
      <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
        <img src={FIVEE_GALLERY[0]} alt="5 Mouvements × Renault 5" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.5)", borderRadius: 2, padding: "3px 8px", fontSize: 10, color: expanded ? "#C5F000" : "#AAAAAA", letterSpacing: "0.1em" }}>
          {expanded ? "↑ CLOSE" : "↓ MORE"}
        </div>
      </div>
      <div style={{ padding: "20px 24px 28px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000", marginBottom: 6 }}>CMF & Graphic Production</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#EFEFEF" }}>5 Mouvements × Renault 5</div>
      </div>
    </div>
  );
}

// ─── BT-06 CARD ───────────────────────────────────────────────────────────────
const BT06_GALLERY = [IMG_BT06_1, IMG_BT06_2, IMG_BT06_3, IMG_BT06_4, IMG_BT06_5];

function BT06Card({ expanded, onToggle }) {
  return (
    <div onClick={onToggle} style={{ background: "#1C1C1C", cursor: "pointer", overflow: "hidden", border: expanded ? "1px solid #C5F000" : "1px solid transparent", transition: "border 0.3s" }}>
      <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
        <img src={BT06_GALLERY[0]} alt="Blacktrack BT-06" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.5)", borderRadius: 2, padding: "3px 8px", fontSize: 10, color: expanded ? "#C5F000" : "#AAAAAA", letterSpacing: "0.1em" }}>
          {expanded ? "↑ CLOSE" : "↓ MORE"}
        </div>
      </div>
      <div style={{ padding: "20px 24px 28px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000", marginBottom: 6 }}>Concept Bike</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#EFEFEF" }}>Bell & Ross × Blacktrack BT-06</div>
      </div>
    </div>
  );
}

// ─── CHR PROLOGUE CARD ────────────────────────────────────────────────────────
const CHR_GALLERY = [IMG_CHR_1, IMG_CHR_2, IMG_CHR_3, IMG_CHR_4, IMG_CHR_5, IMG_CHR_6];

function ChrCard({ expanded, onToggle }) {
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <div onClick={onToggle} style={{ background: "#1C1C1C", cursor: "pointer", overflow: "hidden", border: expanded ? "1px solid #C5F000" : "1px solid transparent", transition: "border 0.3s" }}>
      <div style={{ position: "relative", aspectRatio: "16/10", overflow: "hidden" }}>
        <img src={CHR_GALLERY[0]} alt="Toyota C-HR Prologue" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
        <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.5)", borderRadius: 2, padding: "3px 8px", fontSize: 10, color: expanded ? "#C5F000" : "#AAAAAA", letterSpacing: "0.1em" }}>
          {expanded ? "↑ CLOSE" : "↓ MORE"}
        </div>
      </div>
      <div style={{ padding: "20px 24px 28px" }}>
        <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000", marginBottom: 6 }}>Concept Car</div>
        <div style={{ fontSize: 15, fontWeight: 700, color: "#EFEFEF" }}>Toyota C-HR Prologue</div>
      </div>
    </div>
  );
}

// ─── PROJECTS ─────────────────────────────────────────────────────────────────
function Projects({ audioRef, setAudioPlaying }) {
  const { isMobile, isTablet } = useBreakpoint();
  const [expandedId, setExpandedId] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [chrSlide, setChrSlide] = useState(0);
  const [bt06Slide, setBt06Slide] = useState(0);
  const [fiveESlide, setFiveESlide] = useState(0);
  const [microSlide, setMicroSlide] = useState(0);
  const [imgerieSlide, setImgerieSlide] = useState(0);
  const videoRef = useRef(null);
  const panelRef = useRef(null);

  useEffect(() => {
    setVideoUrl(VIDEO_B64);
  }, []);

  // Scroll vers le panel après ouverture
  useEffect(() => {
    if (expandedId && panelRef.current) {
      setTimeout(() => panelRef.current.scrollIntoView({ behavior: "smooth", block: "center" }), 420);
    }
    if (!expandedId && videoRef.current) {
      videoRef.current.pause();
    }
  }, [expandedId]);

  const toggle = (id) => {
    if (expandedId === "video" && id !== "video" && videoRef.current) {
      videoRef.current.pause();
    }
    setExpandedId(prev => prev === id ? null : id);
    if (id === "video" && expandedId !== "video") {
      if (audioRef.current && !audioRef.current.paused) {
        audioRef.current.pause();
        setAudioPlaying(false);
      }
      setTimeout(() => { if (videoRef.current) videoRef.current.play(); }, 450);
    }
  };

  return (
    <section id="projects" style={{ background: "#0C0C0C", borderTop: "1px solid #232323", padding: isMobile ? "64px 20px" : "100px 48px" }}>
      <Reveal>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C5F000", marginBottom: 16 }}>Selected Work</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, gap: 32, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.0, color: "#FFFFFF" }}>
            Our work.
          </h2>
          <p style={{ fontSize: 14, color: "#CCCCCC", maxWidth: 360, lineHeight: 1.7, fontStyle: "italic" }}>
            References available upon request. Confidentiality applies to certain projects.
          </p>
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: 2 }}>

        {/* Placeholders */}
        <LexusMicroCard expanded={expandedId === "lexus-micro"} onToggle={() => toggle("lexus-micro")} />

        <ImgerieCard expanded={expandedId === "imgerie"} onToggle={() => toggle("imgerie")} />

        {/* Card 5 Mouvements — position 3 */}
        <FiveECard expanded={expandedId === "5e"} onToggle={() => toggle("5e")} />

        {/* Card vidéo — position 4 */}
        <div onClick={() => toggle("video")} style={{ background: "#1C1C1C", cursor: "pointer", overflow: "hidden", border: expandedId === "video" ? "1px solid #C5F000" : "1px solid transparent", transition: "border 0.3s" }}>
          <div style={{ position: "relative", aspectRatio: "16/10", background: "#000", overflow: "hidden" }}>
            <img src={IMG_TEASER_THUMB} alt="Cinematic Teaser" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.3)" }}>
              <div style={{ width: 52, height: 52, borderRadius: "50%", border: "2px solid #C5F000", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(0,0,0,0.5)" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#C5F000"><polygon points="5,3 19,12 5,21" /></svg>
              </div>
            </div>
            <div style={{ position: "absolute", top: 10, right: 10, background: "rgba(0,0,0,0.5)", borderRadius: 2, padding: "3px 8px", fontSize: 10, color: expandedId === "video" ? "#C5F000" : "#AAAAAA", letterSpacing: "0.1em" }}>
              {expandedId === "video" ? "↑ CLOSE" : "↓ PLAY"}
            </div>
          </div>
          <div style={{ padding: "20px 24px 28px" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000", marginBottom: 6 }}>Motion & Direction</div>
            <div style={{ fontSize: 15, fontWeight: 700, color: "#EFEFEF" }}>Cinematic Teaser</div>
          </div>
        </div>

        {/* Card BT-06 — position 5 */}
        <BT06Card expanded={expandedId === "bt06"} onToggle={() => toggle("bt06")} />

        {/* Card CHR — position 6 */}
        <ChrCard isMobile={isMobile} expanded={expandedId === "chr"} onToggle={() => toggle("chr")} />

      </div>

      {/* Panel unique — s'ouvre sous la grille, ref pour le scroll */}
      <div ref={panelRef}>
        <AnimatePresence>
          {expandedId === "imgerie" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden", marginTop: 2, background: "#111", border: "1px solid #333" }}>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", height: isMobile ? "auto" : "55vh", maxHeight: 500 }}>
                <div style={{ flex: "0 0 65%", position: "relative", overflow: "hidden", background: "#000" }}>
                  <img src={IMGERIE_GALLERY[imgerieSlide]} alt="Imagery & Communication" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <button onClick={e => { e.stopPropagation(); setImgerieSlide(i => (i - 1 + IMGERIE_GALLERY.length) % IMGERIE_GALLERY.length); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)", border: "1px solid #444", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EFEFEF" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button onClick={e => { e.stopPropagation(); setImgerieSlide(i => (i + 1) % IMGERIE_GALLERY.length); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)", border: "1px solid #444", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EFEFEF" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                  <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
                    {IMGERIE_GALLERY.map((_, di) => (
                      <div key={di} onClick={e => { e.stopPropagation(); setImgerieSlide(di); }} style={{ width: 7, height: 7, borderRadius: "50%", background: di === imgerieSlide ? "#C5F000" : "rgba(255,255,255,0.3)", cursor: "pointer", transition: "background 0.3s" }} />
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000" }}>Imagery & Communication</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#EFEFEF", lineHeight: 1.2 }}>Hero Visuals</div>
                  <p style={{ fontSize: 14, color: "#CCCCCC", lineHeight: 1.85 }}>A cross-brand portfolio of hero images spanning automotive, mobility and product design. Each visual is crafted to serve communication campaigns, pitch decks, press releases and digital presence — combining photorealistic rendering with strong art direction.</p>
                  <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.08em" }}>{imgerieSlide + 1} / {IMGERIE_GALLERY.length}</div>
                  <button onClick={() => toggle("imgerie")} style={{ alignSelf: "flex-start", background: "none", border: "1px solid #333", color: "#AAAAAA", padding: "10px 20px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, marginTop: 8 }}>
                    Close ✕
                  </button>
                </div>
              </div>
            </motion.div>
          )}
          {expandedId === "lexus-micro" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden", marginTop: 2, background: "#111", border: "1px solid #333" }}>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", height: isMobile ? "auto" : "55vh", maxHeight: 500 }}>
                <div style={{ flex: "0 0 65%", position: "relative", overflow: "hidden", background: "#000" }}>
                  <img src={MICRO_IMAGES[microSlide]} alt={MICRO_LABELS[microSlide]} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <button onClick={e => { e.stopPropagation(); setMicroSlide(i => (i - 1 + MICRO_IMAGES.length) % MICRO_IMAGES.length); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)", border: "1px solid #444", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EFEFEF" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button onClick={e => { e.stopPropagation(); setMicroSlide(i => (i + 1) % MICRO_IMAGES.length); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)", border: "1px solid #444", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EFEFEF" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                  <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
                    {MICRO_IMAGES.map((_, di) => (
                      <div key={di} onClick={e => { e.stopPropagation(); setMicroSlide(di); }} style={{ width: 7, height: 7, borderRadius: "50%", background: di === microSlide ? "#C5F000" : "rgba(255,255,255,0.3)", cursor: "pointer", transition: "background 0.3s" }} />
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000" }}>Full Development Program</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#EFEFEF", lineHeight: 1.2 }}>Lexus Micro Concept</div>
                  <p style={{ fontSize: 14, color: "#CCCCCC", lineHeight: 1.85 }}>Complete program from sketch to concept car. Our methodology covers Class A & B surfaces, full 3D model management, embedded electronics, LED matrix engineering, parts breakdown and supplier coordination — with the rigor required for complex multi-disciplinary deliverables.</p>
                  <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.08em" }}>{microSlide + 1} / {MICRO_IMAGES.length}</div>
                  <button onClick={() => toggle("lexus-micro")} style={{ alignSelf: "flex-start", background: "none", border: "1px solid #333", color: "#AAAAAA", padding: "10px 20px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, marginTop: 8 }}>
                    Close ✕
                  </button>
                </div>
              </div>
            </motion.div>
          )}
          {expandedId === "video" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden", marginTop: 2, background: "#111", border: "1px solid #333" }}>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", height: isMobile ? "auto" : "55vh", maxHeight: 500 }}>
                <div style={{ flex: "0 0 65%", background: "#000", display: "flex", alignItems: "center", overflow: "hidden" }}>
                  <video ref={videoRef} src={videoUrl || ""} controls playsInline style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }} />
                </div>
                <div style={{ flex: 1, padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000" }}>Motion & Direction</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#EFEFEF", lineHeight: 1.2 }}>Cinematic Teaser</div>
                  <p style={{ fontSize: 14, color: "#CCCCCC", lineHeight: 1.8 }}>Full cinematic treatment of a concept vehicle. Direction, rendering, motion, sound design. Delivered as a standalone presentation piece.</p>
                  <button onClick={() => toggle("video")} style={{ alignSelf: "flex-start", background: "none", border: "1px solid #333", color: "#AAAAAA", padding: "10px 20px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, marginTop: 8 }}>
                    Close ✕
                  </button>
                </div>
              </div>
            </motion.div>
          )}
          {expandedId === "5e" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden", marginTop: 2, background: "#111", border: "1px solid #333" }}>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", height: isMobile ? "auto" : "55vh", maxHeight: 500 }}>
                <div style={{ flex: "0 0 65%", position: "relative", overflow: "hidden", background: "#000" }}>
                  <img src={FIVEE_GALLERY[fiveESlide]} alt="5 Mouvements × Renault 5" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <button onClick={e => { e.stopPropagation(); setFiveESlide(i => (i - 1 + FIVEE_GALLERY.length) % FIVEE_GALLERY.length); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)", border: "1px solid #444", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EFEFEF" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button onClick={e => { e.stopPropagation(); setFiveESlide(i => (i + 1) % FIVEE_GALLERY.length); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)", border: "1px solid #444", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EFEFEF" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                  <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
                    {FIVEE_GALLERY.map((_, di) => (
                      <div key={di} onClick={e => { e.stopPropagation(); setFiveESlide(di); }} style={{ width: 7, height: 7, borderRadius: "50%", background: di === fiveESlide ? "#C5F000" : "rgba(255,255,255,0.3)", cursor: "pointer", transition: "background 0.3s" }} />
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000" }}>CMF & Graphic Production</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#EFEFEF", lineHeight: 1.2 }}>5 Mouvements × Renault 5</div>
                  <p style={{ fontSize: 14, color: "#CCCCCC", lineHeight: 1.85 }}>Graphic production and manufacturing of coverings, stickers, sails and CNC-milled nautical padding at the brand identity of 5 Mouvements. Five exclusive collaborations with renowned French startups in the field of mobility around the natural elements — snow, air, water, earth. Five cool and innovative mobility objects embodying the exclusivity, French craftsmanship and avant-garde design of the Renault 5, icon of French Tech Mobility.</p>
                  <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.08em" }}>{fiveESlide + 1} / {FIVEE_GALLERY.length}</div>
                  <button onClick={() => toggle("5e")} style={{ alignSelf: "flex-start", background: "none", border: "1px solid #333", color: "#AAAAAA", padding: "10px 20px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, marginTop: 8 }}>
                    Close ✕
                  </button>
                </div>
              </div>
            </motion.div>
          )}
          {expandedId === "bt06" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden", marginTop: 2, background: "#111", border: "1px solid #333" }}>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", height: isMobile ? "auto" : "55vh", maxHeight: 500 }}>
                <div style={{ flex: "0 0 65%", position: "relative", overflow: "hidden", background: "#000" }}>
                  <img src={BT06_GALLERY[bt06Slide]} alt="Blacktrack BT-06" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <button onClick={e => { e.stopPropagation(); setBt06Slide(i => (i - 1 + BT06_GALLERY.length) % BT06_GALLERY.length); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)", border: "1px solid #444", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EFEFEF" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button onClick={e => { e.stopPropagation(); setBt06Slide(i => (i + 1) % BT06_GALLERY.length); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)", border: "1px solid #444", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EFEFEF" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                  <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
                    {BT06_GALLERY.map((_, di) => (
                      <div key={di} onClick={e => { e.stopPropagation(); setBt06Slide(di); }} style={{ width: 7, height: 7, borderRadius: "50%", background: di === bt06Slide ? "#C5F000" : "rgba(255,255,255,0.3)", cursor: "pointer", transition: "background 0.3s" }} />
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000" }}>Concept Bike</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#EFEFEF", lineHeight: 1.2 }}>Bell & Ross × Blacktrack BT-06</div>
                  <p style={{ fontSize: 14, color: "#CCCCCC", lineHeight: 1.85 }}>Design by Sacha Lakic / Blacktrack. From sketch to one-off. The BT-06 is a café racer with an undeniably contemporary style, embodying the spirit of collaboration between Bell & Ross and Blacktrack — watch and motorcycle simultaneously designed, drawing inspiration from each other to create two exceptional objects.</p>
                  <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.08em" }}>{bt06Slide + 1} / {BT06_GALLERY.length}</div>
                  <button onClick={() => toggle("bt06")} style={{ alignSelf: "flex-start", background: "none", border: "1px solid #333", color: "#AAAAAA", padding: "10px 20px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, marginTop: 8 }}>
                    Close ✕
                  </button>
                </div>
              </div>
            </motion.div>
          )}
          {expandedId === "chr" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden", marginTop: 2, background: "#111", border: "1px solid #333" }}>
              <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", height: isMobile ? "auto" : "55vh", maxHeight: 500 }}>
                <div style={{ flex: "0 0 65%", position: "relative", overflow: "hidden", background: "#000" }}>
                  <img src={CHR_GALLERY[chrSlide]} alt="Toyota C-HR Prologue" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
                  <button onClick={e => { e.stopPropagation(); setChrSlide(i => (i - 1 + CHR_GALLERY.length) % CHR_GALLERY.length); }} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)", border: "1px solid #444", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EFEFEF" strokeWidth="2"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button onClick={e => { e.stopPropagation(); setChrSlide(i => (i + 1) % CHR_GALLERY.length); }} style={{ position: "absolute", right: 16, top: "50%", transform: "translateY(-50%)", background: "rgba(0,0,0,0.55)", border: "1px solid #444", borderRadius: "50%", width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EFEFEF" strokeWidth="2"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                  <div style={{ position: "absolute", bottom: 16, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 6 }}>
                    {CHR_GALLERY.map((_, di) => (
                      <div key={di} onClick={e => { e.stopPropagation(); setChrSlide(di); }} style={{ width: 7, height: 7, borderRadius: "50%", background: di === chrSlide ? "#C5F000" : "rgba(255,255,255,0.3)", cursor: "pointer", transition: "background 0.3s" }} />
                    ))}
                  </div>
                </div>
                <div style={{ flex: 1, padding: "40px 48px", display: "flex", flexDirection: "column", justifyContent: "center", gap: 16 }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#C5F000" }}>Concept Car</div>
                  <div style={{ fontSize: 24, fontWeight: 700, color: "#EFEFEF", lineHeight: 1.2 }}>Toyota C-HR Prologue</div>
                  <p style={{ fontSize: 14, color: "#CCCCCC", lineHeight: 1.85 }}>We were part of the team who built the C-HR Prologue Concept, taking care of the complete front and side of the car. The key challenge was developing functional prototype lighting that matched the production intent of the design.</p>
                  <div style={{ fontSize: 11, color: "#555", letterSpacing: "0.08em" }}>{chrSlide + 1} / {CHR_GALLERY.length}</div>
                  <button onClick={() => toggle("chr")} style={{ alignSelf: "flex-start", background: "none", border: "1px solid #333", color: "#AAAAAA", padding: "10px 20px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", borderRadius: 2, marginTop: 8 }}>
                    Close ✕
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </section>
  );
}


// ─── MODEL LAB ────────────────────────────────────────────────────────────────
function ModelLab() {
  const { isMobile, isTablet } = useBreakpoint();
  const approaches = [
    {
      tag: "Design Validation",
      title: "Design Judgement Model",
      body: "A physical object built to validate form, proportion and CMF decisions at the right moment in the design process. Not a rough mock-up, a resolved, finished artefact that can be handled, lit, photographed and debated. Precise enough to drive decisions. Considered enough to be kept.",
    },
    {
      tag: "Optical Validation",
      title: "Lighting Buck, Plug & Play",
      body: "Modular bucks designed to test optical signatures in real lighting conditions. Interchangeable lens geometry, housing forms and DRL graphics evaluated physically, without committing to tooling. A technology watch tool as much as a validation tool, kept current as lighting technology evolves.",
    },
    {
      tag: "CMF Validation",
      title: "Scale Model, Interchangeable Bodywork",
      body: "Reduced-scale models with swappable body panels finished with precision CMF covering derived from real material studies. Multiple colour and material directions tested on a single base. Fast, clean, reusable, and accurate enough to inform production decisions.",
    },
  ];

  const pillars = [
    { label: "Design tool", body: "Integrated into the development process at the right stage. Not an add-on, a working instrument that informs decisions in real time." },
    { label: "Technology watch", body: "Materials, fabrication processes and finishing techniques are selected for their relevance and forward-looking value. Each model is a live brief on what is possible now." },
    { label: "Evolutive object", body: "Each scale model is built to follow the project. Interchangeable parts allow design proposals to be evaluated and updated in real time, turning the model into a working instrument that stays relevant from first review to design freeze." },
    { label: "Exhibition piece", body: "Every Model Lab object is resolved to the point where it deserves to exist beyond the project. A piece the client will want to display, because it earned it." },
  ];

  return (
    <section id="modellab" style={{ background: "#0C0C0C", borderTop: "1px solid #232323", padding: isMobile ? "64px 20px" : "100px 48px" }}>

      {/* Header */}
      <Reveal>
        <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C5F000", marginBottom: 16 }}>Model Lab</p>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 4.5vw, 60px)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.0, color: "#FFFFFF", marginBottom: 24 }}>
          From validation tool<br />to exhibition piece.
        </h2>
        <p style={{ fontSize: 16, color: "#CCCCCC", maxWidth: 660, lineHeight: 1.8, marginBottom: 16 }}>
          Model Lab is a Kore Forge signature, born from the cross-competency of the collective. It is not traditional modelmaking. It is a new discipline of physical validation that removes the waste, the toxicity and the disposability of conventional mock-ups.
        </p>
        <p style={{ fontSize: 16, color: "#CCCCCC", maxWidth: 660, lineHeight: 1.8, marginBottom: 80 }}>
          Each object is designed to serve its purpose precisely during the project, and to remain relevant long after. Sensory, technical and artistic at once. An instrument first. A lasting object always.
        </p>
      </Reveal>

      {/* Four pillars, the rules we set ourselves */}
      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr 1fr" : isTablet ? "1fr 1fr" : "repeat(4, 1fr)", gap: 2, marginBottom: 2 }}>
        {pillars.map((p, i) => (
          <Reveal key={p.label} delay={i * 0.08}>
            <div style={{ background: "#141414", padding: "32px 28px 36px", height: "100%", borderTop: "3px solid #C5F000" }}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "#EFEFEF", marginBottom: 12, letterSpacing: "0.03em" }}>{p.label}</div>
              <p style={{ fontSize: 13, color: "#CCCCCC", lineHeight: 1.85 }}>{p.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Manifesto line */}
      <Reveal delay={0.35}>
        <div style={{ borderLeft: "4px solid #C5F000", paddingLeft: 28, maxWidth: 680, margin: "56px 0" }}>
          <p style={{ fontSize: 17, color: "#CCCCCC", lineHeight: 1.8, fontStyle: "italic" }}>
            "The model is no longer a disposable step in the process. It is a resolved object, useful during development, valuable after. Not because we decided so, but because it was built that way from the start."
          </p>
        </div>
      </Reveal>

      {/* Examples, non-exhaustive */}
      <Reveal delay={0.1}>
        <div style={{ marginBottom: 32 }}>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#AAAAAA", marginBottom: 8 }}>Examples of Model Lab responses</p>
          <p style={{ fontSize: 14, color: "#BBBBBB", maxWidth: 560, lineHeight: 1.7 }}>
            Every project is different. The following are possible responses, not a fixed catalogue. Model Lab is defined by its principles, not its formats.
          </p>
        </div>
      </Reveal>

      <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr 1fr" : "repeat(3, 1fr)", gap: 2 }}>
        {approaches.map((a, i) => (
          <Reveal key={a.title} delay={i * 0.1}>
            <div style={{ background: "#1C1C1C", padding: "32px 28px 36px", height: "100%", display: "flex", flexDirection: "column", borderTop: "1px solid #232323" }}>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#CCCCCC", marginBottom: 14 }}>{a.tag}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 700, color: "#EFEFEF", marginBottom: 16, lineHeight: 1.25 }}>{a.title}</div>
              <p style={{ fontSize: 13, color: "#CCCCCC", lineHeight: 1.85, flex: 1 }}>{a.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

    </section>
  );
}

// ─── CONTACT ──────────────────────────────────────────────────────────────────
function Contact() {
  const { isMobile, isTablet } = useBreakpoint();
  const [formState, setFormState] = useState({ name: "", email: "", message: "", sent: false, sending: false, error: false });

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setFormState(s => ({ ...s, sending: true }));
    try {
      const res = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }).toString(),
      });
      if (res.ok) setFormState(s => ({ ...s, sent: true, sending: false }));
      else setFormState(s => ({ ...s, error: true, sending: false }));
    } catch {
      setFormState(s => ({ ...s, error: true, sending: false }));
    }
  };

  return (
    <section id="contact" style={{ background: "#141414", borderTop: "1px solid #232323", padding: isMobile ? "72px 20px 64px" : "120px 48px 100px", position: "relative", overflow: "hidden" }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: "#C5F000" }} />
      <div style={{ paddingLeft: isMobile ? 20 : 44 }}>

        <Reveal>
          <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C5F000", marginBottom: 20 }}>Start a Project</p>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(48px, 8vw, 120px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 0.88, textTransform: "uppercase", color: "#FFFFFF", marginBottom: 32 }}>
            Tell us<br />your brief.
          </h2>
          <p style={{ fontSize: 18, color: "#CCCCCC", maxWidth: 480, lineHeight: 1.75, marginBottom: 56 }}>
            One brief. The right team. Drop us a message and Kore Forge takes it from there.
          </p>
        </Reveal>

        {/* Entity logos — horizontal strip */}
        <Reveal delay={0.1}>
          <div style={{ display: "flex", alignItems: "flex-end", gap: isMobile ? 32 : 56, flexWrap: "wrap", marginBottom: 64, paddingBottom: 40, borderBottom: "1px solid #232323" }}>
            {ENTITIES.map((e) => {
              const logoSrc = e.id === "sfj" ? LOGO_SFJ : e.id === "pikk" ? LOGO_PIKK : e.id === "twin" ? LOGO_TWIN : LOGO_EVOLVE;
              const isSFJ = e.id === "sfj";
              const isTwin = e.id === "twin";
              const isEvolve = e.id === "evolve";
              return (
                <div key={e.id} style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10 }}>
                  <div style={{ height: 52, display: "flex", alignItems: "flex-end" }}>
                    {(e.id === "sfj" || e.id === "pikk") ? (
                      <a href={e.id === "sfj" ? "https://superfastjellybear.com/" : "https://pikk2.com/"} target="_blank" rel="noopener noreferrer" style={{ display: "block", opacity: 0.85, transition: "opacity 0.2s" }} onMouseEnter={ev => ev.currentTarget.style.opacity = 1} onMouseLeave={ev => ev.currentTarget.style.opacity = 0.85}>
                        <img src={logoSrc} alt={e.name} style={{
                          maxWidth: isSFJ ? 52 : 110,
                          maxHeight: isSFJ ? 52 : 36,
                          objectFit: "contain", objectPosition: "left bottom", display: "block"
                        }} />
                      </a>
                    ) : (
                      <img src={logoSrc} alt={e.name} style={{
                        maxWidth: isTwin ? 72 : isEvolve ? 44 : 110,
                        maxHeight: isTwin ? 54 : isEvolve ? 52 : 36,
                        objectFit: "contain", objectPosition: "left bottom", display: "block", opacity: 0.85
                      }} />
                    )}
                  </div>
                  <div style={{ width: "100%", height: 2, background: e.color, borderRadius: 1 }} />
                </div>
              );
            })}
          </div>
        </Reveal>

        {/* Contact form */}
        <Reveal delay={0.2}>
          {formState.sent ? (
            <div style={{ maxWidth: 560 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C5F000", marginBottom: 16 }}>Message received</div>
              <p style={{ fontSize: 16, color: "#CCCCCC", lineHeight: 1.75 }}>We'll be back to you within 48 hours with a team proposal.</p>
            </div>
          ) : (
            <>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#C5F000", marginBottom: 28 }}>Send us a brief</p>
              <form name="contact" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}
                style={{ display: "flex", flexDirection: "column", gap: 16, maxWidth: 560 }}>
                <input type="hidden" name="form-name" value="contact" />
                <input name="bot-field" style={{ display: "none" }} />

                <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: 16 }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666" }}>Name</label>
                    <input required name="name" value={formState.name}
                      onChange={ev => setFormState(s => ({ ...s, name: ev.target.value }))}
                      style={{ background: "#1C1C1C", border: "1px solid #2A2A2A", borderRadius: 2, padding: "14px 16px", fontSize: 14, color: "#EFEFEF", outline: "none", fontFamily: "inherit" }}
                      onFocus={ev => ev.target.style.borderColor = "#C5F000"}
                      onBlur={ev => ev.target.style.borderColor = "#2A2A2A"} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666" }}>Email</label>
                    <input required type="email" name="email" value={formState.email}
                      onChange={ev => setFormState(s => ({ ...s, email: ev.target.value }))}
                      style={{ background: "#1C1C1C", border: "1px solid #2A2A2A", borderRadius: 2, padding: "14px 16px", fontSize: 14, color: "#EFEFEF", outline: "none", fontFamily: "inherit" }}
                      onFocus={ev => ev.target.style.borderColor = "#C5F000"}
                      onBlur={ev => ev.target.style.borderColor = "#2A2A2A"} />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <label style={{ fontSize: 11, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#666" }}>Your brief</label>
                  <textarea required name="message" rows={6} value={formState.message}
                    onChange={ev => setFormState(s => ({ ...s, message: ev.target.value }))}
                    style={{ background: "#1C1C1C", border: "1px solid #2A2A2A", borderRadius: 2, padding: "14px 16px", fontSize: 14, color: "#EFEFEF", outline: "none", resize: "vertical", fontFamily: "inherit", lineHeight: 1.6 }}
                    onFocus={ev => ev.target.style.borderColor = "#C5F000"}
                    onBlur={ev => ev.target.style.borderColor = "#2A2A2A"} />
                </div>

                {formState.error && (
                  <p style={{ fontSize: 13, color: "#EF4444" }}>Something went wrong. Try again or reach us directly.</p>
                )}

                <div>
                  <button type="submit" disabled={formState.sending}
                    style={{ background: formState.sending ? "#333" : "#C5F000", color: "#111", border: "none", padding: "16px 36px", fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", cursor: formState.sending ? "default" : "pointer", borderRadius: 2, transition: "background 0.2s", fontFamily: "inherit" }}>
                    {formState.sending ? "Sending…" : "Send"}
                  </button>
                </div>
              </form>
            </>
          )}
        </Reveal>

      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ background: "#080808", borderTop: "1px solid #232323", padding: "20px 48px", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <img src={LOGO_ICON} alt="Kore Forge" style={{ height: 22, display: "block" }} />
      </div>
      <div style={{ display: "flex", gap: 6 }}>
        {ENTITIES.map(e => (
          <div key={e.id} style={{ width: 8, height: 8, borderRadius: "50%", background: e.color }} />
        ))}
      </div>
      <p style={{ fontSize: 11, color: "#AAAAAA", letterSpacing: "0.06em" }}>
        Automotive, Mobility, Product Design, Concept to Prototype
      </p>
    </footer>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────
export default function App() {
  const audioRef = useRef(null);
  const [audioPlaying, setAudioPlaying] = useState(false);

  return (
    <div style={{ maxWidth: 1600, margin: "0 auto", position: "relative", overflow: "hidden" }}>
      <Nav audioRef={audioRef} audioPlaying={audioPlaying} setAudioPlaying={setAudioPlaying} />
      <Hero />
      <Pipeline />
      <Collective />
      <WhatYouCanOrder />
      <Cases />
      <ModelLab />
      <Projects audioRef={audioRef} setAudioPlaying={setAudioPlaying} />
      <Contact />
      <Footer />
    </div>
  );
}
