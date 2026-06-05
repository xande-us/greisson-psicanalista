import { Instagram, Mail, MapPin, Phone, Clock } from "lucide-react";
import { whatsappHref, site } from "@/lib/site";

const navLinks = [
  { href: "#psicanalise", label: "Como ajuda" },
  { href: "#sobre", label: "Sobre" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#processo", label: "Processo" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-primary/[0.08] bg-secondary/60">
      <div className="container-content py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Marca + SEO local */}
          <div>
            <p className="font-display text-2xl font-semibold text-primary">
              Greisson Carvalho
            </p>
            <p className="mt-1 text-sm uppercase tracking-widest text-accent-deep">
              Psicanalista
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink/65">
              Atendimento psicanalítico online para todo o Brasil e presencial na
              Ilha do Governador, Rio de Janeiro. Um espaço seguro, ético e
              sigiloso para compreender o sofrimento e construir novos caminhos.
            </p>
          </div>

          {/* Navegação */}
          <nav aria-label="Navegação do rodapé">
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Navegação
            </p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:grid-cols-1">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-ink/65 transition-colors duration-300 hover:text-accent-deep"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <p className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
              Contato
            </p>
            <ul className="mt-5 space-y-4 text-sm text-ink/70">
              <li>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 transition-colors hover:text-accent-deep"
                >
                  <Phone size={16} className="text-accent-deep" />
                  {site.whatsappDisplay}
                </a>
              </li>
              <li className="inline-flex items-center gap-3">
                <Instagram size={16} className="text-accent-deep" />
                {site.instagram}
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-3 transition-colors hover:text-accent-deep"
                >
                  <Mail size={16} className="text-accent-deep" />
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent-deep" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-accent-deep" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Tags SEO local discretas */}
        <div className="mt-14 border-t border-primary/[0.08] pt-8">
          <p className="text-xs leading-relaxed text-ink/45">
            Psicanalista na Ilha do Governador · Psicanalista no Rio de Janeiro ·
            Psicanalista online · Atendimento psicanalítico online para todo o
            Brasil
          </p>
          <div className="mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <p className="text-xs text-ink/50">
              © {year} Greisson Carvalho · Psicanalista. Todos os direitos
              reservados.
            </p>
            <a
              href="#"
              className="text-xs text-ink/50 transition-colors hover:text-accent-deep"
            >
              Política de privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
