"use client";


import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiChevronDown } from "react-icons/fi";

// ─── DOCUMENT META ───────────────────────────────────────────────────────────
const DOC = {
  version: "1.0",
  effectiveShort: "Aug 28, 2026",
};

// ─── APPLICABILITY ───────────────────────────────────────────────────────────
const applicability = [
  {
    letter: "P",
    title: "We're your processor",
    body: "You determine why and how your business communications are used; Zoiko Local processes on your instructions to deliver the service.",
  },
  {
    letter: "M",
    title: "We may have mixed roles",
    body: "Some activity — like account administration, billing, or fraud prevention — may be processed by Zoiko Local as an independent controller.",
  },
  {
    letter: "E",
    title: "You need negotiated terms",
    body: "Enterprise agreements, custom liability terms, or a signed MSA that already covers processing take precedence over this standard DPA.",
  },
];

// ─── EIGHT COMMITMENTS ───────────────────────────────────────────────────────
const commitments = [
  { n: "01", title: "Documented instructions", body: "We process only on your documented instructions." },
  { n: "02", title: "Confidentiality", body: "Personnel with access are bound by confidentiality obligations." },
  { n: "03", title: "Security", body: "Technical and organizational measures appropriate to the risk." },
  { n: "04", title: "Subprocessors", body: "A current, versioned register with change notices." },
  { n: "05", title: "Rights assistance", body: "We help you respond to data-subject requests." },
  { n: "06", title: "Incident notice", body: "We notify you of security incidents without undue delay." },
  { n: "07", title: "International transfers", body: "Lawful transfer mechanisms applied only where actually needed." },
  { n: "08", title: "Deletion & return", body: "Your data is deleted or returned at the end of service." },
];

// ─── ROLE ALLOCATION (section 01) ────────────────────────────────────────────
type Role = "processor" | "controller";

const ROLE_META: Record<Role, { label: string; chip: string }> = {
  processor: { label: "Processor", chip: "bg-[#DEE8F5] text-[#2B5C9B]" },
  controller: { label: "Independent controller", chip: "bg-[#FAE0D8] text-[#B04A2B]" },
};

const roleRows: { activity: string; role: Role; note: string }[] = [
  { activity: "Contacts & address book", role: "processor", note: "You determine the purpose; we process to provide the feature." },
  { activity: "Calls, messages & video content", role: "processor", note: "Processed on your instructions to transmit and deliver service." },
  { activity: "Recordings & transcripts", role: "processor", note: "You control whether the feature is used; we operate it." },
  { activity: "AI receptionist", role: "processor", note: "Customer-controlled service processing under the AI Terms." },
  { activity: "Account sign-in, billing & subscription", role: "controller", note: "We determine essential account and business purposes." },
  { activity: "Fraud, security & network integrity", role: "controller", note: "We determine security and legal purposes and means." },
];

// ─── ANNEX I ─────────────────────────────────────────────────────────────────
const annexI = [
  { term: "Subject matter", detail: "Provision of Zoiko Local business communications services." },
  { term: "Duration", detail: "For your subscription term, plus the applicable retention and exit period." },
  { term: "Nature of processing", detail: "Collect, transmit, route, store, retrieve, transcribe, and delete — limited to enabled features." },
  { term: "Data subjects", detail: "Your users/admins and your communications participants." },
  { term: "Data categories", detail: "Identifiers, contact data, communications metadata, content, recordings/transcripts where enabled." },
  { term: "Storage locations", detail: "Shown factually per service; hosting location and data residency are not assumed equivalent." },
];

// ─── ANNEX III — replace with your real register ─────────────────────────────
const subprocessors = [
  { name: "Cloud Hosting Partner", purpose: "Infrastructure & storage", regions: "US, EU", status: "Active" },
  { name: "Carrier Interconnect Partner", purpose: "Call & SMS delivery", regions: "Multi-region", status: "Active" },
  { name: "Customer Support Platform", purpose: "Support ticketing", regions: "US", status: "Active" },
];

// ─── ANNEX IV ────────────────────────────────────────────────────────────────
const transferMechanisms = [
  { title: "EU SCCs (2021)", body: "Used for EEA-origin transfers, with the correct module completed from your actual exporter/importer roles." },
  { title: "UK Addendum / IDTA", body: "Applied for UK restricted transfers per current ICO guidance." },
  { title: "Adequacy decisions", body: "Used where the relevant jurisdiction recognizes the destination as adequate." },
  { title: "No restricted transfer", body: "If your data doesn't leave an adequate or equivalent jurisdiction, no instrument is attached." },
];

const executeSteps = [
  "Sign in & confirm your organization",
  "Review the DPA and all annexes",
  "Enter signer name & authority",
  "Sign electronically",
  "Download your executed copy",
];

const relatedPolicies = [
  "Terms of Service",
  "Privacy Policy",
  "Acceptable Use Policy",
  "AI Terms",
  "Recording & Consent",
];

// ─── SHARED ──────────────────────────────────────────────────────────────────
const serif = "font-serif";
const cardBase = "rounded-xl border border-[#E8E2D5] bg-white";

const TOC = [
  { id: "how-we-process", label: "How we process your data" },
  { id: "standard-agreement", label: "The standard agreement" },
  { id: "annex-i", label: "Annex I — Processing details" },
  { id: "annex-ii", label: "Annex II — Security measures" },
  { id: "annex-iii", label: "Annex III — Subprocessors" },
  { id: "annex-iv", label: "Annex IV — International transfers" },
  { id: "deletion-return", label: "Deletion & return" },
  { id: "audit-assurance", label: "Audit & assurance" },
  { id: "execute", label: "Execute the DPA" },
  { id: "version-history", label: "Version history" },
];

function SectionHeading({ n, title, badge }: { n: string; title: string; badge?: string }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-3">
      <h2 className={`flex items-baseline gap-3 text-[21px] font-medium text-[#1A1A17] ${serif}`}>
        <span className="text-[13px] font-medium text-[#E8814A]">{n}</span>
        {title}
      </h2>
      {badge && (
        <span className="rounded bg-[#EFEAE0] px-2.5 py-1 font-mono text-[11px] text-[#7A7A70]">
          {badge}
        </span>
      )}
    </div>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 border-l-[3px] border-[#E85D3C] bg-[#EFEAE0] px-5 py-4">
      <p className="text-[14px] leading-6 text-[#3F3F39]">{children}</p>
    </div>
  );
}

function Bullets({ points }: { points: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {points.map((p) => (
        <li
          key={p}
          className="relative pl-5 text-[13.5px] leading-7 text-[#5C5C55] before:absolute before:left-0 before:top-[13px] before:h-1 before:w-1 before:rounded-full before:bg-[#B4B4A6]"
        >
          {p}
        </li>
      ))}
    </ul>
  );
}

function Section({
  id,
  first,
  children,
}: {
  id: string;
  first?: boolean;
  children: React.ReactNode;
}) {
  return (
    // scroll-mt keeps headings clear of a sticky header on TOC jumps.
    <section id={id} className={`scroll-mt-28 ${first ? "" : "mt-12 border-t border-[#E8E2D5] pt-12"}`}>
      {children}
    </section>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function DataProcessingAgreement() {
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
          Privacy &amp; Data Protection
        </p>
        <h1 className={`mt-5 text-4xl font-medium leading-[1.15] tracking-tight text-[#1A1A17] md:text-[46px] ${serif}`}>
          Data Processing
          <br />
          <span className="italic text-[#E85D3C]">Agreement</span>
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#5C5C55]">
          Review the terms that govern how Zoiko Local processes Customer Personal Data on behalf of
          business customers — security, subprocessors, international transfers, and data return or
          deletion.
        </p>

        <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-[#E8E2D5] bg-white px-4 py-2.5 text-[13px] text-[#3F3F39]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E85D3C]" />
          Current DPA · Version {DOC.version} · Effective {DOC.effectiveShort}
        </p>

        {/* ═══ APPLICABILITY ═══ */}
        <section className="mt-14" aria-labelledby="applicability">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A7A70]">
            Applicability
          </p>
          <h2 id="applicability" className={`mt-2.5 text-[20px] font-medium text-[#1A1A17] ${serif}`}>
            Does this apply to your organization?
          </h2>
          <p className="mt-3 max-w-lg text-[13.5px] leading-6 text-[#7A7A70]">
            This is a plain-language guide, not a legal determination — your exact role is resolved
            from your actual services and processing activity.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {applicability.map((a) => (
              <div key={a.letter} className={`${cardBase} p-5`}>
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-md bg-[#FAE7E0] text-[14px] font-medium text-[#C2421F] ${serif}`}
                  aria-hidden
                >
                  {a.letter}
                </span>
                <h3 className={`mt-5 text-[16px] font-medium text-[#1A1A17] ${serif}`}>{a.title}</h3>
                <p className="mt-2.5 text-[13px] leading-6 text-[#7A7A70]">{a.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ EIGHT COMMITMENTS ═══ */}
        <section className="mt-14" aria-labelledby="commitments">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A7A70]">
            DPA at a glance
          </p>
          <h2 id="commitments" className={`mt-2.5 text-[20px] font-medium text-[#1A1A17] ${serif}`}>
            Eight core commitments
          </h2>
          <p className="mt-3 max-w-lg text-[13.5px] leading-6 text-[#7A7A70]">
            This summary highlights key points only. The full agreement and annexes below are
            authoritative.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {commitments.map((c) => (
              <div key={c.n} className={`${cardBase} p-5`}>
                <span className="text-[11.5px] font-medium text-[#E8814A]">{c.n}</span>
                <h3 className="mt-2.5 text-[14.5px] font-bold text-[#1A1A17]">{c.title}</h3>
                <p className="mt-2 text-[12.5px] leading-6 text-[#7A7A70]">{c.body}</p>
              </div>
            ))}
          </div>
        </section>

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
                            ? "border-[#E85D3C] font-medium text-[#E85D3C]"
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
            {/* ─── 01 HOW WE PROCESS ─── */}
            <Section id="how-we-process" first>
              <SectionHeading n="01" title="How we process your data" />
              <Callout>
                We&apos;re your processor for most communications activity — and an independent
                controller for things like billing and fraud prevention.
              </Callout>

              <ul className="mt-6 space-y-3">
                {roleRows.map((r) => (
                  <li
                    key={r.activity}
                    className={`${cardBase} grid items-center gap-4 p-4 md:grid-cols-[1.1fr_auto_1.2fr]`}
                  >
                    <span className="text-[13.5px] font-bold text-[#1A1A17]">{r.activity}</span>
                    <span
                      className={`inline-flex w-fit rounded-full px-3 py-1.5 text-[11.5px] font-semibold ${ROLE_META[r.role].chip}`}
                    >
                      {ROLE_META[r.role].label}
                    </span>
                    <span className="text-[12.5px] leading-6 text-[#7A7A70]">{r.note}</span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* ─── 02 STANDARD AGREEMENT ─── */}
            <Section id="standard-agreement">
              <SectionHeading n="02" title="The standard agreement" badge={`v${DOC.version}`} />
              <Callout>
                Our standard DPA incorporates your Terms of Service by reference and governs any
                processing of Customer Personal Data.
              </Callout>
              <p className="mt-5 text-[13.5px] leading-7 text-[#5C5C55]">
                It covers documented instructions, confidentiality, security, subprocessor
                authorization, data-subject assistance, incident notification, international
                transfers, deletion and return, and audit rights — each detailed in the annexes below.
              </p>
            </Section>

            {/* ─── 03 ANNEX I ─── */}
            <Section id="annex-i">
              <SectionHeading n="03" title="Annex I — Processing details" badge="Annex I" />
              <Callout>
                What we process, why, and for how long — tied to the features you actually use.
              </Callout>

              {/* A description list, not a table: these are term/definition
                  pairs, which is exactly what <dl> is for and reads correctly
                  when the two columns stack on mobile. */}
              <dl className="mt-6 border-t border-[#EAE4D8]">
                {annexI.map((row) => (
                  <div
                    key={row.term}
                    className="grid gap-1 border-b border-[#EAE4D8] py-3.5 md:grid-cols-[190px_1fr] md:gap-6"
                  >
                    <dt className="text-[13px] font-bold text-[#1A1A17]">{row.term}</dt>
                    <dd className="text-[13px] leading-6 text-[#5C5C55]">{row.detail}</dd>
                  </div>
                ))}
              </dl>
            </Section>

            {/* ─── 04 ANNEX II ─── */}
            <Section id="annex-ii">
              <SectionHeading n="04" title="Annex II — Security measures" badge="Annex II" />
              <Callout>
                Technical and organizational measures appropriate to the risk — stated only where
                independently verified.
              </Callout>
              <Bullets
                points={[
                  "Access control with least privilege and MFA for privileged access.",
                  "Encryption in transit and at rest where applicable, with governed key management.",
                  "Security logging, anomaly detection, and an incident response program.",
                  "Vendor due diligence and change management for any subprocessor with data access.",
                ]}
              />
              <p className="mt-5 text-[12.5px] leading-6 text-[#8A8A7E]">
                We don&apos;t publish claims — certifications, hosting regions, or encryption
                boundaries — that Security hasn&apos;t independently verified.
              </p>
            </Section>

            {/* ─── 05 ANNEX III ─── */}
            <Section id="annex-iii">
              <SectionHeading n="05" title="Annex III — Subprocessors" badge="Annex III" />
              <Callout>
                The current, active list — searchable, versioned, and available without needing to
                sign in.
              </Callout>

              <ul className="mt-6 space-y-3">
                {subprocessors.map((s) => (
                  <li
                    key={s.name}
                    className={`${cardBase} grid items-center gap-3 p-4 md:grid-cols-[1.2fr_1fr_auto_auto] md:gap-5`}
                  >
                    <span className="text-[13.5px] font-bold text-[#1A1A17]">{s.name}</span>
                    <span className="text-[12.5px] text-[#7A7A70]">{s.purpose}</span>
                    <span className="rounded bg-[#EFEAE0] px-2.5 py-1 font-mono text-[11.5px] text-[#5C5C55]">
                      {s.regions}
                    </span>
                    <span className="w-fit rounded-full bg-[#E1EFE6] px-3 py-1 text-[11.5px] font-semibold text-[#20654A]">
                      {s.status}
                    </span>
                  </li>
                ))}
              </ul>
            </Section>

            {/* ─── 06 ANNEX IV ─── */}
            <Section id="annex-iv">
              <SectionHeading n="06" title="Annex IV — International transfers" badge="Annex IV" />
              <Callout>
                We attach a transfer mechanism only where a restricted transfer actually occurs —
                never by default.
              </Callout>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {transferMechanisms.map((t) => (
                  <div key={t.title} className={`${cardBase} p-5`}>
                    <h3 className="text-[14px] font-bold text-[#1A1A17]">{t.title}</h3>
                    <p className="mt-2 text-[12.5px] leading-6 text-[#7A7A70]">{t.body}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* ─── 07 DELETION & RETURN ─── */}
            <Section id="deletion-return">
              <SectionHeading n="07" title="Deletion & return" />
              <Callout>
                At the end of your subscription, your data is deleted or returned — your choice,
                subject to legal retention limits.
              </Callout>
              <Bullets
                points={[
                  "Active subscriptions retain data according to your configuration and enabled features.",
                  "On termination, you can request export before the deletion lifecycle begins.",
                  "Data may briefly persist in protected backups until scheduled expiry — never restored to active use except for disaster recovery.",
                ]}
              />
            </Section>

            {/* ─── 08 AUDIT & ASSURANCE ─── */}
            <Section id="audit-assurance">
              <SectionHeading n="08" title="Audit & assurance" />
              <Callout>
                We provide evidence proportionate to your diligence needs — starting with self-serve
                documentation before anything heavier.
              </Callout>
              <Bullets
                points={[
                  "Public trust summary and current, scoped certifications where valid.",
                  "Authenticated security questionnaire responses for procurement review.",
                  "Contract-defined audit rights, with evidence review before any on-site step.",
                ]}
              />
            </Section>

            {/* ─── 09 EXECUTE ─── */}
            <Section id="execute">
              <SectionHeading n="09" title="Execute the standard DPA" />

              <div className="mt-6 rounded-2xl bg-[#0E3A32] p-7 md:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E8814A]">
                  Self-service
                </p>
                <h3 className={`mt-3 text-[20px] font-medium text-white ${serif}`}>
                  Get your DPA executed in minutes
                </h3>
                <p className="mt-3 max-w-xl text-[13.5px] leading-6 text-white/70">
                  If a negotiated MSA doesn&apos;t already cover processing, you can review and
                  execute the standard DPA online — no sales call required.
                </p>

                {/* Ordered list: the sequence is the instruction, so it has to
                    survive without CSS. */}
                <ol className="mt-6 flex flex-wrap gap-x-7 gap-y-3">
                  {executeSteps.map((step, i) => (
                    <li key={step} className="flex items-center gap-2.5 text-[12.5px] text-white/85">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/10 text-[10.5px] font-semibold text-[#E8B49A]">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </Section>

            {/* ─── 10 VERSION HISTORY ─── */}
            <Section id="version-history">
              <SectionHeading n="10" title="Version history" />
              <Callout>
                Every version is preserved — your executed copy always reflects the version you
                actually signed.
              </Callout>

              <div className={`mt-6 ${cardBase} overflow-hidden`}>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EFEAE0] px-5 py-4">
                  <span className="flex items-center gap-3">
                    <span className="rounded bg-[#E85D3C] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
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