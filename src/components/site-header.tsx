"use client";

import { ChevronDown, Package2, PackageOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import { LocaleToggle } from "@/components/locale-toggle";
import { type Locale, localizePath } from "@/lib/locales";
import type { NavItem } from "@/lib/site-content";

type SiteHeaderProps = {
  locale: Locale;
  brand: string;
  instagramUrl: string;
  nav: NavItem[];
};

function closeParentDetails(el: HTMLElement | null) {
  el?.closest("details")?.removeAttribute("open");
}

export function SiteHeader({
  locale,
  brand,
  instagramUrl,
  nav,
}: SiteHeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const mobileMenuCopy =
    locale === "ms"
      ? { closed: "Menu", open: "Tutup" }
      : { closed: "Menu", open: "Close" };

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        triggerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const navLabel = locale === "ms" ? "Navigasi utama" : "Main navigation";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-2.5 flex w-[min(1180px,calc(100%-1rem))] items-center justify-between rounded-full border border-white/45 bg-[rgba(255,249,242,0.82)] px-2.5 py-1.5 shadow-[0_16px_60px_rgba(74,21,34,0.1)] backdrop-blur-xl md:mt-3 md:w-[min(1180px,calc(100%-1.5rem))] md:px-4 md:py-2.5">
        <Link
          href={localizePath(locale)}
          className="flex min-w-0 items-center gap-3 rounded-full px-2 py-1"
          aria-label={`${brand} — home`}
        >
          <div className="min-w-0">
            <Image
              src="/images/brand/creme-crust-logo.png"
              alt={`${brand} logo`}
              width={278}
              height={188}
              priority
              className="h-auto w-[78px] object-contain md:w-[124px]"
              sizes="(max-width: 768px) 78px, 124px"
            />
          </div>
        </Link>

        <nav aria-label={navLabel} className="hidden items-center gap-1 text-sm font-medium text-[var(--color-cocoa)] md:flex">
          {nav.map((item) => {
            if (item.type === "link") {
              return (
                <Link
                  key={item.href}
                  className="rounded-full px-3 py-2 transition-colors hover:text-[var(--color-cocoa-deep)]"
                  href={localizePath(locale, item.href)}
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <details key={item.label} className="nav-submenu group relative">
                <summary className="nav-submenu-summary flex cursor-pointer list-none items-center gap-1 rounded-full px-3 py-2 transition-colors hover:text-[var(--color-cocoa-deep)]">
                  {item.label}
                  <ChevronDown
                    aria-hidden="true"
                    className="nav-submenu-chevron h-3.5 w-3.5 opacity-60 transition-transform"
                    strokeWidth={2}
                  />
                </summary>
                <ul
                  role="list"
                  className="absolute left-0 top-full z-50 mt-2 min-w-[13.5rem] rounded-2xl border border-[color:var(--color-stroke)] bg-[rgba(255,252,248,0.98)] py-2 shadow-[0_20px_50px_rgba(74,21,34,0.12)] backdrop-blur-xl"
                >
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        className="block px-4 py-2.5 text-sm text-[var(--color-cocoa)] transition-colors hover:bg-white/90"
                        href={localizePath(locale, child.href)}
                        onClick={(e) => closeParentDetails(e.currentTarget)}
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            );
          })}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <LocaleToggle currentLocale={locale} />
          <a
            className="rounded-full border border-[color:var(--color-stroke)] px-4 py-2.5 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-cocoa)] transition-colors hover:border-[var(--color-cocoa)] hover:bg-white"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Instagram (opens in new tab)"
          >
            Instagram
          </a>
        </div>

        <div className="mobile-menu relative md:hidden" data-open={mobileOpen}>
          <button
            ref={triggerRef}
            type="button"
            className="menu-trigger"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? mobileMenuCopy.open : mobileMenuCopy.closed}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="menu-trigger-inner" aria-hidden="true">
              <span className="menu-trigger-icon">
                {mobileOpen ? (
                  <PackageOpen className="h-3.5 w-3.5" strokeWidth={1.9} />
                ) : (
                  <Package2 className="h-3.5 w-3.5" strokeWidth={1.9} />
                )}
              </span>
              <span>{mobileOpen ? mobileMenuCopy.open : mobileMenuCopy.closed}</span>
            </span>
          </button>
          {mobileOpen && (
            <nav
              id="mobile-menu"
              aria-label={locale === "ms" ? "Menu navigasi" : "Navigation menu"}
              className="absolute right-0 mt-3 max-h-[min(70vh,calc(100dvh-6rem))] w-[min(19rem,calc(100vw-1rem))] overflow-y-auto rounded-[1.35rem] border border-white/50 bg-[rgba(255,249,242,0.98)] p-3.5 shadow-[0_18px_50px_rgba(74,21,34,0.14)] backdrop-blur-xl"
            >
              <div className="mb-3">
                <LocaleToggle currentLocale={locale} />
              </div>
              <div className="flex flex-col gap-1">
                {nav.map((item) => {
                  if (item.type === "link") {
                    return (
                      <Link
                        key={item.href}
                        className="rounded-2xl px-3 py-2.5 text-sm font-medium text-[var(--color-cocoa)] transition-colors hover:bg-white"
                        href={localizePath(locale, item.href)}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  }

                  return (
                    <details key={item.label} className="nav-submenu rounded-2xl">
                      <summary className="nav-submenu-summary flex cursor-pointer list-none items-center justify-between px-3 py-2.5 text-sm font-medium text-[var(--color-cocoa)] hover:bg-white/80">
                        {item.label}
                        <ChevronDown
                          aria-hidden="true"
                          className="nav-submenu-chevron h-4 w-4 opacity-60 transition-transform"
                          strokeWidth={2}
                        />
                      </summary>
                      <div className="flex flex-col gap-0.5 pb-2 pl-2 pt-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            className="rounded-xl px-3 py-2 text-sm text-[var(--color-muted)] transition-colors hover:bg-white hover:text-[var(--color-cocoa)]"
                            href={localizePath(locale, child.href)}
                            onClick={() => setMobileOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </details>
                  );
                })}
                <a
                  className="rounded-2xl px-3 py-2.5 text-sm font-medium text-[var(--color-cocoa)] transition-colors hover:bg-white"
                  href={instagramUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  onClick={() => setMobileOpen(false)}
                >
                  Instagram
                </a>
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
