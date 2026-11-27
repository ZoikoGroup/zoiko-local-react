import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const CONTENT = {
  eyebrow: "BLACK FRIDAY 2026",
  title: "Your next local connection starts here.",
  description:
    "Black Friday savings on eligible business-number services — get a trusted local presence in the markets that matter.",
  cta: { label: "Explore local-number options", href: "/get-local-number" },
} as const;

const CARD = {
  badge: "PROPOSED · PENDING APPROVAL",
  save: "SAVE",
  percent: "25",
  percentSign: "%",
  description:
    "The first three months of eligible local-number platform subscriptions for new business accounts.",
  cta: {
    label: "Explore local-number options",
    href: "/get-local-number",
  },
} as const;

export default function BlackFridayCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[#06261f] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_50%,rgba(10,60,50,0.55),transparent_65%)]" />

      <div className="relative mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:gap-16 lg:px-[100px] lg:py-[60px]">
        {/* Left content */}
        <div className="flex flex-col">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            {CONTENT.eyebrow}
          </p>

          <h2 className="mt-4 max-w-[460px] font-serif text-4xl font-normal leading-[1.2] text-white sm:text-[40px]">
            {CONTENT.title}
          </h2>

          <p className="mt-5 max-w-[380px] text-base leading-[1.65] text-slate-300">
            {CONTENT.description}
          </p>

          <div className="mt-7">
            <Link
              href={CONTENT.cta.href}
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-[#f26a45] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(242,106,69,0.55)] transition hover:bg-[#e25a35]"
            >
              {CONTENT.cta.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Right card */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-full max-w-[460px] rounded-[28px] border border-[#f26a45]/25 bg-[#04201a] px-8 pb-8 pt-4 text-center">
            <span className="inline-flex items-center gap-2 rounded-md bg-[#f5b335] px-4 py-1.5 text-sm font-bold uppercase tracking-wider text-[#1a1a1a]">
              <Clock className="h-4 w-4 shrink-0" />
              {CARD.badge}
            </span>

            <p className="mt-3 text-sm font-bold uppercase tracking-[0.2em] text-emerald-300">
              {CARD.save}
            </p>

            <div className="mt-2 flex items-start justify-center leading-none">
              <span
                className="text-[96px] font-black leading-[0.9] tracking-tight text-[#f26a45]"
                style={{ textShadow: "3px 3px 0 #b8432a" }}
              >
                {CARD.percent}
              </span>
              <span
                className="mt-3 text-4xl font-black leading-none text-[#f26a45]"
                style={{ textShadow: "2px 2px 0 #b8432a" }}
              >
                {CARD.percentSign}
              </span>
            </div>

            <p className="mx-auto mt-3 max-w-[400px] text-base leading-[1.6] text-slate-200">
              {CARD.description}
            </p>

            <Link
              href={CARD.cta.href}
              className="mt-7 flex h-12 w-full items-center justify-center rounded-lg bg-[#f26a45] text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(242,106,69,0.55)] transition hover:bg-[#e25a35]"
            >
              {CARD.cta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
