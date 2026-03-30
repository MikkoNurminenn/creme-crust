"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { defaultLocale, locales, type Locale } from "@/lib/locales";

type LocaleToggleProps = {
  currentLocale: Locale;
};

export function LocaleToggle({ currentLocale }: LocaleToggleProps) {
  const pathname = usePathname();

  return (
    <div
      role="group"
      aria-label="Select language"
      className="inline-flex items-center gap-1 rounded-full border border-[color:var(--color-stroke)] bg-white/70 p-1 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-muted)]"
    >
      {locales.map((locale) => {
        const href = getLocalizedPath(pathname, locale);
        const active = currentLocale === locale;

        return (
          <Link
            key={locale}
            href={href}
            aria-current={active ? "true" : undefined}
            className={`rounded-full px-3 py-2 transition-colors ${
              active
                ? "bg-[var(--color-cocoa)] text-[var(--color-cream)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-cocoa)]"
            }`}
          >
            {locale}
          </Link>
        );
      })}
    </div>
  );
}

function getLocalizedPath(pathname: string, locale: Locale) {
  const segments = pathname.split("/").filter(Boolean);

  if (!segments.length) {
    return `/${defaultLocale}`;
  }

  const [, ...rest] = segments;
  return `/${locale}${rest.length ? `/${rest.join("/")}` : ""}`;
}
