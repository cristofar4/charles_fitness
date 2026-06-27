import type { Metadata } from "next";
import { site } from "./data";

export const BASE_URL = "https://charliestotalfitness.com";

export function pageMeta({
  title,
  description,
  path = "/",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const fullTitle = path === "/" ? title : `${title} · ${site.name}`;
  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: site.name,
      locale: "en_NG",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

/** Structured data — HealthClub / LocalBusiness for rich results. */
export const healthClubJsonLd = {
  "@context": "https://schema.org",
  "@type": ["HealthClub", "SportsActivityLocation", "LocalBusiness"],
  name: site.name,
  description: site.intro,
  url: BASE_URL,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: "NG",
  },
  areaServed: { "@type": "City", name: site.city },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "05:00",
      closes: "23:00",
    },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "06:00", closes: "22:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "07:00", closes: "21:00" },
  ],
  amenityFeature: [
    "Gym",
    "Swimming Pool",
    "Spa",
    "Sauna",
    "Steam Room",
    "Basketball Court",
    "Football Pitch",
    "Restaurant",
  ].map((name) => ({ "@type": "LocationFeatureSpecification", name, value: true })),
  sameAs: site.socials.map((s) => s.href),
};
