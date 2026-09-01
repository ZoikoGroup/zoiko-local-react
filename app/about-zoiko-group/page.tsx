"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiBriefcase,
  FiCheckCircle,
  FiCpu,
  FiFileText,
  FiLink,
  FiLock,
  FiPlus,
  FiShield,
  FiUsers,
  FiX,
} from "react-icons/fi";

// ─── IMAGE PATHS ─────────────────────────────────────────────────────────────
const IMAGES = {
  hero: { src: "/images/Team from across Zoiko Group's operating companies collaborating in a shared workspace (1).png", alt: "Three colleagues in discussion around a laptop" },
  communications: { src: "/images/Customer support specialist working at Zoiko Communications Group (1).png", alt: "A support agent wearing a headset waving at camera" },
  technology: { src: "/images/Software engineer building a Zoiko Tech platform (1).png", alt: "A developer working at a multi-monitor desk" },
  healthcare: { src: "/images/Clinician using a tablet for healthcare technology (1).png", alt: "A clinician holding a tablet in a consulting room" },
  realty: { src: "/images/Modern residential building representing Zoiko Realty Group (1).png", alt: "A modern apartment building with planted balconies" },
  media: { src: "/images/Video production studio representing Zoiko Media Corp (1).png", alt: "A camera on a tripod in a media studio" },
  city: { src: "/images/Aerial view of a city skyline representing Zoiko Group's global operating footprint (1).png", alt: "Aerial view of a city at night" },
  culture: { src: "/images/Cross-functional Zoiko Group team collaborating in the office (1).png", alt: "Colleagues collaborating around a shared desk" },
  workshop: { src: "/images/Team planning a Zoiko Group milestone on a whiteboard (1).png", alt: "A team reviewing a strategy board together" },
  leadership: { src: "/images/Portrait of a Zoiko Group executive (1).png", alt: "Portrait of a Zoiko Group executive" },
  handshake: { src: "/images/Partnership handshake representing the Zoiko Communications Group relationship (1).png", alt: "Two people shaking hands" },
};

// Fixed-frame image. Wrapper holds the reserved space, so a missing file shows
// the warm placeholder tone rather than collapsing the section. Plain <img> by
// request; swapping to next/image with `fill` is a one-line change.
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

// ─── OPERATING GROUPS ────────────────────────────────────────────────────────
const sectors = [
  {
    tag: "Where Zoiko Local lives",
    tagAccent: true,
    image: IMAGES.communications,
    title: "Communications",
    body: "Products and services for numbers, voice, messaging, video, and AI-assisted communications — including the portfolio that Zoiko Local sits within.",
    entity: "Zoiko Communications Group",
    cta: "Learn more",
    wide: true,
  },
  {
    tag: "Technology",
    tagAccent: false,
    image: IMAGES.technology,
    title: "Technology",
    body: "Software and technology platforms that help organizations operate, collaborate, manage work, and automate processes.",
    entity: "Zoiko Tech Inc.",
    cta: "View group",
    wide: false,
  },
  {
    tag: "Healthcare",
    tagAccent: false,
    image: IMAGES.healthcare,
    title: "Healthcare",
    body: "Technology-enabled healthcare products and services within approved public scope, without clinical claims outside product authority.",
    entity: "Zoiko Healthcare Inc.",
    cta: "View group",
    wide: false,
  },
  {
    tag: "Realty",
    tagAccent: false,
    image: IMAGES.realty,
    title: "Realty",
    body: "Technology and services supporting property, rooms, rentals, and related real-estate experiences.",
    entity: "Zoiko Realty Group Inc.",
    cta: "View group",
    wide: false,
  },
  {
    tag: "Media",
    tagAccent: false,
    image: IMAGES.media,
    title: "Media",
    body: "Media and content activities within approved public scope, shown only where a business is active and live.",
    entity: "Zoiko Media Corp.",
    cta: "View group",
    wide: false,
  },
];

const entities = [
  "Zoiko Tech Inc.",
  "Zoiko Communications Group",
  "Zoiko Healthcare Inc.",
  "Zoiko Realty Group Inc.",
  "Zoiko Media Corp.",
];

// ─── PORTFOLIO ───────────────────────────────────────────────────────────────
const portfolio = [
  { name: "Zoiko Local", entity: "Communications", status: "Live" },
  { name: "Technology", entity: "Zoiko Tech Inc.", status: "In development" },
  { name: "Healthcare", entity: "Zoiko Healthcare Inc.", status: "In development" },
  { name: "Realty", entity: "Zoiko Realty Group Inc.", status: "In development" },
  { name: "Media", entity: "Zoiko Media Corp.", status: "In development" },
];

// ─── SHARED PRINCIPLES ───────────────────────────────────────────────────────
const principles = [
  { n: "01", title: "One Group", body: "Shared standards and mutual accountability, while each operating company keeps its own responsibilities." },
  { n: "02", title: "Customer value", body: "We build around real customer outcomes, not internal organizational convenience." },
  { n: "03", title: "Ownership", body: "Teams own outcomes, quality, and remediation instead of handing problems across functions." },
  { n: "04", title: "Urgency with precision", body: "We move quickly without trading away accuracy, safety, security, or regulatory discipline." },
  { n: "05", title: "Integrity", body: "We make claims, decisions, and records that can withstand scrutiny." },
  { n: "06", title: "Trust with verification", body: "Critical commercial, legal, security, and operational states are evidenced, not assumed." },
  { n: "07", title: "Responsible innovation", body: "We use AI and automation with transparency, controls, and human accountability." },
  { n: "08", title: "Continuous improvement", body: "We measure, learn, remediate, and raise the bar across products and operating groups." },
];

// ─── GOVERNANCE ──────────────────────────────────────────────────────────────
const governance = [
  { icon: <FiLock />, title: "Security", body: "A group standard for security-by-design; product-specific certifications and evidence remain on each product's trust page." },
  { icon: <FiShield />, title: "Privacy", body: "Purpose limitation and lawful processing, with product-specific privacy notices — we don't imply one shared policy where controllers differ." },
  { icon: <FiUsers />, title: "Accessibility", body: "WCAG 2.2 AA as a product target, plus jurisdiction-specific obligations, with links to each product's accessibility page." },
  { icon: <FiCpu />, title: "Responsible AI", body: "Governance, transparency, and boundaries for AI features; operative AI terms stay product-specific." },
  { icon: <FiFileText />, title: "Legal & compliance", body: "Each operating group complies with the laws relevant to its sector and service — we avoid blanket “fully compliant” claims." },
  { icon: <FiCheckCircle />, title: "Quality assurance", body: "Design, engineering, testing, and release gates sized to the risk of each product." },
];

// ─── REGIONS ─────────────────────────────────────────────────────────────────
const regions = [
  { name: "North America", role: "Group headquarters & product teams" },
  { name: "Europe", role: "Communications & technology teams" },
  { name: "Africa & the Caribbean", role: "Local-market communications teams" },
];

const disciplines = ["Engineering", "Product", "Design", "Commercial", "Legal & compliance", "Operations"];

// ─── MILESTONES — verify against the corporate register ──────────────────────
const milestones = [
  { year: "2019", title: "Zoiko Group established", body: "Group-level governance and brand architecture formed to support multiple operating companies." },
  { year: "2021", title: "Zoiko Communications Group launches", body: "Commercial launch of the communications-focused operating group." },
  { year: "2023", title: "Zoiko Local goes to market", body: "Public commercial launch of Zoiko Local within the Communications Group portfolio." },
  { year: "2025", title: "Additional operating groups formed", body: "Technology, Healthcare, Realty, and Media operating groups established under group governance." },
];

// ─── CONNECT ─────────────────────────────────────────────────────────────────
const connectRoutes = [
  { icon: <FiFileText />, title: "Press", body: "Group-level releases and media resources. Product press stays tagged by its operating group.", cta: "Visit newsroom" },
  { icon: <FiLink />, title: "Partnerships", body: "Route technology, commercial, and ecosystem inquiries to the right operating group.", cta: "Start a conversation" },
  { icon: <FiBriefcase />, title: "Careers", body: "Open roles across every operating group, filterable by discipline and location.", cta: "See open roles" },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
// Only the first answer was legible in the mockup. The rest restate sentences
// already published in the body above, so the FAQ can't contradict the page.
const faqs = [
  {
    q: "What is Zoiko Group?",
    a: "A multi-sector business group that develops and operates technology-enabled companies through distinct operating groups, subject to the approved corporate structure.",
  },
  {
    q: "What companies are part of Zoiko Group?",
    a: "Five operating groups: Zoiko Communications Group, Zoiko Tech Inc., Zoiko Healthcare Inc., Zoiko Realty Group Inc., and Zoiko Media Corp. Businesses appear in the public portfolio only once they are live and approved for public listing — sectors without a public brand yet stay open rather than padded.",
  },
  {
    q: "Is Zoiko Group the same as Zoiko Communications Group?",
    a: "No. Zoiko Group is the wider strategic group. Zoiko Communications Group is the communications-focused operating group within it, and is the organization that builds and operates Zoiko Local.",
  },
  {
    q: "Where does Zoiko Local fit?",
    a: "Zoiko Local is a product brand inside the Zoiko Communications Group portfolio. In the three-layer structure, Zoiko Group is layer one, the operating group is layer two, and the product brand you use is layer three.",
  },
  {
    q: "Do all Zoiko companies share the same customer data or contracts?",
    a: "No. Shared capabilities may be reused across the group only through approved boundaries — shared technology never means shared customer data or a shared contracting entity. Your contract is always with the operating group or product you use, not with Zoiko Group as a whole.",
  },
  {
    q: "How can I work with Zoiko Group?",
    a: "Use the routes above: press for group-level releases and media resources, partnerships to reach the right operating group for technology or commercial inquiries, and careers for open roles across every operating group.",
  },
];

// ─── SHARED ──────────────────────────────────────────────────────────────────
const cardBase = "rounded-2xl border border-[#E8E2D5] bg-white";

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
    <h2 className="mx-auto mt-5 max-w-3xl text-center text-3xl font-bold leading-[1.2] text-[#0E2A21] md:text-[36px]">
      {children}
    </h2>
  );
}

function Lede({ children }: { children: React.ReactNode }) {
  return (
    <p className="mx-auto mt-5 max-w-2xl text-center text-[13.5px] leading-7 text-[#5C6660]">
      {children}
    </p>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function AboutZoikoGroup() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      {/* ═══ HERO ═══ */}
      <section className="bg-[#F4F0E7] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <Eyebrow centered={false}>About Zoiko Group</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-[#0E2A21] md:text-[48px]">
              Building technology-enabled businesses for how people{" "}
              <span className="text-[#C2421F]">live and work.</span>
            </h1>
            <p className="mt-6 max-w-lg text-[14px] leading-7 text-[#5C6660]">
              Zoiko Group is a multi-sector business group that develops and operates
              technology-enabled companies across communications, software, healthcare, realty, and
              media. Each operating group carries its own sector mandate while sharing group-wide
              standards for quality, trust, and execution.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#E85D3C] px-7 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#D14C2C]"
              >
                Explore our businesses
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#D9D2C4] bg-white px-7 text-[14px] font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
              >
                About Zoiko Communications Group
              </Link>
            </div>
          </div>

          <div className="relative">
            <Img src={IMAGES.hero.src} alt={IMAGES.hero.alt} className="h-[340px] w-full" />

            <span className="absolute -left-2 top-4 inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EDE7DB] text-[#5C6660]">
                <FiBriefcase className="text-[13px]" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[12.5px] font-bold text-[#0E2A21]">5 operating groups</span>
                <span className="block text-[11px] text-[#8C8271]">Technology to media</span>
              </span>
            </span>

            {/* Wordmark is type, not an image — stays crisp and selectable. */}
            <span className="absolute -bottom-5 left-4 rounded-xl bg-white px-5 py-3 shadow-lg">
              <span className="text-[19px] font-bold tracking-tight text-[#123C4A]">
                Z<span className="text-[#0E5C4E]">O</span>iKO
                <sup className="ml-0.5 align-super text-[8px] text-[#8C8271]">™</sup>
              </span>
              <span className="mt-0.5 block text-[8px] font-bold uppercase tracking-[0.28em] text-[#5C6660]">
                Group
              </span>
            </span>

            <span className="absolute -bottom-4 right-2 inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#EDE7DB] text-[#5C6660]">
                <FiLink className="text-[13px]" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[12.5px] font-bold text-[#0E2A21]">Zoiko Local</span>
                <span className="block text-[11px] text-[#8C8271]">Part of Communications Group</span>
              </span>
            </span>
          </div>
        </div>

        {/* Positioning statement */}
        <div className="mx-auto mt-20 max-w-4xl px-5">
          <p className="text-center text-[15px] leading-8 text-[#3F4B45]">
            <strong className="font-bold text-[#0E2A21]">Zoiko Group</strong> is the wider strategic
            group behind Zoiko Communications Group, Zoiko Local, and its other operating businesses.
            It sets shared standards for product quality, trust, and responsible innovation — while
            each operating group keeps its own sector mandate, customers, and legal responsibilities.
            Zoiko Group is not a single contracting entity: the company you do business with is
            always the specific operating group or product you use.
          </p>
        </div>
      </section>

      {/* ═══ SECTOR ARCHITECTURE ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Sector architecture</Eyebrow>
          <H2>
            Five operating groups, <span className="text-[#C2421F]">one set of standards.</span>
          </H2>
          <Lede>
            Each operating group owns its own strategy, products, customers, and regulatory posture.
            Zoiko Group sets the shared bar they build against.
          </Lede>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {sectors.map((s) => (
              <article
                key={s.title}
                className={`overflow-hidden rounded-2xl bg-white ${
                  s.wide ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="relative">
                  <Img
                    src={s.image.src}
                    alt={s.image.alt}
                    className={s.wide ? "h-[190px] w-full" : "h-[150px] w-full"}
                    rounded="rounded-none"
                  />
                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white ${
                      s.tagAccent ? "bg-[#E85D3C]" : "bg-[#0E3A32]"
                    }`}
                  >
                    {s.tag}
                  </span>
                </div>

                <div className="p-5">
                  <h3 className="text-[17px] font-bold text-[#0E2A21]">{s.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-6 text-[#5C6660]">{s.body}</p>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#EDE7DB] pt-4">
                    <span className="text-[12px] font-bold text-[#0E2A21]">{s.entity}</span>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[#E85D3C] hover:underline"
                    >
                      {s.cta} <FiArrowRight aria-hidden />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ HOW THE GROUP WORKS ═══ */}
      <section className="bg-[#0E3129] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8B49A]">
            <span className="h-px w-5 bg-[#E8B49A]" aria-hidden />
            How the group works
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-center text-3xl font-bold leading-[1.2] text-white md:text-[36px]">
            Group, operating group, <span className="text-[#E8B49A]">product brand.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[13.5px] leading-7 text-white/70">
            Strategy and standards flow down. Customers, contracts, and accountability stay local to
            each operating group.
          </p>

          {/* Ordered list — the layering IS the claim, so it must read in order
              without CSS. */}
          <ol className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {[
              { layer: "Layer 1", name: "Zoiko Group", accent: true },
              { layer: "Layer 2", name: "Operating group", accent: false },
              { layer: "Layer 3", name: "Product brand", accent: false },
            ].map((l, i) => (
              <li key={l.name} className="flex items-center gap-3">
                <div
                  className={`rounded-xl px-8 py-4 text-center ${
                    l.accent ? "bg-[#E85D3C]" : "bg-white/[0.07] ring-1 ring-white/10"
                  }`}
                >
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-white/60">
                    {l.layer}
                  </span>
                  <span className="mt-1 block text-[14px] font-bold text-white">{l.name}</span>
                </div>
                {i < 2 && <FiArrowRight className="text-white/40" aria-hidden />}
              </li>
            ))}
          </ol>

          <ul className="mt-7 flex flex-wrap justify-center gap-2.5">
            {entities.map((e) => (
              <li
                key={e}
                className="rounded-full bg-white/[0.06] px-4 py-2 text-[11.5px] text-white/80 ring-1 ring-white/10"
              >
                {e}
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-2xl text-center text-[12px] leading-6 text-white/60">
            Operating groups own their own strategy, products, regulatory posture, and customers.
            Shared capabilities may be reused across the group only through approved boundaries —
            shared technology never means shared customer data or a shared contracting entity. Your
            contract is always with the operating group or product you use, not with Zoiko Group as a
            whole.
          </p>
        </div>
      </section>

      {/* ═══ PORTFOLIO ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Portfolio</Eyebrow>
          <H2>
            A curated look, <span className="text-[#C2421F]">not a logo wall.</span>
          </H2>
          <Lede>
            Businesses appear here only once they&apos;re live and approved for public listing.
            Sectors without a public brand yet stay open, not padded.
          </Lede>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {portfolio.map((p) => {
              const live = p.status === "Live";
              return (
                <li
                  key={p.name}
                  className={`rounded-2xl p-5 text-center ${
                    live ? "border border-[#E8A28C] bg-[#FDF1EC]" : "border border-[#E8E2D5] bg-white"
                  }`}
                >
                  <span className="mx-auto block h-2 w-2 rounded-full bg-[#E85D3C]" aria-hidden />
                  <p className="mt-3.5 text-[13.5px] font-bold text-[#0E2A21]">{p.name}</p>
                  <p className="mt-1 text-[11.5px] text-[#8C8271]">{p.entity}</p>
                  <span
                    className={`mt-3 inline-block rounded-full px-3 py-1 text-[9.5px] font-bold uppercase tracking-[0.08em] ${
                      live ? "bg-[#FBDDD2] text-[#C2421F]" : "bg-[#EDE7DB] text-[#8C8271]"
                    }`}
                  >
                    {p.status}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ═══ SHARED PRINCIPLES ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Shared principles</Eyebrow>
          <H2>
            What holds <span className="text-[#C2421F]">One Group</span> together.
          </H2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div key={p.n} className="rounded-2xl bg-white p-5">
                <span className="text-[11.5px] font-bold text-[#C2421F]">{p.n}</span>
                <h3 className="mt-2.5 text-[14.5px] font-bold text-[#0E2A21]">{p.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TRUST & GOVERNANCE ═══ */}
      <section className="bg-[#FBFAF7] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Trust &amp; governance</Eyebrow>
          <H2>
            Responsible <span className="text-[#C2421F]">by design.</span>
          </H2>
          <Lede>
            Group-level principles set the floor. Product-specific evidence — certifications,
            policies, and status pages — lives with each product.
          </Lede>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {governance.map((g) => (
              <div key={g.title} className="rounded-2xl bg-[#EDE7DB] p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-[#0E5C4E]">
                  {g.icon}
                </span>
                <h3 className="mt-4 text-[14.5px] font-bold text-[#0E2A21]">{g.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{g.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GLOBAL OPERATING APPROACH ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <Eyebrow centered={false}>Global operating approach</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-[1.2] text-[#0E2A21] md:text-[36px]">
              Distributed teams, <span className="text-[#C2421F]">local markets.</span>
            </h2>
            <p className="mt-5 text-[13.5px] leading-7 text-[#5C6660]">
              We describe Zoiko Group as globally oriented only to the extent it&apos;s backed by real
              offices, teams, and market operations. Where our teams work is kept separate from where
              a product is commercially available — office presence is never a proxy for licensing or
              regulatory footprint.
            </p>

            <dl className="mt-8 space-y-3">
              {regions.map((r) => (
                <div
                  key={r.name}
                  className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-white px-5 py-3.5"
                >
                  <dt className="text-[13px] font-bold text-[#0E2A21]">{r.name}</dt>
                  <dd className="text-[12px] text-[#8C8271]">{r.role}</dd>
                </div>
              ))}
            </dl>
          </div>

          <Img src={IMAGES.city.src} alt={IMAGES.city.alt} className="h-[340px] w-full" />
        </div>
      </section>

      {/* ═══ PEOPLE & CULTURE ═══ */}
      <section className="bg-[#FBFAF7] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <Img src={IMAGES.culture.src} alt={IMAGES.culture.alt} className="h-[320px] w-full" />

          <div>
            <Eyebrow centered={false}>People &amp; culture</Eyebrow>
            <h2 className="mt-5 text-3xl font-bold leading-[1.2] text-[#0E2A21] md:text-[36px]">
              Culture is <span className="text-[#C2421F]">operating behavior,</span> not a slogan.
            </h2>
            <p className="mt-5 text-[13.5px] leading-7 text-[#5C6660]">
              Multidisciplinary teams across engineering, product, design, commercial, legal, and
              support work under the same &ldquo;One Group&rdquo; standard — shared collaboration, not
              removal of operating-company accountability. Inclusion is paired with accountability and
              clear expectations.
            </p>

            <ul className="mt-6 flex flex-wrap gap-2.5">
              {disciplines.map((d) => (
                <li
                  key={d}
                  className="rounded-full bg-[#EDE7DB] px-4 py-2 text-[12px] font-semibold text-[#0E2A21]"
                >
                  {d}
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="mt-7 inline-flex h-12 items-center rounded-full bg-[#E85D3C] px-7 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#D14C2C]"
            >
              Explore careers
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ MILESTONES ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Milestones</Eyebrow>
          <H2>
            Verifiable, <span className="text-[#C2421F]">not embellished.</span>
          </H2>

          {/* Ordered list: chronology is the content. */}
          <ol className="mx-auto mt-12 max-w-4xl">
            {milestones.map((m) => (
              <li
                key={m.year}
                className="grid gap-2 border-b border-[#DDD3C2] py-6 last:border-b-0 md:grid-cols-[120px_1fr] md:gap-8"
              >
                <span className="text-[18px] font-bold text-[#C2421F]">{m.year}</span>
                <div>
                  <h3 className="text-[15px] font-bold text-[#0E2A21]">{m.title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-6 text-[#5C6660]">{m.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <Img src={IMAGES.workshop.src} alt={IMAGES.workshop.alt} className="mt-10 h-[260px] w-full" />
        </div>
      </section>

      {/* ═══ LEADERSHIP ═══ */}
      <section className="bg-[#FBFAF7] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Leadership</Eyebrow>
          <H2>
            A note from <span className="text-[#C2421F]">group leadership.</span>
          </H2>

          <figure className={`mt-12 grid gap-8 ${cardBase} p-7 md:grid-cols-[220px_1fr] md:p-9`}>
            <Img
              src={IMAGES.leadership.src}
              alt={IMAGES.leadership.alt}
              className="h-[260px] w-full"
              rounded="rounded-xl"
            />
            <div className="self-center">
              <blockquote className="text-[16px] leading-8 text-[#22332C]">
                &ldquo;We built Zoiko Group so every operating company could move with the speed of a
                focused team and the discipline of a group that takes accountability seriously.
                Growth means more sectors we serve well — not more claims we can&apos;t stand
                behind.&rdquo;
              </blockquote>
              <figcaption className="mt-6">
                <span className="block text-[13px] font-bold text-[#0E2A21]">Group Executive</span>
                <span className="block text-[12px] text-[#8C8271]">Office of the CEO, Zoiko Group</span>
              </figcaption>
            </div>
          </figure>
        </div>
      </section>

      {/* ═══ CONNECT ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Connect with the group</Eyebrow>
          <H2>
            Press, partners, and <span className="text-[#C2421F]">people.</span>
          </H2>

          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {connectRoutes.map((r) => (
              <li key={r.title} className="rounded-2xl bg-white p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E4EFE9] text-[#0E5C4E]">
                  {r.icon}
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-[#0E2A21]">{r.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{r.body}</p>
                <Link
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#E85D3C] hover:underline"
                >
                  {r.cta} <FiArrowRight aria-hidden />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ═══ WHERE ZOIKO LOCAL FITS ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="grid items-center gap-8 rounded-[26px] bg-gradient-to-br from-[#12403A] via-[#0F3A34] to-[#0B2E2A] p-7 md:grid-cols-2 md:p-9">
            <Img
              src={IMAGES.handshake.src}
              alt={IMAGES.handshake.alt}
              className="h-[240px] w-full"
              rounded="rounded-xl"
            />
            <div>
              <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8B49A]">
                <span className="h-px w-5 bg-[#E8B49A]" aria-hidden />
                Communications within the wider group
              </p>
              <h2 className="mt-4 text-[28px] font-bold leading-tight text-white">
                Where Zoiko Local <span className="text-[#E8B49A]">fits in.</span>
              </h2>
              <p className="mt-4 text-[13px] leading-7 text-white/70">
                Zoiko Communications Group is the communications-focused operating group within the
                wider Zoiko ecosystem. It develops and operates approved communications products and
                services — including the portfolio that Zoiko Local sits in.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-white px-6 text-[13px] font-semibold text-[#0E2A21] transition hover:bg-[#F1EDE6]"
                >
                  About Zoiko Communications Group
                </Link>
                <Link
                  href="#"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-white/25 px-6 text-[13px] font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Zoiko Local
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-[#F7F3EC] pb-14 md:pb-20">
        <div className="mx-auto max-w-3xl px-5">
          <Eyebrow>FAQ</Eyebrow>
          <H2>
            Questions about <span className="text-[#C2421F]">the group.</span>
          </H2>

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
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] transition ${
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
      <section className="bg-[#F7F3EC] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="rounded-[26px] bg-gradient-to-br from-[#1A3A2E] via-[#0F3129] to-[#0B2823] px-8 py-16 text-center">
            <p className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8B49A]">
              <span className="h-px w-5 bg-[#E8B49A]" aria-hidden />
              Be part of it
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-[1.2] text-white md:text-[38px]">
              Ready to explore <span className="text-[#E8B49A]">what we&apos;re building?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[13.5px] leading-7 text-white/70">
              Every operating group builds toward the same standard: real customer value, verified
              trust, and clear accountability.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#E85D3C] px-7 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#D14C2C]"
              >
                Explore our businesses
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-[14px] font-semibold text-white transition hover:bg-white/10"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}