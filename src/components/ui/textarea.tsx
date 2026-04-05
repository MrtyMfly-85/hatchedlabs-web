import { cn } from "@/lib/utils";
import type { TextareaHTMLAttributes } from "react";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-[132px] w-full rounded-2xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-white outline-none transition placeholder:text-ink-500 focus:border-gold",
        className,
      )}
      {...props}
    />
  );
}
