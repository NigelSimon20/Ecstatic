"use client";

import { useState } from "react";
import { company, services } from "@/lib/site";

// No backend yet: the form composes an email in the visitor's mail client.
export default function ContactForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `Quote request: ${data.get("service")}`;
    const body = [
      `Name: ${data.get("name")}`,
      `Company: ${data.get("company") || "-"}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Email: ${data.get("email")}`,
      "",
      String(data.get("message")),
    ].join("\n");
    window.location.href = `mailto:${company.emails[0]}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  const field =
    "w-full rounded-md border border-white/15 bg-navy-950/60 px-4 py-3 text-sm text-white placeholder:text-steel/50 focus:border-brand-light focus:ring-2 focus:ring-brand/40 focus:outline-none";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="sm:col-span-1">
        <span className="mb-1.5 block text-xs font-semibold tracking-wide text-steel uppercase">Full name *</span>
        <input name="name" required autoComplete="name" className={field} />
      </label>
      <label>
        <span className="mb-1.5 block text-xs font-semibold tracking-wide text-steel uppercase">Company</span>
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label>
        <span className="mb-1.5 block text-xs font-semibold tracking-wide text-steel uppercase">Email *</span>
        <input name="email" type="email" required autoComplete="email" className={field} />
      </label>
      <label>
        <span className="mb-1.5 block text-xs font-semibold tracking-wide text-steel uppercase">Phone</span>
        <input name="phone" type="tel" autoComplete="tel" className={field} />
      </label>
      <label className="sm:col-span-2">
        <span className="mb-1.5 block text-xs font-semibold tracking-wide text-steel uppercase">Service needed</span>
        <select name="service" className={field} defaultValue={services[0].title}>
          {services.map((s) => (
            <option key={s.title}>{s.title}</option>
          ))}
          <option>Other / Not sure</option>
        </select>
      </label>
      <label className="sm:col-span-2">
        <span className="mb-1.5 block text-xs font-semibold tracking-wide text-steel uppercase">Project details *</span>
        <textarea name="message" required rows={5} className={field} placeholder="Tell us about your project, site and timeline…" />
      </label>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-light"
        >
          Request a Quote
        </button>
        {sent && (
          <p className="text-sm text-steel" role="status">
            Your email app should now open with your message ready to send.
          </p>
        )}
      </div>
    </form>
  );
}
