"use client";

// ─────────────────────────────────────────────────────────────────────────────
// ZOIKO LOCAL — ACCEPTABLE USE POLICY
//
// Same document system as the Terms page: sections are data, so the TOC,
// the anchor IDs and the cross-links can never drift out of sync with the
// headings. On a policy page a dead anchor is a compliance problem, not a
// cosmetic one.
//
// The three-state vocabulary (allowed / controlled / prohibited) is defined
// once in RULE_STATE and reused by the summary cards, the rule rows and the
// chips — so a colour or label change happens in exactly one place.
//
// NOTE ON `metadata`: this is a client component (scroll-spy TOC + the
// archive disclosure), so `metadata` can't be exported here. Add a sibling
// layout.tsx if you want the title/description.
// ─────────────────────────────────────────────────────────────────────────────

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiAlertCircle, FiArrowRight, FiChevronDown, FiInfo } from "react-icons/fi";

// ─── DOCUMENT META ───────────────────────────────────────────────────────────
const DOC = {
  effective: "August 28, 2026",
  version: "1.0",
  versionEffectiveShort: "Aug 28, 2026",
};

// ─── RULE STATES ─────────────────────────────────────────────────────────────
type RuleState = "allowed" | "controlled" | "prohibited";

const RULE_STATE: Record<
  RuleState,
  { chip: string; chipLabel: string; badge: string; card: string; badgeLabel: string }
> = {
  allowed: {
    chipLabel: "Allowed",
    badgeLabel: "Allowed",
    chip: "bg-[#E1EFE6] text-[#20654A]",
    badge: "bg-[#1F5A3D] text-white",
    card: "border-[#CBDFD2] bg-[#E7F0E9]",
  },
  controlled: {
    chipLabel: "Controlled",
    badgeLabel: "Allowed with controls",
    chip: "bg-[#FAF1DE] text-[#8A6114]",
    badge: "bg-[#9A7318] text-white",
    card: "border-[#E9DCBB] bg-[#FBF2E1]",
  },
  prohibited: {
    chipLabel: "Prohibited",
    badgeLabel: "Prohibited",
    chip: "bg-[#FAE3E0] text-[#A8352A]",
    badge: "bg-[#9E2E20] text-white",
    card: "border-[#EFD2CE] bg-[#FAE7E4]",
  },
};

const summaryCards: { state: RuleState; title: string; body: string }[] = [
  {
    state: "allowed",
    title: "Legitimate communications",
    body: "Ordinary business calling, support lines, opt-in notifications, and AI receptionist use for lawful customer service — within your plan and the law.",
  },
  {
    state: "controlled",
    title: "Requires verification or approval",
    body: "High-volume messaging, automated outbound campaigns, branded caller ID, and call recording need consent evidence, campaign approval, or rate limits first.",
  },
  {
    state: "prohibited",
    title: "Illegal or abusive use",
    body: "Fraud, unlawful robocalls, harmful spoofing, harassment, malware, network manipulation, and emergency-service abuse are never allowed on Zoiko Local.",
  },
];

const zeroTolerance = [
  "Fraud & phishing",
  "Unlawful robocalls/spam",
  "Malicious caller-ID spoofing",
  "Harassment & threats",
  "Malware & security abuse",
  "Emergency-service abuse",
];

// ─── SECTIONS ────────────────────────────────────────────────────────────────
type Rule = { state: RuleState; text: React.ReactNode; qualifier?: string };

type Section = {
  id: string;
  n: string;
  title: string;
  callout: string;
  note?: string;
  rules?: Rule[];
  body?: React.ReactNode;
  points?: React.ReactNode[];
};

const sections: Section[] = [
  {
    id: "calling-rules",
    n: "01",
    title: "Calling rules",
    callout:
      "Live business calling is allowed. Automated, prerecorded, or high-volume calling needs consent evidence and approval first.",
    note: "Examples below are illustrative, not exhaustive.",
    rules: [
      { state: "allowed", text: "Live outbound calling to customers, support lines, and opt-in notifications." },
      {
        state: "controlled",
        text: "Automated, prerecorded, or synthetic-voice calling",
        qualifier: "requires a verified campaign and applicable consent basis.",
      },
      {
        state: "controlled",
        text: "Predictive dialers",
        qualifier: "abandoned-call and dialing-rate limits apply where required.",
      },
      { state: "prohibited", text: "Testing, pranking, or routing non-emergency traffic to emergency numbers." },
      {
        state: "prohibited",
        text: "Repeated short-duration call patterns designed to manipulate carrier billing (wangiri, traffic pumping).",
      },
    ],
  },
  {
    id: "messaging-rules",
    n: "02",
    title: "Messaging rules",
    callout:
      "Transactional messages are allowed by default. Marketing and bulk messages need consent, identification, and working opt-out handling.",
    rules: [
      { state: "allowed", text: "Transactional and service messages your recipients expect." },
      {
        state: "controlled",
        text: "Marketing and bulk messaging",
        qualifier: "needs consent, sender ID, unsubscribe handling, and list hygiene.",
      },
      { state: "prohibited", text: "Purchased or scraped contact lists without demonstrable consent." },
      { state: "prohibited", text: "Re-contacting a recipient who opted out, or cycling numbers/brands to evade a block." },
    ],
  },
  {
    id: "caller-identity-spoofing",
    n: "03",
    title: "Caller identity & spoofing",
    callout:
      "Your caller ID must reflect who you actually are. Manipulating it to deceive, defraud, or evade blocking is never allowed.",
    body: (
      <>
        Verified brand or CNAM display is available where authorized — impersonating another person,
        business, or number is a critical violation regardless of intent.
      </>
    ),
  },
  {
    id: "fraud-impersonation",
    n: "04",
    title: "Fraud & impersonation",
    callout:
      "Zoiko Local may never be used to deceive someone into giving up money, credentials, or personal information.",
    points: [
      "Impersonating government, law enforcement, banks, or tech support to extract payment or credentials.",
      "Fake fraud alerts, recovery scams, romance scams, or investment schemes.",
      <>
        AI voice cloning used for deceptive impersonation — legitimate synthetic voice use is governed
        separately by the{" "}
        <Link href="#" className="font-medium text-[#C2421F] underline underline-offset-2">
          AI Terms
        </Link>
        .
      </>,
    ],
  },
  {
    id: "ai-recording",
    n: "05",
    title: "AI & recording",
    callout:
      "AI can assist legitimate customer service. Recording requires the consent your jurisdiction requires — both are off-limits for covert surveillance.",
    points: [
      "AI must not be used to fake authority, hide that a call is automated where disclosure is required, or generate fraudulent content.",
      <>
        Recording and transcription need the consent and notice your market requires — see{" "}
        <Link href="#" className="font-medium text-[#C2421F] underline underline-offset-2">
          Recording &amp; Consent
        </Link>
        .
      </>,
      "Covert surveillance, stalking, or intercepting communications not intended for you is prohibited outright.",
    ],
  },
  {
    id: "security-apis",
    n: "06",
    title: "Security & APIs",
    callout:
      "Security testing is fine on things you own or are authorized to test. Attacking anyone else, or automating around our limits, is not.",
    points: [
      "No credential stuffing, malware delivery, unauthorized scanning, or DDoS coordination.",
      "No rotating accounts, keys, or numbers to evade rate limits or verification.",
      "API resale is only permitted under an explicit partner agreement.",
    ],
  },
];

// Enforcement ladder for section 07. Ordered least → most disruptive, which
// is the claim the callout makes — so the order is the content, not styling.
const escalation = [
  { code: "E1", label: "Protect", description: "Block or rate-limit a specific suspicious call or message." },
  { code: "E2", label: "Verify", description: "Ask for identity confirmation or a security reset." },
  { code: "E3", label: "Warn", description: "Written reason and a deadline to fix it." },
  { code: "E4", label: "Restrict a feature", description: "Disable the affected capability, keep the rest of your account working." },
  { code: "E5", label: "Suspend", description: "Temporarily pause service pending review." },
  { code: "E6", label: "Terminate", description: "End service for confirmed severe or repeated abuse." },
];

const routes = [
  {
    title: "Report abuse",
    body: "Tell us about spam, fraud, harassment, or another violation you witnessed.",
    cta: "Report abuse",
  },
  {
    title: "Appeal a restriction",
    body: "Think we got it wrong? Show us evidence and we'll review it.",
    cta: "Start an appeal",
  },
  {
    title: "Account may be compromised",
    body: "Secure your account, stop unauthorized traffic, and recover access.",
    cta: "Secure my account",
  },
];

const relatedPolicies = [
  "Terms of Service",
  "Privacy Policy",
  "AI Terms",
  "Recording & Consent",
  "Law Enforcement Requests",
];

// ─── SHARED ──────────────────────────────────────────────────────────────────
const serif = "font-serif";
const cardBase = "rounded-xl border border-[#E8E2D5] bg-white";

function StateChip({ state }: { state: RuleState }) {
  const meta = RULE_STATE[state];
  return (
    <span
      className={`inline-flex shrink-0 items-center rounded-md px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.07em] ${meta.chip}`}
    >
      {meta.chipLabel}
    </span>
  );
}

function SectionHeading({ n, title }: { n: string; title: string }) {
  return (
    <h2 className={`flex items-baseline gap-3 text-[21px] font-medium text-[#1A1A17] ${serif}`}>
      <span className="text-[13px] font-medium text-[#E8814A]">{n}</span>
      {title}
    </h2>
  );
}

function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-5 border-l-[3px] border-[#E85D3C] bg-[#EFEAE0] px-5 py-4">
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

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function AcceptableUsePolicy() {
  const [active, setActive] = useState(sections[0].id);
  const [archiveOpen, setArchiveOpen] = useState(false);

  const tocItems = [
    ...sections.map((s) => ({ id: s.id, label: s.title })),
    { id: "how-we-respond", label: "How we respond" },
    { id: "report-appeal-recover", label: "Report, appeal, or recover" },
    { id: "version-history", label: "Version history" },
  ];

  // Scroll-spy. rootMargin biases toward the heading that just passed the top
  // of the viewport — a plain 50% threshold jumps around on long sections.
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
    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="min-h-screen bg-[#F6F2EA]">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-16">
        {/* ═══ HERO ═══ */}
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E85D3C]">
          Trust &amp; Safety
        </p>
        <h1 className={`mt-5 text-4xl font-medium tracking-tight text-[#1A1A17] md:text-[46px] ${serif}`}>
          Acceptable <span className="italic text-[#E85D3C]">Use</span> Policy
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#5C5C55]">
          These rules explain how Zoiko Local may and may not be used across calling, messaging,
          local numbers, AI, recording, and APIs — so legitimate use stays simple, and abuse stays
          hard to get away with.
        </p>

        <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-[#E8E2D5] bg-white px-4 py-2.5 text-[13px] text-[#3F3F39]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E85D3C]" />
          Effective {DOC.effective} · Version {DOC.version}
        </p>

        {/* ═══ THREE STATES ═══ */}
        <section className="mt-14" aria-labelledby="responsibly">
          <h2 id="responsibly" className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7A7A70]">
            Use Zoiko Local responsibly
          </h2>
          <p className="mt-3 max-w-lg text-[13.5px] leading-6 text-[#7A7A70]">
            Every use of Zoiko Local falls into one of three states. This summary highlights key
            points only — the detailed sections below are authoritative.
          </p>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {summaryCards.map((c) => {
              const meta = RULE_STATE[c.state];
              return (
                <div key={c.title} className={`rounded-xl border p-5 ${meta.card}`}>
                  <span
                    className={`inline-flex rounded-full px-3 py-1 text-[10.5px] font-bold uppercase tracking-[0.07em] ${meta.badge}`}
                  >
                    {meta.badgeLabel}
                  </span>
                  <h3 className={`mt-4 text-[16px] font-medium text-[#1A1A17] ${serif}`}>{c.title}</h3>
                  <p className="mt-2.5 text-[13px] leading-6 text-[#5C5C55]">{c.body}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ═══ ZERO TOLERANCE ═══ */}
        {/* role="note", not "alert" — standing guidance, not an event. An
            alert would interrupt screen readers on every page load. */}
        <div
          role="note"
          aria-label="Zero tolerance categories"
          className="mt-5 rounded-xl border border-[#EFD2CE] bg-[#FAE7E4] p-5"
        >
          <h3 className="flex items-center gap-2.5 text-[14px] font-bold text-[#1A1A17]">
            <FiAlertCircle className="shrink-0 text-lg text-[#9E2E20]" aria-hidden />
            Zero tolerance — these get accounts suspended fast
          </h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {zeroTolerance.map((z) => (
              <li
                key={z}
                className="rounded-full border border-[#E4B7B1] bg-white px-3.5 py-1.5 text-[12.5px] text-[#A8352A]"
              >
                {z}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[12.5px] leading-5 text-[#8A6660]">
            This list is illustrative, not exhaustive — see the full categories below.
          </p>
        </div>

        {/* ═══ BODY + TOC ═══ */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[220px_1fr]">
          <nav aria-label="On this page" className="hidden lg:block">
            {/* top-24 clears a sticky site header; drop to top-8 if yours isn't sticky. */}
            <div className="sticky top-24">
              <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#9A9A8E]">
                On this page
              </p>
              <ul className="mt-4 border-l border-[#E8E2D5]">
                {tocItems.map((item) => {
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
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                // scroll-mt keeps the heading clear of a sticky header when
                // jumped to from the TOC.
                className={`scroll-mt-28 ${i > 0 ? "mt-12 border-t border-[#E8E2D5] pt-12" : ""}`}
              >
                <SectionHeading n={s.n} title={s.title} />
                <Callout>{s.callout}</Callout>

                {s.note && (
                  <p className="mt-5 text-[13px] italic leading-6 text-[#8A8A7E]">{s.note}</p>
                )}

                {s.rules && (
                  <ul className="mt-4 border-t border-[#EAE4D8]">
                    {s.rules.map((r, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-4 border-b border-[#EAE4D8] py-3.5"
                      >
                        <StateChip state={r.state} />
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
                )}

                {s.body && <p className="mt-5 text-[13.5px] leading-7 text-[#5C5C55]">{s.body}</p>}
                {s.points && <Bullets points={s.points} />}
              </section>
            ))}

            {/* ═══ 07 HOW WE RESPOND ═══ */}
            <section id="how-we-respond" className="mt-12 scroll-mt-28 border-t border-[#E8E2D5] pt-12">
              <SectionHeading n="07" title="How we respond" />
              <Callout>
                We use the least disruptive action that protects people and networks — from a quiet
                block up to termination — and we tell you why when we can.
              </Callout>

              {/* An ordered list, not a table: the ladder's order IS the claim
                  the callout makes, so it has to survive without CSS. */}
              <ol className={`mt-6 ${cardBase} overflow-hidden`}>
                {escalation.map((e) => (
                  <li
                    key={e.code}
                    className="grid grid-cols-[44px_130px_1fr] items-baseline gap-3 border-b border-[#EFEAE0] px-4 py-3.5 last:border-b-0"
                  >
                    <span className="font-mono text-[11.5px] font-semibold text-[#C2421F]">
                      {e.code}
                    </span>
                    <span className="text-[13.5px] font-semibold text-[#1A1A17]">{e.label}</span>
                    <span className="text-[13px] leading-6 text-[#5C5C55]">{e.description}</span>
                  </li>
                ))}
              </ol>

              <p className="mt-5 text-[13.5px] leading-7 text-[#5C5C55]">
                If your account looks compromised, we treat you as the victim, not the abuser, once
                the evidence supports it.
              </p>
            </section>

            {/* ═══ 08 REPORT / APPEAL / RECOVER ═══ */}
            <section
              id="report-appeal-recover"
              className="mt-12 scroll-mt-28 border-t border-[#E8E2D5] pt-12"
            >
              <SectionHeading n="08" title="Report, appeal, or recover an account" />
              <Callout>
                Choose the route that matches your situation — each goes to a different team.
              </Callout>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {routes.map((r) => (
                  <div key={r.title} className={`${cardBase} flex flex-col p-5`}>
                    <h3 className={`text-[15px] font-medium text-[#1A1A17] ${serif}`}>{r.title}</h3>
                    <p className="mt-2.5 flex-1 text-[12.5px] leading-6 text-[#7A7A70]">{r.body}</p>
                    <Link
                      href="#"
                      className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#E85D3C] hover:underline"
                    >
                      {r.cta} <FiArrowRight aria-hidden />
                    </Link>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#EFEAE0] px-5 py-4">
                <FiInfo className="mt-0.5 shrink-0 text-[#8A8A7E]" aria-hidden />
                <p className="text-[12.5px] leading-6 text-[#5C5C55]">
                  This form is not an emergency service. If someone is in immediate danger, contact
                  your local emergency services directly.
                </p>
              </div>
            </section>

            {/* ═══ 09 VERSION HISTORY ═══ */}
            <section id="version-history" className="mt-12 scroll-mt-28 border-t border-[#E8E2D5] pt-12">
              <SectionHeading n="09" title="Version history" />
              <Callout>Every version is preserved and dated — nothing is silently replaced.</Callout>

              <div className={`mt-6 ${cardBase} overflow-hidden`}>
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#EFEAE0] px-5 py-4">
                  <span className="flex items-center gap-3">
                    <span className="rounded bg-[#E85D3C] px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                      Current
                    </span>
                    <span className="text-[13.5px] text-[#1A1A17]">Version {DOC.version}</span>
                  </span>
                  <span className="font-mono text-[12.5px] text-[#7A7A70]">
                    Effective {DOC.versionEffectiveShort}
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
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}