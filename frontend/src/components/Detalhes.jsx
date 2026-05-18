import React from "react";

const DETAILS = [
  {
    title: "Artesanato consciente",
    text: "Cada vela nasce de um processo manual, com cera vegetal e pavios de algodão trançado. O acabamento é sutil, pensado para as superfícies de livros e mesas de leitura.",
  },
  {
    title: "Atmosfera dos rituais",
    text: "Notamos o ciclo da leitura: a luz baixa, o som da página e o tempo desacelerado. Nossas coleções acompanham esse ritmo com fragrâncias que não competem com a atenção.",
  },
  {
    title: "Presente perfeito",
    text: "Embalagens simples e elegantes, ideais para presentear quem gosta de gestos pessoais e objetos com memória. A assinatura Gandora é discreta e cuidadosa.",
  },
];

export default function Detalhes() {
  return (
    <section id="detalhes" className="relative py-24 md:py-32 bg-terracota-200 reveal">
      <div className="gd-paper-noise absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-start">
          <aside className="col-span-12 lg:col-span-4 reveal reveal-delay-0">
            <div className="sec-index mb-3">§ II</div>
            <div className="font-display text-[32px] md:text-[40px] tracking-[0.08em] text-carvao">
              Por que Gandora
            </div>
          </aside>

          <div className="col-span-12 lg:col-span-8 space-y-8 reveal reveal-delay-1">
            <p className="font-display text-carvao text-[clamp(28px,4vw,42px)] leading-[1.05] tracking-[0.06em]">
              Um ato pequeno que transforma a leitura em um ritual sensorial.
            </p>
            <p className="text-carvao-600 max-w-[62ch] leading-[1.85]">
              As coleções Gandora são pensadas para quem busca mais do que um aroma —
              busca o cenário e a calma que dão significado à página. Cada vela é
              criada para encaixar na rotina de quem lê devagar, contempla e retorna.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {DETAILS.map((item) => (
                <article
                  key={item.title}
                  className="gd-card p-6 bg-cera-50 border-[rgba(51,51,51,0.12)]"
                >
                  <h3 className="font-display text-carvao text-[20px] mb-4 tracking-[0.04em]">
                    {item.title}
                  </h3>
                  <p className="text-carvao-600 text-[15px] leading-[1.8]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-4">
              <a
                href="#colecoes"
                className="gd-btn gd-btn--light"
              >
                Ver coleções
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
