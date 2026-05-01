import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

const NOTAS = [
  {
    k: "topo",
    label: "Notas de topo",
    descricao:
      "O primeiro olhar — o que se levanta da chama nos primeiros minutos. Volátil, assertivo, abre a cena como o prólogo de um capítulo.",
    aromas: ["bergamota", "limão-siciliano", "cardamomo", "alecrim", "papel novo"],
  },
  {
    k: "coracao",
    label: "Notas de coração",
    descricao:
      "O corpo do livro — onde o aroma se demora. Vive entre a metade do pavio e o último parágrafo. É o tom emocional da composição.",
    aromas: ["sálvia", "rosa-chá", "açafrão", "cedro vermelho", "tabaco curado"],
  },
  {
    k: "fundo",
    label: "Notas de fundo",
    descricao:
      "O último suspiro — o que fica no ambiente depois que a chama é apagada. Madeiras, resinas, almíscares vegetais. A memória do livro fechado.",
    aromas: ["sândalo", "âmbar", "vetiver", "musgo de carvalho", "baunilha de Madagascar"],
  },
];

export default function Aromas() {
  const [active, setActive] = useState(NOTAS[1].k);
  const cur = NOTAS.find((n) => n.k === active);

  return (
    <section
      id="aromas"
      data-testid="aromas-section"
      className="relative py-24 md:py-32 bg-cera"
    >
      <div className="gd-paper-noise absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <header className="rule-bottom pb-8 mb-12 md:mb-16 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-4">
            <div className="sec-index mb-3">§ III</div>
            <div className="eyebrow">Pirâmide olfativa</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2
                className="font-display text-carvao"
                style={{
                  fontSize: "clamp(28px, 3.4vw, 48px)",
                  lineHeight: 1.1,
                  letterSpacing: "0.04em",
                }}
              >
                Três tempos <span className="text-terracota italic">— uma só leitura.</span>
              </h2>
            </Reveal>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          {/* LEFT — ladder of stages */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-1" data-testid="aromas-stages">
            {NOTAS.map((n, i) => (
              <button
                key={n.k}
                data-testid={`aroma-stage-${n.k}`}
                onClick={() => setActive(n.k)}
                className="text-left group relative rule-bottom py-8 transition-colors"
                style={{
                  color: active === n.k ? "#333" : "#6B6B68",
                }}
              >
                <div className="flex items-baseline justify-between gap-6">
                  <div>
                    <div className="eyebrow mb-3" style={{ color: "#6B6B68" }}>
                      Tempo {String(i + 1).padStart(2, "0")}
                    </div>
                    <div
                      className="font-display"
                      style={{
                        fontSize: "clamp(26px, 2.6vw, 36px)",
                        letterSpacing: "0.04em",
                        lineHeight: 1.1,
                      }}
                    >
                      {n.label}
                    </div>
                  </div>
                  <span
                    className="font-mono text-[11px] tracking-[0.22em]"
                    style={{ color: active === n.k ? "#C08261" : "#B0AFAB" }}
                  >
                    {active === n.k ? "● vivo" : "○"}
                  </span>
                </div>
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-full bg-terracota transition-all duration-700 ease-candle"
                  style={{
                    width: active === n.k ? 2 : 0,
                  }}
                />
              </button>
            ))}
          </div>

          {/* RIGHT — content panel with crossfade */}
          <div className="col-span-12 md:col-span-7 md:sticky md:top-32">
            <div className="relative aspect-[4/3] overflow-hidden mb-8 shadow-low">
              <div
                className="absolute inset-0 gd-candle-glow"
                aria-hidden
              />
              <AnimatePresence mode="wait">
                <motion.div
                  key={cur.k}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.99 }}
                  transition={{ duration: 0.9, ease: [0.36, 0.07, 0.19, 0.97] }}
                  className="absolute inset-0 flex items-end p-8 md:p-12"
                  style={{
                    background:
                      cur.k === "topo"
                        ? "linear-gradient(160deg, rgba(255,226,180,0.35), rgba(192,130,97,0.25))"
                        : cur.k === "coracao"
                        ? "linear-gradient(160deg, rgba(192,130,97,0.45), rgba(92,58,34,0.35))"
                        : "linear-gradient(160deg, rgba(138,154,91,0.4), rgba(61,70,38,0.45))",
                  }}
                >
                  <div>
                    <div
                      className="script text-cera mb-3"
                      style={{ fontSize: "clamp(40px,4.4vw,72px)", lineHeight: 1 }}
                    >
                      {cur.label.split(" ").slice(-1)[0].toLowerCase()}
                    </div>
                    <div className="eyebrow" style={{ color: "rgba(249,246,240,0.75)" }}>
                      {cur.aromas.length} matérias · pirâmide nº 04
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={cur.k + "-body"}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.7, ease: [0.36, 0.07, 0.19, 0.97] }}
              >
                <p className="text-carvao-600 text-[17px] leading-[1.8] max-w-[58ch] mb-8 font-light">
                  {cur.descricao}
                </p>
                <ul
                  data-testid="aroma-list"
                  className="flex flex-wrap gap-x-3 gap-y-3"
                >
                  {cur.aromas.map((a) => (
                    <li
                      key={a}
                      className="font-mono text-[11px] tracking-[0.22em] uppercase text-carvao-600 px-4 py-2 border border-[rgba(51,51,51,0.18)]"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
