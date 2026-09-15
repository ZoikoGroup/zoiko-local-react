"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  FiAlertTriangle,
  FiArrowRight,
  FiAward,
  FiBook,
  FiBookmark,
  FiBriefcase,
  FiCheck,
  FiClock,
  FiCode,
  FiCompass,
  FiEye,
  FiGlobe,
  FiGrid,
  FiHeadphones,
  FiHeart,
  FiHome,
  FiLayers,
  FiLock,
  FiMapPin,
  FiPhone,
  FiPlus,
  FiSearch,
  FiShield,
  FiSun,
  FiTag,
  FiUserCheck,
  FiUsers,
  FiX,
} from "react-icons/fi";

// ─── IMAGE PATHS ─────────────────────────────────────────────────────────────
const IMAGES = {
  hero: { src: "/images/A multidisciplinary team collaborating in a bright workspace.png", alt: "A team working on laptops around a wooden table" },
  fit: { src: "/images/Engineers and designers working together at laptops.png", alt: "Overhead view of laptops and notebooks on a shared desk" },
  banner: { src: "/images/A diverse team collaborating during a working session.png", alt: "Four colleagues talking and laughing together" },
  remote: { src: "/images/A focused remote working setup at home.png", alt: "A world map showing distributed activity" },
  hybrid: { src: "/images/Background (4).png", alt: "Colleagues meeting around a table with notebooks" },
  office: { src: "/images/A modern open-plan office workspace.png", alt: "A quiet office desk beside a window" },
  life1: { src: "/images/Team members discussing product work.png", alt: "Colleagues collaborating in an open-plan office" },
  life2: { src: "/images/Colleagues collaborating around devices.png", alt: "Two colleagues high-fiving at a desk" },
  life3: { src: "/images/A team working session in progress.png", alt: "A team joining hands over a table of documents" },
  closing: { src: "/images/A team working together toward a shared goal.png", alt: "A colleague presenting at a wall of sticky notes" },
};

// Fixed-frame image. Wrapper holds the reserved space, so a missing file shows
// the warm placeholder tone rather than collapsing the section.
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

// ─── ROLES (sample data — replace with the ATS feed) ─────────────────────────
const TEAMS = [
  "All teams",
  "Engineering",
  "Product",
  "Design",
  "Telecom Operations",
  "Security & Trust",
  "Commercial",
  "Customer Experience",
] as const;

const MODELS = ["Any model", "Remote", "Hybrid", "Office-based"] as const;
const TYPES = ["Any type", "Full-time", "Part-time", "Contract"] as const;

// Pay transparency is a STATE, never a number. See the note at the top.
type PayState =
  | "Published salary range"
  | "Range shared before interview"
  | "Compensation shared at interview";

type Model = "Remote" | "Hybrid" | "Office-based";

type Role = {
  id: string;
  title: string;
  org: string;
  team: (typeof TEAMS)[number];
  location: string;
  model: Model;
  modelDetail: string;
  type: (typeof TYPES)[number];
  pay: PayState;
  posted: string;
  featured?: boolean;
};

const roles: Role[] = [
  { id: "be-calling", title: "Senior Backend Engineer, Calling Platform", org: "Zoiko Communications Group", team: "Engineering", location: "Remote", model: "Remote", modelDetail: "Remote · UK & EU", type: "Full-time", pay: "Range shared before interview", posted: "Posted 3 days ago", featured: true },
  { id: "designer-comms", title: "Product Designer, Communications", org: "Zoiko Communications Group", team: "Design", location: "London, UK", model: "Hybrid", modelDetail: "Hybrid · London, UK", type: "Full-time", pay: "Published salary range", posted: "Posted 5 days ago", featured: true },
  { id: "pm-receptionist", title: "AI Product Manager, Receptionist", org: "Zoiko Communications Group", team: "Product", location: "London, UK", model: "Hybrid", modelDetail: "Hybrid · London, UK", type: "Full-time", pay: "Range shared before interview", posted: "Posted 1 week ago", featured: true },
  { id: "fe-dashboard", title: "Frontend Engineer, Dashboard", org: "Zoiko Communications Group", team: "Engineering", location: "United States", model: "Remote", modelDetail: "Remote · United States", type: "Full-time", pay: "Published salary range", posted: "Posted 2 days ago" },
  { id: "telecom-ops", title: "Telecom Operations Specialist", org: "Zoiko Communications Group", team: "Telecom Operations", location: "Lagos, Nigeria", model: "Office-based", modelDetail: "Office-based · Lagos, NG", type: "Full-time", pay: "Compensation shared at interview", posted: "Posted 4 days ago" },
  { id: "cx-lead", title: "Customer Experience Lead", org: "Zoiko Communications Group", team: "Customer Experience", location: "Toronto, Canada", model: "Hybrid", modelDetail: "Hybrid · Toronto, CA", type: "Full-time", pay: "Range shared before interview", posted: "Posted 1 week ago" },
  { id: "sec-trust", title: "Security Engineer, Trust", org: "Zoiko Communications Group", team: "Security & Trust", location: "Multiple (remote-eligible)", model: "Remote", modelDetail: "Remote · UK / EU / Canada", type: "Full-time", pay: "Range shared before interview", posted: "Posted 6 days ago" },
  { id: "commercial-growth", title: "Commercial Manager, Growth", org: "Zoiko Communications Group", team: "Commercial", location: "Kingston, Jamaica", model: "Office-based", modelDetail: "Office-based · Kingston, JM", type: "Full-time", pay: "Compensation shared at interview", posted: "Posted 2 weeks ago" },
];

// ─── WHY ZOIKO ───────────────────────────────────────────────────────────────
const whyZoiko = [
  { icon: <FiPhone />, title: "Meaningful products", body: "Build communications people and businesses depend on every day, not throwaway features." },
  { icon: <FiLayers />, title: "Multidisciplinary work", body: "Product, engineering, design, telecom, security and support solve problems together." },
  { icon: <FiCompass />, title: "Real ownership", body: "Take responsibility for outcomes with the context and autonomy to make good decisions." },
  { icon: <FiGlobe />, title: "Global & local problems", body: "Work across markets, number rules and real regulatory constraints — not a sandbox." },
];

const teamList = [
  { icon: <FiCode />, name: "Engineering" },
  { icon: <FiGrid />, name: "Product" },
  { icon: <FiCompass />, name: "Design" },
  { icon: <FiPhone />, name: "Telecom Operations" },
  { icon: <FiShield />, name: "Security & Trust" },
  { icon: <FiBriefcase />, name: "Commercial" },
  { icon: <FiHeadphones />, name: "Customer Experience" },
  { icon: <FiUsers />, name: "Corporate functions" },
];

const principles = [
  { icon: <FiUsers />, title: "Collaborative by default", body: "Cross-discipline teams share context early and make decisions close to the work." },
  { icon: <FiShield />, title: "Quality & trust", body: "Security, privacy, accessibility and reliability are treated as part of doing the job well." },
  { icon: <FiBook />, title: "Continuous learning", body: "We invest in growth through real projects, feedback and shared knowledge — not slogans." },
];

const workModels = [
  { image: IMAGES.remote, label: "Remote", body: "Fully remote roles are 100% remote within the specific countries stated on each role — never a vague “remote-ish” label. Geographic eligibility is shown per role." },
  { image: IMAGES.hybrid, label: "Hybrid", body: "Hybrid roles combine in-office and remote time around a named location. The expected pattern is stated on the role, not left ambiguous." },
  { image: IMAGES.office, label: "Office-based", body: "Some roles are performed primarily on-site. Office presence for one role does not imply eligibility or an office for another." },
];

const benefits = [
  { icon: <FiTag />, title: "Fair pay", body: "Compensation set from approved requisition records and role level." },
  { icon: <FiHeart />, title: "Time to recharge", body: "Paid leave appropriate to your country and employment type." },
  { icon: <FiSun />, title: "Health & wellbeing", body: "Health-related benefits where offered by location and entity." },
  { icon: <FiBook />, title: "Learning support", body: "Support for growth through real work and development budgets where offered." },
];

const stages = [
  { n: "1", title: "Apply", body: "Submit your application — no account required to view roles." },
  { n: "2", title: "Review", body: "A recruiter reviews against the role's job-related criteria." },
  { n: "3", title: "Interview(s)", body: "Conversations with the team about the work and your experience." },
  { n: "4", title: "Assessment", body: "Only if the role needs it — purpose and effort shared up front." },
  { n: "5", title: "Decision", body: "A clear outcome, with feedback where we can provide it." },
  { n: "6", title: "Checks & offer", body: "Role-appropriate checks, then a written offer." },
  { n: "7", title: "Onboarding", body: "A structured start so you can do your best work." },
];

const fraudPoints = [
  "Verify every role on this official Careers site.",
  "Official recruiters use approved Zoiko channels.",
  "We won't ask for payment or sensitive ID early.",
  "Report suspicious messages before responding.",
];

const lifeShots = [
  { image: IMAGES.life1, caption: "Building together" },
  { image: IMAGES.life2, caption: "Solving real problems" },
  { image: IMAGES.life3, caption: "Learning & growing" },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
// Only the first answer was legible in the mockup. The rest restate rules
// already stated on this page so the FAQ can't contradict it.
const faqs = [
  {
    q: "How do I apply for a role at Zoiko?",
    a: "Open a role from the list above and use its “View role & apply” link. You don't need to create an account to view job details, and you'll only be asked for information relevant to recruiting — never bank details, government ID, or pay history in an ordinary initial application.",
  },
  {
    q: "Which roles are actually remote?",
    a: "Fully remote roles are 100% remote within the specific countries stated on that role — not a vague “remote-friendly” label. Geographic eligibility is shown per role, and an office in a location does not by itself make every role there remote-eligible.",
  },
  {
    q: "Will I see the salary before interviewing?",
    a: "It depends on the role, and each listing states which applies: a published salary range, a range shared before interview, or compensation shared at interview. Ranges come from the approved requisition record — never from an estimate.",
  },
  {
    q: "How do I request an accommodation for the hiring process?",
    a: "Use the recruitment accommodations route on this page, ideally before an assessment or interview. You can request one without providing proof of disability, you never have to disclose a diagnosis to ask, and accommodation requests are kept separate from hiring decisions.",
  },
  {
    q: "How is AI used in hiring?",
    a: "A recruiter reviews applications against the role's job-related criteria. Where any automated assistance is used in the process, it supports a human decision rather than replacing it, and you can ask how your application was assessed.",
  },
  {
    q: "How do I know a Zoiko recruiter is genuine?",
    a: "Every live role appears on this official Careers site, and official recruiters use approved Zoiko channels. Zoiko never asks candidates to pay for a job, equipment, or training, and never requests bank details or government ID during an ordinary application. If something looks off, report it before responding.",
  },
];

// ─── SHARED ──────────────────────────────────────────────────────────────────
const cardBase = "rounded-2xl border border-[#E8E2D5] bg-white";
const chip = "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4EFE9] text-[#0E5C4E]";

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
    <h2 className="mx-auto mt-5 max-w-2xl text-center text-3xl font-bold leading-[1.2] tracking-tight text-[#0E2A21] md:text-[36px]">
      {children}
    </h2>
  );
}

// Model pill colour carries meaning — remote / hybrid / office are the thing
// candidates scan for, so they're visually distinct rather than uniform.
function modelClass(model: Model) {
  if (model === "Remote") return "bg-[#E4EFE9] text-[#0E5C4E]";
  if (model === "Hybrid") return "bg-[#E4EDF7] text-[#2B5C9B]";
  return "bg-[#FBF2E1] text-[#8A6114]";
}

function payClass(pay: PayState) {
  return pay === "Published salary range"
    ? "bg-[#FBDDD2] text-[#C2421F]"
    : "bg-[#FBEAE3] text-[#C2421F]";
}

const selectClass =
  "h-11 w-full rounded-full border border-[#DDD3C2] bg-white px-4 text-[13px] text-[#0E2A21] focus:border-[#0E5C4E] focus:outline-none";

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Careers() {
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState<(typeof TEAMS)[number]>("All teams");
  const [model, setModel] = useState<(typeof MODELS)[number]>("Any model");
  const [type, setType] = useState<(typeof TYPES)[number]>("Any type");
  const [saved, setSaved] = useState<string[]>([]);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return roles.filter((r) => {
      const okQuery =
        !q ||
        r.title.toLowerCase().includes(q) ||
        r.team.toLowerCase().includes(q) ||
        r.location.toLowerCase().includes(q);
      const okTeam = team === "All teams" || r.team === team;
      const okModel = model === "Any model" || r.model === model;
      const okType = type === "Any type" || r.type === type;
      return okQuery && okTeam && okModel && okType;
    });
  }, [query, team, model, type]);

  function toggleSave(id: string) {
    setSaved((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  }

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      {/* ═══ HERO ═══ */}
      <section className="bg-gradient-to-br from-[#F7F3EC] via-[#F7F2EA] to-[#F9EDE6] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <Eyebrow centered={false}>Careers</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-[#0E2A21] md:text-[50px]">
              Build communications{" "}
              <span className="italic text-[#C2421F]">people can rely on.</span>
            </h1>
            <p className="mt-5 max-w-lg text-[14px] leading-7 text-[#5C6660]">
              Join the teams behind Zoiko Local, building the numbers, calling, messaging, video and
              AI-assisted experiences that keep people and businesses connected — locally and
              globally.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#open-roles"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#E85D3C] px-7 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#D14C2C]"
              >
                View open roles
              </Link>
              <Link
                href="#teams"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#D9D2C4] bg-white px-7 text-[14px] font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
              >
                Meet our teams
              </Link>
            </div>
          </div>

          <Img src={IMAGES.hero.src} alt={IMAGES.hero.alt} className="h-[330px] w-full" />
        </div>
      </section>

      {/* ═══ OPEN ROLES ═══ */}
      <section id="open-roles" className="bg-[#F7F3EC] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Open roles</Eyebrow>
          <H2>Find your next role at Zoiko</H2>

          {/* Search + filters — all four really filter the list below. */}
          <div className={`mt-10 ${cardBase} p-5`}>
            <div className="grid items-end gap-4 lg:grid-cols-[1.6fr_1fr_1fr_1fr_auto]">
              <div>
                <label htmlFor="job-q" className="mb-2 block text-[12px] font-semibold text-[#0E2A21]">
                  Keyword or title
                </label>
                <div className="relative">
                  <FiSearch
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8C8271]"
                    aria-hidden
                  />
                  <input
                    id="job-q"
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="e.g. engineer, design, security"
                    className="h-11 w-full rounded-full border border-[#DDD3C2] bg-white pl-11 pr-4 text-[13px] text-[#0E2A21] placeholder:text-[#A79C86] focus:border-[#0E5C4E] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="job-team" className="mb-2 block text-[12px] font-semibold text-[#0E2A21]">
                  Team
                </label>
                <select
                  id="job-team"
                  value={team}
                  onChange={(e) => setTeam(e.target.value as (typeof TEAMS)[number])}
                  className={selectClass}
                >
                  {TEAMS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="job-model" className="mb-2 block text-[12px] font-semibold text-[#0E2A21]">
                  Work model
                </label>
                <select
                  id="job-model"
                  value={model}
                  onChange={(e) => setModel(e.target.value as (typeof MODELS)[number])}
                  className={selectClass}
                >
                  {MODELS.map((m) => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="job-type" className="mb-2 block text-[12px] font-semibold text-[#0E2A21]">
                  Employment type
                </label>
                <select
                  id="job-type"
                  value={type}
                  onChange={(e) => setType(e.target.value as (typeof TYPES)[number])}
                  className={selectClass}
                >
                  {TYPES.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#0E3A32] px-6 text-[13.5px] font-semibold text-white transition hover:bg-[#0B2E2A]"
              >
                <FiSearch aria-hidden /> Search
              </button>
            </div>
          </div>

          {/* Live count, reflecting the filters. */}
          <p className="mt-7 text-[13px] font-bold text-[#0E2A21]" aria-live="polite">
            {filtered.length} open {filtered.length === 1 ? "role" : "roles"}
          </p>

          {filtered.length === 0 ? (
            <p className={`mt-4 ${cardBase} px-6 py-8 text-center text-[13.5px] text-[#5C6660]`}>
              No roles match those filters right now. Try widening the team or work model.
            </p>
          ) : (
            <ul className="mt-4 space-y-4">
              {filtered.map((r) => {
                const isSaved = saved.includes(r.id);
                return (
                  <li key={r.id} className={`${cardBase} p-5 md:p-6`}>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div className="min-w-0">
                        {r.featured && (
                          <span className="inline-block rounded-full bg-[#FBDDD2] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-[#C2421F]">
                            Featured
                          </span>
                        )}
                        <h3 className={`text-[17px] font-bold text-[#0E2A21] ${r.featured ? "mt-3" : ""}`}>
                          {r.title}
                        </h3>
                        <p className="mt-1.5 flex items-center gap-2 text-[12.5px] text-[#8C8271]">
                          <FiHome className="text-[12px]" aria-hidden />
                          {r.org} · {r.team}
                        </p>
                      </div>
                      <span className="text-[12px] text-[#8C8271]">{r.posted}</span>
                    </div>

                    <ul className="mt-4 flex flex-wrap gap-2.5">
                      <li className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE7DB] px-3 py-1.5 text-[12px] font-semibold text-[#5C5C55]">
                        <FiMapPin className="text-[11px]" aria-hidden /> {r.location}
                      </li>
                      <li
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold ${modelClass(r.model)}`}
                      >
                        <FiGlobe className="text-[11px]" aria-hidden /> {r.modelDetail}
                      </li>
                      <li className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE7DB] px-3 py-1.5 text-[12px] font-semibold text-[#5C5C55]">
                        <FiClock className="text-[11px]" aria-hidden /> {r.type}
                      </li>
                      {/* Pay STATE, never a figure. See the note at the top. */}
                      <li
                        className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-semibold ${payClass(r.pay)}`}
                      >
                        <FiTag className="text-[11px]" aria-hidden /> {r.pay}
                      </li>
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center rounded-full bg-[#E85D3C] px-5 text-[13px] font-semibold text-white transition hover:bg-[#D14C2C]"
                      >
                        View role &amp; apply
                      </Link>
                      <button
                        type="button"
                        onClick={() => toggleSave(r.id)}
                        aria-pressed={isSaved}
                        className={`inline-flex h-10 items-center gap-2 rounded-full border px-5 text-[13px] font-semibold transition ${
                          isSaved
                            ? "border-[#0E5C4E] bg-[#E4EFE9] text-[#0E5C4E]"
                            : "border-[#DDD3C2] bg-white text-[#0E2A21] hover:border-[#0E2A21]"
                        }`}
                      >
                        {isSaved ? (
                          <>
                            <FiCheck aria-hidden /> Saved
                          </>
                        ) : (
                          <>
                            <FiBookmark aria-hidden /> Save
                          </>
                        )}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Governed-data disclaimer — keep this. */}
          <p className="mt-6 flex items-start gap-2.5 rounded-xl bg-[#EDE7DB] px-5 py-4 text-[11.5px] leading-5 text-[#6E6656]">
            <FiEye className="mt-0.5 shrink-0" aria-hidden />
            Roles and compensation shown here are illustrative sample data for this design. Live
            roles, hiring organization, work model, and approved pay ranges are served from the
            applicant tracking system, and closed roles are removed from search automatically. Pay
            ranges come from the approved requisition record — never from estimates or inference.
          </p>
        </div>
      </section>

      {/* ═══ WHY ZOIKO ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Why Zoiko</Eyebrow>
          <H2>Work that matters, without the buzzwords</H2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyZoiko.map((w) => (
              <div key={w.title} className="rounded-2xl bg-white p-5">
                <span className={chip}>{w.icon}</span>
                <h3 className="mt-4 text-[14.5px] font-bold text-[#0E2A21]">{w.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{w.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TEAMS ═══ */}
      <section id="teams" className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Teams &amp; disciplines</Eyebrow>
          <H2>Where you might fit</H2>

          <div className="mt-12 grid items-center gap-8 lg:grid-cols-[1.15fr_1fr]">
            <ul className="grid gap-3 sm:grid-cols-2">
              {teamList.map((t) => (
                <li key={t.name}>
                  <Link
                    href="#open-roles"
                    className={`${cardBase} flex items-center gap-3 px-4 py-3.5 transition hover:border-[#0E2A21]`}
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E4EFE9] text-[13px] text-[#0E5C4E]">
                      {t.icon}
                    </span>
                    <span className="text-[13.5px] font-bold text-[#0E2A21]">{t.name}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <Img src={IMAGES.fit.src} alt={IMAGES.fit.alt} className="h-[280px] w-full" />
          </div>

          <div className="relative mt-10">
            <Img src={IMAGES.banner.src} alt={IMAGES.banner.alt} className="h-[220px] w-full" />
            <span className="absolute bottom-5 left-5 rounded-lg bg-[#0E3A32]/90 px-4 py-2 text-[12.5px] font-bold text-white">
              Multidisciplinary teams, solving real communications problems together.
            </span>
          </div>
        </div>
      </section>

      {/* ═══ PRINCIPLES ═══ */}
      <section className="bg-[#F7F3EC] pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>How we work</Eyebrow>
          <H2>Principles over perks</H2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map((p) => (
              <div key={p.title} className={`${cardBase} p-5`}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#FBEAE3] text-[#C2421F]">
                  {p.icon}
                </span>
                <h3 className="mt-4 text-[14.5px] font-bold text-[#0E2A21]">{p.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WORK MODELS ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Locations &amp; work models</Eyebrow>
          <H2>Where the work happens</H2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {workModels.map((w) => (
              <div key={w.label} className="overflow-hidden rounded-2xl bg-white">
                <div className="relative">
                  <Img src={w.image.src} alt={w.image.alt} className="h-[150px] w-full" rounded="rounded-none" />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 py-3 text-[13.5px] font-bold text-white">
                    {w.label}
                  </span>
                </div>
                <p className="p-5 text-[12px] leading-6 text-[#5C6660]">{w.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 flex items-start gap-2.5 text-[11.5px] leading-5 text-[#6E6656]">
            <FiMapPin className="mt-0.5 shrink-0 text-[#0E5C4E]" aria-hidden />
            Each role states its own work model, location, and remote eligibility. An office in a
            location does not by itself make every role there remote-eligible or office-required.
          </p>
        </div>
      </section>

      {/* ═══ BENEFITS ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Benefits &amp; rewards</Eyebrow>
          <H2>Governed by location and employment arrangement</H2>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b) => (
              <div key={b.title} className={`${cardBase} p-5`}>
                <span className={chip}>{b.icon}</span>
                <h3 className="mt-4 text-[14px] font-bold text-[#0E2A21]">{b.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{b.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 flex items-start gap-2.5 rounded-xl bg-[#EDE7DB] px-5 py-4 text-[11.5px] leading-5 text-[#6E6656]">
            <FiEye className="mt-0.5 shrink-0" aria-hidden />
            Benefits vary by country and employment arrangement. The specific benefits for a role are
            confirmed on the job detail and offer, sourced from the governed benefits record — this
            section describes categories, not guarantees.
          </p>
        </div>
      </section>

      {/* ═══ HIRING PROCESS ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Hiring process</Eyebrow>
          <H2>What to expect — not every role uses every stage</H2>

          {/* Ordered list — the sequence is the content. */}
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7">
            {stages.map((s) => (
              <li key={s.n} className="rounded-2xl bg-white p-4">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0E3A32] text-[12px] font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-3.5 text-[13.5px] font-bold text-[#0E2A21]">{s.title}</h3>
                <p className="mt-1.5 text-[11.5px] leading-5 text-[#5C6660]">{s.body}</p>
              </li>
            ))}
          </ol>

          <p className="mt-6 flex items-start gap-2.5 text-[11.5px] leading-5 text-[#6E6656]">
            <FiUserCheck className="mt-0.5 shrink-0 text-[#0E5C4E]" aria-hidden />
            Need an adjustment for any stage? You can request one{" "}
            <strong className="font-bold text-[#5A5346]">before</strong> an assessment or interview
            through the recruitment accommodations route below — you never have to disclose a
            diagnosis to ask.
          </p>
        </div>
      </section>

      {/* ═══ ACCOMMODATION + FRAUD ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2">
          <div className="rounded-2xl border border-[#CBDDD5] bg-[#E7F1EC] p-6">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0E3A32] text-white">
              <FiUserCheck aria-hidden />
            </span>
            <h3 className="mt-4 text-[15.5px] font-bold text-[#0E2A21]">
              Need an adjustment for the hiring process?
            </h3>
            <p className="mt-2.5 text-[12.5px] leading-6 text-[#3F4B45]">
              We make reasonable adjustments so you can take part fairly — accessible interviews,
              adjusted assessments, alternate formats and more. You can request one without providing
              proof of disability by default, and accommodation requests are kept separate from hiring
              decisions.
            </p>
            <Link
              href="#"
              className="mt-5 inline-flex h-11 items-center rounded-full bg-[#0E3A32] px-5 text-[13px] font-semibold text-white transition hover:bg-[#0B2E2A]"
            >
              Request a recruitment accommodation
            </Link>
          </div>

          {/* Candidate-safety notice, not decoration. */}
          <div
            role="note"
            aria-label="Recruitment fraud warning"
            className="rounded-2xl border border-[#EFC9C4] bg-[#FBE7E4] p-6"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B3261E] text-white">
              <FiAlertTriangle aria-hidden />
            </span>
            <h3 className="mt-4 text-[15.5px] font-bold text-[#7E1B15]">Beware of recruitment fraud</h3>
            <p className="mt-2.5 text-[12.5px] leading-6 text-[#8A3B33]">
              Scammers impersonate well-known brands.{" "}
              <strong className="font-bold text-[#7E1B15]">
                Zoiko never asks candidates to pay for a job, equipment, or training,
              </strong>{" "}
              and never requests bank details or government ID during an ordinary application.
            </p>

            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {fraudPoints.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <FiCheck className="mt-0.5 shrink-0 text-[12px] text-[#8A3B33]" strokeWidth={3} aria-hidden />
                  <span className="text-[11.5px] leading-5 text-[#8A3B33]">{p}</span>
                </li>
              ))}
            </ul>

            <Link
              href="#"
              className="mt-5 inline-flex h-11 items-center rounded-full bg-[#B3261E] px-5 text-[13px] font-semibold text-white transition hover:bg-[#8E1E17]"
            >
              Verify a role or report fraud
            </Link>
          </div>
        </div>

        {/* Candidate privacy */}
        <div className="mx-auto mt-5 max-w-6xl px-5">
          <div className={`flex flex-col items-start justify-between gap-5 ${cardBase} p-6 md:flex-row md:items-center`}>
            <div className="flex items-start gap-4">
              <span className={chip}>
                <FiLock />
              </span>
              <div>
                <h3 className="text-[14.5px] font-bold text-[#0E2A21]">Your candidate privacy</h3>
                <p className="mt-1.5 max-w-2xl text-[12.5px] leading-6 text-[#5C6660]">
                  We collect only what we need to consider your application and run recruiting, use a
                  dedicated Candidate Privacy Notice (not the general customer policy), keep any
                  accommodation details separate, and handle international candidate data under
                  applicable privacy and transfer rules.
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#DDD3C2] px-5 py-3 text-[12.5px] font-semibold text-[#0E5C4E] transition hover:border-[#0E2A21]"
            >
              Read the Candidate Privacy Notice <FiArrowRight aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ EARLY CAREERS ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Early careers</Eyebrow>
          <H2>Internships, graduate &amp; apprentice programs</H2>

          {/* Empty state by design — programs appear only when live. */}
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl bg-white p-6 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <span className={chip}>
                <FiAward />
              </span>
              <div>
                <h3 className="text-[14.5px] font-bold text-[#0E2A21]">
                  Programs appear here when they&apos;re open
                </h3>
                <p className="mt-1.5 max-w-2xl text-[12.5px] leading-6 text-[#5C6660]">
                  Internships, graduate programs and apprenticeships are listed only while live
                  requisitions exist — with eligibility, timing, application window, compensation state
                  and any work-authorization requirements shown. Internships are never presented as a
                  guaranteed route to a permanent role.
                </p>
              </div>
            </div>
            <Link
              href="#open-roles"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#DDD3C2] px-5 py-3 text-[12.5px] font-semibold text-[#0E5C4E] transition hover:border-[#0E2A21]"
            >
              See current open roles <FiArrowRight aria-hidden />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ LIFE AT ZOIKO ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Life at Zoiko</Eyebrow>
          <H2>How we spend our days</H2>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {lifeShots.map((s) => (
              <div key={s.caption} className="relative">
                <Img src={s.image.src} alt={s.image.alt} className="h-[200px] w-full" />
                <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-4 py-3 text-[12.5px] font-bold text-white">
                  {s.caption}
                </span>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-[11.5px] leading-5 text-[#8C8271]">
            Imagery is illustrative. Employee stories and profiles are published only with the
            individual&apos;s consent and current-role validation.
          </p>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <Eyebrow>FAQ</Eyebrow>
          <H2>Candidate questions, answered</H2>

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

      {/* ═══ GROUP CAREERS + CLOSING ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className={`flex flex-col items-start justify-between gap-5 ${cardBase} p-6 md:flex-row md:items-center`}>
            <div className="flex items-start gap-4">
              <span
                className="h-11 w-11 shrink-0 rounded-xl bg-[conic-gradient(at_30%_30%,#2B4C9B,#7C5CD6,#E85D3C,#12A594,#2B4C9B)]"
                aria-hidden
              />
              <div>
                <h3 className="text-[14.5px] font-bold text-[#0E2A21]">Explore all Zoiko Group careers</h3>
                <p className="mt-1.5 max-w-2xl text-[12.5px] leading-6 text-[#5C6660]">
                  Looking beyond Zoiko Local? When a wider Zoiko Group recruiting estate is live, you
                  can browse opportunities across the group — clearly labeled by hiring organization
                  and sector, never blended into one ambiguous feed.
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[#DDD3C2] px-5 py-3 text-[12.5px] font-semibold text-[#0E5C4E] transition hover:border-[#0E2A21]"
            >
              About Zoiko Communications Group <FiArrowRight aria-hidden />
            </Link>
          </div>

          <div className="relative mt-8">
            <Img src={IMAGES.closing.src} alt={IMAGES.closing.alt} className="h-[240px] w-full" />
            <span className="absolute bottom-5 left-5 rounded-lg bg-[#0E3A32]/90 px-4 py-2 text-[12.5px] font-bold text-white">
              Ready to build communications people can rely on?
            </span>
          </div>

          <div className="mt-8 rounded-[26px] bg-gradient-to-br from-[#12403A] via-[#0F3A34] to-[#0B2E2A] px-8 py-14 text-center">
            <p className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8B49A]">
              <span className="h-px w-5 bg-[#E8B49A]" aria-hidden />
              Join us at Zoiko
            </p>
            <h2 className="mx-auto mt-5 max-w-xl text-3xl font-bold leading-[1.2] text-white md:text-[38px]">
              Find your next role at Zoiko.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[13.5px] leading-7 text-white/70">
              Browse open roles across engineering, product, design, telecom operations, security,
              commercial and customer experience — with help from our accommodations team where you
              need it.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="#open-roles"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#E85D3C] px-7 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#D14C2C]"
              >
                View open roles
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-[14px] font-semibold text-[#0E2A21] transition hover:bg-[#F1EDE6]"
              >
                Read the Candidate Privacy Notice
              </Link>
              <Link
                href="#"
                className="inline-flex h-12 items-center justify-center rounded-full border border-white/25 px-7 text-[14px] font-semibold text-white transition hover:bg-white/10"
              >
                Request an accommodation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}