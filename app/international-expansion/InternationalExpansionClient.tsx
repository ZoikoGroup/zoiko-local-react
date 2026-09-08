"use client";

import { useState, type ReactNode } from "react";


// ─── ICONS ───────────────────────────────────────────────────────────────────
type IconName =
  | "globe"
  | "building"
  | "phone"
  | "trending"
  | "pin"
  | "route"
  | "video"
  | "bot"
  | "cart"
  | "shield"
  | "briefcase"
  | "sparkle"
  | "pulse"
  | "check"
  | "plus";

const PATHS: Record<IconName, ReactNode> = {
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
    </>
  ),
  building: (
    <>
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </>
  ),
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" />
  ),
  trending: (
    <>
      <path d="M3 17l6-6 4 4 7-7" />
      <path d="M14 8h6v6" />
    </>
  ),
  pin: (
    <>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  route: (
    <>
      <path d="M4 7h9a4 4 0 0 1 0 8H7" />
      <path d="M4 17h10" />
      <circle cx="18" cy="7" r="2" />
    </>
  ),
  video: (
    <>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="m16 11 6-3v8l-6-3z" />
    </>
  ),
  bot: (
    <>
      <rect x="4" y="9" width="16" height="10" rx="3" />
      <path d="M12 5v4M9 14h.01M15 14h.01" />
      <circle cx="12" cy="4" r="1.4" />
    </>
  ),
  cart: (
    <>
      <path d="M3 4h2l2.4 11.2A2 2 0 0 0 9.4 17h8.2a2 2 0 0 0 2-1.6L21 8H6" />
      <circle cx="10" cy="20" r="1.3" />
      <circle cx="18" cy="20" r="1.3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2M3 13h18" />
    </>
  ),
  sparkle: (
    <>
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 3v2.2M12 18.8V21M3 12h2.2M18.8 12H21M5.6 5.6l1.6 1.6M16.8 16.8l1.6 1.6M18.4 5.6l-1.6 1.6M7.2 16.8l-1.6 1.6" />
    </>
  ),
  pulse: <path d="M2 12h4l2-6 4 12 3-8 2 2h5" />,
  check: <path d="M20 6 9 17l-5-5" />,
  plus: <path d="M12 5v14M5 12h14" />,
};

function Icon({
  name,
  className = "h-[19px] w-[19px]",
  strokeWidth = 1.8,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      className={className}
    >
      {PATHS[name]}
    </svg>
  );
}

// ─── PRIMITIVES ──────────────────────────────────────────────────────────────
function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-4 py-[7px] text-[11.5px] font-semibold uppercase tracking-[0.16em] ${
        light ? "bg-white/10 text-[#f6b79f]" : "bg-[#e85d3c]/10 text-[#e85d3c]"
      }`}
    >
      <span className={`h-[5px] w-[5px] rounded-full ${light ? "bg-[#f6b79f]" : "bg-[#e85d3c]"}`} />
      {children}
    </span>
  );
}

function SectionHead({
  eyebrow,
  title,
  sub,
  onDark = false,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  onDark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow light={onDark}>{eyebrow}</Eyebrow>
      <h2
        className={`mt-5 text-3xl font-extrabold leading-[1.28] tracking-tight ${
          onDark ? "text-white" : "text-[#0b1330] dark:text-white"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mx-auto mt-4 max-w-xl text-sm leading-relaxed ${
            onDark ? "text-white/70" : "text-[#6e7791] dark:text-gray-400"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}




const coralBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-[#e85d3c] px-7 py-[15px] text-sm font-semibold text-white shadow-[0_8px_20px_-10px_rgba(232,93,60,0.75)] transition-colors hover:bg-[#d14c2c]";
const whiteBtn =
  "inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-[15px] text-sm font-semibold text-[#0b1330] shadow-sm transition-colors hover:bg-[#f7f7f9]";
const whiteBtnGreen =
  "inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-[15px] text-sm font-semibold text-[#0a4f4a] transition-colors hover:bg-[#f1f7f5]";
const ghostBtn =
  "inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-[15px] text-sm font-semibold text-[#eaf3f0] transition-colors hover:bg-white/10";
const orangeLink = "text-sm font-semibold text-[#e85d3c] hover:underline";
const cardCls =
  "rounded-2xl border border-[#e9eaf0] bg-white p-6 shadow-[0_1px_2px_rgba(11,19,48,0.03)] dark:border-white/10 dark:bg-gray-800";
const cardTitle = "text-base font-bold leading-snug text-[#0b1330] dark:text-white";
const cardBody = "mt-2 text-sm leading-relaxed text-[#6e7791] dark:text-gray-400";

// chip tints
const CHIP: Record<"rose" | "peach" | "mint" | "amber", string> = {
  rose: "bg-[#fce9ea] text-[#e1596b] dark:bg-[#e1596b]/15",
  peach: "bg-[#fcebe3] text-[#e85d3c] dark:bg-[#e85d3c]/15",
  mint: "bg-[#def3eb] text-[#14b58f] dark:bg-[#14b58f]/15",
  amber: "bg-[#fdf1dc] text-[#e2a03c] dark:bg-[#e2a03c]/15",
};

type Tint = keyof typeof CHIP;

function Chip({ name, tint }: { name: IconName; tint: Tint }) {
  return (
    <span className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${CHIP[tint]}`}>
      <Icon name={name} />
    </span>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const heroChecks = [
  "Local numbers for new-market credibility",
  "Calling, video, and routing for international teams",
  "AI Receptionist support for missed inquiries",
];

const frictions: { title: string; desc: string; icon: IconName }[] = [
  {
    title: "Foreign numbers reduce confidence",
    desc: "An unfamiliar number can stop a promising lead before the first conversation.",
    icon: "globe",
  },
  {
    title: "No local office feels distant",
    desc: "Without local signals, a capable business can seem far away or temporary.",
    icon: "building",
  },
  {
    title: "Early leads are easy to miss",
    desc: "Before a local team exists, inbound interest slips through the cracks.",
    icon: "phone",
  },
  {
    title: "Teams need to test demand",
    desc: "Expansion teams need a flexible, low-commitment way to validate a market.",
    icon: "trending",
  },
];

const solutions: { title: string; desc: string; icon: IconName; tint: Tint }[] = [
  {
    title: "Local numbers in target markets",
    desc: "Give customers a familiar number in the country, city or region you want to serve.",
    icon: "pin",
    tint: "peach",
  },
  {
    title: "Business calling from anywhere",
    desc: "Central teams call and receive with a professional local identity.",
    icon: "phone",
    tint: "peach",
  },
  {
    title: "Market-specific routing",
    desc: "Route by region, department, language path, hours or expansion team.",
    icon: "route",
    tint: "peach",
  },
  {
    title: "Video for high-trust conversations",
    desc: "Move important sales, partner and onboarding conversations into video.",
    icon: "video",
    tint: "mint",
  },
  {
    title: "AI Receptionist coverage",
    desc: "Capture and route inquiries before a local team is fully staffed.",
    icon: "bot",
    tint: "amber",
  },
  {
    title: "Scalable global coverage",
    desc: "Add numbers, users and markets as expansion grows.",
    icon: "globe",
    tint: "peach",
  },
];

const steps = [
  { title: "Select the target market", desc: "Choose the country, city, region or area code." },
  { title: "Reserve a local number", desc: "Pick a number customers recognize." },
  { title: "Connect your teams", desc: "Connect sales, support, founders or central operations." },
  { title: "Set market routing", desc: "Route by market, hours, team or language path." },
  { title: "Add AI Receptionist", desc: "Capture inquiries when the team is unavailable." },
  { title: "Scale as demand grows", desc: "Add numbers, users, call flows and markets." },
];

const useCases: { title: string; desc: string; icon: IconName; tint: Tint }[] = [
  { title: "Market testing", desc: "Validate demand before opening an office or hiring locally.", icon: "trending", tint: "peach" },
  { title: "International sales", desc: "Give prospects a local number and route calls to the right team.", icon: "briefcase", tint: "peach" },
  { title: "Cross-border support", desc: "Provide customers with familiar support numbers in their markets.", icon: "phone", tint: "mint" },
  { title: "E-commerce expansion", desc: "Support shoppers in new countries with local contact points.", icon: "cart", tint: "peach" },
  { title: "Professional services", desc: "Build credibility with clients, partners and referral networks.", icon: "shield", tint: "peach" },
  { title: "Pre-office campaigns", desc: "Run ads and landing pages with a local number before launch.", icon: "sparkle", tint: "amber" },
];

const platform: { title: string; desc: string; cta: string; icon: IconName; tint: Tint }[] = [
  {
    title: "Local Numbers",
    desc: "Create local presence in countries and regions you want to serve.",
    cta: "Explore Local Numbers →",
    icon: "pin",
    tint: "peach",
  },
  {
    title: "Calling",
    desc: "Make and receive international business calls through a professional layer.",
    cta: "Explore Calling →",
    icon: "phone",
    tint: "peach",
  },
  {
    title: "Video",
    desc: "Build trust with prospects, customers and partners through video.",
    cta: "Explore Video →",
    icon: "video",
    tint: "mint",
  },
  {
    title: "AI Receptionist",
    desc: "Capture, qualify and route inquiries while the market team is forming.",
    cta: "Explore AI Receptionist →",
    icon: "bot",
    tint: "amber",
  },
];

const compareRows: [string, string][] = [
  ["Contact forms delay conversations", "Local numbers invite direct contact"],
  ["Foreign numbers feel distant", "Local numbers create market familiarity"],
  ["Early inquiries can be missed", "AI Receptionist can capture and route calls"],
  ["One global number may not fit every market", "Add numbers by country, city or region"],
  ["Hard to assign calls by market", "Route calls by market, team or business hours"],
  ["Weak local trust signal", "Professional local presence from day one"],
  ["Difficult to scale across regions", "Expand numbers and users as markets grow"],
];

const markets = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇯🇲", name: "Jamaica" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇳🇬", name: "Nigeria" },
  { flag: "🇿🇦", name: "South Africa" },
];

const regions = [
  { flag: "🏝", name: "Caribbean" },
  { flag: "🇪🇺", name: "Europe" },
  { flag: "🌍", name: "Africa" },
  { flag: "🌎", name: "North America" },
];

const faqs = [
  {
    q: "How can my business get a local number in another country?",
    a: "Select a supported target market, reserve a local number, connect your team, and set routing. Availability and eligibility vary by country and number type.",
  },
  {
    q: "Can I test a new market before opening an office?",
    a: "Yes. A local number with routing and AI Receptionist gives you a working presence in the market without a lease, a local entity, or a local hire.",
  },
  {
    q: "Do I need a physical office to get a local business number?",
    a: "In many supported markets, no. Some countries require a local address or proof of business by regulation, subject to local eligibility requirements.",
  },
  {
    q: "Can calls from one country be routed to a team in another country?",
    a: "Yes. Calls to a local number can ring any user, team, or device anywhere, with rules by market, business hours, or language path.",
  },
  {
    q: "Can Zoiko Local support multiple countries?",
    a: "Yes. Hold numbers across several countries and regions in one account, and manage routing, users and call history from the same place.",
  },
  {
    q: "Can AI Receptionist answer inquiries from new markets?",
    a: "Yes. It answers, qualifies and routes inbound inquiries while the local team is still forming, so early demand isn't lost to voicemail.",
  },
  {
    q: "Does number availability vary by country?",
    a: "Yes. Number types, area codes and documentation requirements are set by each country's regulator. Availability is confirmed at reservation.",
  },
  {
    q: "Is Zoiko Local a replacement for Skype Number?",
    a: "Many businesses use it for the same purpose — a number in another country — with added routing, teams, video and AI Receptionist for business use.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
function InternationalExpansion() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="bg-white font-sans text-[#0b1330] dark:bg-gray-900 dark:text-gray-100">
      {/* ─── HERO ─── */}
      <section className="overflow-hidden bg-[#f4ede7] px-4 py-16 sm:px-6 lg:px-8 lg:py-24 dark:bg-gray-900">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">
          <div>
            <Eyebrow>International expansion</Eyebrow>
            <h1 className="mt-6 max-w-[12ch] text-4xl font-extrabold leading-[1.2] tracking-tight sm:text-5xl dark:text-white">
              Local numbers for businesses entering <span className="text-[#e85d3c]">new markets</span>.
            </h1>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-[#5b6480] dark:text-gray-400">
              Create trusted local presence before you open an office, hire a local team, or build regional
              infrastructure. Zoiko Local helps expanding businesses get local numbers, manage calls, route inquiries,
              meet customers, and support new-market conversations from anywhere.
            </p>

            <div className="mt-8">
              <button className={coralBtn}>Start Expanding with a Local Number</button>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
              <button className={whiteBtn}>Explore Global Coverage</button>
              <a href="#" className={orangeLink}>
                See Pricing →
              </a>
            </div>

            <div className="mt-5 inline-flex flex-wrap items-center gap-x-4 gap-y-1 rounded-full bg-white px-6 py-3 shadow-sm dark:bg-gray-800">
              <span className="text-sm text-[#5b6480] dark:text-gray-400">
                Replacing Skype Number for international market presence?
              </span>
              <a href="#" className={orangeLink}>
                Switch from Skype →
              </a>
            </div>

            <ul className="mt-7 space-y-3">
              {heroChecks.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-[#4b5470] dark:text-gray-300">
                  <span className="mt-[3px] text-[#14b58f]">
                    <Icon name="check" className="h-[15px] w-[15px]" strokeWidth={3} />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* product mock */}
          <div className="relative py-7">
            <span className="absolute -left-4 top-0 z-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-[10px] text-[13px] font-semibold text-[#0b1330] shadow-lg dark:bg-gray-800 dark:text-white">
              <span className="text-[#e85d3c]">
                <Icon name="pin" className="h-[15px] w-[15px]" strokeWidth={2} />
              </span>
              HQ + target markets
            </span>

            <div className="rounded-3xl bg-white p-3.5 shadow-2xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <div className="flex items-center justify-between gap-4 rounded-xl bg-[#101b3c] px-5 py-[18px]">
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#8891ae]">
                    New-market number
                  </p>
                  <p className="mt-1.5 text-xl font-semibold tracking-tight text-white">+44 20 7946 0—</p>
                </div>
                <span className="rounded-lg bg-white/10 px-2 py-1.5 text-sm leading-none">🇬🇧</span>
              </div>

              <div className="mt-3 flex items-center gap-3.5 rounded-xl bg-[#fcede6] px-4 py-3.5 dark:bg-[#e85d3c]/10">
                <span className="flex h-[34px] w-[34px] flex-shrink-0 items-center justify-center rounded-full bg-[#e85d3c] text-white">
                  <Icon name="phone" className="h-4 w-4" strokeWidth={2} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0b1330] dark:text-white">Incoming · New market</p>
                  <p className="text-xs text-[#6e7791] dark:text-gray-400">First inbound lead</p>
                </div>
              </div>

              <p className="mb-1.5 mt-4 pl-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#9aa1b6]">
                Routing
              </p>

              <div className="flex items-center justify-between gap-3 border-b border-[#f1f1f5] px-3.5 py-3 dark:border-white/5">
                <span className="flex items-center gap-2.5 text-sm font-medium text-[#0b1330] dark:text-white">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#e85d3c]" /> Expansion team
                </span>
                <span className="rounded-full bg-[#f2f3f7] px-2.5 py-1 text-[11.5px] text-[#6e7791] dark:bg-white/10 dark:text-gray-300">
                  Central
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 border-b border-[#f1f1f5] px-3.5 py-3 dark:border-white/5">
                <span className="flex items-center gap-2.5 text-sm font-medium text-[#0b1330] dark:text-white">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#14b58f]" /> Regional sales
                </span>
                <span className="rounded-full bg-[#f2f3f7] px-2.5 py-1 text-[11.5px] text-[#6e7791] dark:bg-white/10 dark:text-gray-300">
                  Routed
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-[10px] bg-[#e6f6ef] px-3.5 py-3 dark:bg-[#14b58f]/15">
                <span className="flex items-center gap-2.5 text-sm font-medium text-[#0b1330] dark:text-white">
                  <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#e2a03c]" /> AI Receptionist
                </span>
                <span className="rounded-full bg-[#14b58f] px-2.5 py-1 text-[11.5px] font-semibold text-white">
                  Qualify
                </span>
              </div>

              <div className="mt-3.5 flex items-center gap-2.5 rounded-full bg-[#e6f6ef] px-4 py-[11px] text-xs font-medium text-[#0e8f6e] dark:bg-[#14b58f]/15 dark:text-[#5fd7b6]">
                <span className="h-2 w-2 flex-shrink-0 rounded-full bg-[#14b58f]" />
                Market presence activated before office launch
              </div>
            </div>

            <span className="absolute -right-3 bottom-1 z-10 inline-flex items-center gap-2 rounded-full bg-white px-4 py-[10px] text-[13px] font-semibold text-[#0b1330] shadow-lg dark:bg-gray-800 dark:text-white">
              <span className="text-[#14b58f]">
                <Icon name="shield" className="h-[15px] w-[15px]" strokeWidth={2} />
              </span>
              Lead captured
            </span>
          </div>
        </div>
      </section>

      {/* ─── MARKET-ENTRY GAP ─── */}
      <section className="bg-[#f6f3ec] px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Market-entry gap"
            title="Entering a new market is harder when customers cannot reach you locally."
            sub="Before a local team exists, early demand is fragile. These are the friction points to remove first."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {frictions.map((f) => (
              <div key={f.title} className={cardCls}>
                <Chip name={f.icon} tint="rose" />
                <h3 className={`mt-5 ${cardTitle}`}>{f.title}</h3>
                <p className={cardBody}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE SOLUTION ─── */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="The solution"
            title="Build local presence before physical presence."
            sub="Zoiko Local becomes the first communication layer for market entry — local trust while operations mature."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <div key={s.title} className={cardCls}>
                <Chip name={s.icon} tint={s.tint} />
                <h3 className={`mt-5 ${cardTitle}`}>{s.title}</h3>
                <p className={cardBody}>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-11 text-center">
            <button className={coralBtn}>Start Expanding with a Local Number</button>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-[#f6f3ec] px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="How it works"
            title="Choose a market. Activate a local number. Start building demand."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className={cardCls}>
                <span className="inline-flex h-[34px] w-[34px] items-center justify-center rounded-[9px] bg-[#0b1330] text-sm font-semibold text-white dark:bg-white/15">
                  {i + 1}
                </span>
                <h3 className={`mt-5 ${cardTitle}`}>{s.title}</h3>
                <p className={cardBody}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Use cases"
            title="Built for businesses entering new markets with discipline and speed."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u) => (
              <div key={u.title} className={cardCls}>
                <Chip name={u.icon} tint={u.tint} />
                <h3 className={`mt-5 ${cardTitle}`}>{u.title}</h3>
                <p className={cardBody}>{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONNECTED PLATFORM ─── */}
      <section className="bg-[#f6f3ec] px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Connected platform"
            title="Everything your business needs to enter new markets with a local voice."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {platform.map((p) => (
              <div key={p.title} className={cardCls}>
                <Chip name={p.icon} tint={p.tint} />
                <h3 className={`mt-5 ${cardTitle}`}>{p.title}</h3>
                <p className={cardBody}>{p.desc}</p>
                <a href="#" className={`mt-4 inline-block ${orangeLink}`}>
                  {p.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY UPGRADE ─── */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Why upgrade" title="A contact form alone is not a market-entry strategy." />

          <div className="mx-auto mt-14 max-w-4xl overflow-hidden rounded-2xl border border-[#e9eaf0] shadow-sm dark:border-white/10">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="w-1/2 bg-[#f7f7fa] px-6 py-[18px] text-left text-sm font-semibold text-[#0b1330] dark:bg-white/5 dark:text-white"
                  >
                    Generic Contact Methods
                  </th>
                  <th scope="col" className="bg-[#e85d3c] px-6 py-[18px] text-left text-sm font-semibold text-white">
                    <span className="inline-flex items-center gap-2.5">
                      <Icon name="pulse" className="h-[17px] w-[17px]" strokeWidth={2} />
                      Zoiko Local
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map(([generic, ours]) => (
                  <tr key={generic}>
                    <td className="border-t border-[#f1f1f5] bg-[#fafafc] px-6 py-[15px] align-top text-sm text-[#8d95ab] dark:border-white/5 dark:bg-white/[0.02] dark:text-gray-400">
                      {generic}
                    </td>
                    <td className="border-t border-[#f1f1f5] bg-white px-6 py-[15px] align-top text-sm font-medium text-[#0b1330] dark:border-white/5 dark:bg-transparent dark:text-white">
                      {ours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="border-t border-[#f1f1f5] bg-[#fafafc] p-7 text-center dark:border-white/5 dark:bg-white/[0.02]">
              <button className={coralBtn}>Create Local Presence Before You Open an Office</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── COVERAGE & SCALING ─── */}
      <section className="bg-[#0a4f4a] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            onDark
            eyebrow="Coverage & scaling"
            title="Start in one market. Expand into the next."
            sub="Start with one target market, then add numbers, users, teams, routing rules, AI Receptionist coverage, video and new regions as traction grows."
          />

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {markets.map((m) => (
              <span
                key={m.name}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-[#eaf3f0]"
              >
                <span aria-hidden>{m.flag}</span>
                {m.name}
              </span>
            ))}
          </div>

          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {regions.map((r) => (
              <span
                key={r.name}
                className="inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-[#eaf3f0]"
              >
                <span aria-hidden>{r.flag}</span>
                {r.name}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <button className={whiteBtnGreen}>Explore Global Coverage</button>
            <button className={ghostBtn}>Request a Market</button>
            <button className={ghostBtn}>See Pricing</button>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-white px-4 py-24 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <SectionHead eyebrow="FAQ" title="International expansion phone numbers, answered." />

          <div className="mt-14 space-y-3.5">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className="rounded-2xl border border-[#e9eaf0] bg-white shadow-[0_1px_2px_rgba(11,19,48,0.03)] dark:border-white/10 dark:bg-gray-800"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-5 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-[15px] font-semibold text-[#0b1330] dark:text-white">{f.q}</span>
                    <span
                      className={`flex h-[26px] w-[26px] flex-shrink-0 items-center justify-center rounded-full transition-all ${
                        isOpen ? "rotate-45 bg-[#e85d3c] text-white" : "text-[#e85d3c]"
                      }`}
                    >
                      <Icon name="plus" className="h-[13px] w-[13px]" strokeWidth={2.6} />
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-6 pb-6 pr-14 text-sm leading-relaxed text-[#6e7791] dark:text-gray-400">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#0a4f4a] px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center text-white">
          <h2 className="mx-auto max-w-[16ch] text-3xl font-extrabold leading-[1.28] tracking-tight sm:text-4xl">
            Enter new markets with a local voice.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-white/70">
            Create trusted local presence, capture early demand, and support customer conversations before your physical
            operations are fully in place.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <button className={whiteBtnGreen}>Start Expanding with a Local Number</button>
            <button className={ghostBtn}>Explore Global Coverage</button>
            <button className={ghostBtn}>See Pricing</button>
          </div>

          <div className="mt-7 inline-flex flex-wrap items-center justify-center gap-x-3 gap-y-1 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3">
            <span className="text-sm text-white/75">Replacing Skype Number?</span>
            <a href="#" className="text-sm font-semibold text-white hover:underline">
              Switch from Skype →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default InternationalExpansion;
export { InternationalExpansion };