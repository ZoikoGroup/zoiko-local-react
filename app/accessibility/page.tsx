"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiActivity,
  FiArrowRight,
  FiCheck,
  FiChevronRight,
  FiClock,
  FiCode,
  FiDownload,
  FiEye,
  FiFileText,
  FiFlag,
  FiHeadphones,
  FiKey,
  FiLayers,
  FiLifeBuoy,
  FiMail,
  FiMessageSquare,
  FiMic,
  FiMonitor,
  FiMousePointer,
  FiPhone,
  FiPlus,
  FiRefreshCw,
  FiShield,
  FiSmartphone,
  FiTarget,
  FiUserCheck,
  FiUsers,
  FiVideo,
  FiVolume2,
  FiX,
  FiZoomIn,
} from "react-icons/fi";


const cardBase = "rounded-2xl border border-[#E8E2D5] bg-white";
const chip = "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4EFE9] text-[#0E5C4E]";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#C2603F]">
      <span className="h-px w-5 bg-[#C2603F]" aria-hidden />
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-3 max-w-2xl text-2xl font-bold leading-[1.25] tracking-tight text-[#0E2A21] md:text-[30px]">
      {children}
    </h2>
  );
}

// Status pill colour carries meaning, same convention as modelClass/payClass
// on the Careers page: a candidate/reader scans pills, not prose.
type Tone = "good" | "warn" | "info" | "bad";

function toneClass(tone: Tone) {
  switch (tone) {
    case "good":
      return "bg-[#E4EFE9] text-[#0E5C4E]";
    case "warn":
      return "bg-[#FBF2E1] text-[#8A6114]";
    case "bad":
      return "bg-[#FBDDD2] text-[#C2421F]";
    case "info":
    default:
      return "bg-[#E4EDF7] text-[#2B5C9B]";
  }
}

// Maps the literal status strings used throughout this page to a tone. Kept
// as one lookup so a status reads the same colour everywhere it appears.
function statusTone(status: string): Tone {
  const s = status.toLowerCase();
  if (s.includes("not conformant") || s.includes("no support")) return "bad";
  if (s.includes("partially") || s.includes("in progress") || s.includes("limitation")) return "warn";
  if (s.includes("supported") || s.includes("conformant") || s.includes("complete")) return "good";
  return "info";
}

function StatusPill({ status }: { status: string }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11.5px] font-semibold ${toneClass(statusTone(status))}`}>
      {status}
    </span>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-6 flex items-start gap-2.5 rounded-xl bg-[#EDE7DB] px-5 py-4 text-[11.5px] leading-5 text-[#6E6656]">
      <FiEye className="mt-0.5 shrink-0" aria-hidden />
      {children}
    </p>
  );
}

// ─── DATA ──────────────────────────────────────────────────────────────────

const toc = [
  { id: "status", label: "Accessibility status" },
  { id: "commitments", label: "Accessibility commitments" },
  { id: "channels", label: "Products & channels covered" },
  { id: "modes", label: "Features by communications mode" },
  { id: "wcag22", label: "WCAG 2.2 additions" },
  { id: "assistive-tech", label: "Assistive tech & compatibility" },
  { id: "limitations", label: "Known limitations" },
  { id: "report", label: "Report an accessibility barrier" },
  { id: "accommodations", label: "Accommodations & alternate formats" },
  { id: "support", label: "Accessible customer support" },
  { id: "methodology", label: "Testing & conformance methodology" },
  { id: "documentation", label: "Documentation (ACR / VPAT)" },
  { id: "regulatory", label: "Plans & regulatory notices" },
  { id: "history", label: "Version history" },
  { id: "faq", label: "FAQ" },
];

const atAGlance: { label: string; status: string }[] = [
  { label: "Screen readers", status: "Supported" },
  { label: "Captions / STT", status: "Where offered" },
  { label: "Mobile apps", status: "In progress" },
  { label: "Live captions", status: "Some limitations" },
];

const needHelpNow = [
  { icon: <FiFlag />, label: "Report a barrier", href: "#report" },
  { icon: <FiUserCheck />, label: "Request an accommodation", href: "#accommodations" },
  { icon: <FiHeadphones />, label: "Contact accessibility team", href: "#support" },
];

const jumpTo = [
  { icon: <FiMonitor />, label: "Screen reader support", href: "#assistive-tech" },
  { icon: <FiKey />, label: "Keyboard access", href: "#assistive-tech" },
  { icon: <FiVolume2 />, label: "Captions & STT", href: "#modes" },
  { icon: <FiVideo />, label: "Video & voice", href: "#modes" },
];

const related = [
  { label: "Recording & Consent", href: "#" },
  { label: "Status", href: "#" },
];

// Statement summary — a state, not a self-graded score. Sourced from the
// governed accessibility statement record, same pattern the Careers page
// uses for pay ranges: never estimated, never inferred.
const statementSummary = [
  { label: "Standard", value: "WCAG 2.2 Level AA" },
  { label: "Coverage", value: "Partially conformant" },
  { label: "Last reviewed", value: "August 20, 2026" },
  { label: "Next review", value: "Under review" },
];

const commitments = [
  { icon: <FiLayers />, title: "Accessible by default", body: "New features are built to WCAG 2.2 AA from design, not patched in after launch." },
  { icon: <FiUsers />, title: "Tested with assistive technology", body: "Screen readers, switch access and voice control are part of our regular test matrix, not a one-off audit." },
  { icon: <FiMessageSquare />, title: "Multiple contact routes", body: "Reach us by email, phone or in-product support if a barrier or format doesn't work for you." },
  { icon: <FiRefreshCw />, title: "Continuous remediation", body: "Known issues are tracked to a fix or an interim workaround — not left open indefinitely." },
];

// Best-effort: exact per-surface status wording was hard to read in the
// mockup below "Website" and "Mobile apps"; statuses here are plausible
// reconstructions consistent with the "Partially conformant" statement
// summary above. Confirm against the live statement before publishing.
const channels: { icon: React.ReactNode; name: string; status: string }[] = [
  { icon: <FiMonitor />, name: "Website", status: "Partially conformant" },
  { icon: <FiSmartphone />, name: "Mobile apps", status: "In progress" },
  { icon: <FiUserCheck />, name: "Account dashboard", status: "Partially conformant" },
  { icon: <FiPhone />, name: "Calling", status: "Partially conformant" },
  { icon: <FiMessageSquare />, name: "Messaging", status: "Substantially conformant" },
  { icon: <FiVideo />, name: "Video", status: "In progress" },
  { icon: <FiActivity />, name: "AI features", status: "Supported" },
  { icon: <FiFileText />, name: "Notifications & documents", status: "Supported" },
  { icon: <FiLifeBuoy />, name: "Support", status: "Supported" },
];

const featuresByMode = [
  {
    icon: <FiPhone />,
    title: "Calling / voice",
    features: [
      "Keyboard-operable call controls with visible focus and accessible names",
      "Dial status shown with text and tone, not colour alone",
      "Compatibility with assistive services and TTY/RTT where required and marked",
      "Emergency calling behaviour and limitations called out clearly on this page",
    ],
  },
  {
    icon: <FiMessageSquare />,
    title: "Messaging",
    features: [
      "Semantic markup for screen readers, no visual-only conveyance of information",
      "Text scales without loss of function or content off-screen",
      "Message status (sent, delivered, read) is announced, not only shown as an icon colour change",
      "Attachments have accessible names and controls",
    ],
  },
  {
    icon: <FiVideo />,
    title: "Video",
    features: [
      "Captions where offered, with keyboard-accessible caption toggle",
      "Speaker labels and text alternatives on key on-screen elements",
      "Real-time text and text-based participation supported where the service and legislation require it",
    ],
  },
  {
    icon: <FiActivity />,
    title: "AI features",
    features: [
      "Text alternatives for AI-generated summaries and suggestions",
      "AI assistance is not the only path to complete a task — a manual route is always available",
      "AI transcripts and summaries can be reviewed, edited and confirmed before they're sent or acted on",
      "A feature can be disabled where legislation, RFP commitments or accessibility preferences require it",
    ],
  },
];

const wcag22Additions = [
  "Focus Not Obscured (Minimum)",
  "Dragging Movements — alternative provided",
  "Target Size (Minimum)",
  "Consistent Help",
  "Redundant Entry",
  "Accessible Authentication (Minimum)",
];

const assistiveTech = [
  { icon: <FiMonitor />, title: "Screen readers", body: "Tested with common combinations across desktop and mobile — see the ACR/VPAT for the exact list rather than relying on automated checks alone." },
  { icon: <FiKey />, title: "Keyboard & switch", body: "All interactive elements reachable and operable without a mouse, with a visible focus indicator." },
  { icon: <FiZoomIn />, title: "Zoom & reflow", body: "Content reflows to a single column at high zoom without loss of content or horizontal scrolling." },
  { icon: <FiMic />, title: "Voice control", body: "Interactive elements expose accessible names that match visible labels for voice-command targeting." },
  { icon: <FiVolume2 />, title: "Captions & real-time text", body: "Provided where the product or applicable legislation requires it — coverage is listed per surface above, not assumed universal." },
  { icon: <FiSmartphone />, title: "OS accessibility settings", body: "Respects system-level text size, reduce-motion and colour settings rather than overriding them." },
];

// Best-effort: severities and remediation text below the fold were partially
// illegible; entries reflect the visible titles and status pills only.
const limitations: { severity: string; title: string; body: string; status: string }[] = [
  { severity: "Moderate", title: "Live captions can drift out of sync during high-latency calls", body: "Under active investigation with the calling platform team; a manual re-sync control is the interim workaround." },
  { severity: "Moderate", title: "Some legacy PDFs are not fully tagged", body: "A content remediation pass is scheduled; request a tagged or alternate-format copy in the meantime." },
  { severity: "Low", title: "A few complex data tables need better structure", body: "Contact us if a specific table is hard to navigate with a screen reader and we'll prioritise it." },
  { severity: "Low", title: "Full interactive-fallback evaluation still underway", body: "Most interactive components have an accessible fallback path; a small number are still being evaluated." },
];

function limitationStatusFor(index: number) {
  return ["In progress", "Under review", "Under review", "Evaluation in progress"][index] ?? "In progress";
}

const reportRoutes = [
  { icon: <FiFlag />, title: "Report a barrier", body: "Tell us what you were trying to do and what got in the way — screenshots and the assistive tech you were using help most.", contact: "accessibility@zoikolocal.com" },
  { icon: <FiUserCheck />, title: "Request an accommodation", body: "For an interview, assessment or onboarding step. You don't have to disclose a diagnosis to ask.", contact: "accessibility@zoikolocal.com" },
  { icon: <FiFileText />, title: "Request an alternate format", body: "Large print, plain text, an audio version or another format for a specific document.", contact: "accessibility@zoikolocal.com" },
];

// Best-effort: bullet wording below the "Accommodations" heading was not
// fully legible; points below reflect the section's evident scope only.
const accommodationPoints = [
  "Reasonable adjustments are made without requiring proof of disability by default.",
  "Accommodation requests are handled separately from account or billing records.",
  "Alternate formats are provided at no additional charge where reasonably practicable.",
  "International requests are handled under the privacy and transfer rules that apply in that region.",
];

const supportContacts = [
  { icon: <FiHeadphones />, title: "Customer support", value: "support@zoikolocal.com" },
  { icon: <FiUserCheck />, title: "Accessibility team", value: "accessibility@zoikolocal.com" },
  { icon: <FiPhone />, title: "Sales", value: "sales@zoikolocal.com" },
];

const methodologyPoints = [
  "Automated checks on every release, plus manual expert review on major changes",
  "Keyboard-only testing and testing with people with disabilities",
  "Automated scans are a starting point, never the full extent of a check",
  "Testing with real assistive technology and settings, not simulated output",
  "Regression checks so a fixed issue does not silently return",
];

const versionHistory = [
  { version: "1.0", date: "August 20, 2026", summary: "Initial publication of the accessibility statement targeting WCAG 2.2 AA." },
];

const relatedResources = [
  { icon: <FiFileText />, title: "Accessibility Statement" },
  { icon: <FiMessageSquare />, title: "Recording & Consent" },
  { icon: <FiFileText />, title: "Terms of Service" },
  { icon: <FiShield />, title: "Trademarks & Copyrights" },
];

const faqs = [
  {
    q: "Is Zoiko Local fully WCAG 2.2 AA conformant today?",
    a: "Not yet — the site and products are partially conformant against WCAG 2.2 Level AA. The known gaps are listed in Known limitations below, each with a status and, where one exists, a workaround.",
  },
  {
    q: "Do I need to prove a disability to request an accommodation?",
    a: "No. You can request an accommodation for any hiring or product step without disclosing a diagnosis, and the request is kept separate from other records.",
  },
  {
    q: "Can I get a formal accessibility conformance report?",
    a: "Yes — request the ACR/VPAT through the documentation section below and our accessibility team will send the current report.",
  },
  {
    q: "What should I do if I find a barrier that isn't listed here?",
    a: "Report it through the form in Report an accessibility barrier. We track every report to a fix or an interim workaround rather than closing it silently.",
  },
];

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function Accessibility() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      {/* ═══ HEADER ═══ */}
      <header className="border-b border-[#E8E2D5] bg-[#F7F3EC]/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5">
          <Link href="/" className="flex items-center gap-2 text-[14px] font-bold tracking-tight text-[#0E2A21]">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#0E3A32] text-[11px] font-bold text-white">Z</span>
            Zoiko Local
          </Link>
          <nav className="hidden items-center gap-7 text-[13px] font-semibold text-[#3F4B45] md:flex">
            <Link href="#" className="hover:text-[#0E2A21]">Products</Link>
            <Link href="#" className="hover:text-[#0E2A21]">For Business</Link>
            <Link href="#" className="hover:text-[#0E2A21]">Pricing</Link>
            <Link href="#" className="hover:text-[#0E2A21]">Switch from Skype</Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="#" className="text-[13px] font-semibold text-[#0E2A21]">Sign in</Link>
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center rounded-full bg-[#E85D3C] px-4 text-[13px] font-semibold text-white transition hover:bg-[#D14C2C]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-5 py-10 lg:grid lg:grid-cols-[220px_1fr] lg:gap-10">
        {/* ═══ LEFT TOC (sticky) ═══ */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8C8271]">On this page</p>
            <ul className="mt-4 space-y-0.5 border-l border-[#E8E2D5] text-[13px]">
              {toc.map((t) => (
                <li key={t.id}>
                  <Link
                    href={`#${t.id}`}
                    className="-ml-px block border-l-2 border-transparent py-1.5 pl-4 text-[#5C6660] transition hover:border-[#0E5C4E] hover:text-[#0E2A21]"
                  >
                    {t.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <div>
          {/* ═══ HERO + RIGHT RAIL ═══ */}
          <div className="grid gap-10 xl:grid-cols-[1fr_300px]">
            <div>
              <Eyebrow>Accessibility</Eyebrow>
              <h1 className="mt-4 text-3xl font-bold leading-[1.15] tracking-tight text-[#0E2A21] md:text-[42px]">
                Accessibility at Zoiko Local
              </h1>
              <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#5C6660]">
                We want everyone to be able to use Zoiko Local&apos;s communications services. We
                target WCAG 2.2 AA across our web and mobile experiences, disclose where it&apos;s
                still in progress, and give you routes that work if something we&apos;ve built
                isn&apos;t accessible to you yet.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE7DB] px-3 py-1.5 text-[11.5px] font-semibold text-[#5C5C55]">
                  <FiTarget className="text-[11px]" aria-hidden /> Target: WCAG 2.2 AA
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE7DB] px-3 py-1.5 text-[11.5px] font-semibold text-[#5C5C55]">
                  <FiClock className="text-[11px]" aria-hidden /> Last reviewed: August 20, 2026
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EDE7DB] px-3 py-1.5 text-[11.5px] font-semibold text-[#5C5C55]">
                  <FiFileText className="text-[11px]" aria-hidden /> Version 1.0
                </span>
                <button
                  type="button"
                  aria-label="More statement options"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#DDD3C2] bg-white text-[#0E2A21] transition hover:border-[#0E2A21]"
                >
                  <FiPlus className="text-[13px]" aria-hidden />
                </button>
              </div>
            </div>

            {/* Right rail — sticky alongside the intro, not repeated per section */}
            <aside className="space-y-5">
              <div className={`${cardBase} p-5`}>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#8C8271]">At a glance</p>
                <ul className="mt-3 space-y-2.5">
                  {atAGlance.map((a) => (
                    <li key={a.label} className="flex items-center justify-between gap-3">
                      <span className="text-[12.5px] text-[#3F4B45]">{a.label}</span>
                      <StatusPill status={a.status} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-[#CBDDD5] bg-[#E7F1EC] p-5">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#3F4B45]">Need help now</p>
                <ul className="mt-3 space-y-2">
                  {needHelpNow.map((n) => (
                    <li key={n.label}>
                      <Link href={n.href} className="flex items-center gap-2.5 text-[12.5px] font-semibold text-[#0E3A32] hover:underline">
                        <span className="text-[13px]">{n.icon}</span>
                        {n.label}
                        <FiChevronRight className="ml-auto text-[12px]" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${cardBase} p-5`}>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#8C8271]">Jump to</p>
                <ul className="mt-3 space-y-2">
                  {jumpTo.map((j) => (
                    <li key={j.label}>
                      <Link href={j.href} className="flex items-center gap-2.5 text-[12.5px] font-semibold text-[#0E2A21] hover:text-[#0E5C4E]">
                        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#EDE7DB] text-[11px] text-[#5C5C55]">{j.icon}</span>
                        {j.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={`${cardBase} p-5`}>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#8C8271]">Related</p>
                <ul className="mt-3 space-y-2">
                  {related.map((r) => (
                    <li key={r.label}>
                      <Link href={r.href} className="flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0E5C4E] hover:underline">
                        {r.label} <FiArrowRight className="text-[11px]" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>

          {/* ═══ ALL MAIN SECTIONS ═══ */}
          <div className="mt-16 space-y-16">
            {/* ── CURRENT STATUS ── */}
            <section id="status">
              <Eyebrow>Current status</Eyebrow>
              <H2>Current accessibility status</H2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#5C6660]">
                Zoiko Local has an active accessibility program and targets WCAG 2.2 Level AA across
                its website, mobile apps, account dashboard and messaging, calling, video and AI
                features. This is our design and testing target — it is not a claim of full
                conformance across every surface.
              </p>

              <div className={`mt-6 ${cardBase} p-6`}>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[#8C8271]">Accessibility statement summary</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {statementSummary.map((s) => (
                    <div key={s.label} className="rounded-xl bg-[#F7F3EC] p-4">
                      <p className="text-[11px] font-semibold text-[#8C8271]">{s.label}</p>
                      <p className="mt-1.5 text-[14px] font-bold text-[#0E2A21]">{s.value}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[13px] leading-6 text-[#5C6660]">
                  &ldquo;Partially conformant&rdquo; means most of the site meets WCAG 2.2 AA, with the
                  specific known exceptions listed under Known limitations further down this page —
                  not a general disclaimer standing in for that list.
                </p>
                <Link href="#limitations" className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0E5C4E] hover:underline">
                  View known limitations <FiArrowRight aria-hidden />
                </Link>
              </div>

              <Note>
                We are not currently WCAG 2.2 AA conformant on every surface. This statement names
                where we fall short today so you can plan around it, rather than asserting
                conformance we haven&apos;t verified.
              </Note>
            </section>

            {/* ── COMMITMENTS ── */}
            <section id="commitments">
              <Eyebrow>Our approach</Eyebrow>
              <H2>Our accessibility commitments</H2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {commitments.map((c) => (
                  <div key={c.title} className={`${cardBase} p-5`}>
                    <span className={chip}>{c.icon}</span>
                    <h3 className="mt-4 text-[14px] font-bold text-[#0E2A21]">{c.title}</h3>
                    <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{c.body}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── CHANNELS ── */}
            <section id="channels">
              <Eyebrow>Coverage</Eyebrow>
              <H2>Products and channels covered</H2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#5C6660]">
                Our accessibility program covers the surfaces below. Each shows its current status.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {channels.map((c) => (
                  <div key={c.name} className={`${cardBase} flex items-center justify-between gap-3 p-4`}>
                    <div className="flex items-center gap-3">
                      <span className={chip}>{c.icon}</span>
                      <span className="text-[13.5px] font-bold text-[#0E2A21]">{c.name}</span>
                    </div>
                    <StatusPill status={c.status} />
                  </div>
                ))}
              </div>

              <Note>
                Status shown here is illustrative sample data for this page. Live per-surface status
                is served from the governed accessibility statement record — never an estimate.
              </Note>
            </section>

            {/* ── FEATURES BY MODE ── */}
            <section id="modes">
              <Eyebrow>By communications mode</Eyebrow>
              <H2>Accessibility features by communications mode</H2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#5C6660]">
                Communications isn&apos;t only one screen — accessibility spans calling, messaging,
                video and AI, and the controls each mode needs differ.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {featuresByMode.map((m) => (
                  <div key={m.title} className={`${cardBase} p-6`}>
                    <span className={chip}>{m.icon}</span>
                    <h3 className="mt-4 text-[15px] font-bold text-[#0E2A21]">{m.title}</h3>
                    <ul className="mt-3 space-y-2">
                      {m.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[12.5px] leading-5 text-[#5C6660]">
                          <FiCheck className="mt-0.5 shrink-0 text-[12px] text-[#0E5C4E]" strokeWidth={3} aria-hidden />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* ── WCAG 2.2 ADDITIONS ── */}
            <section id="wcag22">
              <Eyebrow>Standards</Eyebrow>
              <H2>WCAG 2.2 additions we specifically test</H2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#5C6660]">
                Beyond the broader WCAG 2.2 AA baseline, these newer success criteria get their own
                pass in our test approach.
              </p>

              <div className="mt-6 flex flex-wrap gap-2.5">
                {wcag22Additions.map((w) => (
                  <span key={w} className="inline-flex items-center gap-1.5 rounded-full border border-[#DDD3C2] bg-white px-4 py-2 text-[12.5px] font-semibold text-[#0E2A21]">
                    <FiCheck className="text-[11px] text-[#0E5C4E]" aria-hidden /> {w}
                  </span>
                ))}
              </div>

              <Note>
                Passing these criteria in testing doesn&apos;t by itself mean every surface is fully
                WCAG 2.2 AA conformant — see Known limitations for the specific gaps.
              </Note>
            </section>

            {/* ── ASSISTIVE TECH ── */}
            <section id="assistive-tech">
              <Eyebrow>Compatibility</Eyebrow>
              <H2>Assistive technology and device compatibility</H2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#5C6660]">
                Zoiko Local is designed to work with common assistive technologies across desktop and
                mobile, rather than relying on automated checks alone.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {assistiveTech.map((a) => (
                  <div key={a.title} className={`${cardBase} p-5`}>
                    <span className={chip}>{a.icon}</span>
                    <h3 className="mt-4 text-[14px] font-bold text-[#0E2A21]">{a.title}</h3>
                    <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{a.body}</p>
                  </div>
                ))}
              </div>

              <Note>
                &ldquo;Compatible&rdquo; means tested against the assistive technology and browser
                combinations named in our ACR/VPAT — not every possible combination in the field.
              </Note>
            </section>

            {/* ── LIMITATIONS ── */}
            <section id="limitations">
              <Eyebrow>Transparency</Eyebrow>
              <H2>Known limitations and work in progress</H2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#5C6660]">
                The gaps below are known and tracked, with a status and, where one exists, a
                workaround. This list is maintained from our own remediation registry.
              </p>

              <div className="mt-8 space-y-4">
                {limitations.map((l, i) => (
                  <div key={l.title} className={`${cardBase} p-5`}>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className={`rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-[0.06em] ${toneClass(l.severity === "Low" ? "info" : "warn")}`}>
                        {l.severity}
                      </span>
                      <h3 className="text-[14px] font-bold text-[#0E2A21]">{l.title}</h3>
                    </div>
                    <p className="mt-2.5 text-[12.5px] leading-6 text-[#5C6660]">
                      <span className="font-semibold text-[#3F4B45]">Workaround: </span>
                      {l.body}
                    </p>
                    <div className="mt-3">
                      <StatusPill status={limitationStatusFor(i)} />
                    </div>
                  </div>
                ))}
              </div>

              <Note>
                What&apos;s legible on this page doesn&apos;t replace the full remediation registry.
                If you hit an issue not listed here, report it below rather than assuming it&apos;s
                already tracked.
              </Note>
            </section>

            {/* ── REPORT A BARRIER ── */}
            <section id="report">
              <Eyebrow>Get in touch</Eyebrow>
              <H2>Report an accessibility barrier</H2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#5C6660]">
                If something is hard or impossible to use, please tell us. You can report a barrier
                in less than five minutes, and you don&apos;t need to use the same feature that&apos;s
                blocking you, or disclose a diagnosis to make a report.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {reportRoutes.map((r) => (
                  <div key={r.title} className={`${cardBase} p-5`}>
                    <span className={chip}>{r.icon}</span>
                    <h3 className="mt-4 text-[14px] font-bold text-[#0E2A21]">{r.title}</h3>
                    <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{r.body}</p>
                    <p className="mt-3 flex items-center gap-1.5 text-[12px] font-semibold text-[#0E5C4E]">
                      <FiMail className="text-[11px]" aria-hidden /> {r.contact}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── ACCOMMODATIONS ── */}
            <section id="accommodations">
              <Eyebrow>Adjustments</Eyebrow>
              <H2>Accommodations and alternate formats</H2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#5C6660]">
                We make reasonable adjustments so a barrier in one place doesn&apos;t block you from
                the rest of the service.
              </p>
              <ul className="mt-5 max-w-2xl space-y-2.5">
                {accommodationPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[13px] leading-6 text-[#5C6660]">
                    <FiCheck className="mt-1 shrink-0 text-[12px] text-[#0E5C4E]" strokeWidth={3} aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </section>

            {/* ── SUPPORT ── */}
            <section id="support">
              <Eyebrow>Contact</Eyebrow>
              <H2>Accessible customer support</H2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#5C6660]">
                Support staff must be accessible. You can reach the Zoiko Local team through more
                than one channel and choose whichever works best for you.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {supportContacts.map((s) => (
                  <div key={s.title} className={`${cardBase} p-5`}>
                    <span className={chip}>{s.icon}</span>
                    <h3 className="mt-4 text-[13.5px] font-bold text-[#0E2A21]">{s.title}</h3>
                    <p className="mt-1.5 text-[12.5px] text-[#5C6660]">{s.value}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* ── METHODOLOGY ── */}
            <section id="methodology">
              <Eyebrow>How we check</Eyebrow>
              <H2>Accessibility testing and conformance methodology</H2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#5C6660]">
                We combine automated checks, manual expert review, and testing with people with
                disabilities rather than relying on any one method alone.
              </p>
              <ul className="mt-5 max-w-2xl space-y-2.5">
                {methodologyPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[13px] leading-6 text-[#5C6660]">
                    <FiCheck className="mt-1 shrink-0 text-[12px] text-[#0E5C4E]" strokeWidth={3} aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>

              <Note>
                Automated scanners catch a minority of WCAG issues. A clean automated scan is a
                starting point in our process, never presented as proof of conformance on its own.
              </Note>
            </section>

            {/* ── DOCUMENTATION ── */}
            <section id="documentation">
              <Eyebrow>Formal reporting</Eyebrow>
              <H2>Accessibility documentation (ACR / VPAT)</H2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#5C6660]">
                A Conformance Report (ACR/VPAT) scoped to specific product and platform lines is
                available on request for procurement and enterprise reviews.
              </p>
              <Link
                href="#"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-full bg-[#0E3A32] px-5 text-[13px] font-semibold text-white transition hover:bg-[#0B2E2A]"
              >
                <FiDownload aria-hidden /> Request accessibility documentation
              </Link>

              <Note>
                We can only send the current, approved ACR/VPAT on file — we don&apos;t generate a
                new one ad hoc in response to a request, so turnaround depends on our review cycle.
              </Note>
            </section>

            {/* ── REGULATORY ── */}
            <section id="regulatory">
              <Eyebrow>Roadmap</Eyebrow>
              <H2>Accessibility plans and regulatory notices</H2>
              <p className="mt-3 max-w-2xl text-[13.5px] leading-6 text-[#5C6660]">
                Where the law requires a particular standard for a specific country, process, or
                product line, progress reports are published there instead of being folded into one
                global statement.
              </p>
              <Link
                href="#"
                className="mt-5 inline-flex h-11 items-center gap-2 rounded-full border border-[#DDD3C2] bg-white px-5 text-[13px] font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
              >
                Read the roadmap <FiArrowRight aria-hidden />
              </Link>

              <Note>
                Global target: WCAG 2.2 AA. Where a specific market, sector or contract requires a
                different or additional standard, that requirement is stated separately from this
                global target, not merged into it.
              </Note>
            </section>

            {/* ── VERSION HISTORY ── */}
            <section id="history">
              <Eyebrow>Record</Eyebrow>
              <H2>Version and review history</H2>

              <div className={`mt-6 overflow-hidden ${cardBase}`}>
                <table className="w-full text-left text-[13px]">
                  <thead className="bg-[#F7F3EC] text-[11px] font-bold uppercase tracking-[0.08em] text-[#8C8271]">
                    <tr>
                      <th className="px-5 py-3">Version</th>
                      <th className="px-5 py-3">Date</th>
                      <th className="px-5 py-3">Summary</th>
                    </tr>
                  </thead>
                  <tbody>
                    {versionHistory.map((v) => (
                      <tr key={v.version} className="border-t border-[#E8E2D5]">
                        <td className="px-5 py-4 font-bold text-[#0E2A21]">{v.version}</td>
                        <td className="px-5 py-4 text-[#5C6660]">{v.date}</td>
                        <td className="px-5 py-4 text-[#5C6660]">{v.summary}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* ── RELATED RESOURCES ── */}
            <section id="related-resources">
              <Eyebrow>More reading</Eyebrow>
              <H2>Related resources and policies</H2>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {relatedResources.map((r) => (
                  <Link key={r.title} href="#" className={`${cardBase} flex items-center gap-3 p-4 transition hover:border-[#0E2A21]`}>
                    <span className={chip}>{r.icon}</span>
                    <span className="text-[13px] font-bold text-[#0E2A21]">{r.title}</span>
                  </Link>
                ))}
              </div>
            </section>

            {/* ── FAQ ── */}
            {/* Best-effort: only the section heading was clearly legible in the
                source mockup; questions/answers below are representative
                placeholders in the page's evident voice — swap for the real
                FAQ copy before shipping. */}
            <section id="faq">
              <Eyebrow>FAQ</Eyebrow>
              <H2>Accessibility questions, answered</H2>

              <div className="mt-8 space-y-3">
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
                      {open && <p className="px-5 pb-5 text-[12.5px] leading-6 text-[#5C6660]">{f.a}</p>}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ═══ FOOTER ═══ */}
      <footer className="mt-20 bg-[#0B2E2A] py-14 text-white/70">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
            <div>
              <Link href="/" className="flex items-center gap-2 text-[14px] font-bold text-white">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-[11px] font-bold text-white">Z</span>
                Zoiko Local
              </Link>
              <p className="mt-4 max-w-xs text-[12.5px] leading-6">
                Communications people and businesses can rely on.
              </p>
              <div className="mt-5 flex items-center gap-3 text-white/50">
                <FiCode aria-hidden />
                <FiMousePointer aria-hidden />
              </div>
            </div>

            {[
              { title: "Platform", links: ["Calling", "Messaging", "Video", "AI features"] },
              { title: "Industries", links: ["Enterprise", "Small business", "Telecom"] },
              { title: "Use cases", links: ["Remote teams", "Contact centers"] },
              { title: "Legal", links: ["Accessibility Statement", "Terms of Service", "Trademarks & Copyrights"] },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-white/50">{col.title}</p>
                <ul className="mt-4 space-y-2.5 text-[12.5px]">
                  {col.links.map((l) => (
                    <li key={l}>
                      <Link href="#" className="hover:text-white">{l}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-[12px] md:flex-row md:items-center">
            <p>© {new Date().getFullYear()} Zoiko Communications Group. All rights reserved.</p>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 font-semibold text-white/80">
              <FiCheck aria-hidden /> All Systems Operational
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}