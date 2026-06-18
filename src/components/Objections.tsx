import { Reveal } from "./anim/Reveal";

const objections = [
  {
    title: "“Será que preciso mesmo de ajuda?”",
    text: "Você não precisa estar em crise para buscar a psicanálise. Cuidar de si é um direito — e também uma forma de prevenção e autoconhecimento.",
  },
  {
    title: "“Tenho receio de me abrir com alguém.”",
    text: "É natural sentir insegurança no início. O espaço analítico é construído justamente para que a confiança surja no seu tempo, sem qualquer pressão.",
  },
  {
    title: "“Não sei como funciona.”",
    text: "Não é preciso saber nada de antemão. Basta vir como você é. Todo o processo será explicado com clareza, e suas dúvidas são sempre bem-vindas.",
  },
  {
    title: "“Tenho vergonha do que vou falar.”",
    text: "Aqui não há julgamento nem tabu. Tudo o que você sente é legítimo e merece ser escutado com respeito e total sigilo.",
  },
];

export function Objections() {
  return (
    <section className="grain relative overflow-hidden bg-primary py-section text-secondary">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-[8%] top-1/4 h-[28rem] w-[28rem] rounded-full bg-accent/[0.07] blur-[70px] md:blur-[130px]" />
      </div>

      <div className="container-content relative z-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-accent/70" />
            <span className="text-overline font-medium uppercase tracking-widest text-accent">
              Um convite ao primeiro passo
            </span>
            <span className="h-px w-12 bg-accent/70" />
          </div>
          <h2 className="font-display text-display-md font-medium text-secondary">
            Talvez você esteja adiando procurar ajuda
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-secondary/70">
            Adiar é humano — muitas vezes por medo, desconhecimento ou pelo peso
            de antigos tabus. Aqui, cada uma dessas hesitações é acolhida com
            cuidado.
          </p>
        </Reveal>

        <Reveal stagger className="mx-auto mt-16 grid max-w-4xl gap-5 sm:grid-cols-2">
          {objections.map((o) => (
            <article
              key={o.title}
              data-reveal-item
              className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-7 transition-all duration-500 ease-premium hover:border-accent/30 hover:bg-white/[0.06]"
            >
              <h3 className="font-display text-xl font-medium leading-snug text-accent">
                {o.title}
              </h3>
              <p className="mt-3 leading-relaxed text-secondary/70">{o.text}</p>
            </article>
          ))}
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-2xl text-center">
          <p className="font-display text-2xl font-medium italic leading-relaxed text-secondary/90">
            O momento certo para cuidar de você pode ser agora.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
