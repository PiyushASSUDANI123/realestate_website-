"use client";

export default function MojikaLogo({ width = 180, height = 44, lightText = false }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
      {/* Golden Pyramid M Emblem */}
      <svg width="42" height="42" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBA5C" />
            <stop offset="50%" stopColor="#C59828" />
            <stop offset="100%" stopColor="#9A7314" />
          </linearGradient>
          <linearGradient id="goldGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F3DC88" />
            <stop offset="60%" stopColor="#B68B25" />
            <stop offset="100%" stopColor="#78550E" />
          </linearGradient>
          <radialGradient id="sphereGrad" cx="35%" cy="35%" r="65%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#E2E8F0" />
            <stop offset="85%" stopColor="#94A3B8" />
            <stop offset="100%" stopColor="#475569" />
          </radialGradient>
        </defs>
        {/* Left Pyramid Leg */}
        <polygon points="12,82 32,24 45,82" fill="url(#goldGrad1)" />
        <polygon points="12,82 32,24 24,82" fill="url(#goldGrad2)" opacity="0.6" />
        {/* Right Pyramid Leg */}
        <polygon points="55,82 68,24 88,82" fill="url(#goldGrad1)" />
        <polygon points="76,82 68,24 88,82" fill="url(#goldGrad2)" opacity="0.6" />
        {/* Central Arch & Globe */}
        <circle cx="50" cy="46" r="14" fill="url(#sphereGrad)" />
        <ellipse cx="50" cy="46" rx="14" ry="5" stroke="#B68B25" strokeWidth="1" fill="none" opacity="0.7" />
        <ellipse cx="50" cy="46" rx="5" ry="14" stroke="#B68B25" strokeWidth="1" fill="none" opacity="0.7" />
      </svg>

      {/* Brand Name Typography */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ display: "flex", alignItems: "baseline", gap: "6px", lineHeight: "1" }}>
          <span
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontWeight: "900",
              fontSize: "1.25rem",
              letterSpacing: "0.06em",
              color: "#C5221F",
            }}
          >
            MOJIKA
          </span>
          <span
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontWeight: "800",
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              color: lightText ? "#DFBA5C" : "#997416",
            }}
          >
            GROUP
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontSize: "0.58rem",
            letterSpacing: "0.22em",
            fontWeight: "700",
            color: lightText ? "#E2E8F0" : "#6E492B",
            textTransform: "uppercase",
            marginTop: "3px",
            lineHeight: "1",
          }}
        >
          BUILDING THE TRUST
        </span>
      </div>
    </div>
  );
}
