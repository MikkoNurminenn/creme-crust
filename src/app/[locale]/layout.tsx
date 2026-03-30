import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isLocale, locales } from "@/lib/locales";
import { getSiteContent } from "@/lib/site-content";

export const dynamicParams = false;
const shareImage = "/images/brand/creme-crust-share-logo.png";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocaleLayoutProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title: {
      default: content.site.name,
      template: `%s | ${content.site.name}`,
    },
    description: content.home.description,
    alternates: {
      languages: {
        en: "/en",
        ms: "/ms",
      },
    },
    openGraph: {
      title: content.site.name,
      description: content.home.description,
      type: "website",
      locale: locale === "ms" ? "ms_MY" : "en_MY",
      siteName: content.site.name,
      images: [
        {
          url: shareImage,
          width: 1179,
          height: 822,
          alt: "Creme Crust logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: content.site.name,
      description: content.home.description,
      images: [shareImage],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);

  return (
    <div className="min-h-screen bg-[var(--color-page)] text-[var(--color-cocoa)]">
      <a href="#main-content" className="skip-link">
        {locale === "ms" ? "Langkau ke kandungan" : "Skip to content"}
      </a>
      <SiteHeader
        locale={locale}
        brand={content.site.name}
        instagramUrl={content.site.instagramUrl}
        nav={content.nav}
      />
      <main id="main-content">{children}</main>
      <SiteFooter
        locale={locale}
        brand={content.site.name}
        note={content.footerNote}
        instagramUrl={content.site.instagramUrl}
        pickupArea={content.site.pickupArea}
        orderCta={content.footerOrderCta}
        instagramCta={content.footerInstagramCta}
      />
    </div>
  );
}
