"use client";

import React, { useState } from "react";
import Link from "next/link";
import { FiArrowRight, FiInfo, FiPlus, FiSearch, FiX } from "react-icons/fi";

const IMAGES = {
  hero: { src: "/images/Lagos Nigeria city skyline.png", alt: "Rooftops and skyline of Lagos, Nigeria" },
  lagos: { src: "/images/LagosNigeria.png", alt: "The Lagos skyline" },
  abuja: { src: "/images/AbujaNigeria.png", alt: "A domed landmark in Abuja" },
  porting: { src: "/images/Two people shaking hands in agreement.png", alt: "Two people shaking hands in an office" },
  verification: { src: "/images/A shop owner working at a counter (1).png", alt: "A shop owner standing in their store" },
  callerId: { src: "/images/Person using a laptop for account verification.png", alt: "Colleagues working at computers" },
  anywhere: { src: "/images/Person using a phone for business communications.png", alt: "A person taking a call at a desk" },
};

function Img({
  src,
  alt,
  className = "",
  rounded = "rounded-xl",
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

const locations = [
  { name: "Lagos", detail: "Access code 0201", image: IMAGES.lagos },
  { name: "Abuja", detail: "Access code 0209", image: IMAGES.abuja },
  { name: "Ibadan", detail: "Access code 0202", image: null },
  { name: "Port Harcourt", detail: "Access code 02084", image: null },
  { name: "Kano", detail: "Check current allocation", image: null },
  { name: "Kaduna", detail: "Check current allocation", image: null },
  { name: "Enugu", detail: "Check current allocation", image: null },
  { name: "Benin City", detail: "Check current allocation", image: null },
];

const steps = [
  { n: "01", title: "Search", body: "Search a supported city or numbering area." },
  { n: "02", title: "Select", body: "Choose a live, eligible number." },
  { n: "03", title: "Plan", body: "Select or confirm an eligible plan." },
  { n: "04", title: "Verify", body: "Complete required subscriber/business verification." },
  { n: "05", title: "Activate", body: "Finish activation and configure your number." },
];

const capabilities = [
  { title: "Calling", body: "Inbound and outbound calling where the number, route, and plan support it.", tag: "Number dependent", tone: "ok" },
  { title: "Messaging", body: "SMS/MMS only where technically supported and compliant with DND/consent rules.", tag: "Not guaranteed", tone: "warn" },
  { title: "Video", body: "Platform capability, plan dependent.", tag: "Plan dependent", tone: "warn" },
  { title: "AI Receptionist", body: "Availability depends on plan, language, and release.", tag: "Plan dependent", tone: "warn" },
  { title: "Web & mobile apps", body: "Manage your Nigerian number from supported devices.", tag: "Included", tone: "ok" },
];

const portingSteps = [
  { label: "Check", body: "supportability review for your specific number." },
  { label: "Authorize", body: "provider-specific authorization required." },
  { label: "Complete", body: "voice, messaging, and emergency state verified after transfer." },
];

const verificationRows = [
  { label: "Identity", body: "account owner or authorized representative." },
  { label: "NIN / identifier", body: "only where the applicable rules or workflow require it." },
  { label: "Business evidence", body: "where provider or use-case rules require it." },
];

const emergencyStates = [
  { dot: "bg-[#3FBE95]", title: "Active", body: "112 routing confirmed for your configured Nigerian service." },
  { dot: "bg-[#E0A93B]", title: "Route validation required", body: "Not active for emergency use until provider/network validation completes." },
  { dot: "bg-[#E8694A]", title: "Not offered", body: "Disclosed before purchase or activation, with alternative safety guidance." },
];

const messagingRows = [
  { label: "DND (2442)", body: "We honor upstream NCC Do-Not-Disturb preferences alongside our own suppression system.", tag: "Enforced", tone: "ok" },
  { label: "Consent", body: "Marketing, service, and transactional messages are classified and consented separately.", tag: "Required", tone: "ok" },
  { label: "List uploads", body: "You can't target a list merely because numbers are publicly available.", tag: "Restricted", tone: "warn" },
  { label: "Abuse detection", body: "Number cycling, high complaint rates, and suppression evasion are monitored under our AUP.", tag: "Monitored", tone: "warn" },
];

const trustRows = [
  { label: "Lawful supply", body: "Numbers are offered through an approved supply chain — Zoiko does not claim to be an NCC allocation holder or network operator unless verified.", tag: "Verified" },
  { label: "Live inventory only", body: "Search results reflect current provider inventory, not cached or hard-coded listings.", tag: "Live" },
  { label: "Clear capability states", body: "Calling, messaging, video, AI, and emergency routing are each independently disclosed.", tag: "Transparent" },
];

const linkColumns = [
  { title: "Southwest", links: ["Lagos numbers", "Ibadan numbers", "Abeokuta numbers"] },
  { title: "North Central", links: ["Abuja numbers", "Ilorin numbers"] },
  { title: "South South", links: ["Port Harcourt numbers", "Uyo numbers", "Calabar numbers"] },
  { title: "North", links: ["Kano numbers", "Kaduna numbers"] },
];

const faqs = [
  {
    q: "What is Nigeria's country code?",
    a: "Nigeria's international country code is +234.",
  },
  {
    q: "What is a Nigerian local or geographic number?",
    a: "A Nigerian local number uses a fixed access code tied to a numbering area — for example 0201 for Lagos or 0209 for Abuja. The access code is a numbering association, not proof that the number owner has an office in that area.",
  },
  {
    q: "What are the current Lagos and Abuja fixed access codes?",
    a: "Lagos is commonly 0201 and Abuja 0209, but current access codes are resolved from live numbering metadata at search time. The list on this page is illustrative and not a guarantee of live inventory.",
  },
  {
    q: "How do I get a Nigerian number?",
    a: "Search a supported city or numbering area, choose a live eligible number, select or confirm an eligible plan, complete the required subscriber or business verification, then finish activation and configure your number.",
  },
  {
    q: "Can I get a Nigerian number if I live outside Nigeria?",
    a: "You may use a supported Nigerian number from outside Nigeria via Zoiko apps, subject to provider, legal, and product rules. Number allocation does not create a legal establishment or office in Nigeria, and emergency services remain location-sensitive.",
  },
  {
    q: "Does every Nigerian number support SMS?",
    a: "No. SMS/MMS is available only where technically supported and compliant with DND and consent rules. Messaging is not guaranteed by holding a +234 number — each capability is independently qualified.",
  },
  {
    q: "Can I port my Nigerian number?",
    a: "Nigeria has formal Mobile Number Portability for GSM mobile subscribers. That framework does not by itself prove a fixed or geographic number can be transferred — transfer of a fixed/local number is offered only where Zoiko and its upstream provider support that specific number.",
  },
  {
    q: "Can I call 112 with Zoiko Local?",
    a: "112 is Nigeria's national emergency number, but a +234 number alone is not evidence that a given Zoiko configuration can reach 112. That has to be validated for your specific voice route, and the state is disclosed before purchase or activation.",
  },
  {
    q: "Does a Lagos number mean my business is in Lagos?",
    a: "No. An access code is a numbering association, not proof of physical location. Number allocation never creates a legal establishment or office in that area.",
  },
  {
    q: "How much does a Nigerian number cost?",
    a: "Number fees, included usage, currency, and taxes are shown from Zoiko's commercial systems during selection and checkout — not fixed on this page. Billing currency resolves from the Product & Price Book and your commercial context; it is not assumed to be NGN solely because you're viewing the Nigeria page.",
  },
];

const cardBase = "rounded-xl border border-[#E4E0D6] bg-white";

function Eyebrow({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <p
      className={`text-[11px] font-bold uppercase tracking-[0.14em] text-[#8C8271] ${
        centered ? "text-center" : ""
      }`}
    >
      {children}
    </p>
  );
}

function H2({ children, centered = true }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <h2
      className={`mt-3 text-[28px] font-bold leading-tight tracking-tight text-[#16130F] md:text-[32px] ${
        centered ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

function Tag({ label, tone = "ok" }: { label: string; tone?: string }) {
  return (
    <span
      className={`inline-block shrink-0 rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.07em] ${
        tone === "ok" ? "bg-[#E1EFE6] text-[#20654A]" : "bg-[#FBF1DE] text-[#8A6114]"
      }`}
    >
      {label}
    </span>
  );
}

export default function NigeriaLocalNumbers() {
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Nigeria · +234</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-[1.12] tracking-tight text-[#16130F] md:text-[44px]">
              Get a Nigerian local number for calling and business communications.
            </h1>
            <p className="mt-5 max-w-lg text-[14px] leading-7 text-[#5C5C55]">
              Find an eligible Nigerian local number for a supported city or numbering area, then use
              Zoiko Local for calling and other communications capabilities included with your plan.
              Availability, requirements, and activation depend on the number, provider, plan, and
              verification.
            </p>

            <Link
              href="#search"
              className="mt-7 inline-flex h-12 items-center justify-center rounded-lg bg-[#E85D3C] px-7 text-[14px] font-semibold text-white transition hover:bg-[#D14C2C]"
            >
              Find a Nigerian number
            </Link>
          </div>

          <figure>
            <Img src={IMAGES.hero.src} alt={IMAGES.hero.alt} className="h-[280px] w-full" />
            <figcaption className="mt-2.5 text-[12px] text-[#8C8271]">Lagos, Nigeria</figcaption>
          </figure>
        </div>
      </section>

      <section id="search" className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <Eyebrow centered>Search live inventory</Eyebrow>
          <H2>Search by city or Nigerian numbering area.</H2>

          <div className={`mt-9 ${cardBase} p-6`}>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor="ng-search" className="sr-only">
                Search by city, area code, or access code
              </label>
              <input
                id="ng-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g. Lagos, Abuja, Port Harcourt, or an access code"
                className="h-12 flex-1 rounded-lg border border-[#E4E0D6] bg-white px-4 text-[13.5px] text-[#16130F] placeholder:text-[#A79C86] focus:border-[#E85D3C] focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#E85D3C] px-7 text-[14px] font-semibold text-white transition hover:bg-[#D14C2C]"
              >
                <FiSearch aria-hidden /> Search
              </button>
            </div>

            <p className="mt-4 text-[11.5px] leading-5 text-[#8C8271]">
              Availability and activation requirements can vary by number, provider, plan, identity
              verification, and use case. Example locations below are labels only, not inventory
              promises.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow centered>Explore</Eyebrow>
          <H2>Popular Nigerian local-number locations.</H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[13px] leading-7 text-[#5C5C55]">
            Cities shown are backed by current numbering metadata and live inventory where available —
            a listed location doesn&apos;t imply Zoiko has an office there.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((l) => (
              <article key={l.name} className={`overflow-hidden ${cardBase}`}>
                {l.image && (
                  <Img src={l.image.src} alt={l.image.alt} className="h-[110px] w-full" rounded="rounded-none" />
                )}
                <div className="p-4">
                  <h3 className="text-[14.5px] font-bold text-[#16130F]">{l.name}</h3>
                  <p className="mt-1 text-[12px] text-[#8C8271]">{l.detail}</p>
                  <Link
                    href="#search"
                    className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0E5C4E] hover:underline"
                  >
                    View numbers <FiArrowRight aria-hidden />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-6 text-[11.5px] leading-5 text-[#8C8271]">
            Current access codes are resolved from live numbering metadata at search time — this list
            is illustrative and not a guarantee of live inventory.
          </p>
        </div>
      </section>

      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow centered>Process</Eyebrow>
          <H2>How to get a Nigerian local number.</H2>

          <ol className={`mt-9 grid overflow-hidden ${cardBase} sm:grid-cols-2 lg:grid-cols-5`}>
            {steps.map((s, i) => (
              <li
                key={s.n}
                className={`p-5 ${i > 0 ? "border-t border-[#EFEBE1] lg:border-l lg:border-t-0" : ""}`}
              >
                <span className="text-[11.5px] font-medium text-[#A79C86]">{s.n}</span>
                <h3 className="mt-2.5 text-[13.5px] font-bold text-[#16130F]">{s.title}</h3>
                <p className="mt-1.5 text-[12px] leading-5 text-[#5C5C55]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <Eyebrow>Capabilities</Eyebrow>
          <H2 centered={false}>More than a phone number.</H2>
          <p className="mt-4 max-w-2xl text-[13px] leading-7 text-[#5C5C55]">
            Each capability is independently qualified by your number, provider route, plan, and
            applicable regulatory state — not inferred from having a +234 number.
          </p>

          <dl className={`mt-8 overflow-hidden ${cardBase}`}>
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className={`grid items-center gap-3 p-5 md:grid-cols-[170px_1fr_auto] md:gap-5 ${
                  i > 0 ? "border-t border-[#EFEBE1]" : ""
                }`}
              >
                <dt className="text-[13.5px] font-bold text-[#16130F]">{c.title}</dt>
                <dd className="text-[12.5px] leading-6 text-[#5C5C55]">{c.body}</dd>
                <dd>
                  <Tag label={c.tag} tone={c.tone} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <Eyebrow>Plans &amp; pricing</Eyebrow>
          <H2 centered={false}>Commercial terms confirmed at checkout.</H2>
          <p className="mt-4 max-w-2xl text-[13px] leading-7 text-[#5C5C55]">
            Number fees, included usage, currency, and taxes are shown from Zoiko&apos;s commercial
            systems during selection and checkout — not fixed on this page.
          </p>

          <p className="mt-7 flex items-start gap-2.5 rounded-lg border border-[#EFDFC4] bg-[#FDF7EA] px-5 py-4 text-[12px] leading-6 text-[#8A6114]">
            <FiInfo className="mt-0.5 shrink-0" aria-hidden />
            Billing currency resolves from the Product &amp; Price Book and your commercial context; it
            is not assumed to be NGN solely because you&apos;re viewing the Nigeria page.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <Img src={IMAGES.porting.src} alt={IMAGES.porting.alt} className="h-[300px] w-full" />

          <div>
            <Eyebrow>Bring an existing number</Eyebrow>
            <H2 centered={false}>Portability depends on the number, not just the country.</H2>
            <p className="mt-4 text-[13px] leading-7 text-[#5C5C55]">
              Nigeria has formal Mobile Number Portability for GSM mobile subscribers. That framework
              does not by itself prove a fixed/geographic number can be transferred — transfer of a
              fixed/local number is offered only where Zoiko and its upstream provider support that
              specific number.
            </p>

            <dl className="mt-6 space-y-2.5">
              {portingSteps.map((s) => (
                <div key={s.label} className={`flex flex-wrap items-baseline gap-2 ${cardBase} px-4 py-3`}>
                  <dt className="text-[12.5px] text-[#A79C86]">{s.label} —</dt>
                  <dd className="text-[12.5px] font-medium text-[#16130F]">{s.body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <Eyebrow>Verification</Eyebrow>
            <H2 centered={false}>Number and subscriber verification.</H2>
            <p className="mt-4 text-[13px] leading-7 text-[#5C5C55]">
              Nigeria applies subscriber-registration rules under the Registration of Communications
              Subscribers Regulations. We collect only the identity, business, or address evidence a
              specific service and provider require — never merely because you viewed Nigeria pricing.
            </p>

            <dl className="mt-6 space-y-2.5">
              {verificationRows.map((r) => (
                <div key={r.label} className={`flex flex-wrap items-baseline gap-2 ${cardBase} px-4 py-3`}>
                  <dt className="text-[12.5px] text-[#A79C86]">{r.label} —</dt>
                  <dd className="text-[12.5px] font-medium text-[#16130F]">{r.body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Img src={IMAGES.verification.src} alt={IMAGES.verification.alt} className="h-[300px] w-full" />
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <Img src={IMAGES.callerId.src} alt={IMAGES.callerId.alt} className="h-[280px] w-full" />

          <div>
            <Eyebrow>Caller identity</Eyebrow>
            <H2 centered={false}>Caller ID and anti-fraud controls.</H2>
            <p className="mt-4 text-[13px] leading-7 text-[#5C5C55]">
              Only numbers assigned, ported, or otherwise authorized to your account may be presented
              as your outbound caller ID. Caller-name display isn&apos;t guaranteed — downstream
              networks and devices control final rendering. Foreign-origin traffic cannot masquerade
              as an unrelated Nigerian number through Zoiko&apos;s configuration.
            </p>
            <Link
              href="#"
              className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0E5C4E] hover:underline"
            >
              Acceptable Use Policy <FiArrowRight aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="emergency-heading" className="bg-[#0E5147] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/60">Safety</p>
          <h2
            id="emergency-heading"
            className="mt-3 text-[28px] font-bold leading-tight text-white md:text-[32px]"
          >
            Emergency calling: 112.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[13px] leading-7 text-white/75">
            112 is Nigeria&apos;s national emergency number. A +234 number alone is not evidence that
            a given Zoiko configuration can reach 112 — that has to be validated for your specific
            voice route.
          </p>

          <dl className="mt-9 grid gap-4 md:grid-cols-3">
            {emergencyStates.map((s) => (
              <div key={s.title} className="rounded-xl border border-white/15 bg-white/[0.06] p-5 text-left">
                <dt className="flex items-center gap-2.5 text-[13px] font-bold text-white">
                  <span className={`h-2 w-2 shrink-0 rounded-full ${s.dot}`} aria-hidden />
                  {s.title}
                </dt>
                <dd className="mt-2 text-[12px] leading-5 text-white/70">{s.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <Eyebrow>Responsible communications</Eyebrow>
          <H2 centered={false}>Messaging, consent, and Do-Not-Disturb.</H2>

          <dl className={`mt-8 overflow-hidden ${cardBase}`}>
            {messagingRows.map((r, i) => (
              <div
                key={r.label}
                className={`grid items-center gap-3 p-5 md:grid-cols-[150px_1fr_auto] md:gap-5 ${
                  i > 0 ? "border-t border-[#EFEBE1]" : ""
                }`}
              >
                <dt className="text-[13.5px] font-bold text-[#16130F]">{r.label}</dt>
                <dd className="text-[12.5px] leading-6 text-[#5C5C55]">{r.body}</dd>
                <dd>
                  <Tag label={r.tag} tone={r.tone} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <Eyebrow>Use it anywhere</Eyebrow>
            <H2 centered={false}>Use your Nigerian number through supported Zoiko Local apps.</H2>
            <p className="mt-4 text-[13px] leading-7 text-[#5C5C55]">
              You may use a supported Nigerian number from outside Nigeria via Zoiko apps, subject to
              provider, legal, and product rules. Number allocation does not create a legal
              establishment or office in Nigeria, and emergency services remain location-sensitive —
              they don&apos;t follow you across borders.
            </p>
          </div>

          <Img src={IMAGES.anywhere.src} alt={IMAGES.anywhere.alt} className="h-[260px] w-full" />
        </div>
      </section>

      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-5xl px-5">
          <Eyebrow>Why Zoiko Local</Eyebrow>
          <H2 centered={false}>Built on verified numbering, not marketing claims.</H2>

          <dl className={`mt-8 overflow-hidden ${cardBase}`}>
            {trustRows.map((r, i) => (
              <div
                key={r.label}
                className={`grid items-center gap-3 p-5 md:grid-cols-[180px_1fr_auto] md:gap-5 ${
                  i > 0 ? "border-t border-[#EFEBE1]" : ""
                }`}
              >
                <dt className="text-[13.5px] font-bold text-[#16130F]">{r.label}</dt>
                <dd className="text-[12.5px] leading-6 text-[#5C5C55]">{r.body}</dd>
                <dd>
                  <Tag label={r.tag} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <Eyebrow>FAQ</Eyebrow>
          <H2 centered={false}>Nigeria local number questions.</H2>

          <div className="mt-8 space-y-2.5">
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
                    <span className="text-[13.5px] font-bold leading-6 text-[#16130F]">{f.q}</span>
                    <span className="mt-0.5 shrink-0 text-[13px] text-[#8C8271]">
                      {open ? <FiX aria-hidden /> : <FiPlus aria-hidden />}
                    </span>
                  </button>
                  {open && <p className="px-5 pb-5 text-[12.5px] leading-7 text-[#5C5C55]">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow centered>Explore further</Eyebrow>
          <H2>Related city and numbering-area pages.</H2>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {linkColumns.map((col) => (
              <nav key={col.title} aria-label={col.title} className={`${cardBase} p-5`}>
                <h3 className="text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#A79C86]">
                  {col.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link href="#" className="text-[13px] text-[#16130F] transition hover:text-[#0E5C4E]">
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
    </main>
  );
}