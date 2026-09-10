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
  return (
    <p className="inline-flex rounded-full bg-[#f6e4dc] px-4 py-1.5 dark:bg-[#d9603f]/15">{inner}</p>
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
const IC = {
  check: "/icons/check.svg", // teal tick (hero list)
};

// ─── DATA ────────────────────────────────────────────────────────────────────
const heroChecks = ["Local numbers for remote teams", "Calling, video, and routing in one platform", "AI Receptionist support for missed calls"];

const heroRouting = [
  { label: "Sales · London", status: "Online", dot: "bg-[#d9603f]" },
  { label: "Support · Lagos", status: "Busy", dot: "bg-[#34d39e]" },
  { label: "AI Receptionist", status: "Fallback", dot: "bg-[#e8a03b]", highlight: true },
];

const gapCards = [
  { title: "Personal numbers create risk", desc: "Business calls land on private mobiles, blurring boundaries and exposing personal numbers.", icon: "/icons/phone.svg" },
  { title: "Customers want local trust", desc: "Unfamiliar or foreign numbers can make a capable team feel distant or hard to verify.", icon: "/icons/shield.svg" },
  { title: "Calls need proper routing", desc: "Without routing, inquiries bounce between people, apps and inboxes — or go unanswered.", icon: "/icons/route.svg" },
  { title: "Time zones create missed calls", desc: "Customers call during their hours while the right teammate is offline somewhere else.", icon: "/icons/clock.svg" },
];

const solution = [
  { title: "Local numbers for remote companies", desc: "Give customers a familiar number to call in the markets you serve.", icon: "/icons/pin.svg", tint: "bg-[#fbe9e3]" },
  { title: "Shared business calling", desc: "Make and receive calls through one business identity, not private mobiles.", icon: "/icons/phone.svg", tint: "bg-[#fbe9e3]" },
  { title: "Team routing", desc: "Route calls by team, role, business hours or availability.", icon: "/icons/route.svg", tint: "bg-[#fbe9e3]" },
  { title: "Video for customer conversations", desc: "Move important conversations to face-to-face when trust matters.", icon: "/icons/video.svg", tint: "bg-[#e3f3ee]" },
  { title: "AI Receptionist fallback", desc: "Capture and route inquiries when no one is available.", icon: "/icons/ai-bot.svg", tint: "bg-[#fdf0db]" },
  { title: "Global coverage support", desc: "Add presence across supported markets as the team grows.", icon: "/icons/globe.svg", tint: "bg-[#fbe9e3]" },
];

const steps = [
  { n: 1, title: "Choose your market", desc: "Pick the country, city or region where customers need to reach you." },
  { n: 2, title: "Get a local number", desc: "Reserve a number customers recognize and trust." },
  { n: 3, title: "Add team members", desc: "Bring teammates onto the shared business line by role." },
  { n: 4, title: "Set routing rules", desc: "Route by team, hours, availability or purpose." },
  { n: 5, title: "Activate AI Receptionist", desc: "Capture inquiries when the team is unavailable." },
  { n: 6, title: "Start communicating", desc: "Answer professionally from anywhere, on any device." },
];

const useCases = [
  { title: "Remote-first startups", desc: "Look established from day one without an office.", icon: "/icons/spark.svg", tint: "bg-[#fbe9e3]" },
  { title: "Distributed sales teams", desc: "Local presence for prospects in every market.", icon: "/icons/trend.svg", tint: "bg-[#fbe9e3]" },
  { title: "Remote customer support", desc: "Shared support line with smart routing.", icon: "/icons/phone.svg", tint: "bg-[#e3f3ee]" },
  { title: "Virtual agencies", desc: "One professional front door for clients.", icon: "/icons/users.svg", tint: "bg-[#fbe9e3]" },
  { title: "International teams", desc: "Coordinate calls across regions and hours.", icon: "/icons/globe.svg", tint: "bg-[#fbe9e3]" },
  { title: "Founder-led remote companies", desc: "Separate the founder's mobile from the business.", icon: "/icons/briefcase.svg", tint: "bg-[#fbe9e3]" },
  { title: "Hybrid offices", desc: "Consistent presence across home and office.", icon: "/icons/building.svg", tint: "bg-[#fbe9e3]" },
  { title: "After-hours teams", desc: "Capture and route calls beyond business hours.", icon: "/icons/clock.svg", tint: "bg-[#fdf0db]" },
];

const platform = [
  { name: "Local Numbers", desc: "Local presence in the markets your customers recognize.", cta: "Explore Local Numbers", icon: "/icons/pin.svg", tint: "bg-[#fbe9e3]" },
  { name: "Calling", desc: "Make and receive business calls with a professional identity.", cta: "Explore Calling", icon: "/icons/phone.svg", tint: "bg-[#fbe9e3]" },
  { name: "Video", desc: "Meet customers face-to-face to build trust.", cta: "Explore Video", icon: "/icons/video.svg", tint: "bg-[#e3f3ee]" },
  { name: "AI Receptionist", desc: "Capture and route calls when the team is offline.", cta: "Explore AI Receptionist", icon: "/icons/ai-bot.svg", tint: "bg-[#fdf0db]" },
];

const compare = [
  ["Tied to individual people", "Built around the business"],
  ["Hard to route calls properly", "Routes calls by team, role, hours, or availability"],
  ["Weak or inconsistent business identity", "Creates a professional local presence"],
  ["Blurs personal and business communication", "Separates business calls from personal life"],
  ["Missed calls are easy to lose", "AI Receptionist can capture and route inquiries"],
  ["Difficult to scale across markets", "Add numbers, users, and locations as needed"],
  ["Fragmented customer experience", "One consistent communication layer"],
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
  { title: "Add numbers by market", desc: "Expand local presence as you enter new regions.", icon: "/icons/pin.svg" },
  { title: "Add users by role or team", desc: "Bring sales, support and operations onto the line.", icon: "/icons/users.svg" },
  { title: "Add routing as volume grows", desc: "Introduce rules as call patterns mature.", icon: "/icons/route.svg" },
  { title: "Add AI Receptionist", desc: "Protect against missed-call leakage.", icon: "/icons/ai-bot.svg" },
  { title: "Add video", desc: "Bring high-trust conversations face-to-face.", icon: "/icons/video.svg" },
  { title: "Add global coverage", desc: "Scale into additional markets over time.", icon: "/icons/globe.svg" },
];

const faqs = [
  { q: "What is a remote team phone system?", a: "It is a cloud-based business phone setup that gives a distributed team shared local numbers, calling, routing, video and AI Receptionist support — so customers reach the right person regardless of where each team member works." },
  { q: "Can remote teams share one business phone number?", a: "Yes. A shared business line can route to teammates by team, role, hours or availability, so everyone answers from one consistent number." },
  { q: "Can we get a local number without having an office?", a: "Yes. No physical office or hardware is required, though some markets may need business verification or proof of address before activation." },
  { q: "Can Zoiko Local help us stop using personal phones for business?", a: "Yes. It separates business calls from personal lines with their own routing, greeting and history, so work and personal calls never mix." },
  { q: "Can calls be routed by department or availability?", a: "Yes. Configure routing rules by team, role, business hours or availability, with an AI Receptionist fallback when no one is free." },
  { q: "Can AI Receptionist answer when the team is offline?", a: "Yes. The AI Receptionist captures and qualifies inquiries when the team is unavailable, then routes or logs them for follow-up." },
  { q: "Can a remote team use Zoiko Local across multiple countries?", a: "Yes. Hold local numbers across supported markets from one workspace and route them all to your team wherever they are." },
  { q: "Is Zoiko Local a replacement for Skype Number?", a: "Yes. It's built to replace Skype Numbers for distributed teams — switch and keep a local presence everywhere you operate. Not affiliated with or endorsed by Microsoft." },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
function Remoteteams() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="bg-white font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">
      {/* ─── HERO ─── */}
      <section className="bg-[#f6ece5] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow pill>Remote teams</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
              Business phone numbers and calling for <span className="text-[#d9603f]">remote teams</span>.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Give your remote team a professional local presence, even when everyone works from different locations.
              Zoiko Local helps distributed teams answer calls, route inquiries, meet customers, and stay reachable from
              anywhere.
            </p>
            <div className="mt-8 flex flex-col items-start gap-3">
              <button className={coralBtn}>Build Your Remote Team Phone System</button>
              <div className="flex flex-wrap gap-3">
                <button className={lightBtn}>Get a Local Number</button>
                <a href="#" className="inline-flex items-center px-3 py-3.5 text-sm font-semibold text-[#1c2b26] hover:underline dark:text-white">
                  See Pricing →
                </a>
              </div>
            </div>
            <p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
              Replacing Skype Number for your remote team?{" "}
              <a href="#" className="font-semibold text-[#d9603f] hover:underline">Switch from Skype →</a>
            </p>
            <ul className="mt-6 space-y-2">
              {heroChecks.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Img src={IC.check} alt="" className="h-4 w-4" /> {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Routing card */}
          <div className="relative">
            <div className="absolute -top-6 left-6 z-10 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold shadow-lg ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <Img src="/icons/pin.svg" alt="" className="h-4 w-4" /> Team in 4 locations
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <div className="rounded-2xl bg-[#16233a] p-5 text-white">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Shared business line</p>
                    <p className="mt-1 text-xl font-extrabold">+1 (212) 555-0140</p>
                  </div>
                  <Img src="/flags/us.svg" alt="US" cover className="h-7 w-9 rounded-md" />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#fbf2ee] p-4 dark:bg-gray-900/40">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9603f]">
                  <Img src="/icons/phone.svg" alt="" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold dark:text-white">Incoming · Priority market</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">New customer inquiry</p>
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
                <span className="h-1.5 w-1.5 rounded-full bg-[#1f8a6b]" /> Customer call captured — no lead lost
              </p>
            </div>
            <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold shadow-lg ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <Img src="/icons/shield-check.svg" alt="" className="h-4 w-4" /> No lead lost
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE GAP ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="The gap"
            title="Remote work changed where teams sit. It should not weaken how customers reach you."
            sub="Distributed work is an advantage — until communication becomes the weak link. These are the risks worth removing first."
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
            title="One business presence. Many places of work."
            sub="Zoiko Local is the operating layer for remote-team communication — local where customers are, coordinated wherever your team is."
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
            <button className={coralBtn}>Build Your Remote Team Phone System</button>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="How it works" title="Set up a local presence. Connect your team. Start answering professionally." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className={featureCard}>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#16233a] text-sm font-bold text-white">{s.n}</span>
                <h3 className="mt-5 text-base font-bold dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button className={lightBtn}>Get a Local Number</button>
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Use cases" title="Built for the way modern teams actually work." />
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
          <SectionHead eyebrow="Connected platform" title="Everything your remote team needs to sound organized, local, and reachable." />
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
          <SectionHead
            eyebrow="Why upgrade"
            title="Personal phones are not a remote team phone system."
            sub="See why a coordinated communication layer beats a patchwork of personal mobiles and disconnected apps."
          />
          <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
            <div className="grid grid-cols-2">
              <div className="bg-[#f3efe7] px-5 py-4 text-sm font-bold dark:bg-gray-800 dark:text-white">Personal Mobiles &amp; Disconnected Apps</div>
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
              <button className={coralBtn}>Replace Personal Numbers with Zoiko Local</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── GLOBAL COVERAGE ─── */}
      <section className="bg-[#0f4338] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <SectionHead
            onDark
            eyebrow="Global coverage"
            title="Give your remote team local presence in the markets that matter."
            sub="Start where your customers are and expand as you grow — subject to availability, regulation and carrier support."
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
            title="Start with one number. Grow into your team communication layer."
            sub="Zoiko Local becomes more valuable as the team grows — add capability without a rebuild later."
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
          <SectionHead eyebrow="FAQ" title="Remote team phone systems, answered." />
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
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Remote teams can still sound local.</h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Give your distributed team a professional business number, cloud calling, video communication, intelligent
            routing, and AI Receptionist support — all built around the markets your customers trust.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className={lightBtn}>Build Your Remote Team Phone System</button>
            <button className={outlineDarkBtn}>Get a Local Number</button>
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

export default Remoteteams;
export { Remoteteams };