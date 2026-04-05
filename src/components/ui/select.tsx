import { cn } from "@/lib/utils";
import type { SelectHTMLAttributes } from "react";

export function Select({ className, children, ...props }: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      className={cn(
        "w-full rounded-2xl border border-ink-700 bg-ink-900 px-4 py-3 text-sm text-white outline-none transition focus:border-gold",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}
