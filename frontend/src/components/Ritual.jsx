import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";
import BreathingCandle from "./BreathingCandle";

const PASSOS = [
  {
    n: "I",
    titulo: "A escolha do livro",
    eyebrow: "primeiro gesto",
    body: "Escolher a leitura antes da chama — não o contrário. O livro define a temperatura do ambiente, não o aroma. Para um romance denso, prefira Bibliotheca; para uma manhã contemplativa, Jardim Monástico.",
    aromaSugerido: "Bibliotheca · Cedro & Tabaco",
  },
  {
    n: "II",
    titulo: "O acender",
    eyebrow: "segundo gesto",
    body: "Aproxime o fósforo do pavio em ângulo de 45° — dois a três segundos bastam. Deixe a primeira queima atingir toda a superfície da cera (cerca de 40 minutos). É o que evita que a vela ‘túnel’ no centro.",
    aromaSugerido: "Pavio de algodão trançado",
  },
  {
    n: "III",
    titulo: "A página aberta",
    eyebrow: "terceiro gesto",
    body: "Posicione o livro a uma palma da chama. A luz baixa convida o olho a desacelerar — a velocidade de leitura cai naturalmente, e o texto se assenta. É o tempo expandido que a Gandora costura.",
    aromaSugerido: "Distância · 12 a 18 cm",
  },
  {
    n: "IV",
    titulo: "O apagar",
    eyebrow: "último gesto",
    body: "Não sopre. O sopro estilhaça a cera derretida. Use a tampa, ou um abafador. O aroma residual permanecerá no ambiente por 20 a 30 minutos — o tempo suficiente para fechar o livro com calma.",
    aromaSugerido: "Tampa em cerâmica fosca",
  },
];

export default function Ritual() {
  const [step, setStep] = useState(0);
  const cur = PASSOS[step];

  return (
    <section
      id="ritual"
      data-testid="ritual-section"
      className="relative py-24 md:py-32"
      style={{ background: "#2A2A2A", color: "#F9F6F0" }}
    >
      {/* warm haze */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 20%, rgba(192,130,97,0.18), transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(138,154,91,0.10), transparent 55%)",
        }}
      />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <header className="pb-8 mb-12 md:mb-20 grid grid-cols-12 gap-6 items-end" style={{ borderBottom: "1px solid rgba(249,246,240,0.14)" }}>
          <div className="col-span-12 md:col-span-4">
            <div className="sec-index mb-3" style={{ color: "rgba(249,246,240,0.55)" }}>§ IV</div>
            <div className="eyebrow" style={{ color: "rgba(249,246,240,0.65)" }}>O Ritual · Quatro Gestos</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(28px, 3.4vw, 48px)",
                  lineHeight: 1.1,
                  letterSpacing: "0.04em",
                  color: "#F9F6F0",
                }}
              >
                Como acender o tempo <br />
                <span style={{ color: "#C08261" }} className="italic">— sem incendiar a pressa.</span>
              </h2>
            </Reveal>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
          {/* LEFT — candle visual + step indicator */}
          <div className="col-span-12 md:col-span-5 flex flex-col items-center md:items-start">
            <div className="relative" style={{ minHeight: 360 }}>
              <BreathingCandle size={210} label={cur.titulo.split(" ").slice(-1)[0]} />
            </div>

            <div className="mt-10 w-full grid grid-cols-4 gap-2" data-testid="ritual-steps">
              {PASSOS.map((p, i) => (
                <button
                  key={p.n}
                  data-testid={`ritual-step-${i}`}
                  onClick={() => setStep(i)}
                  className="group flex flex-col items-start py-4 transition-colors"
                  style={{
                    borderTop: `1px solid ${i === step ? "#C08261" : "rgba(249,246,240,0.18)"}`,
                    color: i === step ? "#F9F6F0" : "rgba(249,246,240,0.55)",
                  }}
                >
                  <span
                    className="font-mono text-[10px] tracking-[0.22em]"
                    style={{ color: i === step ? "#C08261" : "rgba(249,246,240,0.4)" }}
                  >
                    {p.n}
                  </span>
                  <span className="font-display mt-1 text-[12px] uppercase" style={{ letterSpacing: "0.18em" }}>
                    Gesto
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* RIGHT — page-turn body */}
          <div className="col-span-12 md:col-span-7 relative" style={{ perspective: "1600px" }}>
            <AnimatePresence mode="wait">
              <motion.article
                key={cur.n}
                initial={{ rotateY: -22, opacity: 0, x: 40 }}
                animate={{ rotateY: 0, opacity: 1, x: 0 }}
                exit={{ rotateY: 22, opacity: 0, x: -40 }}
                transition={{ duration: 1, ease: [0.36, 0.07, 0.19, 0.97] }}
                style={{
                  transformOrigin: "left center",
                  background: "rgba(249,246,240,0.04)",
                  border: "1px solid rgba(249,246,240,0.14)",
                  padding: "48px",
                }}
                className="relative"
              >
                <div
                  className="absolute -top-px left-0 h-[2px]"
                  style={{ background: "#C08261", width: 64 }}
                  aria-hidden
                />
                <div className="eyebrow mb-4" style={{ color: "rgba(249,246,240,0.55)" }}>
                  {cur.eyebrow}
                </div>
                <h3
                  className="font-display mb-6"
                  style={{
                    fontSize: "clamp(28px,3vw,42px)",
                    color: "#F9F6F0",
                    letterSpacing: "0.04em",
                    lineHeight: 1.1,
                  }}
                >
                  <span style={{ color: "#C08261" }}>{cur.n}.</span> {cur.titulo}
                </h3>
                <p
                  className="text-[17px] font-light max-w-[58ch]"
                  style={{ color: "rgba(249,246,240,0.85)", lineHeight: 1.85 }}
                >
                  {cur.body}
                </p>

                <div
                  className="mt-10 pt-6 flex flex-wrap gap-x-12 gap-y-4"
                  style={{ borderTop: "1px dashed rgba(249,246,240,0.18)" }}
                >
                  <div>
                    <div className="eyebrow mb-2" style={{ color: "rgba(249,246,240,0.55)" }}>
                      Acompanha
                    </div>
                    <div className="font-mono text-[12px] tracking-[0.18em] uppercase" style={{ color: "#F9F6F0" }}>
                      {cur.aromaSugerido}
                    </div>
                  </div>
                  <div>
                    <div className="eyebrow mb-2" style={{ color: "rgba(249,246,240,0.55)" }}>
                      Página
                    </div>
                    <div className="font-mono text-[12px] tracking-[0.18em] uppercase" style={{ color: "#F9F6F0" }}>
                      {String(step + 1).padStart(2, "0")} / {String(PASSOS.length).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </motion.article>
            </AnimatePresence>

            <div className="mt-8 flex items-center justify-between">
              <button
                data-testid="ritual-prev"
                onClick={() => setStep((s) => (s - 1 + PASSOS.length) % PASSOS.length)}
                className="font-mono text-[11px] tracking-[0.22em] uppercase"
                style={{ color: "rgba(249,246,240,0.7)" }}
              >
                ← Página anterior
              </button>
              <span className="script" style={{ color: "#C08261", fontSize: 28 }}>
                vire a página
              </span>
              <button
                data-testid="ritual-next"
                onClick={() => setStep((s) => (s + 1) % PASSOS.length)}
                className="font-mono text-[11px] tracking-[0.22em] uppercase"
                style={{ color: "rgba(249,246,240,0.7)" }}
              >
                Próxima página →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
