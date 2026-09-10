"use client";

import type { ReactNode } from "react";

/* ────────────────────────────────────────────────────────────────────────────
   PALETTE (Zoiko Local — warm / earthy)
   coral     #d9603f      dark green  #163a2e      cream  #f3efe7
   Light sections invert to gray-900/800 in dark mode; the dark-green sections
   stay green in both modes.

   NOTE: all SVG icons removed — each icon spot is now a dashed <ImageSlot />
   placeholder. Drop your custom images in and delete the placeholder styling.
──────────────────────────────────────────────────────────────────────────── */

// ─── IMAGE / ICON SLOTS ──────────────────────────────────────────────────────
function ImageSlot({
  className = "h-11 w-11 rounded-xl",
  light = false,
  label = "img",
}: {
  className?: string;
  light?: boolean;
  label?: string;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center border border-dashed text-[8px] font-medium leading-none tracking-wide ${
        light
          ? "border-white/30 text-white/50"
          : "border-gray-300 bg-gray-100 text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-500"
      } ${className}`}
    >
      {label}
    </span>
  );
}

// ─── SMALL HELPERS ──────────────────────────────────────────────────────────
function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-white/60" : "text-[#d9603f]"}`}>
      {children}
    </p>
  );
}

function IconBadge({ light = false }: { light?: boolean }) {
  return <ImageSlot className="h-11 w-11 rounded-xl" light={light} label="icon" />;
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const trustPoints = [
  { title: "Trust", desc: "Verified local presence customers recognise and answer with confidence." },
  { title: "Reliability", desc: "Calls, forwarding and messaging that work the same way every time." },
  { title: "Cross-border identity", desc: "One identity that stays consistent wherever you operate." },
];

const features = [
  { title: "Local numbers", desc: "Get a real local number in the markets that matter to you." },
  { title: "Calling & forwarding", desc: "Route calls to any device, anywhere, with smart rules." },
  { title: "Voicemail intelligence", desc: "Transcribed, summarised and searchable voicemail." },
  { title: "AI receptionist", desc: "Greet, qualify and route callers automatically." },
  { title: "Video calling", desc: "Move from a call to face-to-face in a single tap." },
  { title: "Business controls", desc: "Manage lines, teams and permissions from one place." },
];

const pillars = [
  { title: "Access", desc: "Open local presence in new markets in minutes, not weeks." },
  { title: "Trust", desc: "Verified, recognisable numbers people actually pick up." },
  { title: "Control", desc: "Full visibility and governance across every line." },
];

const businessCards = [
  { title: "Introduce a local line", desc: "Add a local number without changing carriers." },
  { title: "Separate work & life", desc: "Keep business calls off your personal phone." },
  { title: "Consistent professionalism", desc: "One number your whole team can answer." },
  { title: "One business, many regions", desc: "Present locally in every market you serve." },
  { title: "Remote-ready & flexible", desc: "Work from anywhere, sound like you're next door." },
  { title: "Healthcare & care teams", desc: "Reliable, private lines for sensitive work." },
  { title: "Personal & business split", desc: "Clear boundaries between the two." },
  { title: "Cross-border operations", desc: "Compliant local numbers across borders." },
];

const countries = [
  { flag: "🇺🇸", name: "United States", code: "+1" },
  { flag: "🇬🇧", name: "United Kingdom", code: "+44" },
  { flag: "🇨🇦", name: "Canada", code: "+1" },
  { flag: "🇳🇬", name: "Nigeria", code: "+234" },
  { flag: "🇿🇦", name: "South Africa", code: "+27" },
  { flag: "🇬🇭", name: "Ghana", code: "+233" },
  { flag: "🇰🇪", name: "Kenya", code: "+254" },
  { flag: "🇪🇸", name: "Spain", code: "+34" },
  { flag: "🇦🇺", name: "Australia", code: "+61" },
  { flag: "🇦🇪", name: "United Arab Emirates", code: "+971" },
];

const steps = [
  { n: "01", title: "Choose a market", desc: "Pick the country and region you want a local presence in." },
  { n: "02", title: "Claim a number", desc: "Reserve a verified local number in seconds." },
  { n: "03", title: "Connect your routing", desc: "Forward to any device, team or workflow." },
  { n: "04", title: "Configure for AI", desc: "Add receptionist, voicemail and call rules." },
  { n: "05", title: "Govern & scale", desc: "Monitor, audit and add lines as you grow." },
];

const comparison = [
  { feature: "Local number", basic: "Single line", local: "Multi-market, verified" },
  { feature: "Call routing", basic: "Manual", local: "Smart, rule-based" },
  { feature: "Voicemail", basic: "Audio only", local: "Transcribed & summarised" },
  { feature: "AI receptionist", basic: "—", local: "Included" },
  { feature: "Governance", basic: "None", local: "Full audit trail" },
];

const aiGovern = [
  { title: "Content review", desc: "AI suggestions are reviewed against clear, human-set rules." },
  { title: "Reversible", desc: "Every automated action can be undone or overridden." },
  { title: "Auditable", desc: "A complete record of what happened, when and why." },
];

const scaleItems = [
  { title: "Identity verification", desc: "Know who is on every line before it goes live." },
  { title: "Compliance by region", desc: "Rules applied automatically per jurisdiction." },
  { title: "Fraud controls", desc: "Continuous monitoring across all numbers." },
  { title: "Data residency", desc: "Records stored in line with local requirements." },
];

const values = [
  { title: "Clarity", desc: "Plain language, transparent pricing and no hidden behaviour." },
  { title: "Accountability", desc: "Every action is logged, owned and reversible." },
  { title: "Usefulness", desc: "Features that solve real problems for real people." },
];

const zoikonexPoints = [
  "Shared infrastructure built for scale and reliability.",
  "Group-grade security, identity and fraud controls.",
  "A single platform powering local presence everywhere.",
  "Continuous investment in compliance and trust.",
];

const focusCards = [
  { title: "Focused product", desc: "One product, done well — local phone presence." },
  { title: "Group infrastructure", desc: "Backed by ZoikoNex's platform and security." },
  { title: "Built to scale", desc: "Designed for many markets from day one." },
];

const ctaPills = ["Local numbers", "AI receptionist", "Smart routing", "Cross-border ready"];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
function Aboutus() {
  return (
    <main className="bg-[#f3efe7] font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">
      {/* ─── HERO ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
              About <span className="text-[#d9603f]">Zoiko Local</span>
            </h1>
            <p className="mt-5 max-w-md text-lg font-semibold text-[#1c2b26] dark:text-gray-100">
              We help people and businesses become local where opportunity, customers, family, and work happen.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Zoiko Local provides verified local phone numbers and the communication infrastructure to use them —
              so you can show up locally in every market, supported by calling, forwarding, voicemail intelligence,
              compliance and governance built for scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="rounded-full bg-[#d9603f] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]">
                Get Started
              </button>
              <button className="rounded-full border border-[#1c2b26]/20 px-7 py-3 text-sm font-semibold text-[#1c2b26] transition-colors hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>

          {/* Product mock */}
          <div className="rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
            <div className="flex items-center gap-2 rounded-xl bg-[#f3efe7] px-4 py-3 dark:bg-gray-700">
              <ImageSlot className="h-4 w-4 rounded" label="" />
              <span className="text-sm text-gray-500 dark:text-gray-300">Search a local number…</span>
            </div>
            <div className="mt-4 space-y-3">
              {countries.slice(0, 4).map((c) => (
                <div key={c.name} className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 dark:border-gray-700">
                  <span className="flex items-center gap-3 text-sm font-medium dark:text-gray-100">
                    <span className="text-lg">{c.flag}</span>
                    {c.name} <span className="text-gray-400">{c.code}</span>
                  </span>
                  <span className="rounded-full bg-[#163a2e] px-3 py-1 text-xs font-semibold text-white">Add</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GLOBAL / LOCAL ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold leading-snug dark:text-white">
              The world became global.
              <br />
              Trust stayed local.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              As work, commerce and relationships have spread across borders, the way we build trust has not. People
              still answer the phone for numbers they recognise, and businesses still grow through local presence.
              Zoiko Local closes that gap — turning a global footprint into something that feels personal, recognised
              and reliable.
            </p>
            <a href="#features" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#d9603f] hover:underline">
              Learn more →
            </a>
          </div>
          <div className="space-y-4">
            {trustPoints.map((t) => (
              <div key={t.title} className="flex gap-4 rounded-xl bg-[#f3efe7] p-5 dark:bg-gray-900">
                <ImageSlot className="mt-0.5 h-6 w-6 flex-shrink-0 rounded-full" label="" />
                <div>
                  <h3 className="text-sm font-bold dark:text-white">{t.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold leading-snug dark:text-white">
              Local phone presence, built for the way people actually communicate now.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <IconBadge />
                <h3 className="mt-4 text-base font-bold dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DARK: ACCESS / TRUST / CONTROL ─── */}
      <section className="bg-[#163a2e] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow light>Why we built it</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold leading-snug">
              To make global reach feel local, trusted, and manageable.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <IconBadge light />
                <h3 className="mt-4 text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUILT FOR BUSINESS ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>Use cases</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold dark:text-white">Built for business. Simple enough for life.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessCards.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <ImageSlot className="h-9 w-9 rounded-lg" label="icon" />
                <h3 className="mt-3 text-sm font-bold dark:text-white">{c.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COUNTRIES ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>Where we start</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold dark:text-white">
              Starting where local presence <span className="text-[#d9603f]">matters most.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c) => (
              <div key={c.name} className="flex items-center justify-between rounded-xl border border-gray-100 px-5 py-4 dark:border-gray-700">
                <span className="flex items-center gap-3 text-sm font-semibold dark:text-gray-100">
                  <span className="text-xl">{c.flag}</span>
                  {c.name}
                  <span className="text-gray-400">{c.code}</span>
                </span>
                <span className="rounded-full bg-[#163a2e]/10 px-3 py-1 text-xs font-semibold text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]">
                  Available
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-semibold text-[#d9603f]">More markets coming soon →</p>
        </div>
      </section>

      {/* ─── A LOCAL PRESENCE SYSTEM ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold dark:text-white">Not just a number. A local presence system.</h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <span className="text-2xl font-extrabold text-[#d9603f]">{s.n}</span>
                <h3 className="mt-3 text-sm font-bold dark:text-white">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#163a2e] text-white">
                <tr>
                  <th className="px-5 py-3 font-semibold">Feature</th>
                  <th className="px-5 py-3 font-semibold">Basic number</th>
                  <th className="px-5 py-3 font-semibold">Zoiko Local</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800">
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 ? "bg-[#f3efe7]/50 dark:bg-gray-900/40" : ""}>
                    <td className="px-5 py-3 font-medium dark:text-gray-100">{row.feature}</td>
                    <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{row.basic}</td>
                    <td className="px-5 py-3 font-semibold text-[#163a2e] dark:text-[#34d39e]">{row.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── AI GOVERNED BY HUMAN TRUST ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Responsible AI</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-snug dark:text-white">
              Helpful AI governed by <span className="text-[#d9603f]">human trust.</span>
            </h2>
            <div className="mt-8 space-y-5">
              {aiGovern.map((a) => (
                <div key={a.title} className="flex gap-4">
                  <IconBadge />
                  <div>
                    <h3 className="text-sm font-bold dark:text-white">{a.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="mt-8 rounded-full bg-[#d9603f] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]">
              See how it works
            </button>
          </div>

          {/* Card mock */}
          <div className="rounded-2xl bg-[#f3efe7] p-6 ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold dark:text-white">Incoming call · +1 202</span>
              <span className="rounded-full bg-[#163a2e] px-2.5 py-1 text-xs font-semibold text-white">AI</span>
            </div>
            <div className="mt-5 space-y-3">
              {["Caller identified & verified", "Intent: new enquiry", "Routed to sales team", "Summary saved to record"].map((line) => (
                <div key={line} className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm dark:bg-gray-800 dark:text-gray-100">
                  <ImageSlot className="h-4 w-4 flex-shrink-0 rounded" label="" />
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DARK: TRUST BEFORE SCALE ─── */}
      <section className="bg-[#0f2a21] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold leading-snug">
              Cross-border communication must be trusted before it can scale.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Trust is built one line at a time. Every number, identity and routing rule is verified and monitored
              before it ever reaches your customers.
            </p>
            <button className="mt-6 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0f2a21] transition-colors hover:bg-white/90">
              Read compliance
            </button>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scaleItems.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <h3 className="text-sm font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>Our principles</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-xl text-3xl font-extrabold leading-snug dark:text-white">
              We build for trust, usefulness, and <span className="text-[#d9603f]">long-term reliability.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <h3 className="text-base font-bold dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-[#f7e3da] p-6 text-sm leading-relaxed text-[#8a3c24] ring-1 ring-[#e6c3b5] dark:bg-[#3a201a] dark:text-[#f0b6a0] dark:ring-[#5a2f24]">
            Zoiko Local is designed to support people. We do not make claims that we cannot stand behind, and every
            automated decision is reviewable and reversible by a human.
          </div>
        </div>
      </section>

      {/* ─── POWERED BY ZOIKONEX ─── */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#163a2e] p-8 text-white sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow light>Infrastructure</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold">Powered by ZoikoNex</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Zoiko Local runs on ZoikoNex — the group's platform for identity, charging, compliance and
                communication at scale.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <button className="rounded-full bg-[#d9603f] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]">
                  Explore ZoikoNex
                </button>
                <button className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  View pricing
                </button>
              </div>
            </div>
            <ul className="space-y-3 lg:pt-10">
              {zoikonexPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-white/80">
                  <ImageSlot className="mt-0.5 h-4 w-4 flex-shrink-0 rounded" light label="" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FOCUSED PRODUCT ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>The bigger picture</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold leading-snug dark:text-white">
              A focused product with group-level infrastructure behind it.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {focusCards.map((f) => (
              <div key={f.title} className="rounded-2xl bg-[#f3efe7] p-6 dark:bg-gray-900">
                <IconBadge />
                <h3 className="mt-4 text-base font-bold dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#0f2a21] p-6 text-white sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/60">Part of</p>
              <p className="mt-1 text-lg font-extrabold">Zoiko Group</p>
            </div>
            <button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0f2a21] transition-colors hover:bg-white/90">
              About Zoiko Group
            </button>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-[#1b4a3a] to-[#0f2a21] p-10 text-center text-white sm:p-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-snug sm:text-4xl">
            Build your local presence where business and life happen.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className="rounded-full bg-[#d9603f] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]">
              Get Started
            </button>
            <button className="rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
              Talk to Sales
            </button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {ctaPills.map((p) => (
              <span key={p} className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Aboutus;
export { Aboutus };