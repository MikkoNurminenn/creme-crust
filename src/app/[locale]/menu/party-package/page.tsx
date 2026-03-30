import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { isLocale, localizePath } from "@/lib/locales";
import { getSiteContent } from "@/lib/site-content";

type PartyPackagePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PartyPackagePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title: content.partyPackage.title,
    description: content.partyPackage.intro,
    alternates: {
      canonical: `/${locale}/menu/party-package`,
      languages: {
        en: "/en/menu/party-package",
        ms: "/ms/menu/party-package",
      },
    },
  };
}

export default async function PartyPackagePage({ params }: PartyPackagePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);
  const orderHref = localizePath(locale, "/order");
  const alaCarteHref = localizePath(locale, "/menu/ala-carte");

  return (
    <div className="section-shell pb-16 pt-[8.5rem] md:pb-28 md:pt-44">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">{content.site.availability}</p>
        <h1 className="display-title mt-4 text-[clamp(3rem,8vw,5.4rem)]">
          {content.partyPackage.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:mt-6 md:text-lg md:leading-8">
          {content.partyPackage.intro}
        </p>
        <p className="mt-5 max-w-2xl border-t border-[color:var(--color-stroke)] pt-5 text-[0.9rem] leading-7 text-[var(--color-muted)] md:pt-6 md:text-sm">
          {content.partyPackage.note}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink external href={content.site.instagramUrl}>
            {content.home.secondaryCta}
          </ButtonLink>
          <ButtonLink href={alaCarteHref} variant="secondary">
            {content.menu.title}
          </ButtonLink>
          <ButtonLink href={orderHref} variant="secondary">
            {content.home.primaryCta}
          </ButtonLink>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
        {content.partyPackage.packages.map((pkg, index) => (
          <Reveal key={pkg.name} delay={index * 0.06}>
            <article className="flex h-full flex-col rounded-[2.2rem] border border-[color:var(--color-stroke)] bg-white/75 p-6 shadow-[0_24px_70px_rgba(74,21,34,0.07)] md:p-7">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-3xl text-[var(--color-cocoa)] md:text-4xl">
                {pkg.name}
              </h2>
              <p className="mt-3 text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                {pkg.description}
              </p>
              <ul className="mt-6 space-y-2 border-t border-[color:var(--color-stroke)] pt-5 text-sm leading-7 text-[var(--color-cocoa)]">
                {pkg.includes.map((line) => (
                  <li key={line} className="flex gap-2">
                    <span className="text-[var(--color-accent-strong)]" aria-hidden="true">
                      ·
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
