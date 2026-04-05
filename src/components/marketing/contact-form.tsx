"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form action={handleSubmit} className="space-y-4">
      <Input name="name" placeholder="Your name" required />
      <Input name="email" type="email" placeholder="Your email" required />
      <Textarea name="message" placeholder="Tell us what you need help with" required />
      <Button type="submit" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send message"}
      </Button>
      {status === "success" ? <p className="text-sm text-gold">Message received. We&apos;ll reply shortly.</p> : null}
      {status === "error" ? <p className="text-sm text-red-300">There was a problem submitting the form.</p> : null}
    </form>
  );
}
