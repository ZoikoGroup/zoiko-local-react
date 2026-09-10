"use client";


import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FiAlertCircle, FiArrowRight, FiChevronDown } from "react-icons/fi";
import { getSubscription, type Subscription } from "@/lib/api";
import { getToken } from "@/lib/auth";

// ─── DOCUMENT META ───────────────────────────────────────────────────────────
const DOC = {
  effective: "August 28, 2026",
  version: "1.0",
  versionEffectiveShort: "Aug 28, 2026",
};

// Commercial terms that apply to every account — not per-subscription data.
const COMMERCIAL_TERMS = {
  cancelAnytime: "Self-service, effective next cycle",
  minimumTerm: "None",
};

// ─── AT A GLANCE ─────────────────────────────────────────────────────────────
const glanceCards = [
  { n: "01", title: "Your agreement", body: "Who you're contracting with and what these Terms cover.", href: "#who-these-terms-apply-to" },
  { n: "02", title: "Subscription & cancellation", body: "How billing, renewal, and cancellation work.", href: "#billing-cancellation" },
  { n: "03", title: "Local numbers", body: "How numbers are assigned, ported, and released.", href: "#numbers-portability" },
  { n: "04", title: "Service limitations", body: "Emergency calling and other availability boundaries.", href: "#emergency-communications" },
  { n: "05", title: "AI & recordings", body: "What our AI receptionist and recording features do — and don't.", href: "#ai-recordings" },
  { n: "06", title: "Disputes & rights", body: "How disagreements get resolved, and rights we can't limit.", href: "#disputes-rights" },
];

// ─── SECTIONS ────────────────────────────────────────────────────────────────
// `callout` is the plain-language summary in the tinted box; `body` is the
// paragraph; `points` are the bullets. Keeping them as data means the TOC,
// the anchors and the glance cards can never drift out of sync with the
// headings.
type Section = {
  id: string;
  n: string;
  title: string;
  tocLabel: string;
  callout: string;
  body?: React.ReactNode;
  points?: React.ReactNode[];
};

const sections: Section[] = [
  {
    id: "who-these-terms-apply-to",
    n: "01",
    title: "Who these Terms apply to",
    tocLabel: "Who these Terms apply to",
    callout:
      "These Terms govern your use of Zoiko Local's business calling and communications services, offered by the applicable Zoiko contracting entity for your account's service country.",
    body: (
      <>
        By creating an account, starting a trial, or purchasing a subscription, you agree to these
        Terms and to the Zoiko Local Privacy Policy. If you&apos;re accepting on behalf of a business,
        you confirm you have authority to bind that business.
      </>
    ),
    points: [
      "The contracting entity, registered address, and territory shown to you are resolved from your service country — not your IP address.",
      "Enterprise or negotiated agreements take precedence over these public Terms where a signed order form or MSA says so.",
    ],
  },
  {
    id: "billing-cancellation",
    n: "02",
    title: "Billing & cancellation",
    tocLabel: "Billing & cancellation",
    callout:
      "You can cancel anytime from your account. Cancellation takes effect at the end of your current billing period — you keep access until then.",
    body: (
      <>
        Your recurring price, billing cadence, and included services are set by the plan you selected
        and shown before you complete checkout. Applicable taxes and regulatory fees may be added.
      </>
    ),
    points: [
      "We do not bill usage or overage categories that aren't published in your plan.",
      "If a payment fails, we'll retry and notify you before any service restriction.",
      "Annual plans and free trials each show their own conversion date and post-trial price before you commit.",
    ],
  },
  {
    id: "numbers-portability",
    n: "03",
    title: "Numbers & portability",
    tocLabel: "Numbers & portability",
    callout:
      "A local number is assigned to your account for use with Zoiko Local — it isn't guaranteed to be permanently owned, and availability depends on your number's country.",
    body: (
      <>
        Some number countries require identity, address, or business-registration documentation before
        a number can be provisioned. We&apos;ll tell you what&apos;s needed during setup.
      </>
    ),
    points: [
      "You can request to port a number out; we won't obstruct a legitimate port-out request.",
      "Numbers may be released after cancellation or extended nonpayment, following our published number-lifecycle policy.",
    ],
  },
  {
    id: "emergency-communications",
    n: "04",
    title: "Emergency communications",
    tocLabel: "Emergency communications",
    callout:
      "Emergency-calling support varies by market and service — check whether it's supported before you rely on it.",
    body: (
      <>
        Where emergency calling is offered, it may be limited by power or internet outages, device
        compatibility, or an out-of-date registered location. Zoiko Local is not a substitute for
        traditional emergency services where compliant emergency access isn&apos;t available on your
        plan.
      </>
    ),
    points: [
      "Keep your registered service location current if your plan requires it for emergency routing.",
      "Markets without supported emergency calling are clearly labeled during setup.",
    ],
  },
  {
    id: "ai-recordings",
    n: "05",
    title: "AI & recordings",
    tocLabel: "AI & recordings",
    callout:
      "Our AI receptionist can make mistakes — don't rely on it for emergencies, and review its outputs.",
    body: (
      <>
        AI-assisted features are governed separately by the{" "}
        <Link href="#" className="font-medium text-[#C2421F] underline underline-offset-2">
          AI Terms
        </Link>
        . Call recording and transcription features are governed by the{" "}
        <Link href="#" className="font-medium text-[#C2421F] underline underline-offset-2">
          Recording &amp; Consent
        </Link>{" "}
        policy, which explains notice and consent requirements that vary by jurisdiction.
      </>
    ),
    points: [
      "AI outputs may be incomplete or inaccurate and aren't a substitute for human judgment in regulated decisions.",
      "Recording controls and indicators are available where the feature is enabled — using them responsibly is a shared obligation between you and Zoiko Local.",
    ],
  },
  {
    id: "disputes-rights",
    n: "06",
    title: "Disputes & rights",
    tocLabel: "Disputes & rights",
    callout:
      "We encourage resolving issues through Support first. Statutory consumer rights that can't be limited by contract remain fully available to you.",
    body: (
      <>
        Where applicable, jurisdiction-specific consumer protections, regulator complaint routes, and
        alternative dispute resolution options apply on top of these Terms and are never overridden by
        a global clause.
      </>
    ),
  },
  {
    id: "changes-version-history",
    n: "07",
    title: "Changes & version history",
    tocLabel: "Changes & version history",
    callout:
      "We'll never silently replace these Terms — every version is preserved, dated, and linkable.",
    body: (
      <>
        If we make a material change, we&apos;ll notify you through a durable channel before it takes
        effect, and collect reacceptance only where legally required.
      </>
    ),
  },
];

const relatedPolicies = [
  "Privacy Policy",
  "Acceptable Use Policy",
  "Data Processing Agreement",
  "AI Terms",
  "Recording & Consent",
  "Law Enforcement Requests",
  "Accessibility",
];

// ─── SHARED CLASSES ──────────────────────────────────────────────────────────
const cardBase = "rounded-xl border border-[#E8E2D5] bg-white";
const serif = "font-serif";

// ─── PLAN PANEL ──────────────────────────────────────────────────────────────
function PlanPanel() {
  // One state object rather than two. Two separate setState calls in the
  // effect body trip the repo's react-hooks rule (cascading renders), and
  // resolving both together also avoids a frame where signedIn is known but
  // the plan isn't — which would flash the em-dash state at signed-in users.
  const [resolved, setResolved] = useState<{ signedIn: boolean; sub: Subscription | null } | null>(
    null
  );

  useEffect(() => {
    let live = true;
    const token = getToken();

    if (!token) {
      // Deferred to a microtask so the update lands in a callback rather than
      // synchronously in the effect body. getToken() reads localStorage, so it
      // can't run during render either — that would desync hydration.
      Promise.resolve().then(() => {
        if (live) setResolved({ signedIn: false, sub: null });
      });
      return () => {
        live = false;
      };
    }

    getSubscription(token)
      .then((sub) => {
        if (live) setResolved({ signedIn: true, sub });
      })
      .catch(() => {
        // A failed subscription lookup must not blank out the Terms. Falling
        // through to sub: null shows the em-dash state.
        if (live) setResolved({ signedIn: true, sub: null });
      });

    return () => {
      live = false;
    };
  }, []);

  const sub = resolved?.sub ?? null;
  const dash = "—";
  const billing = sub ? (sub.billing_period === "annual" ? "Annual" : "Monthly") : dash;

  const facts = [
    { label: "Plan", value: sub?.plan_code ?? dash },
    { label: "Billing", value: billing },
    {
      label: "Trial ends",
      value: sub
        ? sub.trial_ends_at
          ? new Date(sub.trial_ends_at).toLocaleDateString()
          : "Not applicable"
        : dash,
    },
    {
      label: "Renewal",
      value: sub
        ? sub.status === "canceled"
          ? "Cancelled — ends at period end"
          : `Automatic, ${billing.toLowerCase()}`
        : dash,
    },
    { label: "Cancel anytime", value: COMMERCIAL_TERMS.cancelAnytime },
    { label: "Minimum term", value: COMMERCIAL_TERMS.minimumTerm },
  ];

  return (
    <div className="mt-12 grid gap-8 rounded-2xl bg-[#0E3A32] p-7 md:p-9 lg:grid-cols-[1fr_1.05fr]">
      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E8814A]">
          Your subscription
        </p>
        <h2 className={`mt-3 text-[22px] font-medium text-white ${serif}`}>
          What applies to your plan
        </h2>
        <p className="mt-3 max-w-sm text-[13.5px] leading-6 text-white/70">
          Your Terms acceptance is tied to the exact plan and price shown here — not a general
          estimate.
        </p>

        {resolved?.signedIn === false ? (
          <Link
            href="/login"
            className="mt-6 inline-flex h-11 items-center rounded-full bg-[#E85D3C] px-6 text-[13.5px] font-semibold text-white transition hover:bg-[#D14C2C]"
          >
            Sign in to see your plan
          </Link>
        ) : (
          <Link
            href="/dashboard/billing"
            className="mt-6 inline-flex h-11 items-center rounded-full bg-[#E85D3C] px-6 text-[13.5px] font-semibold text-white transition hover:bg-[#D14C2C]"
          >
            View your plan and contract summary
          </Link>
        )}
      </div>

      <dl className="grid grid-cols-1 gap-x-8 gap-y-5 sm:grid-cols-2">
        {facts.map((f) => (
          <div key={f.label}>
            <dt className="text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white/45">
              {f.label}
            </dt>
            <dd className="mt-1.5 text-[14.5px] text-white">{f.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function TermsOfService() {
  const [active, setActive] = useState(sections[0].id);
  const [archiveOpen, setArchiveOpen] = useState(false);

  // Scroll-spy for the sticky TOC. rootMargin biases toward the heading that
  // has just passed the top of the viewport, which is what a reader treats as
  // "where I am" — a plain 50% threshold jumps around on long sections.
  useEffect(() => {
    const ids = [...sections.map((s) => s.id), "questions"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const tocItems = [
    ...sections.map((s) => ({ id: s.id, label: s.tocLabel })),
    { id: "questions", label: "Contact" },
  ];

  return (
    <main className="min-h-screen bg-[#F6F2EA]">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-16">
        {/* ═══ HERO ═══ */}
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#E85D3C]">Legal</p>
        <h1 className={`mt-5 text-4xl font-medium tracking-tight text-[#1A1A17] md:text-[46px] ${serif}`}>
          Terms of <span className="italic text-[#E85D3C]">Service</span>
        </h1>
        <p className="mt-6 max-w-xl text-[15px] leading-7 text-[#5C5C55]">
          These Terms explain the rules for using Zoiko Local — accounts, subscriptions, local
          numbers, communications features, billing, and service limitations — in plain language
          first, full detail below.
        </p>

        <p className="mt-7 inline-flex items-center gap-2.5 rounded-full border border-[#E8E2D5] bg-white px-4 py-2.5 text-[13px] text-[#3F3F39]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#E85D3C]" />
          Effective {DOC.effective} · Version {DOC.version}
        </p>

        {/* ═══ AT A GLANCE ═══ */}
        <section className="mt-14" aria-labelledby="glance">
          <h2 id="glance" className="text-[16px] font-semibold text-[#1A1A17]">
            Terms at a glance
          </h2>
          <p className="mt-2.5 max-w-lg text-[13.5px] leading-6 text-[#7A7A70]">
            This summary highlights key points only. The full Terms below are the authoritative
            agreement, subject to rights that cannot be limited by contract.
          </p>

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {glanceCards.map((c) => (
              <div key={c.n} className={`${cardBase} flex flex-col p-5`}>
                <span className="text-[11.5px] font-medium text-[#E8814A]">{c.n}</span>
                <h3 className={`mt-3 text-[16px] font-medium text-[#1A1A17] ${serif}`}>{c.title}</h3>
                <p className="mt-2 flex-1 text-[13px] leading-6 text-[#7A7A70]">{c.body}</p>
                <Link
                  href={c.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#E85D3C] hover:underline"
                >
                  Read section <FiArrowRight aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* ═══ EMERGENCY NOTICE ═══ */}
        {/* role="note" not "alert" — an alert would interrupt a screen reader
            mid-page on every load; this is standing guidance, not an event. */}
        <div
          role="note"
          aria-label="Emergency calling notice"
          className="mt-6 flex items-start gap-3.5 rounded-xl bg-[#F3DED4] p-5"
        >
          <FiAlertCircle className="mt-0.5 shrink-0 text-lg text-[#C2421F]" aria-hidden />
          <div>
            <h3 className="text-[14px] font-bold text-[#1A1A17]">Emergency calling notice</h3>
            <p className="mt-1.5 text-[13.5px] leading-6 text-[#5C5C55]">
              Zoiko Local&apos;s emergency-calling support depends on your plan, service country, and
              device. Review the{" "}
              <Link
                href="#emergency-communications"
                className="font-medium text-[#C2421F] underline underline-offset-2"
              >
                Emergency communications
              </Link>{" "}
              section before relying on this service in an emergency.
            </p>
          </div>
        </div>

        {/* ═══ PLAN PANEL ═══ */}
        <PlanPanel />

        {/* ═══ BODY + TOC ═══ */}
        <div className="mt-14 grid gap-10 lg:grid-cols-[220px_1fr]">
          {/* Sticky TOC. `top-24` clears a sticky site header; drop to top-8
              if your header isn't sticky. */}
          <nav aria-label="On this page" className="hidden lg:block">
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
                            ? "border-[#E85D3C] font-medium text-[#1A1A17]"
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
                // jumped to from the TOC or a glance card.
                className={`scroll-mt-28 ${i > 0 ? "mt-12 border-t border-[#E8E2D5] pt-12" : ""}`}
              >
                <h2 className={`flex items-baseline gap-3 text-[21px] font-medium text-[#1A1A17] ${serif}`}>
                  <span className="text-[13px] font-medium text-[#E8814A]">{s.n}</span>
                  {s.title}
                </h2>

                <div className="mt-5 border-l-[3px] border-[#E85D3C] bg-[#EFEAE0] px-5 py-4">
                  <p className="text-[14px] leading-6 text-[#3F3F39]">{s.callout}</p>
                </div>

                {s.body && (
                  <p className="mt-5 text-[13.5px] leading-7 text-[#5C5C55]">{s.body}</p>
                )}

                {s.points && (
                  <ul className="mt-4 space-y-2.5">
                    {s.points.map((p, j) => (
                      <li
                        key={j}
                        className="relative pl-5 text-[13.5px] leading-7 text-[#5C5C55] before:absolute before:left-0 before:top-[13px] before:h-1 before:w-1 before:rounded-full before:bg-[#B4B4A6]"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Version history table lives inside section 07 */}
                {s.id === "changes-version-history" && (
                  <div className={`mt-7 ${cardBase} overflow-hidden`}>
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
                        No archived versions yet. Version {DOC.version} is the first published
                        revision — superseded versions will be listed here with their own effective
                        dates and permanent links.
                      </p>
                    )}
                  </div>
                )}
              </section>
            ))}

            {/* ═══ 08 QUESTIONS ═══ */}
            <section id="questions" className="mt-12 scroll-mt-28 border-t border-[#E8E2D5] pt-12">
              <h2 className={`flex items-baseline gap-3 text-[21px] font-medium text-[#1A1A17] ${serif}`}>
                <span className="text-[13px] font-medium text-[#E8814A]">08</span>
                Questions about these Terms?
              </h2>
              <p className="mt-4 text-[13.5px] leading-7 text-[#5C5C55]">
                Reach our legal and support teams, or review the related policies that govern
                specific features.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2.5">
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