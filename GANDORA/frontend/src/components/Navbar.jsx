import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

// CORRIGIDO: Alterada a extensão de .png para .jpg de acordo com seus arquivos
import logo from "../assets/logo.jpg";

const LINKS = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Detalhes", href: "#detalhes" },
  { label: "Ritual", href: "#ritual" },
  { label: "Coleções", href: "#colecoes" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gandora.porgabriela/",
    external: true,
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-[background,border,backdrop-filter] duration-500 ease-candle ${scrolled
          ? "bg-cera/90 border-b border-[rgba(51,51,51,0.14)] backdrop-blur-[6px]"
          : "bg-transparent border-b border-transparent"
        }`}
      style={{ transition: "background-color 400ms cubic-bezier(0.36,0.07,0.19,0.97), border-color 400ms" }}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="flex items-center justify-between py-5">
          <a
            href="#top"
            data-testid="navbar-logo"
            className="flex items-center gap-3 group"
          >
            {/* CORRIGIDO: src ajustado e tamanho aumentado para h-16 / md:h-20 */}
            <img
              src={logo}
              alt="GANDORA terracota logo"
              className="h-16 md:h-20 w-auto transition-transform duration-700 ease-candle group-hover:-translate-y-0.5"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noreferrer noopener" : undefined}
                data-testid={`nav-link-${l.label.toLowerCase()}`}
                className="nav-link font-mono text-[11px] tracking-[0.22em] uppercase text-carvao-600"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-5">
            <span className="eyebrow">Campinas · SP</span>
            <a
              href="#colecoes"
              data-testid="nav-cta"
              className="gd-btn gd-btn--terracota"
            >
              Coleções <span aria-hidden>→</span>
            </a>
          </div>

          <button
            data-testid="nav-menu-toggle"
            aria-label="Abrir menu"
            className="md:hidden p-2 text-carvao"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
          </button>
        </div>

        {/* Mobile drawer */}
        {open && (
          <div
            data-testid="mobile-menu"
            className="md:hidden pb-6 flex flex-col gap-4 border-t border-[rgba(51,51,51,0.14)] pt-5"
          >
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-[12px] tracking-[0.22em] uppercase text-carvao-600"
              >
                {l.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}