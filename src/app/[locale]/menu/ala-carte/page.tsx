import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";

import { BrandGallery } from "@/components/brand-gallery";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import {
  getInstagramImage,
  menuCardImages,
  menuGalleryIds,
  menuHeroIds,
} from "@/lib/instagram-gallery";
import { isLocale, localizePath } from "@/lib/locales";
import { getSiteContent } from "@/lib/site-content";

type AlaCartePageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: AlaCartePageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title: content.menu.title,
    description: content.menu.intro,
    alternates: {
      canonical: `/${locale}/menu/ala-carte`,
      languages: {
        en: "/en/menu/ala-carte",
        ms: "/ms/menu/ala-carte",
      },
    },
  };
}

export default async function AlaCarteMenuPage({ params }: AlaCartePageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);
  const orderHref = localizePath(locale, "/order");
  const partyHref = localizePath(locale, "/menu/party-package");
  const heroImages = menuHeroIds.map((id) => getInstagramImage(id, locale));
  const galleryCopy = {
    en: {
      eyebrow: "Photos",
      title: "What often shows up on the menu.",
      body:
        "Flavours rotate, but these are the shapes and finishes you can expect when you open the box.",
    },
    ms: {
      eyebrow: "Foto",
      title: "Apa yang selalu muncul pada menu.",
      body:
        "Perisa berputar, tetapi bentuk dan kemasan ini yang biasa anda jumpa apabila membuka kotak.",
    },
  }[locale];
  const sectionTints = [
    "from-[rgba(255,247,241,0.98)] via-[rgba(246,225,216,0.94)] to-[rgba(235,205,194,0.88)]",
    "from-[rgba(255,251,246,0.98)] via-[rgba(241,237,224,0.94)] to-[rgba(221,228,211,0.9)]",
    "from-[rgba(255,248,243,0.98)] via-[rgba(243,225,229,0.94)] to-[rgba(219,199,209,0.9)]",
  ];

  return (
    <div className="section-shell pb-16 pt-[8.5rem] md:pb-28 md:pt-44">
      <section className="grid gap-8 md:grid-cols-[0.82fr_1.18fr] md:items-end md:gap-12">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">{content.site.availability}</p>
          <h1 className="display-title mt-4 text-[clamp(3rem,8vw,5.6rem)]">
            {content.menu.title}
          </h1>
          <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:mt-6 md:text-lg md:leading-8">
            {content.menu.intro}
          </p>
          <p className="mt-5 max-w-2xl border-t border-[color:var(--color-stroke)] pt-5 text-[0.9rem] leading-7 text-[var(--color-muted)] md:mt-6 md:pt-6 md:text-sm">
            {content.menu.note}
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
            <ButtonLink href={partyHref} variant="secondary">
              {content.partyPackage.title}
            </ButtonLink>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid items-start grid-cols-[1.08fr_0.92fr] gap-3 md:gap-5">
            <article className="group relative self-start overflow-hidden rounded-[2.2rem] border border-white/55 bg-white/60 shadow-[0_28px_80px_rgba(74,21,34,0.12)]">
              <div className="relative aspect-[4/5]">
                <Image
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 55vw, 28vw"
                  priority
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,241,0.03),rgba(74,21,34,0.38))]" />
              </div>
              <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/30 bg-[rgba(255,250,245,0.18)] px-4 py-3 backdrop-blur-md">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/80">
                  {heroImages[0].tag}
                </p>
              </div>
            </article>
            <div className="grid gap-4 md:gap-5">
              {heroImages.slice(1).map((image) => (
                <article
                  key={image.id}
                  className="group relative self-start overflow-hidden rounded-[2rem] border border-white/55 bg-white/60 shadow-[0_24px_60px_rgba(74,21,34,0.09)]"
                >
                  <div className="relative aspect-[1/1]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 36vw, 18vw"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,241,0.02),rgba(74,21,34,0.36))]" />
                  </div>
                  <div className="absolute inset-x-4 bottom-4 rounded-[1.35rem] border border-white/30 bg-[rgba(255,250,245,0.18)] px-4 py-3 backdrop-blur-md">
                    <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/80">
                      {image.tag}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-16 grid gap-5 md:mt-20 md:grid-cols-3 md:gap-6">
        {content.menu.sections.map((section, index) => {
          const image = getInstagramImage(menuCardImages[index] ?? "assortedPastries", locale);

          return (
            <Reveal key={section.title} delay={index * 0.08}>
              <article className="overflow-hidden rounded-[2.2rem] border border-[color:var(--color-stroke)] bg-white/75 shadow-[0_24px_70px_rgba(74,21,34,0.07)]">
                <div className="relative aspect-[5/4] overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 92vw, 30vw"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,241,0.02),rgba(74,21,34,0.38))]" />
                  <div
                    aria-label={locale === "ms" ? `Bahagian ${index + 1}` : `Section ${index + 1}`}
                    className="absolute left-4 top-4 rounded-full border border-white/40 bg-[rgba(255,250,245,0.18)] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/90 backdrop-blur-md"
                  >
                    <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                <div
                  className={`bg-[linear-gradient(160deg,var(--tw-gradient-stops))] p-5 md:p-6 ${sectionTints[index] ?? sectionTints[0]}`}
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                    {image.tag}
                  </p>
                  <h2 className="mt-3 font-display text-[2.7rem] text-[var(--color-cocoa)] md:text-4xl">
                    {section.title}
                  </h2>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-[var(--color-accent)]">
                    {section.note}
                  </p>
                  <div className="mt-6 space-y-4 border-t border-[color:var(--color-stroke)] pt-5">
                    {section.items.map((item) => (
                      <div
                        key={item.name}
                        className="border-b border-[color:var(--color-stroke)] pb-4 last:border-b-0 last:pb-0"
                      >
                        <p className="font-medium text-[var(--color-cocoa)]">{item.name}</p>
                        <p className="mt-2 text-[0.95rem] leading-7 text-[var(--color-muted)] md:text-sm">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </section>

      <section className="mt-14 md:mt-16">
        <BrandGallery
          locale={locale}
          eyebrow={galleryCopy.eyebrow}
          title={galleryCopy.title}
          body={galleryCopy.body}
          ids={menuGalleryIds}
        />
      </section>

      <section className="mt-16">
        <Reveal className="cta-band">
          <p className="eyebrow">{content.menu.sidebarTitle}</p>
          <h2 className="section-title mt-4">{content.menu.sidebarBody}</h2>
          <p className="mt-5 max-w-3xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
            {content.menu.note}
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
    </div>
  );
}
