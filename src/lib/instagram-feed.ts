import { cache } from "react";

export type InstagramFeedPost = {
  id: string;
  caption: string;
  permalink: string;
  timestamp: string | null;
  mediaType: string;
  imageUrl: string;
};

type InstagramGraphChild = {
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
};

type InstagramGraphMedia = {
  id: string;
  caption?: string;
  permalink?: string;
  timestamp?: string;
  media_type?: string;
  media_url?: string;
  thumbnail_url?: string;
  children?: {
    data?: InstagramGraphChild[];
  };
};

type InstagramFeedResult = {
  posts: InstagramFeedPost[];
  status: "ok" | "missing-config" | "error";
};

const DEFAULT_LIMIT = 3;
const DEFAULT_REVALIDATE_SECONDS = 300;

function getRenderableMediaUrl(media: InstagramGraphMedia) {
  if (media.media_type === "VIDEO") {
    return media.thumbnail_url ?? media.media_url ?? null;
  }

  if (media.media_type === "CAROUSEL_ALBUM") {
    const firstChild = media.children?.data?.find(
      (child) => child.thumbnail_url || child.media_url,
    );

    return (
      firstChild?.thumbnail_url ??
      firstChild?.media_url ??
      media.thumbnail_url ??
      media.media_url ??
      null
    );
  }

  return media.media_url ?? media.thumbnail_url ?? null;
}

function normalizeCaption(caption?: string) {
  if (!caption) {
    return "";
  }

  return caption.replace(/\s+/g, " ").trim();
}

export const getLatestInstagramPosts = cache(
  async (limit = DEFAULT_LIMIT): Promise<InstagramFeedResult> => {
    const accessToken = process.env.INSTAGRAM_GRAPH_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_GRAPH_USER_ID;

    if (!accessToken || !userId) {
      return {
        posts: [],
        status: "missing-config",
      };
    }

    const apiVersion = process.env.INSTAGRAM_GRAPH_API_VERSION ?? "v21.0";
    const revalidateSeconds = Number.parseInt(
      process.env.INSTAGRAM_FEED_REVALIDATE_SECONDS ?? `${DEFAULT_REVALIDATE_SECONDS}`,
      10,
    );
    const safeLimit = Math.max(1, Math.min(limit, 6));
    const fields =
      "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,children{media_type,media_url,thumbnail_url}";

    const endpoint = new URL(
      `https://graph.facebook.com/${apiVersion}/${userId}/media`,
    );

    endpoint.searchParams.set("fields", fields);
    endpoint.searchParams.set("limit", `${safeLimit}`);
    endpoint.searchParams.set("access_token", accessToken);

    try {
      const response = await fetch(endpoint.toString(), {
        next: {
          revalidate:
            Number.isFinite(revalidateSeconds) && revalidateSeconds > 0
              ? revalidateSeconds
              : DEFAULT_REVALIDATE_SECONDS,
        },
      });

      if (!response.ok) {
        console.error("Instagram feed request failed", {
          status: response.status,
          statusText: response.statusText,
        });

        return {
          posts: [],
          status: "error",
        };
      }

      const payload = (await response.json()) as {
        data?: InstagramGraphMedia[];
      };

      const posts =
        payload.data
          ?.map((media) => {
            const imageUrl = getRenderableMediaUrl(media);

            if (!media.id || !media.permalink || !imageUrl) {
              return null;
            }

            return {
              id: media.id,
              caption: normalizeCaption(media.caption),
              permalink: media.permalink,
              timestamp: media.timestamp ?? null,
              mediaType: media.media_type ?? "IMAGE",
              imageUrl,
            } satisfies InstagramFeedPost;
          })
          .filter((post): post is InstagramFeedPost => post !== null) ?? [];

      return {
        posts,
        status: "ok",
      };
    } catch (error) {
      console.error("Instagram feed request crashed", error);

      return {
        posts: [],
        status: "error",
      };
    }
  },
);
