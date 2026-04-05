type StepIndicatorProps = {
  currentStep: number;
  labels: string[];
};

export function StepIndicator({ currentStep, labels }: StepIndicatorProps) {
  return (
    <div className="grid gap-3 md:grid-cols-5">
      {labels.map((label, index) => {
        const step = index + 1;
        const active = step === currentStep;
        const complete = step < currentStep;

        return (
          <div
            key={label}
            className={`rounded-2xl border px-4 py-3 text-sm transition ${
              active
                ? "border-gold bg-gold/10 text-white"
                : complete
                  ? "border-gold/40 bg-white/[0.03] text-ink-100"
                  : "border-ink-700 bg-transparent text-ink-300"
            }`}
          >
            <span className="mr-2 text-xs uppercase tracking-[0.24em]">{step}</span>
            {label}
          </div>
        );
      })}
    </div>
  );
}
