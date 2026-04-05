import Script from "next/script";
import { SectionHeading } from "../../components/marketing/section-heading";
import { Card } from "../../components/ui/card";
import { buildMetadata } from "../../lib/metadata";
import { SITE_URL, values } from "../../lib/constants";

export const metadata = buildMetadata({
  title: "About | Hatched Labs",
  description:
    "Learn about Hatched Labs, the mission behind our personal AI assistant service, and what makes our approach different.",
  path: "/about",
});

export default function AboutPage() {
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hatched Labs",
    url: SITE_URL,
    email: "hello@hatchedlabs.ai",
    description:
      "Hatched Labs builds premium, private AI assistants for founders, operators, and professionals.",
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <Script id="local-business-jsonld" type="application/ld+json">
        {JSON.stringify(localBusinessJsonLd)}
      </Script>
      <SectionHeading
        eyebrow="About"
        title="Founded by technologists who believe AI assistants should be personal, private, and always available"
        description="We built Hatched Labs for entrepreneurs and professionals who need capability with discretion, not generic AI access."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_.8fr]">
        <Card>
          <h2 className="text-2xl font-semibold text-white">Our story</h2>
          <p className="mt-5 text-sm leading-8 text-ink-300">
            Hatched Labs started from a simple observation: the tools getting called “AI assistants” rarely behave like assistants.
            They answer prompts, but they do not understand how a person works, what matters, how to communicate on their behalf,
            or how to carry context through a week of real decisions.
          </p>
          <p className="mt-5 text-sm leading-8 text-ink-300">
            We focus on imprinting, execution, and setup. The result is a more personal system for professionals who need high trust,
            sharper follow-through, and an assistant that feels configured rather than improvised.
          </p>
        </Card>
        <Card>
          <h2 className="text-2xl font-semibold text-white">Mission</h2>
          <p className="mt-5 text-sm leading-8 text-ink-300">
            Making AI accessible to entrepreneurs and professionals through a service model that feels premium, practical, and deeply personal.
          </p>
          <h3 className="mt-8 text-lg font-semibold text-white">What makes us different</h3>
          <p className="mt-3 text-sm leading-7 text-ink-300">
            This is not commodity hosting. We configure around your workflow, tone, constraints, and operating context with white-glove delivery.
          </p>
        </Card>
      </div>

      <section className="mt-20">
        <SectionHeading
          eyebrow="Values"
          title="How we think about the work"
          description="Three principles shape the product and the service experience."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title}>
              <h2 className="text-2xl font-semibold text-white">{value.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink-300">{value.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <Card>
          <p className="text-sm uppercase tracking-[0.24em] text-gold">Team</p>
          <h2 className="mt-4 text-3xl font-semibold text-white">Team section placeholder</h2>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-300">
            Reserved for founder bios, operator profiles, and future advisory depth. The structure is here so content can be added directly without revisiting layout.
          </p>
        </Card>
      </section>
    </div>
  );
}
