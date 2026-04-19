import type { SiteContent } from "@/lib/site-content";

export const enContent: SiteContent = {
  localeLabel: "English",
  alternateLocaleLabel: "Bahasa Melayu",
  nav: [
    { type: "link", href: "/about", label: "About" },
    {
      type: "group",
      label: "Menu",
      children: [
        { href: "/menu/ala-carte", label: "À la carte menu" },
        { href: "/menu/party-package", label: "Party package" },
      ],
    },
    { type: "link", href: "/pickup-delivery", label: "Pickup & delivery" },
    { type: "link", href: "/gallery", label: "Photo gallery" },
    { type: "link", href: "/feedback", label: "Customer feedback" },
  ],
  footerNote:
    "Small-batch pastries from Kota Kinabalu. Preorder pickup, packed with care.",
  footerOrderCta: "Preorder menu",
  footerInstagramCta: "Follow on Instagram",
  site: {
    name: "Creme Crust",
    handle: "@cremecrust.co",
    pickupArea: "Kota Kinabalu, Sabah",
    availability: "Preorder only",
    instagramUrl: "https://www.instagram.com/cremecrust.co/",
    preorderUrl: null,
    contactText:
      "When preorder is live, use the link here or in our Instagram bio. Questions? Send us a DM.",
    menuHint:
      "A direct order link can be added later; for now Instagram has the active menu.",
    feedbackEmail: null,
    nextDrop: {
      label: "Next preorder",
      opensAt: "2026-04-03T20:00:00+08:00",
      opensAtDisplay: "Friday, April 3, 2026, 8:00 PM MYT",
      timeZone: "Asia/Kuala_Lumpur",
      opensLabel: "Opens",
      countdownLabel: "Until preorder opens",
      pendingTitle: "Next round in the works.",
      pendingBody:
        "We will show the exact date and time here as soon as the next preorder is set.",
      liveTitle: "Preorder is open.",
      liveBody:
        "Place your order through the link. For last-minute questions, message us on Instagram.",
      pickupNote: "Pickup in Kota Kinabalu",
      reminderLabel: "Reminders on Instagram",
    },
  },
  home: {
    eyebrow: "Preorder pastries · Kota Kinabalu",
    title: "Tartlets, craquelins, and brownies — baked in small batches.",
    description:
      "We make tartlets with glossy tops, craquelins with crackly lids, and dense brownies with Sabah cocoa. Each round is packed for pickup when preorder opens.",
    primaryCta: "Order",
    secondaryCta: "Instagram",
    proof: [
      "Small batches",
      "Pickup in Kota Kinabalu",
      "Dates on Instagram",
    ],
    signaturesTitle: "What we bake",
    signaturesIntro:
      "Our regular lines: tartlets for something bright and neat, craquelins for a light bite with crunch, brownies when you want something deep and chocolatey.",
    signaturesMobileIntro:
      "Tartlets, craquelins, and brownies — flavours change with each drop.",
    signatures: [
      {
        title: "Tartlets",
        subtitle: "Glossy tops, neat edges",
        description:
          "Fruit, custard, and local flavours like pandan and gula melaka — small, polished, and easy to share.",
      },
      {
        title: "Craquelins",
        subtitle: "Crisp cap, soft filling",
        description:
          "Choux with a crackly top and creamy filling. Vanilla, cocoa, or whatever we are trying that week.",
      },
      {
        title: "Brownies",
        subtitle: "Sabah cocoa, fudgy cut",
        description:
          "Dark, rich squares — good for gifting or keeping for yourself.",
      },
    ],
    storyTitle: "Limited runs, careful packing",
    storyBody: "Small batches, packed with care.",
    processTitle: "How it works",
    process: [
      {
        title: "Small batches",
        description:
          "We bake to each preorder window, not for endless display counters.",
      },
      {
        title: "Packed to travel",
        description:
          "Tissue, rows, and seals matter — we want the box to arrive looking like it did when it left.",
      },
      {
        title: "Kota Kinabalu pickup",
        description:
          "You will get pickup details when you order. Handoff is quick and local.",
      },
    ],
    finalTitle: "Catch the next preorder",
    finalBody:
      "Follow Instagram for menus and opening times. Order here when the window is live.",
  },
  menu: {
    title: "À la carte menu",
    intro:
      "These are the kinds of pieces we bake. Exact flavours rotate each preorder — check Instagram for what is on this round.",
    note:
      "Not everything is available every time. If you see something you want, grab it when the window opens.",
    sections: [
      {
        title: "Tartlets",
        note: "Glossy finish, clean edges.",
        items: [
          {
            name: "Pandan custard tartlet",
            detail: "Soft pandan custard in a neat shell.",
          },
          {
            name: "Berry cream tartlet",
            detail: "Bright fruit and cream.",
          },
          {
            name: "Gula melaka tartlet",
            detail: "Caramel notes and a deeper finish.",
          },
        ],
      },
      {
        title: "Craquelins",
        note: "Crackled lid, soft middle.",
        items: [
          {
            name: "Vanilla milk craquelin",
            detail: "Mild, creamy, easy to eat more than one.",
          },
          {
            name: "Cocoa craquelin",
            detail: "Richer chocolate take on the same shell.",
          },
          {
            name: "Seasonal craquelin",
            detail: "Rotating flavour when we have something new.",
          },
        ],
      },
      {
        title: "Brownies",
        note: "Dense, sliceable.",
        items: [
          {
            name: "Sabah cocoa brownie",
            detail: "Dark, fudgy, cocoa-forward.",
          },
          {
            name: "Salted brownie",
            detail: "Extra depth with a bit of salt.",
          },
          {
            name: "Gift add-on",
            detail: "Extra box or ribbon when you are buying for someone else.",
          },
        ],
      },
    ],
    sidebarTitle: "Ordering",
    sidebarBody:
      "This page is a guide to what we make. The live list and prices are in the preorder link or on Instagram when each round opens.",
  },
  partyPackage: {
    title: "Party packages",
    intro:
      "Order a curated spread for birthdays, small gatherings, or office treats. Tell us your date, headcount, and budget — we will suggest a box mix.",
    note:
      "Minimum notice, pricing, and availability depend on the week. Message us on Instagram to plan a party package.",
    packages: [
      {
        name: "Gathering box",
        description: "A balanced mix of tartlets, craquelins, and brownie cuts for 6–10 people.",
        includes: ["Assorted tartlets", "Craquelins", "Brownie bites", "Disposable serveware note on request"],
      },
      {
        name: "Celebration tier",
        description: "Larger volume with extra finishing — ribbons, tags, or a simple message card.",
        includes: ["Scaled-up counts", "Coordinated packaging", "Optional add-on florals (subject to availability)"],
      },
      {
        name: "Custom brief",
        description: "You set the theme; we propose flavours and layout.",
        includes: ["Consultation via DM", "Menu tailored to your event", "Pickup or handoff time agreed in advance"],
      },
    ],
  },
  pickupDelivery: {
    title: "Pickup & delivery",
    intro:
      "Preorder pickup is our default in Kota Kinabalu. Delivery may be available for selected areas — confirm in your DM when you order.",
    methods: [
      {
        title: "Pickup",
        description:
          "We share the pickup point and time window after your order is confirmed. Please arrive within the slot so boxes stay fresh.",
      },
      {
        title: "Delivery",
        description:
          "When offered, delivery covers agreed zones in Kota Kinabalu. Fees and slots depend on distance and order size — ask when you preorder.",
      },
      {
        title: "Outside KK",
        description:
          "For areas outside our usual radius, we may suggest pickup or a third-party rider arranged by you.",
      },
    ],
    closingNote:
      "Exact details are confirmed per order. Instagram DM is the best place to lock pickup vs delivery for your round.",
  },
  gallery: {
    title: "Photo gallery",
    intro:
      "A scroll through recent bakes and boxes. For what is available to order right now, check Instagram or the preorder link.",
    eyebrow: "Gallery",
    carouselTitle: "From the pass and the box.",
    carouselBody:
      "Tartlets, brownies, packaging, and spreads — the same care whether it is one box or a full preorder day.",
  },
  feedback: {
    title: "Customer feedback",
    intro:
      "Tell us what you loved, what we could improve, or what you would like to see on the next menu. We read every message.",
    channelsTitle: "How to reach us",
    channels: [
      {
        title: "Instagram DM",
        description:
          "Fastest for photos, order questions, and quick notes after pickup.",
      },
      {
        title: "Order notes",
        description:
          "When preorder is open, leave a note in the form if the platform allows it.",
      },
    ],
    emailCta: "Email us",
  },
  about: {
    title: "About Creme Crust",
    intro:
      "Creme Crust is a homegrown preorder pastry kitchen in Kota Kinabalu. We focus on small runs, clear finishing, and boxes you are happy to carry out the door.",
    storyTitle: "Why preorder",
    storyBody: [
      "Preorder lets us plan each bake and pack without waste. You know what you are getting, and we know how much to make.",
      "We pull in local flavours — pandan, gula melaka, Sabah cocoa — alongside classic pastry ideas. If something returns, you will see it on Instagram first.",
    ],
    valuesTitle: "What we care about",
    values: [
      {
        title: "Finish",
        description:
          "Tops, edges, and packaging get the same attention as the bake inside.",
      },
      {
        title: "Honest batches",
        description:
          "When a round is full, it is full. We would rather sell out than overpromise.",
      },
      {
        title: "Local pickup",
        description:
          "Pickup stays in Kota Kinabalu so handoff stays simple and the food stays fresh.",
      },
    ],
  },
  order: {
    title: "How to order",
    intro:
      "Preorder opens for set windows. Menus and times are posted on Instagram; the order link goes live when we are ready.",
    primaryCta: "Open order link",
    fallbackTitle: "Order link coming soon",
    fallbackBody:
      "We have not attached the live preorder URL yet. Use Instagram for the current menu and to message us.",
    stepsTitle: "Steps",
    steps: [
      {
        title: "Check Instagram",
        description:
          "See the date, menu, and when the link opens — usually in bio or in our posts.",
      },
      {
        title: "Choose your box",
        description:
          "Pick items and quantities in the preorder form when it is open.",
      },
      {
        title: "Confirm pickup",
        description:
          "We will share pickup slot and location details after you order. DM us if something needs changing.",
      },
    ],
    notesTitle: "Good to know",
    notes: [
      "Pickup is in Kota Kinabalu, Sabah.",
      "We do not hold walk-in stock — everything is tied to preorder windows.",
      "Some flavours come back; some are one-off.",
    ],
    faqTitle: "FAQ",
    faq: [
      {
        question: "Can I buy without preordering?",
        answer:
          "Not for now. We bake to order for each window so we can keep quality and waste low.",
      },
      {
        question: "Where is the latest menu?",
        answer:
          "Instagram — stories, posts, and the bio link have what is live for the next round.",
      },
      {
        question: "How do I reach you?",
        answer:
          "Instagram DM is fastest. We read messages between packing and pickup.",
      },
    ],
  },
};
