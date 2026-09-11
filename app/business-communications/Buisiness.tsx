"use client";

import { Link } from "lucide-react";
import { useState, type ReactNode } from "react";
import type { IconType } from "react-icons";
import {
  FiCheck, FiCheckCircle, FiCheckSquare,
  FiPhone, FiPhoneOff, FiPhoneForwarded,
  FiVideo, FiMic, FiCpu,
  FiMapPin, FiGlobe, FiGrid,
  FiClock, FiUser, FiUserCheck, FiUsers,
  FiShield, FiLock,
  FiFileText, FiFile,
  FiSend, FiTrendingUp, FiBarChart2,
  FiCalendar, FiTool, FiShoppingCart,
  FiHome, FiBookOpen, FiTruck,
  FiCreditCard, FiInfo, FiExternalLink,
  FiCornerDownRight, FiNavigation,
} from "react-icons/fi";

// ─── ICON WRAPPER ─────────────────────────────────────────────────────────────
// Replaces the old <Img> for all icons. Renders a react-icon in a styled box.
function IconBox({
  icon: Icon,
  size = 20,
  className = "h-10 w-10",
  iconColor = "text-[#0f4338]",
  bg = "bg-[#e8f1ec]",
}: {
  icon: IconType;
  size?: number;
  className?: string;
  iconColor?: string;
  bg?: string;
}) {
  return (
    <span className={`inline-flex shrink-0 items-center justify-center rounded-xl ${bg} ${className}`}>
      <Icon size={size} className={iconColor} />
    </span>
  );
}

// Inline check icon (no box)
function Check({ className = "text-[#0f4338]" }: { className?: string }) {
  return <FiCheck size={16} className={`shrink-0 ${className}`} strokeWidth={3} />;
}

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-[#e9a98f]" : "text-[#d9603f]"}`}>
      {children}
    </p>
  );
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
  "rounded-lg border border-[#1c2b26]/20 px-6 py-3 text-sm font-semibold text-[#1c2b26] transition-colors hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10";
const outlineBtnDark =
  "rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10";
const card = "rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10";

// ─── DATA ────────────────────────────────────────────────────────────────────
const heroChecks = ["Local presence", "Business calling", "Video meetings", "AI call capture & routing"];

const workspaceCards: { label: string; title: string; sub: string; icon: IconType; live?: boolean; pink?: boolean }[] = [
  { label: "Local number", title: "+1 (212) 555-0148", sub: "New York · routing active", live: true, icon: FiMapPin },
  { label: "Incoming call", title: "Daniel Mensah", sub: "Routing → Sales · London", icon: FiPhone },
  { label: "Video meeting", title: "Q3 Client Review", sub: "2:00 PM · link sent", icon: FiVideo },
  { label: "AI capture", title: "3 calls handled", sub: "Summaries ready for review", pink: true, icon: FiMic },
];

const problemCards: { title: string; desc: string; icon: IconType }[] = [
  { title: "Missed enquiries", desc: "Calls that never become customers.", icon: FiPhoneOff },
  { title: "Fragmented tools", desc: "Calls, video and notes scattered everywhere.", icon: FiGrid },
  { title: "After-hours gaps", desc: "Demand arrives when no one's available.", icon: FiClock },
  { title: "No single context", desc: "Nobody sees the full customer story.", icon: FiUser },
];

const products: { name: string; desc: string; tags: string[]; icon: IconType; diff?: boolean; href?: string }[] = [
  { name: "Local Numbers", desc: "Create presence in the markets you serve.", tags: ["Local", "Toll-free", "Porting"], icon: FiMapPin ,href: "/get-a-local-number"},
  { name: "Calling", desc: "Connect customers and teams.", tags: ["Inbound", "Outbound", "Routing"], icon: FiPhone ,href: "/calling"},
  { name: "Video", desc: "Move conversations face-to-face.", tags: ["Meetings", "Links", "Screen share"], icon: FiVideo ,href: "/video"},
  { name: "AI Receptionist", desc: "Capture, qualify and route.", tags: ["Answer", "Qualify", "Handoff"], diff: true, icon: FiMic ,href: "/ai-receptionist"},
];

const localPresence: { title: string; desc: string; icon: IconType }[] = [
  { title: "Improve local trust", desc: "Customers feel they're reaching a local, legitimate business.", icon: FiShield },
  { title: "Numbers by team or location", desc: "Separate lines for branches, campaigns and departments.", icon: FiGrid },
  { title: "Cross-border presence", desc: "Look local in the markets you're building demand in.", icon: FiGlobe },
];

const callingChecks = ["Inbound & outbound calls", "Team routing to the right person", "Voicemail & capture", "Call history where available"];

const callFlow: { title: string; sub: string; icon: IconType; ok?: boolean }[] = [
  { title: "Customer calls +1 (212)", sub: "Inbound · New York", icon: FiPhone },
  { title: "Routing rule", sub: "Sales → London team", icon: FiCornerDownRight },
  { title: "Answered by Rosa", sub: "Context: returning client", icon: FiUser },
  { title: "Follow-up captured", sub: "Summary logged", ok: true, icon: FiCheckCircle },
];

const videoChecks = ["Reduce meeting friction", "A more human customer experience", "Support remote & multi-location teams"];

const aiChecks = ["Answer when teams cannot", "Qualify before handoff", "Capture messages, tasks & callback details"];
const aiSummary = [
  { k: "Intent", v: "New consulting enquiry" },
  { k: "Urgency", v: "High — time sensitive", hot: true },
  { k: "Route to", v: "Client Team · London" },
  { k: "Callback", v: "Today, before 4:00 PM" },
];

const outcomes: { title: string; desc: string; icon: IconType }[] = [
  { title: "Capture more enquiries", desc: "Fewer calls slip through the cracks.", icon: FiSend },
  { title: "Respond faster", desc: "Route to the right person, sooner.", icon: FiClock },
  { title: "Improve local trust", desc: "Look reachable and professional.", icon: FiShield },
  { title: "Reduce staff pressure", desc: "AI handles overflow and after-hours.", icon: FiUser },
  { title: "Standardize workflows", desc: "Consistent call handling across teams.", icon: FiCheckSquare },
  { title: "Support growth", desc: "Scale communications without losing the human touch.", icon: FiBarChart2 },
];

const useCases: { title: string; desc: string; icon: IconType }[] = [
  { title: "Professional services", desc: "Capture and route client enquiries.", icon: FiUser },
  { title: "Healthcare & wellness", desc: "Appointment intake, subject to controls.", icon: FiCalendar },
  { title: "Trades & field services", desc: "Capture job details and urgency.", icon: FiTool },
  { title: "E-commerce & retail", desc: "Product, order and store support.", icon: FiShoppingCart },
  { title: "Real estate & property", desc: "Buyer, tenant and vendor flows.", icon: FiHome },
  { title: "Education & training", desc: "Enrolment and learner enquiries.", icon: FiBookOpen },
  { title: "Logistics & field ops", desc: "Dispatch and coordination.", icon: FiTruck },
  { title: "Multi-location franchises", desc: "Branch numbers, central control.", icon: FiGrid },
];

const branches = [
  { name: "New York", sub: "+1 (212) · Sales hours", status: "Active", flag: "🇺🇸" },
  { name: "London", sub: "+44 20 · After-hours → AI", status: "Active", flag: "🇬🇧" },
  { name: "Toronto", sub: "+1 · Branch greeting", status: "Active", flag: "🇨🇦" },
  { name: "Lagos", sub: "+234 · Routing rule set", status: "Verify", flag: "🇳🇬" },
];
const multiChecks = ["Central control with local presence", "Consistent experience across locations", "Configurable by branch or market"];

const controls: { title: string; desc: string; icon: IconType }[] = [
  { title: "Roles & permissions", desc: "Define who manages numbers, greetings and routing.", icon: FiUserCheck },
  { title: "Routing control", desc: "Configure how calls move through the business.", icon: FiCornerDownRight },
  { title: "AI response boundaries", desc: "Scripts, hours, escalation and human handoff.", icon: FiMic },
  { title: "Consent & disclosure", desc: "Consent and review workflows where available.", icon: FiShield },
  { title: "Data retention", desc: "Retention settings aligned to your needs and jurisdiction.", icon: FiClock },
  { title: "Review workflows", desc: "Audit-ready logs where available.", icon: FiFileText },
];

const comparison = [
  ["Local presence", "Basic numbers", "Local numbers by market & team"],
  ["Inbound handling", "Manual", "Routing to the right person"],
  ["Outbound calling", "Personal-style", "Business-grade from local numbers"],
  ["Video", "Standalone", "Connected to call & customer context"],
  ["Missed & after-hours", "Lost", "AI capture & callback"],
  ["Follow-up", "Manual", "Summaries & tasks (where available)"],
  ["Admin controls", "Limited", "Roles, routing & review"],
];

const plans = [
  { title: "Business Starter", desc: "Simple local presence and essential calling.", cta: "View Pricing", popular: false, href: "/plans-and-pricing" },
  { title: "Business Growth", desc: "Teams that need routing, video and collaboration.", cta: "Compare Plans", popular: true, href: "/plans-and-pricing" },
  { title: "Business Advanced", desc: "AI Receptionist, multi-location and higher-control workflows.", cta: "Talk to Sales", popular: false, href: "/contact-sales" },
];

const proof: { title: string; desc: string; icon: IconType }[] = [
  { title: "Telecom-minded architecture", desc: "Designed around availability and routing realities.", icon: FiCreditCard },
  { title: "Business-grade controls", desc: "Roles, routing, AI guardrails and review.", icon: FiShield },
  { title: "Clear availability language", desc: 'Honest "where available" rather than overclaims.', icon: FiInfo },
  { title: "Support pathways", desc: "Human help for setup and configuration.", icon: FiUser },
  { title: "Migration support", desc: "A practical path from legacy workflows.", icon: FiExternalLink },
  { title: "Roadmap discipline", desc: "Thoughtful, staged capability rollout.", icon: FiTrendingUp },
];

const faqs = [
  { q: "What is Zoiko Local for Business?", a: "A single workspace that brings together local numbers, business calling, video and an AI Receptionist — so calls, meetings and follow-up live in one managed business layer instead of scattered tools." },
  { q: "Can I use existing numbers?", a: "In many markets you can port an existing number into Zoiko Local. Portability and timelines depend on your current provider, country and number type — we'll confirm eligibility before you switch." },
  { q: "Can I add AI Receptionist later?", a: "Yes. Start with a number and calling, then activate AI Receptionist whenever answering becomes business-critical. Each capability can stand alone or work together." },
  { q: "Can different teams use different numbers?", a: "Yes — assign separate lines to branches, campaigns and departments, each with its own routing rules and business hours, while keeping central control of the workspace." },
  { q: "Does this replace Skype?", a: "It's built for teams moving beyond standalone calling and legacy number workflows into a managed business layer. Zoiko Local is not affiliated with or endorsed by Microsoft." },
  { q: "Is it suitable for regulated businesses?", a: "It supports roles, routing, consent and review workflows, and configurable data retention. These are controls, not a compliance guarantee — requirements vary by jurisdiction and should be confirmed for your use case." },
  { q: "Can I route by location?", a: "Yes. Configure routing rules, business hours and AI intake per branch or market, so each location keeps a local presence under one central workflow." },
  { q: "Can customers speak to a person?", a: "Always. The AI Receptionist qualifies and captures, then hands off to your team based on rules you set — escalation to a human is built into the workflow." },
  { q: "What plans are available?", a: "Business Starter, Business Growth and Business Advanced, plus Enterprise & custom for multi-location, regulated workflows and higher usage. Pricing is set per market in the catalog." },
  { q: "How do I get started?", a: "Start free with a local number and calling, then add video and AI Receptionist as you grow. Talk to Sales if you'd like help mapping the setup to your team." },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
function Business() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="bg-[#f3efe7] font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">
      {/* ─── HERO ─── */}
      <section className="px-4 pb-12 pt-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Eyebrow>Business communications, built to work together</Eyebrow>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
            One communication layer for every business call, meeting and{" "}
            <span className="text-[#d9603f]">customer moment.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Zoiko Local brings local numbers, business calling, video and AI Receptionist into one workspace — so your
            business can answer faster, look local, route smarter and never let valuable enquiries fall through the cracks.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/start-free" >
              <button className={coralBtn}>Start Free →</button>
            </a>
            <a href="/contact-sales" >
              <button className={outlineBtn}>Talk to Sales</button>
            </a>
            <a href="/switch-from-skype" >
              <button className={outlineBtn}>Switch from Skype</button>
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-600 dark:text-gray-400">
            {heroChecks.map((c) => (
              <span key={c} className="flex items-center gap-2">
                <Check /> {c}
              </span>
            ))}
          </div>
        </div>

        {/* Workspace card */}
        <div className="mx-auto mt-12 max-w-3xl overflow-hidden rounded-2xl bg-white text-left shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
          <div className="flex items-center gap-2 bg-[#163a2e] px-5 py-4 text-sm font-semibold text-white">
            <span className="flex gap-1.5">
              <i className="h-2.5 w-2.5 rounded-full bg-[#d9603f]" />
              <i className="h-2.5 w-2.5 rounded-full bg-[#e8a03b]" />
              <i className="h-2.5 w-2.5 rounded-full bg-[#34d39e]" />
            </span>
            Acme Trade Co · Business Workspace
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-2">
            {workspaceCards.map((w) => {
              const Icon = w.icon;
              return (
                <div
                  key={w.label}
                  className={`rounded-xl border p-4 ${
                    w.pink
                      ? "border-[#f1d7cd] bg-[#faf0eb] dark:border-[#d9603f]/30 dark:bg-[#d9603f]/10"
                      : "border-gray-100 bg-[#fbfaf6] dark:border-gray-700 dark:bg-gray-900/40"
                  }`}
                >
                  <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                    <Icon size={14} className="text-[#0f4338]" />
                    {w.label}
                  </div>
                  <p className="text-base font-bold dark:text-white">{w.title}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{w.sub}</p>
                  {w.live && (
                    <span className="mt-2 inline-block rounded-full bg-[#e8f1ec] px-2.5 py-0.5 text-xs font-semibold text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]">
                      Live
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── THE REAL COST ─── */}
      <section className="px-4 pb-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#0f2a21] p-10 text-center text-white sm:p-14">
          <Eyebrow>The real cost</Eyebrow>
          <h2 className="mx-auto mt-3 max-w-xl text-3xl font-extrabold leading-snug">
            The problem isn&rsquo;t just missed calls. <span className="text-[#d9603f]">It&rsquo;s missed momentum.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-white/70">
            Missed calls, scattered tools, manual callbacks and weak follow-up create revenue leakage and erode trust.
          </p>
          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2 lg:grid-cols-4">
            {problemCards.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <Icon size={18} className="text-[#d9603f]" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-white">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-white/60">{p.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="mt-9 text-base font-bold">&ldquo;The business that answers clearly often wins first.&rdquo;</p>
        </div>
      </section>

      {/* ─── THE OPERATING LAYER ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="The operating layer"
            title={<>Use one product or build the <span className="text-[#d9603f]">full business stack.</span></>}
            sub="Each capability can stand alone. Together, they help teams answer, meet, route and follow up with more structure."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.name} className="relative flex flex-col rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
                  {p.diff && (
                    <span className="absolute right-4 top-4 rounded-full bg-[#d9603f] px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white">
                      Differentiator
                    </span>
                  )}
                  <IconBox icon={Icon} className="h-11 w-11" />
                  <h3 className="mt-4 text-base font-bold dark:text-white">{p.name}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full bg-[#e8f1ec] px-3 py-1 text-xs font-semibold text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]">
                        {t}
                      </span>
                    ))}
                  </div>
                  <a href={p.href} className="mt-5 inline-block text-sm font-semibold text-[#d9603f] hover:underline">Explore →</a>
                </div>
              );
            })}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
           <a href="/plans-and-pricing"> <button className={outlineBtn}>Compare Plans</button></a>
           <a href="/contact-sales"> <button className={outlineBtn}>Talk to Sales</button></a>
          </div>
        </div>
      </section>

      {/* ─── LOCAL PRESENCE ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Local presence"
            title={<>Give customers a local way <span className="text-[#d9603f]">to reach your business.</span></>}
            sub="Support regions, branches, campaigns and departments without losing control of the central workflow."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {localPresence.map((l) => {
              const Icon = l.icon;
              return (
                <div key={l.title} className={`${card} text-center`}>
                  <IconBox icon={Icon} className="mx-auto h-11 w-11" />
                  <h3 className="mt-4 text-base font-bold dark:text-white">{l.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{l.desc}</p>
                </div>
              );
            })}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-gray-500 dark:text-gray-400">
            Number availability and eligibility vary by country and number type. Emergency-service and regulated-number
            capabilities are not implied without confirmation.
          </p>
          <div className="mt-8 flex justify-center">
           <a href="/get-a-local-number"> <button className={coralBtn}>Explore Local Numbers</button></a>
          </div>
        </div>
      </section>

      {/* ─── BUSINESS CALLING ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Business calling</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-snug dark:text-white">
              Make and receive business calls with structure, context and <span className="text-[#d9603f]">control.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Handle customer conversations from local numbers, route calls to the right people, and keep business
              communication separate from personal phones.
            </p>
            <ul className="mt-6 space-y-3">
              {callingChecks.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm font-medium dark:text-gray-100">
                  <Check /> {c}
                </li>
              ))}
            </ul>
           <a href="/calling"> <button className={`${coralBtn} mt-7`}>Explore Calling</button></a>
          </div>
          <div className={card}>
            <div className="mb-4 flex items-center gap-2 text-sm font-bold dark:text-white">
              <FiPhoneForwarded size={18} className="text-[#0f4338]" /> Call flow
            </div>
            <div className="space-y-2.5">
              {callFlow.map((r) => {
                const Icon = r.icon;
                return (
                  <div
                    key={r.title}
                    className={`flex items-center gap-3 rounded-xl border px-3.5 py-3 ${
                      r.ok ? "border-[#cfe2db] bg-[#e8f1ec] dark:border-[#34d39e]/30 dark:bg-[#34d39e]/10" : "border-gray-100 dark:border-gray-700"
                    }`}
                  >
                    <IconBox icon={Icon} className="h-7 w-7" size={14} />
                    <div>
                      <p className="text-sm font-semibold dark:text-white">{r.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{r.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BUSINESS VIDEO ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className={`order-2 lg:order-1 ${card}`}>
            <div className="mb-4 flex items-center gap-2 text-sm font-bold dark:text-white">
              <FiVideo size={18} className="text-[#0f4338]" /> Client meeting
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="h-28 rounded-xl bg-gradient-to-br from-[#0e6157] to-[#0b4b43]" />
              <div className="h-28 rounded-xl bg-gradient-to-br from-[#1b4e70] to-[#12324c]" />
            </div>
            <div className="mt-3 flex items-center gap-3 rounded-xl border border-gray-100 px-3.5 py-3 dark:border-gray-700">
              <IconBox icon={FiFileText} className="h-7 w-7" size={14} />
              <div>
                <p className="text-sm font-semibold dark:text-white">Agenda · Q3 review</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Customer context attached</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Business video</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-snug dark:text-white">
              Move from call to meeting without leaving the <span className="text-[#d9603f]">workspace.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Use video for consultations, sales discussions, support reviews, interviews and customer meetings —
              connected to the same business journey.
            </p>
            <ul className="mt-6 space-y-3">
              {videoChecks.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm font-medium dark:text-gray-100">
                  <Check /> {c}
                </li>
              ))}
            </ul>
            <a href="/video">
              <button className={`${coralBtn} mt-7`}>Explore Video</button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── AI RECEPTIONIST ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>AI Receptionist · The differentiator</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-snug dark:text-white">
              Give every business number a <span className="text-[#d9603f]">smarter front desk.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              AI Receptionist can answer, qualify, route and capture calls when your team is busy, offline or after
              hours — with rules, scripts and handoff controls set by your business.
            </p>
            <ul className="mt-6 space-y-3">
              {aiChecks.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm font-medium dark:text-gray-100">
                  <Check /> {c}
                </li>
              ))}
            </ul>
           <a href="/ai-receptionist"><button className={`${coralBtn} mt-7`}>Explore AI Receptionist</button></a>
          </div>
          <div className={card}>
            <div className="mb-4 flex items-center gap-2 text-sm font-bold dark:text-white">
              <FiCpu size={18} className="text-[#0f4338]" /> Live AI call · handled
            </div>
            <div className="rounded-xl border border-gray-100 bg-[#fbfaf6] p-4 dark:border-gray-700 dark:bg-gray-900/40">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-wider text-[#163a2e] dark:text-[#34d39e]">
                AI Summary · Draft for review
              </p>
              {aiSummary.map((line) => (
                <div key={line.k} className="flex justify-between border-b border-dashed border-gray-200 py-1.5 text-sm last:border-0 dark:border-gray-700">
                  <span className="text-gray-500 dark:text-gray-400">{line.k}</span>
                  <span className={`font-semibold ${line.hot ? "text-[#d9603f]" : "dark:text-white"}`}>{line.v}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <button className={`${coralBtn} w-full justify-center`}>Approve &amp; route</button>
              <button className={`${outlineBtn} w-full text-center`}>Human handoff</button>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              AI summaries are draft and reviewable. Subject to plan, configuration, consent and applicable law.
            </p>
          </div>
        </div>
      </section>

      {/* ─── BUSINESS OUTCOMES ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Business outcomes"
            title={<>More responsiveness. Less leakage. <span className="text-[#d9603f]">Better control.</span></>}
            sub="What changes when communications are managed — in board-readable terms."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {outcomes.map((o) => (
              <div key={o.title} className={`${card} text-center`}>
                <IconBox icon={o.icon} className="mx-auto h-11 w-11" />
                <h3 className="mt-4 text-base font-bold dark:text-white">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{o.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── INDUSTRY USE CASES ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Industry use cases"
            title={<>Built for the way <span className="text-[#d9603f]">real businesses communicate.</span></>}
            sub="Recognize your scenario and the Zoiko Local use case that fits."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-2xl bg-white p-6 text-center ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
                <IconBox icon={u.icon} className="mx-auto h-11 w-11" />
                <h3 className="mt-4 text-sm font-bold dark:text-white">{u.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{u.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
           <a href="usecase"><button className={outlineBtn}>Find My Business Use Case</button></a>
          </div>
        </div>
      </section>

      {/* ─── MULTI-LOCATION ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className={`order-2 lg:order-1 ${card}`}>
            <div className="mb-4 flex items-center gap-2 text-sm font-bold dark:text-white">
              <FiGlobe size={18} className="text-[#0f4338]" /> Branch routing
            </div>
            <div className="space-y-2.5">
              {branches.map((b) => (
                <div key={b.name} className="flex items-center justify-between rounded-xl border border-gray-100 px-3.5 py-3 dark:border-gray-700">
                  <span className="flex items-center gap-3">
                    <span className="text-xl leading-none">{b.flag}</span>
                    <span>
                      <span className="block text-sm font-semibold dark:text-white">{b.name}</span>
                      <span className="block text-xs text-gray-500 dark:text-gray-400">{b.sub}</span>
                    </span>
                  </span>
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      b.status === "Active"
                        ? "bg-[#e8f1ec] text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]"
                        : "bg-[#f6ebd3] text-[#b6822a] dark:bg-[#b6822a]/15 dark:text-[#e3b765]"
                    }`}
                  >
                    {b.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow>Multi-location &amp; global teams</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-snug dark:text-white">
              Give every branch a local presence without losing <span className="text-[#d9603f]">central control.</span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Support multiple teams, locations and markets with local numbers, routing rules, business hours, AI intake
              and customer handoff paths — configured by location.
            </p>
            <ul className="mt-6 space-y-3">
              {multiChecks.map((c) => (
                <li key={c} className="flex items-center gap-3 text-sm font-medium dark:text-gray-100">
                  <Check /> {c}
                </li>
              ))}
            </ul>
            <button className={`${coralBtn} mt-7`}>Plan Multi-Location Setup</button>
            <p className="mt-4 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
              Locations shown are illustrative. Availability varies by country and number type.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTROLS, COMPLIANCE & ADMIN ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Controls, compliance & admin"
            title={<>Your business sets the rules. <span className="text-[#d9603f]">Zoiko Local follows the workflow.</span></>}
            sub="Business-grade governance by design — supports controls, not a compliance guarantee."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-6 text-center ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
                <IconBox icon={c.icon} className="mx-auto h-11 w-11" />
                <h3 className="mt-4 text-base font-bold dark:text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <a href="/contact-support">
              <button className={outlineBtn}>Review Business Controls</button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── SKYPE REPLACEMENT ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHead
            eyebrow="Skype replacement for business"
            title={<>Skype helped businesses communicate. Zoiko Local helps businesses <span className="text-[#d9603f]">operate.</span></>}
            sub="Move beyond standalone calling and legacy number workflows into a managed business layer."
          />
          <div className="mt-12 overflow-x-auto rounded-2xl bg-white ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="bg-[#163a2e] text-white">
                  <th className="px-5 py-4 text-sm font-bold">Workflow</th>
                  <th className="px-5 py-4 text-sm font-bold">Legacy Skype-style</th>
                  <th className="px-5 py-4 text-sm font-bold">Zoiko Local for Business</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row[0]} className={i % 2 ? "bg-[#fbfaf6] dark:bg-gray-900/40" : ""}>
                    <td className="border-t border-gray-100 px-5 py-4 text-sm font-semibold dark:border-gray-700 dark:text-white">{row[0]}</td>
                    <td className="border-t border-gray-100 px-5 py-4 text-sm text-gray-400 dark:border-gray-700">{row[1]}</td>
                    <td className="border-t border-gray-100 px-5 py-4 text-sm font-medium text-gray-700 dark:border-gray-700 dark:text-gray-200">{row[2]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-relaxed text-gray-500 dark:text-gray-400">
            Number migration is subject to portability and availability. Zoiko Local is not affiliated with or endorsed
            by Microsoft.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a href="/switch-from-skype">
              <button className={coralBtn}>Switch from Skype</button>
            </a>
            <a href="/contact-support">
              <button className={outlineBtn}>Talk to Migration Specialist</button>
            </a>
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Business plans & packaging"
            title={<>Choose the setup that <span className="text-[#d9603f]">fits your team.</span></>}
            sub="Start with a local number and calling, add video where conversations need a face, and activate AI Receptionist when every missed call matters. Pricing is set per market in the catalog."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.title}
                className={`relative flex flex-col rounded-2xl bg-white p-8 dark:bg-gray-900 ${
                  p.popular ? "ring-2 ring-[#d9603f]" : "ring-1 ring-black/5 dark:ring-white/10"
                }`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#d9603f] px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="text-xl font-bold dark:text-white">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.desc}</p>
               <a href={p.href}><button className={`mt-7 w-full text-center ${p.popular ? coralBtn + " justify-center" : outlineBtn}`}>{p.cta}</button></a>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
            Need more? <span className="font-semibold text-[#d9603f]">Enterprise &amp; custom</span> — multi-location,
            regulated workflows, higher usage and custom routing.
          </p>
        </div>
      </section>

      {/* ─── PROOF, TRUST & READINESS ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Proof, trust & readiness"
            title={<>Built with the discipline businesses <span className="text-[#d9603f]">expect.</span></>}
            sub="Operational maturity signals — not invented logos or unverifiable claims."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {proof.map((p) => (
              <div key={p.title} className={`${card} text-center`}>
                <IconBox icon={p.icon} className="mx-auto h-11 w-11" />
                <h3 className="mt-4 text-base font-bold dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl bg-[#e8f1ec] p-8 text-center dark:bg-[#34d39e]/10">
            <p className="text-lg font-bold italic dark:text-white">
              &ldquo;Every business number should become a managed customer pathway.&rdquo;
            </p>
            <p className="mt-3 text-sm text-[#163a2e] dark:text-[#34d39e]">— Zoiko Local management</p>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-3xl">
          <SectionHead eyebrow="Business FAQ" title={<>Business questions, <span className="text-[#d9603f]">answered.</span></>} />
          <div className="mt-10 divide-y divide-gray-100 dark:divide-gray-700">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">{f.q}</span>
                    <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-gray-300 text-lg leading-none text-gray-500 dark:border-gray-600 dark:text-gray-400">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>
                  {isOpen && <p className="pb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#0f2a21] p-10 text-center text-white sm:p-16">
          <Eyebrow light>Start simple. Scale into the full stack.</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-xl text-3xl font-extrabold sm:text-4xl">
            Build a business phone presence that does more than ring.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Start with local numbers, connect calling and video, add AI Receptionist when every missed call matters, and
            give your team one smarter way to manage customer conversations.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/start-free"><button className={coralBtn}>Start Free</button></a>
            <a href="/contact-sales"><button className={outlineBtnDark}>Talk to Sales</button></a>
            <a href="/switch-from-skype"><button className={outlineBtnDark}>Switch from Skype</button></a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Business;
// export { Business };