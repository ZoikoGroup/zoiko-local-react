"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiAlertTriangle,
  FiArrowRight,
  FiBell,
  FiCheck,
  FiClock,
  FiEdit3,
  FiFileText,
  FiGlobe,
  FiHome,
  FiKey,
  FiPlus,
  FiSave,
  FiShield,
  FiSlash,
  FiUser,
  FiX,
} from "react-icons/fi";

const DOC = { updated: "August 28, 2026", version: "1.0" };

// ─── HOW A REQUEST IS HANDLED ────────────────────────────────────────────────
const pipeline = [
  { n: "1", title: "Received", body: "Authenticated intake; an immutable request ID is assigned." },
  { n: "2", title: "Legal review", body: "Authority, process, jurisdiction, service/entity, and scope assessed." },
  { n: "3", title: "Narrow / challenge", body: "Overbroad or defective requests are narrowed, challenged, or redirected." },
  { n: "4", title: "Produce or reject", body: "Only legally responsive data is produced, securely — or the request is rejected." },
  { n: "5", title: "Notice", body: "User/customer notice follows unless prohibited or unsafe." },
];

// ─── AUDIENCE CARDS ──────────────────────────────────────────────────────────
const audiences = [
  {
    icon: <FiHome />,
    dark: true,
    title: "I am a government authority",
    body: "Submit legally valid requests through the secure portal — not ordinary support. Review the checklist and request types before you begin.",
    links: ["Requirements & request types", "Open the Law Enforcement Portal", "Submit an emergency request"],
  },
  {
    icon: <FiUser />,
    dark: false,
    title: "I am a Zoiko Local customer or user",
    body: "Learn how Zoiko Local reviews government requests, when we notify customers, and how requests about your own data are handled separately.",
    links: ["How we handle requests", "Our notification policy", "Make a privacy request"],
  },
];

// ─── REQUEST TYPES ───────────────────────────────────────────────────────────
const requestTypes = [
  { code: "LE-02 / 03 / 04", icon: <FiFileText />, title: "Production", body: "A request to disclose account, metadata, or stored content under valid legal process for the applicable data class." },
  { code: "LE-01", icon: <FiSave />, title: "Preservation", body: "A request to freeze qualifying existing data pending later valid production process. Not a disclosure." },
  { code: "LE-05", icon: <FiAlertTriangle />, title: "Emergency disclosure", body: "A narrow request tied to imminent danger of death or serious physical injury, for verified authorities only." },
  { code: "LE-06", icon: <FiBell />, title: "Real-time / technical assistance", body: "Interception, pen/trap, prospective data, or technical-capability requests — reviewed and handled separately." },
  { code: "LE-07", icon: <FiSlash />, title: "Restriction / account action", body: "A compelled request to freeze, disable, restrict, or preserve an account or number where lawful." },
  { code: "LE-08 / 09 / 10", icon: <FiGlobe />, title: "Other government process", body: "National-security process, cross-border direct orders, and MLAT / judicial-assistance channels." },
];

// ─── LEGAL VALIDITY CHECKLIST ────────────────────────────────────────────────
const checklist = [
  { term: "Agency identity", body: "Agency name, the submitting officer, and an agency contact chain." },
  { term: "Authority & jurisdiction", body: "The legal authority relied on and the jurisdiction it derives from." },
  { term: "Legal process", body: "The specific legal instrument (e.g., subpoena, court order, warrant, or equivalent)." },
  { term: "Target identifiers", body: "The precise account, number, or identifier the request concerns." },
  { term: "Date / time range", body: "The specific period the request covers, where applicable." },
  { term: "Requested data", body: "The specific data classes sought — not an open-ended request." },
  { term: "Return contact", body: "A verified official channel for secure follow-up and delivery." },
  { term: "Secrecy order", body: "Any nondisclosure order, with its issuing authority and duration." },
  { term: "Emergency facts", body: "For emergencies: the risk, the person at risk, and the data's relevance." },
];

// ─── DATA CATEGORIES TABLE ───────────────────────────────────────────────────
const dataClasses = [
  { cls: "Account / subscriber", may: "Business name, verified contact, account dates, service/plan, assigned identifiers", note: "Non-content process, by applicable law" },
  { cls: "Numbering records", may: "Assigned number, status, porting/provisioning, regulatory registration where held", note: "Local telecom / process rules" },
  { cls: "Call / message metadata", may: "Source/destination identifiers, timestamps, duration/status, routing records", note: "Communications-data / non-content; varies by jurisdiction" },
  { cls: "Billing / payment", may: "Invoices, payment-method metadata, transaction references", note: "Financial/privacy and process-specific rules" },
  { cls: "Stored messages / voicemail", may: "Customer content only if stored and the period is retained", note: "Content-level process where required" },
  { cls: "Recordings / transcripts", may: "Stored recording/transcript/AI summary only if enabled and retained", note: "Content process + recording/privacy controls" },
  { cls: "Real-time content/metadata", may: "Prospective interception or live capture", note: "Not produced through a stored-data request" },
];

// ─── REVIEW GATES ────────────────────────────────────────────────────────────
const reviewGates = [
  { term: "Authenticity", body: "is the request genuinely issued by the stated authority?" },
  { term: "Authority", body: "does the issuer have legal power to seek this category of data or action?" },
  { term: "Service & entity", body: "is the correct Zoiko Local entity served for the service involved?" },
  { term: "Jurisdiction", body: "is the legal process valid in the relevant jurisdiction, including cross-border restrictions?" },
  { term: "Specificity & proportionality", body: "is the scope defined, targeted, and proportionate?" },
  { term: "Legal defects & conflicts", body: "is the request properly served, and free of conflicts, privilege, or protected-account issues?" },
];

const narrowActions = [
  { term: "Seek clarification", body: "when identifiers, dates, requested data, legal basis, or authority are ambiguous." },
  { term: "Narrow", body: "overbroad requests where legally permissible, rather than producing unrelated account or content data." },
  { term: "Challenge or reject", body: "legally invalid, defective, improperly served, indefinite, disproportionate, or unauthorized requests." },
  { term: "Redirect", body: "foreign authorities to an applicable direct-order mechanism, domestic process, or treaty channel when direct service is not legally sufficient." },
  { term: "Route to the enterprise customer", body: "where that customer is the more appropriate source and law permits." },
];

// ─── JURISDICTIONS ───────────────────────────────────────────────────────────
const jurisdictions = [
  {
    key: "United States",
    body: "Different legal processes apply to content and non-content information under the Stored Communications Act (18 U.S.C. §§2702–2705). Preservation under §2703(f) freezes existing records for 90 days, renewable once for a further 90 days. Under the CLOUD Act (§2713), obligations can apply to data in Zoiko's possession, custody, or control regardless of storage location. Emergency disclosure is limited to the statutory imminent-harm exception.",
  },
  {
    key: "United Kingdom",
    body: "UK requests are assessed against the applicable investigatory-powers and data-protection framework, including whether the instrument is validly issued and served on the correct entity. Qualifying serious-crime orders may also arrive under the US–UK Data Access Agreement rather than through mutual legal assistance.",
  },
  {
    key: "European Union",
    body: "EU requests may arrive as domestic process, a European Investigation Order, or an e-Evidence certificate. From August 18, 2026, European Production and Preservation Orders are handled as dedicated request types routed to the designated establishment or legal representative.",
  },
  {
    key: "Canada",
    body: "Canadian federal and provincial process is assessed for issuing authority, territorial reach, and the distinction between transmission data and content. Production generally requires a judicially authorised instrument rather than an administrative demand.",
  },
  {
    key: "Nigeria, South Africa & Jamaica",
    body: "These markets apply their own criminal-procedure, interception, and data-protection statutes. Authority, service on the correct local entity, and any regulator or court authorisation are validated per market rather than inherited from a global default.",
  },
];

// ─── TRANSPARENCY METRICS ────────────────────────────────────────────────────
// Deliberately em-dashes. See the header comment — the design captions these
// as placeholders and publishing invented counts on a transparency report
// would be actively misleading. Wire to the reporting service when it exists.
const transparencyMetrics = [
  "Requests received",
  "Accounts affected",
  "Emergency requests",
  "Preservation requests",
];

// ─── CUSTOMER ROUTES ─────────────────────────────────────────────────────────
const customerRoutes = [
  { icon: <FiShield />, title: "Privacy requests", body: "Access, correct, or delete your data.", cta: "Make a privacy request" },
  { icon: <FiEdit3 />, title: "Civil / private-party process", body: "Subpoenas from private parties use a separate route.", cta: null },
  { icon: <FiShield />, title: "Security & abuse", body: "Report vulnerabilities or abuse through the dedicated channels.", cta: null },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
// Only the first answer was visible in the mockup; the rest are written to
// match the operative sentences already in the body above, so the FAQ can't
// contradict the policy. Review with Legal alongside the main sections.
const faqs = [
  {
    q: "Does Zoiko Local give governments direct access to customer data?",
    a: "No. Zoiko Local does not give governments direct access to customer systems or a standing feed of customer data through this process. No government receives standing, direct, or “back-door” access. Each request is individually authenticated, legally reviewed, and — where appropriate and lawful — narrowed, challenged, rejected, or redirected.",
  },
  {
    q: "What legal process does Zoiko Local require?",
    a: "It depends on the data class and the jurisdiction. Non-content records such as account or subscriber information may be available under a lower process than stored content, which generally requires a content-level instrument. The data-categories table above is a high-level guide; the applicable jurisdiction's rules control what process is required.",
  },
  {
    q: "What is a preservation request?",
    a: "A preservation request freezes qualifying data that already exists when the hold takes effect, pending valid production process. It is not a disclosure — no data is produced in response to a preservation request alone.",
  },
  {
    q: "Can a preservation request recover already deleted data?",
    a: "No. A hold can only preserve data that still exists at the moment it takes effect. Preservation does not expand ordinary retention beyond its legal scope, and it cannot restore records that were already deleted.",
  },
  {
    q: "How do law enforcement agencies submit an emergency request?",
    a: "Verified authorities use the Emergency Request path in the Law Enforcement Portal. The request must describe the emergency, the person or people at risk, why disclosure is necessary without delay, and how the requested data relates to the risk. Ordinary investigative urgency is not sufficient.",
  },
  {
    q: "Does Zoiko Local notify customers about government requests?",
    a: "Where lawful and appropriate, Zoiko Local aims to notify affected users or enterprise customers — before or after disclosure. Notice is not promised in every case: it may be delayed or withheld where prohibited by law or a valid nondisclosure order, or where it would create risks such as child-safety concerns, imminent harm, or account compromise.",
  },
  {
    q: "How does Zoiko Local handle foreign law-enforcement requests?",
    a: "A request is not binding merely because it comes from a government agency. Cross-border requests must use a valid mechanism for the jurisdiction and the data involved — domestic legal process, mutual legal assistance, an applicable executive agreement, the EU e-Evidence route, or another Legal-approved mechanism.",
  },
  {
    q: "What is an EU European Production Order?",
    a: "It is a dedicated request type under Regulation (EU) 2023/1543, recognised as a structured certificate (EPOC for production, EPOC-PR for preservation) and routed to Zoiko Local's designated establishment or legal representative under Directive (EU) 2023/1544 where applicable.",
  },
];

// ─── SIDE RAIL ───────────────────────────────────────────────────────────────
const railGroups = [
  {
    title: "For authorities",
    items: [
      { icon: <FiKey />, label: "Open Law Enforcement Portal" },
      { icon: <FiAlertTriangle />, label: "Submit an emergency request" },
      { icon: <FiSave />, label: "Submit a preservation request" },
      { icon: <FiFileText />, label: "Before you submit" },
    ],
  },
  {
    title: "For customers",
    items: [
      { icon: <FiUser />, label: "How we handle requests" },
      { icon: <FiShield />, label: "Make a privacy request" },
      { icon: <FiGlobe />, label: "Transparency reports" },
    ],
  },
  {
    title: "Related policies",
    items: [
      { icon: <FiFileText />, label: "Privacy Policy" },
      { icon: <FiFileText />, label: "Recording & Consent" },
      { icon: <FiGlobe />, label: "Service status" },
    ],
  },
];

// ─── TOC ─────────────────────────────────────────────────────────────────────
const TOC = [
  { id: "for-authorities", label: "For government authorities" },
  { id: "emergency-requests", label: "Emergency requests" },
  { id: "request-types", label: "Request types" },
  { id: "before-you-submit", label: "Before you submit" },
  { id: "portal", label: "Law Enforcement Portal" },
  { id: "preservation", label: "Preservation requests" },
  { id: "production", label: "Production requests" },
  { id: "data-legal-process", label: "Data & legal process" },
  { id: "what-we-review", label: "What we review" },
  { id: "narrow-challenge-reject", label: "Narrow, challenge & reject" },
  { id: "user-notification", label: "User notification" },
  { id: "nondisclosure", label: "Nondisclosure orders" },
  { id: "cross-border", label: "Cross-border requests" },
  { id: "eu-e-evidence", label: "EU e-Evidence" },
  { id: "us-uk-agreement", label: "US–UK Data Access Agreement" },
  { id: "real-time", label: "Real-time & technical assistance" },
  { id: "secure-delivery", label: "Secure delivery" },
  { id: "transparency", label: "Transparency reporting" },
  { id: "for-customers", label: "For customers & users" },
  { id: "faq", label: "FAQ" },
];

// ─── SHARED PARTS ────────────────────────────────────────────────────────────
const cardBase = "rounded-2xl border border-[#E8E2D5] bg-white";

function Sec({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    // scroll-mt clears a sticky header on TOC jumps.
    <section id={id} className="scroll-mt-28 border-t border-[#E8E2D5] pt-10 first:border-t-0 first:pt-0">
      {children}
    </section>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="text-[21px] font-bold leading-tight text-[#0E2A21]">{children}</h2>;
}

// Teal box = the operative commitment. Sand box = the limit on it. Keeping
// them visually distinct matters on a page agencies will cite.
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
      <FiFileText className="mt-0.5 shrink-0 text-[#8C8271]" aria-hidden />
      <p className="text-[12px] leading-5 text-[#6E6656]">{children}</p>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-[13.5px] leading-7 text-[#4A544D]">{children}</p>;
}

// Term + explanation rows. Rendered as a <dl> because that is what they are —
// and it keeps the pairing intact when the columns stack on mobile.
function TermList({ items }: { items: { term: string; body: string }[] }) {
  return (
    <dl className="mt-4 space-y-3">
      {items.map((i) => (
        <div key={i.term} className="relative pl-5">
          <span
            className="absolute left-0 top-[9px] h-[5px] w-[5px] rounded-full bg-[#E85D3C]"
            aria-hidden
          />
          <dt className="inline text-[13px] font-bold text-[#0E2A21]">{i.term}</dt>
          <dd className="inline text-[13px] leading-6 text-[#4A544D]"> — {i.body}</dd>
        </div>
      ))}
    </dl>
  );
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function LawEnforcementRequests() {
  const [active, setActive] = useState(TOC[0].id);
  const [jurisdiction, setJurisdiction] = useState(jurisdictions[0].key);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
      <section className="bg-gradient-to-br from-[#F5F2EB] via-[#F7F3EC] to-[#F6EEE8] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-[#0E2A21] md:text-[44px]">
              Law Enforcement Requests
            </h1>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#5C6660]">
              We review government requests for legal validity, scope, and authority before
              disclosing data — and we narrow, challenge, reject, or redirect them where appropriate
              and lawful. No government receives standing or direct access to Zoiko Local systems.
            </p>

            <dl className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2.5 text-[12.5px] text-[#5C6660]">
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

          {/* Pipeline — ordered list: the sequence is the substance. */}
          <div className={`${cardBase} p-6`}>
            <p className="text-[10.5px] font-bold uppercase tracking-[0.14em] text-[#8C8271]">
              How a request is handled
            </p>
            <ol className="mt-5 space-y-5">
              {pipeline.map((s, i) => (
                <li key={s.n} className="relative flex gap-4">
                  {i < pipeline.length - 1 && (
                    <span
                      className="absolute left-[15px] top-8 h-[calc(100%+4px)] w-px bg-[#E4DED0]"
                      aria-hidden
                    />
                  )}
                  <span
                    className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[12.5px] font-bold ${
                      i === 0 ? "bg-[#0E3A32] text-white" : "bg-[#E4EFE9] text-[#0E5C4E]"
                    }`}
                  >
                    {s.n}
                  </span>
                  <div>
                    <h3 className="text-[14px] font-bold text-[#0E2A21]">{s.title}</h3>
                    <p className="mt-1 text-[12.5px] leading-5 text-[#5C6660]">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ═══ AUDIENCE CARDS ═══ */}
      <section className="bg-[#F7F3EC] pb-6">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2">
          {audiences.map((a) => (
            <div key={a.title} className={`${cardBase} p-6`}>
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl text-lg ${
                  a.dark ? "bg-[#0E3A32] text-white" : "bg-[#E4EFE9] text-[#0E5C4E]"
                }`}
              >
                {a.icon}
              </span>
              <h2 className="mt-5 text-[17px] font-bold text-[#0E2A21]">{a.title}</h2>
              <p className="mt-2.5 text-[13px] leading-6 text-[#5C6660]">{a.body}</p>
              <ul className="mt-4 space-y-2">
                {a.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0E5C4E] hover:underline"
                    >
                      {l} <FiArrowRight aria-hidden />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ EMERGENCY BANNER ═══ */}
      <section className="bg-[#F7F3EC] pb-12">
        <div className="mx-auto max-w-6xl px-5">
          {/* role="note" not "alert": standing guidance shown on every load,
              not a live event. An alert would hijack every screen reader. */}
          <div
            role="note"
            aria-label="Emergency guidance"
            className="flex flex-col items-start justify-between gap-5 rounded-2xl border-l-[5px] border-[#B3261E] bg-[#FBE7E4] p-6 md:flex-row md:items-center"
          >
            <div className="flex items-start gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#B3261E] text-white">
                <FiAlertTriangle aria-hidden />
              </span>
              <div>
                <h2 className="text-[15.5px] font-bold text-[#7E1B15]">
                  Imminent danger of death or serious physical injury?
                </h2>
                <p className="mt-1.5 text-[12.5px] leading-6 text-[#8A3B33]">
                  Verified authorities seeking data to address a qualifying emergency use the{" "}
                  <strong className="font-bold text-[#7E1B15]">Emergency Request</strong> path.
                  Members of the public in immediate danger must contact their{" "}
                  <strong className="font-bold text-[#7E1B15]">local emergency services</strong> —
                  Zoiko Local is not an emergency service.
                </p>
              </div>
            </div>
            <Link
              href="#"
              className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-[#B3261E] px-5 text-[13.5px] font-semibold text-white transition hover:bg-[#8E1E17]"
            >
              <FiAlertTriangle aria-hidden /> Emergency request
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ BODY: TOC / CENTRE / RAIL ═══ */}
      <section className="bg-[#F7F3EC] pb-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[200px_minmax(0,1fr)] xl:grid-cols-[200px_minmax(0,1fr)_240px]">
          {/* TOC */}
          <nav aria-label="On this page" className="hidden lg:block">
            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto">
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
            {/* Wireframe notice — keep until Legal, Privacy and Security sign off. */}
            <div className="flex items-start gap-2.5 rounded-lg bg-[#EDE7DB] px-4 py-3.5">
              <FiFileText className="mt-0.5 shrink-0 text-[#8C8271]" aria-hidden />
              <p className="text-[12px] leading-5 text-[#6E6656]">
                This page is fully readable without JavaScript, and it is not a submission channel for
                legal process — routine requests use the authenticated portal. It is a design
                wireframe: operative legal statements are illustrative and are authored and approved
                by Zoiko Legal, Privacy, and Security before publication.
              </p>
            </div>

            <Sec id="for-authorities">
              <H2>For government authorities</H2>
              <Answer>
                Verified government and law-enforcement personnel should submit legally valid requests
                through the Law Enforcement Portal — not through ordinary customer support, which
                cannot accept or act on legal process.
              </Answer>
              <Body>
                Before submitting, confirm you are serving the correct Zoiko Local legal entity for the
                service and jurisdiction, and that your request identifies the target, data class, time
                period, and legal authority. Requests are authenticated, legally reviewed, and — where
                appropriate and lawful — narrowed, challenged, rejected, or redirected.
              </Body>
              <Caveat>
                Government status is never established by an email display name, badge photograph,
                letterhead, or caller ID alone. Portal enrollment verifies agency domain, officer
                identity, agency contact chain, jurisdiction, and multi-factor authentication.
              </Caveat>
            </Sec>

            <Sec id="emergency-requests">
              <H2>How do agencies submit an emergency request?</H2>
              <Answer>
                Emergency disclosure is limited to situations involving imminent danger of death or
                serious physical injury, and is available only to verified authorities. Ordinary
                investigative urgency is not sufficient.
              </Answer>
              <Body>
                A qualifying emergency request must describe the emergency, the person or people at
                risk, why disclosure is necessary without delay, and how the requested data relates to
                the risk. Emergency disclosures are limited to the data reasonably necessary to
                address the emergency and are reviewed and approved under Zoiko Local&apos;s emergency
                policy, with a complete retrospective record.
              </Body>
              <Caveat>
                <strong className="font-bold text-[#5A5346]">
                  Zoiko Local is not an emergency service.
                </strong>{" "}
                Members of the public who face immediate danger must contact their local emergency
                service. The emergency-disclosure route is for authenticated authorities seeking data
                necessary to address a qualifying emergency.
              </Caveat>
            </Sec>

            <Sec id="request-types">
              <H2>Request types</H2>
              <Body>
                Each request class maps to a distinct internal workflow. Choosing the right type helps
                route your request to the correct legal and operational path.
              </Body>

              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {requestTypes.map((t) => (
                  <div key={t.code} className={`${cardBase} p-5`}>
                    <p className="font-mono text-[10.5px] text-[#8C8271]">{t.code}</p>
                    <div className="mt-3 flex items-start gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#E4EFE9] text-[#0E5C4E]">
                        {t.icon}
                      </span>
                      <h3 className="pt-1 text-[14px] font-bold leading-tight text-[#0E2A21]">
                        {t.title}
                      </h3>
                    </div>
                    <p className="mt-3 text-[12px] leading-6 text-[#5C6660]">{t.body}</p>
                  </div>
                ))}
              </div>
            </Sec>

            <Sec id="before-you-submit">
              <H2>Before you submit: legal-validity checklist</H2>
              <Body>
                Complete requests are processed faster and are less likely to require clarification.
                Please be ready to provide:
              </Body>

              <dl className="mt-5 grid gap-x-8 gap-y-3.5 sm:grid-cols-2">
                {checklist.map((c) => (
                  <div key={c.term} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded bg-[#E4EFE9] text-[9px] text-[#0E5C4E]">
                      <FiCheck strokeWidth={4} aria-hidden />
                    </span>
                    <div>
                      <dt className="inline text-[12.5px] font-bold text-[#0E2A21]">{c.term}</dt>
                      <dd className="inline text-[12.5px] leading-6 text-[#5C6660]"> — {c.body}</dd>
                    </div>
                  </div>
                ))}
              </dl>

              <Caveat>
                Do not include shortened links, public file-sharing links, macros, or executable
                attachments; requests containing them may be quarantined under Security policy.
                Provide identifiers and scope precisely — Zoiko Local does not confirm the existence
                of an account, customer, or request where law, secrecy, security, or privacy rules
                prohibit confirmation.
              </Caveat>
            </Sec>

            <Sec id="portal">
              <H2>The Law Enforcement Portal</H2>

              <div className="mt-5 grid gap-6 rounded-2xl bg-gradient-to-br from-[#12403A] via-[#0F3A34] to-[#0B2E2A] p-7 md:grid-cols-2 md:items-center md:p-8">
                <div>
                  <h3 className="text-[22px] font-bold leading-tight text-white">
                    Submit through the secure portal
                  </h3>
                  <p className="mt-4 text-[12.5px] leading-6 text-white/70">
                    The authenticated Law Enforcement Portal is the route for routine government
                    requests. Standard customer support cannot accept legal process. Every access to a
                    production is authenticated and logged, and secure download links expire and are
                    scoped to the verified request.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <Link
                    href="#"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-white px-5 text-[13.5px] font-semibold text-[#0E2A21] transition hover:bg-[#F1EDE6]"
                  >
                    <FiKey aria-hidden /> Open Law Enforcement Portal
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-11 items-center justify-center rounded-lg border border-white/25 px-5 text-[13.5px] font-semibold text-white transition hover:bg-white/10"
                  >
                    Portal access requirements
                  </Link>
                </div>
              </div>

              <Caveat>
                Emergency requests received outside the portal may be accepted only through the
                approved emergency contingency process and are then bound to the request ledger. Zoiko
                Local does not publish internal analyst names, personal telephone numbers, or
                infrastructure endpoints.
              </Caveat>
            </Sec>

            <Sec id="preservation">
              <H2>What is a preservation request?</H2>
              <Answer>
                A preservation request freezes qualifying data that already exists when the hold takes
                effect, pending valid production process. It is not a disclosure, and it cannot
                recover data that was already deleted.
              </Answer>
              <Body>
                A preservation hold identifies the target account or number, the data classes, any
                date/time scope, the legal authority and requesting authority, the effective time,
                expiry, renewal status, and any related production request. Preservation does not
                expand ordinary retention beyond its legal scope, and normal deletion jobs consult the
                legal-hold service before any destructive processing. Under U.S. §2703(f), an initial
                90-day preservation may be renewed once for a further 90 days.
              </Body>
              <Caveat>
                When a hold expires without valid renewal or another retention basis, the records
                return to ordinary retention and deletion rules.
              </Caveat>
            </Sec>

            <Sec id="production">
              <H2>Production requests</H2>
              <Body>
                A production request seeks disclosure of specific data under valid legal process.
                Zoiko Local confirms, through its authoritative data inventory, whether responsive
                data exists and is retained before any production — it does not promise that
                particular data exists or is kept for a particular period.
              </Body>
              <Body>
                Only the legally responsive target, time period, and data classes are collected and
                produced, following legal, data-quality, and minimization review.
              </Body>
            </Sec>

            <Sec id="data-legal-process">
              <H2>Data categories and legal process</H2>
              <Body>
                The table below is a high-level guide. Actual availability depends on the data Zoiko
                Local holds at the time of the request, and jurisdiction rules — not this table alone
                — control the process required.
              </Body>

              <div className="mt-5 overflow-hidden rounded-xl border border-[#E4DED0]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[600px] border-collapse text-left">
                    <thead>
                      <tr className="bg-[#0E3A32]">
                        <th scope="col" className="px-5 py-3 text-[12px] font-bold text-white">Data class</th>
                        <th scope="col" className="px-5 py-3 text-[12px] font-bold text-white">May include (if retained)</th>
                        <th scope="col" className="px-5 py-3 text-[12px] font-bold text-white">Process note</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {dataClasses.map((r, i) => (
                        <tr
                          key={r.cls}
                          className={`border-t border-[#EDE7DB] ${i % 2 === 1 ? "bg-[#FBF9F5]" : ""}`}
                        >
                          <th scope="row" className="px-5 py-3.5 align-top text-[12px] font-bold text-[#0E2A21]">
                            {r.cls}
                          </th>
                          <td className="px-5 py-3.5 align-top text-[12px] leading-6 text-[#5C6660]">{r.may}</td>
                          <td className="px-5 py-3.5 align-top text-[12px] leading-6 text-[#5C6660]">{r.note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <Caveat>
                Public wording uses “may include” and “if retained.” Zoiko Local does not publish a
                static data-retention promise here; the authoritative data inventory and retention
                registry determine whether responsive data exists at the time of a request.
              </Caveat>
            </Sec>

            <Sec id="what-we-review">
              <H2>What Zoiko Local reviews</H2>
              <Body>
                Every request is reviewed against a consistent set of gates before any data is
                produced:
              </Body>
              <TermList items={reviewGates} />
            </Sec>

            <Sec id="narrow-challenge-reject">
              <H2>How Zoiko Local narrows, challenges, and rejects requests</H2>
              <Body>Where it has a lawful basis to do so, Zoiko Local will:</Body>
              <TermList items={narrowActions} />
            </Sec>

            <Sec id="user-notification">
              <H2>User and enterprise-customer notification</H2>
              <Answer>
                Where lawful and appropriate, Zoiko Local aims to notify affected users or enterprise
                customers about government requests for their data — before or after disclosure.
                Notice is not promised in every case.
              </Answer>
              <Body>
                Notice may be delayed or withheld where prohibited by law or a valid nondisclosure
                order, or where it would create risks such as child-safety concerns, imminent harm, or
                account compromise. Where an enterprise customer controls the data, Zoiko Local may
                direct notice or the request to that customer. When a delayed-notice restriction
                expires, the matter is routed for notice review.
              </Body>
            </Sec>

            <Sec id="nondisclosure">
              <H2>Nondisclosure and secrecy orders</H2>
              <Body>
                Valid nondisclosure orders are honored, but they are tracked as executable state —
                with issuing authority, legal basis, scope, and expiry — not by memory or calendar
                reminders alone. Indefinite or undated nondisclosure restrictions receive heightened
                legal review and are challenged where legally available. When a restriction expires
                without valid extension, the matter is routed for user-notice review.
              </Body>
            </Sec>

            <Sec id="cross-border">
              <H2>Cross-border requests and why the rules differ</H2>
              <Answer>
                A request is not binding merely because it comes from a government agency. Cross-border
                requests must use a valid mechanism for the jurisdiction and the data involved.
              </Answer>
              <Body>
                Valid routes may include domestic legal process, mutual legal assistance treaties
                (MLAT) or European Investigation Orders, CLOUD Act executive agreements, the EU
                e-Evidence route, a designated legal representative, or another Legal-approved
                mechanism. The summaries below explain how key markets differ; they are not a
                substitute for current legal advice.
              </Body>

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
            </Sec>

            <Sec id="eu-e-evidence">
              <H2>EU e-Evidence (European Production &amp; Preservation Orders)</H2>
              <Answer>
                Zoiko Local supports legally valid EU e-Evidence requests. From August 18, 2026,
                Regulation (EU) 2023/1543 applies to European Production Orders (EPOC) and European
                Preservation Orders (EPOC-PR).
              </Answer>
              <Body>
                These certificates are recognized as dedicated, structured request types and are routed
                to Zoiko Local&apos;s designated establishment or legal representative under Directive
                (EU) 2023/1544 where applicable. Preservation and production are tracked as distinct
                orders, with issuing/validating authority, member state, offence basis, target, data
                category, time period, certificate, and deadlines captured, and objections, referrals,
                and escalations handled by Legal.
              </Body>
              <Caveat>
                For security reasons, this page does not publish internal representative identity or
                contact details beyond the authority-approved submission route.
              </Caveat>
            </Sec>

            <Sec id="us-uk-agreement">
              <H2>US–UK Data Access Agreement</H2>
              <Body>
                Qualifying serious-crime orders may be transmitted directly under the bilateral US–UK
                Data Access Agreement, which has been in force since October 3, 2022. Zoiko Local
                validates that an order falls within the agreement&apos;s covered scope, targeting
                restrictions, and covered-provider/covered-data/covered-person conditions before
                acting — it does not assume that every U.S.–U.K. request qualifies. Preservation under
                the agreement is tracked separately from production.
              </Body>
            </Sec>

            <Sec id="real-time">
              <H2>Real-time, interception, and technical assistance</H2>
              <Body>
                Lawful interception, pen-register/trap-and-trace, prospective communications data, and
                technical-capability requests are handled as separate request types, with Legal and
                Security architecture review before any implementation. Prospective surveillance is
                never provisioned from a stored-data request.
              </Body>
              <Caveat>
                Capability availability depends on country, service, provider role, and legal entity.
                “Not technically supported” is a valid outcome unless a binding legal obligation
                applies and the capability can lawfully be built. When prospective authority expires,
                the compelled capability is disabled automatically unless validly renewed.
              </Caveat>
            </Sec>

            <Sec id="secure-delivery">
              <H2>Secure delivery and chain of custody</H2>
              <Body>
                Approved productions are delivered securely to the verified requester with a manifest,
                integrity hashing, certification where applicable, and delivery acknowledgement.
                Sensitive productions are not sent through ordinary email or consumer file-sharing,
                and every access to a production is authenticated and logged.
              </Body>
            </Sec>

            <Sec id="transparency">
              <H2>Transparency reporting</H2>
              <Body>
                Zoiko Local intends to publish periodic transparency reporting with aggregate figures
                — such as the number of requests received, affected accounts or identifiers, and
                compliance outcomes by category — where lawful and subject to privacy thresholds that
                prevent re-identification.
              </Body>

              <dl className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {transparencyMetrics.map((m) => (
                  <div key={m} className={`${cardBase} p-5 text-center`}>
                    {/* Em-dash, not a number. See the note at the top of this file. */}
                    <dd className="text-[22px] font-bold leading-none text-[#0E2A21]" aria-label="Not yet published">
                      —
                    </dd>
                    <dt className="mt-2.5 text-[11.5px] leading-4 text-[#5C6660]">{m}</dt>
                  </div>
                ))}
              </dl>

              <Link
                href="#"
                className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#0E5C4E] hover:underline"
              >
                View transparency reports <FiArrowRight aria-hidden />
              </Link>

              <Caveat>
                Figures are illustrative placeholders for this design wireframe. Published reporting
                binds to governed data and privacy thresholds before release.
              </Caveat>
            </Sec>

            <Sec id="for-customers">
              <H2>For customers and users</H2>
              <Answer>
                Zoiko Local does not give governments direct access to customer systems or a standing
                feed of customer data through the law-enforcement request process.
              </Answer>
              <Body>
                Zoiko Local reviews government requests for legal validity and scope, and may narrow,
                challenge, reject, or redirect them where appropriate and legally permitted. Where
                lawful and appropriate, affected users or enterprise customers are notified — though
                notice is not possible in every case. A preservation request does not mean data was
                disclosed, and emergency disclosures are limited to qualifying urgent-safety
                circumstances.
              </Body>
              <Body>Requests about your own data are handled separately from this page:</Body>

              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {customerRoutes.map((r) => (
                  <div key={r.title} className={`${cardBase} p-5`}>
                    <span className="text-[#0E5C4E]">{r.icon}</span>
                    <h3 className="mt-3 text-[13.5px] font-bold leading-tight text-[#0E2A21]">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{r.body}</p>
                    {r.cta && (
                      <Link
                        href="#"
                        className="mt-3 inline-block text-[12px] font-semibold text-[#E85D3C] hover:underline"
                      >
                        {r.cta}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </Sec>

            <Sec id="faq">
              <H2>Frequently asked questions</H2>

              <div className="mt-5 space-y-3">
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
                        <span className="text-[13.5px] font-bold leading-6 text-[#0E2A21]">
                          {f.q}
                        </span>
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded text-[11px] transition ${
                            open ? "bg-[#0E3A32] text-white" : "bg-[#EDE7DB] text-[#0E2A21]"
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
            </Sec>
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