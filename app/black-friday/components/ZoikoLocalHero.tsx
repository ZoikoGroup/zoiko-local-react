import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  Check,
  Percent,
  ShieldCheck,
} from "lucide-react";

const HERO = {
  titleLine1: "Zoiko",
  titleLine2: "Local",
  description:
    "Get an eligible U.S. local number for calling and business communications and make every connection feel local this Black Friday.",
  primaryCta: { label: "Find a U.S. number", href: "/us-local-phone-numbers" },
  secondaryCta: { label: "Port my existing number", href: "/number-porting" },
  exploreLead: "EXPLORE",
  exploreTail: "BEFORE IT ENDS!",
  dates: "27 NOV – 30 NOV 2026",
} as const;

const SALE = {
  black: "BLACK",
  friday: "FRIDAY",
  href: "/black-friday",
} as const;

const OFFER = {
  href: "/offers/local-number-plans",
  get: "GET:",
  percent: "25%",
  off: "OFF",
  period: "FIRST 3 MONTHS",
  plans: "Eligible local-number plans",
  accounts: "New business accounts.",
  badge: "PROMOTED - SUBJECT TO APPROVAL",
} as const;

const COUNTDOWN = {
  href: "/black-friday",
  endsIn: "ENDS IN",
  days: "20",
  daysLabel: "DAYS",
  tagline: "BEFORE IT'S GONE",
} as const;

const BG_PERCENTS = [
  { id: "p1", className: "left-[3%] top-[26%] h-28 w-28 -rotate-12" },
  { id: "p2", className: "left-[9%] top-[58%] h-40 w-40 rotate-[10deg]" },
  { id: "p3", className: "left-[46%] bottom-[12%] h-24 w-24 rotate-[8deg]" },
] as const;

const FEATURES = [
  { label: "Eligible U.S. local numbers", href: "/us-numbers" },
  { label: "Calling & communications", href: "/calling" },
  { label: "Compliance-led", href: "/compliance" },
  { label: "Transparent billing", href: "/billing" },
] as const;

export default function ZoikoLocalHero() {
  return (
    <section className="relative w-full overflow-hidden bg-[#050a18] text-white">
      {/* Background Gradient Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_72%_45%,rgba(28,48,92,0.55),transparent_62%)]" />

      {/* Faint Background % Icons */}
      {BG_PERCENTS.map((item) => (
        <Percent
          key={item.id}
          aria-hidden="true"
          strokeWidth={3}
          className={`pointer-events-none absolute z-0 text-white/[0.05] ${item.className}`}
        />
      ))}

      <div className="relative z-10 mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-6 pb-10 pt-12 sm:px-10 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-0 lg:px-[110px] lg:pb-0 lg:pt-0">
        {/* Left content */}
        <div className="relative z-10 flex flex-col justify-center lg:py-20">
          <h1 className="font-serif text-5xl font-bold leading-[0.95] tracking-tight sm:text-7xl lg:text-[88px]">
            <span className="block text-white">{HERO.titleLine1}</span>
            <span className="block text-[#f26a45]">{HERO.titleLine2}</span>
          </h1>

          <p className="mt-5 max-w-[500px] text-sm leading-[1.7] text-slate-300 sm:mt-7 sm:text-base">
            {HERO.description}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4">
            <Link
              href={HERO.primaryCta.href}
              className="inline-flex h-[52px] items-center gap-2 rounded-lg bg-[#f26a45] px-7 text-sm font-semibold text-white transition hover:bg-[#e25a35]"
            >
              {HERO.primaryCta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={HERO.secondaryCta.href}
              className="inline-flex h-[52px] items-center rounded-lg border border-white/25 bg-white/5 px-7 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {HERO.secondaryCta.label}
            </Link>
          </div>

          <p className="mt-8 text-xl font-extrabold uppercase tracking-wide text-white sm:mt-10">
            {HERO.exploreLead}{" "}
            <span className="text-[#f26a45]">{HERO.exploreTail}</span>
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm font-medium tracking-wide text-emerald-400">
            <Calendar className="h-4 w-4" />
            <span>{HERO.dates}</span>
          </div>
        </div>

        {/* Right visual composition */}
        <div className="relative z-10 mx-auto w-full max-w-[680px] self-end lg:mx-0 lg:max-w-none">
          <div className="relative min-h-[460px] sm:min-h-[520px] lg:min-h-0 lg:aspect-[600/520] w-full">
            {/* Offer card */}
            <Link
              href={OFFER.href}
              className="absolute right-0 top-0 lg:right-[-66px] lg:top-[10%] z-30 lg:z-10 w-[42%] min-w-[170px] sm:min-w-[210px] lg:w-[36%] lg:min-w-[210px] rotate-[8deg] rounded-xl border-2 border-[#f26a45] bg-[#0b1f1c] px-3 py-4 text-center shadow-2xl transition hover:rotate-[5deg] lg:right-[-88px]"
            >
              <span className="block text-left text-xs sm:text-sm font-bold tracking-wider text-white/80">
                {OFFER.get}
              </span>
              <span className="block text-4xl sm:text-5xl font-black leading-none text-[#f26a45]">
                {OFFER.percent}
              </span>
              <span className="block text-3xl sm:text-4xl font-black leading-none text-white">
                {OFFER.off}
              </span>
              <span className="mt-1 block text-xs sm:text-sm font-bold tracking-wide text-white">
                {OFFER.period}
              </span>
              <span className="mt-2 lg:mt-3 block text-sm lg:text-base font-extrabold leading-tight text-[#f26a45]">
                {OFFER.plans}
              </span>
              <span className="mt-1 block text-xs sm:text-sm text-slate-300">
                {OFFER.accounts}
              </span>
              <span className="mt-2 lg:mt-3 inline-flex items-center gap-1.5 rounded-md bg-[#f5b335] px-2 py-1.5 text-xs sm:text-sm font-bold uppercase leading-tight text-[#0b1f1c]">
                <ShieldCheck className="h-4 w-4 shrink-0" />
                <span>{OFFER.badge}</span>
              </span>
            </Link>

            {/* Floating % badge positioned behind the phone (z-15) */}
            <Link
              href={SALE.href}
              className="absolute left-[38%] top-[24%] lg:left-[33%] lg:top-[30%] z-[15] flex h-12 w-16 rotate-[18deg] items-center justify-center rounded-lg bg-[#f26a45] shadow-lg sm:h-14 sm:w-20"
            >
              <Percent
                className="h-6 w-6 -translate-y-px text-[#0a1124] sm:h-7 sm:w-7"
                strokeWidth={3}
              />
            </Link>

            {/* Girl + phone image (z-20) */}
            <Image
              src="/images/sale/1.png"
              alt="Woman holding a phone showing the Zoiko Local app above an open suitcase"
              width={900}
              height={780}
              priority
              className="absolute bottom-0 right-0 z-20 h-auto w-[82%] sm:w-[78%] lg:w-[78%] object-contain"
            />

            {/* Black Friday title */}
            <Link
              href={SALE.href}
              className="absolute left-0 top-2 sm:top-[24%] lg:left-[2%] lg:top-[24%] z-30 block w-[55%] sm:w-[50%]"
            >
              <span
                className="block origin-left -rotate-[8deg] text-[clamp(44px,12vw,104px)] font-black uppercase leading-[0.85] tracking-tight text-[#0a1124]"
                style={{ WebkitTextStroke: "3px #f26a45" }}
              >
                {SALE.black}
              </span>
              <span className="relative -mt-2 sm:-mt-3 ml-[10%] inline-block -rotate-[8deg] bg-white px-3 py-1 sm:px-4 sm:py-1.5 text-lg sm:text-xl lg:text-2xl font-extrabold uppercase tracking-[0.2em] text-[#0b2a2a] shadow-lg">
                {SALE.friday}
              </span>
            </Link>

            {/* Countdown calendar */}
            <Link
              href={COUNTDOWN.href}
              className="absolute bottom-0 left-0 lg:bottom-[12%] z-30 lg:z-0 block w-[40%] min-w-[150px] sm:min-w-[190px] lg:w-[38%] lg:min-w-[190px] -rotate-[8deg] overflow-hidden rounded-xl bg-white shadow-2xl transition hover:-rotate-[5deg]"
            >
              <span className="block py-1 sm:py-1.5 text-center text-xs sm:text-sm font-bold uppercase tracking-[0.2em] lg:tracking-[0.25em] text-[#0a1124]">
                {COUNTDOWN.endsIn}
              </span>
              <span className="block bg-[#f26a45] px-2 pb-2 sm:px-3 sm:pb-3 sm:pt-2 text-center">
                <span className="block text-5xl sm:text-6xl font-black leading-none text-[#0a1124]">
                  {COUNTDOWN.days}
                </span>
                <span className="block text-xl sm:text-2xl font-extrabold leading-tight text-[#0a1124]">
                  {COUNTDOWN.daysLabel}
                </span>
                <span className="mt-1 block text-xs sm:text-sm font-extrabold uppercase tracking-wide text-[#0a1124]">
                  {COUNTDOWN.tagline}
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features bar */}
      <div className="relative z-40 border-t border-white/10 bg-[#070d1f]">
        <ul className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-5">
          {FEATURES.map((feature) => (
            <li key={feature.label}>
              <Link
                href={feature.href}
                className="inline-flex items-center gap-2 text-sm text-slate-300 transition hover:text-white"
              >
                <Check className="h-4 w-4 text-emerald-400" />
                {feature.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}