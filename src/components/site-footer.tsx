import { ButtonLink } from "@/components/button-link";
import { type Locale, localizePath } from "@/lib/locales";

type SiteFooterProps = {
  locale: Locale;
  brand: string;
  note: string;
  instagramUrl: string;
  pickupArea: string;
  orderCta: string;
  instagramCta: string;
};

export function SiteFooter({
  locale,
  brand,
  note,
  instagramUrl,
  pickupArea,
  orderCta,
  instagramCta,
}: SiteFooterProps) {
  return (
    <footer className="border-t border-[color:var(--color-stroke)] bg-[rgba(255,247,238,0.8)]">
      <div className="mx-auto flex w-[min(1180px,calc(100%-2rem))] flex-col gap-7 py-8 md:flex-row md:items-end md:justify-between md:gap-8 md:py-10">
        <div className="max-w-xl">
          <p className="font-display text-3xl text-[var(--color-cocoa)]">{brand}</p>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">{note}</p>
          <p className="mt-4 text-[0.72rem] uppercase tracking-[0.3em] text-[var(--color-muted)]">
            {pickupArea}
          </p>
        </div>
        <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row md:flex-wrap">
          <ButtonLink href={localizePath(locale, "/order")}>{orderCta}</ButtonLink>
          <ButtonLink external href={instagramUrl} variant="secondary">
            {instagramCta}
          </ButtonLink>
        </div>
      </div>
    </footer>
  );
}
