import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { tiers } from "@/lib/constants";
import { formatCurrency } from "@/lib/utils";

export function PricingCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {Object.values(tiers).map((tier) => (
        <Card key={tier.id} className="flex h-full flex-col">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">{tier.name}</h3>
              <p className="mt-2 text-sm text-ink-300">{tier.description}</p>
            </div>
            <p className="text-right text-sm text-ink-300">
              <span className="block text-3xl font-semibold text-white">{formatCurrency(tier.monthlyPrice)}</span>
              per month
            </p>
          </div>
          <p className="mt-4 text-sm text-gold">{tier.engine}</p>
          <ul className="mt-6 space-y-3 text-sm text-ink-300">
            {tier.features.slice(0, 5).map((feature) => (
              <li key={feature}>• {feature}</li>
            ))}
          </ul>
          <div className="mt-8">
            <Button href={tier.ctaHref}>{`Choose ${tier.name}`}</Button>
          </div>
        </Card>
      ))}
    </div>
  );
}
