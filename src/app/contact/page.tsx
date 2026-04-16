import { ContactForm } from "../../components/marketing/contact-form";
import { SectionHeading } from "../../components/marketing/section-heading";
import { Card } from "../../components/ui/card";
import { buildMetadata } from "../../lib/metadata";

export const metadata = buildMetadata({
  title: "Contact | Hatched Labs",
  description:
    "Contact Hatched Labs for sales, support, onboarding questions, or to discuss a premium AI assistant deployment.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Contact"
        title="Reach the team behind your assistant"
        description="Use the form below for sales questions, onboarding help, or support needs."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_.9fr]">
        <Card>
          <ContactForm />
        </Card>
        <div className="grid gap-6">
          <Card>
            <h2 className="text-2xl font-semibold text-white">Email</h2>
            <div className="mt-4 space-y-3 text-sm text-ink-300">
              <p>
                <a href="mailto:hello@hatchedlabs.ai" className="text-white">hello@hatchedlabs.ai</a>
              </p>
            </div>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-white">Discovery calls</h2>
            <p className="mt-4 text-sm leading-7 text-ink-300">
              Placeholder for Calendly embed. This card can be replaced with a live scheduler without changing the page layout.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
