import { EmailCapture } from "../components/marketing/email-capture";
import { PricingCards } from "../components/marketing/pricing-cards";
import { SectionHeading } from "../components/marketing/section-heading";
import { Card } from "../components/ui/card";
import { buildMetadata } from "../lib/metadata";

export const metadata = buildMetadata({
  title: "Hatched Labs | Your AI. Always on. Always yours.",
  description:
    "Meet Hatched Labs, a premium AI assistant service with white-glove setup, personal imprinting, and ongoing execution for modern professionals.",
});

const benefits = [
  {
    title: "Built around your operating style",
    body: "Every assistant starts with your imprint: voice, priorities, workflows, audience, and the friction points you want removed.",
  },
  {
    title: "Available when your day is not",
    body: "Your agent stays on across research, follow-up, background tasks, and information gathering even when you are offline.",
  },
  {
    title: "More than a chatbot",
    body: "It can browse the web, maintain recurring work, manage context, and act like an operator instead of a novelty interface.",
  },
  {
    title: "White-glove deployment",
    body: "We configure, tune, and launch the assistant for you instead of handing you a blank dashboard and hoping it works.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-14 px-6 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.32em] text-gold">Personal AI assistant service</p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Your AI. Always on. Always yours.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-300">
            Hatched Labs builds dedicated AI assistants for professionals who need research, communication support,
            and operational follow-through without sacrificing privacy or quality.
          </p>

          <div className="mt-12 max-w-xl">
            <EmailCapture />
          </div>
        </div>
        <Card className="relative overflow-hidden p-8">
          <div className="absolute inset-x-10 top-0 h-40 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative space-y-8">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-gold">Preview</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">A private operator tuned to your workflow</h2>
            </div>
            <div className="grid gap-4">
              {[
                "Morning brief before your first meeting",
                "Inbox triage with recommended responses",
                "Competitive research while you are offline",
                "Recurring reports delivered on schedule",
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/8 bg-black/60 px-4 py-4 text-sm text-ink-100">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Card>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Why Hatched"
          title="The assistant layer modern professionals have been missing"
          description="Designed for people who need higher-quality execution than consumer AI products typically deliver."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <Card key={benefit.title}>
              <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-300">{benefit.body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Choose. Customize. Launch."
          description="A simple onboarding path backed by a real implementation team."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            ["Choose", "Pick a persona or start from scratch, then select the service tier that matches your needs."],
            ["Customize", "Complete your imprint so the assistant reflects your business context, voice, tools, and priorities."],
            ["Launch", "We review, configure, and deliver your assistant within 24 to 48 hours."],
          ].map(([title, body], index) => (
            <Card key={title}>
              <p className="text-sm uppercase tracking-[0.24em] text-gold">0{index + 1}</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink-300">{body}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          eyebrow="Plans"
          title="Two high-touch service tiers"
          description="Start with the level of intelligence and integration depth that fits the role you want your assistant to play."
        />
        <div className="mt-12">
          <PricingCards />
        </div>
      </section>

    </div>
  );
}
