"use client";

import { useEffect, useId, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Image from "next/image";

import { Reveal } from "@/components/reveal";
import {
  getInstagramImage,
  homeGalleryIds,
  type InstagramImageId,
} from "@/lib/instagram-gallery";
import type { Locale } from "@/lib/locales";

type BrandGalleryProps = {
  locale: Locale;
  eyebrow: string;
  title: string;
  body: string;
  ids?: InstagramImageId[];
};

export function BrandGallery({
  locale,
  eyebrow,
  title,
  body,
  ids = homeGalleryIds,
}: BrandGalleryProps) {
  const images = ids.map((id) => getInstagramImage(id, locale));
  const scrollLabel = locale === "ms" ? "Skrol untuk lihat lebih banyak" : "Scroll to explore more";
  const prevLabel = locale === "ms" ? "Tatal ke kiri" : "Scroll left";
  const nextLabel = locale === "ms" ? "Tatal ke kanan" : "Scroll right";
  const carouselId = useId();
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [totalSteps, setTotalSteps] = useState(images.length);

  useEffect(() => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const updateScrollState = () => {
      const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
      const cards = Array.from(scroller.querySelectorAll("article")).filter(
        (card): card is HTMLElement => card instanceof HTMLElement,
      );
      const firstCard = cards[0];
      const gap = Number.parseFloat(window.getComputedStyle(scroller).columnGap || "16");
      const visibleCards = firstCard
        ? Math.max(
            1,
            Math.min(
              cards.length,
              Math.floor((scroller.clientWidth + gap) / (firstCard.offsetWidth + gap)),
            ),
          )
        : 1;
      const maxStartingIndex = Math.max(0, cards.length - visibleCards);
      const closestCardIndex = cards.reduce((closestIndex, card, index) => {
        if (!cards[closestIndex]) {
          return closestIndex;
        }

        const currentDistance = Math.abs(card.offsetLeft - scroller.scrollLeft);
        const closestDistance = Math.abs(cards[closestIndex].offsetLeft - scroller.scrollLeft);

        return currentDistance < closestDistance ? index : closestIndex;
      }, 0);
      const currentStepIndex = Math.min(closestCardIndex, maxStartingIndex);

      setCanScrollPrev(scroller.scrollLeft > 8);
      setCanScrollNext(scroller.scrollLeft < maxScrollLeft - 8);
      setScrollProgress(maxStartingIndex > 0 ? currentStepIndex / maxStartingIndex : 0);
      setActiveCardIndex(currentStepIndex);
      setTotalSteps(maxStartingIndex + 1);
    };

    updateScrollState();

    scroller.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      scroller.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [images.length]);

  const scrollByCard = (direction: 1 | -1) => {
    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const firstCard = scroller.querySelector("article");
    const cardWidth = firstCard instanceof HTMLElement ? firstCard.offsetWidth : scroller.clientWidth * 0.78;
    const gap = 16;

    scroller.scrollBy({
      left: direction * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  const currentCardLabel = String(activeCardIndex + 1);
  const totalCardsLabel = String(totalSteps);
  const regionLabel = locale === "ms" ? "Galeri gambar" : "Photo gallery";
  const prevLabelWithPos = `${prevLabel} (${currentCardLabel}/${totalCardsLabel})`;
  const nextLabelWithPos = `${nextLabel} (${currentCardLabel}/${totalCardsLabel})`;

  return (
    <Reveal className="relative overflow-hidden rounded-[2.65rem] border border-[color:var(--color-stroke)] bg-[linear-gradient(155deg,rgba(255,251,247,0.97),rgba(244,231,224,0.92)_55%,rgba(237,223,216,0.88))] p-5 shadow-[0_28px_90px_rgba(61,37,24,0.08)] md:p-7">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-8 top-8 hidden h-24 w-24 rounded-full border border-white/50 bg-[radial-gradient(circle,rgba(255,255,255,0.46),rgba(242,216,207,0.16))] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] md:block"
      />
      <div className="grid gap-6 border-b border-[color:var(--color-stroke)] pb-6 md:grid-cols-[0.92fr_1.08fr] md:items-end md:gap-10 md:pb-7">
        <div className="max-w-2xl">
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-4 max-w-[11ch] font-display text-[clamp(2.8rem,5vw,4.8rem)] leading-[0.94] tracking-[-0.05em] text-[var(--color-cocoa)]">
            {title}
          </h2>
        </div>
        <div className="max-w-xl md:justify-self-end">
          <p className="text-base leading-8 text-[var(--color-muted)] md:text-lg">
            {body}
          </p>
          <div className="mt-5 flex items-center justify-between gap-4">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {scrollLabel}
            </p>
            <div className="hidden items-center gap-2 md:flex">
              <button
                type="button"
                aria-controls={carouselId}
                aria-label={prevLabelWithPos}
                disabled={!canScrollPrev}
                onClick={() => scrollByCard(-1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-stroke)] bg-white/70 text-[var(--color-cocoa)] shadow-[0_10px_24px_rgba(61,37,24,0.08)] transition hover:border-[var(--color-cocoa)] hover:bg-white disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronLeft aria-hidden="true" size={18} strokeWidth={2.1} />
              </button>
              <button
                type="button"
                aria-controls={carouselId}
                aria-label={nextLabelWithPos}
                disabled={!canScrollNext}
                onClick={() => scrollByCard(1)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--color-stroke)] bg-[var(--color-cocoa)] text-[var(--color-cream)] shadow-[0_14px_30px_rgba(61,37,24,0.12)] transition hover:bg-[var(--color-cocoa-deep)] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <ChevronRight aria-hidden="true" size={18} strokeWidth={2.1} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Reveal delay={0.08} className="mt-6 md:mt-7">
        <div className="overflow-hidden rounded-[2.25rem] border border-white/55 bg-[linear-gradient(160deg,rgba(255,250,244,0.7),rgba(245,234,225,0.54))] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]">
          <div
            id={carouselId}
            ref={scrollerRef}
            role="region"
            aria-label={regionLabel}
            tabIndex={0}
            className="carousel-strip flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pr-2 scroll-smooth focus-visible:outline-2"
            onKeyDown={(e) => {
              if (e.key === "ArrowLeft") { e.preventDefault(); scrollByCard(-1); }
              if (e.key === "ArrowRight") { e.preventDefault(); scrollByCard(1); }
            }}
          >
            {images.map((image) => (
              <article
                key={image.id}
                className="group relative min-w-[17.5rem] snap-start overflow-hidden rounded-[2rem_2rem_1.5rem_2.35rem] border border-white/55 bg-white/60 shadow-[0_20px_56px_rgba(61,37,24,0.1)] md:min-w-[20rem] lg:min-w-[21rem]"
              >
                <div className="relative aspect-[4/5] min-h-[20rem]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 768px) 78vw, 22rem"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,241,0.05),rgba(61,37,24,0.52))]" />
                </div>
                <div className="absolute inset-x-4 bottom-4 rounded-[1.45rem_1.45rem_1.15rem_1.8rem] border border-white/35 bg-[linear-gradient(135deg,rgba(205,166,146,0.72),rgba(156,103,88,0.42))] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.28)] backdrop-blur-md">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-white/82">
                    {image.tag}
                  </p>
                  <p className="mt-2 max-w-[22ch] text-sm leading-6 text-white">
                    {image.caption}
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-4 flex items-center gap-3 px-1 md:gap-4">
            <p className="min-w-[3.4rem] text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {currentCardLabel}
              <span className="mx-1.5 text-[var(--color-stroke)]">/</span>
              {totalCardsLabel}
            </p>
            <div
              aria-hidden="true"
              className="relative h-2 flex-1 overflow-hidden rounded-full bg-[rgba(61,37,24,0.08)]"
            >
              <div
                className="absolute inset-y-0 left-0 rounded-full bg-[linear-gradient(90deg,var(--color-accent),rgba(163,114,134,0.95),#d6a484)] transition-[width] duration-500"
                style={{
                  width: `${Math.max(18, (scrollProgress * 100))}%`,
                }}
              />
            </div>
          </div>
        </div>
      </Reveal>
    </Reveal>
  );
}
