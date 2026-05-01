import React from "react";
import { ArrowUpRight } from "lucide-react";

const COLECOES = [
  {
    n: "Nº 01",
    nome: "Cedro & Tabaco",
    tagline: "Para tardes longas & poltronas fundas.",
    notas: "Cedro vermelho · tabaco curado · papel envelhecido",
    peso: "220g",
    queima: "40h",
    cor: "terracota",
    img: "https://images.unsplash.com/photo-1517912492584-df5423d3c437?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    descricao:
      "A encadernação de couro sobre a escrivaninha, o cinzeiro de bronze que nunca viu fumaça — um perfume de biblioteca ancestral, ajustado ao pulso do inverno.",
  },
  {
    n: "Nº 02",
    nome: "Luz & Tempo",
    tagline: "A hora azul do entardecer em cera.",
    notas: "Mel âmbar · baunilha de Madagascar · musgo",
    peso: "220g",
    queima: "42h",
    cor: "cera",
    img: "https://images.unsplash.com/photo-1692953687790-9d33f0129a0b?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    descricao:
      "A tarde que insiste em ficar, o ponteiro que se arrasta sobre a mesa de mogno, o último raio que cai no canto da página — uma coleção de afeto ao que demora.",
  },
  {
    n: "Nº 03",
    nome: "Jardim Monástico",
    tagline: "Ervas do claustro, ao anoitecer.",
    notas: "Sálvia · alecrim · lavanda dos Alpes · cedro branco",
    peso: "220g",
    queima: "38h",
    cor: "salvia",
    img: "https://images.unsplash.com/photo-1762102866829-427130c23d12?crop=entropy&cs=srgb&fm=jpg&q=85&w=900",
    descricao:
      "Os canteiros de pedra do mosteiro, as ervas prensadas entre páginas de salmos — o frescor botânico que se contém, disciplinado como o canto gregoriano.",
  },
];

export default function Colecoes() {
  return (
    <section
      id="colecoes"
      data-testid="colecoes-section"
      className="relative py-24 md:py-32 bg-cera"
    >
      <div className="gd-paper-noise absolute inset-0" aria-hidden="true" />
      <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Section header */}
        <header className="rule-bottom pb-8 mb-12 md:mb-20 grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-4">
            <div className="sec-index mb-3">§ II</div>
            <div className="eyebrow">Catálogo · Nº 04 / MMXXVI</div>
          </div>
          <div className="col-span-12 md:col-span-8">
            <h2
              className="font-display text-carvao"
              style={{
                fontSize: "clamp(28px, 3.4vw, 48px)",
                lineHeight: 1.1,
                letterSpacing: "0.04em",
              }}
            >
              Coleções <span className="text-terracota">—</span> para a <br className="hidden md:block" />
              mesa de cabeceira & a biblioteca.
            </h2>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {COLECOES.map((c, i) => (
            <ColecaoCard key={c.n} c={c} index={i} />
          ))}
        </div>

        <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rule-top pt-8">
          <p className="text-carvao-400 text-[14px] font-light max-w-[58ch]">
            Cada edição é produzida em pequenos lotes, numerados à mão e lacrados
            com cera. Quando uma tiragem se esgota, ela não retorna — retorna
            apenas a intenção, em forma nova.
          </p>
          <a
            href="#contato"
            data-testid="colecoes-encomenda"
            className="gd-btn gd-btn--terracota whitespace-nowrap"
          >
            Encomendar · Nº 04 <ArrowUpRight size={14} strokeWidth={1.25} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ColecaoCard({ c, index }) {
  return (
    <article
      data-testid={`colecao-card-${index}`}
      className="gd-card relative flex flex-col"
    >
      {/* header bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(51,51,51,0.14)]">
        <span className="eyebrow">{c.n}</span>
        <span className="eyebrow" style={{ color: "#C08261" }}>
          {c.peso} · {c.queima}
        </span>
      </div>

      <figure className="relative aspect-[4/5] overflow-hidden">
        <img
          src={c.img}
          alt={`${c.nome} — ${c.tagline}`}
          className="editorial-img w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 40%, rgba(255,220,170,0.2), transparent 55%), linear-gradient(180deg, rgba(51,33,18,0) 60%, rgba(51,33,18,0.3) 100%)",
          }}
        />
        <figcaption className="absolute bottom-4 left-4 text-cera script text-[24px]">
          {c.nome.split(" & ")[0].toLowerCase()}
        </figcaption>
      </figure>

      <div className="p-6 md:p-7 flex-1 flex flex-col">
        <h3
          className="font-display text-carvao mb-2"
          style={{ fontSize: "26px", letterSpacing: "0.04em" }}
        >
          {c.nome}
        </h3>
        <p className="script text-terracota text-[20px] mb-4 leading-tight">
          {c.tagline}
        </p>
        <p className="text-carvao-600 text-[14px] leading-[1.7] font-light mb-6 flex-1">
          {c.descricao}
        </p>

        <div className="rule-top pt-4">
          <div className="eyebrow mb-2">Notas olfativas</div>
          <p className="font-mono text-[11px] tracking-[0.18em] text-carvao-600 uppercase">
            {c.notas}
          </p>
        </div>
      </div>
    </article>
  );
}
