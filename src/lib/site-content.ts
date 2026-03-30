import { defaultLocale, type Locale } from "@/lib/locales";
import { enContent } from "@/lib/content/en";
import { msContent } from "@/lib/content/ms";

export type NavLinkItem = {
  href: string;
  label: string;
};

export type NavItem =
  | { type: "link"; href: string; label: string }
  | { type: "group"; label: string; children: NavLinkItem[] };

type SignatureBake = {
  title: string;
  subtitle: string;
  description: string;
};

type MenuItem = {
  name: string;
  detail: string;
};

type MenuSection = {
  title: string;
  note: string;
  items: MenuItem[];
};

type ProcessStep = {
  title: string;
  description: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type PartyPackage = {
  name: string;
  description: string;
  includes: string[];
};

export type SiteContent = {
  localeLabel: string;
  alternateLocaleLabel: string;
  nav: NavItem[];
  footerNote: string;
  footerOrderCta: string;
  footerInstagramCta: string;
  site: {
    name: string;
    handle: string;
    pickupArea: string;
    availability: string;
    instagramUrl: string;
    preorderUrl: string | null;
    contactText: string;
    menuHint: string;
    feedbackEmail: string | null;
    nextDrop: {
      label: string;
      opensAt: string | null;
      opensAtDisplay: string | null;
      timeZone: string;
      opensLabel: string;
      countdownLabel: string;
      pendingTitle: string;
      pendingBody: string;
      liveTitle: string;
      liveBody: string;
      pickupNote: string;
      reminderLabel: string;
    };
  };
  home: {
    eyebrow: string;
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    proof: string[];
    signaturesTitle: string;
    signaturesIntro: string;
    signaturesMobileIntro: string;
    signatures: SignatureBake[];
    storyTitle: string;
    storyBody: string;
    processTitle: string;
    process: ProcessStep[];
    finalTitle: string;
    finalBody: string;
  };
  menu: {
    title: string;
    intro: string;
    note: string;
    sections: MenuSection[];
    sidebarTitle: string;
    sidebarBody: string;
  };
  partyPackage: {
    title: string;
    intro: string;
    note: string;
    packages: PartyPackage[];
  };
  pickupDelivery: {
    title: string;
    intro: string;
    methods: ProcessStep[];
    closingNote: string;
  };
  gallery: {
    title: string;
    intro: string;
    eyebrow: string;
    carouselTitle: string;
    carouselBody: string;
  };
  feedback: {
    title: string;
    intro: string;
    channelsTitle: string;
    channels: ProcessStep[];
    emailCta: string;
  };
  about: {
    title: string;
    intro: string;
    storyTitle: string;
    storyBody: string[];
    valuesTitle: string;
    values: ProcessStep[];
  };
  order: {
    title: string;
    intro: string;
    primaryCta: string;
    fallbackTitle: string;
    fallbackBody: string;
    stepsTitle: string;
    steps: ProcessStep[];
    notesTitle: string;
    notes: string[];
    faqTitle: string;
    faq: FAQItem[];
  };
};

const siteContent: Record<Locale, SiteContent> = {
  en: enContent,
  ms: msContent,
};

export function getSiteContent(locale: Locale): SiteContent {
  return siteContent[locale] ?? siteContent[defaultLocale];
}
