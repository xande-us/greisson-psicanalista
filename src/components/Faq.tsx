"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./anim/Reveal";

const faqs = [
  {
    q: "Como funciona a psicanálise?",
    a: "A psicanálise é um processo de escuta e fala. Em encontros regulares, você fala livremente sobre o que sente e vive, enquanto o analista escuta de forma atenta, ajudando a compreender conflitos, padrões e sentimentos. Aos poucos, esse trabalho alivia o sofrimento e abre espaço para novas escolhas.",
  },
  {
    q: "O atendimento online funciona?",
    a: "Sim. O atendimento online é tão eficaz quanto o presencial, com a mesma seriedade, sigilo e qualidade de escuta. Tudo o que você precisa é de um ambiente reservado e uma conexão de internet. Atendo pacientes em todo o Brasil dessa forma.",
  },
  {
    q: "Quanto tempo dura uma sessão?",
    a: "As sessões têm duração definida e acontecem com regularidade — geralmente semanal. Os detalhes de frequência e horário são combinados de forma individual, respeitando a sua disponibilidade e necessidade.",
  },
  {
    q: "Como faço para agendar?",
    a: "É simples: basta enviar uma mensagem pelo WhatsApp. Conversamos sobre o que você procura, esclareço suas dúvidas e, juntos, definimos o melhor dia e formato para começar.",
  },
  {
    q: "Preciso ter um problema específico para começar?",
    a: "Não. Você não precisa estar em crise ou ter um motivo “grande o suficiente”. A psicanálise também é um caminho de autoconhecimento. Qualquer incômodo, dúvida ou desejo de se compreender melhor já é razão suficiente.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-section">
      <div className="container-content">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="hairline" />
              <span className="overline">Perguntas frequentes</span>
            </div>
            <h2 className="font-display text-display-md font-medium text-primary">
              Tudo o que você precisa saber
            </h2>
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-ink/65">
              Reuni aqui as dúvidas mais comuns. Se a sua não estiver na lista,
              será um prazer respondê-la pessoalmente.
            </p>
          </Reveal>

          <Reveal className="divide-y divide-primary/[0.08] border-y border-primary/[0.08]">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.q}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left transition-colors duration-300 hover:text-accent-deep"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-medium text-primary sm:text-xl">
                      {faq.q}
                    </span>
                    <span
                      className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary/15 transition-all duration-500 ease-premium ${
                        isOpen
                          ? "rotate-45 border-accent bg-accent text-primary"
                          : "text-primary/60"
                      }`}
                    >
                      <Plus size={16} />
                    </span>
                  </button>
                  <div
                    className={`grid overflow-hidden transition-all duration-500 ease-premium ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-prose pb-7 leading-relaxed text-ink/70">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
