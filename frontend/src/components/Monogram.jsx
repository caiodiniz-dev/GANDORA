import React from "react";

// Gandora chama-folha monogram — single symbolic mark.
// A candle flame growing from a leaf silhouette, drawn in a
// single continuous stroke to feel artisanal and editorial.
export default function Monogram({
  size = 48,
  stroke = "var(--gd-carvao)",
  fill = "none",
  className = "",
  ...props
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 80"
      className={className}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Flame — tear-drop with inner curl */}
      <path
        d="M32 6 C 40 18, 46 26, 46 36 C 46 46, 40 52, 32 52 C 24 52, 18 46, 18 36 C 18 26, 24 18, 32 6 Z"
        stroke={stroke}
        strokeWidth="1.25"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <path
        d="M32 18 C 36 24, 38 30, 38 36 C 38 42, 34 46, 32 46"
        stroke={stroke}
        strokeWidth="1"
        fill="none"
        strokeLinecap="round"
      />
      {/* Leaf base — two curving lines forming a cradle */}
      <path
        d="M10 60 C 20 50, 44 50, 54 60"
        stroke={stroke}
        strokeWidth="1.25"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M14 68 C 22 60, 42 60, 50 68"
        stroke={stroke}
        strokeWidth="1.25"
        fill="none"
        strokeLinecap="round"
      />
      {/* central vein */}
      <path d="M32 52 L 32 74" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
      {/* small serifs */}
      <path d="M29 74 L 35 74" stroke={stroke} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Full wordmark — monogram on top, GANDORA in Cinzel, hint "por Gabriela Diniz" in Great Vibes.
 */
export function Wordmark({ color = "var(--gd-carvao)", accent = "var(--gd-terracota)", size = "md" }) {
  const dims = {
    sm: { m: 28, title: "text-[18px]", sig: "text-[14px]" },
    md: { m: 44, title: "text-[26px]", sig: "text-[18px]" },
    lg: { m: 72, title: "text-[42px]", sig: "text-[28px]" },
  }[size];
  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <Monogram size={dims.m} stroke={color} />
      <div
        className={`font-display ${dims.title} tracking-[0.18em]`}
        style={{ color, fontWeight: 700 }}
      >
        GANDORA
      </div>
      <div className={`script ${dims.sig}`} style={{ color: accent }}>
        por Gabriela Diniz
      </div>
    </div>
  );
}
