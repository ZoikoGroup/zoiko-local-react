"use client";

import { useState, type ReactNode } from "react";
import {
  FiCheck, FiPhone, FiMapPin, FiUsers, FiClock, FiGlobe,
  FiShield, FiVideo, FiCornerDownRight, FiTrendingUp,
  FiCpu, FiBriefcase, FiZap, FiCheckCircle, FiChevronDown,
  FiUser,
} from "react-icons/fi";
import type { IconType } from "react-icons";

// ─── ICON BOX ────────────────────────────────────────────────────────────────
function IconBox({ icon: Icon, bg = "bg-[#fbe1da]", size = 18, className = "h-11 w-11" }: {
  icon: IconType; bg?: string; size?: number; className?: string;
}) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-xl ${bg} dark:bg-white/5 ${className}`}>
      <Icon size={size} className="text-[#d9603f]" />
    </span>
  );
}

const FLAGS: Record<string, string> = {
  us: "🇺🇸", gb: "🇬🇧", jm: "🇯🇲", ca: "🇨🇦", ng: "🇳🇬", za: "🇿🇦",
};

function Eyebrow({ children, pill = false }: { children: ReactNode; pill?: boolean }) {
  const inner = (
    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#d9603f]">
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#d9603f] align-middle" />
      {children}
    </span>
  );
  if (!pill) return <p>{inner}</p>;
  return <p className="inline-flex rounded-full bg-[#f6e4dc] px-4 py-1.5 dark:bg-[#d9603f]/15">{inner}</p>;
}

function SectionHead({ eyebrow, title, sub, onDark = false }: {
  eyebrow: string; title: ReactNode; sub?: string; onDark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow pill>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 text-3xl font-extrabold leading-snug sm:text-4xl ${onDark ? "text-white" : "dark:text-white"}`}>
        {title}
      </h2>
      {sub && (
        <p className={`mx-auto mt-4 max-w-xl text-sm leading-relaxed ${onDark ? "text-white/70" : "text-gray-600 dark:text-gray-400"}`}>
          {sub}
        </p>
      )}
    </div>
  );
}

const coralBtn = "inline-flex items-center gap-2 rounded-full bg-[#d9603f] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]";
const lightBtn = "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1c2b26] shadow-sm ring-1 ring-black/5 transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:ring-white/10";
const outlineDarkBtn = "inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10";
const featureCard = "rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10";

// ─── DATA ────────────────────────────────────────────────────────────────────
const heroChecks = [
  "Local business numbers without office complexity",
  "Separate personal and business communication",
  "AI Receptionist support when you are unavailable",
];

const heroRouting = [
  { label: "Founder", status: "Mobile", dot: "bg-[#d9603f]" },
  { label: "Assistant", status: "Backup", dot: "bg-[#34d39e]" },
  { label: "AI Receptionist", status: "Busy", dot: "bg-[#e8a03b]", highlight: true },
];

const gapCards: { title: string; desc: string; icon: IconType }[] = [
  { title: "Personal numbers blur boundaries", desc: "Business calls interrupt personal life and become difficult to manage.", icon: FiPhone },
  { title: "Customers expect professionalism", desc: "A dedicated business number makes the company feel more established.", icon: FiShield },
  { title: "Missed calls lose momentum", desc: "Founders are often building, selling, meeting or traveling when customers call.", icon: FiClock },
  { title: "Growth creates complexity", desc: "As customers, markets and team members are added, communication needs structure.", icon: FiTrendingUp },
];

const solution: { title: string; desc: string; icon: IconType; bg: string }[] = [
  { title: "Professional business number", desc: "A dedicated number for customers, partners, suppliers and prospects.", icon: FiMapPin, bg: "bg-[#fbe9e3]" },
  { title: "Local presence", desc: "Give customers a familiar number in the market they recognize.", icon: FiGlobe, bg: "bg-[#fbe9e3]" },
  { title: "Business calling", desc: "Make and receive calls using your business identity, not your personal mobile.", icon: FiPhone, bg: "bg-[#fbe9e3]" },
  { title: "AI Receptionist fallback", desc: "Capture inquiries when busy, unavailable or outside business hours.", icon: FiCpu, bg: "bg-[#fdf0db]" },
  { title: "Video conversations", desc: "Build trust through face-to-face customer, investor and partner calls.", icon: FiVideo, bg: "bg-[#e3f3ee]" },
  { title: "Growth-ready routing", desc: "Add team members, assistants, departments or markets when you expand.", icon: FiCornerDownRight, bg: "bg-[#fbe9e3]" },
];

const steps = [
  { n: 1, title: "Choose your market", desc: "Select the country, city or area code where you need presence." },
  { n: 2, title: "Get a business number", desc: "Use a local number as your professional customer-facing line." },
  { n: 3, title: "Connect your devices", desc: "Call and receive without exposing your personal number." },
  { n: 4, title: "Add call handling", desc: "Set hours, routing, voicemail or AI Receptionist fallback." },
  { n: 5, title: "Scale when ready", desc: "Add users, numbers, markets, video or team routing." },
];

const useCases: { title: string; desc: string; icon: IconType; bg: string }[] = [
  { title: "Solo founder", desc: "Separate customer calls from your personal mobile.", icon: FiUser, bg: "bg-[#fbe9e3]" },
  { title: "Startup founder", desc: "Create a professional line before hiring an operations team.", icon: FiZap, bg: "bg-[#fbe9e3]" },
  { title: "Consultant or advisor", desc: "Give clients a trusted number for calls, follow-ups and scheduling.", icon: FiUsers, bg: "bg-[#fbe9e3]" },
  { title: "Service business owner", desc: "Handle inquiries, bookings and questions through one business number.", icon: FiCheckCircle, bg: "bg-[#fbe9e3]" },
  { title: "Side-hustle becoming a company", desc: "Move from informal contact to a credible communication setup.", icon: FiTrendingUp, bg: "bg-[#fbe9e3]" },
  { title: "Founder entering a new market", desc: "Create local presence before opening an office or hiring locally.", icon: FiGlobe, bg: "bg-[#fbe9e3]" },
];

const platform: { name: string; desc: string; cta: string; icon: IconType; bg: string; href: string }[] = [
  { name: "Local Numbers", desc: "A local business number in the market your customers recognize.", cta: "Explore Local Numbers", icon: FiMapPin, bg: "bg-[#fbe9e3]", href: "/local-business-numbers" },
  { name: "Calling", desc: "Make and receive business calls with a professional caller identity.", cta: "Explore Calling", icon: FiPhone, bg: "bg-[#fbe9e3]", href: "/calling" },
  { name: "Video", desc: "Meet customers, partners, investors and suppliers through secure video.", cta: "Explore Video", icon: FiVideo, bg: "bg-[#e3f3ee]", href: "/video" },
  { name: "AI Receptionist", desc: "Capture and route inquiries when you are busy or unavailable.", cta: "Explore AI Receptionist", icon: FiCpu, bg: "bg-[#fdf0db]", href: "/ai-receptionist" },
];

const compare = [
  ["Tied to the founder personally", "Built around the business"],
  ["Blurs personal and work calls", "Separates business communication"],
  ["Can feel informal to customers", "Creates a professional local presence"],
  ["Missed calls depend on one person", "AI Receptionist can capture inquiries"],
  ["Difficult to scale", "Add users, numbers and routing as needed"],
  ["Hard to delegate", "Route calls to assistants, staff or teams"],
];

const growth = [
  { title: "Day one", desc: "Start with one professional local business number." },
  { title: "First customers", desc: "Use the number on your website, invoices, proposals and listings." },
  { title: "Busy founder stage", desc: "Add AI Receptionist and call handling to reduce missed inquiries." },
  { title: "First hire", desc: "Route calls between founder, assistant, sales or support." },
  { title: "New market", desc: "Add a local number for another country, city or customer segment." },
  { title: "Scaling company", desc: "Expand into routing, video, multiple users and structured communication.", accent: true },
];

const markets = [
  { name: "United States", flag: "us" },
  { name: "United Kingdom", flag: "gb" },
  { name: "Jamaica", flag: "jm" },
  { name: "Canada", flag: "ca" },
  { name: "Nigeria", flag: "ng" },
  { name: "South Africa", flag: "za" },
];
const regions = ["Caribbean", "Europe", "Africa", "North America"];

const faqs = [
  { q: "Why does a founder need a business phone number?", a: "A dedicated business number separates work from personal life, makes the company feel established, and ensures customers reach a professional line from day one." },
  { q: "Can I separate personal and business calls?", a: "Yes. Your business number stays separate from your personal line, with its own routing, greeting and call history, so the two never mix." },
  { q: "Can I get a business number without an office?", a: "Yes. No physical office or hardware is required, though some markets may need business verification or proof of address before activation." },
  { q: "What is the best phone number for a startup?", a: "A local business number in the market your customers recognize — paired with calling, routing and AI Receptionist fallback so you sound established without a full team." },
  { q: "Can AI Receptionist answer calls when I am busy?", a: "Yes. The AI Receptionist captures and qualifies inquiries when you are busy, traveling or after hours, then routes or logs them for follow-up." },
  { q: "Can I add team members later?", a: "Yes. Add users, assistants, departments and routing rules as you grow — without rebuilding your setup." },
  { q: "Can I add numbers in more than one country?", a: "Yes. Add local numbers by country or region from one workspace, subject to availability and verification." },
  { q: "Is Zoiko Local a replacement for Skype Number?", a: "Yes. It's built to replace Skype Numbers for founder-led businesses. Zoiko Local is not affiliated with or endorsed by Microsoft." },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
function FounderLedBusiness() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="bg-white font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">

      {/* ─── HERO ─── */}
      <section className="bg-[#f6ece5] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow pill>Founder-led business</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
              Business phone numbers for <span className="text-[#d9603f]">founder-led</span> companies.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Look professional, stay reachable, and separate business calls from personal life from day one. Zoiko Local
              gives founders a local business number, calling, routing, video, and AI Receptionist support that can grow
              with the company.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
             <a href="/local-business-numbers"> <button className={coralBtn}>Get Your Business Number</button></a>
             <a href="/plans-and-pricing"> <button className={lightBtn}>See Pricing</button></a>
            </div>
            <a href="/ai-receptionist" className="mt-4 inline-block text-sm font-semibold text-[#d9603f] hover:underline">Explore AI Receptionist →</a>
            <div className="mt-5 flex max-w-md items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 text-sm shadow-sm ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <span className="text-gray-600 dark:text-gray-400">Replacing Skype Number for your business?</span>
              <a href="/switch-from-skype" className="shrink-0 font-semibold text-[#d9603f] hover:underline">Switch from Skype →</a>
            </div>
            <ul className="mt-6 space-y-2">
              {heroChecks.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm font-medium dark:text-gray-300">
                  <FiCheck size={14} className="shrink-0 text-[#d9603f]" strokeWidth={3} /> {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Business number card */}
          <div className="relative">
            <div className="absolute -top-6 left-6 z-10 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold shadow-lg ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <FiMapPin size={14} className="text-[#d9603f]" /> Personal vs business
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <div className="flex items-start justify-between rounded-2xl bg-[#16233a] p-5 text-white">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Business number</p>
                  <p className="mt-1 text-xl font-extrabold">+1 (415) 555-0163</p>
                </div>
                <span className="text-2xl">🇺🇸</span>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#fbf2ee] p-4 dark:bg-gray-900/40">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9603f]">
                  <FiPhone size={16} className="text-white" />
                </span>
                <div>
                  <p className="text-sm font-bold dark:text-white">Incoming · New prospect</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">From your website</p>
                </div>
              </div>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Routing</p>
              <div className="mt-2 space-y-2">
                {heroRouting.map((r) => (
                  <div
                    key={r.label}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                      r.highlight ? "bg-[#e3f3ee] dark:bg-[#34d39e]/10" : "border border-gray-100 dark:border-gray-700"
                    }`}
                  >
                    <span className="flex items-center gap-2.5 text-sm font-medium dark:text-white">
                      <span className={`h-2 w-2 rounded-full ${r.dot}`} /> {r.label}
                    </span>
                    <span className={`text-xs font-semibold ${r.highlight ? "rounded-full bg-[#163a2e] px-2.5 py-0.5 text-white" : "text-gray-400"}`}>
                      {r.status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#1f8a6b]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1f8a6b]" /> Professional presence active
              </p>
            </div>
            <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold shadow-lg ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <FiShield size={14} className="text-[#d9603f]" /> Presence active
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE CREDIBILITY GAP ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="The credibility gap"
            title="Customers judge your business before they speak to you."
            sub="You may be building lean, but your business should never sound small, temporary, or hard to reach."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gapCards.map((g) => (
              <div key={g.title} className={featureCard}>
                <IconBox icon={g.icon} bg="bg-[#fbe1da]" />
                <h3 className="mt-5 text-base font-bold dark:text-white">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE SOLUTION ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="The solution"
            title="Start with a business number. Grow into a communication system."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solution.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <IconBox icon={s.icon} bg={s.bg} />
                <h3 className="mt-5 text-base font-bold dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a href="/local-business-numbers"> <button className={coralBtn}>Get Your Business Number</button></a>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="How it works" title="Choose a number. Separate your calls. Start sounding established." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <div key={s.n} className={featureCard}>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#16233a] text-sm font-bold text-white">{s.n}</span>
                <h3 className="mt-5 text-base font-bold dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Use cases" title="Founder-led, from day one to scale." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <IconBox icon={u.icon} bg={u.bg} />
                <h3 className="mt-5 text-base font-bold dark:text-white">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONNECTED PLATFORM ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Connected platform" title="Everything a founder needs to sound established and stay reachable." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {platform.map((p) => (
              <div key={p.name} className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <IconBox icon={p.icon} bg={p.bg} />
                <h3 className="mt-5 text-base font-bold dark:text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.desc}</p>
                <a href={p.href} className="mt-5 inline-block text-sm font-semibold text-[#d9603f] hover:underline">{p.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY UPGRADE ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl">
          <SectionHead eyebrow="Why upgrade" title="Your personal phone should not be your company's front desk." />
          <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
            <div className="grid grid-cols-2">
              <div className="bg-[#f3efe7] px-5 py-4 text-sm font-bold dark:bg-gray-800 dark:text-white">Personal Mobile Number</div>
              <div className="flex items-center gap-2 bg-[#d9603f] px-5 py-4 text-sm font-bold text-white">
                <FiZap size={14} /> Zoiko Local
              </div>
            </div>
            {compare.map((row, i) => (
              <div key={row[0]} className={`grid grid-cols-2 ${i % 2 ? "bg-[#fbfaf6] dark:bg-gray-900/40" : "bg-white dark:bg-gray-800"}`}>
                <div className="border-t border-gray-100 px-5 py-4 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">{row[0]}</div>
                <div className="border-t border-gray-100 px-5 py-4 text-sm font-semibold text-[#1c2b26] dark:border-gray-700 dark:text-white">{row[1]}</div>
              </div>
            ))}
            <div className="bg-[#f3efe7] py-6 text-center dark:bg-gray-800">
              <a href="/local-business-numbers"> <button className={coralBtn}>Separate Personal and Business Calls</button></a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GROWTH PATH ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Growth path" title="From one founder to a scalable communication layer." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {growth.map((g) => (
              <div key={g.title} className="rounded-2xl bg-[#eef3fb] p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <h3 className={`text-base font-bold ${g.accent ? "text-[#d9603f]" : "dark:text-white"}`}>{g.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{g.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a href="/plans-and-pricing"> <button className={coralBtn}>See Pricing</button></a>
          </div>
        </div>
      </section>

      {/* ─── GLOBAL COVERAGE ─── */}
      <section className="bg-[#0f4338] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHead
            onDark
            eyebrow="Global coverage"
            title="Build local trust in the markets that matter."
            sub="Create local presence across supported markets — subject to availability, regulation and carrier support."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {markets.map((m) => (
              <span key={m.name} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white">
                <span className="text-base leading-none">{FLAGS[m.flag]}</span> {m.name}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {regions.map((r) => (
              <span key={r} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white">{r}</span>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <a href="/global-coverage"> <button className={lightBtn}>Explore Global Coverage</button></a>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <SectionHead eyebrow="FAQ" title="Founder business phone numbers, answered." />
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="rounded-2xl bg-white p-1 shadow-sm ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-[#1c2b26] dark:text-white">{f.q}</span>
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition ${isOpen ? "bg-[#d9603f] text-white" : "text-[#d9603f]"}`}>
                      <FiChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                    </span>
                  </button>
                  {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#0f4338] px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Start sounding like the business you are building.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Get a professional business number, separate personal and work calls, and give customers a trusted way to reach you from day one.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/local-business-numbers"> <button className={lightBtn}>Get Your Business Number</button></a>
            <a href="/plans-and-pricing"> <button className={outlineDarkBtn}>See Pricing</button></a>
            <a href="/ai-receptionist"> <button className={outlineDarkBtn}>Explore AI Receptionist</button></a>
          </div>
          <p className="mt-6 text-sm text-white/70">
            Replacing Skype Number?{" "}
            <a href="/switch-from-skype" className="font-semibold text-white hover:underline">Switch from Skype →</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default FounderLedBusiness;
export { FounderLedBusiness };