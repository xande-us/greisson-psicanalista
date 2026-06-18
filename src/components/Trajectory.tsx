import { Reveal } from "./anim/Reveal";

// Seção editorial sóbria — sem cards, sem ícones. Apenas hierarquia tipográfica.
const milestones = [
  // TODO: confirmar com o profissional — linha/abordagem teórica (freudiana,
  // lacaniana, outra). Mantido em valor neutro e verdadeiro até confirmação.
  {
    label: "Orientação teórica",
    value: "Psicanálise clínica",
    detail: "Escuta orientada à fala e ao sofrimento singular",
  },
  {
    label: "Formação",
    value: "Escola de Psicanálise de Curitiba (E.P.C.)",
    detail: "Formação em Psicanálise",
  },
  // TODO: confirmar com o profissional — faixa etária atendida.
  {
    label: "Atendimento",
    value: "Adolescentes, adultos e terceira idade · Online e presencial",
    detail: "Sessões individuais, com entrevista preliminar",
  },
  // TODO: confirmar com o profissional — supervisão clínica e análise pessoal.
  // Marcos removidos até haver confirmação para não afirmar credenciais não verificadas.
];

export function Trajectory() {
  return (
    <section id="trajetoria" className="relative bg-secondary/40 py-section">
      <div className="container-content">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <Reveal className="lg:sticky lg:top-32 lg:self-start">
            <div className="mb-5 flex items-center gap-3">
              <span className="hairline" />
              <span className="overline">Trajetória</span>
            </div>
            <h2 className="font-display text-display-md font-medium text-primary">
              Formação, orientação e compromissos da prática
            </h2>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/65">
              A psicanálise exige rigor permanente — não apenas como profissão,
              mas como modo de existência. Abaixo, os fundamentos que sustentam
              o trabalho que conduzo.
            </p>
          </Reveal>

          <Reveal stagger as="dl" className="divide-y divide-primary/[0.08] border-y border-primary/[0.08]">
            {milestones.map((m) => (
              <div
                key={m.label}
                data-reveal-item
                className="grid gap-3 py-7 sm:grid-cols-[10rem_1fr] sm:gap-8"
              >
                <dt className="text-[0.68rem] font-medium uppercase tracking-[0.22em] text-accent-deep sm:pt-1">
                  {m.label}
                </dt>
                <dd>
                  <p className="font-display text-xl font-medium leading-snug text-primary">
                    {m.value}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/55">
                    {m.detail}
                  </p>
                </dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
