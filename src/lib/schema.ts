import { site } from "./site";

// JSON-LD para SEO local: Person + ProfessionalService (LocalBusiness).
export function buildJsonLd() {
  const person = {
    "@type": "Person",
    "@id": `${site.url}/#person`,
    name: site.name,
    jobTitle: site.role,
    description: site.description,
    url: site.url,
    knowsLanguage: "pt-BR",
    areaServed: "BR",
  };

  const service = {
    "@type": "ProfessionalService",
    "@id": `${site.url}/#service`,
    name: site.fullTitle,
    description: site.description,
    url: site.url,
    image: `${site.url}/og-image.jpg`,
    priceRange: "$$",
    telephone: site.whatsappDisplay,
    founder: { "@id": `${site.url}/#person` },
    provider: { "@id": `${site.url}/#person` },
    areaServed: [
      { "@type": "Country", name: "Brasil" },
      { "@type": "City", name: "Rio de Janeiro" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: site.neighborhood,
      addressRegion: site.region,
      addressCountry: "BR",
    },
    availableLanguage: "Portuguese",
    serviceType: [
      "Psicanálise",
      "Atendimento psicanalítico online",
      "Atendimento psicanalítico presencial",
    ],
    knowsAbout: [
      "psicanalista ilha do governador",
      "psicanalista rio de janeiro",
      "psicanalista online",
      "atendimento psicanalítico online",
    ],
  };

  return {
    "@context": "https://schema.org",
    "@graph": [person, service],
  };
}
