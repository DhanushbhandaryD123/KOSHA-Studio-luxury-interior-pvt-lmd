"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowRight, Check } from "lucide-react";

const schema = z.object({
  name: z.string().min(2, "Please tell us your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(10, "Enter a valid phone number"),
  scope: z.string().min(1, "Choose a project scope"),
  budget: z.string().min(1, "Choose a budget band"),
  message: z.string().min(20, "A few sentences about the project helps us prepare (min 20 characters)"),
});

type FormData = z.infer<typeof schema>;

const field =
  "w-full border-b border-espresso/25 bg-transparent py-3.5 text-espresso placeholder:text-stone/70 focus:border-brass focus:outline-none transition-colors";
const label = "spec block text-stone mb-1";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    // Wire to your API route / CRM here. Payload is validated & typed.
    await new Promise((r) => setTimeout(r, 700));
    console.log("Consultation request:", data);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="titleblock flex flex-col items-start gap-4 p-10">
        <span className="flex size-12 items-center justify-center border border-brass text-brass"><Check size={22} /></span>
        <h3 className="display text-3xl">Request received.</h3>
        <p className="max-w-md text-stone leading-relaxed">
          A studio director will reply within one working day with two proposed consultation slots. Check your inbox for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-8">
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name</label>
          <input id="name" {...register("name")} className={field} placeholder="Aditi Sharma" autoComplete="name" />
          {errors.name && <p role="alert" className="mt-1.5 text-xs text-brass">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={label}>Phone</label>
          <input id="phone" {...register("phone")} className={field} placeholder="+91 98xxx xxxxx" autoComplete="tel" />
          {errors.phone && <p role="alert" className="mt-1.5 text-xs text-brass">{errors.phone.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="email" className={label}>Email</label>
        <input id="email" type="email" {...register("email")} className={field} placeholder="you@email.com" autoComplete="email" />
        {errors.email && <p role="alert" className="mt-1.5 text-xs text-brass">{errors.email.message}</p>}
      </div>

      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <label htmlFor="scope" className={label}>Project scope</label>
          <select id="scope" {...register("scope")} className={field} defaultValue="">
            <option value="" disabled>Select scope</option>
            <option>Full home interiors</option>
            <option>Architecture + interiors</option>
            <option>Commercial / Office</option>
            <option>Hospitality</option>
            <option>Renovation / Restoration</option>
            <option>Landscape</option>
            <option>Consultation only</option>
          </select>
          {errors.scope && <p role="alert" className="mt-1.5 text-xs text-brass">{errors.scope.message}</p>}
        </div>
        <div>
          <label htmlFor="budget" className={label}>Budget band</label>
          <select id="budget" {...register("budget")} className={field} defaultValue="">
            <option value="" disabled>Select band</option>
            <option>₹25 L – ₹80 L</option>
            <option>₹80 L – ₹2 Cr</option>
            <option>₹2 Cr – ₹5 Cr</option>
            <option>₹5 Cr +</option>
            <option>Not sure yet</option>
          </select>
          {errors.budget && <p role="alert" className="mt-1.5 text-xs text-brass">{errors.budget.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="message" className={label}>About the project</label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className={field}
          placeholder="Location, size, timeline, and what a good outcome looks like to you."
        />
        {errors.message && <p role="alert" className="mt-1.5 text-xs text-brass">{errors.message.message}</p>}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="spec inline-flex items-center gap-3 bg-espresso px-9 py-4 !text-[0.72rem] text-linen transition-colors hover:bg-brass disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
      >
        {isSubmitting ? "Sending…" : "Request consultation"} <ArrowRight size={15} />
      </button>
    </form>
  );
}
