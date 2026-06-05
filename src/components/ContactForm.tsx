"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

// Formulário alternativo ao WhatsApp — para visitantes que preferem
// um canal escrito e formal. Sem backend: monta um mailto: e dispara o
// cliente de e-mail padrão. Solução premium-friendly e sem dependências.
export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const nome = String(data.get("nome") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const mensagem = String(data.get("mensagem") ?? "").trim();

    if (!nome || !email || !mensagem) return;

    setSubmitting(true);

    const subject = `Contato pelo site — ${nome}`;
    const body = `Olá, Greisson.\n\n${mensagem}\n\n— ${nome}\n${email}`;
    const href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;

    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
    }, 400);
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field
          name="nome"
          label="Nome"
          autoComplete="name"
          required
        />
        <Field
          name="email"
          label="E-mail"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <Field
        name="mensagem"
        label="Mensagem"
        as="textarea"
        rows={4}
        required
      />

      <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-accent/60 bg-transparent px-7 py-3.5 font-sans text-sm font-medium tracking-wide text-secondary transition-[transform,background-color,border-color,color] duration-500 ease-premium hover:-translate-y-0.5 hover:border-accent hover:bg-accent hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary disabled:opacity-60"
        >
          {submitting ? "Abrindo seu e-mail…" : done ? "Enviado" : "Enviar mensagem"}
        </button>
        <p className="text-[0.78rem] leading-relaxed text-secondary/55">
          Sua mensagem será aberta no seu cliente de e-mail.
        </p>
      </div>
    </form>
  );
}

type FieldProps = {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  as?: "input" | "textarea";
  rows?: number;
};

function Field({
  name,
  label,
  type = "text",
  required,
  autoComplete,
  as = "input",
  rows = 3,
}: FieldProps) {
  const id = `field-${name}`;
  const commonClass =
    "peer w-full rounded-xl border border-white/[0.12] bg-white/[0.03] px-4 pb-2 pt-6 font-sans text-[0.95rem] text-secondary placeholder-transparent transition-colors duration-300 focus:border-accent focus:outline-none focus:ring-0";

  return (
    <div className="relative">
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          required={required}
          placeholder={label}
          className={`${commonClass} resize-none`}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          required={required}
          autoComplete={autoComplete}
          placeholder={label}
          className={commonClass}
        />
      )}
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-4 top-2 text-[0.65rem] font-medium uppercase tracking-[0.22em] text-secondary/55 transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-[0.85rem] peer-placeholder-shown:tracking-normal peer-placeholder-shown:text-secondary/40 peer-focus:top-2 peer-focus:text-[0.65rem] peer-focus:uppercase peer-focus:tracking-[0.22em] peer-focus:text-accent"
      >
        {label}
      </label>
    </div>
  );
}
