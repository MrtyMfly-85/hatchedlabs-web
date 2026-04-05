import { Button } from "../../../components/ui/button";
import { Card } from "../../../components/ui/card";
import { buildMetadata } from "../../../lib/metadata";

export const metadata = buildMetadata({
  title: "Onboarding Confirmed | Hatched Labs",
  description:
    "Your Hatched Labs onboarding details have been received. Here is what happens next as we build your assistant.",
  path: "/get-started/confirmed",
});

const timeline = [
  "Our team reviews your imprint",
  "We build and customize your agent (24-48 hours)",
  "You get your Telegram bot link",
  "Say hello to your new assistant",
];

export default function ConfirmedPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-24 lg:px-8">
      <Card className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/40 bg-gold/10 text-3xl">
          ✓
        </div>
        <h1 className="mt-8 text-4xl font-semibold text-white">We&apos;re building your agent!</h1>
        <p className="mt-4 text-base leading-8 text-ink-300">
          You&apos;ll hear from us within 48 hours. If we need anything else before deployment, we&apos;ll reach out directly.
        </p>
        <div className="mt-10 grid gap-4 text-left">
          {timeline.map((item, index) => (
            <div key={item} className="rounded-2xl border border-ink-700 bg-black/30 px-5 py-4 text-sm text-ink-100">
              <span className="mr-3 text-gold">0{index + 1}</span>
              {item}
            </div>
          ))}
        </div>
        <p className="mt-8 text-sm text-ink-300">
          Questions? Email <a href="mailto:hello@hatchedlabs.ai" className="text-white">hello@hatchedlabs.ai</a>.
        </p>
        <div className="mt-8">
          <Button href="/">Return home</Button>
        </div>
      </Card>
    </div>
  );
}
