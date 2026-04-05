"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  async function handleSubmit() {
    if (!email.includes("@") || !email.includes(".")) {
      return;
    }

    setStatus("loading");

    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
    } finally {
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[28px] border border-gold/20 bg-gold/10 p-6 text-center text-sm text-ink-100">
        You&apos;re on the list. Someone from our team will reach out within 24 hours.
      </div>
    );
  }

  return (
    <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-5 shadow-glow">
      <div className="flex flex-col gap-3 sm:flex-row">
        <Input
          aria-label="Email address"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              void handleSubmit();
            }
          }}
        />
        <Button type="button" onClick={handleSubmit} disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Get Early Access"}
        </Button>
      </div>
    </div>
  );
}
