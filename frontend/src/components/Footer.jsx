import React from "react";

export default function Footer() {
  return (
    <footer className="relative py-16 bg-carvao text-cera reveal">
      <div className="gd-paper-noise absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          <div className="space-y-4">
            <div className="sec-index text-cera/70">§ VII</div>
            <p className="font-display text-[28px] md:text-[32px] leading-[1.05]">
              Encontre a luz que torna a leitura mais leve.
            </p>
          </div>

          <div className="space-y-4 text-[15px] text-cera/80 leading-[1.8]">
            <p>
              Velas produzidas em pequenos lotes, com atenção à origem das matérias-primas e ao acabamento manual.
            </p>
            <p>
              Pedido e contato: <a href="https://www.instagram.com/gandora.porgabriela/" className="underline">@gandora.porgabriela</a>
            </p>
          </div>

          <div className="space-y-3 text-[13px] text-cera/70">
            <p>Campinas · São Paulo</p>
            <p>MMXXVI</p>
            <p>Feito para quem lê com calma.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
