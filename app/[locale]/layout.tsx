import { Metadata, Viewport } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { inter, vazir } from "@/config/fonts";
import { routing } from "@/i18n/routing";
import { Providers } from "@/app/providers";
import { Navbar } from "@/components/common/navbar";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;

  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      <body
        className={clsx(
          "min-h-screen dark:bg-[#000000]  antialiased",
          locale === "pe" ? vazir.variable : inter.variable,
          locale === "pe" ? "font-vazir" : "font-inter"
        )}
        dir={locale === "pe" ? "rtl" : "ltr"}
      >
        <NextIntlClientProvider messages={messages}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
            <Navbar />
            <main className="mx-auto flex-grow">{children}</main>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
