import type { Metadata } from "next";
import { SITE_URL } from "./constants";

type MetaOptions = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({ title, description, path = "/" }: MetaOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Hatched Labs",
      images: [{ url: `${SITE_URL}/og-image.png`, width: 1200, height: 630, alt: "Hatched Labs" }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og-image.png`],
    },
  };
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Hatched Labs",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: "hello@hatchedlabs.ai",
    sameAs: [],
  };
}
