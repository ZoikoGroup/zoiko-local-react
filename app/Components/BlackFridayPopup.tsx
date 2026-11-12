"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Calendar, Percent, ShieldCheck, X } from "lucide-react";

/* Content mirrors the /black-friday page (ZoikoLocalHero + BlackFridayCta). */
const PROMO = {
  href: "/black-friday",
  eyebrow: "BLACK FRIDAY 2026",
  black: "BLACK",
  friday: "FRIDAY",
  get: "GET",
  percent: "25%",
  off: "OFF",
  period: "FIRST 3 MONTHS",
  title: "Your next local connection starts here.",
  description:
    "Get an eligible U.S. local number for calling and business communications and make every connection feel local this Black Friday.",
  plans: "Eligible local-number plans · New business accounts",
  badge: "PROMOTED - SUBJECT TO APPROVAL",
  dates: "27 NOV – 30 NOV 2026",
  cta: "Grab the Black Friday deal",
  dismiss: "No thanks, maybe later",
} as const;

/* Sale window (visitor's local time). The popup stops appearing once it ends. */
const SALE_START = new Date("2026-11-27T00:00:00").getTime();
const SALE_END = new Date("2026-11-30T23:59:59").getTime();

const OPEN_DELAY_MS = 1200;
const STORAGE_KEY = "zl-bf-2026-popup-dismissed";

function readDismissed() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "1";
  } catch {
    return false;
  }
}

function writeDismissed() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    /* storage unavailable (private mode, blocked) — popup simply reappears next load */
  }
}

function getCountdown(now: number) {
  const live = now >= SALE_START;
  const diff = Math.max(0, (live ? SALE_END : SALE_START) - now);
  const s = Math.floor(diff / 1000);
  return {
    label: live ? "DEAL ENDS IN" : "DEAL STARTS IN",
    units: [
      { label: "Days", value: Math.floor(s / 86400) },
      { label: "Hrs", value: Math.floor((s % 86400) / 3600) },
      { label: "Min", value: Math.floor((s % 3600) / 60) },
      { label: "Sec", value: s % 60 },
    ],
  };
}

export default function BlackFridayPopup() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [now, setNow] = useState(() => Date.now());
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const onPromoPage = pathname?.startsWith(PROMO.href) ?? false;

  // Open shortly after the first visit to any page except /black-friday itself.
  useEffect(() => {
    if (onPromoPage || readDismissed() || Date.now() > SALE_END) return;
    const t = window.setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [onPromoPage]);

  const close = useCallback(() => {
    writeDismissed();
    setOpen(false);
  }, []);

  // While open: tick the countdown, lock scroll, focus the dialog, close on Esc.
  useEffect(() => {
    if (!open) return;

    const tick = window.setInterval(() => setNow(Date.now()), 1000);
    const prevOverflow = document.body.style.overflow;
    const prevFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      window.clearInterval(tick);
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      prevFocus?.focus?.();
    };
  }, [open, close]);

  if (!open || onPromoPage) return null;

  const countdown = getCountdown(now);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="presentation"
    >
      {/* Backdrop */}
      <div
        aria-hidden="true"
        onClick={close}
        className="absolute inset-0 bg-[#02050d]/80 backdrop-blur-sm motion-safe:animate-[bf-fade-in_300ms_ease-out]"
      />

      {/* Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="bf-popup-title"
        aria-describedby="bf-popup-desc"
        className="relative z-10 max-h-[calc(100dvh-2rem)] w-full max-w-[880px] overflow-y-auto rounded-[28px] bg-[#050a18] text-white shadow-[0_40px_120px_-20px_rgba(242,106,69,0.45)] ring-1 ring-[#f26a45]/40 motion-safe:animate-[bf-pop-in_550ms_cubic-bezier(0.2,0.9,0.3,1.25)]"
      >
        {/* Close */}
        <button
          ref={closeBtnRef}
          type="button"
          onClick={close}
          aria-label="Close Black Friday offer"
          className="absolute right-3 top-3 z-40 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:rotate-90 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f26a45]"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
          {/* ---------- Visual panel ---------- */}
          <div className="relative min-h-[260px] overflow-hidden bg-[radial-gradient(ellipse_at_60%_55%,rgba(242,106,69,0.35),rgba(28,48,92,0.55)_45%,#050a18_75%)] sm:min-h-[320px] md:min-h-[520px]">
            {/* Faint % pattern */}
            <Percent
              aria-hidden="true"
              strokeWidth={3}
              className="pointer-events-none absolute -left-6 top-10 h-32 w-32 -rotate-12 text-white/[0.06]"
            />
            <Percent
              aria-hidden="true"
              strokeWidth={3}
              className="pointer-events-none absolute bottom-6 right-4 h-20 w-20 rotate-12 text-white/[0.06]"
            />

            {/* BLACK FRIDAY wordmark */}
            <div className="absolute left-5 top-6 z-30 sm:left-7 sm:top-8">
              <span
                className="block origin-left -rotate-[8deg] text-[56px] font-black uppercase leading-[0.85] tracking-tight text-[#0a1124] sm:text-[72px]"
                style={{ WebkitTextStroke: "2.5px #f26a45" }}
              >
                {PROMO.black}
              </span>
              <span className="-mt-1 ml-6 inline-block -rotate-[8deg] bg-white px-3 py-1 text-base font-extrabold uppercase tracking-[0.25em] text-[#0b2a2a] shadow-lg sm:text-lg">
                {PROMO.friday}
              </span>
            </div>

            {/* Floating % tile */}
            <span
              aria-hidden="true"
              className="absolute right-[18%] top-[30%] z-10 flex h-12 w-16 rotate-[18deg] items-center justify-center rounded-lg bg-[#f26a45] shadow-lg motion-safe:animate-[bf-float_3.5s_ease-in-out_infinite]"
            >
              <Percent className="h-6 w-6 text-[#0a1124]" strokeWidth={3} />
            </span>

            {/* Hero image */}
            <Image
              src="/images/sale/1.png"
              alt="Woman holding a phone showing the Zoiko Local app"
              width={900}
              height={780}
              className="absolute bottom-0 right-0 z-20 h-auto w-[78%] object-contain md:w-[96%]"
            />

            {/* 25% OFF sticker */}
            <div className="absolute bottom-4 left-4 z-30 flex h-[118px] w-[118px] -rotate-12 flex-col items-center justify-center rounded-full border-[3px] border-dashed border-[#0a1124]/30 bg-[#f5b335] text-center text-[#0a1124] shadow-[0_12px_30px_-6px_rgba(245,179,53,0.6)] motion-safe:animate-[bf-wiggle_4s_ease-in-out_infinite] sm:h-[132px] sm:w-[132px]">
              <span className="text-[11px] font-extrabold tracking-[0.2em]">{PROMO.get}</span>
              <span className="text-[38px] font-black leading-none sm:text-[42px]">{PROMO.percent}</span>
              <span className="text-lg font-black leading-none">{PROMO.off}</span>
            </div>
          </div>

          {/* ---------- Content panel ---------- */}
          <div className="relative flex flex-col justify-center px-6 pb-7 pt-6 sm:px-9 sm:pb-9 sm:pt-10">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-safe:animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {PROMO.eyebrow}
            </p>

            <h2
              id="bf-popup-title"
              className="mt-3 font-serif text-[28px] font-bold leading-[1.15] sm:text-[34px]"
            >
              Save <span className="text-[#f26a45]">{PROMO.percent}</span> for the{" "}
              <span className="whitespace-nowrap">{PROMO.period.toLowerCase()}</span>
            </h2>

            <p id="bf-popup-desc" className="mt-3 text-sm leading-[1.65] text-slate-300">
              {PROMO.description}
            </p>

            <p className="mt-2 text-sm font-semibold text-[#f26a45]">{PROMO.plans}</p>

            {/* Countdown */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white/70">
                  {countdown.label}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wide text-emerald-400">
                  <Calendar className="h-3.5 w-3.5" />
                  {PROMO.dates}
                </span>
              </div>
              <div className="mt-3 grid grid-cols-4 gap-2" aria-live="off">
                {countdown.units.map((u) => (
                  <div
                    key={u.label}
                    className="rounded-xl bg-[#f26a45] py-2 text-center text-[#0a1124] shadow-[inset_0_-3px_0_rgba(0,0,0,0.18)]"
                  >
                    <span className="block text-2xl font-black tabular-nums leading-none sm:text-[28px]">
                      {String(u.value).padStart(2, "0")}
                    </span>
                    <span className="mt-1 block text-[10px] font-extrabold uppercase tracking-[0.15em]">
                      {u.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href={PROMO.href}
              onClick={close}
              className="group relative mt-6 inline-flex h-[54px] w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#f26a45] px-6 text-base font-bold text-white shadow-[0_14px_30px_-10px_rgba(242,106,69,0.8)] transition hover:bg-[#e25a35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5b335]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/30 motion-safe:animate-[bf-shine_2.8s_ease-in-out_infinite]"
              />
              <span className="relative">{PROMO.cta}</span>
              <ArrowRight className="relative h-5 w-5 transition group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={close}
              className="mt-3 self-center text-xs font-medium text-white/50 underline-offset-4 transition hover:text-white/80 hover:underline"
            >
              {PROMO.dismiss}
            </button>

            <p className="mt-4 inline-flex items-center justify-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-[#f5b335]/80">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
              {PROMO.badge}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
