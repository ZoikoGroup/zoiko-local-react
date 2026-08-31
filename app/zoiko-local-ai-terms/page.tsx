"use client";

// ─────────────────────────────────────────────────────────────────────────────
// ZOIKO LOCAL — AI TERMS
//
// Same document system as Terms / AUP / DPA (sections as data, so the TOC,
// anchors and cross-links can't drift from the headings) with ONE deliberate
// difference: this page's accent is VIOLET (#5B4B8A), not the orange used on
// the other legal pages. Sampled from the mockup — the callout bars, the
// disclosure banner, the letter chips and the report panel are all violet.
// The eyebrow stays orange. If that's a mistake rather than an intentional
// "AI" accent, swap VIOLET below for #E85D3C and it matches the others.
//
// ⚠ TWO CLAIMS HERE ARE PRODUCT FACTS, NOT COPY — verify before shipping:
//
//   1. FEATURE STATUS (aiFeatures). The section header promises "Status
//      reflects real availability." Available / Preview / Restricted must
//      match what's actually shipped per plan, or the page is misleading.
//      Ideally serve this from the same source your plan gating reads.
//
//   2. THE DISCLOSURE GUARANTEE. The banner states AI disclosure "can't be
//      turned off through scripting or configuration." That is a technical
//      commitment with regulatory weight in several markets — confirm the
//      product actually enforces it before publishing.
//
// NOTE ON `metadata`: client component (scroll-spy + archive toggle), so it
// can't be exported here. Add a sibling layout.tsx for it.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiInfo } from "react-icons/fi";

const DOC = { effective: "August 28, 2026", version: "1.0", effectiveShort: "Aug 28, 2026" };

// ─── AI AT A GLANCE ──────────────────────────────────────────────────────────
const glance = [
  { badge: "ID", title: "Know when AI is involved", body: "We identify AI interactions where required, using clear labels — not euphemisms." },
  { badge: "!", title: "AI can make mistakes", body: "Review important information and keep a human path for anything consequential." },
  { badge: "D", title: "Your data and AI", body: "Data use depends on the feature and your agreement. Model training is governed separately." },
  { badge: "V", title: "Synthetic voice", body: "Only authorized voices — never used to impersonate or deceive." },
  { badge: "E", title: "Not an emergency service", body: "AI Receptionist isn't emergency dispatch and shouldn't be relied on as one." },
  { badge: "X", title: "Prohibited use", body: "Fraud, impersonation, harassment, and disclosure evasion are never allowed." },
];

// ─── FEATURE STATUS ──────────────────────────────────────────────────────────
type FeatureStatus = "available" | "preview" | "restricted";

const FEATURE_STATUS: Record<FeatureStatus, { label: string; chip: string }> = {
  available: { label: "Available", chip: "bg-[#E1EFE6] text-[#20654A] border-[#C3DFCF]" },
  preview: { label: "Preview", chip: "bg-[#EAE5F2] text-[#5B4B8A] border-[#D3C9E4]" },
  restricted: { label: "Restricted", chip: "bg-[#FAF1DE] text-[#8A6114] border-[#E7D6AF]" },
};

const aiFeatures: { name: string; status: FeatureStatus; body: string }[] = [
  { name: "AI Receptionist", status: "available", body: "Answers calls, routes, and captures messages using your configured script." },
  { name: "Call summaries", status: "available", body: "Generates a post-call summary from your transcript, where recording is enabled." },
  { name: "Suggested replies", status: "preview", body: "Drafts message replies for human review before sending." },
  { name: "Custom synthetic voice", status: "restricted", body: "Requires verified rights and authorization before activation." },
  { name: "Intent routing", status: "available", body: "Classifies caller intent to route to the right destination." },
  { name: "Voice cloning", status: "restricted", body: "Off by default. Requires identity evidence and legal review." },
];

// ─── RULE STATES (section 02) ────────────────────────────────────────────────
type RuleState = "allowed" | "restricted" | "prohibited";

const RULE_STATE: Record<RuleState, { label: string; chip: string }> = {
  allowed: { label: "Allowed", chip: "bg-[#E1EFE6] text-[#20654A]" },
  restricted: { label: "Restricted", chip: "bg-[#FAF1DE] text-[#8A6114]" },
  prohibited: { label: "Prohibited", chip: "bg-[#FAE3E0] text-[#A8352A]" },
};

const voiceRules: { state: RuleState; text: string; qualifier?: string }[] = [
  { state: "allowed", text: "Standard platform synthetic voice, disclosed and used non-deceptively." },
  { state: "restricted", text: "Cloning a real individual's voice", qualifier: "requires verifiable authorization and rights evidence." },
  { state: "prohibited", text: "Celebrity or public-figure voice imitation without rights and legal approval." },
  { state: "prohibited", text: "Altering prompts or audio to suppress a required AI or synthetic-voice disclosure." },
];

// ─── DATA USE (section 05) ───────────────────────────────────────────────────
const dataUse = [
  { title: "Service delivery", body: "Prompts, audio, and transcripts used as necessary to provide the feature you enabled.", flagged: false },
  { title: "Safety & security", body: "Signals used to detect fraud, abuse, and service-integrity risks.", flagged: false },
  { title: "Model training", body: "Disabled by default. Never enabled by accepting these Terms alone.", flagged: true },
  { title: "Your feedback", body: "May improve the service — doesn't authorize training on unrelated content.", flagged: false },
];

const relatedPolicies = [
  "Terms of Service",
  "Privacy Policy",
  "Acceptable Use Policy",
  "Data Processing Agreement",
  "Recording & Consent",
];

// ─── SECTIONS ────────────────────────────────────────────────────────────────
const TOC = [
  { id: "ai-receptionist", label: "AI Receptionist" },
  { id: "synthetic-voice", label: "Synthetic voice" },
  { id: "prompts-content", label: "Your prompts & content" },
  { id: "accuracy-human-review", label: "Accuracy & human review" },
  { id: "data-use-training", label: "Data use & training" },
  { id: "prohibited-ai-use", label: "Prohibited AI use" },
  { id: "report-harmful-output", label: "Report harmful output" },
  { id: "version-history", label: "Version history" },
];

// ─── SHARED ──────────────────────────────────────────────────────────────────
const serif = "font-serif";
const cardBase = "rounded-xl border border-[#E8E2D5] bg-white";

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <h2 className={`flex items-baseline gap-3 text-[21px] font-medium text-[#1A1A17] ${serif}`}>
      <span className="text-[13px] font-medium text-[#8C7DB8]">{n}</span>
      {title}
    </h2>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 border-l-[3px] border-[#5B4B8A] bg-[#EFEAE0] px-5 py-4">
      <p className="text-[14px] leading-6 text-[#3F3F39]">{children}</p>
    </div>
  );
}

function Bullets({ points }: { points: React.ReactNode[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {points.map((p, i) => (
        <li
          key={i}
          className="relative pl-5 text-[13.5px] leading-7 text-[#5C5C55] before:absolute before:left-0 before:top-[13px] before:h-1 before:w-1 before:rounded-full before:bg-[#B4B4A6]"
        >
          {p}
        </li>
      ))}
    </ul>
  );
}

function Section({ id, first, children }: { id: string; first?: boolean; children: React.ReactNode }) {
  return (
    // scroll-mt keeps headings clear of a sticky header on TOC jumps.
    <section id={id} className={`scroll-mt-28 ${first ? "" : "mt-12 border-t border-[#E8E2D5] pt-12"}`}>
      {children}
    </section>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function AiTerms() {
  const [active, setActive] = useState(TOC[0].id);
  const [archiveOpen, setArchiveOpen] = useState(false);

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

  return (
    <main className="min-h-screen bg-[#F6F2EA]">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-16">
        {/* ═══ HERO ═══ */}
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E85D3C]">
          Legal · Artificial Intelligence
        </p>
        <h1 className={`mt-5 text-4xl font-medium tracking-tight text-[#1A1A17] md:text-[46px] ${serif}`}>
          AI <span className="italic text-[#E85D3C]">Terms</span>
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#5C5C55]">
          These Terms explain how AI-enabled features in Zoiko Local work, what you&apos;re
          responsible for, how AI-generated outputs should be used, and the rules for AI Receptionist,
          synthetic voice, and automated actions.
        </p>

        <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-[#E8E2D5] bg-white px-4 py-2.5 text-[13px] text-[#3F3F39]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E85D3C]" />
          Effective {DOC.effective} · Version {DOC.version}
        </p>

        {/* ═══ AI AT A GLANCE ═══ */}
        <section className="mt-14" aria-labelledby="glance">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A7A70]">
            AI at a glance
          </p>
          <h2 id="glance" className={`mt-2.5 text-[20px] font-medium text-[#1A1A17] ${serif}`}>
            What AI does — and doesn&apos;t — do
          </h2>
          <p className="mt-3 max-w-lg text-[13.5px] leading-6 text-[#7A7A70]">
            This summary highlights key points only. The full Terms below are authoritative.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {glance.map((g) => (
              <div key={g.title} className={`${cardBase} p-5`}>
                <span
                  className={`flex h-8 min-w-8 items-center justify-center rounded-md bg-[#EAE5F2] px-2 text-[13px] font-medium text-[#5B4B8A] ${serif}`}
                  aria-hidden
                >
                  {g.badge}
                </span>
                <h3 className={`mt-5 text-[16px] font-medium text-[#1A1A17] ${serif}`}>{g.title}</h3>
                <p className="mt-2.5 text-[13px] leading-6 text-[#7A7A70]">{g.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ CURRENT AI FEATURES ═══ */}
        <section className="mt-14" aria-labelledby="features">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A7A70]">
            Current AI features
          </p>
          <h2 id="features" className={`mt-2.5 text-[20px] font-medium text-[#1A1A17] ${serif}`}>
            What&apos;s actually AI-powered
          </h2>
          <p className="mt-3 max-w-lg text-[13.5px] leading-6 text-[#7A7A70]">
            Status reflects real availability — not every automation on Zoiko Local is generative AI.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {aiFeatures.map((f) => {
              const meta = FEATURE_STATUS[f.status];
              return (
                <div key={f.name} className={`${cardBase} p-5`}>
                  <div className="flex items-start justify-between gap-3">
                    <h3 className={`text-[15.5px] font-medium text-[#1A1A17] ${serif}`}>{f.name}</h3>
                    <span
                      className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.07em] ${meta.chip}`}
                    >
                      {meta.label}
                    </span>
                  </div>
                  <p className="mt-3 text-[12.5px] leading-6 text-[#7A7A70]">{f.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══ DISCLOSURE BANNER ═══ */}
        {/* role="note", not "alert" — standing guidance, not an event. */}
        <div
          role="note"
          aria-label="AI disclosure"
          className="mt-6 flex items-start gap-3.5 rounded-xl border border-[#D8CEE6] bg-[#EAE5F2] p-5"
        >
          <FiInfo className="mt-0.5 shrink-0 text-lg text-[#5B4B8A]" aria-hidden />
          <div>
            <h3 className="text-[14px] font-bold text-[#1A1A17]">
              You&apos;ll know when you&apos;re talking to AI
            </h3>
            <p className="mt-1.5 text-[13.5px] leading-6 text-[#4A4560]">
              Where required, AI interactions carry a clear disclosure — spoken at the start of an AI
              Receptionist call, or labeled in text for chat and generated summaries. This can&apos;t
              be turned off through scripting or configuration.
            </p>
          </div>
        </div>

        {/* ═══ BODY + TOC ═══ */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[220px_1fr]">
          <nav aria-label="On this page" className="hidden lg:block">
            {/* top-24 clears a sticky site header; drop to top-8 if yours isn't. */}
            <div className="sticky top-24">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#9A9A8E]">
                On this page
              </p>
              <ul className="mt-4 border-l border-[#E8E2D5]">
                {TOC.map((item) => {
                  const isActive = active === item.id;
                  return (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        aria-current={isActive ? "true" : undefined}
                        className={`-ml-px block border-l-2 py-2.5 pl-4 text-[13px] leading-5 transition ${
                          isActive
                            ? "border-[#5B4B8A] font-medium text-[#5B4B8A]"
                            : "border-transparent text-[#7A7A70] hover:text-[#1A1A17]"
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

          <div>
            {/* ─── 01 ─── */}
            <Section id="ai-receptionist" first>
              <SectionHeading n="01" title="AI Receptionist" />
              <Callout>
                AI Receptionist can answer, route, and take messages — but it&apos;s not a human, and
                it&apos;s not emergency dispatch.
              </Callout>
              <p className="mt-5 text-[13.5px] leading-7 text-[#5C5C55]">
                You&apos;re responsible for your scripts, knowledge sources, escalation destinations,
                and business instructions. We provide safeguards — policy filters, rate limits,
                disclosure controls, and failover — but understanding isn&apos;t guaranteed across
                accents, noise, or ambiguous language.
              </p>
              <Bullets
                points={[
                  "Configure a human transfer or voicemail fallback for anything AI can't confidently handle.",
                  "AI Receptionist must not be sold or configured as a substitute for emergency services.",
                  "It doesn't independently provide regulated professional advice or make binding high-impact decisions.",
                ]}
              />
            </Section>

            {/* ─── 02 ─── */}
            <Section id="synthetic-voice">
              <SectionHeading n="02" title="Synthetic voice" />
              <Callout>
                Standard AI voices are fine to use. Cloning a real person&apos;s voice is restricted by
                default and needs verified authorization.
              </Callout>

              <ul className="mt-6 border-t border-[#EAE4D8]">
                {voiceRules.map((r, i) => (
                  <li key={i} className="flex items-start gap-4 border-b border-[#EAE4D8] py-3.5">
                    <span
                      className={`inline-flex shrink-0 items-center rounded-md px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.07em] ${RULE_STATE[r.state].chip}`}
                    >
                      {RULE_STATE[r.state].label}
                    </span>
                    <p className="text-[13.5px] leading-6 text-[#3F3F39]">
                      {r.text}
                      {r.qualifier && (
                        <>
                          {" — "}
                          <span className="text-[#8A8A7E]">{r.qualifier}</span>
                        </>
                      )}
                    </p>
                  </li>
                ))}
              </ul>
            </Section>

            {/* ─── 03 ─── */}
            <Section id="prompts-content">
              <SectionHeading n="03" title="Your prompts & content" />
              <Callout>
                You&apos;re responsible for having the rights to what you feed the AI — scripts,
                knowledge sources, names, and brands.
              </Callout>
              <Bullets
                points={[
                  "Don't submit secrets, regulated data, or third-party confidential content unless the feature explicitly supports it.",
                  "Prompts can't instruct AI to bypass disclosures, impersonate without authorization, or conceal recording.",
                  "We may block or adjust unsafe instructions as a safety measure — not every prompt is guaranteed to execute exactly as written.",
                ]}
              />
            </Section>

            {/* ─── 04 ─── */}
            <Section id="accuracy-human-review">
              <SectionHeading n="04" title="Accuracy & human review" />
              <Callout>
                AI outputs can be wrong, incomplete, or out of context — review anything that matters
                before you rely on it.
              </Callout>
              <Bullets
                points={[
                  "Call summaries and transcripts may omit or misattribute statements — verify important records.",
                  "Suggested messages get human review before sending, unless you've configured approved automation.",
                  "High-impact decisions — employment, credit, housing, health, legal — aren't supported by AI on Zoiko Local by default.",
                ]}
              />
            </Section>

            {/* ─── 05 ─── */}
            <Section id="data-use-training">
              <SectionHeading n="05" title="Data use & training" />
              <Callout>
                Your content is used to deliver the AI feature you enabled. Using it to train models is
                a separate, distinct choice — never bundled into these Terms.
              </Callout>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {dataUse.map((d) => (
                  <div
                    key={d.title}
                    // The flagged card is the one carrying the strongest
                    // promise ("disabled by default"), so it gets visual
                    // weight rather than sitting flat among the others.
                    className={`rounded-xl border p-5 ${
                      d.flagged ? "border-[#EFD2CE] bg-[#FDF3F1]" : "border-[#E8E2D5] bg-white"
                    }`}
                  >
                    <h3
                      className={`text-[14px] font-bold ${d.flagged ? "text-[#A8352A]" : "text-[#1A1A17]"}`}
                    >
                      {d.title}
                    </h3>
                    <p className="mt-2 text-[12.5px] leading-6 text-[#7A7A70]">{d.body}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ─── 06 ─── */}
            <Section id="prohibited-ai-use">
              <SectionHeading n="06" title="Prohibited AI use" />
              <Callout>
                AI can&apos;t be used for anything that would be prohibited if a human did it — fraud,
                impersonation, harassment, or evading disclosure.
              </Callout>
              <Bullets
                points={[
                  "Fraud, phishing, or social engineering to obtain money, credentials, or trust through deception.",
                  "Deceptive impersonation of a person, government, or business.",
                  "Unlawful automated calling or messaging that evades consent, DND, or carrier controls.",
                  "Prompt injection or automation intended to bypass safety, authorization, or rate limits.",
                ]}
              />
              <p className="mt-5 text-[12.5px] leading-6 text-[#8A8A7E]">
                Prohibited AI use is enforced under the{" "}
                <Link href="#" className="font-medium text-[#C2421F] underline underline-offset-2">
                  Acceptable Use Policy
                </Link>
                .
              </p>
            </Section>

            {/* ─── 07 ─── */}
            <Section id="report-harmful-output">
              <SectionHeading n="07" title="Report harmful or incorrect output" />

              <div className="mt-6 flex flex-col items-start justify-between gap-5 rounded-2xl bg-[#5B4B8A] p-7 md:flex-row md:items-center">
                <div>
                  <h3 className={`text-[19px] font-medium text-white ${serif}`}>
                    Something went wrong with an AI result?
                  </h3>
                  <p className="mt-2.5 max-w-xl text-[13px] leading-6 text-white/75">
                    Tell us about harmful, incorrect, or unexpected AI output — we route it to review
                    separately from general support.
                  </p>
                </div>
                <Link
                  href="#"
                  className="inline-flex h-11 shrink-0 items-center rounded-full bg-white px-6 text-[13.5px] font-semibold text-[#5B4B8A] transition hover:bg-[#F2EFF8]"
                >
                  Report AI output
                </Link>
              </div>
            </Section>

            {/* ─── 08 ─── */}
            <Section id="version-history">
              <SectionHeading n="08" title="Version history" />
              <Callout>
                Every version is preserved and dated — material changes to how AI works come with
                notice.
              </Callout>

              <div className={`mt-6 ${cardBase} overflow-hidden`}>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EFEAE0] px-5 py-4">
                  <span className="flex items-center gap-3">
                    <span className="rounded bg-[#5B4B8A] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                      Current
                    </span>
                    <span className="text-[13.5px] text-[#1A1A17]">Version {DOC.version}</span>
                  </span>
                  <span className="font-mono text-[12.5px] text-[#7A7A70]">
                    Effective {DOC.effectiveShort}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setArchiveOpen((v) => !v)}
                  aria-expanded={archiveOpen}
                  className="flex w-full items-center justify-between gap-3 px-5 py-4 text-left"
                >
                  <span className="flex items-center gap-3">
                    <span className="rounded bg-[#EFEAE0] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-[#7A7A70]">
                      Archive
                    </span>
                    <span className="text-[13px] text-[#7A7A70]">
                      Prior versions will appear here once published
                    </span>
                  </span>
                  <FiChevronDown
                    className={`shrink-0 text-[#9A9A8E] transition ${archiveOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>

                {archiveOpen && (
                  <p className="border-t border-[#EFEAE0] px-5 py-4 text-[13px] leading-6 text-[#7A7A70]">
                    No archived versions yet. Version {DOC.version} is the first published revision —
                    superseded versions will be listed here with their own effective dates and
                    permanent links.
                  </p>
                )}
              </div>

              <ul className="mt-8 flex flex-wrap gap-2.5">
                {relatedPolicies.map((p) => (
                  <li key={p}>
                    <Link
                      href="#"
                      className="inline-flex h-10 items-center rounded-full border border-[#E8E2D5] bg-white px-4 text-[13px] font-medium text-[#1A1A17] transition hover:border-[#1A1A17]"
                    >
                      {p}
                    </Link>
                  </li>
                ))}
              </ul>
            </Section>
          </div>
        </div>
      </div>
    </main>
  );
}