"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.svg" alt="Hatched Labs logo" width={140} height={32} priority />
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm text-ink-300 transition hover:text-white",
                pathname === link.href && "text-gold",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Button href="/get-started" className="hidden sm:inline-flex">
            Get Started
          </Button>
          <Button href="/get-started" variant="secondary" className="sm:hidden">
            Start
          </Button>
        </div>
      </div>
    </header>
  );
}
