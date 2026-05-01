import React, { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";

/** Subtle parallax for an image inside its container */
function useParallax(strength = 80) {
  const ref = useRef(null);
  const [y, setY] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const center = window.innerHeight / 2;
      const delta = rect.top + rect.height / 2 - center;
      const v = Math.max(-1, Math.min(1, -delta / window.innerHeight));
      setY(v * strength);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [strength]);
  return { ref, y };
}

export default function Sobre() {
  const { ref, y } = useParallax(60);

  return (
    <section
      id="sobre"
      data-testid="sobre-section"
      className="relative py-24 md:py-36 bg-cera-50"
    >
      <div className="gd-paper-noise absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
          {/* LEFT — image with parallax */}
          <figure className="col-span-12 md:col-span-6 relative">
            <div
              ref={ref}
              className="relative aspect-[4/5] overflow-hidden shadow-mid"
            >
              <img
                src="https://images.unsplash.com/photo-1625321329927-09b7a08458b6?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
                alt="Mãos artesãs trabalhando cera vegetal de vela artesanal"
                className="editorial-img w-full h-[112%] object-cover"
                style={{
                  transform: `translateY(${y}px)`,
                  transition: "transform 1500ms cubic-bezier(0.36,0.07,0.19,0.97)",
                  willChange: "transform",
                }}
                loading="lazy"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(51,33,18,0) 60%, rgba(51,33,18,0.32) 100%)",
                }}
              />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-cera">
                <span className="eyebrow" style={{ color: "rgba(249,246,240,0.78)" }}>
                  Atelier · Campinas
                </span>
                <span className="script text-[24px]">à mão</span>
              </figcaption>
            </div>

            <div
              aria-hidden
              className="absolute -top-6 -right-6 hidden md:block"
              style={{
                width: 140,
                background: "#F9F6F0",
                border: "1px solid rgba(51,51,51,0.14)",
                padding: "16px",
              }}
            >
              <div className="eyebrow mb-2">Lote</div>
              <div className="font-display" style={{ fontSize: 28, letterSpacing: "0.04em" }}>
                Nº 026
              </div>
              <div className="script text-terracota text-[18px] mt-1">numerado à mão</div>
            </div>
          </figure>

          {/* RIGHT — copy */}
          <div className="col-span-12 md:col-span-6">
            <div className="sec-index mb-3">§ V</div>
            <div className="eyebrow mb-8">A artesã · por Gabriela Diniz</div>
            <Reveal>
              <h2
                className="font-display text-carvao mb-10"
                style={{
                  fontSize: "clamp(28px, 3.4vw, 48px)",
                  lineHeight: 1.1,
                  letterSpacing: "0.04em",
                }}
              >
                Velas que nasceram <br />
                de uma <span className="text-terracota italic">poltrona</span>, <br />
                de um livro & <br />
                de muito <span className="text-salvia italic">silêncio</span>.
              </h2>
            </Reveal>

            <p className="text-carvao-600 text-[16px] leading-[1.85] mb-7 font-light max-w-[58ch]">
              Comecei acendendo velas porque os livros que eu lia pediam um
              outro tempo — um tempo mais devagar, mais quente, mais fundo. As
              opções no mercado eram doces demais, ou industriais demais. Eu
              queria o cheiro das estantes da casa da minha avó.
            </p>
            <p className="text-carvao-600 text-[16px] leading-[1.85] mb-7 font-light max-w-[58ch]">
              Depois de seis anos pesquisando matérias-primas botânicas, ceras
              vegetais e composição olfativa em um pequeno ateliê em Campinas,
              a Gandora se tornou o que é hoje: pequenas tiragens, numeradas,
              feitas com calma — para gente que ainda lê em silêncio.
            </p>

            <div className="grid grid-cols-3 gap-6 rule-top pt-8 max-w-[520px] mt-10">
              {[
                { k: "Atelier", v: "Campinas · SP" },
                { k: "Desde", v: "MMXX" },
                { k: "Lotes/ano", v: "12 únicos" },
              ].map((s) => (
                <div key={s.k}>
                  <dt className="eyebrow mb-2">{s.k}</dt>
                  <dd className="font-display text-[20px] md:text-[22px] text-carvao">
                    {s.v}
                  </dd>
                </div>
              ))}
            </div>

            <p className="script text-terracota text-[28px] md:text-[34px] mt-10">
              — com calma & com mãos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
