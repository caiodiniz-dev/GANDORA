import React from "react";
import Monogram from "./Monogram";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="relative pt-20 md:pt-28 pb-10 text-cera"
      style={{ background: "#1F1F1F" }}
    >
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at 70% 0%, rgba(192,130,97,0.20), transparent 50%)",
        }}
      />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-10 pb-14" style={{ borderBottom: "1px solid rgba(249,246,240,0.14)" }}>
          {/* brand block */}
          <div className="col-span-12 md:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Monogram size={44} stroke="#F9F6F0" />
              <div className="font-display tracking-[0.22em] text-[20px]">GANDORA</div>
            </div>
            <p className="script text-[24px]" style={{ color: "#C08261" }}>
              por Gabriela Diniz
            </p>
            <p className="text-[14px] font-light leading-[1.85]" style={{ color: "rgba(249,246,240,0.7)", maxWidth: "44ch" }}>
              Velas artesanais, em cera vegetal, para tardes longas e capítulos sem pressa.
              Pequenos lotes, numerados à mão, no ateliê em Campinas · SP.
            </p>
          </div>

          {/* links */}
          <div className="col-span-6 md:col-span-3">
            <div className="eyebrow mb-5" style={{ color: "rgba(249,246,240,0.6)" }}>Sumário</div>
            <ul className="flex flex-col gap-3">
              {[
                ["#manifesto", "Manifesto"],
                ["#colecoes", "Coleções"],
                ["#aromas", "Aromas"],
                ["#ritual", "Ritual"],
                ["#sobre", "Sobre"],
                ["#contato", "Contato"],
              ].map(([href, l]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="font-mono text-[11px] tracking-[0.22em] uppercase nav-link"
                    style={{ color: "rgba(249,246,240,0.85)" }}
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div className="col-span-6 md:col-span-4">
            <div className="eyebrow mb-5" style={{ color: "rgba(249,246,240,0.6)" }}>Atelier</div>
            <ul className="flex flex-col gap-4 text-[14px] font-light" style={{ color: "rgba(249,246,240,0.85)" }}>
              <li>Rua das Acácias, 084 · Campinas · SP</li>
              <li>
                <a href="mailto:gabriela@gandora.com.br" style={{ color: "#C08261" }}>
                  gabriela@gandora.com.br
                </a>
              </li>
              <li>+55 31 99812 · 4407</li>
              <li className="font-mono text-[10px] tracking-[0.22em] uppercase" style={{ color: "rgba(249,246,240,0.6)" }}>
                @gandora.porgrabriela
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-8">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase" style={{ color: "rgba(249,246,240,0.55)" }}>
            © MMXX — MMXXVI · Gandora · Velas & Produtos Artesanais · {year}
          </p>
          <p className="script text-[20px]" style={{ color: "#C08261" }}>
            Luz, papel & silêncio.
          </p>
        </div>
      </div>
    </footer>
  );
}
