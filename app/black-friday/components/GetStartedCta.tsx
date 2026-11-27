import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CONTENT = {
  eyebrow: "Get started",
  title: "Get your local number where business happens.",
  description:
    "Build a stronger local presence and explore communications solutions designed for U.S. businesses — with Black Friday savings on eligible plans.",
  primaryCta: { label: "Find a U.S. number", href: "/us-local-phone-numbers" },
  secondaryCta: { label: "Talk to Sales", href: "/contact-sales" },
  disclaimer:
    "Black Friday pricing is proposed and subject to approval and an inventory/billing check. Number charges, carrier fees and usage are excluded unless specifically approved.",
} as const;

export default function GetStartedCta() {
  return (
    <section className="relative w-full overflow-hidden bg-[#06261f] text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(10,60,50,0.55),transparent_65%)]" />

      <div className="relative mx-auto flex max-w-[1440px] flex-col items-center px-6 py-16 text-center sm:px-10 lg:py-[60px]">
        <p className="text-sm font-semibold text-emerald-300">
          {CONTENT.eyebrow}
        </p>

        <h2 className="mt-6 max-w-[760px] font-serif text-3xl font-normal leading-[1.25] text-white sm:text-4xl lg:text-[36px]">
          {CONTENT.title}
        </h2>

        <p className="mt-7 max-w-[400px] text-base leading-[1.7] text-slate-300">
          {CONTENT.description}
        </p>

        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Link
            href={CONTENT.primaryCta.href}
            className="inline-flex h-11 items-center gap-2 rounded-lg bg-[#f26a45] px-6 text-sm font-semibold text-white shadow-[0_10px_24px_-8px_rgba(242,106,69,0.55)] transition hover:bg-[#e25a35]"
          >
            {CONTENT.primaryCta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href={CONTENT.secondaryCta.href}
            className="inline-flex h-11 items-center rounded-lg border border-emerald-300/30 bg-white/[0.03] px-6 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            {CONTENT.secondaryCta.label}
          </Link>
        </div>

        <p className="mt-6 max-w-[360px] text-sm leading-[1.7] text-slate-400">
          {CONTENT.disclaimer}
        </p>
      </div>
    </section>
  );
}
