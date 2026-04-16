"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { StepIndicator } from "./step-indicator";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { ProgressBar } from "../ui/progress-bar";
import { Select } from "../ui/select";
import { Textarea } from "../ui/textarea";
import {
  communicationStyles,
  personas,
  personalityWordOptions,
  taskOptions,
  tiers,
  toolOptions,
  type PersonaId,
  type TierId,
} from "../../lib/constants";

type FlowProps = {
  initialTier?: TierId;
};

type FormState = {
  persona: PersonaId | "custom";
  tier: TierId;
  clientName: string;
  agentName: string;
  businessIndustry: string;
  typicalDay: string;
  timeConsumingTasks: string[];
  otherTask: string;
  communicationStyle: string;
  communicationNotes: string;
  existingTools: string[];
  otherTool: string;
  topWish: string;
  clientAudience: string;
  personalityWords: string[];
  additionalNotes: string;
  email: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
};

const labels = ["Persona", "Tier", "Imprint", "Review", "Checkout"];

const blankState: FormState = {
  persona: "custom",
  tier: "pro",
  clientName: "",
  agentName: "",
  businessIndustry: "",
  typicalDay: "",
  timeConsumingTasks: [],
  otherTask: "",
  communicationStyle: "professional",
  communicationNotes: "",
  existingTools: [],
  otherTool: "",
  topWish: "",
  clientAudience: "",
  personalityWords: [],
  additionalNotes: "",
  email: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
};

export function GetStartedFlow({ initialTier = "pro" }: FlowProps) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState<FormState>({ ...blankState, tier: initialTier });

  const selectedTier = tiers[form.tier];

  const previewSummary = useMemo(() => {
    const tone = communicationStyles.find((item) => item.value === form.communicationStyle)?.label || "Professional & polished";
    return `${form.clientName || "Client"} wants an assistant that feels ${tone.toLowerCase()} and comes across as ${
      form.personalityWords.join(", ").toLowerCase() || "professional"
    }.`;
  }, [form.clientName, form.communicationStyle, form.personalityWords]);

  function applyPersona(personaId: PersonaId | "custom") {
    if (personaId === "custom") {
      setForm((current) => ({ ...current, persona: "custom" }));
      return;
    }

    const persona = personas[personaId];

    setForm((current) => ({
      ...current,
      persona: personaId,
      businessIndustry: persona.defaults.businessIndustry,
      typicalDay: persona.defaults.typicalDay,
      timeConsumingTasks: persona.defaults.tasks,
      communicationStyle: persona.defaults.communicationStyle,
      communicationNotes: persona.defaults.communicationNotes,
      existingTools: persona.defaults.tools,
      topWish: persona.defaults.topWish,
      clientAudience: persona.defaults.audience,
      personalityWords: persona.defaults.personalityWords,
      additionalNotes: persona.defaults.additionalNotes,
    }));
  }

  function toggleArrayValue(field: "timeConsumingTasks" | "existingTools", value: string) {
    setForm((current) => {
      const exists = current[field].includes(value);
      return {
        ...current,
        [field]: exists ? current[field].filter((item) => item !== value) : [...current[field], value],
      };
    });
  }

  function toggleWord(word: string) {
    setForm((current) => {
      const exists = current.personalityWords.includes(word);
      if (exists) {
        return { ...current, personalityWords: current.personalityWords.filter((item) => item !== word) };
      }
      if (current.personalityWords.length >= 3) {
        return current;
      }
      return { ...current, personalityWords: [...current.personalityWords, word] };
    });
  }

  function nextStep() {
    setStep((current) => Math.min(current + 1, labels.length));
  }

  function previousStep() {
    setStep((current) => Math.max(current - 1, 1));
  }

  async function handleCheckout() {
    setSubmitting(true);

    const payload = {
      tier: form.tier,
      persona: form.persona,
      client_name: form.clientName,
      agent_name: form.agentName,
      business_industry: form.businessIndustry,
      typical_day: form.typicalDay,
      time_consuming_tasks: [...form.timeConsumingTasks, form.otherTask].filter(Boolean),
      communication_style: form.communicationStyle,
      communication_notes: form.communicationNotes,
      existing_tools: [...form.existingTools, form.otherTool].filter(Boolean),
      top_wish: form.topWish,
      client_audience: form.clientAudience,
      personality_words: form.personalityWords,
      additional_notes: form.additionalNotes,
      email: form.email,
      utm_source: form.utmSource,
      utm_medium: form.utmMedium,
      utm_campaign: form.utmCampaign,
      status: "pending",
    };

    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      router.push("/get-started/confirmed");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="space-y-8">
      <ProgressBar currentStep={step} totalSteps={labels.length} />
      <StepIndicator currentStep={step} labels={labels} />

      {step === 1 ? (
        <div className="grid gap-6 lg:grid-cols-2">
          {Object.values(personas).map((persona) => (
            <button
              key={persona.id}
              type="button"
              onClick={() => applyPersona(persona.id)}
              className={`rounded-[28px] border p-6 text-left transition ${
                form.persona === persona.id ? "border-gold bg-gold/10 shadow-glow" : "border-ink-700 bg-white/[0.03]"
              }`}
            >
              <p className="text-3xl">{persona.emoji}</p>
              <h2 className="mt-4 text-2xl font-semibold text-white">{persona.name}</h2>
              <p className="mt-3 text-sm text-ink-300">{persona.short}</p>
            </button>
          ))}
          <button
            type="button"
            onClick={() => applyPersona("custom")}
            className={`rounded-[28px] border p-6 text-left transition ${
              form.persona === "custom" ? "border-gold bg-gold/10 shadow-glow" : "border-ink-700 bg-white/[0.03]"
            }`}
          >
            <p className="text-sm uppercase tracking-[0.24em] text-gold">Blank slate</p>
            <h2 className="mt-4 text-2xl font-semibold text-white">Build from scratch</h2>
            <p className="mt-3 text-sm text-ink-300">
              Start with empty answers and define the assistant around your own workflow.
            </p>
          </button>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {Object.values(tiers).map((tier) => (
              <button
                key={tier.id}
                type="button"
                onClick={() => setForm((current) => ({ ...current, tier: tier.id }))}
                className={`rounded-[28px] border p-6 text-left transition ${
                  form.tier === tier.id ? "border-gold bg-gold/10 shadow-glow" : "border-ink-700 bg-white/[0.03]"
                }`}
              >
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{tier.name}</h2>
                    <p className="mt-2 text-sm text-gold">{tier.engine}</p>
                  </div>
                  <p className="text-sm text-ink-300">{tier.support}</p>
                </div>
                <ul className="mt-6 space-y-3 text-sm text-ink-300">
                  {tier.features.slice(0, 6).map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </button>
            ))}
          </div>
          <details className="rounded-[24px] border border-ink-700 bg-white/[0.03] p-6">
            <summary className="cursor-pointer text-lg font-semibold text-white">What&apos;s the difference?</summary>
            <p className="mt-4 text-sm leading-7 text-ink-300">
              Pro is the right fit if you want a capable assistant focused on research, recurring tasks, and communication support. Elite adds the highest-intelligence model, deeper workflow tailoring, and direct inbox and calendar integration.
            </p>
          </details>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-6">
          <Card>
            <h2 className="text-2xl font-semibold text-white">1. Your identity</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <Input
                placeholder="What's your name?"
                value={form.clientName}
                onChange={(event) => setForm((current) => ({ ...current, clientName: event.target.value }))}
              />
              <Input
                placeholder="What should your agent call you?"
                value={form.agentName}
                onChange={(event) => setForm((current) => ({ ...current, agentName: event.target.value }))}
              />
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold text-white">2. Business or industry</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-[1fr_220px]">
              <Input
                placeholder="Describe your business or industry"
                value={form.businessIndustry}
                onChange={(event) => setForm((current) => ({ ...current, businessIndustry: event.target.value }))}
              />
              <Select
                value={form.businessIndustry}
                onChange={(event) => setForm((current) => ({ ...current, businessIndustry: event.target.value }))}
              >
                <option value="">Common industries</option>
                <option value="Real estate">Real estate</option>
                <option value="Professional services">Professional services</option>
                <option value="Healthcare">Healthcare</option>
                <option value="Finance">Finance</option>
                <option value="Technology">Technology</option>
                <option value="Operations">Operations</option>
              </Select>
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold text-white">3. Typical day</h2>
            <div className="mt-5">
              <Textarea
                placeholder="Walk us through what a normal day looks like"
                value={form.typicalDay}
                onChange={(event) => setForm((current) => ({ ...current, typicalDay: event.target.value }))}
              />
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold text-white">4. Time-consuming tasks</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {taskOptions.map((task) => (
                <button
                  key={task}
                  type="button"
                  onClick={() => toggleArrayValue("timeConsumingTasks", task)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    form.timeConsumingTasks.includes(task) ? "border-gold bg-gold/10 text-white" : "border-ink-700 text-ink-300"
                  }`}
                >
                  {task}
                </button>
              ))}
            </div>
            <Input
              className="mt-4"
              placeholder="Other task"
              value={form.otherTask}
              onChange={(event) => setForm((current) => ({ ...current, otherTask: event.target.value }))}
            />
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold text-white">5. Communication style</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {communicationStyles.map((style) => (
                <button
                  key={style.value}
                  type="button"
                  onClick={() => setForm((current) => ({ ...current, communicationStyle: style.value }))}
                  className={`rounded-2xl border px-4 py-5 text-left text-sm transition ${
                    form.communicationStyle === style.value ? "border-gold bg-gold/10 text-white" : "border-ink-700 text-ink-300"
                  }`}
                >
                  {style.label}
                </button>
              ))}
            </div>
            <Textarea
              className="mt-4"
              placeholder="Any specifics about tone, boundaries, or style?"
              value={form.communicationNotes}
              onChange={(event) => setForm((current) => ({ ...current, communicationNotes: event.target.value }))}
            />
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold text-white">6. Existing tools</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {toolOptions.map((tool) => (
                <button
                  key={tool}
                  type="button"
                  onClick={() => toggleArrayValue("existingTools", tool)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    form.existingTools.includes(tool) ? "border-gold bg-gold/10 text-white" : "border-ink-700 text-ink-300"
                  }`}
                >
                  {tool}
                </button>
              ))}
            </div>
            <Input
              className="mt-4"
              placeholder="Other tool"
              value={form.otherTool}
              onChange={(event) => setForm((current) => ({ ...current, otherTool: event.target.value }))}
            />
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold text-white">7. The one thing you most want help with</h2>
            <div className="mt-5">
              <Textarea
                placeholder="What is the biggest bottleneck right now?"
                value={form.topWish}
                onChange={(event) => setForm((current) => ({ ...current, topWish: event.target.value }))}
              />
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold text-white">8. Your clients or audience</h2>
            <div className="mt-5">
              <Textarea
                placeholder="Optional: who do you serve, and what do they expect from you?"
                value={form.clientAudience}
                onChange={(event) => setForm((current) => ({ ...current, clientAudience: event.target.value }))}
              />
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold text-white">9. Pick three personality words</h2>
            <p className="mt-3 text-sm text-ink-300">Choose up to 3.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              {personalityWordOptions.map((word) => (
                <button
                  key={word}
                  type="button"
                  onClick={() => toggleWord(word)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    form.personalityWords.includes(word) ? "border-gold bg-gold/10 text-white" : "border-ink-700 text-ink-300"
                  }`}
                >
                  {word}
                </button>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-2xl font-semibold text-white">10. Anything else we should know?</h2>
            <div className="mt-5">
              <Textarea
                placeholder="Optional context, preferences, constraints, or edge cases"
                value={form.additionalNotes}
                onChange={(event) => setForm((current) => ({ ...current, additionalNotes: event.target.value }))}
              />
            </div>
          </Card>
        </div>
      ) : null}

      {step === 4 ? (
        <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr]">
          <Card>
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-gold">Review</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Your agent profile</h2>
              </div>
            </div>
            <div className="mt-8 space-y-5 text-sm text-ink-300">
              <div>
                <p className="text-ink-500">Persona</p>
                <p className="mt-1 text-white">
                  {form.persona === "custom" ? "Build from scratch" : personas[form.persona].name}
                </p>
              </div>
              <div>
                <p className="text-ink-500">Tier</p>
                <p className="mt-1 text-white">{selectedTier.name}</p>
              </div>
              <div>
                <p className="text-ink-500">Client name</p>
                <p className="mt-1 text-white">{form.clientName || "Not provided yet"}</p>
              </div>
              <div>
                <p className="text-ink-500">Business</p>
                <p className="mt-1 text-white">{form.businessIndustry || "Not provided yet"}</p>
              </div>
              <div>
                <p className="text-ink-500">Top wish</p>
                <p className="mt-1 text-white">{form.topWish || "Not provided yet"}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {form.personalityWords.map((word) => (
                  <span key={word} className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">
                    {word}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button type="button" variant="secondary" onClick={() => setStep(1)}>
                Edit persona
              </Button>
              <Button type="button" variant="secondary" onClick={() => setStep(2)}>
                Edit tier
              </Button>
              <Button type="button" variant="secondary" onClick={() => setStep(3)}>
                Edit imprint
              </Button>
            </div>
          </Card>
          <Card>
            <p className="text-sm uppercase tracking-[0.24em] text-gold">Preview</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">
              {form.agentName ? `${form.agentName} for ${form.clientName || "you"}` : "Your future assistant"}
            </h2>
            <p className="mt-5 text-sm leading-7 text-ink-300">{previewSummary}</p>
            <div className="mt-8 rounded-[24px] border border-ink-700 bg-black/40 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-ink-300">Snapshot</p>
              <ul className="mt-4 space-y-3 text-sm text-white">
                <li>Tier: {selectedTier.name}</li>
                <li>Communication style: {communicationStyles.find((item) => item.value === form.communicationStyle)?.label}</li>
                <li>Primary tasks: {form.timeConsumingTasks.join(", ") || "To be defined"}</li>
              </ul>
            </div>
          </Card>
        </div>
      ) : null}

      {step === 5 ? (
        <div className="grid gap-6 lg:grid-cols-[1fr_.9fr]">
          <Card>
            <p className="text-sm uppercase tracking-[0.24em] text-gold">Checkout</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Complete your onboarding</h2>
            <p className="mt-4 text-sm leading-7 text-ink-300">
              Stripe is placeholder-only right now. Completing this step saves your profile and routes it to our team.
            </p>
            <div className="mt-6 space-y-4">
              <Input
                type="email"
                placeholder="Your email"
                value={form.email}
                onChange={(event) => setForm((current) => ({ ...current, email: event.target.value }))}
              />
              <div className="grid gap-4 md:grid-cols-3">
                <Input
                  placeholder="utm_source"
                  value={form.utmSource}
                  onChange={(event) => setForm((current) => ({ ...current, utmSource: event.target.value }))}
                />
                <Input
                  placeholder="utm_medium"
                  value={form.utmMedium}
                  onChange={(event) => setForm((current) => ({ ...current, utmMedium: event.target.value }))}
                />
                <Input
                  placeholder="utm_campaign"
                  value={form.utmCampaign}
                  onChange={(event) => setForm((current) => ({ ...current, utmCampaign: event.target.value }))}
                />
              </div>
            </div>
          </Card>
          <Card>
            <h2 className="text-2xl font-semibold text-white">Summary</h2>
            <div className="mt-6 space-y-4 text-sm text-ink-300">
              <div className="flex items-center justify-between">
                <span>Plan</span>
                <span className="text-white">{selectedTier.name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>AI model</span>
                <span className="text-white">{selectedTier.engine}</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Support</span>
                <span className="text-white">{selectedTier.support}</span>
              </div>
            </div>
            <Button type="button" className="mt-8 w-full" onClick={handleCheckout} disabled={submitting || !form.email}>
              {submitting ? "Saving..." : "Submit Request"}
            </Button>
          </Card>
        </div>
      ) : null}

      <div className="flex items-center justify-between gap-4">
        <Button type="button" variant="secondary" onClick={previousStep} className={step === 1 ? "invisible" : ""}>
          Back
        </Button>
        {step < 5 ? (
          <Button type="button" onClick={nextStep}>
            Continue
          </Button>
        ) : null}
      </div>
    </div>
  );
}
