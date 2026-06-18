// Fonte única de verdade para dados de contato, SEO e conteúdo institucional.

export const site = {
  name: "Greisson Carvalho",
  role: "Psicanalista",
  fullTitle: "Greisson Carvalho — Psicanalista",
  url: "https://greissoncarvalho.com.br", // ajustar para o domínio final
  description:
    "Atendimento psicanalítico online para todo o Brasil e presencial em Guapimirim, Rio de Janeiro. Um espaço seguro, ético e sigiloso para compreender o sofrimento e construir novos caminhos.",
  locale: "pt_BR",
  // Contato
  whatsappDisplay: "+55 21 98428-4104",
  whatsappNumber: "5521984284104",
  whatsappMessage:
    "Olá, Greisson. Vim pelo seu site e gostaria de agendar uma conversa.",
  instagram: "", // @usuario — vazio quando não informado
  instagramUrl: "#",
  email: "greissoncarvalho14@gmail.com",
  address: "Guapimirim, RJ",
  city: "Guapimirim",
  region: "RJ",
  neighborhood: "Guapimirim",
  hours: "Seg. a Sex., 14h–20h · Sáb., 10h–19h",
} as const;

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;
