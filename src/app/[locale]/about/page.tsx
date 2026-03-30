import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { isLocale, localizePath } from "@/lib/locales";
import { getSiteContent } from "@/lib/site-content";

type AboutPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title: locale === "ms" ? "Tentang" : "About",
    description: content.about.intro,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        en: "/en/about",
        ms: "/ms/about",
      },
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);

  return (
    <div className="section-shell pb-16 pt-32 md:pb-28 md:pt-48">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">{content.site.pickupArea}</p>
        <h1 className="display-title mt-4 text-[clamp(3rem,8vw,5.4rem)]">
          {content.about.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:mt-6 md:text-lg md:leading-8">
          {content.about.intro}
        </p>
      </Reveal>

      <section className="mt-12 grid gap-8 md:mt-16 md:grid-cols-[0.95fr_1.05fr] md:gap-10">
        <Reveal className="rounded-[2.3rem] border border-[color:var(--color-stroke)] bg-[linear-gradient(160deg,rgba(255,247,238,0.95),rgba(243,226,211,0.86))] p-6 shadow-[0_20px_80px_rgba(61,37,24,0.08)] md:rounded-[2.5rem] md:p-8">
          <p className="eyebrow">{content.about.storyTitle}</p>
          <div className="mt-5 space-y-5 text-[0.98rem] leading-7 text-[var(--color-muted)] md:mt-6 md:text-base md:leading-8">
            {content.about.storyBody.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.08} className="space-y-5">
          <p className="eyebrow">{content.about.valuesTitle}</p>
          {content.about.values.map((value, index) => (
            <div
              key={value.title}
              className="grid gap-3 border-t border-[color:var(--color-stroke)] py-5 md:grid-cols-[120px_1fr]"
            >
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h2 className="font-display text-3xl text-[var(--color-cocoa)]">
                  {value.title}
                </h2>
                <p className="mt-2 text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <Reveal delay={0.14} className="cta-band mt-12 md:mt-16">
        <p className="eyebrow">{content.site.availability}</p>
        <h2 className="section-title mt-4">{content.home.finalTitle}</h2>
        <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
          {content.site.contactText}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ButtonLink href={localizePath(locale, "/order")}>
            {content.home.primaryCta}
          </ButtonLink>
          <ButtonLink external href={content.site.instagramUrl} variant="secondary">
            {content.home.secondaryCta}
          </ButtonLink>
        </div>
      </Reveal>
    </div>
  );
}
