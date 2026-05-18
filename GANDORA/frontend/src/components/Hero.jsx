import React from "react";

// IMPORTAÇÃO DA SUA IMAGEM LOCAL: Puxando da sua pasta de assets
import vela5 from "../assets/vela-5.jpg";

/**
 * Hero — Editorial, asymmetric.
 * Left: eyebrow, display title, lyrical Great Vibes line, manifesto lead paragraph, CTAs, technical spec row.
 * Right: full-bleed atmospheric photography with candle-glow overlay and breathing flame mark.
 */
export default function Hero() {
  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 md:pt-36 pb-20 md:pb-28 overflow-hidden reveal"
    >
      {/* ambient candle glow behind everything */}
      <div
        className="gd-candle-glow absolute inset-0 pointer-events-none"
        aria-hidden="true"
      />
      <div className="gd-paper-noise absolute inset-0" aria-hidden="true" />

      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Top meta bar */}
        <div className="flex items-center justify-between rule-bottom pb-6 mb-12 md:mb-20 reveal reveal-delay-0">
          <span className="eyebrow" data-testid="hero-eyebrow">
            Velas Artesanais · Nº 04 · MMXXVI
          </span>
          <span className="eyebrow hidden sm:inline">
            Estação de Inverno — Edição Limitada
          </span>
        </div>

        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">

          {/* LEFT: Copy */}
          <div className="col-span-12 lg:col-span-7 animate-rise">
            <h1
              data-testid="hero-title"
              className="font-display text-carvao leading-[0.95] reveal reveal-delay-2"
              style={{
                fontSize: "clamp(48px, 7.5vw, 108px)",
                fontWeight: 400,
                letterSpacing: "0.02em",
              }}
            >
              A luz <br />
              <span className="italic font-normal">que ilumina</span> <br />
              a jornada <br />
              <span className="text-terracota">literária.</span>
            </h1>

            <p className="script text-[32px] md:text-[40px] text-terracota mt-8 mb-10 leading-[1.05] reveal reveal-delay-3">
              — acenda uma página.
            </p>

            <p className="text-carvao-600 text-[16px] md:text-[17px] leading-[1.75] max-w-[58ch] font-light reveal reveal-delay-4">
              A Gandora vive na encruzilhada entre dois rituais silenciosos —
              acender uma chama e virar uma página. Velas artesanais em cera
              vegetal, pensadas para tardes longas, poltronas fundas e capítulos
              sem pressa.
            </p>

            <div className="flex flex-wrap items-center gap-5 mt-12 reveal reveal-delay-5">
              <a
                href="#colecoes"
                data-testid="hero-cta-colecoes"
                className="gd-btn"
              >
                Descubra coleções <span aria-hidden>→</span>
              </a>
              <a
                href="#manifesto"
                data-testid="hero-cta-manifesto"
                className="font-mono text-[11px] tracking-[0.22em] uppercase text-carvao-600 nav-link"
              >
                Ler o Manifesto
              </a>
            </div>

            {/* Spec row */}
            <dl className="grid grid-cols-3 gap-6 mt-16 rule-top pt-8 max-w-[560px]">
              {[
                { k: "Cera", v: "Vegetal" },
                { k: "Queima", v: "40h" },
                { k: "Origem", v: "Campinas · SP" },
              ].map((item) => (
                <div key={item.k}>
                  <dt className="eyebrow">{item.k}</dt>
                  <dd className="font-display text-[22px] md:text-[26px] text-carvao mt-2">
                    {item.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* RIGHT: Image */}
          <figure
            data-testid="hero-image"
            className="col-span-12 lg:col-span-5 relative mt-4 lg:mt-0 reveal reveal-delay-3"
          >
            <div className="relative aspect-[4/5] overflow-hidden shadow-mid">
              {/* ALTERADO: src agora aponta para a variável vela5 importada dos seus assets locais */}
              <img
                src={vela5}
                alt="Vela artesanal Gandora acesa iluminando o ambiente"
                className="editorial-img w-full h-full object-cover"
                loading="eager"
              />
              {/* Warm overlay */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 35%, rgba(192,130,97,0.22), transparent 55%), linear-gradient(180deg, rgba(51,33,18,0) 55%, rgba(51,33,18,0.35) 100%)",
                }}
              />
              {/* Breathing flame spot */}
              <div
                aria-hidden="true"
                className="absolute top-[18%] left-1/2 -translate-x-1/2 flame-breathe"
                style={{
                  width: 120,
                  height: 120,
                  background:
                    "radial-gradient(circle, rgba(192,130,97,0.45), rgba(192,130,97,0.1) 55%, transparent 75%)",
                  filter: "blur(4px)",
                }}
              />
              {/* Caption */}
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-cera">
                <span className="eyebrow" style={{ color: "rgba(249,246,240,0.8)" }}>
                  Cedro & Tabaco · 220g
                </span>
                <span className="script text-[22px]">nº 04</span>
              </figcaption>
            </div>

          </figure>
        </div>
      </div>
    </section>
  );
}