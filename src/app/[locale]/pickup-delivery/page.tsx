import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { isLocale, localizePath } from "@/lib/locales";
import { getSiteContent } from "@/lib/site-content";

type PickupDeliveryPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: PickupDeliveryPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title: content.pickupDelivery.title,
    description: content.pickupDelivery.intro,
    alternates: {
      canonical: `/${locale}/pickup-delivery`,
      languages: {
        en: "/en/pickup-delivery",
        ms: "/ms/pickup-delivery",
      },
    },
  };
}

export default async function PickupDeliveryPage({ params }: PickupDeliveryPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);
  const orderHref = localizePath(locale, "/order");

  return (
    <div className="section-shell pb-16 pt-[8.5rem] md:pb-28 md:pt-44">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">{content.site.pickupArea}</p>
        <h1 className="display-title mt-4 text-[clamp(3rem,8vw,5.4rem)]">
          {content.pickupDelivery.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:mt-6 md:text-lg md:leading-8">
          {content.pickupDelivery.intro}
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3">
        {content.pickupDelivery.methods.map((method, index) => (
          <Reveal key={method.title} delay={index * 0.07}>
            <article className="rounded-[2.2rem] border border-[color:var(--color-stroke)] bg-[linear-gradient(160deg,rgba(255,250,246,0.97),rgba(242,229,221,0.92))] p-6 shadow-[0_22px_70px_rgba(74,21,34,0.06)] md:p-7">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-3 font-display text-3xl text-[var(--color-cocoa)] md:text-4xl">
                {method.title}
              </h2>
              <p className="mt-3 text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                {method.description}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.12} className="mt-14 md:mt-16">
        <div className="cta-band">
          <p className="max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
            {content.pickupDelivery.closingNote}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={orderHref}>{content.home.primaryCta}</ButtonLink>
            <ButtonLink external href={content.site.instagramUrl} variant="secondary">
              {content.home.secondaryCta}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
