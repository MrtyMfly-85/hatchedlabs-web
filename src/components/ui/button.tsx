import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
};

const styles = {
  primary:
    "bg-gradient-to-r from-gold to-gold-deep text-black hover:opacity-90 shadow-glow",
  secondary:
    "border border-ink-700 bg-ink-900 text-white hover:border-gold hover:text-gold",
  ghost: "text-white hover:text-gold",
};

const shared =
  "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold";

export function Button({ href, variant = "primary", className, children, ...props }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} className={cn(shared, styles[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(shared, styles[variant], className)} {...props}>
      {children}
    </button>
  );
}
