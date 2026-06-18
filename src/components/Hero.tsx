"use client";

import { useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowDown, MapPin, Globe } from "lucide-react";
import { whatsappHref } from "@/lib/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!reduce) {
        const tl = gsap.timeline({
          defaults: { ease: "power3.out", duration: 1.1, overwrite: "auto" },
        });

        const ctaItems = gsap.utils.toArray<HTMLElement>("[data-hero='cta'] > *");
        const metaItems = gsap.utils.toArray<HTMLElement>("[data-hero='meta'] > *");

        tl.fromTo(
          "[data-hero='overline']",
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.8 },
        )
          .fromTo(
            "[data-hero='title'] .line",
            { opacity: 0, y: 34, filter: "blur(10px)" },
            { opacity: 1, y: 0, filter: "blur(0px)", stagger: 0.14 },
            "-=0.4",
          )
          .fromTo(
            "[data-hero='sub']",
            { opacity: 0, y: 22, filter: "blur(6px)" },
            { opacity: 1, y: 0, filter: "blur(0px)" },
            "-=0.7",
          )
          .fromTo(
            ctaItems,
            { opacity: 0, y: 18 },
            { opacity: 1, y: 0, stagger: 0.1 },
            "-=0.7",
          )
          .fromTo(
            "[data-hero='expectativa']",
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, duration: 0.9 },
            "-=0.5",
          )
          .fromTo(
            metaItems,
            { opacity: 0, y: 14 },
            { opacity: 1, y: 0, stagger: 0.08 },
            "-=0.7",
          )
          .fromTo(
            "[data-hero='visual']",
            { opacity: 0, y: 40, scale: 0.97 },
            { opacity: 1, y: 0, scale: 1, duration: 1.3 },
            "-=1.4",
          );

        // Parallax — camadas em velocidades diferentes
        gsap.to("[data-parallax='slow']", {
          yPercent: 14,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
        gsap.to("[data-parallax='badge']", {
          yPercent: -40,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.4,
          },
        });
      }
    },
    { scope: root },
  );

  return (
    <section
      id="top"
      ref={root}
      className="grain relative flex min-h-[100svh] items-center overflow-hidden pt-[var(--header-h)]"
    >
      {/* Atmosfera de fundo — gradiente quente sobre canvas, sem grid genérico */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -left-[12%] top-[6%] h-[36rem] w-[36rem] rounded-full bg-accent/[0.08] blur-[140px]" />
        <div className="absolute -right-[8%] bottom-[2%] h-[32rem] w-[32rem] rounded-full bg-primary/[0.05] blur-[140px]" />
        {/* Linhas editoriais horizontais sutis, evocando livro antigo */}
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(30,42,56,0.045) 1px, transparent 1px)",
            backgroundSize: "100% 38px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 30% 50%, black, transparent 75%)",
          }}
        />
      </div>

      <div className="container-content relative z-10 grid items-center gap-12 py-16 lg:grid-cols-[1.3fr_0.7fr] lg:gap-16 lg:py-0">
        {/* Coluna de texto */}
        <div className="max-w-[44rem]">
          <div data-hero="overline" className="mb-7 flex items-center gap-3">
            <span className="hairline" />
            <span className="overline">Psicanálise · Rio de Janeiro</span>
          </div>

          <h1
            data-hero="title"
            className="font-display text-display-xl font-medium text-primary"
          >
            <span className="line block">Há uma escuta</span>
            <span className="line block">para o que ainda</span>
            <span className="line block">
              não pode ser{" "}
              <span className="italic text-accent-deep">dito.</span>
            </span>
          </h1>

          <p
            data-hero="sub"
            className="mt-8 max-w-xl font-sans text-lg leading-relaxed text-ink/75"
          >
            Psicanálise para quem busca compreender o próprio sofrimento sem
            pressa, sem fórmulas e sem julgamento. Atendimento online para todo
            o Brasil e presencial em Guapimirim.
          </p>

          <div data-hero="cta" className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Agendar conversa
            </a>
            <a href="#contato" className="btn-ghost">
              Prefiro escrever
            </a>
          </div>

          {/* Gerenciamento de expectativa — discreto, mas estabelece padrão */}
          <p
            data-hero="expectativa"
            className="mt-6 max-w-md text-[0.82rem] leading-relaxed text-ink/55"
          >
            <span className="inline-block h-[3px] w-[3px] -translate-y-[3px] rounded-full bg-accent-deep align-middle" />
            <span className="ml-2">
              Respondo pessoalmente em até 24h úteis. Conversa inicial sem
              compromisso.
            </span>
          </p>

          <div
            data-hero="meta"
            className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/55"
          >
            <span className="inline-flex items-center gap-2">
              <Globe size={16} className="text-accent-deep" />
              Online · todo o Brasil
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-accent-deep" />
              Presencial · Guapimirim
            </span>
          </div>
        </div>

        {/* Coluna visual — composição editorial sem placeholder textual */}
        <div data-hero="visual" className="relative mx-auto w-full max-w-sm lg:max-w-[26rem]">
          <div className="relative aspect-[4/5] w-full" data-parallax="slow">
            {/* Moldura dourada deslocada */}
            <div className="absolute -right-4 -top-4 h-full w-full rounded-[1.75rem] border border-accent/40" />

            {/* Composição abstrata — paisagem tonal noturna */}
            <div className="group relative h-full w-full overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-primary via-primary-800 to-primary-950 shadow-lift">
              <Image
                src="/greisson-retrato.jpg"
                alt="Greisson Carvalho, psicanalista"
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 26rem"
                className="object-cover"
              />

              {/* Camadas tonais editoriais por cima da foto */}
              <div className="grain absolute inset-0 opacity-40" />
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(ellipse 70% 50% at 50% 18%, rgba(196,165,116,0.18), transparent 60%)",
                }}
              />
              <div
                className="absolute inset-x-0 bottom-0 h-[40%]"
                style={{
                  backgroundImage:
                    "linear-gradient(to top, rgba(19,28,38,0.55), transparent)",
                }}
              />

              {/* Filete dourado horizontal — divisor editorial */}
              <span className="absolute left-10 right-10 top-[44%] h-px bg-accent/30" />
            </div>

            {/* Bloco factual de credibilidade — sem clichê de "100% sigilo" */}
            <div
              data-parallax="badge"
              className="absolute -bottom-6 -left-6 max-w-[16rem] rounded-2xl border border-primary/[0.06] bg-canvas/95 px-5 py-4 shadow-card backdrop-blur-md"
            >
              <p className="text-[0.62rem] font-medium uppercase tracking-[0.22em] text-accent-deep">
                Atendimento individual
              </p>
              <p className="mt-2 font-display text-[0.95rem] leading-snug text-primary">
                Entrevista preliminar antes do início do processo
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Indicador de rolagem */}
      <a
        href="#identificacao"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink/40 transition-colors hover:text-accent-deep lg:flex"
        aria-label="Rolar para a próxima seção"
      >
        <span className="text-[0.65rem] uppercase tracking-widest">Role</span>
        <ArrowDown size={16} className="animate-float-slow" />
      </a>
    </section>
  );
}
