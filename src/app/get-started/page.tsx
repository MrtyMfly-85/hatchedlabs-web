"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { GetStartedFlow } from "../../components/onboarding/get-started-flow";
import { SectionHeading } from "../../components/marketing/section-heading";
import type { TierId } from "../../lib/constants";

function GetStartedInner() {
  const searchParams = useSearchParams();
  const tier = searchParams.get("tier") === "elite" ? "elite" : "pro";

  return (
    <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
      <SectionHeading
        eyebrow="Onboarding"
        title="Design your assistant"
        description="Choose your starting point, define your imprint, and send us the profile we'll use to build your agent."
      />
      <div className="mt-12">
        <GetStartedFlow initialTier={tier as TierId} />
      </div>
    </div>
  );
}

export default function GetStartedPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 text-center text-ink-300">Loading...</div>}>
      <GetStartedInner />
    </Suspense>
  );
}
