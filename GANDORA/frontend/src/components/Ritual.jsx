import React from "react";
import Monogram from "./Monogram";

export default function Ritual() {
  return (
    <section
      id="ritual"
      data-testid="ritual-section"
      className="relative py-24 md:py-32 bg-salvia-200 reveal"
    >
      <div className="gd-paper-noise absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <aside className="col-span-12 lg:col-span-4 flex flex-col items-start gap-6 reveal reveal-delay-0">
            <Monogram size={72} stroke="var(--gd-terracota)" className="shrink-0" />
            <div>
              <div className="sec-index mb-3">§ IV</div>
              <div className="font-display text-[32px] md:text-[40px] tracking-[0.08em] text-carvao">
                Ritual
              </div>
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-8 space-y-8 reveal reveal-delay-1">
            <p className="font-display text-carvao text-[clamp(28px,4vw,42px)] leading-[1.05] tracking-[0.06em]">
              A Gandora vive na encruzilhada entre dois rituais silenciosos — acender uma chama e virar uma página.
            </p>
            <p className="text-carvao-600 max-w-[62ch] leading-[1.85]">
              Cada vela é pensada para o tempo de leitura. Para tardes em que a luz baixa encontra o cheiro de papel. Para a calma de mãos que seguram um livro com cuidado. O gesto é simples. O ambiente, uma biblioteca em luz âmbar.
            </p>
            <div className="gd-orn">
              <span>220g ·  cera vegetal</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
