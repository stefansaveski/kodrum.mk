import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { I18nProvider } from "@/components/i18n-provider";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Kodrum - Learn Programming, Math & IT Skills",
  description:
    "Modern educational center offering programming, mathematics, and IT courses for all ages. From kids to career changers - start your tech journey at Kodrum today.",
  keywords:
    "programming courses, math education, IT training, coding bootcamp, technology education, Macedonia, Kodrum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        <Navigation />
        <I18nProvider>{children}</I18nProvider>
        <Footer />
      </body>
    </html>
  );
}
