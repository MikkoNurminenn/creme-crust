"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import { ButtonLink } from "@/components/button-link";

type NextDropPanelProps = {
  locale: "en" | "ms";
  label: string;
  opensAt: string | null;
  openTimeLabel: string | null;
  opensLabel: string;
  countdownLabel: string;
  pendingTitle: string;
  pendingBody: string;
  liveTitle: string;
  liveBody: string;
  pickupNote: string;
  reminderLabel: string;
  reminderHref: string;
  className?: string;
};

const SEGMENT_LABELS = {
  en: ["Days", "Hours", "Mins", "Secs"],
  ms: ["Hari", "Jam", "Minit", "Saat"],
} as const;

function getTimeLeft(opensAt: string, now: number) {
  const diff = Math.max(new Date(opensAt).getTime() - now, 0);
  const totalSeconds = Math.floor(diff / 1_000);
  const days = Math.floor(totalSeconds / 86_400);
  const hours = Math.floor((totalSeconds % 86_400) / 3_600);
  const minutes = Math.floor((totalSeconds % 3_600) / 60);
  const seconds = totalSeconds % 60;

  return [days, hours, minutes, seconds].map((value) =>
    String(value).padStart(2, "0"),
  );
}

function AnimatedValue({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.35rem] border border-white/65 bg-white/72 px-4 py-3 text-center shadow-[0_12px_36px_rgba(61,37,24,0.06)]">
      <div className="pointer-events-none absolute inset-x-3 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.92),transparent)]" />
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.p
          key={value}
          initial={{ y: 18, opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -18, opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[2rem] leading-none tracking-[-0.06em] text-[var(--color-cocoa)] md:text-[2.5rem]"
        >
          {value}
        </motion.p>
      </AnimatePresence>
      <p className="mt-2 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
        {label}
      </p>
    </div>
  );
}

export function NextDropPanel({
  locale,
  label,
  opensAt,
  openTimeLabel,
  opensLabel,
  countdownLabel,
  pendingTitle,
  pendingBody,
  liveTitle,
  liveBody,
  pickupNote,
  reminderLabel,
  reminderHref,
  className = "",
}: NextDropPanelProps) {
  const [now, setNow] = useState<number | null>(null);
  const [srMinuteText, setSrMinuteText] = useState("");
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setNow(Date.now());
    });

    if (!opensAt) {
      return () => {
        window.cancelAnimationFrame(frame);
      };
    }

    const timer = window.setInterval(() => {
      setNow(Date.now());
    }, 1_000);

    return () => {
      window.cancelAnimationFrame(frame);
      window.clearInterval(timer);
    };
  }, [opensAt]);

  const minuteBucket = now !== null ? Math.floor(now / 60_000) : null;
  useEffect(() => {
    if (!opensAt || now === null) return;
    const [d, h, m] = getTimeLeft(opensAt, now);
    const parts: string[] = [];
    if (d !== "00") parts.push(`${Number(d)} ${SEGMENT_LABELS[locale][0].toLowerCase()}`);
    if (h !== "00") parts.push(`${Number(h)} ${SEGMENT_LABELS[locale][1].toLowerCase()}`);
    parts.push(`${Number(m)} ${SEGMENT_LABELS[locale][2].toLowerCase()}`);
    setSrMinuteText(parts.join(" "));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [opensAt, locale, minuteBucket]);

  const isCountdownPending = opensAt !== null && now === null;
  const isFutureDrop =
    opensAt !== null && now !== null && new Date(opensAt).getTime() > now;
  const isLiveDrop =
    opensAt !== null && now !== null && new Date(opensAt).getTime() <= now;
  const timeLeft =
    isFutureDrop && now !== null
      ? getTimeLeft(opensAt, now)
      : ["--", "--", "--", "--"];
  const openTime = openTimeLabel;
  const classes = `relative overflow-hidden rounded-[2rem] border border-[color:var(--color-stroke)] bg-[linear-gradient(150deg,rgba(255,255,255,0.9),rgba(242,226,216,0.95))] p-5 shadow-[0_24px_80px_rgba(61,37,24,0.08)] backdrop-blur-sm md:rounded-[2.15rem] md:p-6 ${className}`.trim();

  return (
    <div className={classes}>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(163,114,134,0.12),transparent_22%),radial-gradient(circle_at_left_center,rgba(255,255,255,0.7),transparent_26%)]" />
      <div className="relative">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-[var(--color-accent-strong)]">
            {label}
          </p>
          <p className="rounded-full border border-white/70 bg-white/65 px-3 py-1 text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
            {pickupNote}
          </p>
        </div>

        {isFutureDrop || isCountdownPending ? (
          <>
            <div className="mt-5 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  {countdownLabel}
                </p>
                <div
                  aria-hidden="true"
                  className="mt-3 grid grid-cols-4 gap-2.5 sm:gap-3"
                >
                  {timeLeft.map((value, index) => (
                    <AnimatedValue
                      key={`${SEGMENT_LABELS[locale][index]}-${value}`}
                      value={value}
                      label={SEGMENT_LABELS[locale][index]}
                    />
                  ))}
                </div>
                <div
                  aria-live="polite"
                  aria-atomic="true"
                  className="sr-only"
                >
                  {srMinuteText}
                </div>
                <motion.div
                  className="mt-4 h-[3px] overflow-hidden rounded-full bg-[rgba(61,37,24,0.08)]"
                  initial={false}
                >
                  <motion.div
                    className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-accent),rgba(163,114,134,0.92))]"
                    animate={prefersReduced ? undefined : { x: ["-100%", "100%"] }}
                    transition={prefersReduced ? undefined : { duration: 4.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                    style={prefersReduced ? { width: "100%" } : undefined}
                  />
                </motion.div>
              </div>

              <div className="max-w-xs">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-[var(--color-muted)]">
                  {opensLabel}
                </p>
                <p className="mt-3 font-display text-[1.65rem] leading-[1.02] tracking-[-0.05em] text-[var(--color-cocoa)] md:text-[2rem]">
                  {openTime}
                </p>
              </div>
            </div>
            <div className="mt-5">
              <ButtonLink
                external
                href={reminderHref}
                variant="secondary"
                className="sm:px-4"
              >
                {reminderLabel}
              </ButtonLink>
            </div>
          </>
        ) : isLiveDrop ? (
          <>
            <h2 className="mt-5 font-display text-[2.4rem] leading-[0.95] tracking-[-0.05em] text-[var(--color-cocoa)] md:text-[3rem]">
              {liveTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
              {liveBody}
            </p>
            <div className="mt-5">
              <ButtonLink
                external
                href={reminderHref}
                variant="secondary"
                className="sm:px-4"
              >
                {reminderLabel}
              </ButtonLink>
            </div>
          </>
        ) : (
          <>
            <h2 className="mt-5 font-display text-[2.4rem] leading-[0.95] tracking-[-0.05em] text-[var(--color-cocoa)] md:text-[3rem]">
              {pendingTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-[0.98rem] leading-7 text-[var(--color-muted)] md:text-base md:leading-8">
              {pendingBody}
            </p>
            <div className="mt-5">
              <ButtonLink
                external
                href={reminderHref}
                variant="secondary"
                className="sm:px-4"
              >
                {reminderLabel}
              </ButtonLink>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
