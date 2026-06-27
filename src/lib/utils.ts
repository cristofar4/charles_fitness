import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Pad a number to two digits, e.g. 3 -> "03". Used for section indices. */
export function pad(n: number) {
  return String(n).padStart(2, "0");
}

/** Format a Naira price. */
export function naira(amount: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
}
