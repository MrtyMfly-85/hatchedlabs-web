import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-ink-700 bg-white/[0.03] p-6 backdrop-blur-sm transition duration-300 hover:border-gold/60 hover:shadow-glow",
        className,
      )}
      {...props}
    />
  );
}
