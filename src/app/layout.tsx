import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Sora, Inter } from "next/font/google";
import "./globals.css";
import { AppShell } from "@/components/providers/app-shell";
import { site } from "@/lib/data";
import { BASE_URL, healthClubJsonLd } from "@/lib/seo";

const display = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${site.name} — Premier Fitness & Wellness in Port Harcourt`,
    template: `%s · ${site.name}`,
  },
  description: site.intro,
  keywords: [
    "gym Port Harcourt",
    "fitness center Port Harcourt",
    "best gym Nigeria",
    "luxury gym",
    "swimming pool Port Harcourt",
    "personal training",
    "spa and wellness",
    "Charlie's Total Fitness Center",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: site.name,
    title: `${site.name} — Premier Fitness & Wellness in Port Harcourt`,
    description: site.intro,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050506",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sora.variable} ${inter.variable}`}>
      <body className="bg-ink font-body text-fog antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(healthClubJsonLd) }}
        />
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
