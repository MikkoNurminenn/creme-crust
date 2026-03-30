"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const copy = {
  en: {
    eyebrow: "404",
    title: "Something sweet is missing.",
    body: "The page you wanted is not part of the current menu. Head back to the homepage and start fresh from there.",
    cta: "Back home",
  },
  ms: {
    eyebrow: "404",
    title: "Ada sesuatu yang tertinggal di sini.",
    body: "Halaman yang anda cari tiada dalam menu semasa. Pergi balik ke laman utama dan mulakan semula dari sana.",
    cta: "Balik ke utama",
  },
} as const;

export default function LocaleNotFound() {
  const pathname = usePathname();
  const locale = pathname?.split("/")[1] === "ms" ? "ms" : "en";
  const t = copy[locale];

  return (
    <div className="section-shell flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow">{t.eyebrow}</p>
      <h1 className="display-title mt-4 text-[clamp(3rem,8vw,5rem)]">
        {t.title}
      </h1>
      <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
        {t.body}
      </p>
      <Link
        href={`/${locale}`}
        className="mt-8 inline-flex rounded-full bg-[var(--color-cocoa)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-cream)]"
      >
        {t.cta}
      </Link>
    </div>
  );
}
