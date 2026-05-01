import React from "react";

/**
 * Editorial breathing candle — pure SVG.
 * The flame breathes (6s loop), the wax has subtle warmth.
 * Used as decorative anchor in editorial sections.
 */
export default function BreathingCandle({ size = 220, glow = true, label }) {
  const w = size;
  const h = Math.round(size * 1.55);
  return (
    <div
      style={{ width: w, height: h, position: "relative" }}
      aria-hidden="true"
    >
      {glow && (
        <div
          className="flame-breathe"
          style={{
            position: "absolute",
            top: -size * 0.05,
            left: "50%",
            transform: "translateX(-50%)",
            width: size * 1.4,
            height: size * 1.4,
            background:
              "radial-gradient(circle, rgba(255,226,180,0.55), rgba(255,200,130,0.08) 55%, transparent 75%)",
            filter: "blur(6px)",
            pointerEvents: "none",
          }}
        />
      )}
      <svg
        viewBox="0 0 100 155"
        width={w}
        height={h}
        style={{ position: "relative", display: "block" }}
      >
        <defs>
          <linearGradient id="wax" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F4EFE5" />
            <stop offset="60%" stopColor="#E8DCC4" />
            <stop offset="100%" stopColor="#C9B689" />
          </linearGradient>
          <linearGradient id="jar" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#5C3A22" />
            <stop offset="100%" stopColor="#2A1A0E" />
          </linearGradient>
          <radialGradient id="flameG" cx="50%" cy="60%" r="55%">
            <stop offset="0%" stopColor="#FFE2B4" />
            <stop offset="55%" stopColor="#F2A85B" />
            <stop offset="100%" stopColor="rgba(192,130,97,0)" />
          </radialGradient>
        </defs>

        {/* jar body */}
        <rect
          x="20"
          y="50"
          width="60"
          height="90"
          fill="url(#jar)"
          stroke="#2A1A0E"
          strokeWidth="0.6"
        />
        {/* jar shoulder highlight */}
        <rect x="22" y="52" width="2" height="86" fill="rgba(255,220,170,0.18)" />
        {/* label */}
        <rect
          x="28"
          y="78"
          width="44"
          height="40"
          fill="#F9F6F0"
          stroke="rgba(51,33,18,0.22)"
          strokeWidth="0.4"
        />
        <text
          x="50"
          y="92"
          textAnchor="middle"
          fontFamily="Cinzel Decorative, serif"
          fontSize="6"
          letterSpacing="0.6"
          fill="#333"
        >
          GANDORA
        </text>
        <text
          x="50"
          y="102"
          textAnchor="middle"
          fontFamily="Great Vibes, cursive"
          fontSize="7"
          fill="#C08261"
        >
          {label || "Bibliotheca"}
        </text>
        <line x1="32" y1="108" x2="68" y2="108" stroke="rgba(51,33,18,0.2)" strokeWidth="0.3" />
        <text
          x="50"
          y="114"
          textAnchor="middle"
          fontFamily="JetBrains Mono, monospace"
          fontSize="3.4"
          letterSpacing="0.6"
          fill="#6B6B68"
        >
          220g · 40h
        </text>

        {/* wax surface */}
        <ellipse cx="50" cy="50" rx="30" ry="4" fill="url(#wax)" />

        {/* wick */}
        <line x1="50" y1="50" x2="50" y2="42" stroke="#1F1F1F" strokeWidth="0.8" />

        {/* flame — breathing */}
        <g
          style={{
            transformOrigin: "50px 42px",
            animation: "breathe 6s cubic-bezier(0.36,0.07,0.19,0.97) infinite",
          }}
        >
          <ellipse cx="50" cy="32" rx="6" ry="11" fill="url(#flameG)" />
          <ellipse cx="50" cy="33" rx="2.6" ry="6" fill="#FFE9C3" opacity="0.95" />
          <ellipse cx="50" cy="36" rx="1.2" ry="3" fill="#FFFCEC" />
        </g>
      </svg>
    </div>
  );
}
