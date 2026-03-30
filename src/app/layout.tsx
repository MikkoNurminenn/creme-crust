import type { Metadata } from "next";
import {
  Parisienne,
  Playfair_Display,
  Quicksand,
} from "next/font/google";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "https://creme-crust-web.vercel.app");
const shareImage = "/images/brand/creme-crust-share-logo.png";

const displayFont = Playfair_Display({
  variable: "--font-creme-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const sansFont = Quicksand({
  variable: "--font-creme-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
});

const accentFont = Parisienne({
  variable: "--font-creme-accent",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Creme Crust",
  description:
    "Preorder-first patisserie brand in Kota Kinabalu for tartlets, craquelins, brownies, and soft seasonal drops.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Creme Crust",
    description:
      "Preorder-first patisserie brand in Kota Kinabalu for tartlets, craquelins, brownies, and soft seasonal drops.",
    images: [
      {
        url: shareImage,
        width: 1179,
        height: 822,
        alt: "Creme Crust logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Creme Crust",
    description:
      "Preorder-first patisserie brand in Kota Kinabalu for tartlets, craquelins, brownies, and soft seasonal drops.",
    images: [shareImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${sansFont.variable} ${accentFont.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
