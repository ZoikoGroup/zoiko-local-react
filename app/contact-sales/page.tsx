"use client";

import { useState, type ReactNode, type SVGProps } from "react";

/**
 * All icons are inline SVG (stroke="currentColor") so they inherit color from
 * the wrapping span — no /public/icons/*.svg files required. Swap any icon
 * body if you want a different visual; the wrapper classes control size/tint.
 */
function Icon({ children, ...props }: SVGProps<SVGSVGElement> & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {children}
    </svg>
  );
}

const Icons = {
  pin: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </Icon>
  ),
  externalLink: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
    </Icon>
  ),
  mic: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <rect x="9" y="2" width="6" height="12" rx="3" />
      <path d="M5 10a7 7 0 0 0 14 0" />
      <path d="M12 19v3" />
      <path d="M8 22h8" />
    </Icon>
  ),
  building: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 8h1M14 8h1M9 12h1M14 12h1M9 16h1M14 16h1" />
      <path d="M10 21v-3h4v3" />
    </Icon>
  ),
  phone: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </Icon>
  ),
  video: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <rect x="2" y="6" width="14" height="12" rx="2" />
      <path d="M16 10.5 22 7v10l-6-3.5Z" />
    </Icon>
  ),
  pulse: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <path d="M3 12h4l2-7 4 14 2-7h6" />
    </Icon>
  ),
  users: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20a5.7 5.7 0 0 1 11 0" />
      <path d="M16 10.2a3 3 0 1 0-1-5.9" />
      <path d="M15 13.5c2.4.4 4.3 2 4.9 4.5" />
    </Icon>
  ),
  personCheck: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <circle cx="10" cy="8" r="3.2" />
      <path d="M4 20a6 6 0 0 1 10.5-3.9" />
      <path d="m16 17 2 2 3.5-3.5" />
    </Icon>
  ),
  monitor: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <rect x="2.5" y="4" width="19" height="13" rx="1.5" />
      <path d="M8 21h8M12 17v4" />
    </Icon>
  ),
  shield: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <path d="M12 3 4 6v6c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V6l-8-3Z" />
    </Icon>
  ),
  person: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M4.5 20a7.5 7.5 0 0 1 15 0" />
    </Icon>
  ),
  globe: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18 14 14 0 0 1 0-18Z" />
    </Icon>
  ),
  check: (p: SVGProps<SVGSVGElement>) => (
    <Icon strokeWidth={2.5} {...p}>
      <path d="M5 12.5 9.5 17 19 7" />
    </Icon>
  ),
  checkSmall: (p: SVGProps<SVGSVGElement>) => (
    <Icon strokeWidth={2.5} {...p}>
      <path d="M4 8.5 7 11.5 12 5" />
    </Icon>
  ),
  arrowRight: (p: SVGProps<SVGSVGElement>) => (
    <Icon strokeWidth={2} {...p}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </Icon>
  ),
  info: (p: SVGProps<SVGSVGElement>) => (
    <Icon {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 11v5.5M12 8v.01" />
    </Icon>
  ),
};

function Eyebrow({
  children,
  pill = false,
  dash = false,
}: {
  children: ReactNode;
  pill?: boolean;
  dash?: boolean;
}) {
  const inner = (
    <span className="inline-flex items-center text-xs font-bold uppercase tracking-[0.18em] text-[#d9603f]">
      {dash ? (
        <span className="mr-2 inline-block h-px w-4 bg-[#d9603f] align-middle" />
      ) : (
        <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#d9603f] align-middle" />
      )}
      {children}
    </span>
  );
  if (!pill) return <p>{inner}</p>;
  return <p className="inline-flex rounded-full bg-[#f6e4dc] px-4 py-1.5 dark:bg-[#d9603f]/15">{inner}</p>;
}

function SectionHead({
  eyebrow,
  title,
  sub,
  onDark = false,
  dash = false,
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  onDark?: boolean;
  dash?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow pill={!dash} dash={dash}>
        {eyebrow}
      </Eyebrow>
      <h2
        className={`mt-4 text-3xl font-extrabold leading-snug sm:text-4xl ${
          onDark ? "text-white" : "dark:text-white"
        }`}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={`mx-auto mt-4 max-w-xl text-sm leading-relaxed ${
            onDark ? "text-white/70" : "text-gray-600 dark:text-gray-400"
          }`}
        >
          {sub}
        </p>
      )}
    </div>
  );
}

const coralBtn =
  "inline-flex items-center gap-2 rounded-full bg-[#d9603f] px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#c25030]";
const lightBtn =
  "inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1c2b26] shadow-sm ring-1 ring-black/5 transition-colors hover:bg-gray-50 dark:bg-gray-800 dark:text-white dark:ring-white/10";
const outlineDarkBtn =
  "inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10";
const outlineTealBtn =
  "inline-flex items-center gap-2 rounded-full border border-[#0f4338]/25 px-7 py-3.5 text-sm font-semibold text-[#0f4338] transition-colors hover:bg-[#0f4338]/5 dark:border-white/25 dark:text-white dark:hover:bg-white/10";

const cardOnDark = "rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-white/[0.04] dark:ring-white/10";
const cardOnLight = "rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10";

const darkBand = "bg-[#0d100f] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950";

/** Icon chip: tinted rounded-xl square holding a 20px stroke icon. */
function IconChip({
  icon: IconCmp,
  tint = "bg-[#f6e4dc]",
  iconClass = "text-[#0f4338]",
}: {
  icon: (p: SVGProps<SVGSVGElement>) => JSX.Element;
  tint?: string;
  iconClass?: string;
}) {
  return (
    <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${tint} dark:bg-white/5`}>
      <IconCmp className={`h-5 w-5 ${iconClass} dark:text-white`} />
    </span>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const heroChips = [
  "Local numbers",
  "Calling",
  "Video",
  "AI Receptionist",
  "Multi-location",
  "Migration support",
];

const salesPaths: {
  icon: (p: SVGProps<SVGSVGElement>) => JSX.Element;
  title: string;
  desc: string;
  cta: string;
  selected?: boolean;
}[] = [
  {
    icon: Icons.pin,
    title: "I need business numbers",
    desc: "Local presence, new markets, availability, porting.",
    cta: "Check Number Options",
    selected: true,
  },
  {
    icon: Icons.externalLink,
    title: "I'm switching from Skype",
    desc: "Continuity and workflows without disruption.",
    cta: "Build Migration Plan",
  },
  {
    icon: Icons.mic,
    title: "I need AI call handling",
    desc: "Missed calls, after-hours, intake, routing.",
    cta: "Plan AI Receptionist",
  },
  {
    icon: Icons.building,
    title: "I manage teams or locations",
    desc: "SMB, enterprise, franchises, multi-office.",
    cta: "Talk to Sales",
  },
];

const whyTalk: { icon: (p: SVGProps<SVGSVGElement>) => JSX.Element; title: string; desc: string }[] = [
  {
    icon: Icons.pin,
    title: "Choose the right setup",
    desc: "Number type, country coverage, routing, call handling and plan structure.",
  },
  {
    icon: Icons.externalLink,
    title: "Design a migration path",
    desc: "Move from Skype, legacy VoIP, personal phones or disconnected branches.",
  },
  {
    icon: Icons.pulse,
    title: "Model your call flows",
    desc: "Sales, support, bookings, accounts, branches, after-hours and AI Receptionist.",
  },
  {
    icon: Icons.users,
    title: "Prepare implementation",
    desc: "Teams, users, numbers, permissions, billing and support.",
  },
];

const solutionMap: { icon: (p: SVGProps<SVGSVGElement>) => JSX.Element; title: string; desc: string }[] = [
  {
    icon: Icons.pin,
    title: "We need local presence",
    desc: "Local Numbers + Calling — look local, answer professionally, expand reach.",
  },
  {
    icon: Icons.phone,
    title: "Better business calling",
    desc: "Calling + Routing + Team controls — a business-grade voice workflow.",
  },
  {
    icon: Icons.video,
    title: "Meetings & remote calls",
    desc: "Video + Calling — discovery calls, demos and internal meetings, connected.",
  },
  {
    icon: Icons.mic,
    title: "We miss too many calls",
    desc: "AI Receptionist + Calling — answer, qualify, route and capture.",
  },
  {
    icon: Icons.externalLink,
    title: "Replacing Skype",
    desc: "Numbers + Calling + Video + AI Receptionist — upgrade the operating model.",
  },
  {
    icon: Icons.building,
    title: "Multiple teams / branches",
    desc: "For Business + Pricing + Sales — scale-ready comms with governance.",
  },
];

const migrationSteps = [
  { n: 1, title: "Assess", desc: "Tell us how you use Skype, VoIP, mobile or legacy calling today." },
  { n: 2, title: "Design", desc: "We map numbers, users, routing, video, AI Receptionist and fallbacks." },
  { n: 3, title: "Prepare", desc: "We identify what to move, replace and simplify." },
  { n: 4, title: "Launch", desc: "Your team moves to a clearer workspace with support." },
  { n: 5, title: "Optimize", desc: "Review missed calls, routing, AI capture and plan fit." },
];

const enterpriseCards: { icon: (p: SVGProps<SVGSVGElement>) => JSX.Element; title: string; desc: string }[] = [
  {
    icon: Icons.personCheck,
    title: "Account planning",
    desc: "Implementation support, permissions and call-handling controls.",
  },
  {
    icon: Icons.monitor,
    title: "Usage visibility",
    desc: "See activity and coverage across teams and locations.",
  },
  {
    icon: Icons.shield,
    title: "Support escalation",
    desc: "Clear escalation paths for business-critical needs.",
  },
];

const needHelpOptions = [
  { label: "Local numbers", selected: true },
  { label: "Calling" },
  { label: "Video" },
  { label: "AI Receptionist" },
  { label: "Skype migration" },
  { label: "Multi-location" },
  { label: "Pricing" },
  { label: "Partner enquiry" },
];

const whatHappensNext = [
  "A Zoiko Local specialist reviews your request.",
  "We come back with the best next step using your preferred method.",
  "For high-volume, multi-location or migration requests, we may suggest a short discovery call before recommending plans.",
];

const prepareForCall = [
  "Your current setup (Skype, VoIP, mobile, landline or other).",
  "Countries, cities or local numbers required.",
  "Users, branches, departments and call volume.",
  "Whether you need AI Receptionist, after-hours, routing, video or migration.",
  "Preferred launch date and any compliance requirements.",
];

const trustCards: { icon: (p: SVGProps<SVGSVGElement>) => JSX.Element; title: string; desc: string }[] = [
  {
    icon: Icons.monitor,
    title: "Business-grade setup",
    desc: "Designed for business workflows, team routing and customer contact.",
  },
  {
    icon: Icons.person,
    title: "Human-first support",
    desc: "A specialist helps configure before you commit to a complex setup.",
  },
  {
    icon: Icons.mic,
    title: "Responsible AI path",
    desc: "AI Receptionist is configurable with disclosure, consent, handoff and review.",
  },
  {
    icon: Icons.globe,
    title: "Market-dependent",
    desc: "Numbers, calling, AI, recording and routing vary by country, plan and config.",
  },
];

const faqs = [
  {
    q: "Who should contact sales?",
    a: "Anyone choosing numbers or plans for a business, migrating from Skype or legacy calling, needing AI Receptionist configured for their workflow, or managing multiple teams, locations or a partner relationship.",
  },
  {
    q: "Can I still start on my own?",
    a: "Yes. Self-serve stays open at any time for standard setups. Sales is there when your requirements are bigger, higher-value or need a specialist's input before you commit.",
  },
  {
    q: "Can sales help me replace Skype?",
    a: "Yes. We'll map your current numbers, users and routing, then design a migration path — including fallbacks — so the switch doesn't disrupt your team or customers.",
  },
  {
    q: "Can I buy local numbers for multiple countries?",
    a: "Yes. Tell us the countries, cities or number types you need and we'll confirm availability, lead time and any verification required for each market.",
  },
  {
    q: "Can sales help with AI Receptionist?",
    a: "Yes. A specialist will help configure disclosure, consent, handoff and review settings so AI call handling fits your workflow responsibly.",
  },
  {
    q: "How quickly will Zoiko respond?",
    a: "A specialist reviews every request and comes back with the best next step using your preferred contact method — email or phone.",
  },
  {
    q: "Is this the right place for support?",
    a: "This form is for new sales enquiries. If you have an existing account issue, Help & Support may get you a faster answer.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function ContactSales() {
  const [open, setOpen] = useState<number | null>(null);
  const [needHelp, setNeedHelp] = useState<Set<string>>(
    () => new Set(needHelpOptions.filter((o) => o.selected).map((o) => o.label))
  );
  const [agreed, setAgreed] = useState(false);

  const toggleHelp = (label: string) =>
    setNeedHelp((prev) => {
      const next = new Set(prev);
      next.has(label) ? next.delete(label) : next.add(label);
      return next;
    });

  return (
    <main className="bg-white font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">
      {/* ─── HERO ─── */}
      <section className="bg-[#f6ece5] px-4 py-20 text-center sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-3xl">
          <Eyebrow pill>Sales consultation for business communications</Eyebrow>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
            Talk to Zoiko Local <span className="text-[#d9603f]">Sales.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Get expert help choosing local numbers, calling, video, AI Receptionist, migration, and business
            communication workflows for your team.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className={coralBtn}>
              Request Sales Consultation <Icons.arrowRight className="h-4 w-4" />
            </button>
            <button className={lightBtn}>Build My Migration Plan</button>
            <button className={lightBtn}>Check Number Availability</button>
          </div>

          <ul className="mx-auto mt-7 flex max-w-2xl flex-wrap justify-center gap-x-6 gap-y-2">
            {heroChips.map((c) => (
              <li key={c} className="flex items-center gap-1.5 text-sm font-semibold text-[#0f4338] dark:text-white">
                <Icons.checkSmall className="h-4 w-4 text-[#1f8a6b] dark:text-[#34d39e]" /> {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ─── SALES PATHS ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            dash
            eyebrow="Sales paths"
            title={
              <>
                Tell us who you are — <span className="text-[#d9603f]">we&rsquo;ll route</span>
                <br className="hidden sm:block" />
                <span className="text-[#d9603f]">you right.</span>
              </>
            }
            sub="Self-identify before the form so your request reaches the right specialist."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {salesPaths.map((p) => (
              <div
                key={p.title}
                className={`rounded-2xl bg-white p-6 dark:bg-gray-800 ${
                  p.selected
                    ? "ring-2 ring-[#d9603f]"
                    : "ring-1 ring-black/10 dark:ring-white/10"
                }`}
              >
                <IconChip icon={p.icon} />
                <h3 className="mt-5 text-base font-bold dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#d9603f] hover:underline">
                  {p.cta} <Icons.arrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY TALK TO SALES ─── */}
      <section className="bg-[#f6ece5] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Why talk to sales"
            title={
              <>
                Self-serve stays open.
                <br className="hidden sm:block" />
                <span className="text-[#d9603f]">Sales helps when it&rsquo;s complex.</span>
              </>
            }
            sub="Start on your own any time — or get a specialist when the setup is bigger or higher-value."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {whyTalk.map((w) => (
              <div key={w.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <IconChip icon={w.icon} />
                <h3 className="mt-5 text-base font-bold dark:text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTION SELECTOR ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Solution selector"
            title={
              <>
                Match your need to <span className="text-[#d9603f]">the right</span>
                <br className="hidden sm:block" />
                <span className="text-[#d9603f]">product path.</span>
              </>
            }
            sub="A quick map from what you're trying to do to how Zoiko Local fits."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutionMap.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/10">
                <IconChip icon={s.icon} />
                <h3 className="mt-5 text-base font-bold dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MIGRATION SUPPORT ─── */}
      <section className="bg-[#f6ece5] px-4 py-20 text-center sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            dash
            eyebrow="Migration support"
            title={
              <>
                Move beyond Skype <span className="text-[#d9603f]">without the confusion.</span>
              </>
            }
            sub="A guided path from legacy calling to a modern workspace — five clear stages."
          />

          <div className="mt-12 grid gap-5 text-left sm:grid-cols-3 lg:grid-cols-5">
            {migrationSteps.map((s) => (
              <div key={s.n} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#f6e4dc] text-xs font-bold text-[#d9603f] dark:bg-[#d9603f]/15">
                  {s.n}
                </span>
                <h3 className="mt-4 text-base font-bold dark:text-white">{s.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>

          <button className={`${coralBtn} mt-10`}>Build My Migration Plan</button>
        </div>
      </section>

      {/* ─── ENTERPRISE & MULTI-LOCATION ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            dash
            eyebrow="Enterprise & multi-location"
            title={
              <>
                For larger teams, branches and
                <br className="hidden sm:block" />
                <span className="text-[#d9603f]">cross-border operations.</span>
              </>
            }
            sub="A dedicated path for franchises, regional offices, distributed workforces and multi-country deployments."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {enterpriseCards.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-6 text-center ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/10">
                <div className="flex justify-center">
                  <IconChip icon={c.icon} />
                </div>
                <h3 className="mt-5 text-base font-bold dark:text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 flex items-center justify-center gap-2 text-center text-xs text-gray-500 dark:text-gray-400">
            <Icons.info className="h-4 w-4 flex-shrink-0" />
            Capabilities are subject to plan, country, carrier, number type and configuration.
          </p>
        </div>
      </section>

      {/* ─── FORM ─── */}
      <section className="bg-[#f6ece5] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            dash
            eyebrow="Tell us what you need"
            title={
              <>
                Tell us what your business <span className="text-[#d9603f]">needs.</span>
              </>
            }
            sub="We'll use your answers to route your request to the right Zoiko Local specialist."
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_380px]">
            {/* Form card */}
            <form className="rounded-3xl bg-white p-8 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                Contact details
              </p>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold dark:text-white">Name</span>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold dark:text-white">Business email</span>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold dark:text-white">Phone number</span>
                  <input
                    type="tel"
                    placeholder="Optional"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold dark:text-white">Preferred contact method</span>
                  <select className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white">
                    <option>Email</option>
                    <option>Phone</option>
                  </select>
                </label>
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                Business profile
              </p>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold dark:text-white">Company name</span>
                  <input
                    type="text"
                    placeholder="Acme Trade Co"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold dark:text-white">Website</span>
                  <input
                    type="text"
                    placeholder="acme.com (optional)"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold dark:text-white">Country</span>
                  <input
                    type="text"
                    placeholder="United States"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold dark:text-white">Industry</span>
                  <select className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white">
                    <option>Select...</option>
                  </select>
                </label>
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                What do you need help with?
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {needHelpOptions.map((o) => {
                  const active = needHelp.has(o.label);
                  return (
                    <button
                      type="button"
                      key={o.label}
                      onClick={() => toggleHelp(o.label)}
                      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                        active
                          ? "border-[#d9603f] bg-[#fdece6] text-[#d9603f] dark:bg-[#d9603f]/15"
                          : "border-black/10 text-[#1c2b26] hover:bg-gray-50 dark:border-white/15 dark:text-white dark:hover:bg-white/5"
                      }`}
                    >
                      <Icons.checkSmall className={`h-3.5 w-3.5 ${active ? "text-[#d9603f]" : "text-gray-400"}`} />
                      {o.label}
                    </button>
                  );
                })}
              </div>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">
                Scale & urgency
              </p>
              <div className="mt-4 grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-sm font-semibold dark:text-white">Number of users</span>
                  <input
                    type="text"
                    placeholder="1–5"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold dark:text-white">Locations</span>
                  <input
                    type="text"
                    placeholder="1"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold dark:text-white">Countries required</span>
                  <input
                    type="text"
                    placeholder="e.g. US, UK"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white"
                  />
                </label>
                <label className="block">
                  <span className="text-sm font-semibold dark:text-white">Timeline</span>
                  <input
                    type="text"
                    placeholder="This month"
                    className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white"
                  />
                </label>
              </div>

              <label className="mt-8 block">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-gray-500 dark:text-gray-400">Message</span>
                <textarea
                  rows={3}
                  placeholder="Tell us about your current setup, goals or anything specific (optional)."
                  className="mt-2 w-full resize-none rounded-xl border border-black/10 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-[#d9603f] focus:outline-none focus:ring-1 focus:ring-[#d9603f] dark:border-white/15 dark:bg-white/5 dark:text-white"
                />
              </label>

              <label className="mt-6 flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-400">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-black/20 text-[#d9603f] focus:ring-[#d9603f]"
                />
                I agree that Zoiko Local may contact me about this enquiry, per the{" "}
                <a href="#" className="font-semibold text-[#d9603f] hover:underline">
                  Privacy Policy
                </a>
                .
              </label>

              <button type="submit" className={`${coralBtn} mt-5 w-full justify-center`}>
                Request Sales Consultation
              </button>
            </form>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-3xl bg-gradient-to-br from-[#0f4338] to-[#0a2b23] p-7">
                <h3 className="text-base font-bold text-white">What happens next</h3>
                <ol className="mt-5 space-y-4">
                  {whatHappensNext.map((t, i) => (
                    <li key={t} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/15 text-[11px] font-bold text-white">
                        {i + 1}
                      </span>
                      <span className="text-sm leading-relaxed text-white/80">{t}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-3xl bg-white p-7 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <h3 className="text-base font-bold dark:text-white">Prepare for the call</h3>
                <ul className="mt-5 space-y-3">
                  {prepareForCall.map((t) => (
                    <li key={t} className="flex gap-2.5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                      <Icons.checkSmall className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#1f8a6b] dark:text-[#34d39e]" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs leading-relaxed text-gray-500 dark:text-gray-400">
                  Have an existing account issue?{" "}
                  <a href="#" className="font-semibold text-[#d9603f] hover:underline">
                    Help & Support
                  </a>{" "}
                  may be faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TRUST & COMPLIANCE ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            dash
            eyebrow="Trust & compliance"
            title={
              <>
                Serious support, <span className="text-[#d9603f]">honestly scoped.</span>
              </>
            }
            sub="Reassurance for regulated and enterprise buyers — without overpromising."
          />

          <div className="mt-12 grid gap-5 text-center sm:grid-cols-2 lg:grid-cols-4">
            {trustCards.map((c) => (
              <div key={c.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/10 dark:bg-gray-800 dark:ring-white/10">
                <div className="flex justify-center">
                  <IconChip icon={c.icon} />
                </div>
                <h3 className="mt-5 text-base font-bold dark:text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#f6ece5] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-3xl">
          <SectionHead dash eyebrow="FAQ" title={<>Before you reach out, <span className="text-[#d9603f]">answered.</span></>} />

          <div className="mt-10 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div
                  key={f.q}
                  className="rounded-2xl bg-white p-1 shadow-sm ring-1 ring-black/5 dark:bg-white/[0.04] dark:ring-white/10"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-[#1c2b26] dark:text-white">{f.q}</span>
                    <span
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-lg leading-none ${
                        isOpen ? "bg-[#d9603f] text-white" : "bg-[#f6e4dc] text-[#d9603f] dark:bg-white/10"
                      }`}
                    >
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>
                  {isOpen && (
                    <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#f6ece5] px-4 pb-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-[#0f4338] to-[#0a2b23] px-6 py-16 text-center sm:px-10">
          <Eyebrow dash>Let&rsquo;s build it together</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-xl text-3xl font-extrabold leading-snug text-white sm:text-4xl">
            Let&rsquo;s design the right Zoiko Local setup for your business.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/70">
            Whether you&rsquo;re replacing Skype, expanding into new markets, or building a smarter call-handling
            workflow, Zoiko Local Sales can help you choose the right path.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className={coralBtn}>Request Sales Consultation</button>
            <button className={lightBtn}>Build My Migration Plan</button>
            <button className={outlineDarkBtn}>Check Number Availability</button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactSales;
export { ContactSales };