import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BrandGallery } from "@/components/brand-gallery";
import { Reveal } from "@/components/reveal";
import { homeGalleryIds } from "@/lib/instagram-gallery";
import { isLocale } from "@/lib/locales";
import { getSiteContent } from "@/lib/site-content";

type GalleryPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: GalleryPageProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  const content = getSiteContent(locale);

  return {
    title: content.gallery.title,
    description: content.gallery.intro,
    alternates: {
      canonical: `/${locale}/gallery`,
      languages: {
        en: "/en/gallery",
        ms: "/ms/gallery",
      },
    },
  };
}

export default async function GalleryPage({ params }: GalleryPageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const content = getSiteContent(locale);

  return (
    <div className="section-shell pb-16 pt-[8.5rem] md:pb-28 md:pt-44">
      <Reveal className="max-w-3xl">
        <p className="eyebrow">{content.gallery.eyebrow}</p>
        <h1 className="display-title mt-4 text-[clamp(3rem,8vw,5.4rem)]">
          {content.gallery.title}
        </h1>
        <p className="mt-5 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:mt-6 md:text-lg md:leading-8">
          {content.gallery.intro}
        </p>
      </Reveal>

      <section className="mt-14 md:mt-16">
        <BrandGallery
          locale={locale}
          eyebrow={content.gallery.eyebrow}
          title={content.gallery.carouselTitle}
          body={content.gallery.carouselBody}
          ids={homeGalleryIds}
        />
      </section>
    </div>
  );
}
