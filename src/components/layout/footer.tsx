import Image from "next/image";
import Link from "next/link";
import { navLinks } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.2fr_.8fr_.8fr] lg:px-8">
        <div className="space-y-4">
          <Image src="/logo.svg" alt="Hatched Labs logo" width={160} height={38} />
          <p className="max-w-md text-sm leading-7 text-ink-300">
            Personal AI assistants for founders, operators, and professionals who want execution without losing control.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Navigate</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-ink-300">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="transition hover:text-white">
                {link.label}
              </Link>
            ))}
            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-gold">Contact</h2>
          <div className="mt-5 flex flex-col gap-3 text-sm text-ink-300">
            <a href="mailto:hello@hatchedlabs.ai" className="transition hover:text-white">
              hello@hatchedlabs.ai
            </a>
            <a href="mailto:support@hatchedlabs.ai" className="transition hover:text-white">
              support@hatchedlabs.ai
            </a>
            <span>Social links coming soon</span>
          </div>
        </div>
      </div>
      <div className="border-t border-white/5 px-6 py-5 text-center text-xs text-ink-500">
        © {new Date().getFullYear()} Hatched Labs. All rights reserved.
      </div>
    </footer>
  );
}
