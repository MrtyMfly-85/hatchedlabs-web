import { Card } from "@/components/ui/card";
import { tiers } from "@/lib/constants";

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {Object.values(tiers).map((tier) => (
        <Card key={tier.id} className="flex h-full flex-col">
          <div>
            <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
            <p className="mt-2 text-sm text-ink-300">{tier.description}</p>
          </div>
          <p className="mt-4 text-sm text-gold">{tier.engine}</p>
          <ul className="mt-6 space-y-3 text-sm text-ink-300">
            {tier.features.map((feature) => {
              const isBold = feature.startsWith("**") && feature.endsWith("**");
              const isItalic = feature.startsWith("_") && feature.endsWith("_");
              if (isBold) {
                return (
                  <li key={feature} className="font-semibold text-white">• {feature.slice(2, -2)}</li>
                );
              }
              if (isItalic) {
                return (
                  <li key={feature} className="list-none italic text-ink-300">{feature.slice(1, -1)}</li>
                );
              }
              return <li key={feature}>• {feature}</li>;
            })}
          </ul>

        </Card>
      ))}
    </div>
  );
}
