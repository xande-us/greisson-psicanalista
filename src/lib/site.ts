// Fonte única de verdade para dados de contato, SEO e conteúdo institucional.
// Substitua os campos marcados como "Placeholder" quando as informações finais
// estiverem disponíveis.

export const site = {
  name: "Greisson Carvalho",
  role: "Psicanalista",
  fullTitle: "Greisson Carvalho — Psicanalista",
  url: "https://greissoncarvalho.com.br", // ajustar para o domínio final
  description:
    "Atendimento psicanalítico online para todo o Brasil e presencial na Ilha do Governador, Rio de Janeiro. Um espaço seguro, ético e sigiloso para compreender o sofrimento e construir novos caminhos.",
  locale: "pt_BR",
  // Contato
  whatsappDisplay: "+55 21 98428-4104",
  whatsappNumber: "5521984284104",
  whatsappMessage:
    "Olá, Greisson. Vim pelo seu site e gostaria de agendar uma conversa.",
  instagram: "Placeholder", // @usuario
  instagramUrl: "#",
  email: "greissoncarvalho14@gmail.com",
  address: "Placeholder — Ilha do Governador, Rio de Janeiro/RJ",
  city: "Rio de Janeiro",
  region: "RJ",
  neighborhood: "Ilha do Governador",
  hours: "Placeholder — Seg. a Sex., horários a confirmar",
} as const;

export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage,
)}`;
