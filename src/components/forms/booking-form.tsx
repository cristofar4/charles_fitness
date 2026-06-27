"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CalendarCheck } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Field, selectClass, FormSuccess } from "./form-parts";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  service: z.string().min(1, "Select an option"),
  date: z.string().min(1, "Pick a date"),
  time: z.string().min(1, "Select a time"),
  notes: z.string().optional(),
});
type FormData = z.infer<typeof schema>;

const times = ["Early morning (5–8am)", "Morning (8–11am)", "Midday (11am–2pm)", "Afternoon (2–5pm)", "Evening (5–8pm)", "Late (8–11pm)"];

export function BookingForm({
  serviceLabel = "Service",
  services,
  cta = "Confirm booking",
  successTitle = "Booking received",
  successMessage = "We've reserved your slot and will confirm by phone or email shortly. Get ready to train.",
}: {
  serviceLabel?: string;
  services: string[];
  cta?: string;
  successTitle?: string;
  successMessage?: string;
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 900));
    reset(undefined, { keepIsSubmitted: true, keepIsSubmitSuccessful: true });
  }

  if (isSubmitSuccessful) {
    return <FormSuccess title={successTitle} message={successMessage} />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
      <Field label="Full name" htmlFor="b-name" error={errors.name?.message}>
        <Input id="b-name" placeholder="Jane Doe" {...register("name")} />
      </Field>
      <Field label="Email" htmlFor="b-email" error={errors.email?.message}>
        <Input id="b-email" type="email" placeholder="jane@email.com" {...register("email")} />
      </Field>
      <Field label="Phone" htmlFor="b-phone" error={errors.phone?.message}>
        <Input id="b-phone" placeholder="+234 ..." {...register("phone")} />
      </Field>
      <Field label={serviceLabel} htmlFor="b-service" error={errors.service?.message}>
        <select id="b-service" className={selectClass} defaultValue="" {...register("service")}>
          <option value="" disabled>Choose…</option>
          {services.map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </Field>
      <Field label="Preferred date" htmlFor="b-date" error={errors.date?.message}>
        <Input id="b-date" type="date" {...register("date")} />
      </Field>
      <Field label="Preferred time" htmlFor="b-time" error={errors.time?.message}>
        <select id="b-time" className={selectClass} defaultValue="" {...register("time")}>
          <option value="" disabled>Choose…</option>
          {times.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </Field>
      <Field label="Anything we should know? (optional)" htmlFor="b-notes" className="sm:col-span-2">
        <Textarea id="b-notes" placeholder="Goals, injuries, experience level…" className="min-h-[110px]" {...register("notes")} />
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" variant="primary" className="btn-glow w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Submitting…" : cta} <CalendarCheck className="size-4" />
        </Button>
      </div>
    </form>
  );
}
