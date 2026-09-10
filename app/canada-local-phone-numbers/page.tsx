"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiAlertCircle,
  FiArrowRight,
  FiInfo,
  FiPlus,
  FiSearch,
  FiX,
} from "react-icons/fi";

// ─── IMAGE PATHS ─────────────────────────────────────────────────────────────
const IMAGES = {
  hero: { src: "/images/Canadian city skyline representing local business presence.png", alt: "A person smiling with the Toronto skyline behind them" },
  toronto: { src: "/images/Toronto skyline.png", alt: "A Toronto subway tunnel" },
  montreal: { src: "/images/Montreal skyline.png", alt: "A busy street market in Montréal" },
  vancouver: { src: "/images/Vancouver skyline.png", alt: "Vancouver waterfront and mountains" },
  ottawa: { src: "/images/Ottawa skyline.png", alt: "Stone carvings on a Parliament building in Ottawa" },
  calgary: { src: "/images/Calgary skyline.png", alt: "Northern lights over trees near Calgary" },
  edmonton: { src: "/images/Edmonton skyline.png", alt: "Edmonton skyline at night" },
  porting: { src: "/images/Office desk with laptop and phone.png", alt: "A laptop and coffee cup on a desk" },
  callerId: { src: "/images/Customer support representative.png", alt: "Contact centre agents wearing headsets" },
  emergency: { src: "/images/Emergency services concept.png", alt: "An archive newspaper clipping about new emergency telephone numbers" },
  business: { src: "/images/Team working together in a small business setting.png", alt: "Restaurant staff standing together in a dining room" },
};

function Img({
  src,
  alt,
  className = "",
  rounded = "rounded-2xl",
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#EDE7DB] ${rounded} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

// ─── CITIES (layout data — resolved from inventory in production) ────────────
const cities = [
  { name: "Toronto", image: IMAGES.toronto, codes: ["416", "647", "437"], body: "Ontario's largest business market, served by three overlay codes." },
  { name: "Montréal", image: IMAGES.montreal, codes: ["514", "438"], body: "A bilingual business hub, with French-language service considerations." },
  { name: "Vancouver", image: IMAGES.vancouver, codes: ["604", "778", "236"], body: "A Pacific gateway market for teams serving Western Canada." },
  { name: "Ottawa", image: IMAGES.ottawa, codes: ["613", "343"], body: "The national capital region, along the Ontario–Québec border." },
  { name: "Calgary", image: IMAGES.calgary, codes: ["403", "587", "825"], body: "Alberta's largest city and a growing tech and energy hub." },
  { name: "Edmonton", image: IMAGES.edmonton, codes: ["780", "587", "825"], body: "Alberta's capital, serving Northern and Central Canada." },
];

const steps = [
  { n: "1", title: "Search", body: "Look up a city, province, or area code." },
  { n: "2", title: "Choose", body: "Select an available eligible number." },
  { n: "3", title: "Choose a plan", body: "Confirm or sign in to an eligible plan." },
  { n: "4", title: "Verify", body: "Complete any required verification." },
  { n: "5", title: "Go live", body: "Start communicating on your number." },
];

const capabilities = [
  { key: "C", title: "Calling", body: "Inbound and outbound calling on your entitled Canadian numbers.", tag: "Plan dependent" },
  { key: "M", title: "Messaging", body: "SMS/MMS where the number, provider, and CASL consent requirements are met.", tag: "Eligibility varies" },
  { key: "V", title: "Video", body: "Join or start video conversations from supported apps.", tag: "Plan dependent" },
  { key: "AI", title: "AI Receptionist", body: "Answer, route, and capture messages with a configured assistant.", tag: "Market & plan dependent" },
  { key: "P", title: "Porting", body: "Bring an eligible existing Canadian number, subject to a portability check.", tag: "Eligibility varies" },
  { key: "A", title: "Web & mobile apps", body: "Manage your number from supported web, iOS, and Android clients.", tag: "Where available" },
];

// 555-01xx is the reserved fictional range — safe to display.
const availableNumbers = [
  { number: "(416) 555-0148", place: "Toronto, ON", caps: [{ label: "Voice", tone: "ok" }, { label: "SMS eligible", tone: "ok" }], price: "$5.99 CAD/mo" },
  { number: "(514) 555-0172", place: "Montréal, QC", caps: [{ label: "Voice", tone: "ok" }, { label: "Consent required for SMS", tone: "warn" }], price: "$5.99 CAD/mo" },
  { number: "(604) 555-0113", place: "Vancouver, BC", caps: [{ label: "Voice", tone: "ok" }, { label: "SMS eligible", tone: "ok" }], price: "$5.99 CAD/mo" },
];

const caslRows = [
  { label: "Transactional messages", state: "Eligible", tone: "ok" },
  { label: "Commercial/marketing messages", state: "CASL consent required", tone: "warn" },
  { label: "New numbers", state: "Confirmed at activation", tone: "warn" },
];

const languageRows = [
  { label: "Interface language", state: "EN / FR where supported", tone: "ok" },
  { label: "Québec-specific requirements", state: "Resolved per account", tone: "warn" },
];

const whyPoints = [
  { title: "Recognizable local identity", body: "Choose an eligible number tied to a supported Canadian locality." },
  { title: "One number, every channel", body: "Calling, and where your plan includes them, messaging and video." },
  { title: "Plan-based control", body: "Add numbers, users, and capabilities as your business grows." },
  { title: "Trust by design", body: "Caller identity, CASL/DNCL awareness, and accessibility built in." },
];

// Only the first answer was legible in the mockup. The rest restate rules
// already stated on this page so the FAQ can't contradict it.
const faqs = [
  {
    q: "What is a Canadian local phone number?",
    a: "A Canadian local number uses country code +1 and a Canadian area code associated with a numbering region. The area code does not prove the number owner has a physical office in that location.",
  },
  {
    q: "Is a Canadian number the same as a U.S. number?",
    a: "Both sit inside the +1 country code, but they are not interchangeable. Canadian area codes belong to Canadian numbering regions, and Canadian rules — including CRTC unsolicited-communications rules and CASL — apply to how the number can be used.",
  },
  {
    q: "Can I choose any Canadian area code?",
    a: "You can search by city, province or territory, or area code, but you can only select from numbers currently available in inventory for a supported locality. Availability changes in real time and isn't a fixed list.",
  },
  {
    q: "Can I port my existing Canadian number?",
    a: "Many numbers may be portable, but eligibility depends on the number, provider, service area, and account information. Run a portability check before you cancel your current service — your existing service stays active until the transfer completes.",
  },
  {
    q: "Does every Canadian number support SMS and MMS?",
    a: "No. Messaging depends on the number, the provider, and whether CASL consent requirements are met. Each number in search shows its own capabilities — they're never assumed from the area code alone.",
  },
  {
    q: "Can I call 9-1-1 with Zoiko Local?",
    a: "Emergency calling depends on the exact VoIP service configuration and may require a registered emergency address. Nomadic use can affect how your location reaches emergency services, so keep your registered address current and check the emergency-calling status shown for your service before relying on it.",
  },
  {
    q: "What is 9-8-8?",
    a: "9-8-8 is Canada's Suicide Crisis Helpline, available nationally by call and text. Whether a Zoiko Local configuration routes 9-8-8 is confirmed from your live service state — it is never assumed from a +1 number. For immediate, life-threatening danger, use 9-1-1.",
  },
  {
    q: "Is Zoiko Local available in French?",
    a: "Interface language is available in English and French where supported. Telecommunications is federally regulated, and French-language obligations vary by regulatory regime and geography — including Québec's own language framework — so specific requirements are resolved per account.",
  },
];

// ─── SHARED ──────────────────────────────────────────────────────────────────
const cardBase = "rounded-2xl border border-[#E6DFD1] bg-white";
const serif = "font-serif";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8C8271]">{children}</p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className={`mt-3 text-[30px] font-medium leading-tight tracking-tight text-[#1A1A17] ${serif}`}>
      {children}
    </h2>
  );
}

function Pill({ label, tone }: { label: string; tone: string }) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-[11.5px] font-semibold ${
        tone === "ok" ? "bg-[#E1EFE6] text-[#20654A]" : "bg-[#FAF1DE] text-[#8A6114]"
      }`}
    >
      {label}
    </span>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function CanadaLocalNumbers() {
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#F6F2E9]">
      {/* ═══ HERO ═══ */}
     {/* ═══ HERO ═══ */}
<section className="bg-[#F6F2E9]">
  <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">

    {/* Hero */}
    <div className="grid overflow-hidden rounded-none lg:grid-cols-[0.95fr_1.05fr]">

      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-center px-6 py-12 sm:px-10 sm:py-16 lg:px-14 lg:py-20">

        {/* Country pill */}
        <div className="w-fit rounded-full bg-white px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#1A1A17] shadow-sm">
          🇨🇦 CANADA · +1
        </div>

        {/* Heading */}
        <h1
          className={`mt-6 max-w-[540px] text-[38px] font-medium leading-[1.08] tracking-tight text-[#1A1A17] sm:text-[46px] lg:text-[50px] ${serif}`}
        >
          Get a Canadian local
          <br className="hidden sm:block" />
          number for calling and{" "}
          <span className="italic text-[#C2421F]">
            business
          </span>{" "}
          communications.
        </h1>

        {/* Description */}
        <p className="mt-5 max-w-[500px] text-[13px] leading-6 text-[#5C5C55] sm:text-[14px]">
          Find an eligible Canadian local number by city, province, or area
          code, then use Zoiko Local for calling and other communications
          capabilities included with your plan.
        </p>

        {/* Buttons */}
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#search"
            className="inline-flex h-11 items-center justify-center rounded-full bg-[#D24A22] px-6 text-[13px] font-semibold text-white transition hover:bg-[#B23C1A]"
          >
            Find a Canadian number
          </Link>

          <Link
            href="#porting"
            className="inline-flex h-11 items-center justify-center rounded-full border border-[#1A1A17] bg-transparent px-6 text-[13px] font-semibold text-[#1A1A17] transition hover:bg-white"
          >
            Port my existing number
          </Link>
        </div>

        {/* Small disclaimer */}
        <p className="mt-5 max-w-[480px] text-[10.5px] leading-5 text-[#8C8271]">
          Availability changes in real time. Capability, verification, 9-1-1,
          messaging, language, and pricing depend on number, provider, plan,
          and use case.
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative min-h-[360px] overflow-hidden sm:min-h-[440px] lg:min-h-[570px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={IMAGES.hero.src}
          alt={IMAGES.hero.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Optional subtle image overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/5 via-transparent to-transparent" />
      </div>
    </div>

    {/* ═══ SEARCH CARD OVERLAPPING HERO ═══ */}
    <div
      id="search"
      className="relative z-10 mx-auto -mt-8 max-w-[1100px] px-2 pb-10 sm:-mt-10"
    >
      <div className="rounded-2xl border border-[#E6DFD1] bg-white p-4 shadow-[0_8px_30px_rgba(60,50,35,0.12)] sm:p-5 md:p-6">

        {/* Label */}
        <label
          htmlFor="num-search"
          className="block text-[12px] font-bold text-[#1A1A17]"
        >
          Search by city, province or territory, or area code
        </label>

        {/* Search row */}
        <div className="mt-2.5 flex flex-col gap-2.5 sm:flex-row">
          <div className="relative flex-1">
            <FiSearch
              aria-hidden
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[15px] text-[#A79C86]"
            />

            <input
              id="num-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Calgary, Ontario, or 416"
              className="h-11 w-full rounded-full border border-[#E6DFD1] bg-[#FBF8F1] pl-10 pr-5 text-[12.5px] text-[#1A1A17] placeholder:text-[#A79C86] focus:border-[#D24A22] focus:outline-none"
            />
          </div>

          <button
            type="button"
            className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#D24A22] px-7 text-[13px] font-semibold text-white transition hover:bg-[#B23C1A]"
          >
            Search numbers
            <FiArrowRight aria-hidden />
          </button>
        </div>

        {/* Suggestions */}
        <p className="mt-2.5 text-[11px] text-[#5C5C55]">
          Try{" "}
          {["Toronto", "Québec", "604"].map((t, i) => (
            <React.Fragment key={t}>
              <button
                type="button"
                onClick={() => setQuery(t)}
                className="font-semibold text-[#C2421F] hover:underline"
              >
                {t}
              </button>

              {i === 0 ? ", " : i === 1 ? ", or " : ""}
            </React.Fragment>
          ))}
        </p>

        {/* Availability note */}
        <p className="mt-2.5 flex items-start gap-2 text-[10.5px] leading-5 text-[#8C8271]">
          <span
            className="mt-1 text-[#D24A22]"
            aria-hidden
          >
            •
          </span>

          Availability changes in real time and can vary by location, plan,
          verification, and number capability.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* ═══ CITIES ═══ */}
      <section className="bg-[#F6F2E9] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Explore Canadian local numbers</Eyebrow>
          <H2>Popular cities and provinces</H2>
          <p className="mt-4 max-w-xl text-[13.5px] leading-7 text-[#5C5C55]">
            Shown here for layout — live availability and area codes are resolved from current
            inventory, not a fixed list. An area code is a numbering association, not proof of
            physical location.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <article key={c.name} className={`overflow-hidden ${cardBase}`}>
                <div className="relative">
                  <Img src={c.image.src} alt={c.image.alt} className="h-[150px] w-full" rounded="rounded-none" />
                  <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[#1A1A17]">
                    Numbers available
                  </span>
                  <span className={`absolute bottom-3 left-4 text-[19px] font-medium text-white ${serif}`}>
                    {c.name}
                  </span>
                </div>

                <div className="p-5">
                  {/* Area codes as a list, not a sentence — they're data. */}
                  <ul className="flex flex-wrap items-center gap-2 text-[12.5px] text-[#8C8271]">
                    {c.codes.map((code, i) => (
                      <li key={code}>
                        {code}
                        {i < c.codes.length - 1 && <span className="ml-2">·</span>}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 text-[12.5px] leading-6 text-[#5C5C55]">{c.body}</p>
                  <Link
                    href="#search"
                    className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#C2421F] hover:underline"
                  >
                    View numbers in {c.name} <FiArrowRight aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="bg-[#F6F2E9] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Getting started</Eyebrow>
          <H2>How Canadian numbers work</H2>

          {/* Ordered list — the sequence is the content. */}
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n} className={`${cardBase} p-5`}>
                <span className={`text-[20px] italic text-[#D24A22] ${serif}`}>{s.n}</span>
                <h3 className="mt-3 text-[13.5px] font-bold text-[#1A1A17]">{s.title}</h3>
                <p className="mt-1.5 text-[12px] leading-5 text-[#5C5C55]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ═══ CAPABILITIES ═══ */}
      <section className="bg-[#F6F2E9] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Capabilities</Eyebrow>
          <H2>More than a phone number</H2>
          <p className="mt-4 max-w-lg text-[13.5px] leading-7 text-[#5C5C55]">
            Use Zoiko Local for calling and, where your plan includes them, eligible messaging, video,
            and AI-assisted communications.
          </p>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title} className={`${cardBase} p-5`}>
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-lg bg-[#F7E7DF] text-[13px] font-medium text-[#C2421F] ${serif}`}
                  aria-hidden
                >
                  {c.key}
                </span>
                <h3 className={`mt-4 text-[16px] font-medium text-[#1A1A17] ${serif}`}>{c.title}</h3>
                <p className="mt-2 text-[12.5px] leading-6 text-[#5C5C55]">{c.body}</p>
                <span className="mt-4 inline-block rounded-full bg-[#EFE9DC] px-3 py-1 text-[11px] font-semibold text-[#6E6656]">
                  {c.tag}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ AVAILABLE NUMBERS ═══ */}
      <section className="bg-[#F6F2E9] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Choose your number</Eyebrow>
          <H2>Available numbers, shown live</H2>
          <p className="mt-4 max-w-xl text-[13.5px] leading-7 text-[#5C5C55]">
            A preview of what search results look like. Capabilities are shown per number — never
            assumed from the area code alone.
          </p>

          <ul className={`mt-8 overflow-hidden ${cardBase}`}>
            {availableNumbers.map((n, i) => (
              <li
                key={n.number}
                className={`flex flex-wrap items-center gap-4 p-5 ${
                  i > 0 ? "border-t border-[#EFE9DC]" : ""
                }`}
              >
                <span className="font-mono text-[16px] font-semibold tracking-tight text-[#1A1A17]">
                  {n.number}
                </span>
                <span className="text-[12.5px] text-[#8C8271]">{n.place}</span>

                <span className="flex flex-wrap gap-2">
                  {n.caps.map((c) => (
                    <Pill key={c.label} label={c.label} tone={c.tone} />
                  ))}
                </span>

                <span className="ml-auto flex items-center gap-4">
                  <span className="text-[12.5px] text-[#5C5C55]">{n.price}</span>
                  <button
                    type="button"
                    className="h-9 rounded-full border border-[#1A1A17] px-5 text-[12.5px] font-semibold text-[#1A1A17] transition hover:bg-[#1A1A17] hover:text-white"
                  >
                    Select
                  </button>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ PORTING ═══ */}
      <section id="porting" className="bg-[#F6F2E9] pb-5">
        <div className="mx-auto max-w-6xl px-5">
          <div className={`grid overflow-hidden ${cardBase} md:grid-cols-2`}>
            <Img
              src={IMAGES.porting.src}
              alt={IMAGES.porting.alt}
              className="h-[240px] w-full md:h-full md:min-h-[300px]"
              rounded="rounded-none"
            />
            <div className="p-7 md:p-8">
              <span className="inline-block rounded-full bg-[#E1EFE6] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#20654A]">
                Keep your number
              </span>
              <h3 className={`mt-4 text-[22px] font-medium text-[#1A1A17] ${serif}`}>
                Keep your existing Canadian number
              </h3>
              <p className="mt-3 text-[13px] leading-7 text-[#5C5C55]">
                Many numbers may be portable, but eligibility depends on the number, provider, service
                area, and account information.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Check portability before canceling your current service.",
                  "We'll show you exactly what's needed — no guesswork.",
                  "Your current service stays active until the transfer completes.",
                ].map((p) => (
                  <li
                    key={p}
                    className="relative pl-5 text-[12.5px] leading-6 text-[#5C5C55] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#B4AC9C]"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-6 h-12 w-full rounded-full bg-[#D24A22] text-[14px] font-semibold text-white transition hover:bg-[#B23C1A]"
              >
                Check portability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CALLER IDENTITY ═══ */}
      <section className="bg-[#F6F2E9] pb-5">
        <div className="mx-auto max-w-6xl px-5">
          <div className={`grid overflow-hidden ${cardBase} md:grid-cols-2`}>
            <div className="order-2 p-7 md:order-1 md:p-8">
              <span className="inline-block rounded-full bg-[#F7E7DF] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#C2421F]">
                Caller identity
              </span>
              <h3 className={`mt-4 text-[22px] font-medium text-[#1A1A17] ${serif}`}>
                Caller ID, spam, and telemarketing rules
              </h3>
              <p className="mt-3 text-[13px] leading-7 text-[#5C5C55]">
                Zoiko Local uses caller-identity and network trust controls designed to support
                legitimate communications, alongside CRTC unsolicited-communications rules.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Only numbers assigned or authorized to your account can be used as caller ID.",
                  "Outbound telemarketing use is subject to the National DNCL and CRTC rules.",
                  "Caller-name display and spam labels depend partly on downstream carriers — they can't be guaranteed.",
                ].map((p) => (
                  <li
                    key={p}
                    className="relative pl-5 text-[12.5px] leading-6 text-[#5C5C55] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#B4AC9C]"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full border border-[#E6DFD1] text-[13px] font-semibold text-[#1A1A17] transition hover:border-[#1A1A17]"
              >
                Caller ID &amp; reputation help
              </Link>
            </div>

            <Img
              src={IMAGES.callerId.src}
              alt={IMAGES.callerId.alt}
              className="order-1 h-[240px] w-full md:order-2 md:h-full md:min-h-[300px]"
              rounded="rounded-none"
            />
          </div>
        </div>
      </section>

      {/* ═══ EMERGENCY CALLING ═══ */}
      {/* Own <section> + heading so it's reachable by landmark navigation.
          See the safety note at the top of this file. */}
      <section aria-labelledby="emergency-heading" className="bg-[#F6F2E9] pb-5">
        <div className="mx-auto max-w-6xl px-5">
          <div className={`grid overflow-hidden ${cardBase} md:grid-cols-2`}>
            <Img
              src={IMAGES.emergency.src}
              alt={IMAGES.emergency.alt}
              className="h-[240px] w-full md:h-full md:min-h-[300px]"
              rounded="rounded-none"
            />
            <div className="p-7 md:p-8">
              <span className="inline-block rounded-full bg-[#FAE3E0] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#A8352A]">
                Safety
              </span>
              <h3 id="emergency-heading" className={`mt-4 text-[22px] font-medium text-[#1A1A17] ${serif}`}>
                Emergency calling: 9-1-1 and NG9-1-1
              </h3>
              <p className="mt-3 text-[13px] leading-7 text-[#5C5C55]">
                Emergency calling depends on the exact VoIP service configuration and may require a
                registered emergency address — never assumed from a Canadian number alone.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Nomadic use may affect how your location reaches emergency services — keep your registered address current.",
                  "Canada continues an active NG9-1-1 transition; check the current status shown for your service.",
                  "Check the emergency-calling status shown for your service before relying on it.",
                ].map((p) => (
                  <li
                    key={p}
                    className="relative pl-5 text-[12.5px] leading-6 text-[#5C5C55] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#B4AC9C]"
                  >
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href="#"
                className="mt-6 inline-flex h-11 w-full items-center justify-center rounded-full border border-[#E6DFD1] text-[13px] font-semibold text-[#1A1A17] transition hover:border-[#1A1A17]"
              >
                Learn about emergency calling
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9-8-8 ═══ */}
      {/* role="note" not "alert": standing safety guidance, not a live event.
          Wording is exact — 9-8-8 routing is confirmed from service state,
          never assumed, and 9-1-1 is named for immediate danger. */}
      <section aria-labelledby="crisis-heading" className="bg-[#F6F2E9] pb-5">
        <div className="mx-auto max-w-6xl px-5">
          <div
            role="note"
            className="flex items-start gap-4 rounded-2xl border border-[#D6CFEA] bg-[#EAE5F4] p-6"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5B4B8A] text-white">
              <FiAlertCircle className="text-[14px]" aria-hidden />
            </span>
            <div>
              <h3 id="crisis-heading" className="text-[14px] font-bold text-[#1A1A17]">
                9-8-8: Suicide Crisis Helpline
              </h3>
              <p className="mt-1.5 text-[12.5px] leading-6 text-[#4A4560]">
                Canada operates 9-8-8 nationally by call and text. Whether a Zoiko Local configuration
                routes 9-8-8 is confirmed from your live service state — it&apos;s never assumed from
                a +1 number. For immediate, life-threatening danger, use 9-1-1.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CASL + LANGUAGE ═══ */}
      <section className="bg-[#F6F2E9] py-5 pb-14 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2">
          <div className={`${cardBase} p-6`}>
            <h3 className={`text-[18px] font-medium text-[#1A1A17] ${serif}`}>
              Messaging eligibility &amp; CASL
            </h3>
            <p className="mt-2.5 text-[12.5px] leading-6 text-[#5C5C55]">
              Business messaging may require verified identity, and commercial electronic messages
              need consent, identification, and unsubscribe handling under CASL.
            </p>
            <dl className="mt-5">
              {caslRows.map((r, i) => (
                <div
                  key={r.label}
                  className={`flex flex-wrap items-center justify-between gap-3 py-3.5 ${
                    i > 0 ? "border-t border-[#EFE9DC]" : ""
                  }`}
                >
                  <dt className="text-[12.5px] text-[#3F3F39]">{r.label}</dt>
                  <dd>
                    <Pill label={r.state} tone={r.tone} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={`${cardBase} p-6`}>
            <h3 className={`text-[18px] font-medium text-[#1A1A17] ${serif}`}>English/French service</h3>
            <p className="mt-2.5 text-[12.5px] leading-6 text-[#5C5C55]">
              Telecommunications is federally regulated, and French-language obligations vary by
              regulatory regime and geography — including Québec&apos;s own language framework.
            </p>
            <dl className="mt-5">
              {languageRows.map((r, i) => (
                <div
                  key={r.label}
                  className={`flex flex-wrap items-center justify-between gap-3 py-3.5 ${
                    i > 0 ? "border-t border-[#EFE9DC]" : ""
                  }`}
                >
                  <dt className="text-[12.5px] text-[#3F3F39]">{r.label}</dt>
                  <dd>
                    <Pill label={r.state} tone={r.tone} />
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ═══ WHY ZOIKO ═══ */}
      <section className="bg-[#F6F2E9] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid overflow-hidden rounded-2xl md:grid-cols-2">
            <div className="bg-[#153F2E] p-8 md:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8B49A]">
                Why Zoiko Local
              </p>
              <h2 className={`mt-4 text-[28px] font-medium leading-tight text-white ${serif}`}>
                Built for how Canadian businesses actually communicate.
              </h2>

              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                {whyPoints.map((p) => (
                  <div key={p.title}>
                    <dt className="text-[13.5px] font-bold text-white">{p.title}</dt>
                    <dd className="mt-1.5 text-[12px] leading-6 text-white/65">{p.body}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <Img
              src={IMAGES.business.src}
              alt={IMAGES.business.alt}
              className="min-h-[280px] w-full"
              rounded="rounded-none"
            />
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-[#F6F2E9] pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-5">
          <Eyebrow>FAQ</Eyebrow>
          <H2>Canadian local number questions</H2>

          <div className="mt-8 border-t border-[#E1D9C8]">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-b border-[#E1D9C8]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[13.5px] font-bold leading-6 text-[#1A1A17]">{f.q}</span>
                    <span className="mt-0.5 shrink-0 text-[13px] text-[#C2421F]">
                      {open ? <FiX aria-hidden /> : <FiPlus aria-hidden />}
                    </span>
                  </button>
                  {open && (
                    <p className="pb-5 pr-8 text-[12.5px] leading-7 text-[#5C5C55]">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>

          <p className="mt-8 flex items-start gap-2.5 text-[11.5px] leading-5 text-[#8C8271]">
            <FiInfo className="mt-0.5 shrink-0" aria-hidden />
            Numbers, area codes and pricing shown on this page are illustrative for layout. Live
            availability, capability, verification requirements and pricing are resolved from current
            inventory at the time of search.
          </p>
        </div>
      </section>
    </main>
  );
}