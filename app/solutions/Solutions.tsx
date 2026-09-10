"use client";

import { useState, type ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FiPhone, FiVideo, FiMic, FiMapPin, FiCheck, FiChevronDown,
  FiChevronUp, FiGlobe, FiUsers, FiBriefcase, FiHeadphones,
  FiTrendingUp, FiUser, FiArrowRight, FiShield, FiSliders,
  FiZap, FiGrid, FiSmartphone,
} from "react-icons/fi";

// ─── HELPERS ─────────────────────────────────────────────────────────────────
function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p className={`text-[10.5px] font-bold uppercase tracking-[0.2em] ${light ? "text-[#f4a07a]" : "text-[#d9603f]"}`}>
      {children}
    </p>
  );
}

function Check({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-[13.5px] leading-6 text-gray-600 dark:text-gray-300">
      <FiCheck size={13} className="mt-1 shrink-0 text-[#0f4338] dark:text-[#34d39e]" strokeWidth={3} />
      {children}
    </li>
  );
}

const coralBtn = "inline-flex items-center gap-2 rounded-full bg-[#d9603f] px-6 py-3 text-[13.5px] font-semibold text-white transition hover:bg-[#c25030]";
const outlineBtn = "inline-flex items-center gap-2 rounded-full border border-[#1c2b26]/20 bg-white px-6 py-3 text-[13.5px] font-semibold text-[#1c2b26] transition hover:bg-gray-50 dark:border-white/20 dark:bg-gray-800 dark:text-white";
const outlineDark = "inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-[13.5px] font-semibold text-white transition hover:bg-white/10";

// ─── DATA ─────────────────────────────────────────────────────────────────────

const accomplishItems = [
  { icon: FiMapPin,      label: "Local numbers" },
  { icon: FiPhone,       label: "Start calling" },
  { icon: FiHeadphones,  label: "Support" },
  { icon: FiTrendingUp,  label: "Get more leads" },
  { icon: FiVideo,       label: "Video" },
  { icon: FiMic,         label: "Reach the right person" },
];

const notSureCards = [
  { icon: FiBriefcase, label: "Find numbers for my business", href: "/for-business" },
  { icon: FiGlobe,     label: "Expand to new markets",        href: "/international-expansion" },
  { icon: FiShield,    label: "Identify the best solution",   href: "/contact-sales" },
];

const outcomes = [
  {
    tag: "For the business owner who needs visibility",
    title: "Remote Teams",
    href: "/remote-teams",
    checks: [
      "Get local numbers for every market",
      "Route calls to the right person",
      "Keep the team reachable anywhere",
    ],
    accent: "#d9603f",
  },
  {
    tag: "For the growing business",
    title: "Local Numbers",
    href: "/get-a-local-number",
    checks: [
      "Search numbers in your market",
      "Port or activate in minutes",
      "Local caller ID in every region",
    ],
    accent: "#0f4338",
  },
  {
    tag: "For the distributed workforce",
    title: "Remote Teams",
    href: "/remote-teams",
    checks: [
      "Shared line, any device",
      "Business calling, not personal",
      "One identity across the team",
    ],
    accent: "#d9603f",
  },
  {
    tag: "For the business fielding enquiries",
    title: "Customer Support",
    href: "/customer-support",
    checks: [
      "Route calls to support staff",
      "AI handles overflow calls",
      "Never miss a customer call",
    ],
    accent: "#0f4338",
  },
  {
    tag: "For the ambitious company",
    title: "Sales & Onboarding",
    href: "/contact-sales",
    checks: [
      "Dedicated sales line",
      "Route inbound by intent",
      "Track and capture leads",
    ],
    accent: "#0f4338",
  },
  {
    tag: "For founders building across borders",
    title: "Diaspora Founders",
    href: "/diaspora-founders",
    checks: [
      "Home-market numbers from abroad",
      "Professional presence, any country",
      "AI Receptionist across time zones",
    ],
    accent: "#d9603f",
  },
  {
    tag: "For the solo operator",
    title: "Founder-Led Business",
    href: "/founder-led-business",
    checks: [
      "Separate personal & business",
      "Local number, no office needed",
      "Scale the line as you grow",
    ],
    accent: "#0f4338",
  },
  {
    tag: "For the company going global",
    title: "International Expansion",
    href: "/international-expansion",
    checks: [
      "Local numbers in new markets",
      "Sound established before day one",
      "Multi-market from one workspace",
    ],
    accent: "#d9603f",
  },
];

const splitSections = [
  {
    id: "trust",
    eyebrow: "Local presence",
    title: "A local number that builds trust.",
    titleAccent: "builds trust.",
    body: "Give customers a number they recognise — local to the market you serve, professional from day one, no office required.",
    checks: [
      "Local numbers in 30+ countries",
      "Familiar area codes customers trust",
      "Available to UK & international accounts",
    ],
    primaryCta: { label: "Search local numbers", href: "/get-a-local-number" },
    secondaryCta: { label: "See pricing", href: "/plans-and-pricing" },
    image: "/images/solutions/local-trust.png",
    imageAlt: "Professional working at desk",
    imageBadge: { icon: FiMapPin, label: "Local number active" },
    imageRight: true,
    bg: "bg-[#f7f4ee] dark:bg-gray-950",
  },
  {
    id: "local",
    eyebrow: "Global coverage",
    title: "Sound local in new markets.",
    titleAccent: "new markets.",
    body: "Enter a new country with a local number before you open an office. Your number gives customers a reason to call — and trust what they find.",
    checks: [
      "Get a local number in any country",
      "No physical address required",
      "Available for diaspora founders too",
    ],
    primaryCta: { label: "Explore global coverage", href: "/global-coverage" },
    secondaryCta: { label: "Talk to Sales", href: "/contact-sales" },
    image: "/images/solutions/global-market.png",
    imageAlt: "Map and compass on a desk",
    imageBadge: { icon: FiGlobe, label: "Sound local" },
    imageRight: false,
    bg: "bg-white dark:bg-gray-900",
  },
  {
    id: "team",
    eyebrow: "Remote teams",
    title: "One identity for a team anywhere.",
    titleAccent: "team anywhere.",
    body: "Give every teammate the same professional front door. One business number, shared across your whole team, routing to the right person every time.",
    checks: [
      "Shared business line, not personal phones",
      "Route calls by role or availability",
      "Works across cities, countries, and time zones",
    ],
    primaryCta: { label: "Explore remote teams", href: "/remote-teams" },
    secondaryCta: { label: "View plans", href: "/plans-and-pricing" },
    image: "/images/solutions/team-hands.png",
    imageAlt: "Team joining hands together",
    imageBadge: { icon: FiUsers, label: "Team routing active" },
    imageRight: true,
    bg: "bg-[#f7f4ee] dark:bg-gray-950",
  },
  {
    id: "calls",
    eyebrow: "AI Receptionist",
    title: "Never miss the call that matters.",
    titleAccent: "call that matters.",
    body: "Your AI Receptionist answers, qualifies and routes calls when your team is busy or offline — so every inquiry is captured, every time.",
    checks: [
      "AI answers when your team can't",
      "Qualifies and routes automatically",
      "Summaries ready for your team to review",
    ],
    primaryCta: { label: "Explore AI Receptionist", href: "/ai-receptionist" },
    secondaryCta: { label: "Explore the platform", href: "/platform" },
    image: "/images/solutions/missed-call.png",
    imageAlt: "Business team in discussion",
    imageBadge: { icon: FiMic, label: "AI Receptionist active" },
    imageRight: false,
    bg: "bg-white dark:bg-gray-900",
  },
];

const scenarios = [
  { icon: FiPhone,      title: "Inbound enquiry for a new market",   desc: "A local number routes to the right team, wherever they sit." },
  { icon: FiMic,        title: "Ongoing support calls on the go",     desc: "AI handles overflow, your team picks up what matters most." },
  { icon: FiBriefcase,  title: "Scaling a field-services business",   desc: "One shared number keeps every call inside the business." },
  { icon: FiUsers,      title: "International team, one line",        desc: "Route by region, role and hours from one workspace." },
];

const platformItems = [
  { icon: FiMapPin,     label: "Local Numbers",   href: "/get-a-local-number" },
  { icon: FiPhone,      label: "Calling",          href: "/calling" },
  { icon: FiVideo,      label: "Video",            href: "/video" },
  { icon: FiMic,        label: "AI Receptionist",  href: "/ai-receptionist" },
  { icon: FiSmartphone, label: "Mobile Apps",      href: "/zoiko-local-mobile-apps" },
];

const controls = [
  { icon: FiSliders,    title: "Privacy",           desc: "Your data, your rules. Full control over retention and access." },
  { icon: FiUsers,      title: "Billing & Licensing", desc: "Manage plans, seats and usage from one clear dashboard." },
  { icon: FiShield,     title: "Admin Controls",    desc: "Role-based permissions for every member of your team." },
  { icon: FiGrid,       title: "Call Management",   desc: "Configure routing, hours and AI rules without dev support." },
  { icon: FiGlobe,      title: "Data Information",  desc: "Know where your data lives and how it's protected." },
  { icon: FiZap,        title: "Startup templates", desc: "Pre-built setups for common team and business configurations." },
];

const faqs = [
  {
    q: "How is the Solutions page different from the Platform page?",
    a: "The Platform page covers what each product does — numbers, calling, video, AI Receptionist, and mobile. The Solutions page shows how those products combine to solve specific business problems, by role, stage, and goal.",
  },
  {
    q: "Can I start with just one product?",
    a: "Yes. Every product stands alone. Start with a local number, add calling, then video or AI Receptionist as your needs grow. You're never forced to take the full stack on day one.",
  },
  {
    q: "Does it matter what country my team is based in?",
    a: "No. Zoiko Local is built for teams that operate across borders. You can hold numbers in multiple countries and route to teammates wherever they are.",
  },
  {
    q: "Can I create more than one number for my business?",
    a: "Yes. Add numbers by market, department, team or campaign. Each number can have its own routing rules, business hours and AI configuration.",
  },
  {
    q: "When do the pricing and country availability differ?",
    a: "Pricing varies by country, number type and plan. Some number types require verification or a local address. Check the pricing page or contact sales for your specific market.",
  },
  {
    q: "Is emergency calling always available for Skype alternatives?",
    a: "Emergency calling support depends on your plan, service country and device. It is not available on all plans. Review the emergency calling policy before relying on the service in an emergency.",
  },
];

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e8e2d8] dark:border-gray-700">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-[14px] font-semibold text-[#1c2b26] dark:text-white">{q}</span>
        {open
          ? <FiChevronUp size={16} className="shrink-0 text-[#d9603f]" />
          : <FiChevronDown size={16} className="shrink-0 text-gray-400" />
        }
      </button>
      {open && (
        <p className="pb-4 text-[13.5px] leading-7 text-gray-600 dark:text-gray-300">{a}</p>
      )}
    </div>
  );
}

// ─── PAGE ─────────────────────────────────────────────────────────────────────
export default function Solutions() {
  return (
    <main className="bg-[#f7f4ee] font-sans text-[#1c2b26] dark:bg-gray-950 dark:text-gray-100">

      {/* ════════════════════════════════════════════════════════════
          HERO
      ════════════════════════════════════════════════════════════ */}
      <section className="overflow-hidden bg-[#f7f4ee] dark:bg-gray-950">
        <div className="mx-auto grid max-w-7xl items-center gap-0 lg:grid-cols-2">

          {/* Left */}
          <div className="px-5 py-16 sm:px-8 lg:px-12 lg:py-24">
            <Eyebrow>Solutions</Eyebrow>
            <h1 className="mt-4 text-[38px] font-extrabold leading-[1.06] tracking-tight dark:text-white sm:text-[50px] lg:text-[56px]">
              A local presence for{" "}
              <span className="font-serif italic font-medium text-[#d9603f]">every way you do business.</span>
            </h1>
            <p className="mt-5 max-w-md text-[15px] leading-7 text-gray-600 dark:text-gray-400">
              Zoiko Local brings together local numbers, business calling, messaging, video and an AI Receptionist into
              one platform — helping you communicate locally, route smartly, and stay reachable anywhere.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Local numbers for every market",
                "Calling, video, routing and AI in one platform",
                "Scaled for solo founders to growing teams",
              ].map((c) => <Check key={c}>{c}</Check>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/plans-and-pricing" className={coralBtn}>
                Find your solution <FiArrowRight size={14} />
              </Link>
              <Link href="/get-a-local-number" className={outlineBtn}>
                Get a local number
              </Link>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative h-44 w-full lg:h-full lg:min-h-[340px]">
            <Image
              src="/images/solutions/solutions-hero.png"
              alt="Business team communicating"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          WHAT ARE YOU TRYING TO ACCOMPLISH
      ════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#e8e2d8] bg-white px-5 py-12 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>Quick navigation</Eyebrow>
          <h2 className="mt-3 text-[26px] font-extrabold dark:text-white">What are you trying to accomplish?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {accomplishItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.label}
                  className="flex items-center gap-2.5 rounded-full border border-[#e8e2d8] bg-[#f7f4ee] px-5 py-2.5 text-[13.5px] font-semibold text-[#1c2b26] transition hover:border-[#d9603f]/40 hover:bg-[#fdf3ee] dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:hover:border-[#d9603f]/40"
                >
                  <Icon size={14} className="text-[#d9603f]" />
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          NOT SURE WHERE TO START
      ════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#e8e2d8] bg-[#0f4338] px-5 py-12 dark:border-gray-800">
        <div className="mx-auto max-w-5xl">
          <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-[#f4a07a]">Not sure where to start?</p>
          <h2 className="mt-3 text-[22px] font-extrabold text-white">
            Not sure where to start? Tell us what you're after — we'll point you to the right solution.
          </h2>
          <p className="mt-3 max-w-xl text-[13.5px] leading-6 text-white/70">
            Answer one question about what your business needs. We'll match you to the right product combination.
          </p>
          <p className="mt-6 text-[12px] font-bold uppercase tracking-wider text-white/50">What are you trying to do?</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {notSureCards.map((c) => {
              const Icon = c.icon;
              return (
                <Link
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-[13.5px] font-semibold text-white transition hover:bg-white/10"
                >
                  <Icon size={15} className="shrink-0 text-[#f4a07a]" />
                  {c.label}
                </Link>
              );
            })}
          </div>
          <Link href="/contact-sales" className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#f4a07a] hover:underline">
            Talk to a solutions specialist <FiArrowRight size={13} />
          </Link>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          PICK THE OUTCOME
      ════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#e8e2d8] px-5 py-16 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <Eyebrow>All solutions</Eyebrow>
            <h2 className="mt-3 text-[28px] font-extrabold dark:text-white">Pick the outcome you're after</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {outcomes.map((o) => (
              <Link
                key={o.title + o.tag}
                href={o.href}
                className="group flex flex-col rounded-2xl border border-[#e8e2d8] bg-white p-6 transition hover:border-[#d9603f]/40 hover:shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <p className="text-[10.5px] font-semibold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  {o.tag}
                </p>
                <h3 className="mt-3 text-[15px] font-bold text-[#1c2b26] dark:text-white">{o.title}</h3>
                <ul className="mt-4 flex-1 space-y-2">
                  {o.checks.map((c) => <Check key={c}>{c}</Check>)}
                </ul>
                <span className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#d9603f] group-hover:underline">
                  Learn more <FiArrowRight size={12} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          SPLIT SECTIONS × 4
      ════════════════════════════════════════════════════════════ */}
      {splitSections.map((s) => {
        const BadgeIcon = s.imageBadge.icon;
        const content = (
          <div className="flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-12">
            <Eyebrow>{s.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-[28px] font-extrabold leading-tight dark:text-white sm:text-[32px]">
              {s.title.replace(s.titleAccent, "")}
              <span className="font-serif italic font-medium text-[#d9603f]"> {s.titleAccent}</span>
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-7 text-gray-600 dark:text-gray-400">{s.body}</p>
            <ul className="mt-5 space-y-2.5">
              {s.checks.map((c) => <Check key={c}>{c}</Check>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href={s.primaryCta.href} className={coralBtn}>
                {s.primaryCta.label} <FiArrowRight size={13} />
              </Link>
              <Link href={s.secondaryCta.href} className={outlineBtn}>
                {s.secondaryCta.label}
              </Link>
            </div>
          </div>
        );

        const image = (
          <div className="relative min-h-[280px] w-full lg:min-h-[420px]">
            <Image src={s.image} alt={s.imageAlt} fill className="object-cover" />
            {/* Floating badge */}
            {/* <div className="absolute bottom-5 left-5 flex items-center gap-2.5 rounded-xl bg-white/95 px-4 py-2.5 shadow-lg backdrop-blur-sm dark:bg-gray-900/95">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#d9603f]/10">
                <BadgeIcon size={13} className="text-[#d9603f]" />
              </span>
              <p className="text-[12.5px] font-semibold text-[#1c2b26] dark:text-white">{s.imageBadge.label}</p>
            </div> */}
          </div>
        );

        return (
          <section key={s.id} className={`border-t border-[#e8e2d8] dark:border-gray-800 ${s.bg}`}>
            <div className="mx-auto grid max-w-7xl overflow-hidden lg:grid-cols-2">
              {s.imageRight ? (
                <>{content}{image}</>
              ) : (
                <>{image}{content}</>
              )}
            </div>
          </section>
        );
      })}

      {/* ════════════════════════════════════════════════════════════
          COMMON SCENARIOS
      ════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#e8e2d8] bg-white px-5 py-14 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <Eyebrow>Scenarios</Eyebrow>
            <h2 className="mt-3 text-[26px] font-extrabold dark:text-white">A few more common scenarios</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {scenarios.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-2xl border border-[#e8e2d8] bg-[#f7f4ee] p-6 dark:border-gray-700 dark:bg-gray-800">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#d9603f]/10">
                    <Icon size={17} className="text-[#d9603f]" />
                  </span>
                  <h3 className="mt-4 text-[14px] font-bold dark:text-white">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-gray-500 dark:text-gray-400">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          EVERY SOLUTION — SAME PLATFORM
      ════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#e8e2d8] bg-[#f7f4ee] px-5 py-14 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-5xl text-center">
          <Eyebrow>The platform</Eyebrow>
          <h2 className="mt-3 text-[26px] font-extrabold dark:text-white">
            Every solution composes from the same platform
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[14px] leading-7 text-gray-600 dark:text-gray-400">
            Every Zoiko Local solution is built from the same five components. Use one or combine all five — the
            platform is designed to grow with you.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {platformItems.map((p) => {
              const Icon = p.icon;
              return (
                <Link
                  key={p.label}
                  href={p.href}
                  className="flex items-center gap-2.5 rounded-xl border border-[#e8e2d8] bg-white px-5 py-3.5 text-[13.5px] font-semibold text-[#1c2b26] shadow-sm transition hover:border-[#d9603f]/40 hover:bg-[#fdf3ee] dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                >
                  <Icon size={15} className="text-[#d9603f]" />
                  {p.label}
                </Link>
              );
            })}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/platform" className={coralBtn}>
              Explore the platform <FiArrowRight size={13} />
            </Link>
            <Link href="/plans-and-pricing" className={outlineBtn}>
              Compare plans
            </Link>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          AVAILABILITY DECIDES WHAT'S POSSIBLE
      ════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#e8e2d8] bg-white px-5 py-14 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <Eyebrow>Availability & plans</Eyebrow>
            <h2 className="mt-4 text-[28px] font-extrabold leading-tight dark:text-white">
              Availability decides{" "}
              <span className="font-serif italic font-medium text-[#d9603f]">what's possible.</span>
            </h2>
            <p className="mt-4 max-w-md text-[14px] leading-7 text-gray-600 dark:text-gray-400">
              Not every product or number type is available in every country. Pricing, verification requirements and
              feature availability all depend on your market, plan and number type. We'll always tell you what's
              available before you commit.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Check number availability by country before you start",
                "Some number types require verification or a local address",
                "Pricing is market-specific — see the pricing page for your region",
              ].map((c) => <Check key={c}>{c}</Check>)}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/get-a-local-number" className={coralBtn}>
                Start here <FiArrowRight size={13} />
              </Link>
              <Link href="/plans-and-pricing" className={outlineBtn}>
                Compare plans
              </Link>
            </div>
          </div>
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <div className="relative h-72 w-full sm:h-96">
              <Image
                src="/images/solutions/availability.png"
                alt="Team checking availability"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          BUILT WITH CLEAR CONTROLS
      ════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#e8e2d8] bg-[#f7f4ee] px-5 py-14 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <Eyebrow>Controls</Eyebrow>
            <h2 className="mt-3 text-[26px] font-extrabold dark:text-white">Built with clear controls</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {controls.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="rounded-2xl border border-[#e8e2d8] bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#d9603f]/10">
                    <Icon size={17} className="text-[#d9603f]" />
                  </span>
                  <h3 className="mt-4 text-[14.5px] font-bold dark:text-white">{c.title}</h3>
                  <p className="mt-2 text-[13px] leading-6 text-gray-500 dark:text-gray-400">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FAQ
      ════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#e8e2d8] bg-white px-5 py-14 dark:border-gray-800 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 text-center">
            <Eyebrow>FAQ</Eyebrow>
            <h2 className="mt-3 text-[26px] font-extrabold dark:text-white">Solutions questions, answered</h2>
          </div>
          <div>
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════════════════════
          FINAL CTA
      ════════════════════════════════════════════════════════════ */}
      <section className="border-t border-[#e8e2d8] bg-[#d9603f] px-5 py-16 text-center dark:border-gray-800">
        <div className="mx-auto max-w-2xl">
          <Eyebrow light>Get started</Eyebrow>
          <h2 className="mt-3 text-[30px] font-extrabold leading-tight text-white sm:text-[36px]">
            Find your local number solution.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[14px] leading-7 text-white/80">
            Start with a local number, add calling, video and AI Receptionist as you grow — one platform, every solution.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/get-a-local-number" className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-[14px] font-semibold text-[#d9603f] transition hover:bg-gray-50">
              Find a local number <FiArrowRight size={14} />
            </Link>
            <Link href="/contact-sales" className={outlineDark}>
              Talk to Sales
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}