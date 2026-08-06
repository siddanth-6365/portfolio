import type { Metadata } from "next";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { profile } from "@/data";
import "./globals.css";

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const description = `${profile.role} at ${profile.company}. Backend systems, data pipelines and LLM tooling — Go, Python, FastAPI, AWS.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.site),
  title: {
    default: profile.short,
    template: `%s — ${profile.short}`,
  },
  description,
  authors: [{ name: profile.name, url: profile.site }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: profile.short,
    title: `${profile.short} — ${profile.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    creator: "@Siddanth6365",
    title: `${profile.short} — ${profile.role}`,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${sans.variable} ${mono.variable} font-sans`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
