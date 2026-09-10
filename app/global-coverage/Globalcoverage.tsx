"use client";

import { useState, type ReactNode } from "react";


function ImageSlot({ className = "h-10 w-10 rounded-xl", label = "icon" }: { className?: string; label?: string }) {
  return (
    <span
      className={`inline-flex items-center justify-center border border-dashed border-gray-300 bg-gray-100 text-[8px] font-medium leading-none tracking-wide text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500 ${className}`}
    >
      {label}
    </span>
  );
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-[#e9a98f]" : "text-[#d9603f]"}`}>
      {children}
    </p>
  );
}

const coralBtn =
  "rounded-lg bg-[#d9603f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]";
const outlineBtn =
  "rounded-lg border border-[#1c2b26]/20 px-6 py-3 text-sm font-semibold text-[#1c2b26] transition-colors hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10";
const outlineBtnDark =
  "rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10";

// ─── DATA ────────────────────────────────────────────────────────────────────
const liveMarkets = [
  { code: "US", name: "United States", dial: "+1" },
  { code: "GB", name: "United Kingdom", dial: "+44" },
  { code: "JM", name: "Jamaica", dial: "+1 876" },
  { code: "CA", name: "Canada", dial: "+1" },
  { code: "NG", name: "Nigeria", dial: "+234" },
  { code: "ZA", name: "South Africa", dial: "+27" },
];

const marketCards = [
  { code: "US", name: "United States", dial: "+1", desc: "Local US numbers for sales, support, and market presence.", cta: "Get a US Local Number" },
  { code: "GB", name: "United Kingdom", dial: "+44", desc: "UK local presence for business calls and customer communication.", cta: "Get a UK Local Number" },
  { code: "JM", name: "Jamaica", dial: "+1 876", desc: "Local presence for business, diaspora, and cross-border reach.", cta: "Get a Jamaica Local Number" },
  { code: "CA", name: "Canada", dial: "+1", desc: "Canadian local presence for customers, teams, and expansion.", cta: "Get a Canada Local Number" },
  { code: "NG", name: "Nigeria", dial: "+234", desc: "Local presence in one of Africa's most important markets.", cta: "Get a Nigeria Local Number" },
  { code: "ZA", name: "South Africa", dial: "+27", desc: "Local presence to support customers and growth in South Africa.", cta: "Get a South Africa Local Number" },
];

const howItWorks = [
  { title: "Local in each market", desc: "Hold local numbers in multiple countries, each with its own greeting and routing." },
  { title: "Routed to your team", desc: "Calls from any market route to your people, wherever they are, or your AI Receptionist." },
  { title: "Expand when ready", desc: "Start in one country and add markets as your customer footprint grows." },
];

const faqs = [
  {
    q: "Which countries does Zoiko Local support?",
    a: "Six markets are live today — the United States, United Kingdom, Jamaica, Canada, Nigeria and South Africa — with more rolling out by demand.",
  },
  {
    q: "Can I get a local number in another country?",
    a: "Yes. You can hold local numbers across any of our live markets from a single workspace, and request markets that aren't live yet.",
  },
  {
    q: "Can I get a business number without a local office?",
    a: "Yes. A physical office is not required to hold a local number, though some markets may need business verification or proof of address.",
  },
  {
    q: "Can I route calls from one country to another?",
    a: "Yes. Calls to any of your local numbers can be routed to your team anywhere, or handled by your AI Receptionist.",
  },
  {
    q: "Can diaspora founders get local numbers in home markets?",
    a: "Yes. Diaspora founders commonly use Zoiko Local to keep a recognised presence in their home market while operating abroad.",
  },
  {
    q: "Can Zoiko Local replace a Skype Number for international local numbers?",
    a: "Yes. Zoiko Local is built to replace Skype Numbers across markets — you can switch and keep a local presence everywhere you operate.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
function GlobalCoverage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="bg-[#f3efe7] font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">
      {/* ─── HERO ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Global coverage</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
              Local numbers <span className="text-[#d9603f]">where your customers are.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Check local-number availability across our markets. Start in one country, then expand your business
              presence as your customer footprint grows. Sound local. Reach anywhere.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className={coralBtn}>Check Number Availability →</button>
              <button className={outlineBtn}>Talk to Sales</button>
            </div>
            <p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
              Replacing a Skype Number across markets?{" "}
              <a href="#" className="font-semibold text-[#d9603f] hover:underline">
                Switch from Skype →
              </a>
            </p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
              <span className="flex items-center gap-2">
                <ImageSlot className="h-4 w-4 rounded" label="" /> Six markets live today
              </span>
              <span className="flex items-center gap-2">
                <ImageSlot className="h-4 w-4 rounded" label="" /> More rolling out by demand
              </span>
            </div>
          </div>

          {/* Live markets card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
            <div className="bg-[#163a2e] px-5 py-4 text-sm font-semibold text-white">Live markets</div>
            <div className="space-y-2 p-4">
              {liveMarkets.map((m) => (
                <div key={m.code} className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 dark:border-gray-700">
                  <span className="flex items-center gap-3 text-sm dark:text-gray-100">
                    <span className="w-7 font-bold text-gray-500 dark:text-gray-400">{m.code}</span>
                    <span className="font-medium">{m.name}</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-sm text-gray-400">{m.dial}</span>
                    <span className="rounded-full bg-[#e8f1ec] px-2.5 py-0.5 text-xs font-semibold text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]">
                      Live
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── LIVE MARKETS GRID ─── */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>Live markets</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-xl text-3xl font-extrabold leading-snug dark:text-white">
              Get a local number in any of our markets.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              All six markets are live today. Choose a country to see availability, pricing direction, and how local
              numbers work there.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {marketCards.map((m) => (
              <div key={m.code} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <div className="flex items-start justify-between">
                  <span className="text-2xl font-extrabold dark:text-white">{m.code}</span>
                  <span className="rounded-full bg-[#e8f1ec] px-3 py-1 text-xs font-semibold text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]">
                    Available
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold dark:text-white">{m.name}</h3>
                <p className="mt-0.5 text-sm text-gray-400">{m.dial}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{m.desc}</p>
                <a href="#" className="mt-4 inline-block text-sm font-semibold text-[#d9603f] hover:underline">
                  {m.cta} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DON'T SEE YOUR MARKET ─── */}
      <section className="bg-white px-4 py-20 text-center sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>More markets</Eyebrow>
          <h2 className="mt-3 text-3xl font-extrabold dark:text-white">Don&rsquo;t see your market yet?</h2>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            We&rsquo;re expanding by demand. Tell us the country or city you need and we&rsquo;ll review availability —
            your request helps us prioritize what&rsquo;s next.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className={coralBtn}>Request a Market →</button>
            <button className={outlineBtn}>Talk to Sales</button>
          </div>
        </div>
      </section>

      {/* ─── HOW COVERAGE WORKS ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>How coverage works</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold leading-snug dark:text-white">
              One workspace. Every market you serve.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {howItWorks.map((h) => (
              <div key={h.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <ImageSlot className="h-10 w-10 rounded-full" />
                <h3 className="mt-4 text-base font-bold dark:text-white">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Eyebrow>Questions</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold dark:text-white">Global coverage, answered.</h2>
          </div>

          {/* Disclaimer note */}
          <div className="mt-10 rounded-xl border-l-4 border-[#d9603f] bg-[#faf3ef] p-5 text-xs leading-relaxed text-gray-600 dark:bg-gray-900 dark:text-gray-400">
            Local-number availability may vary by country, city, number type, carrier partner, verification
            requirement, eligibility rule, and applicable law. Some numbers may require business verification, proof
            of address, identity checks, approved use cases, or additional onboarding before activation.
          </div>

          {/* Accordion */}
          <div className="mt-8 divide-y divide-gray-100 dark:divide-gray-700">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{f.q}</span>
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 text-lg leading-none text-gray-500 dark:border-gray-600 dark:text-gray-400">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="pb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#0f2a21] p-10 text-center text-white sm:p-16">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            Sound local. <span className="text-[#d9603f]">Reach anywhere.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Check availability, get a local number in any live market, and expand your presence as you grow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className={coralBtn}>Check Number Availability →</button>
            <button className={outlineBtnDark}>Request a Market</button>
            <button className={outlineBtnDark}>Talk to Sales</button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            Replacing a Skype Number?{" "}
            <a href="#" className="font-semibold text-[#e9a98f] hover:underline">
              Switch from Skype →
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default GlobalCoverage;
export { GlobalCoverage };