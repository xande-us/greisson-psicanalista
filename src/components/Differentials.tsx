import { Reveal } from "./anim/Reveal";

const items = [
  {
    title: "Atendimento online e presencial",
    text: "Flexibilidade para você ser acompanhado de onde estiver, com a mesma seriedade em qualquer formato.",
  },
  {
    title: "Escuta qualificada",
    text: "Uma escuta atenta e treinada, capaz de acolher o que muitas vezes não conseguimos dizer em outros lugares.",
  },
  {
    title: "Ambiente seguro",
    text: "Um espaço protegido, sigiloso e livre de julgamentos, onde você pode se expressar com liberdade.",
  },
  {
    title: "Ética profissional",
    text: "Conduta pautada pela responsabilidade, pelo respeito e pela confidencialidade em cada detalhe.",
  },
  {
    title: "Compromisso com o seu desenvolvimento",
    text: "Um acompanhamento dedicado, focado no seu crescimento e na construção de novos caminhos.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="relative bg-secondary/50 py-section">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="hairline" />
            <span className="overline">Diferenciais</span>
            <span className="hairline" />
          </div>
          <h2 className="font-display text-display-md font-medium text-primary">
            O que torna este acompanhamento diferente
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/65">
            Cada elemento do meu trabalho foi pensado para que você se sinta
            respeitado, seguro e verdadeiramente acompanhado.
          </p>
        </Reveal>

        <Reveal stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <article
              key={item.title}
              data-reveal-item
              className={`group relative overflow-hidden rounded-2xl border border-primary/[0.07] bg-canvas p-8 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-accent/30 hover:shadow-card ${
                i === items.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              {/* Numeral editorial dominante — substitui ícone */}
              <div className="flex items-baseline justify-between border-b border-primary/[0.07] pb-5 transition-colors duration-500 group-hover:border-accent/30">
                <span className="font-display text-[3.25rem] font-medium leading-none text-primary transition-colors duration-500 group-hover:text-accent-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-accent-deep">
                  Diferencial
                </span>
              </div>
              <h3 className="mt-7 font-display text-xl font-medium leading-snug text-primary">
                {item.title}
              </h3>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/65">
                {item.text}
              </p>
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
