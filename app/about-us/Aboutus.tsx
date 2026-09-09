"use client";

import type { ReactNode } from "react";

// ─── SVG ICONS ──────────────────────────────────────────────────────────────

function PhoneIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function ForwardIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M13 17l5-5-5-5M6 17l5-5-5-5" />
    </svg>
  );
}

function VoicemailIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="5.5" cy="11.5" r="4.5" />
      <circle cx="18.5" cy="11.5" r="4.5" />
      <path d="M5.5 16h13" />
    </svg>
  );
}

function BotIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4M8 16h0M16 16h0" />
    </svg>
  );
}

function VideoIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="13" height="12" rx="2" />
      <path d="M15 10l5-3v10l-5-3" />
    </svg>
  );
}

function SlidersIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" />
      <line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" />
      <line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" />
      <line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" />
    </svg>
  );
}

function ShieldIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

function GlobeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
    </svg>
  );
}

function KeyIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
    </svg>
  );
}

function CheckCircleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
      <path d="M22 4L12 14.01l-3-3" />
    </svg>
  );
}

function EyeIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UndoIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7v6h6" />
      <path d="M21 17a9 9 0 00-9-9 9 9 0 00-6 2.3L3 13" />
    </svg>
  );
}

function ClipboardIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <rect x="8" y="2" width="8" height="4" rx="1" />
      <path d="M9 14l2 2 4-4" />
    </svg>
  );
}

function FingerprintIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 018 4" />
      <path d="M5 19.5C5.5 18 6 15 6 12c0-3.5 2.5-6 6-6a6 6 0 016 6c0 1-.3 3-1 5" />
      <path d="M9 12c0-1.7 1.3-3 3-3s3 1.3 3 3v1c0 2-.5 4.5-2.5 7" />
      <path d="M12 12v4c0 2.5-1 5-3 7" />
    </svg>
  );
}

function FileTextIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );
}

function AlertIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

function DatabaseIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function TargetIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function LayersIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  );
}

function TrendingUpIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" />
    </svg>
  );
}

function SearchIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function CheckSmallIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

// Business card icons
function BriefcaseIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    </svg>
  );
}

function UserIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function UsersIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
    </svg>
  );
}

function MapPinIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function WifiIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12.55a11 11 0 0114.08 0" /><path d="M1.42 9a16 16 0 0121.16 0" />
      <path d="M8.53 16.11a6 6 0 016.95 0" /><circle cx="12" cy="20" r="1" />
    </svg>
  );
}

function HeartIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </svg>
  );
}

function LockIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
}

// ─── ICON BADGE WRAPPER ──────────────────────────────────────────────────────

function IconBadge({ icon, light = false }: { icon: ReactNode; light?: boolean }) {
  return (
    <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${
      light
        ? "bg-white/10 text-white"
        : "bg-[#d9603f]/10 text-[#d9603f] dark:bg-[#d9603f]/20"
    }`}>
      {icon}
    </div>
  );
}

// ─── SMALL HELPERS ──────────────────────────────────────────────────────────

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-white/60" : "text-[#d9603f]"}`}>
      {children}
    </p>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const trustPoints = [
  { title: "Trust", desc: "Verified local presence customers recognise and answer with confidence.", icon: <ShieldIcon className="h-5 w-5" /> },
  { title: "Reliability", desc: "Calls, forwarding and messaging that work the same way every time.", icon: <CheckCircleIcon className="h-5 w-5" /> },
  { title: "Cross-border identity", desc: "One identity that stays consistent wherever you operate.", icon: <GlobeIcon className="h-5 w-5" /> },
];

const features = [
  { title: "Local numbers", desc: "Get a real local number in the markets that matter to you.", icon: <PhoneIcon /> },
  { title: "Calling & forwarding", desc: "Route calls to any device, anywhere, with smart rules.", icon: <ForwardIcon /> },
  { title: "Voicemail intelligence", desc: "Transcribed, summarised and searchable voicemail.", icon: <VoicemailIcon /> },
  { title: "AI receptionist", desc: "Greet, qualify and route callers automatically.", icon: <BotIcon /> },
  { title: "Video calling", desc: "Move from a call to face-to-face in a single tap.", icon: <VideoIcon /> },
  { title: "Business controls", desc: "Manage lines, teams and permissions from one place.", icon: <SlidersIcon /> },
];

const pillars = [
  { title: "Access", desc: "Open local presence in new markets in minutes, not weeks.", icon: <KeyIcon /> },
  { title: "Trust", desc: "Verified, recognisable numbers people actually pick up.", icon: <ShieldIcon /> },
  { title: "Control", desc: "Full visibility and governance across every line.", icon: <SlidersIcon /> },
];

const businessCards = [
  { title: "Introduce a local line", desc: "Add a local number without changing carriers.", icon: <PhoneIcon className="h-5 w-5" /> },
  { title: "Separate work & life", desc: "Keep business calls off your personal phone.", icon: <UserIcon className="h-5 w-5" /> },
  { title: "Consistent professionalism", desc: "One number your whole team can answer.", icon: <UsersIcon className="h-5 w-5" /> },
  { title: "One business, many regions", desc: "Present locally in every market you serve.", icon: <MapPinIcon className="h-5 w-5" /> },
  { title: "Remote-ready & flexible", desc: "Work from anywhere, sound like you're next door.", icon: <WifiIcon className="h-5 w-5" /> },
  { title: "Healthcare & care teams", desc: "Reliable, private lines for sensitive work.", icon: <HeartIcon className="h-5 w-5" /> },
  { title: "Personal & business split", desc: "Clear boundaries between the two.", icon: <LockIcon className="h-5 w-5" /> },
  { title: "Cross-border operations", desc: "Compliant local numbers across borders.", icon: <GlobeIcon className="h-5 w-5" /> },
];

const countries = [
  { flag: "🇺🇸", name: "United States", code: "+1" },
  { flag: "🇬🇧", name: "United Kingdom", code: "+44" },
  { flag: "🇨🇦", name: "Canada", code: "+1" },
  { flag: "🇳🇬", name: "Nigeria", code: "+234" },
  { flag: "🇿🇦", name: "South Africa", code: "+27" },
  { flag: "🇬🇭", name: "Ghana", code: "+233" },
  { flag: "🇰🇪", name: "Kenya", code: "+254" },
  { flag: "🇪🇸", name: "Spain", code: "+34" },
  { flag: "🇦🇺", name: "Australia", code: "+61" },
  { flag: "🇦🇪", name: "United Arab Emirates", code: "+971" },
];

const steps = [
  { n: "01", title: "Choose a market", desc: "Pick the country and region you want a local presence in." },
  { n: "02", title: "Claim a number", desc: "Reserve a verified local number in seconds." },
  { n: "03", title: "Connect your routing", desc: "Forward to any device, team or workflow." },
  { n: "04", title: "Configure for AI", desc: "Add receptionist, voicemail and call rules." },
  { n: "05", title: "Govern & scale", desc: "Monitor, audit and add lines as you grow." },
];

const comparison = [
  { feature: "Local number", basic: "Single line", local: "Multi-market, verified" },
  { feature: "Call routing", basic: "Manual", local: "Smart, rule-based" },
  { feature: "Voicemail", basic: "Audio only", local: "Transcribed & summarised" },
  { feature: "AI receptionist", basic: "—", local: "Included" },
  { feature: "Governance", basic: "None", local: "Full audit trail" },
];

const aiGovern = [
  { title: "Content review", desc: "AI suggestions are reviewed against clear, human-set rules.", icon: <EyeIcon /> },
  { title: "Reversible", desc: "Every automated action can be undone or overridden.", icon: <UndoIcon /> },
  { title: "Auditable", desc: "A complete record of what happened, when and why.", icon: <ClipboardIcon /> },
];

const scaleItems = [
  { title: "Identity verification", desc: "Know who is on every line before it goes live.", icon: <FingerprintIcon /> },
  { title: "Compliance by region", desc: "Rules applied automatically per jurisdiction.", icon: <FileTextIcon /> },
  { title: "Fraud controls", desc: "Continuous monitoring across all numbers.", icon: <AlertIcon /> },
  { title: "Data residency", desc: "Records stored in line with local requirements.", icon: <DatabaseIcon /> },
];

const values = [
  { title: "Clarity", desc: "Plain language, transparent pricing and no hidden behaviour." },
  { title: "Accountability", desc: "Every action is logged, owned and reversible." },
  { title: "Usefulness", desc: "Features that solve real problems for real people." },
];

const zoikonexPoints = [
  "Shared infrastructure built for scale and reliability.",
  "Group-grade security, identity and fraud controls.",
  "A single platform powering local presence everywhere.",
  "Continuous investment in compliance and trust.",
];

const focusCards = [
  { title: "Focused product", desc: "One product, done well — local phone presence.", icon: <TargetIcon /> },
  { title: "Group infrastructure", desc: "Backed by ZoikoNex's platform and security.", icon: <LayersIcon /> },
  { title: "Built to scale", desc: "Designed for many markets from day one.", icon: <TrendingUpIcon /> },
];

const ctaPills = ["Local numbers", "AI receptionist", "Smart routing", "Cross-border ready"];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function Aboutus() {
  return (
    <main className="bg-[#f3efe7] font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">
      {/* ─── HERO ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
              About <span className="text-[#d9603f]">Zoiko Local</span>
            </h1>
            <p className="mt-5 max-w-md text-lg font-semibold text-[#1c2b26] dark:text-gray-100">
              We help people and businesses become local where opportunity, customers, family, and work happen.
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Zoiko Local provides verified local phone numbers and the communication infrastructure to use them —
              so you can show up locally in every market, supported by calling, forwarding, voicemail intelligence,
              compliance and governance built for scale.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/contact-sales">
                <button className="rounded-full bg-[#d9603f] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]">
                  Get Started
                </button>
              </a>
              <a href="/zoiko-local-ai-terms">
                <button className="rounded-full border border-[#1c2b26]/20 px-7 py-3 text-sm font-semibold text-[#1c2b26] transition-colors hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10">
                  Learn More
                </button>
              </a>
            </div>
          </div>

          {/* Product mock */}
          <div className="rounded-2xl bg-white p-5 shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
            <div className="flex items-center gap-2 rounded-xl bg-[#f3efe7] px-4 py-3 dark:bg-gray-700">
              <SearchIcon className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-500 dark:text-gray-300">Search a local number…</span>
            </div>
            <div className="mt-4 space-y-3">
              {countries.slice(0, 4).map((c) => (
                <div key={c.name} className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3 dark:border-gray-700">
                  <span className="flex items-center gap-3 text-sm font-medium dark:text-gray-100">
                    <span className="text-lg">{c.flag}</span>
                    {c.name} <span className="text-gray-400">{c.code}</span>
                  </span>
                  <span className="rounded-full bg-[#163a2e] px-3 py-1 text-xs font-semibold text-white">Add</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── GLOBAL / LOCAL ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-extrabold leading-snug dark:text-white">
              The world became global.
              <br />
              Trust stayed local.
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-300">
              As work, commerce and relationships have spread across borders, the way we build trust has not. People
              still answer the phone for numbers they recognise, and businesses still grow through local presence.
              Zoiko Local closes that gap — turning a global footprint into something that feels personal, recognised
              and reliable.
            </p>
            <a href="#features" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[#d9603f] hover:underline">
              Learn more →
            </a>
          </div>
          <div className="space-y-4">
            {trustPoints.map((t) => (
              <div key={t.title} className="flex gap-4 rounded-xl bg-[#f3efe7] p-5 dark:bg-gray-900">
                <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#d9603f]/10 text-[#d9603f] dark:bg-[#d9603f]/20">
                  {t.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold dark:text-white">{t.title}</h3>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>What we do</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold leading-snug dark:text-white">
              Local phone presence, built for the way people actually communicate now.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <IconBadge icon={f.icon} />
                <h3 className="mt-4 text-base font-bold dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DARK: ACCESS / TRUST / CONTROL ─── */}
      <section className="bg-[#163a2e] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow light>Why we built it</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold leading-snug">
              To make global reach feel local, trusted, and manageable.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                <IconBadge icon={p.icon} light />
                <h3 className="mt-4 text-base font-bold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BUILT FOR BUSINESS ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>Use cases</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold dark:text-white">Built for business. Simple enough for life.</h2>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {businessCards.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#d9603f]/10 text-[#d9603f] dark:bg-[#d9603f]/20">
                  {c.icon}
                </div>
                <h3 className="mt-3 text-sm font-bold dark:text-white">{c.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COUNTRIES ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>Where we start</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold dark:text-white">
              Starting where local presence <span className="text-[#d9603f]">matters most.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {countries.map((c) => (
              <div key={c.name} className="flex items-center justify-between rounded-xl border border-gray-100 px-5 py-4 dark:border-gray-700">
                <span className="flex items-center gap-3 text-sm font-semibold dark:text-gray-100">
                  <span className="text-xl">{c.flag}</span>
                  {c.name}
                  <span className="text-gray-400">{c.code}</span>
                </span>
                <span className="rounded-full bg-[#163a2e]/10 px-3 py-1 text-xs font-semibold text-[#163a2e] dark:bg-emerald-400/15 dark:text-emerald-400">
                  Available
                </span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm font-semibold text-[#d9603f]">More markets coming soon →</p>
        </div>
      </section>

      {/* ─── A LOCAL PRESENCE SYSTEM ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>How it works</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold dark:text-white">Not just a number. A local presence system.</h2>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl bg-white p-5 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <span className="text-2xl font-extrabold text-[#d9603f]">{s.n}</span>
                <h3 className="mt-3 text-sm font-bold dark:text-white">{s.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#163a2e] text-white">
                <tr>
                  <th className="px-5 py-3 font-semibold">Feature</th>
                  <th className="px-5 py-3 font-semibold">Basic number</th>
                  <th className="px-5 py-3 font-semibold">Zoiko Local</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800">
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 ? "bg-[#f3efe7]/50 dark:bg-gray-900/40" : ""}>
                    <td className="px-5 py-3 font-medium dark:text-gray-100">{row.feature}</td>
                    <td className="px-5 py-3 text-gray-500 dark:text-gray-400">{row.basic}</td>
                    <td className="px-5 py-3 font-semibold text-[#163a2e] dark:text-emerald-400">{row.local}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── AI GOVERNED BY HUMAN TRUST ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Responsible AI</Eyebrow>
            <h2 className="mt-3 text-3xl font-extrabold leading-snug dark:text-white">
              Helpful AI governed by <span className="text-[#d9603f]">human trust.</span>
            </h2>
            <div className="mt-8 space-y-5">
              {aiGovern.map((a) => (
                <div key={a.title} className="flex gap-4">
                  <IconBadge icon={a.icon} />
                  <div>
                    <h3 className="text-sm font-bold dark:text-white">{a.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{a.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/local-business-numbers">
              <button className="mt-8 rounded-full bg-[#d9603f] px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]">
                See how it works
              </button>
            </a>
          </div>

          {/* Card mock */}
          <div className="rounded-2xl bg-[#f3efe7] p-6 ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold dark:text-white">Incoming call · +1 202</span>
              <span className="rounded-full bg-[#163a2e] px-2.5 py-1 text-xs font-semibold text-white">AI</span>
            </div>
            <div className="mt-5 space-y-3">
              {["Caller identified & verified", "Intent: new enquiry", "Routed to sales team", "Summary saved to record"].map((line) => (
                <div key={line} className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 text-sm dark:bg-gray-800 dark:text-gray-100">
                  <CheckSmallIcon className="h-4 w-4 flex-shrink-0 text-[#163a2e] dark:text-emerald-400" />
                  {line}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── DARK: TRUST BEFORE SCALE ─── */}
      <section className="bg-[#0f2a21] px-4 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-xl">
            <h2 className="text-3xl font-extrabold leading-snug">
              Cross-border communication must be trusted before it can scale.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Trust is built one line at a time. Every number, identity and routing rule is verified and monitored
              before it ever reaches your customers.
            </p>
            <a href="/platform">
              <button className="mt-6 rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0f2a21] transition-colors hover:bg-white/90">
                Read compliance
              </button>
            </a>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {scaleItems.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <div className="mb-3 text-white/80">{s.icon}</div>
                <h3 className="text-sm font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── VALUES ─── */}
      <section className="px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>Our principles</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-xl text-3xl font-extrabold leading-snug dark:text-white">
              We build for trust, usefulness, and <span className="text-[#d9603f]">long-term reliability.</span>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <h3 className="text-base font-bold dark:text-white">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{v.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl bg-[#f7e3da] p-6 text-sm leading-relaxed text-[#8a3c24] ring-1 ring-[#e6c3b5] dark:bg-[#3a201a] dark:text-[#f0b6a0] dark:ring-[#5a2f24]">
            Zoiko Local is designed to support people. We do not make claims that we cannot stand behind, and every
            automated decision is reviewable and reversible by a human.
          </div>
        </div>
      </section>

      {/* ─── POWERED BY ZOIKONEX ─── */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#163a2e] p-8 text-white sm:p-12">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <Eyebrow light>Infrastructure</Eyebrow>
              <h2 className="mt-3 text-3xl font-extrabold">Powered by ZoikoNex</h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Zoiko Local runs on ZoikoNex — the group's platform for identity, charging, compliance and
                communication at scale.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="https://www.zoikonex.com/">
                  <button className="rounded-full bg-[#d9603f] px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]">
                    Explore ZoikoNex
                  </button>
                </a>
                <a href="/plans-and-pricing">
                  <button className="rounded-full border border-white/25 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                    View pricing
                  </button>
                </a>
              </div>
            </div>
            <ul className="space-y-3 lg:pt-10">
              {zoikonexPoints.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-white/80">
                  <CheckSmallIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-400" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FOCUSED PRODUCT ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <Eyebrow>The bigger picture</Eyebrow>
            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold leading-snug dark:text-white">
              A focused product with group-level infrastructure behind it.
            </h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {focusCards.map((f) => (
              <div key={f.title} className="rounded-2xl bg-[#f3efe7] p-6 dark:bg-gray-900">
                <IconBadge icon={f.icon} />
                <h3 className="mt-4 text-base font-bold dark:text-white">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-2xl bg-[#0f2a21] p-6 text-white sm:flex-row sm:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-white/60">Part of</p>
              <p className="mt-1 text-lg font-extrabold">Zoiko Group</p>
            </div>
            <button className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-[#0f2a21] transition-colors hover:bg-white/90">
              About Zoiko Group
            </button>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="px-4 pb-24 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-br from-[#1b4a3a] to-[#0f2a21] p-10 text-center text-white sm:p-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-snug sm:text-4xl">
            Build your local presence where business and life happen.
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="/get-a-local-number">
              <button className="rounded-full bg-[#d9603f] px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]">
                Get Started
              </button>
            </a>
            <a href="/contact-sales">
              <button className="rounded-full border border-white/25 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                Talk to Sales
              </button>
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {ctaPills.map((p) => (
              <span key={p} className="rounded-full bg-white/10 px-4 py-1.5 text-xs font-medium text-white/80">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Aboutus;
export { Aboutus };