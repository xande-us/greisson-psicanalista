"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsappHref } from "@/lib/site";

const links = [
  { href: "#psicanalise", label: "Psicanálise" },
  { href: "#sobre", label: "Sobre" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "FAQ" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
        scrolled
          ? "border-b border-primary/[0.06] bg-canvas/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-content flex h-[76px] items-center justify-between">
        <a
          href="#top"
          className="group flex flex-col leading-none"
          aria-label="Greisson Carvalho, Psicanalista — início"
        >
          <span className="font-display text-lg font-semibold tracking-tight text-primary">
            Greisson Carvalho
          </span>
          <span className="mt-0.5 text-[0.62rem] font-medium uppercase tracking-widest text-accent-deep">
            Psicanalista
          </span>
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative font-sans text-sm font-medium text-primary/70 transition-colors duration-300 hover:text-primary"
            >
              {l.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-400 ease-premium group-hover:w-full" />
            </a>
          ))}
        </div>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary hidden lg:inline-flex"
        >
          Agendar conversa
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-primary transition-colors hover:bg-primary/5 lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-t border-primary/5 bg-canvas/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 ease-premium lg:hidden ${
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-content flex flex-col gap-1 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-primary/5 py-3.5 font-sans text-base text-primary/80 transition-colors hover:text-accent-deep"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn-primary mt-4 w-full"
          >
            Agendar conversa
          </a>
        </div>
      </div>
    </header>
  );
}
