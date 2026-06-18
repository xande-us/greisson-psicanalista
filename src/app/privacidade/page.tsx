import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Como os dados informados no formulário de contato do site são coletados e tratados, conforme a Lei Geral de Proteção de Dados (LGPD).",
  alternates: { canonical: "/privacidade" },
};

export default function PrivacidadePage() {
  return (
    <>
      <main className="relative py-section pt-[calc(var(--header-h)+4rem)]">
        <div className="container-content">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-ink/60 transition-colors hover:text-accent-deep"
          >
            <ArrowLeft size={16} />
            Voltar ao início
          </Link>

          <div className="mt-8 max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="hairline" />
              <span className="overline">Privacidade</span>
            </div>
            <h1 className="font-display text-display-md font-medium text-primary">
              Política de Privacidade
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink/65">
              Esta política descreve, de forma transparente, como os dados
              informados neste site são coletados e tratados, em conformidade
              com a Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD).
            </p>

            <div className="mt-12 space-y-10 text-[1.05rem] leading-relaxed text-ink/75">
              <section>
                <h2 className="font-display text-xl font-medium text-primary">
                  Dados coletados
                </h2>
                <p className="mt-3">
                  Coletamos apenas os dados que você fornece voluntariamente ao
                  preencher o formulário de contato: <strong>nome</strong> e{" "}
                  <strong>e-mail</strong>, além da mensagem que decidir
                  compartilhar. Não coletamos dados sensíveis nem utilizamos os
                  campos do formulário para qualquer outra finalidade.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-medium text-primary">
                  Finalidade
                </h2>
                <p className="mt-3">
                  Os dados são utilizados exclusivamente para responder ao seu
                  contato e dar seguimento à conversa que você iniciou. Nenhuma
                  comunicação de marketing é enviada sem o seu consentimento.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-medium text-primary">
                  Base legal
                </h2>
                <p className="mt-3">
                  O tratamento dos dados se fundamenta no seu consentimento, ao
                  enviar o formulário, e no legítimo interesse de responder a uma
                  solicitação de contato, nos termos do art. 7º da LGPD.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-medium text-primary">
                  Compartilhamento
                </h2>
                <p className="mt-3">
                  Os dados informados <strong>não são compartilhados, vendidos
                  ou cedidos a terceiros</strong>. Permanecem sob sigilo,
                  acessíveis apenas ao psicanalista responsável pelo atendimento.
                </p>
              </section>

              <section>
                <h2 className="font-display text-xl font-medium text-primary">
                  Direitos do titular
                </h2>
                <p className="mt-3">
                  Você pode, a qualquer momento, solicitar a confirmação do
                  tratamento, o acesso, a correção ou a exclusão dos seus dados.
                  Para exercer esses direitos, basta enviar um e-mail para{" "}
                  <a
                    href={`mailto:${site.email}`}
                    className="font-medium text-accent-deep underline-offset-4 hover:underline"
                  >
                    {site.email}
                  </a>
                  .
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
