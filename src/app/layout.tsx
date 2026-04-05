import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Footer } from "../components/layout/footer";
import { Header } from "../components/layout/header";
import { buildMetadata, organizationJsonLd } from "../lib/metadata";
import "../styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = buildMetadata({
  title: "Hatched Labs | Personal AI Assistants",
  description:
    "Hatched Labs builds personal AI assistants for entrepreneurs and professionals who want research, communication, and execution handled with white-glove setup.",
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en">
      <body className={`${inter.variable} bg-background font-sans text-foreground antialiased`}>
        {gaId ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`}
            </Script>
          </>
        ) : null}
        <Script id="org-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationJsonLd())}
        </Script>
        <div className="gold-grid relative min-h-screen">
          <div className="pointer-events-none absolute inset-0 bg-gold-radial" />
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
