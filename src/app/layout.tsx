import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { buildJsonLd } from "@/lib/schema";
import { site } from "@/lib/site";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Greisson Carvalho | Psicanalista — Ilha do Governador e Online",
    template: "%s | Greisson Carvalho Psicanalista",
  },
  description: site.description,
  keywords: [
    "psicanalista ilha do governador",
    "psicanalista rio de janeiro",
    "psicanalista online",
    "atendimento psicanalítico online",
    "psicanálise rio de janeiro",
    "Greisson Carvalho psicanalista",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: site.url,
    siteName: site.fullTitle,
    title: "Greisson Carvalho | Psicanalista — Ilha do Governador e Online",
    description: site.description,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Greisson Carvalho — Psicanalista",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Greisson Carvalho | Psicanalista",
    description: site.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#1E2A38",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
        {children}
      </body>
    </html>
  );
}
