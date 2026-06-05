import { ShieldCheck, Scale, HandHeart } from "lucide-react";
import { Reveal } from "./anim/Reveal";

const values = [
  { icon: ShieldCheck, label: "Ambiente seguro e sigiloso" },
  { icon: Scale, label: "Ética e responsabilidade" },
  { icon: HandHeart, label: "Envolvimento genuíno" },
];

export function About() {
  return (
    <section id="sobre" className="relative py-section">
      <div className="container-content">
        <div className="grid items-start gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Visual */}
          <Reveal className="lg:sticky lg:top-32">
            <div className="relative mx-auto max-w-sm lg:max-w-none">
              <div className="absolute -left-4 -top-4 h-full w-full rounded-[1.75rem] border border-accent/40" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary-800 via-primary to-primary-950 shadow-lift">
                <div className="grain absolute inset-0 opacity-70" />
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage:
                      "radial-gradient(ellipse 60% 45% at 50% 22%, rgba(196,165,116,0.2), transparent 60%)",
                  }}
                />
                <span className="absolute left-10 right-10 top-[46%] h-px bg-accent/30" />
                <div className="relative flex h-full flex-col items-center justify-end gap-3 px-10 pb-12 text-center">
                  <span className="font-display text-[4.5rem] font-medium leading-none tracking-tight text-secondary/95">
                    GC
                  </span>
                  <span className="font-display text-[0.75rem] italic text-secondary/55">
                    Greisson Carvalho
                  </span>
                  <span className="text-[0.6rem] uppercase tracking-[0.32em] text-accent/70">
                    Psicanalista
                  </span>
                </div>
              </div>

              {/* Bloco factual — substitui o "100% sigilo" */}
              <div className="absolute -bottom-6 right-4 max-w-[15rem] rounded-2xl border border-primary/[0.06] bg-canvas/95 px-5 py-4 shadow-card backdrop-blur-md">
                <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-accent-deep">
                  Princípios do consultório
                </p>
                <p className="mt-2 font-display text-[0.95rem] leading-snug text-primary">
                  Sigilo absoluto · escuta singular · sem pressa terapêutica
                </p>
              </div>
            </div>

            <div className="mt-12 grid gap-3">
              {values.map((v) => (
                <div
                  key={v.label}
                  className="flex items-center gap-3 rounded-xl border border-primary/[0.06] bg-secondary/50 px-4 py-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/12 text-accent-deep">
                    <v.icon size={18} strokeWidth={1.7} />
                  </span>
                  <span className="text-sm font-medium text-primary/85">
                    {v.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Texto */}
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="hairline" />
              <span className="overline">Sobre Greisson Carvalho</span>
            </div>
            <h2 className="font-display text-display-md font-medium text-primary">
              Um trabalho construído sobre confiança, ética e presença
            </h2>

            <div className="mt-8 max-w-prose space-y-5 text-[1.05rem] leading-relaxed text-ink/75">
              <p>
                Procurar ajuda é um ato de coragem. Por isso, meu compromisso
                começa antes mesmo da primeira sessão: em oferecer um lugar onde
                você possa se sentir verdadeiramente seguro para falar — sem
                julgamentos, sem pressa e com total sigilo.
              </p>
              <p>
                Acredito que cada pessoa carrega uma história única, feita de
                conquistas, perdas, medos e desejos. Meu papel não é dizer o que
                você deve fazer, mas caminhar ao seu lado enquanto você
                redescobre suas próprias respostas. É um trabalho de escuta
                atenta, paciente e profundamente respeitoso.
              </p>
              <p>
                Conduzo cada atendimento com{" "}
                <span className="font-medium text-primary">
                  responsabilidade e profissionalismo
                </span>
                , honrando a confiança que me é depositada. A ética não é, para
                mim, uma formalidade — é a base de toda relação analítica. O que
                é falado aqui, permanece aqui.
              </p>
              <p>
                Mais do que técnica, ofereço{" "}
                <span className="font-medium text-primary">
                  envolvimento genuíno
                </span>
                . Importo-me de verdade com a sua trajetória. Estar presente,
                com competência e cuidado, em um dos momentos mais delicados da
                sua vida é, para mim, uma responsabilidade que levo com seriedade
                e gratidão.
              </p>
              <p>
                Se você chegou até aqui, talvez esse seja o momento de dar o
                primeiro passo. Eu estarei pronto para escutar.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border-l-2 border-accent bg-secondary/60 px-7 py-6">
              <p className="font-display text-xl italic leading-relaxed text-primary/90">
                “Meu compromisso é com o seu processo. Cada encontro é conduzido
                com seriedade, escuta e o cuidado que você merece.”
              </p>
              <p className="mt-4 text-sm font-medium uppercase tracking-widest text-accent-deep">
                Greisson Carvalho · Psicanalista
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
