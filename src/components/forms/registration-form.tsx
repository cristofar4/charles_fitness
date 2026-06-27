"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Field, selectClass, FormSuccess } from "./form-parts";
import { memberships } from "@/lib/data";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  plan: z.string().min(1, "Choose a plan"),
  goal: z.string().min(1, "Select your main goal"),
  start: z.string().min(1, "Pick a start date"),
});
type FormData = z.infer<typeof schema>;

const goals = ["Build strength", "Lose weight", "Build muscle", "Improve fitness", "Learn to swim", "Overall wellness"];

export function RegistrationForm({ defaultPlan }: { defaultPlan?: string }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema), defaultValues: { plan: defaultPlan } });

  async function onSubmit() {
    await new Promise((r) => setTimeout(r, 1000));
    reset(undefined, { keepIsSubmitted: true, keepIsSubmitSuccessful: true });
  }

  if (isSubmitSuccessful) {
    return (
      <FormSuccess
        title="Welcome to Charlie's"
        message="Your membership request is in. Our team will call you within 24 hours to finalise your plan and book your induction. Let's get to work."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
      <Field label="Full name" htmlFor="r-name" error={errors.name?.message}>
        <Input id="r-name" placeholder="Jane Doe" {...register("name")} />
      </Field>
      <Field label="Email" htmlFor="r-email" error={errors.email?.message}>
        <Input id="r-email" type="email" placeholder="jane@email.com" {...register("email")} />
      </Field>
      <Field label="Phone" htmlFor="r-phone" error={errors.phone?.message}>
        <Input id="r-phone" placeholder="+234 ..." {...register("phone")} />
      </Field>
      <Field label="Membership plan" htmlFor="r-plan" error={errors.plan?.message}>
        <select id="r-plan" className={selectClass} defaultValue={defaultPlan ?? ""} {...register("plan")}>
          <option value="" disabled>Choose a plan…</option>
          {memberships.map((m) => (
            <option key={m.slug} value={m.name}>{m.name}</option>
          ))}
        </select>
      </Field>
      <Field label="Main goal" htmlFor="r-goal" error={errors.goal?.message}>
        <select id="r-goal" className={selectClass} defaultValue="" {...register("goal")}>
          <option value="" disabled>Select…</option>
          {goals.map((g) => (
            <option key={g}>{g}</option>
          ))}
        </select>
      </Field>
      <Field label="Preferred start date" htmlFor="r-start" error={errors.start?.message}>
        <Input id="r-start" type="date" {...register("start")} />
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" variant="primary" className="btn-glow w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Submitting…" : "Join Charlie's"} <ArrowUpRight className="size-4" />
        </Button>
        <p className="mt-3 text-xs text-smoke">No payment required now — we&apos;ll confirm your details first.</p>
      </div>
    </form>
  );
}
