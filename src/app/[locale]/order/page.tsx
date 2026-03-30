import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/button-link";
import { NextDropPanel } from "@/components/next-drop-panel";
import { Reveal } from "@/components/reveal";
import { isLocale } from "@/lib/locales";
import { getSiteContent } from "@/lib/site-content";

type OrderPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: OrderPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title: locale === "ms" ? "Tempahan" : "Order",
    description: content.order.intro,
    alternates: {
      canonical: `/${locale}/order`,
      languages: {
        en: "/en/order",
        ms: "/ms/order",
      },
    },
  };
}

export default async function OrderPage({ params }: OrderPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);
  const preorderHref = content.site.preorderUrl ?? content.site.instagramUrl;

  return (
    <div className="section-shell pb-16 pt-32 md:pb-28 md:pt-48">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">{content.site.availability}</p>
        <h1 className="display-title mt-4 text-[clamp(3rem,8vw,5.4rem)]">
          {content.order.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:mt-6 md:text-lg md:leading-8">
          {content.order.intro}
        </p>
      </Reveal>

      <Reveal delay={0.05} className="mt-8 md:mt-10">
        <NextDropPanel
          locale={locale}
          label={content.site.nextDrop.label}
          opensAt={content.site.nextDrop.opensAt}
          openTimeLabel={content.site.nextDrop.opensAtDisplay}
          opensLabel={content.site.nextDrop.opensLabel}
          countdownLabel={content.site.nextDrop.countdownLabel}
          pendingTitle={content.site.nextDrop.pendingTitle}
          pendingBody={content.site.nextDrop.pendingBody}
          liveTitle={content.site.nextDrop.liveTitle}
          liveBody={content.site.nextDrop.liveBody}
          pickupNote={content.site.nextDrop.pickupNote}
          reminderLabel={content.site.nextDrop.reminderLabel}
          reminderHref={content.site.instagramUrl}
        />
      </Reveal>

      <section className="mt-12 grid gap-6 md:mt-16 md:grid-cols-[1.05fr_0.95fr] md:gap-8">
        <Reveal className="rounded-[2.2rem] border border-[color:var(--color-stroke)] bg-[linear-gradient(160deg,rgba(255,250,244,0.95),rgba(243,227,211,0.88))] p-6 shadow-[0_20px_80px_rgba(61,37,24,0.08)] md:rounded-[2.4rem] md:p-8">
          <p className="eyebrow">{content.order.stepsTitle}</p>
          <div className="mt-5 space-y-5 md:mt-6 md:space-y-6">
            {content.order.steps.map((step, index) => (
              <div
                key={step.title}
                className="grid gap-3 border-t border-[color:var(--color-stroke)] pt-5 md:grid-cols-[100px_1fr]"
              >
                <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h2 className="font-display text-3xl text-[var(--color-cocoa)]">
                    {step.title}
                  </h2>
                  <p className="mt-2 text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="grid gap-6">
          <div className="rounded-[2rem] border border-[color:var(--color-stroke)] bg-white/70 p-5 shadow-[0_20px_70px_rgba(61,37,24,0.08)] backdrop-blur-sm md:rounded-[2.2rem] md:p-6">
            <p className="eyebrow">{content.order.primaryCta}</p>
            <p className="mt-4 text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
              {content.site.contactText}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink external href={preorderHref}>
                {content.order.primaryCta}
              </ButtonLink>
              <ButtonLink external href={content.site.instagramUrl} variant="secondary">
                {content.home.secondaryCta}
              </ButtonLink>
            </div>
            {!content.site.preorderUrl ? (
              <div className="mt-6 rounded-[1.4rem] border border-dashed border-[color:var(--color-stroke)] bg-[var(--color-cream)]/60 p-4 md:rounded-[1.5rem]">
                <p className="font-display text-2xl text-[var(--color-cocoa)]">
                  {content.order.fallbackTitle}
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  {content.order.fallbackBody}
                </p>
                <p className="mt-3 text-xs uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  {content.site.menuHint}
                </p>
              </div>
            ) : null}
          </div>

          <div className="rounded-[2rem] border border-[color:var(--color-stroke)] bg-white/70 p-5 shadow-[0_20px_70px_rgba(61,37,24,0.08)] backdrop-blur-sm md:rounded-[2.2rem] md:p-6">
            <p className="eyebrow">{content.order.notesTitle}</p>
            <div className="mt-5 space-y-4">
              {content.order.notes.map((note) => (
                <p key={note} className="text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                  {note}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <Reveal delay={0.14} className="mt-12 md:mt-16">
        <p className="eyebrow">{content.order.faqTitle}</p>
        <div className="mt-6 divide-y divide-[color:var(--color-stroke)] border-y border-[color:var(--color-stroke)]">
          {content.order.faq.map((item) => (
            <div key={item.question} className="grid gap-3 py-6 md:grid-cols-[0.52fr_1fr]">
              <h2 className="font-display text-2xl text-[var(--color-cocoa)]">
                {item.question}
              </h2>
              <p className="text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
