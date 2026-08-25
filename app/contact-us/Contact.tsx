"use client";

import { useState, type ReactNode } from "react";
import {
  FiArrowRight, FiCheck, FiPlus, FiMinus,
  FiMapPin, FiRefreshCw, FiPhoneCall, FiUsers, FiSettings, FiGitBranch,
  FiClipboard, FiPhone, FiVideo, FiPhoneMissed, FiUserCheck, FiBarChart2,
  FiLifeBuoy, FiBriefcase, FiShield, FiGlobe,
} from "react-icons/fi";

// ─── HELPERS ──────────────────────────────────────────────────────────────────

function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d9603f]">{children}</p>;
}

function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: ReactNode; sub?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-3 text-3xl font-extrabold leading-snug dark:text-white">{title}</h2>
      {sub && <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">{sub}</p>}
    </div>
  );
}

const coralBtn =
  "inline-flex items-center gap-2 rounded-lg bg-[#d9603f] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]";
const outlineBtn =
  "inline-flex items-center gap-2 rounded-lg border border-[#1c2b26]/20 px-6 py-3 text-sm font-semibold text-[#1c2b26] transition-colors hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10";
const outlineBtnDark =
  "inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10";

function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f1ec] text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]">
      {children}
    </span>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const heroChecks = ["Local numbers", "Calling", "Video", "AI Receptionist", "Multi-location", "Migration support"];

const salesPaths: { icon: ReactNode; title: string; desc: string; cta: string }[] = [
  { icon: <FiMapPin />, title: "I need business numbers", desc: "Local presence, new markets, availability, porting.", cta: "Check Number Options" },
  { icon: <FiRefreshCw />, title: "I'm switching from Skype", desc: "Continuity and workflows without disruption.", cta: "Build Migration Plan" },
  { icon: <FiPhoneCall />, title: "I need AI call handling", desc: "Missed calls, after-hours coverage, and routing.", cta: "Plan AI Receptionist" },
  { icon: <FiUsers />, title: "I manage teams or locations", desc: "Multi-location, franchises, multi-office.", cta: "Talk to Sales" },
];

const whyTalk: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <FiSettings />, title: "Choose the right setup", desc: "Number type, country coverage, routing, call handling and plan structure." },
  { icon: <FiGitBranch />, title: "Design a migration path", desc: "Move from Skype, legacy VoIP, personal phones or disconnected branches." },
  { icon: <FiPhoneCall />, title: "Model your call flows", desc: "Sales, support, bookings, accounts, branches, after-hours and AI Receptionist." },
  { icon: <FiClipboard />, title: "Prepare implementation", desc: "Teams, users, numbers, permissions, billing and support." },
];

const selector: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <FiMapPin />, title: "We need local presence", desc: "Local Numbers + Calling — look local, answer professionally, expand reach." },
  { icon: <FiPhone />, title: "Better business calling", desc: "Calling + Routing + Team controls — a business-grade voice workflow." },
  { icon: <FiVideo />, title: "Meetings & remote calls", desc: "Video + Calling — discovery calls, demos and internal meetings, connected." },
  { icon: <FiPhoneMissed />, title: "We miss too many calls", desc: "AI Receptionist + Calling — answer, qualify, route and capture." },
  { icon: <FiRefreshCw />, title: "Replacing Skype", desc: "Numbers + Calling + AI Receptionist — upgrade the operating model." },
  { icon: <FiGitBranch />, title: "Multiple / many branches", desc: "For Business + Pricing + Sales — scale-ready comms with governance." },
];

const migration: { step: string; title: string; desc: string }[] = [
  { step: "1", title: "Assess", desc: "Tell us how you use Skype, VoIP, mobile or legacy calling today." },
  { step: "2", title: "Design", desc: "Map new numbers, users, routing, roles and AI Receptionist workflows." },
  { step: "3", title: "Prepare", desc: "Move from Skype and legacy VoIP, replace and simplify." },
  { step: "4", title: "Launch", desc: "Your team moves to a cleaner workspace with support." },
  { step: "5", title: "Optimize", desc: "Review missed calls, routing, AI capture and plan fit." },
];

const enterprise: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <FiUserCheck />, title: "Account planning", desc: "Implementation support, permissions and call-handling controls." },
  { icon: <FiBarChart2 />, title: "Usage visibility", desc: "See activity and coverage across teams and locations." },
  { icon: <FiLifeBuoy />, title: "Support escalation", desc: "Clear escalation paths for business-critical needs." },
];

const trust: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <FiBriefcase />, title: "Business-grade setup", desc: "Designed for business workflows, team routing and customer contact." },
  { icon: <FiUsers />, title: "Human-first support", desc: "A specialist helps configure before you commit to a complex setup." },
  { icon: <FiShield />, title: "Responsible AI path", desc: "AI disclosures, consent, handoff and review." },
  { icon: <FiGlobe />, title: "Market-dependent", desc: "Numbers, calling, AI and routing vary by country, plan and config." },
];

const helpOptions = ["Local numbers", "Calling", "Video", "AI Receptionist", "Skype migration", "Multi-location", "Pricing", "Partner enquiry"];

const nextSteps = [
  "A Zoiko Local specialist reviews your request.",
  "We come back with the best next step using your preferred contact method.",
  "For high-volume, multi-location or migration requests, we may suggest a short discovery call before recommending plans.",
];

const prepare = [
  "Your current setup (Skype, VoIP, mobile, landline or other).",
  "Countries, cities or local numbers required.",
  "Users, branches, departments and call volume.",
  "Whether you need AI Receptionist, after-hours routing, video or migration.",
  "Preferred launch date and any compliance requirements.",
];

const faqs: { q: string; a: string }[] = [
  { q: "Who should contact sales?", a: "Businesses planning multi-number, multi-location, migration, or higher-volume setups — or anyone who wants a specialist to help scope the right configuration before committing." },
  { q: "Can I still start on my own?", a: "Yes. Self-serve stays open at all times. Sales is there when the setup is bigger, cross-border, or higher-value and you want guidance." },
  { q: "Can sales help me replace Skype?", a: "Yes. We provide a guided migration path from legacy calling to a modern workspace — assess, design, prepare, launch, and optimize." },
  { q: "Can I buy local numbers for multiple countries?", a: "Yes, in supported markets. Availability depends on country, carrier, number type, and local eligibility requirements." },
  { q: "Can sales help with AI Receptionist?", a: "Yes. We can model your call flows and configure AI Receptionist for missed-call capture, after-hours coverage, and routing." },
  { q: "How quickly will Zoiko respond?", a: "We aim to respond via your preferred contact method promptly. Complex or enterprise requests may include a short discovery call." },
  { q: "Is this the right place for support?", a: "This form is for sales and setup scoping. If you have an existing account or order, Help & Support may resolve it faster." },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

export default function Contact() {
  const [open, setOpen] = useState<number | null>(null);
  const [help, setHelp] = useState<string[]>(["Local numbers"]);
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleHelp = (h: string) =>
    setHelp((prev) => (prev.includes(h) ? prev.filter((x) => x !== h) : [...prev, h]));

  const inputCx = "w-full rounded-md border border-black/15 bg-white px-3 py-2.5 text-sm text-[#1c2b26] placeholder:text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-gray-900 dark:text-gray-100";
  const labelCx = "mb-1.5 block text-xs font-semibold text-gray-700 dark:text-gray-300";
  const groupLabel = "text-[11px] font-bold uppercase tracking-wider text-gray-400";

  return (
    <main className="bg-[#f3efe7] font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden px-4 py-14 text-center sm:px-6 lg:px-8">
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-10 h-80 w-80 rounded-full bg-[#d9603f]/15 blur-3xl dark:bg-[#d9603f]/10" />
        <div className="relative mx-auto max-w-3xl">
          <Eyebrow>Sales Consultation for Business Communications</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
            Talk to Zoiko Local <span className="text-[#d9603f]">Sales.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Get expert help choosing local numbers, calling, video, AI Receptionist, migration, and business
            communication workflows for your team.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className={coralBtn}>Request Sales Consultation <FiArrowRight /></button>
            <button className={outlineBtn}>Build My Migration Plan</button>
            <button className={outlineBtn}>Check Number Availability</button>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
            {heroChecks.map((c) => (
              <span key={c} className="flex items-center gap-1.5"><FiCheck className="text-[#d9603f]" /> {c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SALES PATHS ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Sales Paths" title={<>Tell us who you are — <span className="text-[#d9603f]">we'll route you right.</span></>} sub="Self-identify before the form so your request reaches the right specialist." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {salesPaths.map((p) => (
              <div key={p.title} className="flex flex-col rounded-2xl border border-black/5 bg-[#f3efe7] p-6 dark:border-white/10 dark:bg-gray-900">
                <IconTile>{p.icon}</IconTile>
                <h3 className="mt-5 text-base font-bold dark:text-white">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#d9603f] hover:underline">{p.cta} <FiArrowRight /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY TALK TO SALES ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Why Talk to Sales" title={<>Self-serve stays open. <span className="text-[#d9603f]">Sales helps when it's complex.</span></>} sub="Start on your own any time — or get a specialist when the setup is bigger or higher-value." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyTalk.map((w) => (
              <div key={w.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <IconTile>{w.icon}</IconTile>
                <h3 className="mt-5 text-base font-bold dark:text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION SELECTOR ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Solution Selector" title={<>Match your need to <span className="text-[#d9603f]">the right product path.</span></>} sub="A quick map from what you're trying to do to how Zoiko Local fits." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {selector.map((s) => (
              <div key={s.title} className="rounded-2xl border border-black/5 bg-[#f3efe7] p-6 dark:border-white/10 dark:bg-gray-900">
                <IconTile>{s.icon}</IconTile>
                <h3 className="mt-5 text-base font-bold dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MIGRATION SUPPORT ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Migration Support" title={<>Move beyond Skype <span className="text-[#d9603f]">without the confusion.</span></>} sub="A guided path from legacy calling to a modern workspace — five clear stages." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {migration.map((m) => (
              <div key={m.step} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#d9603f] text-sm font-bold text-white">{m.step}</span>
                <h3 className="mt-4 text-base font-bold dark:text-white">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{m.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button className={coralBtn}>Build My Migration Plan <FiArrowRight /></button>
          </div>
        </div>
      </section>

      {/* ─── ENTERPRISE & MULTI-LOCATION ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Enterprise & Multi-location" title={<>For larger teams, branches and <span className="text-[#d9603f]">cross-border operations.</span></>} sub="A dedicated path for franchises, regional offices, distributed workforces and multi-country deployments." />
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {enterprise.map((e) => (
              <div key={e.title} className="rounded-2xl border border-black/5 bg-[#f3efe7] p-6 dark:border-white/10 dark:bg-gray-900">
                <IconTile>{e.icon}</IconTile>
                <h3 className="mt-5 text-base font-bold dark:text-white">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{e.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-xs text-gray-400">Capabilities are subject to plan, country, carrier, number type and configuration.</p>
        </div>
      </section>

      {/* ─── CONTACT FORM ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Tell Us What You Need" title={<>Tell us what your business <span className="text-[#d9603f]">needs.</span></>} sub="We'll use your answers to route your request to the right Zoiko Local specialist." />

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            {/* Form card */}
            <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8 dark:bg-gray-800 dark:ring-white/10">
              {submitted ? (
                <div className="flex flex-col items-center py-12 text-center">
                  <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#e8f1ec] text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]"><FiCheck size={26} /></span>
                  <h3 className="text-lg font-bold dark:text-white">Thanks — request received.</h3>
                  <p className="mt-2 max-w-sm text-sm text-gray-600 dark:text-gray-400">A Zoiko Local specialist will reach out via your preferred contact method.</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {/* Contact details */}
                  <div>
                    <p className={groupLabel}>Contact details</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div><label className={labelCx}>Name</label><input className={inputCx} placeholder="Your name" /></div>
                      <div><label className={labelCx}>Business email</label><input type="email" className={inputCx} placeholder="you@company.com" /></div>
                      <div><label className={labelCx}>Phone number</label><input className={inputCx} placeholder="Optional" /></div>
                      <div><label className={labelCx}>Preferred contact method</label>
                        <select className={inputCx}><option>Email</option><option>Phone</option><option>Either</option></select>
                      </div>
                    </div>
                  </div>

                  {/* Business profile */}
                  <div>
                    <p className={groupLabel}>Business profile</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div><label className={labelCx}>Company name</label><input className={inputCx} placeholder="Acme Trade Co." /></div>
                      <div><label className={labelCx}>Website</label><input className={inputCx} placeholder="acme.com (optional)" /></div>
                      <div><label className={labelCx}>Country</label><input className={inputCx} placeholder="United States" /></div>
                      <div><label className={labelCx}>Industry</label>
                        <select className={inputCx}><option>Select…</option><option>Retail</option><option>Professional services</option><option>Technology</option><option>Other</option></select>
                      </div>
                    </div>
                  </div>

                  {/* Help with */}
                  <div>
                    <p className={groupLabel}>What do you need help with?</p>
                    <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                      {helpOptions.map((h) => {
                        const on = help.includes(h);
                        return (
                          <button
                            key={h}
                            type="button"
                            onClick={() => toggleHelp(h)}
                            className={`flex items-center gap-2 rounded-md border px-3 py-2 text-xs font-medium transition-colors ${on ? "border-[#d9603f] bg-[#d9603f]/10 text-[#d9603f]" : "border-black/15 text-gray-600 hover:border-[#d9603f]/40 dark:border-white/15 dark:text-gray-300"}`}
                          >
                            <span className={`flex h-4 w-4 items-center justify-center rounded border ${on ? "border-[#d9603f] bg-[#d9603f] text-white" : "border-black/25 dark:border-white/30"}`}>{on && <FiCheck size={11} />}</span>
                            {h}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Scale & urgency */}
                  <div>
                    <p className={groupLabel}>Scale & urgency</p>
                    <div className="mt-4 grid gap-4 sm:grid-cols-2">
                      <div><label className={labelCx}>Number of users</label>
                        <select className={inputCx}><option>1–5</option><option>6–20</option><option>21–100</option><option>100+</option></select>
                      </div>
                      <div><label className={labelCx}>Locations</label><input className={inputCx} placeholder="1" /></div>
                      <div><label className={labelCx}>Countries required</label><input className={inputCx} placeholder="e.g. US, UK" /></div>
                      <div><label className={labelCx}>Timeline</label>
                        <select className={inputCx}><option>This month</option><option>This quarter</option><option>Exploring</option></select>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className={labelCx}>Message</label>
                    <textarea rows={4} className={inputCx} placeholder="Tell us about your current setup, goals or anything specific (optional)." />
                  </div>

                  {/* Consent + submit */}
                  <label className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                    <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-gray-300 text-[#d9603f] focus:ring-[#d9603f]" />
                    <span>I agree that Zoiko Local may contact me about this enquiry, per the <a href="#" className="font-semibold text-[#d9603f] hover:underline">Privacy Policy</a>.</span>
                  </label>

                  <button
                    type="button"
                    onClick={() => consent && setSubmitted(true)}
                    disabled={!consent}
                    className={`w-full rounded-lg px-6 py-3 text-sm font-semibold transition-colors ${consent ? "bg-[#d9603f] text-white hover:bg-[#c25030]" : "cursor-not-allowed bg-gray-200 text-gray-400 dark:bg-gray-700 dark:text-gray-500"}`}
                  >
                    Request Sales Consultation
                  </button>
                </div>
              )}
            </div>

            {/* Side cards */}
            <div className="space-y-6">
              <div className="overflow-hidden rounded-2xl bg-[#163a2e] text-white">
                <div className="px-6 py-4 text-sm font-semibold">What happens next</div>
                <ol className="space-y-4 px-6 pb-6">
                  {nextSteps.map((s, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/80">
                      <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-xs font-bold text-white">{i + 1}</span>
                      {s}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <p className="text-sm font-bold dark:text-white">Prepare for the call</p>
                <ul className="mt-4 space-y-3">
                  {prepare.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-gray-600 dark:text-gray-400"><FiCheck className="mt-0.5 flex-shrink-0 text-[#d9603f]" /> {p}</li>
                  ))}
                </ul>
                <p className="mt-4 border-t border-black/5 pt-4 text-xs text-gray-400 dark:border-white/10">
                  Have an existing account or order? <a href="#" className="font-semibold text-[#d9603f] hover:underline">Help & Support</a> may be faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST & COMPLIANCE ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Trust & Compliance" title={<>Serious support, <span className="text-[#d9603f]">honestly scoped.</span></>} sub="Reassurance for regulated and enterprise buyers — without overpromising." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t) => (
              <div key={t.title} className="rounded-2xl border border-black/5 bg-[#f3efe7] p-6 dark:border-white/10 dark:bg-gray-900">
                <IconTile>{t.icon}</IconTile>
                <h3 className="mt-5 text-base font-bold dark:text-white">{t.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <SectionHead eyebrow="FAQ" title={<>Before you reach out, <span className="text-[#d9603f]">answered.</span></>} />
          <div className="mt-12 divide-y divide-black/10 dark:divide-white/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left" aria-expanded={isOpen}>
                    <span className="text-sm font-semibold dark:text-white/90">{f.q}</span>
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-black/15 dark:border-white/20">{isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}</span>
                  </button>
                  {isOpen && <p className="pb-5 text-sm leading-relaxed text-gray-600 dark:text-white/60">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#f3efe7] px-4 pb-24 pt-4 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0f2a21] p-10 text-center text-white sm:p-16">
          <div aria-hidden className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#d9603f]/15 blur-3xl" />
          <div className="relative">
            <Eyebrow>Let's Build It Together</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold sm:text-4xl">Let's design the right Zoiko Local setup for your business.</h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
              Whether you're replacing Skype, expanding into new markets, or building a smarter call-handling workflow,
              Zoiko Local Sales can help you choose the right path.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button className={coralBtn}>Request Sales Consultation <FiArrowRight /></button>
              <button className={outlineBtnDark}>Build My Migration Plan</button>
              <button className={outlineBtnDark}>Check Number Availability</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

