"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

type HeroVisualProps = {
  locale: "en" | "ms";
};

const labels = {
  en: ["House tartlets", "Soft crackle", "Sabah cocoa"],
  ms: ["Tartlet utama", "Crackle lembut", "Koko Sabah"],
} as const;

const heroMarks = {
  en: {
    batch: "Kota Kinabalu",
    ribbon: "Gift-ready",
    note: "Small batch",
  },
  ms: {
    batch: "Kota Kinabalu",
    ribbon: "Sedia hadiah",
    note: "Batch kecil",
  },
} as const;

export function HeroVisual({ locale }: HeroVisualProps) {
  const marks = heroMarks[locale];
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative min-h-[430px] w-full overflow-hidden rounded-[2.4rem] border border-white/45 bg-[linear-gradient(160deg,rgba(255,250,246,0.98),rgba(243,226,218,0.75))] p-5 shadow-[0_24px_64px_rgba(75,49,36,0.09)] md:min-h-[640px] md:rounded-[2.7rem] md:p-10">
      <div className="absolute inset-x-6 top-16 bottom-22 z-[1] grid grid-cols-[0.84fr_1.04fr] gap-3 md:inset-x-10 md:top-22 md:bottom-30 md:gap-5">
        <div className="grid grid-rows-[0.94fr_1.06fr] gap-3 md:gap-5">
          <motion.div
            className="relative overflow-hidden rounded-[2.1rem_1.7rem_2rem_1.5rem] border border-white/55 bg-white/40 shadow-[0_22px_50px_rgba(87,57,38,0.14)]"
            animate={prefersReduced ? undefined : { y: [0, -8, 0] }}
            transition={prefersReduced ? undefined : { duration: 7.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Image
              src="/images/instagram/drop-feb-07-a.jpg"
              alt="Creme Crust cocoa slab from Instagram"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 35vw, 22vw"
              priority
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,238,0.08),rgba(61,37,24,0.2))]" />
          </motion.div>
          <motion.div
            className="relative overflow-hidden rounded-[1.6rem_2.1rem_1.9rem_2rem] border border-white/55 bg-white/40 shadow-[0_22px_52px_rgba(87,57,38,0.14)]"
            animate={prefersReduced ? undefined : { y: [0, 10, 0] }}
            transition={prefersReduced ? undefined : { duration: 8.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <Image
              src="/images/instagram/brownie-closeup-2025.jpg"
              alt="Creme Crust brownie tower from Instagram"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 35vw, 22vw"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,247,238,0.04),rgba(61,37,24,0.22))]" />
          </motion.div>
        </div>

        <motion.div
          className="relative overflow-hidden rounded-[2.7rem_2rem_2.4rem_2.1rem] border border-white/55 bg-white/40 shadow-[0_30px_74px_rgba(87,57,38,0.16)]"
          animate={prefersReduced ? undefined : { y: [0, 8, 0] }}
          transition={prefersReduced ? undefined : { duration: 9.4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <Image
            src="/images/instagram/dec-box-c.jpg"
            alt="Creme Crust larger pastry drop from Instagram"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 44vw, 30vw"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,248,241,0.02),rgba(61,37,24,0.26))]" />
        </motion.div>
      </div>
      <motion.div
        className="absolute left-6 right-6 top-6 z-30 flex items-start justify-between text-[0.56rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)] md:left-8 md:right-8 md:top-8 md:text-[0.65rem] md:tracking-[0.3em]"
        initial={prefersReduced ? false : { opacity: 0, y: 18 }}
        animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        transition={prefersReduced ? undefined : { duration: 0.8, delay: 0.15 }}
      >
        <span>Kota Kinabalu</span>
        <span>{marks.batch}</span>
      </motion.div>
      <motion.div
        className="absolute left-[6%] top-[55%] z-20 hidden w-fit max-w-[calc(100%-2.5rem)] -translate-y-1/2 -rotate-[7deg] rounded-[1.1rem] border border-white/65 bg-[linear-gradient(160deg,rgba(255,251,247,0.94),rgba(244,227,218,0.92))] px-2.5 py-2 shadow-[0_14px_32px_rgba(64,39,31,0.1)] md:flex md:flex-col md:items-start"
        initial={prefersReduced ? false : { opacity: 0, scale: 0.94, rotate: -12 }}
        animate={prefersReduced ? undefined : { opacity: 1, scale: 1, rotate: -7 }}
        transition={prefersReduced ? undefined : { duration: 0.7, delay: 0.28 }}
      >
        <p className="whitespace-nowrap text-[0.55rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
          {marks.ribbon}
        </p>
        <p className="accent-script mt-1.5 whitespace-nowrap text-[1.4rem] leading-[0.9] text-[var(--color-cocoa)]">
          {marks.note}
        </p>
      </motion.div>
      <motion.div
        className="absolute bottom-6 left-6 right-6 z-30 md:bottom-8 md:left-8 md:right-8"
        initial={prefersReduced ? false : { opacity: 0, y: 22 }}
        animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
        transition={prefersReduced ? undefined : { duration: 0.9, delay: 0.2 }}
      >
        <div className="grid gap-2.5 md:grid-cols-3 md:gap-3">
          {labels[locale].map((label, index) => (
            <motion.div
              key={label}
              className="rounded-full border border-white/50 bg-white/60 px-4 py-3 text-center text-[0.64rem] font-semibold uppercase tracking-[0.26em] text-[var(--color-cocoa)] backdrop-blur-md md:text-[0.72rem] md:tracking-[0.3em]"
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              animate={prefersReduced ? undefined : { opacity: 1, y: 0 }}
              transition={prefersReduced ? undefined : { duration: 0.6, delay: 0.35 + index * 0.1 }}
            >
              {label}
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-[24%] right-5 z-20 hidden h-24 w-24 -rotate-[10deg] rounded-full border border-white/65 bg-[linear-gradient(160deg,rgba(246,227,220,0.88),rgba(255,250,246,0.98))] text-center shadow-[0_18px_42px_rgba(64,39,31,0.12)] md:flex"
        initial={prefersReduced ? false : { opacity: 0, scale: 0.92, rotate: -16 }}
        animate={prefersReduced ? undefined : { opacity: 1, scale: 1, rotate: -10 }}
        transition={prefersReduced ? undefined : { duration: 0.75, delay: 0.22 }}
      >
        <div className="m-auto px-3">
          <div className="text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            Creme Crust
          </div>
          <div className="accent-script mt-1.5 text-[1.7rem] leading-[0.8] text-[var(--color-cocoa)]">
            little
            <br />
            luxury
          </div>
        </div>
      </motion.div>
      <motion.div
        className="pointer-events-none absolute left-[58%] top-[58%] z-10 hidden -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center text-center md:flex"
        initial={prefersReduced ? false : { opacity: 0, scale: 0.96 }}
        animate={prefersReduced ? undefined : { opacity: 1, scale: 1 }}
        transition={prefersReduced ? undefined : { duration: 0.8, delay: 0.08 }}
      >
        <div className="font-display text-[5rem] leading-none tracking-[-0.055em] text-[rgba(255,248,241,0.46)] drop-shadow-[0_10px_24px_rgba(61,37,24,0.12)]">
          Creme
        </div>
        <div className="-mt-3 font-display text-[5rem] leading-none tracking-[-0.055em] text-[rgba(255,248,241,0.6)] drop-shadow-[0_10px_24px_rgba(61,37,24,0.12)]">
          Crust
        </div>
      </motion.div>
    </div>
  );
}
