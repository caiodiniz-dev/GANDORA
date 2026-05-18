import React from "react";
import vela1 from "../assets/vela-1.jpg";
import vela2 from "../assets/vela-2.jpg";
import vela3 from "../assets/vela-3.jpg";
import vela4 from "../assets/vela-4.jpg";

const PROCESSO = [
  {
    passo: "01",
    titulo: "Seleção de matérias-primas",
    descricao: "Cada fragrância é composta a partir de óleos essenciais botânicos puros, sem sintéticos. Trabalhamos diretamente com fornecedores artesanais.",
    imagem: vela1,
  },
  {
    passo: "02",
    titulo: "Fusão artesanal",
    descricao: "A cera vegetal é derretida lentamente em pequenos lotes. Cada vela é vazada à mão, garantindo qualidade e atenção aos detalhes.",
    imagem: vela2,
  },
  {
    passo: "03",
    titulo: "Numeração e lacração",
    descricao: "Cada peça recebe um número único, gravado à mão. O lacre de cera com o monograma Gandora garante autenticidade e beleza.",
    imagem: vela3,
  },
  {
    passo: "04",
    titulo: "Embalagem editorial",
    descricao: "A apresentação segue o conceito editorial: papel kraft reciclado, cordões naturais e uma etiqueta minimalista com informações técnicas.",
    imagem: vela4,
  },
];

export default function Processo() {
  return (
    <section id="processo" className="relative py-24 md:py-32 bg-salvia-200 reveal">
      <div className="gd-paper-noise absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="text-center mb-16 reveal reveal-delay-0">
          <div className="sec-index mb-3">§ V</div>
          <h2 className="font-display text-carvao text-[clamp(32px,4vw,56px)] leading-[1.1] tracking-[0.04em]">
            O processo artesanal
          </h2>
          <p className="mt-6 text-carvao-600 max-w-[58ch] mx-auto leading-[1.8]">
            Cada vela Gandora é feita à mão, passo a passo, com atenção aos detalhes que fazem a diferença entre um produto e uma peça de arte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {PROCESSO.map((item, index) => (
            <article
              key={item.passo}
              className="gd-card bg-cera-50 border border-[rgba(51,51,51,0.14)] overflow-hidden reveal reveal-delay-1 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  className="editorial-img w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mono text-[24px] font-bold text-terracota">
                    {item.passo}
                  </span>
                  <h3 className="font-display text-carvao text-[20px] tracking-[0.04em]">
                    {item.titulo}
                  </h3>
                </div>
                <p className="text-carvao-600 text-[15px] leading-[1.8]">
                  {item.descricao}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}