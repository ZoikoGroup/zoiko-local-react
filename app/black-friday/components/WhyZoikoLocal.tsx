import Link from "next/link";
import { Filter, MessageSquare, ShieldCheck, Target } from "lucide-react";

const CONTENT = {
  eyebrow: "WHY ZOIKO LOCAL",
  title: "Built for how U.S. businesses actually communicate.",
} as const;

const FEATURES = [
  {
    id: "identity",
    icon: Target,
    title: "Recognizable local identity",
    description: "Choose an eligible number tied to a supported U.S. locality.",
    href: "/us-numbers",
  },
  {
    id: "channel",
    icon: MessageSquare,
    title: "One number, every channel",
    description:
      "Calling, and where your plan includes them, messaging and video.",
    href: "/calling",
  },
  {
    id: "control",
    icon: Filter,
    title: "Plan-based control",
    description: "Add numbers, users, and capabilities as your business grows.",
    href: "/plans",
  },
  {
    id: "trust",
    icon: ShieldCheck,
    title: "Trust by design",
    description:
      "Caller identity, AUP, and accessibility built into the product.",
    href: "/compliance",
  },
] as const;

export default function WhyZoikoLocal() {
  return (
    <section className="w-full bg-[#0b2a22] text-white">
      <div className="mx-auto max-w-[1440px] px-6 py-16 sm:px-10 lg:px-[100px] lg:py-[60px]">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
          {CONTENT.eyebrow}
        </p>

        <h2 className="mt-4 max-w-[520px] font-serif text-4xl font-normal leading-[1.2] text-white sm:text-[40px]">
          {CONTENT.title}
        </h2>

        <ul className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <li key={feature.id}>
                <Link
                  href={feature.href}
                  className="flex h-full items-center gap-4 rounded-xl border border-white/10 bg-white/[0.06] px-5 py-5 transition hover:border-emerald-400/30 hover:bg-white/[0.09]"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-500/20 text-emerald-300">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col gap-1">
                    <span className="text-base font-semibold text-white">
                      {feature.title}
                    </span>
                    <span className="text-sm leading-relaxed text-slate-300">
                      {feature.description}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
