"use client";


import React, { useState } from "react";
import Link from "next/link";
import {
  FiActivity,
  FiArrowRight,
  FiBriefcase,
  FiCheck,
  FiCode,
  FiCrosshair,
  FiFileText,
  FiGlobe,
  FiLayers,
  FiLink,
  FiLock,
  FiMapPin,
  FiMessageSquare,
  FiMic,
  FiPhone,
  FiPlus,
  FiShield,
  FiSmartphone,
  FiSun,
  FiUser,
  FiUsers,
  FiVideo,
  FiX,
} from "react-icons/fi";

// ─── IMAGE PATHS ─────────────────────────────────────────────────────────────
// Files live in public/images/group/ and are referenced from the web root.
// Collected here so a rename is one edit, not a hunt through the markup.
const IMAGES = {
  heroHighFive: { src: "/images/group/hero-collaboration.jpg", alt: "Two colleagues celebrating at a desk" },
  heroWindow: { src: "/images/group/hero-window-call.jpg", alt: "A person working at a window-side desk" },
  connected: { src: "/images/group/people-connected.jpg", alt: "Four colleagues talking together in a bright room" },
  teams: { src: "/images/group/teams-hands.jpg", alt: "A team joining hands over a table of documents" },
  productEng: { src: "/images/group/product-engineering.jpg", alt: "Product and engineering colleagues in discussion" },
  designCx: { src: "/images/group/design-cx.jpg", alt: "Overhead view of a shared desk with laptops and notebooks" },
  opsSupport: { src: "/images/group/operations-support.jpg", alt: "Operations and support colleagues working together" },
  closing: { src: "/images/group/closing-team.jpg", alt: "Colleagues with lanyards talking in an office" },
};

// Fixed-frame image. The wrapper holds the reserved space from the design, so
// a missing file shows the warm placeholder tone instead of collapsing the
// section. Plain <img> by request; swapping to next/image with `fill` is a
// one-line change since the wrapper is already `relative`.
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

// ─── DATA ────────────────────────────────────────────────────────────────────
const orientationCards = [
  { label: "Focus", value: "Communications technology & services", icon: <FiActivity /> },
  { label: "What we build", value: "Numbers, calling, messaging, video & AI", icon: <FiLayers /> },
  { label: "Who we serve", value: "People, small businesses, teams & enterprises", icon: <FiUsers /> },
  { label: "Portfolio", value: "Includes Zoiko Local", icon: <FiMapPin /> },
];

const hierarchy = [
  {
    kicker: "The product you're using",
    title: "Zoiko Local",
    body: "Local numbers, calling, messaging, video and AI-assisted communications for people and businesses.",
    highlight: true,
  },
  {
    kicker: "Builds & operates the portfolio",
    title: "Zoiko Communications Group",
    body: "The communications-focused organization responsible for the communications products and services, including Zoiko Local.",
    highlight: false,
  },
  {
    kicker: "Wider group context",
    title: "Zoiko Group",
    body: "The broader group Zoiko Communications Group belongs to. See the separate About Zoiko Group page.",
    highlight: false,
  },
];

const capabilities = [
  { icon: <FiMapPin />, title: "Local numbers & identity", body: "Help people and businesses establish a recognizable local presence and manage communications identities across supported markets." },
  { icon: <FiPhone />, title: "Calling & messaging", body: "Enable modern inbound and outbound communications with customer-friendly controls across supported devices and services." },
  { icon: <FiVideo />, title: "Video & collaboration", body: "Support richer conversations when voice alone is not enough, including video and associated collaboration capabilities where offered." },
  { icon: <FiMic />, title: "AI-assisted communications", body: "Use AI to help answer, route, summarize, or organize communications — subject to clear AI, recording, privacy and consent controls." },
];

const productTags = ["Local numbers", "Calling", "Messaging where offered", "Video", "AI Receptionist where enabled"];

const productRows = [
  { icon: <FiMapPin />, title: "Local numbers", body: "Search & manage local presence" },
  { icon: <FiPhone />, title: "Calling & messaging", body: "Business-grade communications" },
  { icon: <FiMic />, title: "AI Receptionist", body: "Where enabled by plan" },
];

const whyPills = [
  { icon: <FiMapPin />, label: "Local" },
  { icon: <FiMessageSquare />, label: "Clear" },
  { icon: <FiShield />, label: "Reliable" },
  { icon: <FiCrosshair />, label: "Accessible" },
  { icon: <FiLock />, label: "Secure" },
];

const principles = [
  { icon: <FiCrosshair />, title: "Customer control", body: "Make settings, plans, consent, recording, AI and account actions understandable and reversible where appropriate." },
  { icon: <FiShield />, title: "Trust by design", body: "Build security, privacy, resilience and legal controls into systems rather than adding them after launch." },
  { icon: <FiUser />, title: "Accessible communications", body: "Design for keyboard, screen reader, captions/RTT and other accessibility needs per applicable requirements." },
  { icon: <FiGlobe />, title: "Global reach, local rules", body: "Support international communications while respecting number, telecom, privacy and consumer rules by market." },
  { icon: <FiSun />, title: "Responsible innovation", body: "Apply AI and automation with disclosure, permission boundaries and human escalation." },
];

const markets = ["United States", "United Kingdom", "Canada", "Europe", "Nigeria", "South Africa", "Jamaica"];

const techPhilosophy = [
  { icon: <FiLayers />, title: "Service-oriented", body: "Separate identity, subscription, entitlement, numbering, communications, AI, billing and trust so changes can be governed safely." },
  { icon: <FiCrosshair />, title: "Entitlement-led access", body: "Customers receive the capabilities authorized by their plan and service state; marketing content does not grant access." },
  { icon: <FiCode />, title: "API-ready", body: "Design for controlled integration with communications, carrier, identity, billing and business systems." },
  { icon: <FiActivity />, title: "Resilient & observable", body: "Measure service health and expose truthful public status rather than relying on generic availability claims." },
  { icon: <FiLock />, title: "Privacy & consent aware", body: "Recording, AI, data processing and government-request handling are explicit, governed systems." },
  { icon: <FiSmartphone />, title: "Mobile-first & auditable", body: "Core journeys work across mobile and web, and material actions generate traceable records." },
];

const trustLinks = [
  { icon: <FiShield />, title: "Security & Trust", body: "How we protect accounts and data." },
  { icon: <FiLock />, title: "Privacy", body: "How personal information is handled." },
  { icon: <FiActivity />, title: "Status", body: "Live service health, no vanity uptime." },
  { icon: <FiCrosshair />, title: "Accessibility", body: "Our accessibility commitments." },
  { icon: <FiMic />, title: "Responsible AI", body: "AI disclosure and control philosophy." },
  { icon: <FiActivity />, title: "Recording & Consent", body: "Recording, transcription and consent." },
  { icon: <FiFileText />, title: "Acceptable Use", body: "Lawful, respectful communications." },
  { icon: <FiFileText />, title: "Data Processing (DPA)", body: "For business and procurement users." },
  { icon: <FiGlobe />, title: "Law Enforcement Requests", body: "How we handle government requests." },
];

const disciplines = [
  { label: "Product", dot: "bg-[#0E3A32]" },
  { label: "Engineering", dot: "bg-[#2B6CB0]" },
  { label: "Design", dot: "bg-[#7C5CD6]" },
  { label: "Telecom operations", dot: "bg-[#12A594]" },
  { label: "Security & privacy", dot: "bg-[#D14634]" },
  { label: "Customer experience", dot: "bg-[#B4761A]" },
  { label: "Commercial", dot: "bg-[#3FA37F]" },
  { label: "Support", dot: "bg-[#E85D3C]" },
];

const cultureShots = [
  { image: IMAGES.productEng, caption: "Product & engineering" },
  { image: IMAGES.designCx, caption: "Design & customer experience" },
  { image: IMAGES.opsSupport, caption: "Operations & support" },
];

const milestones = [
  { kicker: "Product", title: "Zoiko Local", body: "Bringing local numbers and modern communications together in one customer-focused experience." },
  { kicker: "Approach", title: "Trust-first platform", body: "Security, privacy, status transparency, recording consent and lawful-request handling built in as product quality." },
  { kicker: "Governed", title: "More milestones ahead", body: "Verified founding, launch and expansion events are published here from the Corporate History Registry." },
];

const contactRoutes = [
  { icon: <FiBriefcase />, title: "Sales & product", body: "Talk to us about Zoiko Local for your business." },
  { icon: <FiLink />, title: "Partnerships", body: "Explore working with Zoiko Communications Group." },
  { icon: <FiFileText />, title: "Press & media", body: "Media resources and press contact." },
  { icon: <FiUser />, title: "Careers", body: "Join a multidisciplinary communications team." },
  { icon: <FiMessageSquare />, title: "Customer support", body: "Get help with your Zoiko Local account." },
  { icon: <FiMapPin />, title: "About Zoiko Local", body: "Learn about the product itself." },
];

// Only the first answer was legible in the mockup. The rest restate sentences
// already published in the body above, so the FAQ cannot contradict the page.
const faqs = [
  {
    q: "Who is behind Zoiko Local?",
    a: "Zoiko Local is part of the Zoiko Communications Group communications portfolio. Zoiko Communications Group is the communications-focused organization that builds and operates the communications products and services, including Zoiko Local.",
  },
  {
    q: "What does Zoiko Communications Group do?",
    a: "It designs and operates the underlying communications capabilities — local numbers and identity, calling, messaging, video and collaboration, and AI-assisted communications — and brings them to customers through focused products like Zoiko Local.",
  },
  {
    q: "How are Zoiko Local, Zoiko Communications Group and Zoiko Group related?",
    a: "Zoiko Local is the product you use. Zoiko Communications Group builds and operates it as part of its communications portfolio. Zoiko Group is the broader group that Zoiko Communications Group belongs to, covered on the separate About Zoiko Group page.",
  },
  {
    q: "Which markets does Zoiko Local support?",
    a: "Market coverage is shown through the Zoiko Local country pages rather than an unqualified “available globally” claim. Corporate offices and operating regions are separate from customer service availability, and a supported number country does not by itself mean a direct telecom licence in that country.",
  },
  {
    q: "How does Zoiko Communications Group approach trust?",
    a: "Security, privacy, resilience and legal controls are built into systems rather than added after launch. Recording, AI, data processing and government-request handling are explicit, governed systems, each with its own published policy you can read and verify.",
  },
  {
    q: "How can I work with or join the group?",
    a: "Use the contact routes above: sales and product for business enquiries, partnerships for working together, press and media for media resources, and careers to join the team. Customer support handles help with an existing Zoiko Local account.",
  },
];

// ─── SHARED ──────────────────────────────────────────────────────────────────
const cardBase = "rounded-2xl border border-[#E8E2D5] bg-white";
const chip = "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4EFE9] text-[#0E5C4E]";

function Eyebrow({ children, centered = true }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <p
      className={`flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#C2603F] ${
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
    <h2 className="mx-auto mt-5 max-w-2xl text-center text-3xl font-bold leading-[1.2] text-[#0E2A21] md:text-[34px]">
      {children}
    </h2>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto mt-5 max-w-3xl text-center text-[11.5px] leading-5 text-[#8C8271]">
      {children}
    </p>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function AboutCommunicationsGroup() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      {/* ═══ HERO ═══ */}
      <section className="bg-gradient-to-br from-[#F6EDE6] via-[#F7F3EC] to-[#EFF1EC] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Eyebrow centered={false}>About Zoiko Communications Group</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.12] tracking-tight text-[#0E2A21] md:text-[46px]">
              Connecting people and businesses through{" "}
              <span className="italic text-[#C2603F]">modern communications.</span>
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#5C6660]">
              Zoiko Communications Group builds communications products and services designed to make
              local and global connection simpler, more flexible, and more useful for people and
              businesses.
            </p>

            <p className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-[12.5px] text-[#4A544D] shadow-sm">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#0E3A32] text-[10px] text-white">
                <FiMapPin aria-hidden />
              </span>
              Zoiko Local is part of the Zoiko Communications Group communications portfolio.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#E85D3C] px-7 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#D14C2C]"
              >
                Explore Zoiko Local
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#D9D2C4] bg-white px-7 text-[14px] font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
              >
                About Zoiko Group
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <div className={`${cardBase} p-6 text-center`}>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#8C8271]">
                The communications group behind Zoiko Local
              </p>
              {/* Wordmark is type, not an image — stays crisp and searchable. */}
              <p className="mt-5 text-[28px] font-bold tracking-tight">
                <span className="text-[#2B4C9B]">ZO</span>
                <span className="text-[#12A594]">i</span>
                <span className="text-[#2B4C9B]">K</span>
                <span className="text-[#E85D3C]">O</span>
                <sup className="ml-0.5 align-super text-[9px] text-[#8C8271]">™</sup>
              </p>
              <p className="mt-1 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-[#5C6660]">
                Communications Group
              </p>
              <p className="mt-5 text-[12.5px] leading-6 text-[#5C6660]">
                <strong className="font-bold text-[#0E2A21]">One communications mission.</strong> We
                build the numbers, calling, messaging, video, and AI-assisted experiences that
                products like Zoiko Local bring to customers.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Img src={IMAGES.heroHighFive.src} alt={IMAGES.heroHighFive.alt} className="h-[190px] w-full" />
              <Img src={IMAGES.heroWindow.src} alt={IMAGES.heroWindow.alt} className="h-[190px] w-full" />
            </div>
          </div>
        </div>

        {/* Orientation cards */}
        <div className="mx-auto mt-14 max-w-6xl px-5">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {orientationCards.map((c) => (
              <div key={c.label} className={`${cardBase} p-5`}>
                <span className={chip}>{c.icon}</span>
                <p className="mt-4 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#8C8271]">
                  {c.label}
                </p>
                <p className="mt-1.5 text-[13.5px] font-bold leading-6 text-[#0E2A21]">{c.value}</p>
              </div>
            ))}
          </div>
          {/* Governed-registry promise #1 — no invented corporate metrics. */}
          <Note>
            Orientation only. Verified corporate metrics are published from governed registries and
            are shown here only when current and confirmed.
          </Note>
        </div>
      </section>

      {/* ═══ WHO WE ARE ═══ */}
      <section className="bg-[#F7F3EC] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="relative">
            <Img src={IMAGES.connected.src} alt={IMAGES.connected.alt} className="h-[300px] w-full md:h-[360px]" />
            <span className="absolute bottom-5 left-5 rounded-lg bg-[#0E3A32]/90 px-4 py-2 text-[12.5px] font-bold text-white">
              People and businesses, connected across numbers, voice, video, and AI.
            </span>
          </div>

          <div className="mt-16">
            <Eyebrow>Who we are</Eyebrow>
            <H2>The communications group behind the service</H2>
          </div>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <div className="border-l-[3px] border-[#C2603F] pl-5">
                <p className="text-[14px] font-bold leading-7 text-[#0E2A21]">
                  Zoiko Communications Group focuses on the technology and services that help people
                  and businesses communicate across numbers, voice, messaging, video, and AI-assisted
                  experiences.
                </p>
              </div>
              <p className="mt-5 text-[13.5px] leading-7 text-[#4A544D]">
                We build for a world in which communications should work across devices, locations,
                and business sizes without unnecessary complexity. Our role is to design and operate
                the underlying communications capabilities — and to bring them to customers through
                focused products like Zoiko Local.
              </p>
              <p className="mt-4 text-[13.5px] leading-7 text-[#4A544D]">
                We separate the parts of a communications system — identity, numbering, calling,
                messaging, video, AI, billing and trust — so each can be built, governed, and
                improved responsibly.
              </p>
            </div>

            {/* Hierarchy: an ordered list, because product → group → wider group
                is the relationship being explained, not decoration. */}
            <ol className="space-y-4">
              {hierarchy.map((h, i) => (
                <li key={h.title} className="relative">
                  {i < hierarchy.length - 1 && (
                    <span
                      className="absolute -bottom-4 left-1/2 h-4 w-px bg-[#D9D2C4]"
                      aria-hidden
                    />
                  )}
                  <div
                    className={`rounded-2xl bg-white p-5 ${
                      h.highlight ? "border-2 border-[#0E5C4E]" : "border border-[#E8E2D5]"
                    }`}
                  >
                    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8C8271]">
                      {h.kicker}
                    </p>
                    <p className="mt-1.5 text-[15px] font-bold text-[#0E2A21]">
                      {h.title === "Zoiko Local" ? (
                        <>
                          <span className="text-[#E85D3C]">Zoiko</span> Local
                        </>
                      ) : (
                        h.title
                      )}
                    </p>
                    <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{h.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══ WHAT WE BUILD ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>What we build</Eyebrow>
          <H2>Communications capabilities, at the group level</H2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-5">
                <span className={chip}>{c.icon}</span>
                <h3 className="mt-4 text-[14.5px] font-bold text-[#0E2A21]">{c.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ZOIKO LOCAL PANEL ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid gap-8 rounded-[26px] bg-gradient-to-br from-[#12403A] via-[#0F3A34] to-[#0B2E2A] p-8 lg:grid-cols-[1.1fr_1fr] lg:items-center md:p-10">
            <div>
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#E8B49A]">
                <span className="h-px w-5 bg-[#E8B49A]" aria-hidden />
                Zoiko Local
              </p>
              <h2 className="mt-4 text-[26px] font-bold leading-tight text-white">
                Zoiko Local: communications built for everyday use
              </h2>
              <p className="mt-4 max-w-lg text-[13px] leading-7 text-white/70">
                Zoiko Local brings together local-number access and modern communications
                capabilities in a customer-focused experience designed for individuals, teams and
                businesses — with plan and market availability governed by the product.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {productTags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1.5 text-[11.5px] font-semibold text-white/90"
                  >
                    {t}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-[13.5px] font-semibold text-[#0E2A21] transition hover:bg-[#F1EDE6]"
                >
                  Explore Zoiko Local
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-6 text-[13.5px] font-semibold text-white transition hover:bg-white/10"
                >
                  View plans &amp; pricing
                </Link>
              </div>

              <p className="mt-5 text-[11.5px] leading-5 text-white/50">
                Availability, regulated services, emergency calling, recording, AI and number
                requirements vary by plan and market.
              </p>
            </div>

            {/* Product mock — real DOM, so the feature names stay selectable. */}
            <div className="rounded-2xl bg-white p-4">
              <p className="px-1 text-[13px] font-bold tracking-tight">
                <span className="text-[#E85D3C]">ZOIKO</span>
                <span className="text-[#0E2A21]">LOCAL</span>
              </p>
              <ul className="mt-3 space-y-2.5">
                {productRows.map((r) => (
                  <li key={r.title} className="flex items-center gap-3 rounded-xl bg-[#F4F1EA] px-3.5 py-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#E4EFE9] text-[12px] text-[#0E5C4E]">
                      {r.icon}
                    </span>
                    <span>
                      <span className="block text-[12.5px] font-bold text-[#0E2A21]">{r.title}</span>
                      <span className="block text-[11px] text-[#8C8271]">{r.body}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY WE EXIST ═══ */}
      <section className="bg-[#F7F3EC] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="rounded-[26px] bg-[#EBE4D8] px-6 py-12 md:px-10">
            <Eyebrow>Why we exist</Eyebrow>
            <H2>Communications should feel local, clear, and dependable</H2>
            <p className="mx-auto mt-5 max-w-2xl text-center text-[13.5px] leading-7 text-[#5C6660]">
              People and businesses shouldn&apos;t need to understand carrier infrastructure or juggle
              fragmented tools to be reachable. We exist to make communications feel present where
              your customers, teams, families and communities are — and to keep customers in control
              of what they have, what it costs, what is recorded, and what AI is doing.
            </p>

            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {whyPills.map((p) => (
                <li
                  key={p.label}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-[12.5px] font-bold text-[#0E2A21]"
                >
                  <span className="text-[#C2603F]">{p.icon}</span>
                  {p.label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ PRINCIPLES ═══ */}
      <section className="bg-[#F7F3EC] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>How we operate</Eyebrow>
          <H2>Principles we build to</H2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {principles.map((p) => (
              <div key={p.title} className={`${cardBase} p-5`}>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#FBEAE3] text-[#C2421F]">
                  {p.icon}
                </span>
                <h3 className="mt-4 text-[13.5px] font-bold leading-tight text-[#0E2A21]">
                  {p.title}
                </h3>
                <p className="mt-2 text-[11.5px] leading-6 text-[#5C6660]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Communications portfolio</Eyebrow>
          <H2>Products and services in the group</H2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border-2 border-[#0E5C4E] bg-white p-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#C2421F]">
                Local communications
              </p>
              <p className="mt-2 flex items-center gap-2 text-[16px] font-bold">
                <span className="text-[#E85D3C]">Zoiko</span>
                <span className="text-[#0E2A21]">Local</span>
                <span className="rounded bg-[#E4EFE9] px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.08em] text-[#0E5C4E]">
                  Live
                </span>
              </p>
              <p className="mt-2.5 text-[12px] leading-6 text-[#5C6660]">
                Local numbers, calling, messaging, video and AI-assisted communications for
                individuals, teams and businesses.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0E5C4E] hover:underline"
              >
                Visit Zoiko Local <FiArrowRight aria-hidden />
              </Link>
            </div>

            {/* Governed-registry promise #2 — no invented portfolio brands. */}
            <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EDE7DB] text-[#8C8271]">
                <FiLayers aria-hidden />
              </span>
              <p className="mt-4 text-[12px] leading-6 text-[#8C8271]">
                Additional Zoiko Communications Group products and services appear here as the
                portfolio is confirmed by the Portfolio Registry.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center rounded-2xl bg-white p-6 text-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EDE7DB] text-[#8C8271]">
                <FiLink aria-hidden />
              </span>
              <p className="mt-4 text-[12px] leading-6 text-[#8C8271]">
                We show only approved communications brands and services — never inferred from a name
                or a general group relationship.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ MARKETS ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Global presence</Eyebrow>
          <H2>Built for communications across markets</H2>

          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[13.5px] leading-7 text-[#4A544D]">
                We design communications experiences that can adapt to different markets, number
                requirements, customer needs, and regulatory environments. Market coverage is shown
                through Zoiko Local country pages — not an unqualified &ldquo;available
                globally&rdquo; claim.
              </p>

              <Link
                href="#"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#E85D3C] px-6 text-[13.5px] font-semibold text-white shadow-lg transition hover:bg-[#D14C2C]"
              >
                Explore number availability <FiArrowRight aria-hidden />
              </Link>

              {/* Governed-registry promise #3 — no invented office locations. */}
              <div className="mt-6 flex items-start gap-3 rounded-xl bg-[#EDE7DB] px-4 py-3.5">
                <FiCheck className="mt-0.5 shrink-0 text-[#0E5C4E]" strokeWidth={3} aria-hidden />
                <p className="text-[11.5px] leading-5 text-[#6E6656]">
                  Corporate offices and operating regions are separate from customer service
                  availability, and a supported number country does not by itself mean a direct
                  telecom license in that country. Office locations are published only from the
                  governed Office Registry when approved.
                </p>
              </div>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {markets.map((m) => (
                <li key={m}>
                  <Link
                    href="#"
                    className={`${cardBase} flex items-center justify-between gap-3 px-4 py-3.5 transition hover:border-[#0E2A21]`}
                  >
                    <span className="flex items-center gap-2.5 text-[13px] font-bold text-[#0E2A21]">
                      <FiMapPin className="text-[#0E5C4E]" aria-hidden />
                      {m}
                    </span>
                    <FiArrowRight className="text-[#8C8271]" aria-hidden />
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="#"
                  className="flex items-center justify-between gap-3 rounded-2xl border border-[#CBDDD5] bg-[#E4EFE9] px-4 py-3.5 transition hover:bg-[#D8E8E0]"
                >
                  <span className="flex items-center gap-2.5 text-[13px] font-bold text-[#0E2A21]">
                    <FiGlobe className="text-[#0E5C4E]" aria-hidden />
                    View all markets
                  </span>
                  <FiArrowRight className="text-[#0E5C4E]" aria-hidden />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ TECHNOLOGY PHILOSOPHY ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Technology philosophy</Eyebrow>
          <H2>How we build communications systems</H2>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {techPhilosophy.map((t) => (
              <div key={t.title} className="rounded-2xl bg-white p-5">
                <span className={chip}>{t.icon}</span>
                <h3 className="mt-4 text-[14px] font-bold text-[#0E2A21]">{t.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{t.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST & RESPONSIBILITY ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Trust &amp; responsibility</Eyebrow>
          <H2>Verify how we handle security, privacy and AI</H2>

          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {trustLinks.map((t) => (
              <li key={t.title}>
                <Link
                  href="#"
                  className={`${cardBase} flex items-start gap-3.5 p-4 transition hover:border-[#0E2A21]`}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E4EFE9] text-[#0E5C4E]">
                    {t.icon}
                  </span>
                  <span>
                    <span className="block text-[13.5px] font-bold text-[#0E2A21]">{t.title}</span>
                    <span className="mt-0.5 block text-[11.5px] leading-5 text-[#8C8271]">
                      {t.body}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ PEOPLE & CULTURE ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>People &amp; culture</Eyebrow>
          <H2>How our teams work</H2>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[13.5px] leading-7 text-[#4A544D]">
                Our communications products are built by multidisciplinary teams spanning product,
                engineering, design, telecom operations, security, privacy, customer experience,
                commercial operations, and support. We work across disciplines because reliable
                communications depend on more than software alone.
              </p>
              <Link
                href="#"
                className="mt-6 inline-flex h-11 items-center gap-2 rounded-full bg-[#E85D3C] px-6 text-[13.5px] font-semibold text-white shadow-lg transition hover:bg-[#D14C2C]"
              >
                Explore careers <FiArrowRight aria-hidden />
              </Link>
            </div>
            <Img src={IMAGES.teams.src} alt={IMAGES.teams.alt} className="h-[300px] w-full" />
          </div>

          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {disciplines.map((d) => (
              <li
                key={d.label}
                className="flex items-center gap-2.5 rounded-xl bg-white px-4 py-3 text-[12.5px] font-bold text-[#0E2A21]"
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${d.dot}`} aria-hidden />
                {d.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ INSIDE THE GROUP ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Inside the group</Eyebrow>
          <H2>A multidisciplinary way of working</H2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {cultureShots.map((s) => (
              <div key={s.caption} className="relative">
                <Img src={s.image.src} alt={s.image.alt} className="h-[200px] w-full" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 py-3 text-[12.5px] font-bold text-white">
                  {s.caption}
                </span>
              </div>
            ))}
          </div>

          <Note>
            Imagery is illustrative. Authentic team photography is published only with consent and
            Corporate Communications approval.
          </Note>
        </div>
      </section>

      {/* ═══ MILESTONES ═══ */}
      <section className="bg-[#F7F3EC] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Milestones</Eyebrow>
          <H2>Our story, as it&apos;s verified</H2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {milestones.map((m) => (
              <div key={m.title} className={`${cardBase} p-5`}>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#C2421F]">
                  {m.kicker}
                </p>
                <h3 className="mt-2 text-[14.5px] font-bold text-[#0E2A21]">{m.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{m.body}</p>
              </div>
            ))}
          </div>

          {/* Governed-registry promise #4 — no invented dates or superlatives. */}
          <Note>
            Milestones are shown only when verified. We don&apos;t publish inflated &ldquo;first&rdquo;
            or &ldquo;largest&rdquo; claims.
          </Note>

          <blockquote className="mt-14 rounded-[26px] bg-gradient-to-br from-[#12403A] via-[#0F3A34] to-[#0B2E2A] px-8 py-12 text-center md:px-14">
            <p className="mx-auto max-w-3xl text-[22px] font-bold leading-[1.35] text-white md:text-[26px]">
              &ldquo;Reliable communications should feel{" "}
              <span className="italic text-[#E8B49A]">simple to the customer</span> and be{" "}
              <span className="italic text-[#E8B49A]">accountable underneath</span> — that&apos;s the
              standard we build to.&rdquo;
            </p>
            <footer className="mt-6 text-[12px] text-white/60">
              — Zoiko Communications Group
            </footer>
          </blockquote>
        </div>
      </section>

      {/* ═══ WIDER GROUP ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Zoiko Group</Eyebrow>
          <H2>Our place in the wider group</H2>

          <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-2xl bg-white p-6 md:flex-row md:items-center md:p-7">
            <div className="flex items-start gap-5">
              <span
                className="h-14 w-14 shrink-0 rounded-2xl bg-[conic-gradient(at_30%_30%,#2B4C9B,#7C5CD6,#E85D3C,#12A594,#2B4C9B)]"
                aria-hidden
              />
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-[#8C8271]">
                  Part of Zoiko Group
                </p>
                <h3 className="mt-1.5 text-[16px] font-bold text-[#0E2A21]">
                  Zoiko Communications Group is part of Zoiko Group
                </h3>
                <p className="mt-2 max-w-xl text-[12.5px] leading-6 text-[#5C6660]">
                  Zoiko Group is the wider group that Zoiko Communications Group belongs to. This page
                  focuses on the communications organization behind Zoiko Local; the broader
                  group&apos;s activities, structure and holding-company context are covered on the
                  dedicated About Zoiko Group page.
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-full border border-[#D9D2C4] px-6 text-[13px] font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
            >
              About Zoiko Group <FiArrowRight aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ CONTACT ROUTES ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Contact &amp; pathways</Eyebrow>
          <H2>Talk to the right team</H2>

          <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {contactRoutes.map((r) => (
              <li key={r.title}>
                <Link
                  href="#"
                  className={`${cardBase} block p-5 transition hover:border-[#0E2A21]`}
                >
                  <span className={chip}>{r.icon}</span>
                  <span className="mt-4 block text-[13.5px] font-bold text-[#0E2A21]">{r.title}</span>
                  <span className="mt-1.5 block text-[11.5px] leading-5 text-[#8C8271]">{r.body}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <Eyebrow>FAQ</Eyebrow>
          <H2>About Zoiko Communications Group</H2>

          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="overflow-hidden rounded-xl bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[13.5px] font-bold leading-6 text-[#0E2A21]">{f.q}</span>
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded text-[11px] transition ${
                        open ? "bg-[#E85D3C] text-white" : "bg-[#EDE7DB] text-[#0E2A21]"
                      }`}
                    >
                      {open ? <FiX aria-hidden /> : <FiPlus aria-hidden />}
                    </span>
                  </button>
                  {open && (
                    <p className="px-5 pb-5 text-[12.5px] leading-6 text-[#5C6660]">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ CLOSING ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="relative">
            <Img src={IMAGES.closing.src} alt={IMAGES.closing.alt} className="h-[260px] w-full" />
            <span className="absolute bottom-5 left-5 rounded-lg bg-[#0E3A32]/90 px-4 py-2 text-[12.5px] font-bold text-white">
              Building communications people and businesses can rely on.
            </span>
          </div>

          <div className="mt-8 rounded-[26px] bg-gradient-to-br from-[#12403A] via-[#0F3A34] to-[#0B2E2A] px-8 py-14 text-center">
            <p className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#E8B49A]">
              <span className="h-px w-5 bg-[#E8B49A]" aria-hidden />
              Get started
            </p>
            <h2 className="mx-auto mt-5 max-w-lg text-3xl font-bold leading-[1.2] text-white md:text-[38px]">
              Experience the communications we build.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[13.5px] leading-7 text-white/70">
              Zoiko Local brings the group&apos;s communications capabilities together in one product
              — local numbers, calling, messaging, video, and AI-assisted communications.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#E85D3C] px-7 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#D14C2C]"
              >
                Start free
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[14px] font-semibold text-[#0E2A21] transition hover:bg-[#F1EDE6]"
              >
                Explore Zoiko Local
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-[14px] font-semibold text-white transition hover:bg-white/10"
              >
                Talk to us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}