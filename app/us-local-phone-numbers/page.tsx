"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiInfo, FiPlus, FiSearch, FiX } from "react-icons/fi";

const IMAGES = {
  hero: { src: "/images/U.S. city skyline representing local business presence.png", alt: "Looking up at a glass office tower" },
  newYork: { src: "/images/New York City skyline.png", alt: "New York skyline at sunset" },
  losAngeles: { src: "/images/Los Angeles skyline.png", alt: "A theatre marquee in Los Angeles" },
  chicago: { src: "/images/Chicago skyline.png", alt: "The Chicago skyline from the lakefront" },
  houston: { src: "/images/Houston skyline.png", alt: "Colleagues talking in Houston" },
  miami: { src: "/images/Miami skyline.png", alt: "Miami waterfront at sunset" },
  sanFrancisco: { src: "/images/San Francisco skyline.png", alt: "Blue flowering plants in the Bay Area" },
  porting: { src: "/images/Office desk with laptop and phone (1).png", alt: "An office doorway with filing cabinets" },
  callerId: { src: "/images/Customer support representative (1).png", alt: "A support agent wearing a headset" },
  emergency: { src: "/images/Emergency services concept (1.png", alt: "An orange roadside emergency call box" },
  business: { src: "/images/Team working together in a small business setting (1).png", alt: "A small business team standing in their shop" },
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

const cities = [
  { name: "New York", image: IMAGES.newYork, codes: ["212", "646", "332"], body: "Manhattan's classic area codes remain some of the most requested in the country." },
  { name: "Los Angeles", image: IMAGES.losAngeles, codes: ["213", "310", "323"], body: "Multiple overlay codes serve the greater LA metro area." },
  { name: "Chicago", image: IMAGES.chicago, codes: ["312", "773", "872"], body: "A recognizable downtown code for teams serving the Midwest." },
  { name: "Houston", image: IMAGES.houston, codes: ["713", "281", "832"], body: "One of the fastest-growing business markets in the South." },
  { name: "Miami", image: IMAGES.miami, codes: ["305", "786", "645"], body: "A local presence for teams serving South Florida and Latin America." },
  { name: "San Francisco", image: IMAGES.sanFrancisco, codes: ["415", "628"], body: "Bay Area identity for teams building on the West Coast." },
];

const steps = [
  { n: "1", title: "Search", body: "Look up a location or area code." },
  { n: "2", title: "Choose", body: "Select an available eligible number." },
  { n: "3", title: "Choose a plan", body: "Confirm or sign in to an eligible plan." },
  { n: "4", title: "Verify", body: "Complete any required verification." },
  { n: "5", title: "Go live", body: "Start communicating on your number." },
];

const capabilities = [
  { key: "C", title: "Calling", body: "Inbound and outbound calling on your entitled U.S. numbers.", tag: "Plan dependent" },
  { key: "M", title: "Messaging", body: "SMS/MMS where the number, carrier, and registration support it.", tag: "Eligibility varies" },
  { key: "V", title: "Video", body: "Join or start video conversations from supported apps.", tag: "Plan dependent" },
  { key: "AI", title: "AI Receptionist", body: "Answer, route, and capture messages with a configured assistant.", tag: "Market & plan dependent" },
  { key: "P", title: "Porting", body: "Bring an eligible existing U.S. number, subject to a portability check.", tag: "Eligibility varies" },
  { key: "A", title: "Web & mobile apps", body: "Manage your number from supported web, iOS, and Android clients.", tag: "Where available" },
];

const availableNumbers = [
  { number: "(212) 555-0148", place: "New York, NY", caps: [{ label: "Voice", tone: "ok" }, { label: "SMS eligible", tone: "ok" }], price: "$4.99/mo" },
  { number: "(415) 555-0172", place: "San Francisco, CA", caps: [{ label: "Voice", tone: "ok" }, { label: "Registration required", tone: "warn" }], price: "$4.99/mo" },
  { number: "(305) 555-0113", place: "Miami, FL", caps: [{ label: "Voice", tone: "ok" }, { label: "SMS eligible", tone: "ok" }], price: "$4.99/mo" },
];

const messagingRows = [
  { label: "Transactional messages", state: "Eligible", tone: "ok" },
  { label: "Marketing/bulk messages", state: "Registration required", tone: "warn" },
  { label: "New numbers", state: "Confirmed at activation", tone: "warn" },
];

const abroadRows = [
  { label: "Calling & messaging abroad", state: "App dependent", tone: "ok" },
  { label: "Emergency calling abroad", state: "Not assumed", tone: "warn" },
];

const whyPoints = [
  { title: "Recognizable local identity", body: "Choose an eligible number tied to a supported U.S. locality." },
  { title: "One number, every channel", body: "Calling, and where your plan includes them, messaging and video." },
  { title: "Plan-based control", body: "Add numbers, users, and capabilities as your business grows." },
  { title: "Trust by design", body: "Caller identity, AUP, and accessibility built into the product." },
];

const faqs = [
  {
    q: "What is a U.S. local phone number?",
    a: "A U.S. local number uses country code +1 and a U.S. area code associated with a numbering region. The area code does not prove that the number owner has a physical office in that location.",
  },
  {
    q: "How do I get a U.S. local number?",
    a: "Search by city, state, or area code, select an available eligible number, confirm or sign in to an eligible plan, complete any required verification, and go live.",
  },
  {
    q: "Can I choose any U.S. area code?",
    a: "You can search by area code, but you can only select from numbers currently available in inventory for a supported locality. Availability updates in real time and isn't a fixed list.",
  },
  {
    q: "Can I get a U.S. number if I live outside the United States?",
    a: "You can access your number while traveling or working outside the United States through supported Zoiko Local apps. A U.S. number doesn't create U.S. physical presence, and emergency calling remains especially location-sensitive.",
  },
  {
    q: "Can I port my existing U.S. number?",
    a: "Many numbers may be portable, but eligibility depends on the number, provider, geography, and account information. Check portability before canceling your current service — your current service stays active until the transfer completes.",
  },
  {
    q: "Does every U.S. number support SMS and MMS?",
    a: "No. Messaging depends on the number, the carrier, and whether registration and program approval requirements are met. Each number in search shows its own capabilities — never assumed from the area code alone.",
  },
  {
    q: "Can I call 911 with Zoiko Local?",
    a: "Emergency calling depends on the exact service configuration and may require a registered emergency address. It's never assumed from a U.S. number alone, so keep your registered emergency address current and check the emergency-calling status shown for your service before relying on it.",
  },
  {
    q: "What is 988?",
    a: "988 is the Suicide & Crisis Lifeline in the United States. Whether a Zoiko Local configuration routes 988 depends on your live voice configuration — it is never assumed from a U.S. number alone. For immediate, life-threatening danger, call 911.",
  },
];

const cardBase = "rounded-2xl border border-[#E6DFD1] bg-white";
const serif = "font-serif";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8C8271]">{children}</p>;
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

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2">
      {items.map((p) => (
        <li
          key={p}
          className="relative pl-5 text-[12.5px] leading-6 text-[#5C5C55] before:absolute before:left-0 before:top-[9px] before:h-1 before:w-1 before:rounded-full before:bg-[#B4AC9C]"
        >
          {p}
        </li>
      ))}
    </ul>
  );
}

export default function UsLocalNumbers() {
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#F6F2E9]">
      <section className="relative">
        <div className="grid lg:grid-cols-[1.05fr_1fr]">
          <div className="px-5 py-14 md:py-20 lg:pl-[max(1.25rem,calc((100vw-72rem)/2))] lg:pr-12">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[11.5px] font-bold uppercase tracking-[0.12em] text-[#1A1A17]">
              <span aria-hidden>🇺🇸</span> United States · +1
            </p>

            <h1 className={`mt-6 max-w-xl text-[42px] font-medium leading-[1.08] tracking-tight text-[#1A1A17] md:text-[52px] ${serif}`}>
              Get a U.S. local number for calling and{" "}
              <span className="italic text-[#C2421F]">business</span> communications.
            </h1>

            <p className="mt-6 max-w-lg text-[14px] leading-7 text-[#5C5C55]">
              Find an eligible U.S. local number by city, state, or area code, then use Zoiko Local
              for calling and other communications capabilities included with your plan.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#search"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#D24A22] px-7 text-[14px] font-semibold text-white transition hover:bg-[#B23C1A]"
              >
                Find a U.S. number
              </Link>
              <Link
                href="#porting"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#1A1A17] px-7 text-[14px] font-semibold text-[#1A1A17] transition hover:bg-white"
              >
                Port my existing number
              </Link>
            </div>
          </div>

          <Img
            src={IMAGES.hero.src}
            alt={IMAGES.hero.alt}
            className="min-h-[320px] w-full lg:min-h-full"
            rounded="rounded-none"
          />
        </div>

        <div id="search" className="mx-auto max-w-6xl px-5 pb-14">
          <div className={`-mt-8 ${cardBase} p-6 shadow-sm md:p-7`}>
            <label htmlFor="num-search" className="block text-[13px] font-bold text-[#1A1A17]">
              Search by city, state, or area code
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <input
                id="num-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Austin, Texas, or 512"
                className="h-12 flex-1 rounded-full border border-[#E6DFD1] bg-[#FBF8F1] px-5 text-[13.5px] text-[#1A1A17] placeholder:text-[#A79C86] focus:border-[#D24A22] focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#D24A22] px-7 text-[14px] font-semibold text-white transition hover:bg-[#B23C1A]"
              >
                <FiSearch aria-hidden /> Search numbers
              </button>
            </div>

            <p className="mt-3 text-[12.5px] text-[#5C5C55]">
              Try{" "}
              {["New York", "Texas", "415"].map((t, i) => (
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

            <p className="mt-3 flex items-start gap-2 text-[11.5px] leading-5 text-[#8C8271]">
              <span className="mt-1 text-[#D24A22]" aria-hidden>
                •
              </span>
              Availability updates in real time and can vary by location, plan, verification, and
              number capability.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#F6F2E9] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Explore U.S. local numbers</Eyebrow>
          <H2>Popular business markets</H2>
          <p className="mt-4 max-w-xl text-[13.5px] leading-7 text-[#5C5C55]">
            Shown here for layout — live availability and area codes are resolved from current
            inventory, not a fixed list.
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

      <section className="bg-[#F6F2E9] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Getting started</Eyebrow>
          <H2>How to get a U.S. local number</H2>

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

      <section className="bg-[#F6F2E9] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Capabilities</Eyebrow>
          <H2>More than a phone number</H2>
          <p className="mt-4 max-w-lg text-[13.5px] leading-7 text-[#5C5C55]">
            Use Zoiko Local for calling and, where your plan includes them, messaging, video, and
            AI-assisted communications.
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
                className={`flex flex-wrap items-center gap-4 p-5 ${i > 0 ? "border-t border-[#EFE9DC]" : ""}`}
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
                Keep your existing U.S. number
              </h3>
              <p className="mt-3 text-[13px] leading-7 text-[#5C5C55]">
                Many numbers may be portable, but eligibility depends on the number, provider,
                geography, and account information.
              </p>
              <Bullets
                items={[
                  "Check portability before canceling your current service.",
                  "We'll show you exactly what's needed — no guesswork.",
                  "Your current service stays active until the transfer completes.",
                ]}
              />
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

      <section className="bg-[#F6F2E9] pb-5">
        <div className="mx-auto max-w-6xl px-5">
          <div className={`grid overflow-hidden ${cardBase} md:grid-cols-2`}>
            <div className="order-2 p-7 md:order-1 md:p-8">
              <span className="inline-block rounded-full bg-[#F7E7DF] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.1em] text-[#C2421F]">
                Caller identity
              </span>
              <h3 className={`mt-4 text-[22px] font-medium text-[#1A1A17] ${serif}`}>
                Caller identity and trusted communications
              </h3>
              <p className="mt-3 text-[13px] leading-7 text-[#5C5C55]">
                Zoiko Local uses caller-identity and network trust controls designed to support
                legitimate communications.
              </p>
              <Bullets
                items={[
                  "Only numbers assigned or authorized to your account can be used as caller ID.",
                  "Caller-name display and spam labels depend partly on downstream carriers and devices — they can't be guaranteed.",
                  "If your legitimate business calls are mislabeled, our support route can help.",
                ]}
              />
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

      <section aria-labelledby="emergency-heading" className="bg-[#F6F2E9] pb-14 md:pb-20">
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
                Emergency calling in the United States
              </h3>
              <p className="mt-3 text-[13px] leading-7 text-[#5C5C55]">
                Emergency calling depends on the exact service configuration and may require a
                registered emergency address.
              </p>
              <Bullets
                items={[
                  "Check the emergency-calling status shown for your service before relying on it.",
                  "988 (Suicide & Crisis Lifeline) routing depends on your live voice configuration — never assumed from a U.S. number alone.",
                  "Keep your registered emergency address current if your service requires one.",
                ]}
              />
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

      <section className="bg-[#F6F2E9] pb-14 md:pb-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2">
          <div className={`${cardBase} p-6`}>
            <h3 className={`text-[18px] font-medium text-[#1A1A17] ${serif}`}>
              U.S. messaging availability
            </h3>
            <p className="mt-2.5 text-[12.5px] leading-6 text-[#5C5C55]">
              Business messaging may require verified identity, consent, and carrier or program
              approval.
            </p>
            <dl className="mt-5">
              {messagingRows.map((r, i) => (
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
            <h3 className={`text-[18px] font-medium text-[#1A1A17] ${serif}`}>
              Use your U.S. number from supported apps
            </h3>
            <p className="mt-2.5 text-[12.5px] leading-6 text-[#5C5C55]">
              Access your number while traveling or working outside the United States through
              supported Zoiko Local apps — a U.S. number doesn&apos;t create U.S. physical presence,
              and emergency calling remains especially location-sensitive.
            </p>
            <dl className="mt-5">
              {abroadRows.map((r, i) => (
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

      <section className="bg-[#F6F2E9] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid overflow-hidden rounded-2xl md:grid-cols-2">
            <div className="bg-[#153F2E] p-8 md:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8B49A]">
                Why Zoiko Local
              </p>
              <h2 className={`mt-4 text-[28px] font-medium leading-tight text-white ${serif}`}>
                Built for how U.S. businesses actually communicate.
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

      <section className="bg-[#F6F2E9] pb-16 md:pb-24">
        <div className="mx-auto max-w-3xl px-5">
          <Eyebrow>FAQ</Eyebrow>
          <H2>U.S. local number questions</H2>

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
                  {open && <p className="pb-5 pr-8 text-[12.5px] leading-7 text-[#5C5C55]">{f.a}</p>}
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