"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiCheckCircle,
  FiEdit3,
  FiGlobe,
  FiInfo,
  FiMessageCircle,
  FiMic,
  FiPhone,
  FiPlus,
  FiSearch,
  FiSlash,
  FiSmartphone,
  FiVideo,
  FiX,
} from "react-icons/fi";

const IMAGES = {
  hero: { src: "/images/europe/hero-call.jpg", alt: "A person taking a call in a bright office" },
  france: { src: "/images/europe/country-france.jpg", alt: "Rooftops across central Paris" },
  germany: { src: "/images/europe/country-germany.jpg", alt: "The Brandenburg Gate in Berlin" },
  spain: { src: "/images/europe/country-spain.jpg", alt: "A palace in Madrid behind trees" },
  italy: { src: "/images/europe/country-italy.jpg", alt: "The Colosseum in Rome" },
  netherlands: { src: "/images/europe/country-netherlands.jpg", alt: "Canal houses in Amsterdam" },
  portugal: { src: "/images/europe/country-portugal.jpg", alt: "Terracotta rooftops in Lisbon" },
  requirements: { src: "/images/europe/requirements-signing.jpg", alt: "Two people reviewing and signing documents" },
  porting: { src: "/images/europe/porting-passport.jpg", alt: "A passport and boarding pass on a table" },
  accessibility: { src: "/images/europe/accessibility-agents.jpg", alt: "Support agents wearing headsets" },
  callerId: { src: "/images/europe/caller-identity.jpg", alt: "A person on a call at a desk" },
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

const GROUPS = ["All supported", "EU", "EEA", "Other Europe"] as const;

type Status = "Live" | "Limited" | "Assisted" | "Coming soon";

const countryRows: { name: string; flag: string; code: string; status: Status; groups: string[] }[] = [
  { name: "France", flag: "🇫🇷", code: "+33", status: "Live", groups: ["EU", "EEA"] },
  { name: "Germany", flag: "🇩🇪", code: "+49", status: "Live", groups: ["EU", "EEA"] },
  { name: "Spain", flag: "🇪🇸", code: "+34", status: "Live", groups: ["EU", "EEA"] },
  { name: "Italy", flag: "🇮🇹", code: "+39", status: "Limited", groups: ["EU", "EEA"] },
  { name: "Netherlands", flag: "🇳🇱", code: "+31", status: "Live", groups: ["EU", "EEA"] },
  { name: "Portugal", flag: "🇵🇹", code: "+351", status: "Limited", groups: ["EU", "EEA"] },
  { name: "Ireland", flag: "🇮🇪", code: "+353", status: "Assisted", groups: ["EU", "EEA"] },
  { name: "Sweden", flag: "🇸🇪", code: "+46", status: "Assisted", groups: ["EU", "EEA"] },
  { name: "Poland", flag: "🇵🇱", code: "+48", status: "Coming soon", groups: ["EU", "EEA"] },
  { name: "Switzerland", flag: "🇨🇭", code: "+41", status: "Assisted", groups: ["Other Europe"] },
];

const countryCards = [
  { name: "France", flag: "🇫🇷", code: "+33", status: "Live", image: IMAGES.france, body: "Local/geographic and other supported number types.", note: "Local & national numbers" },
  { name: "Germany", flag: "🇩🇪", code: "+49", status: "Live", image: IMAGES.germany, body: "Geographic number rules and locality eligibility.", note: "Local & non-geographic" },
  { name: "Spain", flag: "🇪🇸", code: "+34", status: "Live", image: IMAGES.spain, body: "Geographic and number-type-specific rules.", note: "Local numbers" },
  { name: "Italy", flag: "🇮🇹", code: "+39", status: "Limited", image: IMAGES.italy, body: "Country-specific formatting; no generic trunk-zero rule applied.", note: "Select localities" },
  { name: "Netherlands", flag: "🇳🇱", code: "+31", status: "Live", image: IMAGES.netherlands, body: "Geographic and non-geographic number distinctions.", note: "Local numbers" },
  { name: "Portugal", flag: "🇵🇹", code: "+351", status: "Limited", image: IMAGES.portugal, body: "Country-specific numbering and portability rules.", note: "Select localities" },
];

const assistedCards = [
  { flag: "🇮🇪", name: "Ireland", body: "+353 · Sales/verification-assisted provisioning where self-service isn't yet available.", cta: "Learn more" },
  { flag: "🇸🇪", name: "Sweden", body: "+46 · National rules and local numbering, assisted onboarding.", cta: "Learn more" },
  { flag: "🇬🇧", name: "United Kingdom", body: "+44 · Governed separately on its own dedicated page.", cta: "Visit UK page" },
];

const steps = [
  { n: "1", title: "Choose country", body: "Select the market you need a number in." },
  { n: "2", title: "Search number", body: "Browse live inventory for that country only." },
  { n: "3", title: "Review requirements", body: "See identity, address, and use-case rules." },
  { n: "4", title: "Choose plan", body: "Match capabilities to what you need." },
  { n: "5", title: "Verify & activate", body: "Complete checks, then go live." },
];

const requirements = [
  { label: "Identity", body: "Individual or authorized business representative verification." },
  { label: "Address", body: "May be required for some geographic ranges or provider policies." },
  { label: "Business", body: "Registration details or VAT ID where required." },
  { label: "Use case", body: "Business, support, personal, marketing, or automated classification." },
];

const capabilities = [
  { icon: <FiPhone />, title: "Voice", body: "Inbound/outbound calling on entitled numbers.", tag: null },
  { icon: <FiMessageCircle />, title: "Messaging", body: "Where technically and legally supported.", tag: "If eligible" },
  { icon: <FiVideo />, title: "Video", body: "Platform capability, not a number property.", tag: "Plan dependent" },
  { icon: <FiMic />, title: "AI Receptionist", body: "Market, language, and release dependent.", tag: "Plan dependent" },
  { icon: <FiSmartphone />, title: "Apps", body: "Manage your European numbers on web and mobile.", tag: null },
];

const pricingRows = [
  { flag: "🇫🇷", country: "France", fee: "Illustrative", currency: "EUR", tax: "VAT resolved at checkout" },
  { flag: "🇩🇪", country: "Germany", fee: "Illustrative", currency: "EUR", tax: "VAT resolved at checkout" },
  { flag: "🇸🇪", country: "Sweden", fee: "Illustrative", currency: "SEK", tax: "VAT resolved at checkout" },
  { flag: "🇨🇭", country: "Switzerland", fee: "Illustrative", currency: "CHF", tax: "Swiss VAT rules apply" },
];

const portingSteps = [
  { label: "Check", body: "Country, number type, and provider path." },
  { label: "Authorize", body: "Country/provider-specific authorization." },
  { label: "Complete", body: "Verify voice, messaging, and emergency state after transfer." },
];

const emergencyStates = [
  { dot: "bg-[#3FBE95]", title: "Active 112", body: "112 supported for this configured voice service; national codes listed only where validated." },
  { dot: "bg-[#E0A93B]", title: "Location required", body: "Emergency location must be collected and validated before this state applies." },
  { dot: "bg-[#E8694A]", title: "Not offered", body: "Clearly disclosed before purchase or activation — never inferred from EU membership." },
];

const marketingCards = [
  { icon: <FiCheckCircle />, title: "Technical capability", body: "SMS/MMS must be supported by the selected number and provider." },
  { icon: <FiEdit3 />, title: "Consent", body: "EU ePrivacy generally requires consent for direct marketing, with national variation." },
  { icon: <FiSlash />, title: "Right to object", body: "GDPR Article 21 objections are honored and surfaced clearly." },
  { icon: <FiGlobe />, title: "National rules", body: "Opt-in, suppression lists, and recordkeeping differ by country." },
];

const linkColumns = [
  { title: "Western Europe", links: ["France numbers", "Germany numbers", "Netherlands numbers", "Belgium numbers"] },
  { title: "Southern Europe", links: ["Spain numbers", "Italy numbers", "Portugal numbers", "Greece numbers"] },
  { title: "Northern Europe", links: ["Sweden numbers", "Denmark numbers", "Finland numbers", "Norway numbers"] },
  { title: "Other markets", links: ["Ireland numbers", "Switzerland numbers", "Poland numbers", "United Kingdom →"] },
];

const faqs = [
  {
    q: "Is there one European phone number country code?",
    a: "No. European countries use separate national calling codes and numbering plans. Choose a country first.",
  },
  {
    q: "Which European countries does Zoiko Local support?",
    a: "Only markets currently enabled in Zoiko Local's availability registry appear on this page — not every European country, and not a continent-wide promise. Status is shown per country as live, limited, assisted, or coming soon.",
  },
  {
    q: "Can I get a local European number if I live in another country?",
    a: "It depends on the country and number range. Eligibility is computed for the selected number range, not just the country, and some ranges require local identity, address, or business registration. Requirements are shown before you choose.",
  },
  {
    q: "Does every European local number support SMS?",
    a: "No. Messaging must be technically supported by the selected number and provider, and EU ePrivacy generally requires consent for direct marketing with national variation. Capability follows entitlement and country rules, not number ownership alone.",
  },
  {
    q: "Can I port a number between European countries?",
    a: "No. Portability is handled within each country's national numbering framework. A number from one European country does not become a number in another country through porting — its national identity is preserved.",
  },
  {
    q: "Can I call 112 with Zoiko Local?",
    a: "112 is available throughout the EU free of charge, but its existence in a country is not evidence that a given Zoiko configuration supports emergency communications — that's resolved per service, per country. Check the emergency state shown for your service before relying on it.",
  },
  {
    q: "Are European numbers always priced in euros?",
    a: "No. Display currency and VAT/tax treatment come from the country and customer profile — euro is never assumed for every European market. Sweden displays in SEK and Switzerland in CHF, for example.",
  },
  {
    q: "What's the difference between roaming and a local European number?",
    a: "They're separate. Using a supported European number through Zoiko apps while traveling is separate from EU mobile roaming rules, and number allocation never creates a legal establishment or tax presence in that country. Emergency services remain location-sensitive and are not portable across borders.",
  },
];

const cardBase = "rounded-2xl border border-[#E6DFD1] bg-white";

function Eyebrow({ children, centered = true }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#C2603F] ${
        centered ? "justify-center" : ""
      }`}
    >
      <span className="h-px w-5 bg-[#C2603F]" aria-hidden />
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mx-auto mt-4 max-w-3xl text-center text-3xl font-bold leading-[1.2] tracking-tight text-[#0E2A21] md:text-[36px]">
      {children}
    </h2>
  );
}

function statusClass(status: string) {
  if (status === "Live") return "bg-[#E1EFE6] text-[#20654A]";
  if (status === "Limited") return "bg-[#FAF1DE] text-[#8A6114]";
  if (status === "Assisted") return "bg-[#E4EDF7] text-[#2B5C9B]";
  return "bg-[#EDE7DB] text-[#6E6656]";
}

export default function EuropeLocalNumbers() {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState<(typeof GROUPS)[number]>("All supported");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return countryRows.filter((c) => {
      const okQuery = !q || c.name.toLowerCase().includes(q) || c.code.includes(q);
      const okGroup = group === "All supported" || c.groups.includes(group);
      return okQuery && okGroup;
    });
  }, [query, group]);

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Eyebrow centered={false}>Europe</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-[#0E2A21] md:text-[50px]">
              Get local phone numbers <span className="text-[#C2421F]">across Europe.</span>
            </h1>
            <p className="mt-5 max-w-lg text-[14px] leading-7 text-[#5C6660]">
              Choose a supported European country, search live local-number availability, and use
              Zoiko Local for calling and other communications capabilities included with your plan.
              Europe isn&apos;t one numbering market — every country keeps its own code, rules, and
              requirements.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#search"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#E85D3C] px-7 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#D14C2C]"
              >
                Choose a country
              </Link>
              <Link
                href="#countries"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#D9D2C4] bg-white px-7 text-[14px] font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
              >
                View supported countries
              </Link>
            </div>
          </div>

          <div className="relative">
            <Img src={IMAGES.hero.src} alt={IMAGES.hero.alt} className="h-[320px] w-full" />
            <span className="absolute -left-3 top-4 inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-lg">
              <span className="text-base" aria-hidden>
                🌍
              </span>
              <span className="leading-tight">
                <span className="block text-[12.5px] font-bold text-[#0E2A21]">Country-first</span>
                <span className="block text-[11px] text-[#8C8271]">Every market, its own rules</span>
              </span>
            </span>
            <span className="absolute -bottom-4 right-2 inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-lg">
              <FiPhone className="text-[#0E5C4E]" aria-hidden />
              <span className="leading-tight">
                <span className="block text-[12.5px] font-bold text-[#0E2A21]">+33 · +49 · +34…</span>
                <span className="block text-[11px] text-[#8C8271]">No single Europe code</span>
              </span>
            </span>
          </div>
        </div>
      </section>

      <section id="search" className="bg-[#F7F3EC] pb-14 md:pb-20">
        <div className="mx-auto max-w-5xl px-5">
          <Eyebrow>Step 1</Eyebrow>
          <H2>
            Search <span className="text-[#C2421F]">European countries.</span>
          </H2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[13.5px] leading-7 text-[#5C6660]">
            Number types, requirements, pricing, and availability vary by country.
          </p>

          <div className={`mt-10 ${cardBase} p-6 md:p-7`}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="country-search" className="sr-only">
                Search by country name or code
              </label>
              <input
                id="country-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by country name or code, e.g. Germany or +49"
                className="h-12 flex-1 rounded-full border border-[#E6DFD1] bg-white px-5 text-[13.5px] text-[#0E2A21] placeholder:text-[#A79C86] focus:border-[#E85D3C] focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#E85D3C] px-7 text-[14px] font-semibold text-white transition hover:bg-[#D14C2C]"
              >
                <FiSearch aria-hidden /> Search
              </button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Filter by region">
              {GROUPS.map((g) => {
                const on = g === group;
                return (
                  <button
                    key={g}
                    type="button"
                    aria-pressed={on}
                    onClick={() => setGroup(g)}
                    className={`h-9 rounded-full px-4 text-[12.5px] font-semibold transition ${
                      on ? "bg-[#0E3A32] text-white" : "bg-[#EDE7DB] text-[#5C6660] hover:text-[#0E2A21]"
                    }`}
                  >
                    {g}
                  </button>
                );
              })}
            </div>

            {filtered.length === 0 ? (
              <p className="mt-6 rounded-xl bg-[#EDE7DB] px-5 py-6 text-center text-[13px] text-[#5C6660]">
                No supported countries match that search.
              </p>
            ) : (
              <ul className="mt-5 space-y-2.5">
                {filtered.map((c) => (
                  <li key={c.name}>
                    <Link
                      href="#countries"
                      className="flex items-center justify-between gap-4 rounded-xl border border-[#EFE9DC] px-5 py-3.5 transition hover:border-[#0E2A21]"
                    >
                      <span className="flex items-center gap-3">
                        <span className="text-base" aria-hidden>
                          {c.flag}
                        </span>
                        <span className="text-[13.5px] font-bold text-[#0E2A21]">{c.name}</span>
                        <span className="text-[12.5px] text-[#8C8271]">{c.code}</span>
                      </span>
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${statusClass(c.status)}`}
                      >
                        {c.status}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </section>

      <section id="countries" className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Explore</Eyebrow>
          <H2>
            Supported European <span className="text-[#C2421F]">countries.</span>
          </H2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[13.5px] leading-7 text-[#5C6660]">
            Only markets currently enabled in Zoiko Local&apos;s availability registry appear here —
            not every European country, and not a continent-wide promise.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {countryCards.map((c) => (
              <article key={c.name} className="overflow-hidden rounded-2xl bg-white">
                <div className="relative">
                  <Img src={c.image.src} alt={c.image.alt} className="h-[140px] w-full" rounded="rounded-none" />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] ${statusClass(c.status)}`}
                  >
                    {c.status}
                  </span>
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#0E2A21]">
                    <span aria-hidden>{c.flag}</span> {c.code}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-[16px] font-bold text-[#0E2A21]">{c.name}</h3>
                  <p className="mt-2 text-[12.5px] leading-6 text-[#5C6660]">{c.body}</p>
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-[#EFE9DC] pt-4">
                    <span className="text-[12px] text-[#8C8271]">{c.note}</span>
                    <Link
                      href="#search"
                      className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#C2421F] hover:underline"
                    >
                      Search <FiArrowRight aria-hidden />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 grid gap-5 md:grid-cols-3">
            {assistedCards.map((c) => (
              <div key={c.name} className="rounded-2xl bg-white p-5">
                <h3 className="flex items-center gap-2 text-[15px] font-bold text-[#0E2A21]">
                  <span aria-hidden>{c.flag}</span> {c.name}
                </h3>
                <p className="mt-2.5 text-[12.5px] leading-6 text-[#5C6660]">{c.body}</p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#C2421F] hover:underline"
                >
                  {c.cta} <FiArrowRight aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Step 2</Eyebrow>
          <H2>
            How European local <span className="text-[#C2421F]">numbers work.</span>
          </H2>

          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <li key={s.n} className={`${cardBase} p-5 text-center`}>
                <span className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-[#0E3A32] text-[12.5px] font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-[13.5px] font-bold text-[#0E2A21]">{s.title}</h3>
                <p className="mt-1.5 text-[12px] leading-5 text-[#5C6660]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <Eyebrow centered={false}>Before you choose a number</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-[#0E2A21] md:text-[34px]">
              Country requirements, <span className="text-[#C2421F]">reviewed upfront.</span>
            </h2>
            <p className="mt-4 text-[13.5px] leading-7 text-[#5C6660]">
              Eligibility is computed for the selected number range, not just the country — two number
              types in the same country can carry different rules.
            </p>

            <dl className="mt-7 space-y-3">
              {requirements.map((r) => (
                <div
                  key={r.label}
                  className="grid gap-1 rounded-xl bg-white px-5 py-3.5 sm:grid-cols-[110px_1fr] sm:gap-4"
                >
                  <dt className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#C2421F]">
                    {r.label}
                  </dt>
                  <dd className="text-[12.5px] leading-6 text-[#3F4B45]">{r.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Img src={IMAGES.requirements.src} alt={IMAGES.requirements.alt} className="h-[380px] w-full" />
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>One platform, country-specific availability</Eyebrow>
          <H2>
            Calling, messaging, video, <span className="text-[#C2421F]">and AI — separately resolved.</span>
          </H2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[13.5px] leading-7 text-[#5C6660]">
            Capability follows entitlement and country rules, not number ownership alone.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((c) => (
              <div key={c.title} className={`${cardBase} p-5 text-center`}>
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#E4EFE9] text-[#0E5C4E]">
                  {c.icon}
                </span>
                <h3 className="mt-4 text-[14px] font-bold text-[#0E2A21]">{c.title}</h3>
                <p className="mt-2 text-[11.5px] leading-5 text-[#5C6660]">{c.body}</p>
                {c.tag && (
                  <span className="mt-3 inline-block rounded-full bg-[#FBEAE3] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.06em] text-[#C2421F]">
                    {c.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Plans &amp; pricing preview</Eyebrow>
          <H2>
            Multi-currency, <span className="text-[#C2421F]">not euro-only.</span>
          </H2>
          <p className="mx-auto mt-4 max-w-xl text-center text-[13.5px] leading-7 text-[#5C6660]">
            Display currency and VAT/tax treatment come from the country and customer profile — euro
            is never assumed for every European market.
          </p>

          <div className="mt-10 overflow-hidden rounded-xl border border-[#DDD3C2]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse text-left">
                <thead>
                  <tr className="bg-[#0E3A32]">
                    {["Country", "Number fee", "Currency", "Tax qualifier"].map((h) => (
                      <th
                        key={h}
                        scope="col"
                        className="px-5 py-3.5 text-[11px] font-bold uppercase tracking-[0.08em] text-white"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {pricingRows.map((r) => (
                    <tr key={r.country} className="border-t border-[#EFE9DC]">
                      <th scope="row" className="px-5 py-3.5 text-[12.5px] font-medium text-[#0E2A21]">
                        <span className="mr-2" aria-hidden>
                          {r.flag}
                        </span>
                        {r.country}
                      </th>
                      <td className="px-5 py-3.5 text-[12.5px] text-[#8C8271]">{r.fee}</td>
                      <td className="px-5 py-3.5 text-[12.5px] text-[#5C6660]">{r.currency}</td>
                      <td className="px-5 py-3.5 text-[12.5px] text-[#5C6660]">{r.tax}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <p className="mt-4 text-[11.5px] leading-5 text-[#8C8271]">
            Figures shown are illustrative placeholders for layout only. Actual plan price, number
            fee, and VAT/tax are resolved from the live Price Book and Tax Service at checkout.{" "}
            <Link href="#" className="font-semibold text-[#C2421F] hover:underline">
              View full pricing →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <Img src={IMAGES.porting.src} alt={IMAGES.porting.alt} className="h-[320px] w-full" />

          <div>
            <Eyebrow centered={false}>Keep an existing number</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-[#0E2A21] md:text-[34px]">
              Porting is <span className="text-[#C2421F]">national, not cross-border.</span>
            </h2>
            <p className="mt-4 text-[13.5px] leading-7 text-[#5C6660]">
              Portability is handled within each country&apos;s national numbering framework. A number
              from one European country does not become a number in another country through porting —
              its national identity is preserved.
            </p>

            <dl className="mt-7 space-y-3">
              {portingSteps.map((s) => (
                <div
                  key={s.label}
                  className={`grid gap-1 ${cardBase} px-5 py-3.5 sm:grid-cols-[110px_1fr] sm:gap-4`}
                >
                  <dt className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#C2421F]">
                    {s.label}
                  </dt>
                  <dd className="text-[12.5px] leading-6 text-[#3F4B45]">{s.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section aria-labelledby="emergency-heading" className="bg-[#0E3129] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8B49A]">
            <span className="h-px w-5 bg-[#E8B49A]" aria-hidden />
            Safety
          </p>
          <h2
            id="emergency-heading"
            className="mx-auto mt-4 max-w-2xl text-3xl font-bold leading-[1.2] text-white md:text-[36px]"
          >
            Emergency communications <span className="text-[#E8B49A]">and 112.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[13.5px] leading-7 text-white/70">
            112 is available throughout the EU free of charge. Its existence in a country is not
            evidence that a given Zoiko configuration supports emergency communications — that&apos;s
            resolved per service, per country.
          </p>

          <dl className="mt-10 grid gap-4 md:grid-cols-3">
            {emergencyStates.map((s) => (
              <div key={s.title} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-left">
                <dt className="flex items-center gap-2.5 text-[13.5px] font-bold text-white">
                  <span className={`h-2 w-2 shrink-0 rounded-full ${s.dot}`} aria-hidden />
                  {s.title}
                </dt>
                <dd className="mt-2 text-[12px] leading-5 text-white/65">{s.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <Eyebrow centered={false}>European Accessibility Act</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-[#0E2A21] md:text-[34px]">
              Accessible communications <span className="text-[#C2421F]">in Europe.</span>
            </h2>
            <p className="mt-4 text-[13.5px] leading-7 text-[#5C6660]">
              For covered EU electronic communications services, accessibility requirements include
              real-time text alongside voice, and total conversation where video is also provided —
              subject to the applicable service and national implementation. We don&apos;t claim
              &ldquo;EAA compliant across Europe&rdquo; until the service, provider, network, and PSAP
              paths are verified country by country.
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex h-11 items-center rounded-full border border-[#D9D2C4] bg-white px-6 text-[13px] font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
            >
              Accessibility information
            </Link>
          </div>

          <Img src={IMAGES.accessibility.src} alt={IMAGES.accessibility.alt} className="h-[300px] w-full" />
        </div>
      </section>

      <section className="bg-[#F7F3EC] pb-14 md:pb-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <Img src={IMAGES.callerId.src} alt={IMAGES.callerId.alt} className="h-[300px] w-full" />

          <div>
            <Eyebrow centered={false}>Responsible communications</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-[#0E2A21] md:text-[34px]">
              Caller identity, <span className="text-[#C2421F]">spoofing, and spam.</span>
            </h2>
            <p className="mt-4 text-[13.5px] leading-7 text-[#5C6660]">
              Caller-ID presentation rules differ by country, and customers may present only numbers
              assigned or authorized to their account. We don&apos;t guarantee caller-name display —
              many European networks and devices handle names differently — and high-risk automated or
              high-volume traffic can require enhanced verification under our AUP.
            </p>
            <Link
              href="#"
              className="mt-6 inline-flex h-11 items-center rounded-full border border-[#D9D2C4] bg-white px-6 text-[13px] font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
            >
              Acceptable Use Policy
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Messaging &amp; direct marketing</Eyebrow>
          <H2>
            ePrivacy, GDPR, and <span className="text-[#C2421F]">national rules.</span>
          </H2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {marketingCards.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-5 text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#E4EFE9] text-[#0E5C4E]">
                  {c.icon}
                </span>
                <h3 className="mt-4 text-[13.5px] font-bold text-[#0E2A21]">{c.title}</h3>
                <p className="mt-2 text-[11.5px] leading-5 text-[#5C6660]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-6xl px-5">
          <p className="flex items-start gap-2.5 rounded-xl border border-[#F0D8D0] bg-[#FDF3F0] px-5 py-4 text-[12px] leading-6 text-[#8A3B33]">
            <span className="mt-0.5 shrink-0" aria-hidden>
              ✈️
            </span>
            <span>
              <strong className="font-bold text-[#7E1B15]">
                Roaming is not local-number availability.
              </strong>{" "}
              Using a supported European number through Zoiko apps while traveling is separate from EU
              mobile roaming rules, and number allocation never creates a legal establishment or tax
              presence in that country. Emergency services remain location-sensitive and are not
              portable across borders.
            </span>
          </p>
        </div>
      </section>

      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Explore by market</Eyebrow>
          <H2>
            Country &amp; city <span className="text-[#C2421F]">pages.</span>
          </H2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {linkColumns.map((col) => (
              <nav key={col.title} aria-label={col.title} className="rounded-2xl bg-white p-5">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#8C8271]">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link href="#" className="text-[13px] text-[#0E2A21] transition hover:text-[#C2421F]">
                        {l}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <Eyebrow>FAQ</Eyebrow>
          <H2>
            European number <span className="text-[#C2421F]">questions.</span>
          </H2>

          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className={`overflow-hidden ${cardBase}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[13.5px] font-bold leading-6 text-[#0E2A21]">{f.q}</span>
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] transition ${
                        open ? "bg-[#E85D3C] text-white" : "bg-[#EDE7DB] text-[#0E2A21]"
                      }`}
                    >
                      {open ? <FiX aria-hidden /> : <FiPlus aria-hidden />}
                    </span>
                  </button>
                  {open && <p className="px-5 pb-5 text-[12.5px] leading-7 text-[#5C6660]">{f.a}</p>}
                </div>
              );
            })}
          </div>

          <p className="mt-8 flex items-start gap-2.5 text-[11.5px] leading-5 text-[#8C8271]">
            <FiInfo className="mt-0.5 shrink-0" aria-hidden />
            Country statuses, currencies and fees shown on this page are illustrative for layout. Live
            availability, requirements, capability and pricing are resolved per country at the time of
            search.
          </p>
        </div>
      </section>
    </main>
  );
}