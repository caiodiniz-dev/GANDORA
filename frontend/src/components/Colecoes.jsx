import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Modal from "./Modal";

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
  const [selectedColecao, setSelectedColecao] = useState(null);

  const openModal = (colecao) => {
    setSelectedColecao(colecao);
  };

  const closeModal = () => {
    setSelectedColecao(null);
  };

  return (
    <>
      <section
        id="colecoes"
        data-testid="colecoes-section"
        className="relative py-24 md:py-32 bg-kraft reveal"
      >
        <div className="gd-paper-noise absolute inset-0" aria-hidden="true" />
        <div className="relative max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
          {/* Section header */}
          <header className="rule-bottom pb-8 mb-12 md:mb-20 grid grid-cols-12 gap-6 items-end reveal reveal-delay-0">
            <div className="col-span-12 md:col-span-4">
              <div className="sec-index mb-3">§ V</div>
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
                Coleções <span className="text-terracota">—</span> para a mesa de cabeceira & a biblioteca.
              </h2>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {COLECOES.map((c, i) => (
              <ColecaoCard key={c.n} c={c} index={i} onClick={() => openModal(c)} />
            ))}
          </div>

          <div className="mt-16 md:mt-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 rule-top pt-8 reveal reveal-delay-2">
            <p className="text-carvao-400 text-[14px] font-light max-w-[58ch]">
              Cada edição é produzida em pequenos lotes, numerados à mão e lacrados
              com cera. Quando uma tiragem se esgota, ela não retorna — retorna
              apenas a intenção, em forma nova.
            </p>
            <a
              href="https://www.instagram.com/gandora.porgabriela/"
              target="_blank"
              rel="noreferrer noopener"
              data-testid="colecoes-encomenda"
              className="gd-btn gd-btn--terracota whitespace-nowrap"
            >
              Encomendar · Nº 04 <ArrowUpRight size={14} strokeWidth={1.25} />
            </a>
          </div>
        </div>
      </section>

      <Modal isOpen={!!selectedColecao} onClose={closeModal}>
        {selectedColecao && (
          <div className="space-y-8">
            <div className="text-center">
              <div className="eyebrow mb-2">{selectedColecao.n}</div>
              <h3 className="font-display text-carvao text-[32px] md:text-[40px] tracking-[0.04em]">
                {selectedColecao.nome}
              </h3>
              <p className="script text-terracota text-[24px] mt-4">
                {selectedColecao.tagline}
              </p>
            </div>

            <div className="aspect-[4/3] overflow-hidden rounded-none">
              <img
                src={selectedColecao.img}
                alt={selectedColecao.nome}
                className="editorial-img w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="eyebrow mb-2">Notas olfativas</div>
                <p className="font-mono text-[12px] tracking-[0.18em] text-carvao-600 uppercase">
                  {selectedColecao.notas}
                </p>
              </div>
              <div>
                <div className="eyebrow mb-2">Especificações</div>
                <dl className="space-y-1">
                  <div className="flex justify-between">
                    <dt className="text-carvao-600">Peso</dt>
                    <dd className="font-mono text-[12px]">{selectedColecao.peso}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-carvao-600">Queima</dt>
                    <dd className="font-mono text-[12px]">{selectedColecao.queima}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <p className="text-carvao-600 leading-[1.8] text-[16px]">
              {selectedColecao.descricao}
            </p>

            <div className="flex justify-center pt-4">
              <a
                href="https://www.instagram.com/gandora.porgabriela/"
                target="_blank"
                rel="noreferrer noopener"
                className="gd-btn gd-btn--terracota"
              >
                Encomendar esta coleção <ArrowUpRight size={14} strokeWidth={1.25} />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}

function ColecaoCard({ c, index, onClick }) {
  return (
    <article
      data-testid={`colecao-card-${index}`}
      className={`gd-card relative flex flex-col reveal reveal-delay-${(index % 2) + 1} cursor-pointer`}
      onClick={onClick}
    >
      {/* header bar */}
      <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(51,51,51,0.14)]">
        <span className="eyebrow">{c.n}</span>
        <span className="eyebrow" style={{ color: "var(--gd-terracota)" }}>
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
              "radial-gradient(ellipse at 50% 40%, rgba(192,130,97,0.18), transparent 55%), linear-gradient(180deg, rgba(51,33,18,0) 60%, rgba(51,33,18,0.3) 100%)",
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
