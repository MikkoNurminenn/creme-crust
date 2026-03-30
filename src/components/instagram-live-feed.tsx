import { Reveal } from "@/components/reveal";
import {
  getInstagramImage,
  type InstagramImageId,
} from "@/lib/instagram-gallery";
import { getLatestInstagramPosts } from "@/lib/instagram-feed";
import type { Locale } from "@/lib/locales";

type InstagramLiveFeedProps = {
  locale: Locale;
  handle: string;
  profileUrl: string;
};

const fallbackIds: InstagramImageId[] = ["cocoaTiramisu", "warmBoxes", "dropFebB"];

const copy = {
  en: {
    eyebrow: "Instagram",
    title: "Latest posts",
    body:
      "New photos from our account show up here when the connection is active. Tap a card to open the post.",
    fallbackBody:
      "Here are a few photos from the kitchen. Follow us on Instagram for drop dates and the live menu.",
    liveBadge: "Connected",
    fallbackBadge: "Highlights",
    viewPost: "View post",
    openProfile: "Open Instagram",
  },
  ms: {
    eyebrow: "Instagram",
    title: "Post terkini",
    body:
      "Foto baharu dari akaun kami akan muncul di sini apabila sambungan aktif. Ketik kad untuk buka post.",
    fallbackBody:
      "Ini beberapa foto dari dapur. Ikuti kami di Instagram untuk tarikh drop dan menu terkini.",
    liveBadge: "Disambungkan",
    fallbackBadge: "Sorotan",
    viewPost: "Lihat post",
    openProfile: "Buka Instagram",
  },
} as const;

function formatCaption(caption: string, locale: Locale) {
  if (!caption) {
    return locale === "ms"
      ? "Buka post asal untuk keterangan penuh."
      : "Open the original post for the full caption.";
  }

  return caption.length > 120 ? `${caption.slice(0, 117).trimEnd()}...` : caption;
}

function formatDate(timestamp: string | null, locale: Locale) {
  if (!timestamp) {
    return null;
  }

  return new Intl.DateTimeFormat(locale === "ms" ? "ms-MY" : "en-MY", {
    day: "numeric",
    month: "short",
  }).format(new Date(timestamp));
}

export async function InstagramLiveFeed({
  locale,
  handle,
  profileUrl,
}: InstagramLiveFeedProps) {
  const localizedCopy = copy[locale];
  const feed = await getLatestInstagramPosts(3);
  const isLive = feed.status === "ok" && feed.posts.length > 0;
  const posts = isLive
    ? feed.posts.map((post) => ({
        id: post.id,
        imageUrl: post.imageUrl,
        alt: post.caption || `${handle} Instagram post`,
        caption: formatCaption(post.caption, locale),
        href: post.permalink,
        meta: formatDate(post.timestamp, locale) ?? handle,
      }))
    : fallbackIds.map((id) => {
        const image = getInstagramImage(id, locale);

        return {
          id: `fallback-${id}`,
          imageUrl: image.src,
          alt: image.alt,
          caption: image.caption,
          href: profileUrl,
          meta: handle,
        };
      });

  return (
    <Reveal className="home-live-feed rounded-[2.4rem] border border-[color:var(--color-stroke)] bg-[linear-gradient(155deg,rgba(255,251,247,0.97),rgba(245,233,225,0.93)_58%,rgba(238,223,216,0.88))] p-5 shadow-[0_26px_80px_rgba(61,37,24,0.07)] md:p-7">
      <div className="grid gap-5 border-b border-[color:var(--color-stroke)] pb-6 md:grid-cols-[0.95fr_1.05fr] md:items-end md:gap-10">
        <div className="max-w-2xl">
          <p className="eyebrow">{localizedCopy.eyebrow}</p>
          <h2 className="mt-4 max-w-[10ch] font-display text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.95] tracking-[-0.05em] text-[var(--color-cocoa)]">
            {localizedCopy.title}
          </h2>
        </div>
        <div className="max-w-xl md:justify-self-end">
          <p className="text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-lg md:leading-8">
            {isLive ? localizedCopy.body : localizedCopy.fallbackBody}
          </p>
          <div className="mt-5 flex items-center gap-3">
            <span className="inline-flex rounded-full border border-white/55 bg-white/70 px-3 py-1.5 text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-cocoa)]">
              {isLive ? localizedCopy.liveBadge : localizedCopy.fallbackBadge}
            </span>
            <a
              className="text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-accent-strong)]"
              href={profileUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              {handle}
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:mt-7 md:grid-cols-3 md:gap-5">
        {posts.map((post) => (
          <article
            key={post.id}
            className="overflow-hidden rounded-[2rem] border border-white/60 bg-white/65 shadow-[0_18px_50px_rgba(61,37,24,0.08)]"
          >
            <a
              href={post.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${isLive ? localizedCopy.viewPost : localizedCopy.openProfile}: ${post.alt}`}
              className="block"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[rgba(255,250,245,0.8)]">
                {/* Instagram CDN URLs are dynamic, so this stays as a plain image instead of next/image. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.imageUrl}
                  alt=""
                  aria-hidden="true"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,241,0.02),rgba(61,37,24,0.44))]" />
              </div>
            </a>
            <div className="grid gap-3 p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-[0.64rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                  {post.meta}
                </p>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="text-[0.64rem] font-semibold uppercase tracking-[0.2em] text-[var(--color-muted)] hover:text-[var(--color-cocoa)]"
                  tabIndex={-1}
                  aria-hidden="true"
                >
                  {isLive ? localizedCopy.viewPost : localizedCopy.openProfile}
                </a>
              </div>
              <p
                className="text-[0.95rem] leading-7 text-[var(--color-muted)] md:text-base md:leading-7"
                style={{
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  overflow: "hidden",
                }}
              >
                {post.caption}
              </p>
            </div>
          </article>
        ))}
      </div>
    </Reveal>
  );
}
