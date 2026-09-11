"use client";

import { useState, useEffect, type ReactNode } from "react";
import {
  FiChevronDown, FiChevronUp, FiExternalLink, FiMail,
  FiShield, FiEye, FiLock, FiGlobe, FiDatabase,
  FiSliders, FiAlertCircle, FiClock, FiUsers,
} from "react-icons/fi";

// ─── TYPES ───────────────────────────────────────────────────────────────────
type Section = {
  id: string;
  title: string;
  content: ReactNode;
};

// ─── TOC ITEM ────────────────────────────────────────────────────────────────
function TocItem({ id, label, active }: { id: string; label: string; active: boolean }) {
  return (
    <a
      href={`#${id}`}
      className={`block border-l-2 py-1.5 pl-4 text-[13px] leading-5 transition-colors ${
        active
          ? "border-[#d9603f] font-semibold text-[#d9603f]"
          : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
      }`}
    >
      {label}
    </a>
  );
}

// ─── CALLOUT ─────────────────────────────────────────────────────────────────
function Callout({ children, icon: Icon = FiAlertCircle, color = "blue" }: {
  children: ReactNode;
  icon?: React.ElementType;
  color?: "blue" | "amber" | "green";
}) {
  const styles = {
    blue: "bg-[#EBF0F8] border-[#3B6CB5] text-[#1e3a6e] dark:bg-[#1e3a6e]/20 dark:border-[#3B6CB5] dark:text-blue-200",
    amber: "bg-[#FDF3E3] border-[#C17D2A] text-[#7a4e1a] dark:bg-[#7a4e1a]/20 dark:border-[#C17D2A] dark:text-amber-200",
    green: "bg-[#E8F1EC] border-[#2E7D52] text-[#1a4d32] dark:bg-[#1a4d32]/20 dark:border-[#2E7D52] dark:text-green-200",
  };
  return (
    <div className={`my-5 flex gap-3 rounded-xl border-l-4 p-4 ${styles[color]}`}>
      <Icon size={16} className="mt-0.5 shrink-0" />
      <div className="text-[13.5px] leading-6">{children}</div>
    </div>
  );
}

// ─── DATA TABLE ──────────────────────────────────────────────────────────────
function DataTable({ headers, rows }: { headers: string[]; rows: string[][] }) {
  return (
    <div className="my-5 overflow-x-auto rounded-xl ring-1 ring-black/5 dark:ring-white/10">
      <table className="w-full border-collapse text-left text-[13px]">
        <thead>
          <tr className="bg-[#f3efe7] dark:bg-gray-800">
            {headers.map((h) => (
              <th key={h} className="px-4 py-3 font-semibold text-[#1c2b26] dark:text-white">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 ? "bg-white dark:bg-gray-900" : "bg-[#fbfaf6] dark:bg-gray-800/50"}>
              {row.map((cell, j) => (
                <td key={j} className="border-t border-gray-100 px-4 py-3 text-gray-600 dark:border-gray-700 dark:text-gray-300">{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── SECTION HEADING ─────────────────────────────────────────────────────────
function SH({ children }: { children: ReactNode }) {
  return <h3 className="mb-2 mt-6 text-[15px] font-bold text-[#1c2b26] dark:text-white">{children}</h3>;
}

function P({ children }: { children: ReactNode }) {
  return <p className="mb-3 text-[13.5px] leading-7 text-gray-600 dark:text-gray-300">{children}</p>;
}

function UL({ items }: { items: string[] }) {
  return (
    <ul className="mb-4 space-y-1.5 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-2.5 text-[13.5px] leading-6 text-gray-600 dark:text-gray-300">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#d9603f]" />
          {item}
        </li>
      ))}
    </ul>
  );
}

// ─── SECTIONS DATA ────────────────────────────────────────────────────────────
const sections: Section[] = [
  {
    id: "overview",
    title: "Why Zoiko Local collects data",
    content: (
      <>
        <P>
          Zoiko Local is a business communications service. To provide local numbers, calling, video, and AI Receptionist
          features, we need to process information about your account, your use of the service, and the communications
          you send and receive.
        </P>
        <P>
          We collect data to operate the service and keep it running, to comply with legal and regulatory obligations
          tied to telecommunications, and to improve what we offer. We do not sell your personal data.
        </P>
        <Callout icon={FiShield} color="green">
          We do not sell personal data to third parties. Data shared with partners is limited to what is needed to
          deliver the service — for example, carriers who route calls.
        </Callout>
      </>
    ),
  },
  {
    id: "what-we-collect",
    title: "Personal information we collect or receive",
    content: (
      <>
        <P>The categories of personal data we collect depend on how you use Zoiko Local and your service country.</P>
        <SH>Account and identity data</SH>
        <DataTable
          headers={["Category", "Examples", "Source"]}
          rows={[
            ["Account details", "Name, email address, password hash", "You, at sign-up"],
            ["Verification data", "Business name, address, ID documents (where required)", "You, during setup"],
            ["Billing data", "Payment method, billing address, invoices", "You, payment processor"],
            ["Contact preferences", "Notification settings, language preference", "You, in settings"],
          ]}
        />
        <SH>Service usage data</SH>
        <DataTable
          headers={["Category", "Examples", "Source"]}
          rows={[
            ["Call records", "Numbers called, duration, timestamps, call direction", "Service activity"],
            ["Number data", "Numbers assigned, ported, or released on your account", "Service activity"],
            ["Device data", "App version, OS, device type used to access the service", "Your device"],
            ["Log data", "IP addresses, access times, error logs", "Our systems"],
          ]}
        />
        <SH>Communications content</SH>
        <P>
          Where recording or transcription features are enabled and consented to, we may process the content of calls.
          This is governed separately by our Recording &amp; Consent policy and applicable law.
        </P>
        <SH>AI feature data</SH>
        <P>
          Where the AI Receptionist is active, we process call audio and summaries to operate the feature. AI Terms
          apply. Summaries are draft and reviewable.
        </P>
      </>
    ),
  },
  {
    id: "how-we-use",
    title: "How we use your personal information",
    content: (
      <>
        <P>We use personal data only for the purposes set out below. Each purpose is supported by a lawful basis.</P>
        <DataTable
          headers={["Purpose", "Lawful basis"]}
          rows={[
            ["Providing and operating the service", "Contract"],
            ["Billing and payment processing", "Contract"],
            ["Number provisioning and porting", "Contract / Legal obligation"],
            ["Regulatory compliance and record-keeping", "Legal obligation"],
            ["Fraud prevention and security", "Legitimate interests"],
            ["Customer support", "Contract"],
            ["Service improvement and analytics", "Legitimate interests"],
            ["AI Receptionist feature operation", "Contract / Consent"],
            ["Marketing (where permitted)", "Consent / Legitimate interests"],
          ]}
        />
        <Callout icon={FiEye} color="blue">
          Where we rely on legitimate interests, you have the right to object. We balance our interests against your
          rights before processing.
        </Callout>
      </>
    ),
  },
  {
    id: "communications",
    title: "Communications, recordings, and AI features",
    content: (
      <>
        <SH>Call records</SH>
        <P>
          Metadata about calls made through the service — such as numbers involved, timestamps, and duration — is
          retained for billing, support, and regulatory purposes. The retention period depends on your service country
          and applicable law.
        </P>
        <SH>Call recording and transcription</SH>
        <P>
          Recording and transcription are opt-in features. Where enabled, notice and consent requirements apply and
          vary by jurisdiction. You are responsible for complying with local notice and consent laws when using these
          features.
        </P>
        <DataTable
          headers={["Feature", "Data processed", "Retention"]}
          rows={[
            ["Call recording", "Audio of calls", "Per your settings and applicable law"],
            ["Transcription", "Text derived from call audio", "Per your settings"],
            ["AI summaries", "Draft text from AI analysis", "Reviewable; per plan settings"],
          ]}
        />
        <SH>AI Receptionist</SH>
        <P>
          The AI Receptionist processes call audio to generate summaries and route inquiries. AI outputs are draft and
          subject to human review. AI Terms govern use of this feature. Inaccuracies may occur; do not rely on AI
          outputs for regulated decisions.
        </P>
      </>
    ),
  },
  {
    id: "sharing",
    title: "Sharing and transfers",
    content: (
      <>
        <P>We share personal data only in the limited circumstances below.</P>
        <SH>Service providers</SH>
        <DataTable
          headers={["Category", "Purpose", "Example"]}
          rows={[
            ["Carrier partners", "Route and terminate calls", "Telecommunications carriers"],
            ["Payment processors", "Process billing and payments", "Stripe, payment gateways"],
            ["Cloud infrastructure", "Host and store service data", "Cloud providers"],
            ["Analytics providers", "Understand service performance", "Aggregated usage analytics"],
            ["AI providers", "Power AI Receptionist features", "AI model providers"],
          ]}
        />
        <SH>Legal and regulatory disclosures</SH>
        <P>
          We may disclose data to law enforcement, regulators, or courts where required by law, valid legal process,
          or to protect the rights, safety, or property of Zoiko Local or others. See our Law Enforcement Requests
          policy for more detail.
        </P>
        <SH>International transfers</SH>
        <P>
          Your data may be transferred to and processed in countries other than your own. Where transfers occur outside
          adequate-protection territories, we use appropriate safeguards (such as Standard Contractual Clauses or
          equivalent mechanisms).
        </P>
        <Callout icon={FiGlobe} color="amber">
          International data transfer rules vary by jurisdiction. Where your service country has specific transfer
          requirements, we apply the relevant safeguards.
        </Callout>
      </>
    ),
  },
  {
    id: "retention",
    title: "How long we keep information",
    content: (
      <>
        <P>
          We keep personal data for as long as necessary for the purposes described in this policy, subject to legal,
          regulatory, and operational requirements.
        </P>
        <DataTable
          headers={["Data type", "Typical retention"]}
          rows={[
            ["Account data", "Duration of account, plus statutory minimum after closure"],
            ["Call records (metadata)", "Per regulatory requirement by service country"],
            ["Call recordings", "Per your settings and applicable law"],
            ["Billing records", "Per tax and financial record requirements"],
            ["AI summaries", "Per plan settings and your review"],
            ["Log and security data", "Rolling period per security and operational need"],
          ]}
        />
        <P>
          When data is no longer required, we delete or anonymise it. Some data may be retained longer where required
          by law or where legitimate interests (such as dispute resolution) apply.
        </P>
      </>
    ),
  },
  {
    id: "security",
    title: "Security and data protection",
    content: (
      <>
        <P>
          We implement appropriate technical and organisational measures to protect personal data against unauthorised
          access, loss, or misuse.
        </P>
        <SH>Measures include</SH>
        <UL items={[
          "Encryption of data in transit and at rest",
          "Access controls and role-based permissions",
          "Infrastructure security and monitoring",
          "Vendor security assessments for key partners",
          "Incident response procedures",
        ]} />
        <P>
          No system is perfectly secure. If you become aware of a security concern, contact us at the address in the
          Contact section. We maintain a responsible disclosure process.
        </P>
        <Callout icon={FiLock} color="blue">
          We conduct regular reviews of our security practices. Where a breach is likely to result in risk to your
          rights, we will notify you and relevant regulators as required by law.
        </Callout>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your privacy rights",
    content: (
      <>
        <P>
          Depending on your service country and applicable law, you may have the following rights regarding your
          personal data. Not all rights apply in all jurisdictions.
        </P>
        <DataTable
          headers={["Right", "What it means"]}
          rows={[
            ["Access", "Request a copy of the personal data we hold about you"],
            ["Rectification", "Ask us to correct inaccurate or incomplete data"],
            ["Erasure", "Ask us to delete your data where no legal ground for retention applies"],
            ["Restriction", "Ask us to limit processing in certain circumstances"],
            ["Portability", "Receive your data in a structured, machine-readable format"],
            ["Objection", "Object to processing based on legitimate interests or for direct marketing"],
            ["Withdraw consent", "Where processing is consent-based, withdraw at any time"],
            ["Complaint", "Lodge a complaint with your supervisory authority"],
          ]}
        />
        <Callout icon={FiSliders} color="green">
          To exercise any of these rights, contact us using the details in the Contact section. We will respond
          within the timeframe required by applicable law (typically 30 days). We may need to verify your identity
          before acting on a request.
        </Callout>
        <SH>Jurisdiction-specific rights</SH>
        <P>
          Users in certain regions have additional rights. California residents (CCPA), UK residents (UK GDPR), EU
          residents (GDPR), Canadian residents (PIPEDA / provincial law), and other jurisdictions each have specific
          rights and mechanisms. Where relevant, we honour these in addition to the general rights above.
        </P>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies, tracking, and monitoring fitness",
    content: (
      <>
        <P>
          We use cookies and similar technologies to operate the service, authenticate sessions, remember preferences,
          and understand how the service is used.
        </P>
        <DataTable
          headers={["Type", "Purpose", "Can you opt out?"]}
          rows={[
            ["Strictly necessary", "Authentication, security, session management", "No — required for service"],
            ["Functional", "Preferences, settings, language", "Limited"],
            ["Analytics", "Aggregate usage understanding", "Yes, via cookie settings"],
            ["Marketing", "Where permitted and consented", "Yes, via cookie settings"],
          ]}
        />
        <P>
          You can manage cookie preferences through your browser settings or our cookie preference centre where
          available. Blocking strictly necessary cookies will affect service functionality.
        </P>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-party links and integrations",
    content: (
      <>
        <P>
          Our service may contain links to third-party websites or integrate with third-party services. This policy
          does not cover third-party data practices. We recommend reviewing the privacy policies of any third-party
          services you use.
        </P>
        <P>
          Where third-party services are used to deliver Zoiko Local features (for example, payment processing or
          infrastructure), those providers are bound by contractual data protection obligations.
        </P>
      </>
    ),
  },
  {
    id: "children",
    title: "Children",
    content: (
      <>
        <P>
          Zoiko Local is a business communications service and is not directed at children. We do not knowingly collect
          personal data from individuals under 18. If you believe we have collected data about a child, contact us and
          we will take appropriate steps to delete it.
        </P>
      </>
    ),
  },
  {
    id: "changes",
    title: "Policy updates",
    content: (
      <>
        <P>
          We may update this policy from time to time. Where a material change affects your rights or how we use your
          data, we will notify you through a durable channel before the change takes effect and, where required by law,
          seek your consent.
        </P>
        <P>
          Previous versions of this policy are available on request. The effective date at the top of this page shows
          when the current version took effect.
        </P>
        <div className="mt-4 flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 dark:border-gray-700 dark:bg-gray-800">
          <span className="rounded-full bg-[#d9603f] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">Current</span>
          <span className="text-[13px] text-gray-600 dark:text-gray-300">Version 1.0 — Effective August 28, 2026</span>
        </div>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact",
    content: (
      <>
        <P>
          For privacy enquiries, rights requests, or concerns about how we handle your data, contact our privacy team:
        </P>
        <div className="mt-4 space-y-3">
          <a
            href="mailto:privacy@zoikolocal.com"
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[13.5px] font-semibold text-[#d9603f] transition hover:border-[#d9603f] dark:border-gray-700 dark:bg-gray-800"
          >
            <FiMail size={16} /> privacy@zoikolocal.com
          </a>
          <a
            href="/contact-us"
            className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3.5 text-[13.5px] font-semibold text-[#1c2b26] transition hover:border-gray-400 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          >
            <FiExternalLink size={16} /> Submit a privacy request
          </a>
        </div>
        <P>
          You also have the right to lodge a complaint with your local data protection supervisory authority.
        </P>
      </>
    ),
  },
];

const tocItems = [
  { id: "overview", label: "Why we collect data" },
  { id: "what-we-collect", label: "What we collect" },
  { id: "how-we-use", label: "How we use it" },
  { id: "communications", label: "Calls, recordings & AI" },
  { id: "sharing", label: "Sharing & transfers" },
  { id: "retention", label: "How long we keep it" },
  { id: "security", label: "Security" },
  { id: "rights", label: "Your rights" },
  { id: "cookies", label: "Cookies & tracking" },
  { id: "third-party", label: "Third-party links" },
  { id: "children", label: "Children" },
  { id: "changes", label: "Policy updates" },
  { id: "contact", label: "Contact" },
];

const glanceCards = [
  { icon: FiDatabase, title: "What we collect", desc: "Account, usage, call records, and AI feature data.", id: "what-we-collect" },
  { icon: FiEye, title: "How we use it", desc: "To run the service, comply with law, and improve features.", id: "how-we-use" },
  { icon: FiUsers, title: "Who we share with", desc: "Carriers, infrastructure providers, and where law requires.", id: "sharing" },
  { icon: FiClock, title: "How long we keep it", desc: "Per regulatory and operational requirements.", id: "retention" },
  { icon: FiSliders, title: "Your rights", desc: "Access, rectification, erasure, objection, and more.", id: "rights" },
  { icon: FiGlobe, title: "International transfers", desc: "With appropriate safeguards where transfers occur.", id: "sharing" },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState("overview");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll spy
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(s.id); },
        { rootMargin: "-20% 0px -70% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f4ee] font-sans text-[#1c2b26] dark:bg-gray-950 dark:text-gray-100">

      {/* ─── HERO ─── */}
      <section className="border-b border-[#e8e2d8] bg-[#f7f4ee] px-5 py-14 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-5xl">
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#d9603f]">Legal</p>
          <h1 className="mt-4 text-[42px] font-extrabold leading-tight tracking-tight text-[#1c2b26] dark:text-white sm:text-[52px]">
            Privacy <span className="font-serif italic font-normal text-[#d9603f]">Policy</span>
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-7 text-gray-600 dark:text-gray-400">
            This policy explains what personal data Zoiko Local collects, why, how long we keep it, who we share it
            with, and what rights you have. It applies to all users of Zoiko Local services.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-[12.5px] text-gray-500 dark:text-gray-400">
            <span className="rounded-full border border-[#d9603f]/30 bg-[#d9603f]/5 px-3 py-1 text-[#d9603f]">
              Effective: August 28, 2026
            </span>
            <span>Version 1.0</span>
          </div>
        </div>
      </section>

      {/* ─── AT A GLANCE ─── */}
      <section className="border-b border-[#e8e2d8] bg-white px-5 py-10 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl">
          <p className="mb-6 text-[13px] font-semibold text-gray-500 dark:text-gray-400">
            Key points — full policy below is authoritative
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {glanceCards.map((c) => {
              const Icon = c.icon;
              return (
                <a
                  key={c.title}
                  href={`#${c.id}`}
                  className="group flex items-start gap-3.5 rounded-xl border border-[#e8e2d8] bg-[#f7f4ee] p-4 transition hover:border-[#d9603f]/40 hover:bg-[#fdf6f2] dark:border-gray-700 dark:bg-gray-800 dark:hover:border-[#d9603f]/40"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#d9603f]/10">
                    <Icon size={15} className="text-[#d9603f]" />
                  </span>
                  <div>
                    <p className="text-[13.5px] font-semibold text-[#1c2b26] dark:text-white">{c.title}</p>
                    <p className="mt-0.5 text-[12.5px] leading-5 text-gray-500 dark:text-gray-400">{c.desc}</p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── BODY ─── */}
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="lg:grid lg:grid-cols-[220px_1fr] lg:gap-12">

          {/* Desktop TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-8">
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-gray-400 dark:text-gray-500">
                On this page
              </p>
              <nav className="space-y-0.5 border-l border-[#e8e2d8] dark:border-gray-700">
                {tocItems.map((item) => (
                  <TocItem key={item.id} id={item.id} label={item.label} active={activeSection === item.id} />
                ))}
              </nav>

              {/* Contact card */}
              <div className="mt-8 rounded-xl bg-[#0f4338] p-5 text-white">
                <p className="text-[13px] font-semibold">Privacy questions?</p>
                <p className="mt-1.5 text-[12px] leading-5 text-white/70">
                  Contact our privacy team for rights requests or concerns.
                </p>
                <a
                  href="mailto:privacy@zoikolocal.com"
                  className="mt-4 flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2.5 text-[12.5px] font-semibold text-white transition hover:bg-white/20"
                >
                  <FiMail size={13} /> Contact privacy team
                </a>
              </div>
            </div>
          </aside>

          {/* Mobile TOC toggle */}
          <div className="mb-8 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="flex w-full items-center justify-between rounded-xl border border-[#e8e2d8] bg-white px-4 py-3.5 text-[13.5px] font-semibold text-[#1c2b26] dark:border-gray-700 dark:bg-gray-800 dark:text-white"
            >
              On this page
              {mobileMenuOpen ? <FiChevronUp size={16} /> : <FiChevronDown size={16} />}
            </button>
            {mobileMenuOpen && (
              <div className="mt-2 rounded-xl border border-[#e8e2d8] bg-white p-4 dark:border-gray-700 dark:bg-gray-800">
                <nav className="grid grid-cols-2 gap-x-4 gap-y-1">
                  {tocItems.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="py-1.5 text-[13px] text-gray-600 hover:text-[#d9603f] dark:text-gray-300"
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            )}
          </div>

          {/* Main content */}
          <div className="space-y-0">
            {sections.map((s, i) => (
              <section
                key={s.id}
                id={s.id}
                className={`scroll-mt-8 ${i > 0 ? "border-t border-[#e8e2d8] pt-10 dark:border-gray-800" : ""} pb-10`}
              >
                <h2 className="mb-4 text-[20px] font-bold text-[#1c2b26] dark:text-white">
                  {s.title}
                </h2>
                {s.content}
              </section>
            ))}

            {/* Related policies */}
            <section className="border-t border-[#e8e2d8] pt-10 dark:border-gray-800">
              <h2 className="mb-4 text-[20px] font-bold text-[#1c2b26] dark:text-white">Related policies</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Terms of Service", desc: "Your agreement with Zoiko Local." , href: "/terms-of-service" },
                  { title: "Acceptable Use Policy", desc: "Permitted and prohibited uses of the service." , href: "/acceptable-use-policy" },
                  { title: "Data Processing Agreement", desc: "For customers processing personal data through the service." , href: "/data-processing-agreement" },
                  { title: "AI Terms", desc: "Specific terms for AI Receptionist and AI-powered features." , href: "/ai-terms" },
                  { title: "Recording & Consent", desc: "Call recording notice and consent requirements." , href: "/recording-consent" },
                  { title: "Law Enforcement Requests", desc: "How we handle legal requests for data." , href: "/law-enforcement" },
                ].map((p) => (
                  <a
                    key={p.title}
                    href={p.href}
                    className="group flex items-start justify-between gap-3 rounded-xl border border-[#e8e2d8] bg-white p-4 transition hover:border-[#d9603f]/40 dark:border-gray-700 dark:bg-gray-800"
                  >
                    <div>
                      <p className="text-[13.5px] font-semibold text-[#1c2b26] group-hover:text-[#d9603f] dark:text-white">{p.title}</p>
                      <p className="mt-0.5 text-[12.5px] text-gray-500 dark:text-gray-400">{p.desc}</p>
                    </div>
                    <FiExternalLink size={14} className="mt-1 shrink-0 text-gray-400 group-hover:text-[#d9603f]" />
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#0f4338] px-5 py-14 text-center">
        <div className="mx-auto max-w-xl">
          <h2 className="text-[24px] font-extrabold text-white">Questions about your data?</h2>
          <p className="mx-auto mt-3 max-w-sm text-[14px] leading-6 text-white/70">
            Contact our privacy team for rights requests, complaints, or any questions about how we handle your personal data.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:privacy@zoikolocal.com"
              className="inline-flex items-center gap-2 rounded-full bg-[#d9603f] px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-[#c25030]"
            >
              <FiMail size={14} /> Contact privacy team
            </a>
            <a
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Submit a privacy request
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}