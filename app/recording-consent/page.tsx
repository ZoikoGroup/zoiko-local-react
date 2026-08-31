"use client";

// ─────────────────────────────────────────────────────────────────────────────
// ZOIKO LOCAL — RECORDING & CONSENT
//
// Same document system as Terms / AUP / DPA / AI Terms, but a 3-column body:
// left TOC, centre Q&A, right action rail.
//
// ⚠ THIS PAGE MAKES MORE ENFORCEABLE PRODUCT CLAIMS THAN ANY OF THE OTHERS.
// The mockup's own disclaimer says the "operative legal sentences are
// illustrative and are authored and approved by Zoiko Legal and Privacy
// against the final product configuration before publication." That note is
// rendered at the top of the body — keep it until Legal signs off, because
// several statements below are commitments a regulator can test:
//
//   • "a host cannot suppress mandatory indicators"
//   • "Payment credentials, authentication secrets, and one-time codes are
//      not stored in recordings or transcripts by default"
//   • "an administrator cannot hide mandatory participant notices"
//   • "Deleting a recording ... remove[s] associated derivative transcripts"
//   • the per-artifact retention table
//
// Verify each against the shipped product, not against this design.
//
// NOTE ON `metadata`: client component (scroll-spy TOC + jurisdiction tabs),
// so `metadata` can't be exported here. Add a sibling layout.tsx for it.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiActivity,
  FiAlertTriangle,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiExternalLink,
  FiFileText,
  FiFlag,
  FiGlobe,
  FiHelpCircle,
  FiInfo,
  FiMic,
  FiPhone,
  FiShield,
  FiSliders,
  FiUser,
  FiVideo,
} from "react-icons/fi";

const DOC = { effective: "August 28, 2026", updated: "August 28, 2026", version: "1.0" };

// ─── IMAGE PLACEHOLDER ───────────────────────────────────────────────────────
// Photos are slots, labelled and sized to the mockup's ratios. To use a real
// asset, swap the inner div for <Image src=… alt=… fill className="object-cover" />
// and keep the wrapper's relative + rounding classes.
// ─── IMAGE PATHS ─────────────────────────────────────────────────────────────
// All assets live in /public/images/recording-consent/, referenced from the
// web root as /images/recording-consent/… . Paths are collected here so a
// rename is one edit, not a hunt through the markup.
const IMAGES = {
  hero: {
    src: "/images/recording-consent/hero-call.jpg",
    alt: "A person sitting by a window taking a business call",
  },
  desk: {
    src: "/images/recording-consent/desk-overhead.jpg",
    alt: "Overhead view of a shared desk with several laptops in use",
  },
  calls: {
    src: "/images/recording-consent/calls.jpg",
    alt: "A person holding a phone during a call",
  },
  meetings: {
    src: "/images/recording-consent/video-meetings.jpg",
    alt: "Two colleagues in a video meeting",
  },
  aiReceptionist: {
    src: "/images/recording-consent/ai-receptionist.jpg",
    alt: "A desk phone and headset representing the AI receptionist",
  },
} as const;

// Fixed-ratio image frame. The wrapper keeps the reserved space from the
// design, so the layout holds its shape whether or not the file exists yet —
// a missing asset shows the warm placeholder tone instead of collapsing the
// section or shifting everything below it.
//
// Uses a plain <img> by request. Next lints this as a warning
// (@next/next/no-img-element); swapping to next/image with `fill` silences it
// and adds automatic optimisation — the wrapper already has `relative`, so
// that change is a one-line edit here and nothing else.
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

// ─── FOUR CAPABILITIES ───────────────────────────────────────────────────────
const capabilities = [
  {
    icon: <FiActivity />,
    title: "Recording",
    body: "Retains replayable audio (and video for meetings) as an account artifact.",
    tag: "Off unless enabled & permitted",
    strong: true,
  },
  { icon: <FiFileText />, title: "Live transcription", body: "Converts speech to text in real time; the transcript may be ephemeral or stored separately.", tag: "Separate control", strong: false },
  { icon: <FiMic />, title: "AI notes", body: "Summaries, action items, or quality insights generated from a conversation.", tag: "Separately enabled", strong: false },
  { icon: <FiSliders />, title: "Model training", body: "Using communication content to train or improve models beyond providing the service.", tag: "Off by default", strong: false },
];

// ─── CONSENT SEQUENCE ────────────────────────────────────────────────────────
const consentSteps = [
  { n: "1", title: "Resolve policy", body: "The applicable recording rule is resolved before any capture begins." },
  { n: "2", title: "Notify participants", body: "Required notice is delivered — audible on calls, visible in meetings." },
  { n: "3", title: "Authorize if required", body: "Where the rule requires it, participants affirmatively authorize." },
  { n: "4", title: "Capture starts", body: "Only the enabled capability starts, only after the gate is satisfied." },
];

const consentModes = [
  { key: "A", label: "Notice required" },
  { key: "B", label: "Acknowledgment required" },
  { key: "C", label: "All-participant authorization" },
  { key: "D", label: "Approved legal exception" },
];

// ─── CAPABILITY TABLE ────────────────────────────────────────────────────────
const capabilityTable = [
  { capability: "Transient speech processing", what: "Audio processed only in the moment (e.g. live captions) and not stored.", control: "Its own transparency rule; not a stored recording" },
  { capability: "Live transcription", what: "Speech converted to text in real time.", control: "Separate notice & retention" },
  { capability: "Stored transcript", what: "Transcript retained as an account artifact.", control: "Enabled separately from live transcription" },
  { capability: "Audio recording", what: "Audio stream retained and replayable.", control: "Recording policy, notice & authorization apply" },
  { capability: "Video recording", what: "Video and audio retained and replayable.", control: "Separate visual + audio indicators" },
];

// ─── MEDIUM CARDS ────────────────────────────────────────────────────────────
const mediums = [
  {
    icon: <FiPhone />,
    label: "Calls",
    image: IMAGES.calls,
    body: "On inbound and outbound calls, the voice gateway enforces the resolved mode before any recording begins.",
    points: ["Audible notice where required, in the language of service.", "Transferred or conference participants are handled by the same gate."],
  },
  {
    icon: <FiVideo />,
    label: "Video meetings",
    image: IMAGES.meetings,
    body: "A pre-join screen shows whether recording or transcription is already active and what artifacts are being created.",
    points: ["Separate persistent “Recording” and “Transcription” indicators.", "Late joiners are gated before their media is stored, when required."],
  },
  {
    icon: <FiMic />,
    label: "AI Receptionist",
    image: IMAGES.aiReceptionist,
    body: "The AI receptionist discloses that it is automated and, separately, applies the recording or transcription notice for the conversation.",
    points: ["AI disclosure does not substitute for recording notice.", "Transcript and summary states follow their own controls."],
  },
];

// ─── RETENTION TABLE ─────────────────────────────────────────────────────────
const retentionTable = [
  { artifact: "Audio / video recording", access: "Entitled roles under RBAC", retention: "Configurable per policy; deleted on schedule or request" },
  { artifact: "Stored transcript", access: "Entitled roles under RBAC", retention: "Configurable independently of audio" },
  { artifact: "AI summary / notes", access: "Entitled roles under RBAC", retention: "Configurable; deletion removes derivative artifacts" },
  { artifact: "Recording metadata / evidence", access: "Compliance & audit roles", retention: "Retained for evidence per policy" },
];

// ─── JURISDICTIONS ───────────────────────────────────────────────────────────
const jurisdictions = [
  {
    key: "United States",
    body: "U.S. federal and state recording rules vary. Some states require authorization from all parties to record protected private communications; others differ. Zoiko Local resolves a state-level ruleset for the conversation rather than exposing one national toggle.",
  },
  {
    key: "United Kingdom",
    body: "UK recording of business communications sits under data-protection and, for some sectors, financial-conduct requirements. Lawful basis, participant notice, and retention are configured per purpose rather than assumed from a single consent flag.",
  },
  {
    key: "European Economic Area",
    body: "EEA processing requires an identified lawful basis, transparency to participants, and purpose limitation. Recording, transcription, and AI-derived artifacts are treated as distinct purposes, each with its own basis and retention.",
  },
  {
    key: "Canada",
    body: "Canadian federal and provincial privacy regimes require knowledge and, in many contexts, consent for recording, alongside a stated purpose. Zoiko Local resolves the applicable provincial ruleset for the conversation.",
  },
  {
    key: "Nigeria, South Africa & Jamaica",
    body: "These markets apply their own data-protection statutes and sector rules to recording, notice, and cross-border transfer. Requirements are resolved per market rather than inherited from a global default.",
  },
];

// ─── SIDE RAIL ───────────────────────────────────────────────────────────────
const railGroups = [
  {
    title: "Manage & act",
    items: [
      { icon: <FiSliders />, label: "Recording & transcription settings" },
      { icon: <FiShield />, label: "Request access or deletion" },
      { icon: <FiFlag />, label: "Report a concern" },
    ],
  },
  {
    title: "Related policies",
    items: [
      { icon: <FiFileText />, label: "Privacy Policy" },
      { icon: <FiMic />, label: "AI Terms" },
      { icon: <FiFileText />, label: "Data Processing Agreement" },
      { icon: <FiGlobe />, label: "Law Enforcement Requests" },
    ],
  },
  {
    title: "For participants",
    items: [
      { icon: <FiHelpCircle />, label: "Why is this call being recorded?" },
      { icon: <FiGlobe />, label: "Service status" },
    ],
  },
];

const relatedDocs = [
  "Privacy Policy",
  "Terms of Service",
  "AI Terms",
  "Acceptable Use",
  "Data Processing Agreement",
  "Law Enforcement Requests",
];

// ─── TOC ─────────────────────────────────────────────────────────────────────
const TOC = [
  { id: "how-recording-works", label: "How recording works" },
  { id: "recording-vs-transcription", label: "Recording vs transcription" },
  { id: "how-notified", label: "How you'll be notified" },
  { id: "participants-consent", label: "Do all participants consent?" },
  { id: "calls-meetings-ai", label: "Calls, meetings & AI receptionist" },
  { id: "joining-after-start", label: "Joining after recording starts" },
  { id: "decline-pause-stop", label: "Decline, pause & stop" },
  { id: "stored-how-long", label: "What's stored & for how long" },
  { id: "who-can-access", label: "Who can access recordings" },
  { id: "ai-model-training", label: "AI use & model training" },
  { id: "sensitive-information", label: "Sensitive information" },
  { id: "administrator-responsibilities", label: "Administrator responsibilities" },
  { id: "rules-by-location", label: "Rules by location" },
  { id: "privacy-rights", label: "Your privacy rights" },
  { id: "version-history", label: "Version history" },
];

// ─── SHARED PARTS ────────────────────────────────────────────────────────────
const cardBase = "rounded-2xl border border-[#E8E2D5] bg-white";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center justify-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#C2603F]">
      <span className="h-px w-5 bg-[#C2603F]" aria-hidden />
      {children}
      <span className="h-px w-5 bg-[#C2603F]" aria-hidden />
    </p>
  );
}

function Q({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    // scroll-mt clears a sticky header on TOC jumps.
    <section id={id} className="scroll-mt-28 border-t border-[#E8E2D5] pt-10 first:border-t-0 first:pt-0">
      <h2 className="text-[21px] font-bold leading-tight text-[#0E2A21]">{title}</h2>
      {children}
    </section>
  );
}

// The teal-bordered box holds the operative answer; the sand box holds a
// caveat. Keeping them visually distinct matters here — one is the commitment,
// the other is the limit on it.
function Answer({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 border-l-[3px] border-[#0E5C4E] bg-[#E7F1EC] px-5 py-4">
      <p className="text-[13.5px] font-medium leading-6 text-[#22332C]">{children}</p>
    </div>
  );
}

function Caveat({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-4 flex items-start gap-2.5 rounded-lg bg-[#EDE7DB] px-4 py-3.5">
      <FiInfo className="mt-0.5 shrink-0 text-[#8C8271]" aria-hidden />
      <p className="text-[12px] leading-5 text-[#6E6656]">{children}</p>
    </div>
  );
}

function Dots({ points }: { points: React.ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {points.map((p, i) => (
        <li
          key={i}
          className="relative pl-5 text-[13px] leading-6 text-[#4A544D] before:absolute before:left-0 before:top-[9px] before:h-[5px] before:w-[5px] before:rounded-full before:bg-[#E85D3C]"
        >
          {p}
        </li>
      ))}
    </ul>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-[13.5px] leading-7 text-[#4A544D]">{children}</p>;
}

function DocLink({ label }: { label: string }) {
  return (
    <Link
      href="#"
      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0E5C4E] hover:underline"
    >
      {label} <FiExternalLink className="text-[11px]" aria-hidden />
    </Link>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function RecordingAndConsent() {
  const [active, setActive] = useState(TOC[0].id);
  const [jurisdiction, setJurisdiction] = useState(jurisdictions[0].key);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: 0 }
    );
    TOC.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const activeJurisdiction = jurisdictions.find((j) => j.key === jurisdiction) ?? jurisdictions[0];

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      {/* ═══ HERO ═══ */}
      <section className="bg-gradient-to-br from-[#F4F1EA] via-[#F7F3EC] to-[#F6EDE7] pt-14 md:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-[#0E2A21] md:text-[46px]">
              Recording &amp; Consent
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#5C6660]">
              How Zoiko Local handles recording, transcription, AI notes, participant notice and
              consent, retention, access, and your privacy rights — explained plainly and kept
              accurate to the product.
            </p>

            <dl className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[12.5px] text-[#5C6660]">
              <div className="flex items-center gap-2">
                <FiCheck className="text-[#0E5C4E]" aria-hidden />
                <dt>Effective:</dt>
                <dd className="font-semibold text-[#0E2A21]">{DOC.effective}</dd>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="text-[#8C8271]" aria-hidden />
                <dt>Last updated:</dt>
                <dd className="font-semibold text-[#0E2A21]">{DOC.updated}</dd>
              </div>
              <div className="flex items-center gap-2">
                <FiFileText className="text-[#8C8271]" aria-hidden />
                <dt>Version</dt>
                <dd className="font-semibold text-[#0E2A21]">{DOC.version}</dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <Img src={IMAGES.hero.src} alt={IMAGES.hero.alt} className="h-[400px] w-full" />
            <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[12px] font-bold text-[#0E2A21] shadow-lg">
              <span className="h-2 w-2 rounded-full bg-[#D14634]" aria-hidden />
              Recording
              <FiActivity className="text-[#8C8271]" aria-hidden />
            </span>
            <span className="absolute bottom-4 right-4 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-2 text-[12px] font-bold text-[#0E2A21] shadow-lg">
              <span className="h-2 w-2 rounded-full bg-[#0E5C4E]" aria-hidden />
              Transcription on
              <FiFileText className="text-[#8C8271]" aria-hidden />
            </span>
          </div>
        </div>

        {/* IN SHORT */}
        <div className="mx-auto mt-12 max-w-6xl px-5 pb-14">
          <div className="rounded-2xl border-l-[5px] border-[#0E3A32] bg-white p-6 shadow-sm">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#0E5C4E]">
              In short
            </p>
            <p className="mt-3 text-[15px] leading-7 text-[#22332C]">
              Zoiko Local records or transcribes communications{" "}
              <strong className="font-bold">
                only when the applicable feature is enabled and the required policy and notice
                controls are satisfied.
              </strong>{" "}
              Recording, transcription, AI notes, and model training are separate controls — enabling
              one does not enable another.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ FOUR CAPABILITIES ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Four separate capabilities</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-2xl text-center text-3xl font-bold leading-[1.2] text-[#0E2A21] md:text-[34px]">
            Recording, transcription, AI notes, and training are not the same thing
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[14px] leading-7 text-[#5C6660]">
            Each is a distinct data-processing function with its own default and its own control. One
            is never switched on just because another is.
          </p>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c) => (
              <div key={c.title} className={`${cardBase} p-5`}>
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E4EFE9] text-lg text-[#0E5C4E]">
                  {c.icon}
                </span>
                <h3 className="mt-5 text-[15.5px] font-bold text-[#0E2A21]">{c.title}</h3>
                <p className="mt-2.5 text-[12.5px] leading-6 text-[#5C6660]">{c.body}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#EDE7DB] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.06em] text-[#6E6656]">
                  {c.strong && <FiAlertTriangle className="text-[11px]" aria-hidden />}
                  {c.tag}
                </span>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-6 flex max-w-4xl items-start gap-3 rounded-xl bg-[#FBF2E1] px-5 py-4">
            <FiAlertTriangle className="mt-0.5 shrink-0 text-[#B4761A]" aria-hidden />
            <p className="text-[12.5px] leading-6 text-[#7A6320]">
              <strong className="font-bold text-[#5E4C15]">Non-inheritance rule.</strong> Turning on
              recording does not turn on AI notes or model training, and live transcription does not
              automatically create a stored transcript. Every transition is a separate, audited
              product decision.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ CONSENT SEQUENCE ═══ */}
      <section className="bg-[#EDE7DB] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Before capture begins</Eyebrow>
          <h2 className="mx-auto mt-5 max-w-xl text-center text-3xl font-bold leading-[1.2] text-[#0E2A21] md:text-[34px]">
            How consent and notice are handled
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-center text-[14px] leading-7 text-[#5C6660]">
            The same underlying sequence runs on every conversation; the resolved rule decides how
            much is required.
          </p>

          {/* Ordered list — the sequence is the substance of the claim, so it
              has to read in order without CSS. */}
          <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {consentSteps.map((s) => (
              <li key={s.n} className="rounded-2xl bg-white p-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0E3A32] text-[13px] font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-[15px] font-bold text-[#0E2A21]">{s.title}</h3>
                <p className="mt-2 text-[12.5px] leading-6 text-[#5C6660]">{s.body}</p>
              </li>
            ))}
          </ol>

          <ul className="mt-6 flex flex-wrap justify-center gap-3">
            {consentModes.map((m) => (
              <li
                key={m.key}
                className="inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2.5 text-[13px] font-semibold text-[#0E2A21]"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#EDE7DB] text-[10px] font-bold text-[#6E6656]">
                  {m.key}
                </span>
                {m.label}
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-6 max-w-xl text-center text-[12.5px] leading-6 text-[#8C8271]">
            The mode is resolved from participants, jurisdiction, service, and purpose — not from your
            IP address — and there is no single global rule.
          </p>
        </div>
      </section>

      {/* ═══ ALWAYS VISIBLE ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div className="relative">
            <Img src={IMAGES.desk.src} alt={IMAGES.desk.alt} className="h-[380px] w-full" />
            <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-[#0E3A32]/95 px-4 py-3">
              <span className="flex items-center gap-4 text-[12px] font-bold text-white">
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#D14634]" aria-hidden /> Recording
                </span>
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#3FBE95]" aria-hidden /> Transcription on
                </span>
              </span>
              <span className="text-[11px] text-white/60">Visible to all participants</span>
            </div>
          </div>

          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#C2603F]">
              <span className="h-px w-5 bg-[#C2603F]" aria-hidden />
              Always visible
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-[#0E2A21] md:text-[34px]">
              You&apos;ll always be able to tell
            </h2>
            <p className="mt-4 max-w-lg text-[14px] leading-7 text-[#5C6660]">
              When capture is active, the indicators stay visible for everyone — and a host can&apos;t
              hide them.
            </p>

            <ul className="mt-7 space-y-4">
              {[
                { icon: <FiPhone />, strong: "On calls,", rest: " an audible notice plays where the rule requires it." },
                { icon: <FiVideo />, strong: "In meetings,", rest: " separate “Recording” and “Transcription” indicators stay on screen." },
                { icon: <FiUser />, strong: "Late joiners", rest: " are gated before their media is stored, when required." },
              ].map((r) => (
                <li key={r.strong} className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E4EFE9] text-[#0E5C4E]">
                    {r.icon}
                  </span>
                  <p className="pt-1.5 text-[13.5px] leading-6 text-[#4A544D]">
                    <strong className="font-bold text-[#0E2A21]">{r.strong}</strong>
                    {r.rest}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ═══ BODY: TOC / Q&A / RAIL ═══ */}
      <section className="bg-[#F7F3EC] pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[200px_minmax(0,1fr)] xl:grid-cols-[200px_minmax(0,1fr)_250px]">
          {/* TOC */}
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-24">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#9A9A8E]">
                On this page
              </p>
              <ul className="mt-4 border-l border-[#E4DED0]">
                {TOC.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        aria-current={isActive ? "true" : undefined}
                        className={`-ml-px block border-l-2 py-2 pl-4 text-[12.5px] leading-5 transition ${
                          isActive
                            ? "border-[#E85D3C] font-semibold text-[#0E5C4E]"
                            : "border-transparent text-[#7A7A70] hover:text-[#0E2A21]"
                        }`}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {/* CENTRE */}
          <div className="min-w-0 space-y-10">
            {/* Wireframe disclaimer — keep until Legal signs off. */}
            <div className="flex items-start gap-2.5 rounded-lg bg-[#EDE7DB] px-4 py-3.5">
              <FiInfo className="mt-0.5 shrink-0 text-[#8C8271]" aria-hidden />
              <p className="text-[12px] leading-5 text-[#6E6656]">
                This page is fully readable without JavaScript. Interactive controls (settings,
                requests, reporting) open separate accessible forms. It is a design wireframe:
                operative legal sentences are illustrative and are authored and approved by Zoiko
                Legal and Privacy against the final product configuration before publication.
              </p>
            </div>

            <Q id="how-recording-works" title="Does Zoiko Local record calls automatically?">
              <Answer>
                No. Zoiko Local records or transcribes communications only when the applicable feature
                is enabled and the required policy and notice controls are satisfied. Recording is off
                unless the applicable policy can be resolved.
              </Answer>
              <Body>
                Recording, live transcription, stored transcripts, AI notes, and model training are{" "}
                <strong className="font-bold text-[#0E2A21]">separate controls</strong>. Turning one
                on does not turn another on. The platform never silently converts a non-recorded
                conversation into a stored recording or transcript just because an AI feature is
                available.
              </Body>
              <Caveat>
                If the applicable rule cannot be resolved, recording and transcript storage stay
                disabled and the initiator sees “Recording unavailable for this call.” This is a
                governed product behavior, not a claim about what any specific law requires.
              </Caveat>
            </Q>

            <Q
              id="recording-vs-transcription"
              title="What is the difference between recording and transcription?"
            >
              <Answer>
                Recording keeps a replayable audio or video file. Transcription turns speech into
                text, which may be temporary or stored as a separate artifact. Each has its own notice
                and retention behavior.
              </Answer>

              <div className="mt-5 overflow-hidden rounded-xl border border-[#E4DED0]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left">
                    <thead>
                      <tr className="bg-[#0E3A32]">
                        <th scope="col" className="px-5 py-3 text-[12.5px] font-bold text-white">Capability</th>
                        <th scope="col" className="px-5 py-3 text-[12.5px] font-bold text-white">What it is</th>
                        <th scope="col" className="px-5 py-3 text-[12.5px] font-bold text-white">Default / control</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {capabilityTable.map((r) => (
                        <tr key={r.capability} className="border-t border-[#EDE7DB]">
                          <th scope="row" className="px-5 py-3.5 align-top text-[12.5px] font-bold text-[#0E2A21]">
                            {r.capability}
                          </th>
                          <td className="px-5 py-3.5 align-top text-[12.5px] leading-6 text-[#5C6660]">{r.what}</td>
                          <td className="px-5 py-3.5 align-top text-[12.5px] leading-6 text-[#5C6660]">{r.control}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </Q>

            <Q id="how-notified" title="How will I know a call or meeting is being recorded?">
              <Answer>
                Where recording or transcription is active, participants are given notice using the
                medium of the conversation — an audible notice on calls and a visible, accessible
                indicator in meetings — and the indicator stays visible while capture is active.
              </Answer>
              <Dots
                points={[
                  <>
                    <strong className="font-bold text-[#0E2A21]">Calls:</strong> an audible notice is
                    played when the configured rule requires participants to be told that recording
                    occurs and why.
                  </>,
                  <>
                    <strong className="font-bold text-[#0E2A21]">Meetings:</strong> a persistent
                    “Recording” indicator and a separate “Transcription” indicator remain visible; a
                    host cannot suppress mandatory indicators.
                  </>,
                  <>
                    <strong className="font-bold text-[#0E2A21]">Screen sharing</strong> is described
                    separately from audio/video, because it can capture documents, chat, and other
                    unintended content.
                  </>,
                ]}
              />
              <Caveat>
                A recording beep or banner is not treated as a substitute for required notice content
                or authorization where more is required by the resolved rule.
              </Caveat>
            </Q>

            <Q id="participants-consent" title="Do all participants have to consent to recording?">
              <Answer>
                It depends on the resolved rule for that conversation. Some contexts need only notice;
                others require acknowledgment or authorization from all participants; some rely on an
                approved legal basis or exception. There is no single global rule.
              </Answer>
              <Body>
                Zoiko Local resolves the applicable requirement from the participants&apos; relevant
                jurisdictions, the service and number country, the organizer or customer role, the
                communication type, and the recording purpose — not from IP address alone. Where
                several rules could apply, the platform applies the strictest compatible configured
                requirement.
              </Body>
              <Caveat>
                Continuing a call is not presented as automatically constituting valid consent. Legal
                standards differ, and some contexts require stronger authorization, which the resolved
                rule enforces.
              </Caveat>
            </Q>

            <Q id="calls-meetings-ai" title="Calls, video meetings, and the AI Receptionist">
              <Body>
                Recording behavior is enforced by the service handling the conversation. Each medium
                delivers notice in the way participants will actually perceive it.
              </Body>

              <div className="mt-6 grid gap-4 sm:grid-cols-3">
                {mediums.map((m) => (
                  <div key={m.label} className="overflow-hidden rounded-2xl border border-[#E4DED0] bg-white">
                    <div className="relative">
                      <Img src={m.image.src} alt={m.image.alt} className="h-[86px] w-full" rounded="rounded-none" />
                      <span className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center gap-2 bg-gradient-to-t from-black/60 to-transparent px-3 py-2 text-[12px] font-bold text-white">
                        {m.icon}
                        {m.label}
                      </span>
                    </div>
                    <div className="p-4">
                      <p className="text-[12px] leading-6 text-[#5C6660]">{m.body}</p>
                      <ul className="mt-3 space-y-2">
                        {m.points.map((p) => (
                          <li key={p} className="flex items-start gap-2">
                            <FiCheck className="mt-1 shrink-0 text-[11px] text-[#0E5C4E]" strokeWidth={3} aria-hidden />
                            <span className="text-[11.5px] leading-5 text-[#4A544D]">{p}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </Q>

            <Q id="joining-after-start" title="What happens if someone joins after recording starts?">
              <Answer>
                A participant who joins after recording begins receives the applicable notice or
                authorization gate before their media is captured or retained, when the resolved rule
                requires it.
              </Answer>
              <Body>
                Every late join is logged and re-runs the applicable notice or authorization step. If
                recording is paused and later resumes, and the rule requires renewed notice or
                authorization, the gate runs again before capture resumes.
              </Body>
            </Q>

            <Q id="decline-pause-stop" title="Can I decline or stop recording?">
              <Answer>
                Depending on the resolved mode, participants and hosts can pause, stop, or object to
                recording, and — where the policy permits — continue on a non-recorded alternative.
                Every state change is shown immediately and recorded in an audit trail.
              </Answer>
              <Dots
                points={[
                  <>
                    <strong className="font-bold text-[#0E2A21]">Pause / stop:</strong> the persistent
                    indicator updates immediately and the transition is audited.
                  </>,
                  <>
                    <strong className="font-bold text-[#0E2A21]">Object / decline:</strong> in an
                    all-participant authorization mode, the product follows the configured alternative
                    — continue without recording, exclude that participant from recorded media where
                    technically and legally valid, or explain that participation cannot continue with
                    recording required.
                  </>,
                  <>
                    <strong className="font-bold text-[#0E2A21]">Alternative channel:</strong> where a
                    non-recorded path exists, the interface makes it clear; where it does not, the
                    consequence is stated before you leave.
                  </>,
                ]}
              />
            </Q>

            <Q id="stored-how-long" title="How long are recordings and transcripts kept?">
              <Answer>
                Each artifact — audio, video, transcript, summary, and metadata — has its own
                configurable retention, governed by the Retention Policy Registry, and is deleted
                according to that schedule and any applicable legal hold.
              </Answer>

              <div className="mt-5 overflow-hidden rounded-xl border border-[#E4DED0]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left">
                    <thead>
                      <tr className="bg-[#0E3A32]">
                        <th scope="col" className="px-5 py-3 text-[12.5px] font-bold text-white">Artifact</th>
                        <th scope="col" className="px-5 py-3 text-[12.5px] font-bold text-white">Typical access</th>
                        <th scope="col" className="px-5 py-3 text-[12.5px] font-bold text-white">Retention</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {retentionTable.map((r) => (
                        <tr key={r.artifact} className="border-t border-[#EDE7DB]">
                          <th scope="row" className="px-5 py-3.5 align-top text-[12.5px] font-bold text-[#0E2A21]">
                            {r.artifact}
                          </th>
                          <td className="px-5 py-3.5 align-top text-[12.5px] leading-6 text-[#5C6660]">{r.access}</td>
                          <td className="px-5 py-3.5 align-top text-[12.5px] leading-6 text-[#5C6660]">{r.retention}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <Caveat>
                Deleting a recording is designed to remove associated derivative transcripts and AI
                artifacts rather than leaving them uncontrolled. Mandatory legal retention, where it
                applies, can override customer deletion.
              </Caveat>
            </Q>

            <Q id="who-can-access" title="Who can access, replay, download, or share a recording?">
              <Answer>
                Access is based on entitlement, role-based access control, and the artifact&apos;s
                policy — not on a single plan toggle. A plan entitlement alone does not give every
                administrator access to every recording.
              </Answer>
              <Dots
                points={[
                  "Least-privilege roles such as Recording Administrator, Compliance Reviewer, Supervisor, Host/Agent, and Read-only Auditor, where the product scope requires them.",
                  "External share links are off by default for high-sensitivity use and, where enabled, use expiration, revocation, access logging, and optional authentication.",
                  "Downloads and exports are logged with actor, artifact, and timestamp; support staff cannot casually replay recordings without an audited, approved workflow.",
                ]}
              />
            </Q>

            <Q id="ai-model-training" title="Does Zoiko Local use recordings to train AI models?">
              <Answer>
                No — not by default. Using communication content to train or improve models beyond
                providing the service is off by default and is governed separately. Providing an AI
                feature (like a summary) is not the same as training a model.
              </Answer>
              <Body>
                AI-derived artifacts (summaries, action items, quality insights) are a distinct
                processing purpose that must be independently enabled, and they do not inherit
                permission from recording. General model training on customer communication content is
                disabled unless separately governed and explicitly authorized where lawful.
              </Body>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                <DocLink label="AI Terms" />
                <DocLink label="Privacy Policy" />
                <DocLink label="Data Processing Agreement" />
              </div>
            </Q>

            <Q id="sensitive-information" title="Sensitive information and recording minimization">
              <Body>
                Zoiko Local supports minimizing sensitive capture rather than storing secrets by
                default.
              </Body>
              <Dots
                points={[
                  "DTMF (keypad) masking and pause-for-payment controls help keep card numbers, passwords, and one-time codes out of recordings and transcripts.",
                  "Redaction and pause policies can apply to health, financial, special-category, or other high-risk content.",
                  "Payment credentials, authentication secrets, and one-time codes are not stored in recordings or transcripts by default.",
                ]}
              />
            </Q>

            <Q id="administrator-responsibilities" title="Administrator responsibilities and controls">
              <Body>
                Workspace administrators choose recording purposes, retention, roles, and downstream
                sharing — within limits the platform enforces. Administrators select the lawful basis
                or purpose and are responsible for any workforce or customer notice their
                configuration requires.
              </Body>
              <Caveat>
                An administrator cannot hide mandatory participant notices or indicators merely by
                accepting contractual responsibility, and the admin interface prevents configurations
                that conflict with the market, participant, service, or purpose rules set by Legal and
                Privacy. Zoiko may also have independent obligations as a provider, controller, or
                processor.
              </Caveat>
            </Q>

            <Q id="rules-by-location" title="Why the rules differ by location">
              <Answer>
                Recording and consent requirements depend on the participants, service, purpose, and
                jurisdiction — so the experience differs by context. The summaries below explain why,
                and are not a substitute for current legal advice.
              </Answer>

              <div className="mt-5 flex flex-wrap gap-2.5" role="tablist" aria-label="Jurisdiction">
                {jurisdictions.map((j) => {
                  const on = j.key === jurisdiction;
                  return (
                    <button
                      key={j.key}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => setJurisdiction(j.key)}
                      className={`h-9 rounded-full px-4 text-[12.5px] font-semibold transition ${
                        on
                          ? "bg-[#0E3A32] text-white"
                          : "border border-[#E4DED0] bg-white text-[#5C6660] hover:border-[#0E2A21]"
                      }`}
                    >
                      {j.key}
                    </button>
                  );
                })}
              </div>

              <h3 className="mt-6 text-[14px] font-bold text-[#0E2A21]">{activeJurisdiction.key}</h3>
              <Body>{activeJurisdiction.body}</Body>

              <Caveat>
                Zoiko Local does not publish simple “one-party / all-party” country lists as
                authoritative global legal advice. Where a configuration resolves to the strictest
                compatible requirement, that is a governed product design choice, not a statement of
                what every law universally requires.
              </Caveat>
            </Q>

            <Q id="privacy-rights" title="Your privacy rights and request routes">
              <Answer>
                You can ask about, access, or request deletion of recordings and transcripts that
                relate to you, and raise a concern — without needing to understand the legal
                terminology first.
              </Answer>
              <Body>
                Depending on your location and role, you may have rights to access, delete, restrict
                or object, and to correct transcript metadata, along with a route to complain.
                Requests are handled by the Privacy Rights Service, which can locate and act on the
                relevant recordings and transcripts.
              </Body>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                <Link href="#" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0E5C4E] hover:underline">
                  Make a privacy request <FiArrowRight aria-hidden />
                </Link>
                <Link href="#" className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0E5C4E] hover:underline">
                  Report a recording concern <FiArrowRight aria-hidden />
                </Link>
              </div>
            </Q>

            <Q id="version-history" title="Version history">
              <Body>
                When this page changes, the effective date and version are updated and prior versions
                remain retrievable for reference.
              </Body>

              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[560px] border-collapse text-left">
                  <thead>
                    <tr className="border-b border-[#E4DED0]">
                      {["Version", "Effective", "Summary", "Archive"].map((h) => (
                        <th
                          key={h}
                          scope="col"
                          className="pb-3 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#8C8271]"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[#EDE7DB]">
                      <th scope="row" className="py-4 pr-4 align-top text-[13px] font-bold text-[#0E2A21]">
                        {DOC.version}
                      </th>
                      <td className="py-4 pr-4 align-top text-[12.5px] leading-6 text-[#5C6660]">
                        {DOC.effective}
                      </td>
                      <td className="py-4 pr-4 align-top text-[12.5px] leading-6 text-[#5C6660]">
                        Initial Recording &amp; Consent policy: capability model, consent modes,
                        retention, access, AI boundary, and jurisdiction overlays.
                      </td>
                      <td className="py-4 align-top">
                        <Link href="#" className="text-[12.5px] font-semibold text-[#0E5C4E] hover:underline">
                          View
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-8 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#8C8271]">
                Related legal documents
              </p>
              <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-2.5">
                {relatedDocs.map((d) => (
                  <li key={d}>
                    <DocLink label={d} />
                  </li>
                ))}
              </ul>
            </Q>
          </div>

          {/* RIGHT RAIL */}
          <aside className="hidden xl:block">
            <div className="sticky top-24 space-y-4">
              {railGroups.map((g) => (
                <div key={g.title} className="rounded-2xl border border-[#E4DED0] bg-white p-5">
                  <p className="text-[10.5px] font-bold uppercase tracking-[0.12em] text-[#8C8271]">
                    {g.title}
                  </p>
                  <ul className="mt-4 space-y-3.5">
                    {g.items.map((it) => (
                      <li key={it.label}>
                        <Link
                          href="#"
                          className="flex items-start gap-2.5 text-[12.5px] leading-5 text-[#22332C] transition hover:text-[#0E5C4E]"
                        >
                          <span className="mt-0.5 shrink-0 text-[#8C8271]">{it.icon}</span>
                          {it.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}