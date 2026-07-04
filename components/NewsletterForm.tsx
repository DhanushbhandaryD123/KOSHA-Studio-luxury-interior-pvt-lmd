"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const submit = () => {
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      setError("Enter a valid email address");
      return;
    }
    setError("");
    setDone(true);
  };

  if (done) {
    return (
      <div className="flex items-center gap-3 self-end text-brass-soft">
        <Check size={18} /> <span className="text-sm">You're on the list. First diary arrives next month.</span>
      </div>
    );
  }

  return (
    <div className="self-end">
      <div className="flex border-b border-linen/30 focus-within:border-brass-soft transition-colors">
        <label htmlFor="newsletter-email" className="sr-only">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && submit()}
          placeholder="your@email.com"
          className="w-full bg-transparent py-3 text-sm text-linen placeholder:text-linen/35 focus:outline-none"
        />
        <button onClick={submit} aria-label="Subscribe" className="p-3 text-brass-soft hover:text-linen transition-colors focus-visible:outline-2 focus-visible:outline-brass">
          <ArrowRight size={18} />
        </button>
      </div>
      {error && <p role="alert" className="mt-2 text-xs text-brass-soft">{error}</p>}
    </div>
  );
}
