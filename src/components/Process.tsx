import { Reveal } from "./anim/Reveal";

const steps = [
  {
    n: "01",
    title: "Primeiro contato",
    text: "Você envia uma mensagem pelo WhatsApp. Conversamos de forma leve, sem compromisso, para entender o que você procura e esclarecer suas dúvidas.",
  },
  {
    n: "02",
    title: "Agendamento",
    text: "Definimos juntos o melhor dia, horário e formato — online ou presencial — de acordo com a sua disponibilidade e necessidade.",
  },
  {
    n: "03",
    title: "Primeira sessão",
    text: "Um encontro de acolhimento, onde você começa a falar no seu ritmo. É o início da construção de um espaço de confiança.",
  },
  {
    n: "04",
    title: "Desenvolvimento do processo",
    text: "A partir daí, seguimos um percurso contínuo de escuta e compreensão, no qual novos sentidos e caminhos vão surgindo ao longo do tempo.",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative py-section">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="hairline" />
            <span className="overline">Como funciona</span>
            <span className="hairline" />
          </div>
          <h2 className="font-display text-display-md font-medium text-primary">
            Um caminho simples para começar
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/65">
            Do primeiro contato ao desenvolvimento do processo analítico, cada
            etapa é conduzida com clareza e cuidado.
          </p>
        </Reveal>

        <Reveal stagger className="relative mx-auto mt-16 max-w-3xl">
          {/* Linha vertical da timeline */}
          <span className="absolute left-[27px] top-2 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-accent/50 via-accent/25 to-transparent sm:block" />

          <div className="flex flex-col gap-6">
            {steps.map((step) => (
              <article
                key={step.n}
                data-reveal-item
                className="group relative flex gap-6"
              >
                <span className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-canvas font-display text-lg font-semibold text-accent-deep shadow-soft transition-all duration-500 ease-premium group-hover:border-accent group-hover:bg-accent group-hover:text-primary">
                  {step.n}
                </span>
                <div className="flex-1 rounded-2xl border border-primary/[0.07] bg-secondary/50 p-6 transition-all duration-500 ease-premium group-hover:-translate-y-1 group-hover:border-accent/25 group-hover:bg-white group-hover:shadow-card sm:p-7">
                  <h3 className="font-display text-xl font-medium text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-ink/65">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
