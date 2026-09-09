"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import {
  FiPhone, FiVideo, FiMic, FiMapPin, FiCheck, FiChevronDown,
  FiChevronUp, FiGlobe, FiSmartphone, FiAlertCircle, FiArrowRight,
  FiShield, FiClock, FiUsers, FiStar,
} from "react-icons/fi";

// ─── SMALL HELPERS ────────────────────────────────────────────────────────────
function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-[#d9603f]/30 bg-[#fdf3ee] px-3 py-1 text-[11.5px] font-semibold text-[#d9603f] dark:bg-[#d9603f]/10 dark:border-[#d9603f]/30 dark:text-[#f4a07a]">
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#d9603f]">
      {children}
    </p>
  );
}

function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[13.5px] leading-6 text-gray-600 dark:text-gray-300">
      <FiCheck size={14} className="mt-1 shrink-0 text-[#0f4338] dark:text-[#34d39e]" strokeWidth={3} />
      {children}
    </li>
  );
}

// ─── DATA ─────────────────────────────────────────────────────────────────────

const heroChecks = [
  "Local UK numbers — London, Manchester, Birmingham & more",
  "Business calling, video meetings & AI Receptionist",
  "No UK office required — available to UK & international businesses",
];

const cityImages = [
  { src: "/images/uk/london.png", label: "London", sub: "+44 20" },
  { src: "/images/uk/manchester.png", label: "Manchester", sub: "+44 161" },
  { src: "/images/uk/birmingham.png", label: "Birmingham", sub: "+44 121" },
  { src: "/images/uk/edinburgh.png", label: "Edinburgh", sub: "+44 131" },
];

const howItWorks = [
  { icon: FiMapPin, title: "Choose a UK number", desc: "Pick a local number for London, Manchester, Birmingham, Edinburgh and more." },
  { icon: FiPhone, title: "Start calling", desc: "Make and receive UK business calls from anywhere in the world." },
  { icon: FiVideo, title: "Meet by video", desc: "Host video meetings with UK customers and partners." },
  { icon: FiMic, title: "AI handles overflow", desc: "AI Receptionist captures calls when you're unavailable." },
];

const numberTypes = [
  {
    title: "London numbers",
    prefix: "+44 20",
    desc: "A London 020 number gives your business the credibility of the UK's biggest commercial centre.",
    checks: ["020 7 and 020 8 area codes", "Recognized by UK customers nationally", "Available for UK & international accounts"],
  },
  {
    title: "UK freephone",
    prefix: "0800 / 0808",
    desc: "Free to call from UK landlines and mobiles. Ideal for customer service lines and inbound sales.",
    checks: ["Free for callers from UK mobiles & landlines", "Professional national presence", "AI Receptionist compatible"],
  },
  {
    title: "UK national numbers",
    prefix: "03xx",
    desc: "03 numbers are non-geographic, cost the same as a local call, and work across the whole country.",
    checks: ["Non-geographic, nationwide reach", "Costs callers no more than 01/02", "Works with calling plans"],
  },
  {
    title: "UK mobile numbers",
    prefix: "+44 7xxx",
    desc: "A dedicated UK mobile number for teams that are always on the move.",
    checks: ["07 prefix — familiar to UK contacts", "Reach anywhere via the app", "Subject to availability and verification"],
  },
];

const availableNumbers = [
  { number: "+44 20 7946 0311", type: "London", area: "London", status: "available" },
  { number: "+44 20 7946 0512", type: "London", area: "London", status: "available" },
  { number: "+44 161 496 0188", type: "Manchester", area: "Manchester", status: "available" },
  { number: "+44 121 285 0044", type: "Birmingham", area: "Birmingham", status: "available" },
  { number: "+44 131 510 0239", type: "Edinburgh", area: "Edinburgh", status: "available" },
];

const useCases = [
  {
    icon: FiGlobe,
    title: "International business with UK presence",
    desc: "Companies based outside the UK that serve UK customers, partners or suppliers.",
  },
  {
    icon: FiUsers,
    title: "Remote UK teams",
    desc: "Distributed teams with UK members who need a shared professional number.",
  },
  {
    icon: FiSmartphone,
    title: "UK startup founders",
    desc: "Founders who want a credible UK number before opening a physical office.",
  },
  {
    icon: FiShield,
    title: "Professional services",
    desc: "Consultants, solicitors and advisors who serve UK clients.",
  },
];

const features = [
  { icon: FiPhone, title: "Inbound & outbound calling", desc: "Call UK customers from your local number, wherever your team is." },
  { icon: FiVideo, title: "Video meetings", desc: "Meet UK contacts face-to-face without travel." },
  { icon: FiMic, title: "AI Receptionist", desc: "Capture UK enquiries when your team is busy or offline." },
  { icon: FiClock, title: "Business hours routing", desc: "Route calls by time, team or availability — including UK hours." },
  { icon: FiStar, title: "Number porting", desc: "Move an existing UK number to Zoiko Local where supported." },
  { icon: FiMapPin, title: "Multiple UK numbers", desc: "Add numbers for different UK cities, teams or campaigns." },
];

const faqs = [
  {
    q: "Can I get a UK phone number without living in the UK?",
    a: "Yes. Zoiko Local lets businesses based anywhere hold a UK local number, subject to verification and availability for the specific number type.",
  },
  {
    q: "What UK area codes are available?",
    a: "We support London (020), Manchester (0161), Birmingham (0121), Edinburgh (0131), and other UK cities, as well as 03 national numbers and 0800 freephone. Availability varies.",
  },
  {
    q: "Can I port my existing UK number?",
    a: "Number porting is supported in many cases. Eligibility depends on your current provider, number type and porting regulations. Contact us to confirm.",
  },
  {
    q: "Does the AI Receptionist work for UK numbers?",
    a: "Yes. The AI Receptionist can answer, qualify and route calls to your UK number when your team is unavailable.",
  },
  {
    q: "Can I make outbound calls from my UK number?",
    a: "Yes. Outbound calls can display your UK number as the caller ID, subject to carrier and regulatory constraints.",
  },
  {
    q: "Is there a minimum contract for UK numbers?",
    a: "Zoiko Local offers flexible monthly and annual plans. No minimum term is required on standard plans. See pricing for details.",
  },
];

const relatedCountries = [
  { name: "United States", code: "us", flag: "🇺🇸" },
  { name: "Canada", code: "ca", flag: "🇨🇦" },
  { name: "Jamaica", code: "jm", flag: "🇯🇲" },
  { name: "Nigeria", code: "ng", flag: "🇳🇬" },
  { name: "South Africa", code: "za", flag: "🇿🇦" },
  { name: "All countries", code: "all", flag: "🌍" },
];

// ─── FAQ ITEM ────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8e2d8] dark:border-gray-700">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[14px] font-semibold text-[#1c2b26] dark:text-white">{q}</span>
        {open
          ? <FiChevronUp size={16} className="shrink-0 text-[#d9603f]" />
          : <FiChevronDown size={16} className="shrink-0 text-gray-400" />
        }
      </button>
      {open && (
        <p className="pb-4 text-[13.5px] leading-7 text-gray-600 dark:text-gray-300">{a}</p>
      )}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function UnitedKingdom() {
  return (
    <main className="bg-[#f7f4ee] font-sans text-[#1c2b26] dark:bg-gray-950 dark:text-gray-100">

      {/* ─── HERO ─── */}
      <section className="overflow-hidden bg-[#f7f4ee] dark:bg-gray-950">
        <div className="mx-auto grid max-w-7xl items-center lg:grid-cols-2">

          {/* Left */}
          <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-2xl">🇬🇧</span>
              <Tag>United Kingdom</Tag>
            </div>
            <h1 className="text-[36px] font-extrabold leading-[1.08] tracking-tight text-[#1c2b26] dark:text-white sm:text-[44px] lg:text-[50px]">
              Get a UK local number for calling and{" "}
              <span className="font-serif italic font-normal text-[#d9603f]">business communications.</span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-gray-600 dark:text-gray-400">
              Get a local UK number — London, Manchester, Birmingham, Edinburgh and more — and connect your business
              with UK customers from anywhere in the world. No UK office required.
            </p>
            <ul className="mt-6 space-y-2.5">
              {heroChecks.map((c) => (
                <Check key={c}>{c}</Check>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="inline-flex items-center gap-2 rounded-full bg-[#d9603f] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c25030]">
                Get a UK Number <FiArrowRight size={14} />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-[#1c2b26]/20 bg-white px-7 py-3.5 text-sm font-semibold text-[#1c2b26] transition hover:bg-gray-50 dark:border-white/20 dark:bg-gray-800 dark:text-white">
                See Pricing
              </button>
            </div>
          </div>

          {/* Right — hero image */}
          <div className="relative h-64 w-full lg:h-full lg:min-h-[520px]">
            <Image
              src="/images/uk/hero-bigben.png"
              alt="Big Ben and Westminster Bridge, London"
              fill
              className="object-cover"
              priority
            />
            {/* Floating badge */}
            <div className="absolute bottom-6 left-6 flex items-center gap-2.5 rounded-xl bg-white/95 px-4 py-3 shadow-lg backdrop-blur-sm dark:bg-gray-900/95">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d9603f]/10">
                <FiPhone size={15} className="text-[#d9603f]" />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-wider text-gray-400">UK number active</p>
                <p className="text-[14px] font-bold text-[#1c2b26] dark:text-white">+44 20 7946 0311</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── POPULAR CITIES ─── */}
      <section className="border-y border-[#e8e2d8] bg-white px-5 py-12 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Popular cities and regions</SectionLabel>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {cityImages.map((city) => (
              <div key={city.label} className="group relative overflow-hidden rounded-2xl">
                <div className="relative h-36 w-full sm:h-44">
                  <Image
                    src={city.src}
                    alt={city.label}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 p-3">
                  <p className="text-[14px] font-bold text-white">{city.label}</p>
                  <p className="text-[11.5px] text-white/70">{city.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW UK NUMBERS WORK ─── */}
      <section className="px-5 py-14 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>How UK numbers work</SectionLabel>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#d9603f]/10">
                    <Icon size={18} className="text-[#d9603f]" />
                  </span>
                  <h3 className="mt-4 text-[14.5px] font-bold dark:text-white">{item.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-gray-500 dark:text-gray-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── NUMBER TYPES ─── */}
      <section className="border-t border-[#e8e2d8] bg-white px-5 py-14 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>More than a phone number</SectionLabel>
          <h2 className="mb-10 max-w-xl text-[28px] font-extrabold leading-tight dark:text-white">
            Choose the right UK number type for your business.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {numberTypes.map((t) => (
              <div key={t.title} className="rounded-2xl border border-[#e8e2d8] bg-[#f7f4ee] p-6 dark:border-gray-700 dark:bg-gray-800">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-[15px] font-bold dark:text-white">{t.title}</h3>
                  <span className="rounded-full bg-[#0f4338] px-3 py-1 font-mono text-[11px] font-semibold text-white">
                    {t.prefix}
                  </span>
                </div>
                <p className="mt-3 text-[13px] leading-6 text-gray-600 dark:text-gray-400">{t.desc}</p>
                <ul className="mt-4 space-y-2">
                  {t.checks.map((c) => (
                    <Check key={c}>{c}</Check>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── AVAILABLE NUMBERS ─── */}
      <section className="border-t border-[#e8e2d8] px-5 py-14 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Available numbers, shown live</SectionLabel>
          <h2 className="mb-8 text-[24px] font-extrabold dark:text-white">
            Browse UK numbers ready to activate.
          </h2>
          <div className="overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
            {availableNumbers.map((n, i) => (
              <div
                key={n.number}
                className={`flex items-center justify-between gap-4 px-5 py-4 ${
                  i % 2 ? "bg-[#fbfaf6] dark:bg-gray-800/60" : "bg-white dark:bg-gray-800"
                } ${i > 0 ? "border-t border-gray-100 dark:border-gray-700" : ""}`}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono text-[14px] font-semibold text-[#1c2b26] dark:text-white">{n.number}</span>
                  <span className="hidden rounded-full bg-[#e8f1ec] px-2.5 py-0.5 text-[11.5px] font-semibold text-[#0f4338] sm:inline dark:bg-[#34d39e]/10 dark:text-[#34d39e]">
                    {n.area}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-[12.5px] text-[#1f8a6b]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#1f8a6b]" /> Available
                  </span>
                  <button className="rounded-lg bg-[#d9603f] px-4 py-2 text-[12.5px] font-semibold text-white transition hover:bg-[#c25030]">
                    Select
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-5 flex items-center justify-between">
            <p className="text-[13px] text-gray-500 dark:text-gray-400">
              Showing sample availability. Search all UK numbers →
            </p>
            <button className="text-[13px] font-semibold text-[#d9603f] hover:underline">
              Search all numbers
            </button>
          </div>
        </div>
      </section>

      {/* ─── SPLIT — IMAGE + CONTENT ─── */}
      <section className="border-t border-[#e8e2d8] bg-white px-5 py-14 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="relative h-72 w-full sm:h-96">
              <Image
                src="/images/uk/business-woman.png"
                alt="Professional on a call in the UK"
                fill
                className="object-cover"
              />
            </div>
            {/* Overlay card */}
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/95 p-4 backdrop-blur-sm dark:bg-gray-900/95">
              <p className="text-[11px] font-bold uppercase tracking-wider text-[#d9603f]">Calling through the number</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-[13.5px] font-semibold dark:text-white">+44 20 7946 0311 → Team</span>
                <span className="rounded-full bg-[#e8f1ec] px-2.5 py-1 text-[11.5px] font-bold text-[#0f4338] dark:bg-[#34d39e]/10 dark:text-[#34d39e]">Live</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <SectionLabel>Business calling</SectionLabel>
            <h2 className="text-[28px] font-extrabold leading-tight dark:text-white">
              A UK number your customers trust — handled by your team, anywhere.
            </h2>
            <p className="mt-4 text-[14px] leading-7 text-gray-600 dark:text-gray-400">
              Your UK number rings your team wherever they are — in London, remote, or on the other side of the world.
              Set business hours, configure routing, and let the AI Receptionist handle calls when no one's available.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Inbound & outbound calls with a UK caller ID",
                "Route to teams, departments or business hours",
                "AI Receptionist for after-hours and overflow",
                "Video escalation for high-value conversations",
              ].map((c) => <Check key={c}>{c}</Check>)}
            </ul>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#d9603f] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c25030]">
              Explore Calling <FiArrowRight size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* ─── EMERGENCY / SESAME STREET PROMO ─── */}
      <section className="border-t border-[#e8e2d8] bg-[#f7f4ee] px-5 py-14 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#d9603f]/10 px-3.5 py-1.5 mb-5">
              <FiAlertCircle size={13} className="text-[#d9603f]" />
              <span className="text-[11.5px] font-bold uppercase tracking-wider text-[#d9603f]">Notice</span>
            </div>
            <h2 className="text-[24px] font-extrabold leading-tight dark:text-white">
              Emergency calling in the UK
            </h2>
            <p className="mt-4 text-[14px] leading-7 text-gray-600 dark:text-gray-400">
              Emergency calling support (999 / 112) via Zoiko Local depends on your plan and device. Zoiko Local is not
              a substitute for traditional emergency services where compliant emergency access isn't available on your
              plan.
            </p>
            <ul className="mt-5 space-y-2.5">
              {[
                "Keep your registered service location current",
                "Check emergency calling availability for your plan",
                "UK emergency numbers: 999 and 112",
              ].map((c) => <Check key={c}>{c}</Check>)}
            </ul>
            <a href="#" className="mt-6 inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#d9603f] hover:underline">
              Read emergency calling policy <FiArrowRight size={13} />
            </a>
          </div>

          {/* Promo image */}
          <div className="relative overflow-hidden rounded-3xl bg-[#1a1a2e]">
            <div className="relative h-64 w-full sm:h-80">
              <Image
                src="/images/uk/sesame-promo.png"
                alt="Let's Get Ready App — Teach your kids emergency info"
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Featured</p>
                <h3 className="mt-2 text-[20px] font-extrabold leading-tight text-white">
                  Teach your kids emergency info with{" "}
                  <span className="text-[#f4a07a]">Sesame Street's Let's Get Ready App.</span>
                </h3>
                <button className="mt-5 rounded-full bg-[#d9603f] px-6 py-2.5 text-[13px] font-semibold text-white transition hover:bg-[#c25030]">
                  Learn more about 999 on call
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="border-t border-[#e8e2d8] bg-white px-5 py-14 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionLabel>Who uses UK numbers</SectionLabel>
          <h2 className="mb-10 text-[26px] font-extrabold dark:text-white">
            Built for UK communications, whoever you are.
          </h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => {
              const Icon = u.icon;
              return (
                <div key={u.title} className="rounded-2xl border border-[#e8e2d8] bg-[#f7f4ee] p-6 dark:border-gray-700 dark:bg-gray-800">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#d9603f]/10">
                    <Icon size={17} className="text-[#d9603f]" />
                  </span>
                  <h3 className="mt-4 text-[14px] font-bold dark:text-white">{u.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-gray-500 dark:text-gray-400">{u.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── DARK SPLIT — BUILD FOR UK COMMS ─── */}
      <section className="overflow-hidden bg-[#0f4338] px-5 py-14">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <p className="mb-4 text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#f4a07a]">Built for UK business</p>
            <h2 className="text-[28px] font-extrabold leading-tight text-white">
              Build for UK communications, professionally.
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-7 text-white/70">
              Zoiko Local gives you a complete UK communications layer — local numbers, business calling, video, AI
              Receptionist and routing — without the cost or complexity of a UK office.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10">
                      <Icon size={14} className="text-white" />
                    </span>
                    <div>
                      <p className="text-[13.5px] font-semibold text-white">{f.title}</p>
                      <p className="mt-0.5 text-[12.5px] leading-5 text-white/60">{f.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="mt-10 inline-flex items-center gap-2 rounded-full bg-[#d9603f] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c25030]">
              Get a UK Number <FiArrowRight size={14} />
            </button>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="relative h-72 w-full sm:h-96">
              <Image
                src="/images/uk/team-meeting.png"
                alt="UK business team in a meeting"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="border-t border-[#e8e2d8] px-5 py-14 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-3xl">
          <SectionLabel>UK local number questions</SectionLabel>
          <h2 className="mb-8 text-[26px] font-extrabold dark:text-white">Frequently asked questions</h2>
          <div>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── RELATED COUNTRIES ─── */}
      <section className="border-t border-[#e8e2d8] bg-white px-5 py-10 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <p className="mb-5 text-[13px] font-semibold text-gray-500 dark:text-gray-400">Also available in</p>
          <div className="flex flex-wrap gap-3">
            {relatedCountries.map((c) => (
            //   <a
            //     key={c.code}
            //     href={`/countries/${c.code}`}
            //     className="flex items-center gap-2 rounded-full border border-[#e8e2d8] bg-[#f7f4ee] px-4 py-2 text-[13px] font-medium text-[#1c2b26] transition hover:border-[#d9603f]/40 hover:bg-[#fdf3ee] dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            //   >
                <span className="flex items-center gap-2 rounded-full border border-[#e8e2d8] bg-[#f7f4ee] px-4 py-2 text-[13px] font-medium text-[#1c2b26] transition hover:border-[#d9603f]/40 hover:bg-[#fdf3ee] dark:border-gray-700 dark:bg-gray-800 dark:text-white">{c.flag} {c.name}</span> 
            //   </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#d9603f] px-5 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-white/60">Get started</p>
          <h2 className="text-[30px] font-extrabold leading-tight text-white sm:text-[36px]">
            Get a UK local number today.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[14px] leading-7 text-white/80">
            London, Manchester, Birmingham, Edinburgh and more. Start with a number and build your full UK communications
            layer with Zoiko Local.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[14px] font-semibold text-[#d9603f] transition hover:bg-gray-50">
              Find a UK Number <FiArrowRight size={14} />
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-white/30 px-8 py-4 text-[14px] font-semibold text-white transition hover:bg-white/10">
              Talk to Sales
            </button>
          </div>
          <p className="mt-6 text-[12.5px] text-white/60">
            No UK office required · Flexible monthly plans · Cancel anytime
          </p>
        </div>
      </section>
    </main>
  );
}