import { MessageCircle, Globe, MapPin, Clock } from "lucide-react";
import { Reveal } from "./anim/Reveal";
import { whatsappHref, site } from "@/lib/site";
import { ContactForm } from "./ContactForm";

export function FinalCta() {
  return (
    <section id="contato" className="relative py-section">
      <div className="container-content">
        <Reveal>
          <div className="grain relative overflow-hidden rounded-[2rem] bg-primary px-6 py-16 shadow-lift sm:px-12 sm:py-20 lg:px-16 lg:py-24">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-32 left-1/2 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/[0.12] blur-[140px]" />
              <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-accent/[0.05] blur-[100px]" />
            </div>

            <div className="relative z-10 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
              {/* Coluna 1 — Convite + WhatsApp */}
              <div className="max-w-xl">
                <div className="mb-6 flex items-center gap-3">
                  <span className="h-px w-12 bg-accent/70" />
                  <span className="text-overline font-medium uppercase tracking-widest text-accent">
                    Dê o primeiro passo
                  </span>
                </div>

                <h2 className="font-display text-display-lg font-medium leading-[1.08] text-secondary">
                  Você não precisa
                  <br />
                  atravessar isso{" "}
                  <span className="italic text-accent">sozinho.</span>
                </h2>

                <p className="mt-7 text-lg leading-relaxed text-secondary">
                  Inicie uma conversa no canal que preferir. Respondo
                  pessoalmente em até 24h úteis, sem qualquer compromisso. A
                  primeira troca serve apenas para entendermos juntos se faz
                  sentido seguir adiante.
                </p>

                <div className="mt-9 flex flex-col items-start gap-4">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    <MessageCircle size={20} />
                    Conversar no WhatsApp
                  </a>
                  <span className="font-sans text-sm text-secondary/55">
                    {site.whatsappDisplay}
                  </span>
                </div>

                <div className="mt-10 grid gap-3 border-t border-white/[0.08] pt-7 text-sm text-secondary/60">
                  <span className="inline-flex items-center gap-3">
                    <Clock size={15} className="text-accent" />
                    Resposta pessoal em até 24h úteis
                  </span>
                  <span className="inline-flex items-center gap-3">
                    <Globe size={15} className="text-accent" />
                    Atendimento online · todo o Brasil
                  </span>
                  <span className="inline-flex items-center gap-3">
                    <MapPin size={15} className="text-accent" />
                    Presencial · Guapimirim, RJ
                  </span>
                </div>
              </div>

              {/* Coluna 2 — Formulário alternativo */}
              <div className="rounded-2xl border border-white/[0.1] bg-white/[0.025] p-7 backdrop-blur-sm sm:p-9">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-accent">
                  Prefere escrever
                </p>
                <h3 className="mt-2 font-display text-2xl font-medium leading-snug text-secondary">
                  Envie uma mensagem reservada
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/60">
                  Para quem deseja um primeiro contato por e-mail, com mais
                  tempo para escrever. Tudo o que for compartilhado aqui é
                  tratado com sigilo.
                </p>

                <div className="mt-7">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
