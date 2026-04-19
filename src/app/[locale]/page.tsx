import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { BrandGallery } from "@/components/brand-gallery";
import { ButtonLink } from "@/components/button-link";
import { HeroVisual } from "@/components/hero-visual";
import { InstagramLiveFeed } from "@/components/instagram-live-feed";
import { NextDropPanel } from "@/components/next-drop-panel";
import { Reveal } from "@/components/reveal";
import { getInstagramImage } from "@/lib/instagram-gallery";
import { isLocale, localizePath } from "@/lib/locales";
import { getSiteContent } from "@/lib/site-content";

type LocalePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: LocalePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title:
      locale === "ms"
        ? "Patisserie pra-tempahan di Kota Kinabalu"
        : "Preorder patisserie in Kota Kinabalu",
    description: content.home.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: "/en",
        ms: "/ms",
      },
    },
  };
}

export default async function LocaleHomePage({ params }: LocalePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);
  const orderHref = localizePath(locale, "/order");
  const storyImages = [
    getInstagramImage("bakeBox", locale),
    getInstagramImage("brownies", locale),
  ];
  const galleryCopy = {
    en: {
      eyebrow: "From the kitchen",
      title: "A few favourites from recent rounds.",
      body:
        "Tartlets, brownies, boxes — same care whether it is one box or a busy preorder day.",
    },
    ms: {
      eyebrow: "Dari dapur",
      title: "Beberapa kegemaran dari pusingan lepas.",
      body:
        "Tartlet, brownie, kotak — penjagaan sama sama ada satu kotak atau hari preorder sibuk.",
    },
  }[locale];

  return (
    <>
      <section className="hero-shell">
        <div className="section-shell relative grid min-h-[calc(100svh-2rem)] items-center gap-8 pb-16 pt-36 md:min-h-[calc(100svh-3rem)] md:grid-cols-[0.92fr_1.08fr] md:gap-16 md:pb-24 md:pt-52">
          <Reveal className="max-w-xl">
            <p className="eyebrow">{content.home.eyebrow}</p>
            <h1 className="display-title mt-6 text-[clamp(3rem,18vw,7rem)]">
              {content.site.name}
            </h1>
            <p className="mt-6 max-w-lg text-[clamp(1.15rem,7vw,2.2rem)] leading-[1.04] tracking-[-0.03em] text-[var(--color-cocoa)] md:mt-7">
              {content.home.title}
            </p>
            <p className="mt-6 max-w-xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:mt-7 md:text-lg md:leading-8">
              {content.home.description}
            </p>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:flex-wrap md:mt-14">
              <ButtonLink href={orderHref}>{content.home.primaryCta}</ButtonLink>
              <ButtonLink
                external
                href={content.site.instagramUrl}
                variant="secondary"
              >
                {content.home.secondaryCta}
              </ButtonLink>
            </div>
            <NextDropPanel
              className="mt-8"
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
            <div className="mt-12 space-y-5 border-t border-[color:var(--color-stroke)] pt-8 md:mt-14 md:pt-10">
              {content.home.proof.map((item) => (
                <p
                  key={item}
                  className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)] md:text-[0.72rem] md:tracking-[0.28em]"
                >
                  {item}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <HeroVisual locale={locale} />
          </Reveal>
        </div>
      </section>

      <section className="section-shell border-t border-[color:var(--color-stroke)] py-28 md:py-48">
        <Reveal className="max-w-[68rem]">
          <div className="hidden md:block">
            <p className="eyebrow">{content.home.signaturesTitle}</p>
            <div className="mt-6 grid items-end gap-6 md:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] md:gap-12">
              <h2 className="font-display text-[clamp(3rem,5.2vw,5.25rem)] leading-[0.9] tracking-[-0.05em] text-[var(--color-cocoa)]">
                {content.home.signaturesTitle}
              </h2>
              <p className="max-w-[44rem] text-[clamp(1.55rem,2.4vw,2.85rem)] leading-[1.1] tracking-[-0.04em] text-[var(--color-cocoa)]">
                {content.home.signaturesIntro}
              </p>
            </div>
          </div>
          <div className="md:hidden">
            <p className="eyebrow">{content.home.signaturesTitle}</p>
            <h2 className="mt-5">
              <span className="release-lines-mobile-title">
                {content.home.signaturesTitle}
              </span>
            </h2>
            <p className="release-lines-mobile-body mt-4">
              {content.home.signaturesMobileIntro}
            </p>
            <div className="release-lines-mobile-tags mt-5">
              {content.home.signatures.map((signature) => (
                <span key={signature.title} className="release-lines-mobile-tag">
                  {signature.title}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <div className="mt-12 md:mt-20">
          {content.home.signatures.map((signature, index) => (
            <Reveal
              key={signature.title}
              delay={index * 0.08}
              className="signature-row"
            >
              <div className="signature-index">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="signature-title font-display text-[2.8rem] text-[var(--color-cocoa)] md:text-5xl">
                  {signature.title}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.26em] text-[var(--color-accent)]">
                  {signature.subtitle}
                </p>
              </div>
              <p className="signature-description max-w-xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
                {signature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell border-t border-[color:var(--color-stroke)] py-28 md:py-48">
        <BrandGallery
          locale={locale}
          eyebrow={galleryCopy.eyebrow}
          title={galleryCopy.title}
          body={galleryCopy.body}
        />
      </section>

      <section className="section-shell pb-28 md:pb-48">
        <InstagramLiveFeed
          locale={locale}
          handle={content.site.handle}
          profileUrl={content.site.instagramUrl}
        />
      </section>

      <section className="section-shell home-story-process border-t border-[color:var(--color-stroke)] py-28 md:grid md:grid-cols-[0.84fr_0.68fr_1fr] md:gap-16 md:py-48">
        <Reveal className="home-story-copy max-w-lg">
          <p className="eyebrow">{content.home.storyTitle}</p>
          <h2 className="section-title mt-6 max-w-none text-[clamp(2.9rem,4.7vw,4.6rem)]">
            {content.home.storyBody}
          </h2>
        </Reveal>
        <Reveal delay={0.05} className="home-story-media grid gap-4 md:pt-1">
          {storyImages.map((image) => (
            <article
              key={image.id}
              className="group relative overflow-hidden rounded-[2rem] border border-white/55 bg-white/55 shadow-[0_16px_40px_rgba(61,37,24,0.06)]"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 92vw, 20vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,241,0.02),rgba(61,37,24,0.38))]" />
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] border border-white/30 bg-[rgba(255,250,245,0.18)] px-4 py-3 backdrop-blur-md">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/80">
                  {image.tag}
                </p>
              </div>
            </article>
          ))}
        </Reveal>
        <Reveal delay={0.08} className="home-process-panel md:grid md:gap-4">
          <p className="eyebrow">{content.home.processTitle}</p>
          {content.home.process.map((step, index) => (
            <div
              key={step.title}
              className="home-process-step grid gap-2 border-t border-[color:var(--color-stroke)] md:grid-cols-[120px_1fr]"
            >
              <div className="text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-muted)]">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <p className="process-step-title font-display text-3xl text-[var(--color-cocoa)]">
                  {step.title}
                </p>
                <p className="process-step-description mt-3 text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </Reveal>
      </section>

      <section className="section-shell py-28 md:py-48">
        <Reveal className="cta-band">
          <p className="eyebrow">{content.site.availability}</p>
          <h2 className="section-title mt-4">{content.home.finalTitle}</h2>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
            {content.home.finalBody}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={orderHref}>{content.home.primaryCta}</ButtonLink>
            <ButtonLink
              external
              href={content.site.instagramUrl}
              variant="secondary"
            >
              {content.home.secondaryCta}
            </ButtonLink>
          </div>
        </Reveal>
      </section>
    </>
  );
}
