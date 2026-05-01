import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  };

  return (
    <section
      id="newsletter"
      data-testid="newsletter-section"
      className="relative py-24 md:py-32 bg-cera"
    >
      <div className="gd-paper-noise absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16 text-center">
        <Reveal>
          <div className="eyebrow mb-6">Carta de leitura · trimestral</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2
            className="font-display text-carvao mb-6 mx-auto max-w-[20ch]"
            style={{
              fontSize: "clamp(30px, 4vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "0.02em",
            }}
          >
            Receba a próxima <span className="text-terracota italic">tiragem</span> antes do mundo.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-carvao-600 text-[16px] leading-[1.85] font-light max-w-[58ch] mx-auto mb-12">
            Quatro vezes por ano, uma carta editorial — leituras sugeridas, notas
            de bastidor do ateliê e o aviso silencioso de quando a próxima coleção abre.
          </p>
        </Reveal>

        <AnimatePresence mode="wait">
          {!sent ? (
            <motion.form
              key="form"
              data-testid="newsletter-form"
              onSubmit={submit}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.7, ease: [0.36, 0.07, 0.19, 0.97] }}
              className="flex flex-col sm:flex-row items-stretch gap-4 max-w-[640px] mx-auto"
            >
              <input
                data-testid="newsletter-email"
                type="email"
                required
                placeholder="seu endereço de e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="gd-input flex-1 text-center sm:text-left"
              />
              <button
                data-testid="newsletter-submit"
                type="submit"
                className="gd-btn gd-btn--terracota whitespace-nowrap"
              >
                Acender carta <span aria-hidden>→</span>
              </button>
            </motion.form>
          ) : (
            <motion.div
              key="ok"
              data-testid="newsletter-success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: [0.36, 0.07, 0.19, 0.97] }}
              className="max-w-[600px] mx-auto"
            >
              <div className="eyebrow mb-3" style={{ color: "#C08261" }}>● Carta acesa</div>
              <p className="font-display text-carvao text-[26px] md:text-[32px] mb-3" style={{ letterSpacing: "0.04em" }}>
                Bem-vindo ao silêncio.
              </p>
              <p className="text-carvao-600 text-[15px] font-light leading-[1.8] max-w-[52ch] mx-auto">
                Em breve, uma carta chega para <em>{email}</em> — escrita com calma,
                como tudo que sai do ateliê.
              </p>
              <p className="script text-terracota text-[26px] mt-6">
                — Gabriela
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="gd-orn font-mono text-[10px] tracking-[0.22em] uppercase mt-16 max-w-[420px] mx-auto">
          <span>Sem pressa · sem ruído · sem spam</span>
        </div>
      </div>
    </section>
  );
}
