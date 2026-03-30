import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

import { isLocale } from "@/lib/locales";

type MenuRedirectProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: MenuRedirectProps): Promise<Metadata> {
  const { locale } = await params;

  if (!isLocale(locale)) {
    return {};
  }

  return {
    alternates: {
      canonical: `/${locale}/menu/ala-carte`,
      languages: {
        en: "/en/menu/ala-carte",
        ms: "/ms/menu/ala-carte",
      },
    },
  };
}

export default async function MenuRedirect({ params }: MenuRedirectProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  redirect(`/${locale}/menu/ala-carte`);
}
