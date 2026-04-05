import Script from "next/script";
import { PricingCards } from "../../components/marketing/pricing-cards";
import { SectionHeading } from "../../components/marketing/section-heading";
import { Button } from "../../components/ui/button";
import { Card } from "../../components/ui/card";
import { pricingComparisonRows, pricingFaqs, SITE_URL, tiers } from "../../lib/constants";
import { buildMetadata } from "../../lib/metadata";

export const metadata = buildMetadata({
  title: "Pricing | Hatched Labs",
  description:
    "Compare Hatched Labs Pro and Elite plans, pricing, support, setup fees, and rollout details for your personal AI assistant.",
  path: "/pricing",
});

export default function PricingPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pricingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <Script id="pricing-faq-jsonld" type="application/ld+json">
        {JSON.stringify(faqJsonLd)}
      </Script>
      <SectionHeading
        eyebrow="Pricing"
        title="Two service tiers. One white-glove experience."
        description="Choose the intelligence, integrations, and support level that matches the assistant you want in your corner."
        align="center"
      />
      <p className="mt-6 text-center text-sm text-ink-300">Setup fee: $250, waived with annual commitment.</p>

      <div className="mt-12">
        <PricingCards />
      </div>

      <div className="mt-16 overflow-hidden rounded-[28px] border border-ink-700">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-white/[0.04] text-white">
            <tr>
              <th className="px-5 py-4">Feature</th>
              <th className="px-5 py-4">{tiers.pro.name}</th>
              <th className="px-5 py-4">{tiers.elite.name}</th>
            </tr>
          </thead>
          <tbody>
            {pricingComparisonRows.map(([feature, pro, elite]) => (
              <tr key={feature} className="border-t border-ink-700 text-ink-300">
                <td className="px-5 py-4 text-white">{feature}</td>
                <td className="px-5 py-4">{pro}</td>
                <td className="px-5 py-4">{elite}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-2">
        {Object.values(tiers).map((tier) => (
          <Card key={tier.id}>
            <h2 className="text-2xl font-semibold text-white">{tier.name}</h2>
            <p className="mt-2 text-sm text-gold">{tier.engine}</p>
            <ul className="mt-6 space-y-3 text-sm text-ink-300">
              {tier.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={`${SITE_URL}/get-started?tier=${tier.id}`.replace(SITE_URL, "")}>{`Get Started with ${tier.name}`}</Button>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-16 grid gap-6">
        {pricingFaqs.map((faq) => (
          <Card key={faq.question}>
            <h2 className="text-xl font-semibold text-white">{faq.question}</h2>
            <p className="mt-3 text-sm leading-7 text-ink-300">{faq.answer}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
