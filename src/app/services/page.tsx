import Script from "next/script";
import { SectionHeading } from "../../components/marketing/section-heading";
import { Card } from "../../components/ui/card";
import { buildMetadata } from "../../lib/metadata";
import { industryUseCases, serviceCategories, SITE_URL } from "../../lib/constants";

export const metadata = buildMetadata({
  title: "Services | Hatched Labs",
  description:
    "See what a Hatched Labs AI assistant can do across research, communication, scheduling, content, monitoring, and custom workflows.",
  path: "/services",
});

export default function ServicesPage() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI personal assistant service",
    provider: {
      "@type": "Organization",
      name: "Hatched Labs",
      url: SITE_URL,
    },
    areaServed: "United States",
    description:
      "White-glove AI assistant setup for research, communications, scheduling, task automation, and custom operator workflows.",
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <Script id="service-jsonld" type="application/ld+json">
        {JSON.stringify(serviceJsonLd)}
      </Script>
      <SectionHeading
        eyebrow="Services"
        title="What your AI assistant can actually do"
        description="Organized around the categories that matter in real operating environments, not demo theatrics."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {serviceCategories.map((category) => (
          <Card key={category.title}>
            <h2 className="text-2xl font-semibold text-white">{category.title}</h2>
            <ul className="mt-5 space-y-3 text-sm text-ink-300">
              {category.items.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Use Cases"
          title="Different industries. Same premium operating standard."
          description="The assistant adapts to your context, communication style, and tool stack."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {industryUseCases.map((useCase) => (
            <Card key={useCase.industry}>
              <h2 className="text-2xl font-semibold text-white">{useCase.industry}</h2>
              <p className="mt-4 text-sm leading-7 text-ink-300">{useCase.useCase}</p>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
}
