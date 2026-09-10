"use client";

import { useState, type ReactNode } from "react";


function Img({
  src,
  alt = "",
  className = "h-10 w-10 rounded-xl",
  cover = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  cover?: boolean;
}) {
  return (
    <img src={src} alt={alt} loading="lazy" className={`${cover ? "object-cover" : "object-contain"} ${className}`} />
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-[#e9a98f]" : "text-[#d9603f]"}`}>
      {children}
    </p>
  );
}

function SectionHead({ eyebrow, title, sub, onDark = false }: { eyebrow: string; title: ReactNode; sub?: string; onDark?: boolean }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className={`mt-3 text-3xl font-extrabold leading-snug ${onDark ? "" : "dark:text-white"}`}>{title}</h2>
      {sub && (
        <p className={`mx-auto mt-3 max-w-xl text-sm leading-relaxed ${onDark ? "text-white/60" : "text-gray-600 dark:text-gray-400"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

const coralBtn =
  "inline-flex items-center gap-2 rounded-lg bg-[#d9603f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]";
const outlineBtn =
  "rounded-lg border border-[#1c2b26]/20 px-6 py-3 text-sm font-semibold text-[#1c2b26] transition-colors hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10";
const outlineBtnDark =
  "rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10";

// ─── SHARED IMAGE PATHS ───────────────────────────────────────────────────────
const IC = {
  check: "/icons/check.svg",       // coral tick (left lists, hero)
  checkTeal: "/icons/check-teal.svg", // green tick (inside dark-green cards)
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const heroChecks = ["No hardware or office required", "Calling, video & AI receptionist included"];

const howItWorks = [
  { title: "Local area code", desc: "A number with the local code customers in your market recognize and trust.", icon: "/images/localbusiness/Background.png" },
  { title: "Business-grade handling", desc: "Greeting, routing, business hours, and history — not a personal line.", icon: "/images/localbusiness/Background (1).png" },
  { title: "Never miss a lead", desc: "An AI Receptionist captures and qualifies calls when your team can't answer.", icon: "/images/localbusiness/Background (2).png" },
];

const whoFor = [
  "Businesses wanting credibility in a local market",
  "Companies serving customers from another country",
  "Founders separating business from personal calls",
  "Multi-location and multi-market businesses",
];

const whatYouGet = [
  "A local number in the markets you choose",
  "Calling with routing and call history",
  "Video meetings connected to your number",
  "AI Receptionist for missed-call capture",
];

const faqs = [
  {
    q: "How does a local business number work?",
    a: "A local business number gives customers a familiar local number while allowing calls to be managed through your business communication system, regardless of where your team is located.",

  },
  {
    q: "Why do local numbers build customer trust?",
    a: "Customers are often more comfortable calling a recognizable local number, which can help create familiarity, credibility, and a stronger local presence.",
  },
  {
    q: "Can I get a local business number without an office?",
    a: "Yes. In many supported markets, businesses can obtain local numbers without maintaining a physical office, subject to local regulations and eligibility requirements.",

  },
  {
    q: "Can I use a local number for international business?",
    a: "Yes. Many businesses use local numbers in different countries or regions to create a familiar customer experience while managing communications centrally.",
  },
  {
    q: "Can I separate it from my personal phone?",
    a: "Yes. A dedicated business number helps separate personal and business communications while maintaining a more professional customer experience.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
function Localbusinessnumbers() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="bg-[#f3efe7] font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* soft coral glow, top-right */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-10 h-80 w-80 rounded-full bg-[#d9603f]/15 blur-3xl dark:bg-[#d9603f]/10"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Local business numbers</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
              Local business numbers <span className="text-[#d9603f]">customers trust.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Learn how local business numbers help customers recognize, trust, and reach your company — then get one for
              the markets you serve. Sound local. Reach anywhere.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className={coralBtn}>Get a Local Number →</button>
              <button className={outlineBtn}>How it works</button>
            </div>
            <p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
              Replacing a Skype Number?{" "}
              <a href="#" className="font-semibold text-[#d9603f] hover:underline">Switch from Skype →</a>
            </p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              {heroChecks.map((c) => (
                <span key={c} className="flex items-center gap-2">
                  <Img src="/images/localbusiness/Vector.png" alt="" className="h-4 w-4" /> {c}
                </span>
              ))}
            </div>
          </div>

          {/* In plain terms card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
            <div className="bg-[#163a2e] px-5 py-4 text-sm font-semibold text-white">In plain terms</div>
            <div className="p-6 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              A <span className="font-bold text-[#1c2b26] dark:text-white">local business number</span> is a phone number
              with a local area code for the market you serve, used by your company rather than an individual. Customers
              are more likely to answer and call back a number that looks local to them — and with Zoiko Local, that
              number connects to calling, routing, video, and an AI Receptionist.
            </div>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-[#F7F5F2] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHead onDark eyebrow="How it works" title="Simple to get, powerful to use." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {howItWorks.map((h) => (
              <div key={h.title} className="rounded-2xl bg-white p-6 ring-1 ring-white/10 dark:bg-gray-800">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f1ec] dark:bg-[#34d39e]/15">
                  <Img src={h.icon} alt="" className="h-8 w-8" />
                </span>
                <h3 className="mt-5 text-base font-bold text-[#1c2b26] dark:text-white">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHO IT'S FOR ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Who it's for</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-snug dark:text-white">
              Built for businesses that need to be reachable.
            </h2>
            <ul className="mt-8 divide-y divide-gray-100 dark:divide-gray-700">
              {whoFor.map((w) => (
                <li key={w} className="flex items-center gap-3 py-4 text-sm font-medium dark:text-gray-100">
                  <Img src="/images/localbusiness/SVG.png" alt="" className="h-4 w-4" /> {w}
                </li>
              ))}
            </ul>
            <button className={`${coralBtn} mt-8`}>Get a Local Number →</button>
          </div>

          {/* What you get card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
            <div className="bg-[#163a2e] px-5 py-4 text-sm font-semibold text-white">What you get</div>
            <ul className="space-y-4 p-6">
              {whatYouGet.map((g) => (
                <li key={g} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
                  <Img src="/images/localbusiness/Vector.png" alt="" className="h-4 w-4" /> {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── QUESTIONS / FAQ ─── */}
      <section className="bg-[#F7F5F2] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHead onDark eyebrow="Questions" title="Local business numbers, answered." />
          <div className="mt-12 divide-y divide-white/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold dark:text-white/90">{f.q}</span>
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-white/20 text-lg leading-none dark:text-white/70">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && <p className="pb-5 text-sm leading-relaxed dark:text-white/60">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#F7F5F2] px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0f2a21] p-10 text-center text-white sm:p-16">
          <div aria-hidden className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#d9603f]/15 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Sound local. <span className="text-[#d9603f]">Reach anywhere.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
              Get a number, connect your team, and add an AI Receptionist — built for businesses that need to be
              reachable from anywhere.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button className={coralBtn}>Get a Local Number →</button>
              <button className={outlineBtnDark}>See Pricing</button>
              <button className={outlineBtnDark}>Talk to Sales</button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Replacing a Skype Number?{" "}
              <a href="#" className="font-semibold text-[#e9a98f] hover:underline">Switch from Skype →</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Localbusinessnumbers;
export { Localbusinessnumbers };