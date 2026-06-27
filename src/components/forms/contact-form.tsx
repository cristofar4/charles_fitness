"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Field, selectClass, FormSuccess } from "./form-parts";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().min(7, "Enter a valid phone number"),
  topic: z.string().min(1, "Select a topic"),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
});
type FormData = z.infer<typeof schema>;

export function ContactForm() {
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
    return (
      <FormSuccess
        title="Message sent"
        message="Thank you for reaching out. Our team will get back to you within one business day."
      />
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-5 sm:grid-cols-2">
      <Field label="Full name" htmlFor="name" error={errors.name?.message}>
        <Input id="name" placeholder="Jane Doe" {...register("name")} />
      </Field>
      <Field label="Email" htmlFor="email" error={errors.email?.message}>
        <Input id="email" type="email" placeholder="jane@email.com" {...register("email")} />
      </Field>
      <Field label="Phone" htmlFor="phone" error={errors.phone?.message}>
        <Input id="phone" placeholder="+234 ..." {...register("phone")} />
      </Field>
      <Field label="I'm interested in" htmlFor="topic" error={errors.topic?.message}>
        <select id="topic" className={selectClass} defaultValue="" {...register("topic")}>
          <option value="" disabled>Select a topic</option>
          <option>Membership</option>
          <option>Personal Training</option>
          <option>Swimming Lessons</option>
          <option>Corporate Wellness</option>
          <option>Book a Tour</option>
          <option>Other</option>
        </select>
      </Field>
      <Field label="Message" htmlFor="message" error={errors.message?.message} className="sm:col-span-2">
        <Textarea id="message" placeholder="How can we help you reach your goals?" {...register("message")} />
      </Field>
      <div className="sm:col-span-2">
        <Button type="submit" size="lg" variant="primary" className="btn-glow w-full sm:w-auto" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send message"} <Send className="size-4" />
        </Button>
      </div>
    </form>
  );
}
