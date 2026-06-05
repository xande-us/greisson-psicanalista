# Greisson Carvalho · Psicanalista — Landing Page Premium

Landing page de alto padrão construída para reposicionar digitalmente o profissional,
transmitindo seriedade, segurança, sofisticação e acolhimento.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **TailwindCSS 3**
- **GSAP + ScrollTrigger** (parallax, fade-up, blur reveal, stagger)
- **lucide-react** (ícones)

## Como rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm start        # servir o build
```

Pronto para deploy na **Vercel** (zero config).

## Onde editar o conteúdo

Quase todas as informações de contato e SEO estão centralizadas em
[`src/lib/site.ts`](src/lib/site.ts). Substitua os campos marcados como
`Placeholder` (Instagram, e-mail, endereço, horários) e ajuste `url` para o
domínio final.

| O que                         | Arquivo                          |
| ----------------------------- | -------------------------------- |
| Contato, SEO, textos-chave    | `src/lib/site.ts`                |
| Schema.org (JSON-LD)          | `src/lib/schema.ts`              |
| Metadados / Open Graph        | `src/app/layout.tsx`             |
| Seções da página              | `src/components/*`               |
| Cores, tipografia, animações  | `tailwind.config.ts`, `globals.css` |

## Imagens

- Os retratos do profissional usam **placeholders elegantes** ("GC"). Substitua
  pelos componentes `next/image` quando as fotos finais estiverem disponíveis.
- Adicione `public/og-image.jpg` (1200×630) para o compartilhamento social.

## Acessibilidade & Performance

- `prefers-reduced-motion` respeitado (animações desativadas).
- Fontes via `next/font` (sem layout shift).
- HTML semântico, contraste cuidado e foco visível.
- Estrutura otimizada para Core Web Vitals e Lighthouse 95+.

## Paleta

| Token       | Hex       |
| ----------- | --------- |
| Primary     | `#1E2A38` |
| Secondary   | `#F8F5F1` |
| Accent      | `#C4A574` |
| Text (ink)  | `#2B2B2B` |
| Background  | `#FAF8F5` |

Tipografia: **Playfair Display** (títulos) + **Inter** (corpo).
