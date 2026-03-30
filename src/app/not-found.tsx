import Link from "next/link";

export default function NotFound() {
  return (
    <div className="section-shell flex min-h-screen flex-col items-start justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="display-title mt-4 text-[clamp(3rem,8vw,5rem)]">
        Something sweet is missing.
      </h1>
      <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)] md:text-lg">
        The page you wanted is not part of the current menu. Head back to the
        homepage and start fresh from there.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-[var(--color-cocoa)] px-5 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-cream)]"
      >
        Back home
      </Link>
    </div>
  );
}
