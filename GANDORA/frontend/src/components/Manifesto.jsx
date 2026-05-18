import React from "react";
import Monogram from "./Monogram";

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      data-testid="manifesto-section"
      className="relative py-24 md:py-32 bg-cera-50 reveal"
    >
      <div className="gd-paper-noise absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* LEFT — index + label */}
          <aside className="col-span-12 md:col-span-3">
            <div className="flex md:flex-col md:gap-6 gap-4 items-start md:sticky md:top-28 reveal reveal-delay-0">
              <div className="sec-index">§ I</div>
              <div className="eyebrow">Manifesto</div>
              <Monogram size={36} stroke="var(--gd-terracota)" className="hidden md:block mt-6" />
            </div>
          </aside>

          {/* RIGHT — editorial body */}
          <div className="col-span-12 md:col-span-9 max-w-[64ch] reveal reveal-delay-1">
            <h2
              className="font-display text-carvao mb-12"
              style={{
                fontSize: "clamp(30px, 3.6vw, 52px)",
                lineHeight: 1.12,
                letterSpacing: "0.04em",
              }}
            >
              Acender uma vela é <br />
              prolongar a tarde — <br />
              <span className="text-terracota italic">e dar à página o tempo</span> <br />
              que ela merece.
            </h2>

            <p className="dropcap text-carvao-600 text-[17px] leading-[1.8] mb-8">
              A Gandora nasceu do hábito antigo de ler ao cair da luz, quando a
              sala se despede do dia e os livros, finalmente, ganham peso. Não
              vendemos velas — construímos o cenário silencioso da leitura,
              onde a chama é companhia e a página, destino.
            </p>

            <p className="text-carvao-600 text-[17px] leading-[1.8] mb-8">
              Cada peça é feita à mão, em pequenos lotes, com cera vegetal,
              pavios de algodão trançado e fragrâncias compostas a partir de
              matérias botânicas — nunca sintéticos agressivos. A queima é
              limpa, longa, e o cheiro se assenta devagar, como grifo em
              caderno.
            </p>

            <p className="text-carvao-600 text-[17px] leading-[1.8]">
              Nossa referência visual é a biblioteca monástica, o ateliê da
              escritora, o jardim de ervas ao fundo da casa. Acreditamos no
              pouco, feito com cuidado. No tempo que o artesanato pede. No
              silêncio que o livro devolve.
            </p>

            <div className="gd-orn mt-16 font-mono text-[10px] tracking-[0.22em] uppercase">
              <span>Campinas · MMXXVI</span>
            </div>

            <p className="script text-terracota text-[28px] md:text-[34px] mt-8">
              — Gabriela Diniz
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
