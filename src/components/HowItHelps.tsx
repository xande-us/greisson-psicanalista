import { Reveal } from "./anim/Reveal";

const steps = [
  {
    numeral: "I",
    title: "Falar é o começo",
    text: "Quando colocamos em palavras aquilo que nos angustia, damos forma ao que antes parecia confuso e impossível de explicar.",
  },
  {
    numeral: "II",
    title: "Compreender os conflitos",
    text: "Ao escutar a si mesmo com a presença de um analista, padrões e repetições começam a fazer sentido — e perdem força.",
  },
  {
    numeral: "III",
    title: "Aliviar o sofrimento",
    text: "Aos poucos, a fala abre espaço para escolhas mais livres, relações mais saudáveis e uma vida com mais sentido.",
  },
];

export function HowItHelps() {
  return (
    <section
      id="psicanalise"
      className="grain relative overflow-hidden bg-primary py-section text-secondary"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-accent/[0.06] blur-[70px] md:blur-[140px]" />
      </div>

      <div className="container-content relative z-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-12 bg-accent/70" />
              <span className="text-overline font-medium uppercase tracking-widest text-accent">
                Como a psicanálise ajuda
              </span>
            </div>
            <h2 className="font-display text-display-md font-medium text-secondary">
              A fala é o caminho para se reencontrar
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-secondary/70">
              A psicanálise não oferece respostas prontas. Ela oferece um espaço
              de escuta cuidadosa, onde aquilo que parece sem solução pode,
              enfim, ser compreendido — no seu tempo, do seu jeito.
            </p>
            <div className="mt-8 border-l-2 border-accent/40 pl-6">
              <p className="font-display text-xl italic leading-relaxed text-secondary/85">
                “Aquilo que não podemos falar, acabamos repetindo. Dar palavras
                ao sofrimento é o início da transformação.”
              </p>
            </div>
          </Reveal>

          <Reveal stagger className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <article
                key={step.title}
                data-reveal-item
                className="group relative flex gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 transition-all duration-500 ease-premium hover:border-accent/30 hover:bg-white/[0.06]"
              >
                <div className="flex flex-col items-center">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/40 font-display text-base italic text-accent transition-colors duration-500 group-hover:border-accent group-hover:bg-accent/10">
                    {step.numeral}
                  </span>
                  {i < steps.length - 1 && (
                    <span className="mt-2 h-full w-px bg-gradient-to-b from-accent/30 to-transparent" />
                  )}
                </div>
                <div className="pb-2">
                  <h3 className="font-display text-xl font-medium text-secondary">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 leading-relaxed text-secondary/65">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
