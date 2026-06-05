"use client";

import { useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Anima os filhos diretos com efeito stagger (em vez do próprio elemento). */
  stagger?: boolean;
  delay?: number;
  y?: number;
  /** Habilita o blur reveal sofisticado. */
  blur?: boolean;
};

/**
 * Reveal sofisticado baseado em ScrollTrigger.
 * - fade up + blur suave ao entrar no viewport;
 * - opção `stagger` para grupos de cards;
 * - respeita prefers-reduced-motion (apenas exibe, sem movimento).
 */
export function Reveal({
  children,
  as,
  className,
  stagger = false,
  delay = 0,
  y = 28,
  blur = true,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const targets = stagger
        ? Array.from(root.querySelectorAll<HTMLElement>("[data-reveal-item]"))
        : [root];

      if (targets.length === 0) return;

      if (reduce) {
        gsap.set(targets, { opacity: 1, y: 0, filter: "none" });
        return;
      }

      gsap.set(targets, {
        opacity: 0,
        y,
        filter: blur ? "blur(8px)" : "blur(0px)",
      });

      gsap.to(targets, {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.1,
        delay,
        ease: "power3.out",
        stagger: stagger ? 0.12 : 0,
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
