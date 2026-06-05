import { Reveal } from "./anim/Reveal";

// Numerais romanos em Playfair italic — registro editorial, sem ícones genéricos.
const items = [
  {
    numeral: "I",
    title: "Ansiedade",
    text: "Pensamentos acelerados, preocupação constante e a sensação de não conseguir desacelerar.",
  },
  {
    numeral: "II",
    title: "Conflitos emocionais",
    text: "Sentimentos contraditórios que parecem difíceis de nomear ou compreender.",
  },
  {
    numeral: "III",
    title: "Problemas financeiros",
    text: "O peso emocional das dívidas, da incerteza e da pressão por estabilidade.",
  },
  {
    numeral: "IV",
    title: "Relacionamentos difíceis",
    text: "Padrões que se repetem, distanciamentos e a dificuldade de se fazer entender.",
  },
  {
    numeral: "V",
    title: "Momentos de mudança",
    text: "Transições de vida que trazem dúvida, medo e a busca por um novo sentido.",
  },
  {
    numeral: "VI",
    title: "Sobrecarga emocional",
    text: "O cansaço de carregar tudo sozinho e a vontade de finalmente respirar.",
  },
];

export function Identification() {
  return (
    <section id="identificacao" className="relative py-section">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="hairline" />
            <span className="overline">Identificação</span>
            <span className="hairline" />
          </div>
          <h2 className="font-display text-display-md font-medium text-primary">
            Talvez você esteja passando por algo parecido
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ink/65">
            Sofrer faz parte da experiência humana. Reconhecer o que se sente é o
            primeiro passo para transformá-lo.
          </p>
        </Reveal>

        <Reveal
          stagger
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item) => (
            <article
              key={item.title}
              data-reveal-item
              className="group relative overflow-hidden rounded-2xl border border-primary/[0.07] bg-secondary/60 p-8 transition-all duration-500 ease-premium hover:-translate-y-1.5 hover:border-accent/30 hover:bg-white hover:shadow-card"
            >
              <span className="absolute right-0 top-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-accent/[0.08] blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Marca editorial: numeral romano em filete dourado */}
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/30 font-display text-base italic text-accent-deep transition-colors duration-500 group-hover:border-accent group-hover:bg-accent/10">
                  {item.numeral}
                </span>
                <span className="h-px flex-1 bg-primary/[0.08] transition-colors duration-500 group-hover:bg-accent/30" />
              </div>

              <h3 className="mt-6 font-display text-xl font-medium text-primary">
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
