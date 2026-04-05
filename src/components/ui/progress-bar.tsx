type ProgressBarProps = {
  currentStep: number;
  totalSteps: number;
};

export function ProgressBar({ currentStep, totalSteps }: ProgressBarProps) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-ink-300">
        <span>Progress</span>
        <span>
          Step {currentStep} of {totalSteps}
        </span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-ink-900">
        <div className="h-full rounded-full bg-gradient-to-r from-gold to-gold-deep" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}
