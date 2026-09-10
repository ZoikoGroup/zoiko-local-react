"use client";

import { useState, type ReactNode } from "react";

/**
 * Drop your own assets in /public; paths below resolve from there
 * (e.g. src="/icons/check.svg" → public/icons/check.svg). Swap any path.
 * Plain <img> so no next/image config is required.
 */
function Img({
  src,
  alt = "",
  className = "h-10 w-10 rounded-xl",
  cover = false,
}: {
  src: string;
  alt?: string;
  className?: string;
  cover?: boolean;
}) {
  return (
    <img src={src} alt={alt} loading="lazy" className={`${cover ? "object-cover" : "object-contain"} ${className}`} />
  );
}

function Eyebrow({ children, pill = false }: { children: ReactNode; pill?: boolean }) {
  const inner = (
    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#d9603f]">
      <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#d9603f] align-middle" />
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
}: {
  eyebrow: string;
  title: ReactNode;
  sub?: string;
  onDark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Eyebrow pill>{eyebrow}</Eyebrow>
      <h2 className={`mt-4 text-3xl font-extrabold leading-snug sm:text-4xl ${onDark ? "text-white" : "dark:text-white"}`}>
        {title}
      </h2>
      {sub && (
        <p className={`mx-auto mt-4 max-w-xl text-sm leading-relaxed ${onDark ? "text-white/70" : "text-gray-600 dark:text-gray-400"}`}>
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
const featureCard = "rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10";

// ─── SHARED IMAGE PATHS ───────────────────────────────────────────────────────
const IC = { check: "/icons/check.svg" };

// ─── DATA ────────────────────────────────────────────────────────────────────
const heroChecks = ["Local support numbers customers recognize", "Routing for teams, departments, and hours", "AI Receptionist fallback for missed calls"];

const heroRouting = [
  { label: "Support", status: "Open", dot: "bg-[#d9603f]" },
  { label: "Billing", status: "Routed", dot: "bg-[#34d39e]" },
  { label: "AI Receptionist", status: "After hrs", dot: "bg-[#e8a03b]", highlight: true },
];

const gapCards = [
  { title: "Missed calls lose customers", desc: "An unanswered support call often becomes a lost customer — and a poor first impression.", icon: "/icons/phone.svg" },
  { title: "Personal numbers do not scale", desc: "Support that depends on individual mobiles breaks down as volume grows.", icon: "/icons/users.svg" },
  { title: "Customers need the right route", desc: "Without routing, inquiries bounce between staff, email, chat and personal phones.", icon: "/icons/route.svg" },
  { title: "After-hours inquiries still matter", desc: "Customers reach out outside business hours — and expect to be heard.", icon: "/icons/clock.svg" },
];

const solution = [
  { title: "Local support numbers", desc: "Give customers a familiar number they recognize and trust.", icon: "/icons/pin.svg", tint: "bg-[#fbe9e3]" },
  { title: "Inbound call routing", desc: "Route to support, sales, billing or after-hours teams.", icon: "/icons/route.svg", tint: "bg-[#fbe9e3]" },
  { title: "AI Receptionist fallback", desc: "Capture inquiries when no one is available.", icon: "/icons/ai-bot.svg", tint: "bg-[#fdf0db]" },
  { title: "Video escalation", desc: "Move to video when an issue needs visual clarity.", icon: "/icons/video.svg", tint: "bg-[#e3f3ee]" },
  { title: "Missed-call protection", desc: "Reduce lost calls with capture and follow-up.", icon: "/icons/shield-check.svg", tint: "bg-[#fbe9e3]" },
  { title: "Multi-market support", desc: "Offer local support numbers in the markets you serve.", icon: "/icons/globe.svg", tint: "bg-[#fbe9e3]" },
];

const steps = [
  { n: 1, title: "Choose support market", desc: "Pick the market where customers need support." },
  { n: 2, title: "Get a support number", desc: "Reserve a local support number customers trust." },
  { n: 3, title: "Define routing rules", desc: "Route by department, team and hours." },
  { n: 4, title: "Add AI Receptionist", desc: "Capture inquiries when no one is available." },
  { n: 5, title: "Improve as volume grows", desc: "Refine routing and capacity over time." },
];

const useCases = [
  { title: "Main support line", desc: "One trusted number for inbound help.", icon: "/icons/phone.svg", tint: "bg-[#fbe9e3]" },
  { title: "After-sales support", desc: "Help customers after the purchase.", icon: "/icons/hand.svg", tint: "bg-[#fbe9e3]" },
  { title: "Billing / account questions", desc: "Route account and billing calls cleanly.", icon: "/icons/briefcase.svg", tint: "bg-[#fbe9e3]" },
  { title: "E-commerce support", desc: "Support shoppers and order issues.", icon: "/icons/cart.svg", tint: "bg-[#fbe9e3]" },
  { title: "Service-business support", desc: "Handle bookings, estimates and follow-ups.", icon: "/icons/shield-check.svg", tint: "bg-[#fbe9e3]" },
  { title: "Remote support teams", desc: "Coordinate distributed support staff.", icon: "/icons/users.svg", tint: "bg-[#fbe9e3]" },
  { title: "New-market support", desc: "Offer local support in new regions.", icon: "/icons/globe.svg", tint: "bg-[#fbe9e3]" },
  { title: "After-hours intake", desc: "Capture calls outside business hours.", icon: "/icons/clock.svg", tint: "bg-[#fdf0db]" },
];

const platform = [
  { name: "Local Numbers", desc: "Local support numbers customers recognize.", cta: "Explore Local Numbers", icon: "/icons/pin.svg", tint: "bg-[#fbe9e3]" },
  { name: "Calling", desc: "Direct inbound calling with a professional identity.", cta: "Explore Calling", icon: "/icons/phone.svg", tint: "bg-[#fbe9e3]" },
  { name: "Video", desc: "Escalate to video when an issue needs clarity.", cta: "Explore Video", icon: "/icons/video.svg", tint: "bg-[#e3f3ee]" },
  { name: "AI Receptionist", desc: "Capture inquiries when no one is available.", cta: "Explore AI Receptionist", icon: "/icons/ai-bot.svg", tint: "bg-[#fdf0db]" },
];

const compare = [
  ["Customers may not know who to contact", "One trusted support number"],
  ["Calls depend on individuals", "Built around teams and routing"],
  ["Urgent issues can be delayed", "Direct inbound calling"],
  ["Missed calls are hard to recover", "AI Receptionist can capture inquiries"],
  ["Weak support identity", "Professional local support presence"],
  ["Hard to scale by market", "Add numbers by country, region or team"],
  ["Fragmented customer experience", "Consistent customer communication layer"],
];

const scenarios = [
  { title: "Urgent customer help", desc: "A high-priority issue reaches a live agent fast, with clear routing." },
  { title: "The team is busy", desc: "AI Receptionist captures the inquiry so nothing is lost." },
  { title: "Support split by department", desc: "Billing, technical and account calls route to the right desk." },
  { title: "Customer in another market", desc: "A local support number keeps the experience familiar." },
  { title: "Issue needs video clarity", desc: "Escalate to video to resolve complex problems faster." },
  { title: "After-hours inquiry", desc: "Out-of-hours calls are captured and queued for follow-up.", accent: true },
];

const markets = [
  { name: "United States", flag: "/flags/us.svg" },
  { name: "United Kingdom", flag: "/flags/gb.svg" },
  { name: "Jamaica", flag: "/flags/jm.svg" },
  { name: "Canada", flag: "/flags/ca.svg" },
  { name: "Nigeria", flag: "/flags/ng.svg" },
  { name: "South Africa", flag: "/flags/za.svg" },
];
const regions = ["Caribbean", "Europe", "Africa", "North America"];

const scaling = [
  { title: "Add support numbers by market", desc: "Offer local support as you expand.", icon: "/icons/pin.svg" },
  { title: "Route by department / hours", desc: "Direct calls to the right desk at the right time.", icon: "/icons/route.svg" },
  { title: "Add staff", desc: "Grow your support team on one line.", icon: "/icons/users.svg" },
  { title: "Use AI Receptionist", desc: "Capture overflow and after-hours calls.", icon: "/icons/ai-bot.svg" },
  { title: "Add video", desc: "Resolve complex issues face-to-face.", icon: "/icons/video.svg" },
  { title: "Track support demand", desc: "Understand volume before and after purchase.", icon: "/icons/trend.svg" },
];

const faqs = [
  { q: "How do I set up a customer support number?", a: "Choose a support market, get a local support number, define routing rules, and add AI Receptionist for fallback. Availability varies by country and number type." },
  { q: "What is a customer support phone system?", a: "A cloud-based setup that gives your business a trusted support number with calling, routing, video escalation and AI Receptionist support — so customers reach the right team." },
  { q: "Can AI Receptionist answer customer support calls?", a: "Yes. The AI Receptionist captures and qualifies inquiries when your team is busy or after hours, then routes or logs them for follow-up." },
  { q: "Can support calls be routed to the right department?", a: "Yes. Configure routing by team, department, hours or availability so billing, technical and account calls reach the right desk." },
  { q: "Can Zoiko Local help reduce missed customer calls?", a: "Yes. Missed-call protection with capture and follow-up, plus AI Receptionist fallback, reduces lost calls and protects first impressions." },
  { q: "Can I get a local support number in another country?", a: "Yes. Add local support numbers by country or region from one workspace, subject to availability and verification." },
  { q: "Can small businesses use Zoiko Local for support calls?", a: "Yes. Start with one trusted support number and scale routing, staff and markets as your support volume grows." },
  { q: "Is Zoiko Local a replacement for Skype Number?", a: "Yes. It's built to replace Skype Numbers for customer support. Zoiko Local is not affiliated with or endorsed by Microsoft." },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
function CustomerSupport() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="bg-white font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">
      {/* ─── HERO ─── */}
      <section className="bg-[#f6ece5] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow pill>Customer support</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
              Customer support phone numbers and <span className="text-[#d9603f]">call handling</span> for business.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Make it easier for customers to reach your business and easier for your team to respond. Zoiko Local helps
              companies set up trusted support numbers, route calls, reduce missed inquiries, and use AI Receptionist
              support when no one is available.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className={coralBtn}>Set Up a Support Number</button>
              <button className={lightBtn}>Explore AI Receptionist</button>
            </div>
            <a href="#" className="mt-4 inline-block text-sm font-semibold text-[#d9603f] hover:underline">See Pricing →</a>
            <div className="mt-5 flex max-w-md items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 text-sm shadow-sm ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <span className="text-gray-600 dark:text-gray-400">Replacing Skype Number for customer support?</span>
              <a href="#" className="shrink-0 font-semibold text-[#d9603f] hover:underline">Switch from Skype →</a>
            </div>
            <ul className="mt-6 space-y-2">
              {heroChecks.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm font-medium dark:text-gray-300">
                  <Img src={IC.check} alt="" className="h-4 w-4" /> {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Support line card */}
          <div className="relative">
            <div className="absolute -top-6 left-6 z-10 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold shadow-lg ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <Img src="/icons/pin.svg" alt="" className="h-4 w-4" /> Reason captured
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <div className="flex items-start justify-between rounded-2xl bg-[#16233a] p-5 text-white">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Support line</p>
                  <p className="mt-1 text-xl font-extrabold">+1 (800) 555-0188</p>
                </div>
                <Img src="/flags/us.svg" alt="US" cover className="h-7 w-9 rounded-md" />
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#fbf2ee] p-4 dark:bg-gray-900/40">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9603f]">
                  <Img src="/icons/phone.svg" alt="" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold dark:text-white">Incoming · Support</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Reason: billing question</p>
                </div>
              </div>
              <p className="mt-4 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Routing</p>
              <div className="mt-2 space-y-2">
                {heroRouting.map((r) => (
                  <div
                    key={r.label}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 ${
                      r.highlight ? "bg-[#e3f3ee] dark:bg-[#34d39e]/10" : "border border-gray-100 dark:border-gray-700"
                    }`}
                  >
                    <span className="flex items-center gap-2.5 text-sm font-medium dark:text-white">
                      <span className={`h-2 w-2 rounded-full ${r.dot}`} /> {r.label}
                    </span>
                    <span className={`text-xs font-semibold ${r.highlight ? "rounded-full bg-[#163a2e] px-2.5 py-0.5 text-white" : "text-gray-400"}`}>
                      {r.status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-3 flex items-center gap-2 text-xs font-semibold text-[#1f8a6b]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#1f8a6b]" /> Inquiry captured — follow-up ready
              </p>
            </div>
            <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold shadow-lg ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <Img src="/icons/shield-check.svg" alt="" className="h-4 w-4" /> Follow-up ready
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE REACHABILITY GAP ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="The reachability gap"
            title="Customers lose confidence when they cannot reach you."
            sub="Every missed call can become a missed customer. These are the support gaps that quietly erode trust."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {gapCards.map((g) => (
              <div key={g.title} className={featureCard}>
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#fbe1da] dark:bg-[#d9603f]/15">
                  <Img src={g.icon} alt="" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold dark:text-white">{g.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE SOLUTION ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="The solution"
            title={<>One trusted support number. Smarter call handling behind it.</>}
            sub="Position Zoiko Local as the front door for customer communication."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solution.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${s.tint} dark:bg-white/5`}>
                  <Img src={s.icon} alt="" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button className={coralBtn}>Set Up a Support Number</button>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="How it works" title="Create a support number. Route calls. Capture every inquiry." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {steps.map((s) => (
              <div key={s.n} className={featureCard}>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#16233a] text-sm font-bold text-white">{s.n}</span>
                <h3 className="mt-5 text-base font-bold dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button className={lightBtn}>Explore AI Receptionist</button>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Use cases" title="Built for support moments that decide customer trust." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {useCases.map((u) => (
              <div key={u.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${u.tint} dark:bg-white/5`}>
                  <Img src={u.icon} alt="" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold dark:text-white">{u.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{u.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONNECTED PLATFORM ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Connected platform" title="Everything your support team needs to stay reachable and organized." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {platform.map((p) => (
              <div key={p.name} className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <span className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${p.tint} dark:bg-white/5`}>
                  <Img src={p.icon} alt="" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold dark:text-white">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.desc}</p>
                <a href="#" className="mt-5 inline-block text-sm font-semibold text-[#d9603f] hover:underline">{p.cta} →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY UPGRADE (comparison) ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-5xl">
          <SectionHead eyebrow="Why upgrade" title="A shared inbox cannot replace a trusted support number." />
          <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
            <div className="grid grid-cols-2">
              <div className="bg-[#f3efe7] px-5 py-4 text-sm font-bold dark:bg-gray-800 dark:text-white">Personal Phones &amp; Shared Inboxes</div>
              <div className="flex items-center gap-2 bg-[#d9603f] px-5 py-4 text-sm font-bold text-white">
                <Img src="/icons/spark.svg" alt="" className="h-4 w-4" /> Zoiko Local
              </div>
            </div>
            {compare.map((row, i) => (
              <div key={row[0]} className={`grid grid-cols-2 ${i % 2 ? "bg-[#fbfaf6] dark:bg-gray-900/40" : "bg-white dark:bg-gray-800"}`}>
                <div className="border-t border-gray-100 px-5 py-4 text-sm text-gray-500 dark:border-gray-700 dark:text-gray-400">{row[0]}</div>
                <div className="border-t border-gray-100 px-5 py-4 text-sm font-semibold text-[#1c2b26] dark:border-gray-700 dark:text-white">{row[1]}</div>
              </div>
            ))}
            <div className="bg-[#f3efe7] py-6 text-center dark:bg-gray-800">
              <button className={coralBtn}>Give Customers a Support Number They Can Trust</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SUPPORT SCENARIOS ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Support scenarios" title="Design a better support path before customers need it." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {scenarios.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <h3 className={`text-base font-bold ${s.accent ? "text-[#d9603f]" : "dark:text-white"}`}>{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── GLOBAL COVERAGE ─── */}
      <section className="bg-[#0f4338] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHead
            onDark
            eyebrow="Global coverage"
            title="Support customers in the markets you serve."
            sub="Offer local support numbers across supported markets — subject to availability, regulation and carrier support."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {markets.map((m) => (
              <span key={m.name} className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white">
                <Img src={m.flag} alt="" cover className="h-4 w-5 rounded-sm" /> {m.name}
              </span>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-3">
            {regions.map((r) => (
              <span key={r} className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white">{r}</span>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className={lightBtn}>Explore Global Coverage</button>
            <button className={outlineDarkBtn}>Request a Market</button>
          </div>
        </div>
      </section>

      {/* ─── RETENTION & SCALING ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Retention & scaling"
            title="Start with one support number. Scale into a customer communication layer."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {scaling.map((s) => (
              <div key={s.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#fbe9e3] dark:bg-white/5">
                  <Img src={s.icon} alt="" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button className={coralBtn}>See Pricing</button>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#eef3fb] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-3xl">
          <SectionHead eyebrow="FAQ" title="Customer support phone systems, answered." />
          <div className="mt-12 space-y-3">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q} className="rounded-2xl bg-white p-1 shadow-sm ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-[#1c2b26] dark:text-white">{f.q}</span>
                    <span
                      className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-lg leading-none ${
                        isOpen ? "bg-[#d9603f] text-white" : "text-[#d9603f]"
                      }`}
                    >
                      {isOpen ? "×" : "+"}
                    </span>
                  </button>
                  {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#0f4338] px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Make it easier for customers to reach you.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Give customers a trusted support number, route calls to the right team, and capture inquiries when no one is
            available.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className={lightBtn}>Set Up a Support Number</button>
            <button className={outlineDarkBtn}>Explore AI Receptionist</button>
            <button className={outlineDarkBtn}>See Pricing</button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            Replacing Skype Number?{" "}
            <a href="#" className="font-semibold text-white hover:underline">Switch from Skype →</a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default CustomerSupport;
export { CustomerSupport };