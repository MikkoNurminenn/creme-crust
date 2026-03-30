import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { isLocale, localizePath } from "@/lib/locales";
import { getSiteContent } from "@/lib/site-content";

type FeedbackPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: FeedbackPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title: content.feedback.title,
    description: content.feedback.intro,
    alternates: {
      canonical: `/${locale}/feedback`,
      languages: {
        en: "/en/feedback",
        ms: "/ms/feedback",
      },
    },
  };
}

export default async function FeedbackPage({ params }: FeedbackPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);
  const orderHref = localizePath(locale, "/order");
  const email = content.site.feedbackEmail;

  return (
    <div className="section-shell pb-16 pt-[8.5rem] md:pb-28 md:pt-44">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">{content.site.name}</p>
        <h1 className="display-title mt-4 text-[clamp(3rem,8vw,5.4rem)]">
          {content.feedback.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:mt-6 md:text-lg md:leading-8">
          {content.feedback.intro}
        </p>
      </Reveal>

      <Reveal delay={0.06} className="mt-12 md:mt-14">
        <p className="eyebrow">{content.feedback.channelsTitle}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {content.feedback.channels.map((ch) => (
            <article
              key={ch.title}
              className="rounded-[2rem] border border-[color:var(--color-stroke)] bg-white/75 p-6 md:p-7"
            >
              <h2 className="font-display text-2xl text-[var(--color-cocoa)] md:text-3xl">
                {ch.title}
              </h2>
              <p className="mt-3 text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                {ch.description}
              </p>
            </article>
          ))}
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mt-12 md:mt-14">
        <div className="cta-band">
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink external href={content.site.instagramUrl}>
              {content.home.secondaryCta}
            </ButtonLink>
            {email ? (
              <ButtonLink external href={`mailto:${email}`} variant="secondary">
                {content.feedback.emailCta}
              </ButtonLink>
            ) : null}
            <ButtonLink href={orderHref} variant="secondary">
              {content.home.primaryCta}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
