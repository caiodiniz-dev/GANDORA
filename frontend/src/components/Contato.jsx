import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

export default function Contato() {
  const [form, setForm] = useState({ nome: "", email: "", mensagem: "", motivo: "encomenda" });
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.nome || !form.email || !form.mensagem) return;
    setSent(true);
  };

  return (
    <section
      id="contato"
      data-testid="contato-section"
      className="relative py-24 md:py-32 bg-cera-50"
    >
      <div className="gd-paper-noise absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <header className="rule-bottom pb-8 mb-16 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-4">
            <div className="sec-index mb-3">§ VI</div>
            <div className="eyebrow">Atelier · Encomenda · Imprensa</div>
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
                Escreva uma carta. <span className="text-terracota italic">Devolveremos uma vela.</span>
              </h2>
            </Reveal>
          </div>
        </header>

        <div className="grid grid-cols-12 gap-12 md:gap-16">
          {/* LEFT — info */}
          <div className="col-span-12 md:col-span-5">
            <p className="text-carvao-600 text-[16px] leading-[1.85] font-light max-w-[48ch] mb-12">
              Recebemos cartas de encomenda, parceria e imprensa. As respostas
              acontecem nas tardes — pode levar dois ou três dias até a chama
              alcançar a sua mensagem.
            </p>

            <ul className="flex flex-col gap-8 rule-top pt-8" data-testid="contato-info">
              {[
                { k: "Atelier", v: "Rua das Acácias, 084 · Campinas · SP", sub: "Visitas com hora marcada" },
                { k: "E-mail", v: "gabriela@gandora.com.br", sub: "respondido em até 72h" },
                { k: "Instagram", v: "@gandora.porgrabriela", sub: "registros do ateliê & coleções" },
                { k: "Imprensa", v: "imprensa@gandora.com.br", sub: "kit & high-res sob solicitação" },
              ].map((i) => (
                <li key={i.k}>
                  <div className="eyebrow mb-2">{i.k}</div>
                  <div className="font-display text-carvao text-[20px] md:text-[22px]" style={{ letterSpacing: "0.04em" }}>
                    {i.v}
                  </div>
                  <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-carvao-400 mt-2">
                    {i.sub}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — form */}
          <div className="col-span-12 md:col-span-7">
            <AnimatePresence mode="wait">
              {!sent ? (
                <motion.form
                  key="form"
                  data-testid="contato-form"
                  onSubmit={submit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.7 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10"
                  style={{ background: "#F9F6F0", border: "1px solid rgba(51,51,51,0.14)", padding: "40px" }}
                >
                  <div className="md:col-span-2">
                    <div className="eyebrow mb-4">Motivo da carta</div>
                    <div className="flex flex-wrap gap-2" data-testid="contato-motivos">
                      {[
                        { k: "encomenda", l: "Encomenda" },
                        { k: "parceria", l: "Parceria" },
                        { k: "imprensa", l: "Imprensa" },
                        { k: "outro", l: "Outro motivo" },
                      ].map((m) => (
                        <button
                          type="button"
                          key={m.k}
                          onClick={() => setForm((f) => ({ ...f, motivo: m.k }))}
                          className="font-mono text-[11px] tracking-[0.22em] uppercase px-4 py-2 transition-colors"
                          style={{
                            border: `1px solid ${form.motivo === m.k ? "#C08261" : "rgba(51,51,51,0.18)"}`,
                            background: form.motivo === m.k ? "#C08261" : "transparent",
                            color: form.motivo === m.k ? "#F9F6F0" : "#6B6B68",
                          }}
                        >
                          {m.l}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="block">
                    <div className="eyebrow mb-3">Seu nome</div>
                    <input
                      data-testid="contato-nome"
                      required
                      value={form.nome}
                      onChange={update("nome")}
                      className="gd-input"
                      placeholder="como assinará a carta"
                    />
                  </label>

                  <label className="block">
                    <div className="eyebrow mb-3">Endereço de retorno</div>
                    <input
                      data-testid="contato-email"
                      required
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      className="gd-input"
                      placeholder="seu e-mail"
                    />
                  </label>

                  <label className="block md:col-span-2">
                    <div className="eyebrow mb-3">Mensagem</div>
                    <textarea
                      data-testid="contato-mensagem"
                      required
                      rows={5}
                      value={form.mensagem}
                      onChange={update("mensagem")}
                      className="gd-input"
                      style={{ resize: "vertical", minHeight: 110 }}
                      placeholder="conte-nos com calma, sem pressa"
                    />
                  </label>

                  <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-carvao-400">
                      Suas respostas chegam manuscritas <span className="script normal-case text-terracota text-[18px]">— com calma.</span>
                    </p>
                    <button data-testid="contato-submit" type="submit" className="gd-btn">
                      Enviar a carta <span aria-hidden>→</span>
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="thanks"
                  data-testid="contato-success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: [0.36, 0.07, 0.19, 0.97] }}
                  style={{ background: "#F9F6F0", border: "1px solid rgba(51,51,51,0.14)", padding: "60px" }}
                >
                  <div className="eyebrow mb-4" style={{ color: "#C08261" }}>● Carta recebida</div>
                  <h3 className="font-display text-[28px] md:text-[36px] mb-6" style={{ letterSpacing: "0.04em", lineHeight: 1.1 }}>
                    Obrigado, {form.nome}.
                  </h3>
                  <p className="text-carvao-600 text-[16px] font-light leading-[1.8] max-w-[52ch] mb-8">
                    Sua mensagem chegou ao ateliê. Como aqui o ritmo é o do papel
                    e da cera, devolveremos por <em>{form.email}</em> em até três tardes —
                    com a mesma atenção que damos a um pavio recém-trançado.
                  </p>
                  <p className="script text-terracota text-[28px]">
                    — Gabriela Diniz
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
