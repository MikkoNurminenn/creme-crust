import type { Locale } from "@/lib/locales";

export const instagramImages = {
  assortedPastries: {
    src: "/images/instagram/assorted-pastries.jpg",
    alt: {
      en: "Assorted Creme Crust pastries arranged for a dessert spread",
      ms: "Pelbagai pastri Creme Crust disusun sebagai spread pencuci mulut",
    },
    tag: {
      en: "Mixed box",
      ms: "Kotak campuran",
    },
    caption: {
      en: "A little of everything — tartlets, bites, and colour in one box.",
      ms: "Sedikit segala — tartlet, gigitan kecil, dan warna dalam satu kotak.",
    },
  },
  brownies: {
    src: "/images/instagram/brownies.jpg",
    alt: {
      en: "Creme Crust brownies arranged inside a dessert box",
      ms: "Brownie Creme Crust tersusun di dalam kotak pencuci mulut",
    },
    tag: {
      en: "Brownies",
      ms: "Brownie",
    },
    caption: {
      en: "Dark cocoa squares, cut neat for sharing.",
      ms: "Petak koko gelap, dipotong kemas untuk dikongsi.",
    },
  },
  tartlets: {
    src: "/images/instagram/tartlets.jpg",
    alt: {
      en: "Creme Crust tartlets with glossy tops and clean finishing",
      ms: "Tartlet Creme Crust dengan permukaan berkilat dan kemasan rapi",
    },
    tag: {
      en: "Tartlets",
      ms: "Tartlet",
    },
    caption: {
      en: "Small shells, glossy tops, fruit or custard inside.",
      ms: "Kulit kecil, permukaan berkilat, buah atau kastard di dalam.",
    },
  },
  pastryBoard: {
    src: "/images/instagram/pastry-board.jpg",
    alt: {
      en: "Creme Crust pastries styled on a serving board",
      ms: "Pastri Creme Crust digayakan di atas papan hidang",
    },
    tag: {
      en: "Board",
      ms: "Papan",
    },
    caption: {
      en: "Pastries laid out before packing — tartlets, craquelins, and extras.",
      ms: "Pastri disusun sebelum dibungkus — tartlet, craquelin, dan tambahan.",
    },
  },
  bakeBox: {
    src: "/images/instagram/bake-box.jpg",
    alt: {
      en: "Creme Crust bake box prepared for preorder pickup",
      ms: "Kotak bakes Creme Crust disediakan untuk pickup pra-tempahan",
    },
    tag: {
      en: "Pickup box",
      ms: "Kotak pickup",
    },
    caption: {
      en: "Folded tissue, snug rows — ready to carry home.",
      ms: "Tisu dilipat, susunan rapat — sedia dibawa pulang.",
    },
  },
  packaging: {
    src: "/images/instagram/packaging.jpg",
    alt: {
      en: "Creme Crust brand packaging detail for pastries",
      ms: "Butiran pembungkusan jenama Creme Crust untuk pastri",
    },
    tag: {
      en: "Packaging",
      ms: "Bungkusan",
    },
    caption: {
      en: "Sticker, seal, and box — the small details before handoff.",
      ms: "Stiker, seal, dan kotak — butiran kecil sebelum serahan.",
    },
  },
  dropFebB: {
    src: "/images/instagram/drop-feb-07-b.jpg",
    alt: {
      en: "Close-up of Creme Crust pastries from a recent preorder round",
      ms: "Close-up pastri Creme Crust dari pusingan pra-tempahan terkini",
    },
    tag: {
      en: "Round detail",
      ms: "Butiran pusingan",
    },
    caption: {
      en: "Another angle from the same week — different pieces, same finish.",
      ms: "Sudut lain dari minggu yang sama — item berbeza, kemasan sama.",
    },
  },
  cocoaTiramisu: {
    src: "/images/instagram/drop-feb-07-a.jpg",
    alt: {
      en: "Creme Crust cocoa-topped tart slab inside an open pastry box",
      ms: "Tart slab bertabur koko Creme Crust di dalam kotak pastri terbuka",
    },
    tag: {
      en: "Cocoa tart",
      ms: "Tart koko",
    },
    caption: {
      en: "Cocoa-dusted slab tart in an open box.",
      ms: "Tart slab bertabur koko dalam kotak terbuka.",
    },
  },
  brownieTower: {
    src: "/images/instagram/brownie-closeup-2025.jpg",
    alt: {
      en: "Creme Crust brownies stacked with flowers and pistachio details",
      ms: "Brownie Creme Crust bertingkat dengan bunga dan butiran pistachio",
    },
    tag: {
      en: "Stack",
      ms: "Tingkat",
    },
    caption: {
      en: "Brownies dressed up for a special round.",
      ms: "Brownie dihias untuk pusingan istimewa.",
    },
  },
  warmBoxes: {
    src: "/images/instagram/dec-box-b.jpg",
    alt: {
      en: "Warm-toned Creme Crust pastry boxes opened across a preorder table",
      ms: "Kotak pastri Creme Crust bernada hangat dibuka di atas meja pra-tempahan",
    },
    tag: {
      en: "Open boxes",
      ms: "Kotak terbuka",
    },
    caption: {
      en: "Several boxes lined up for pickup day.",
      ms: "Beberapa kotak disusun untuk hari pickup.",
    },
  },
  volumeDrop: {
    src: "/images/instagram/dec-box-c.jpg",
    alt: {
      en: "Multiple Creme Crust tartlet boxes lined up for a larger pastry drop",
      ms: "Banyak kotak tartlet Creme Crust disusun untuk hari preorder",
    },
    tag: {
      en: "Many boxes",
      ms: "Banyak kotak",
    },
    caption: {
      en: "Tartlet boxes ready when a round fills up fast.",
      ms: "Kotak tartlet sedia bila satu pusingan cepat penuh.",
    },
  },
  openBoxGrid: {
    src: "/images/instagram/dec-box-a.jpg",
    alt: {
      en: "Creme Crust assorted tartlets arranged inside several open boxes",
      ms: "Pelbagai tartlet Creme Crust disusun dalam beberapa kotak terbuka",
    },
    tag: {
      en: "Overhead",
      ms: "Dari atas",
    },
    caption: {
      en: "Tartlets from above — neat rows in each box.",
      ms: "Tartlet dari atas — barisan kemas dalam setiap kotak.",
    },
  },
} as const;

export type InstagramImageId = keyof typeof instagramImages;

/** Each entry must use a distinct file — several JPGs in /public were byte-duplicates. */
export const homeGalleryIds: InstagramImageId[] = [
  "cocoaTiramisu",
  "brownies",
  "bakeBox",
  "packaging",
  "warmBoxes",
  "openBoxGrid",
  "volumeDrop",
  "pastryBoard",
  "dropFebB",
];

export const menuHeroIds: InstagramImageId[] = [
  "cocoaTiramisu",
  "openBoxGrid",
  "volumeDrop",
];

export const menuGalleryIds: InstagramImageId[] = [
  "cocoaTiramisu",
  "pastryBoard",
  "packaging",
  "brownies",
  "bakeBox",
  "warmBoxes",
  "openBoxGrid",
  "volumeDrop",
  "dropFebB",
];

/** Order matches menu sections: tartlets, craquelins, brownies — use matching photos. */
export const menuCardImages: InstagramImageId[] = [
  "volumeDrop",
  "cocoaTiramisu",
  "brownieTower",
];

export function getInstagramImage(id: InstagramImageId, locale: Locale) {
  const image = instagramImages[id];

  return {
    id,
    src: image.src,
    alt: image.alt[locale],
    tag: image.tag[locale],
    caption: image.caption[locale],
  };
}
