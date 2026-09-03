"use client";

import { useState, type ReactNode } from "react";
import {
  FiArrowRight, FiCheck, FiPlus, FiMinus,
  FiBriefcase, FiHash, FiUsers, FiGlobe, FiMapPin, FiHeadphones, FiUser,
  FiPhone, FiVideo, FiMessageSquare, FiPhoneOff, FiPhoneMissed, FiSmartphone,
} from "react-icons/fi";

// ─── HELPERS ──────────────────────────────────────────────────────────────────

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
  "inline-flex items-center gap-2 rounded-lg border border-[#1c2b26]/20 px-6 py-3 text-sm font-semibold text-[#1c2b26] transition-colors hover:bg-black/5 dark:border-white/20 dark:text-white dark:hover:bg-white/10";
const outlineBtnDark =
  "inline-flex items-center gap-2 rounded-lg border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10";

// Green icon tile (react-icons inside)
function IconTile({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#e8f1ec] text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]">
      {children}
    </span>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const heroChecks = [
  "Built for business, support, founders & remote teams",
  "Numbers, calling, video & AI Receptionist in one platform",
];

// hero "find the right solution path" card
const solutionPaths = ["For Business", "Remote Teams", "Customer Support", "Diaspora Founders", "International Expansion"];

// Solution Finder rows
const finder: { need: string; tag: string; cta: string }[] = [
  { need: "I need a professional business number", tag: "Business Numbers", cta: "Get a Business Number" },
  { need: "I need one system for my whole business", tag: "For Business", cta: "Explore Business Solutions" },
  { need: "My team works remotely", tag: "Remote Teams", cta: "Build Remote Team Calling" },
  { need: "I need a customer support number", tag: "Customer Support", cta: "Set Up Support Calling" },
  { need: "I'm building across borders", tag: "Diaspora Founders", cta: "Build Cross-Border Presence" },
  { need: "I'm entering a new market", tag: "International Expansion", cta: "Start Market Entry" },
  { need: "I'm a founder using my personal phone", tag: "Founder-Led Business", cta: "Get Your Founder Number" },
];

// Solutions grid
const solutions: { icon: ReactNode; title: string; desc: string; cta: string }[] = [
  { icon: <FiBriefcase />, title: "For Business", desc: "Create a trusted local presence for customers, sales, support, and day-to-day business communication.", cta: "Explore Business Solutions" },
  { icon: <FiHash />, title: "Business Numbers", desc: "Get a local business number customers recognize — for calls, support, sales, and customer communication.", cta: "Get a Business Number" },
  { icon: <FiUsers />, title: "Remote Teams", desc: "Give remote staff a shared local number, calling, routing, and AI Receptionist support.", cta: "Build Remote Team Calling" },
  { icon: <FiGlobe />, title: "Diaspora Founders", desc: "Build trusted local presence in home, customer, and growth markets — without an office in every country.", cta: "Build Cross-Border Presence" },
  { icon: <FiMapPin />, title: "International Expansion", desc: "Create local presence before opening an office, hiring locally, or launching full regional operations.", cta: "Start Market Entry" },
  { icon: <FiHeadphones />, title: "Customer Support", desc: "Set up a trusted support number with routing and AI Receptionist support to reduce missed inquiries.", cta: "Set Up Support Calling" },
  { icon: <FiUser />, title: "Founder-Led Business", desc: "Separate personal and business calls, look established, and stay reachable from day one.", cta: "Get Your Founder Number" },
];

// Common problem cards
const problems: { icon: ReactNode; title: string; desc: string }[] = [
  { icon: <FiPhoneOff />, title: "Unfamiliar numbers get ignored", desc: "Local presence helps reduce hesitation and dial-answer rates." },
  { icon: <FiSmartphone />, title: "Personal phones don't scale", desc: "Business communication needs structure and separation." },
  { icon: <FiPhoneMissed />, title: "Missed calls become missed revenue", desc: "AI Receptionist and routing help capture inquiries." },
  { icon: <FiGlobe />, title: "Expansion needs local trust", desc: "New markets are easier to approach with local presence." },
];

// Platform cards
const platform: { icon: ReactNode; title: string; badge?: string; desc: string; cta: string }[] = [
  { icon: <FiMapPin />, title: "Local Numbers", badge: "Start here", desc: "Create local presence in trusted customer markets.", cta: "Explore Local Numbers" },
  { icon: <FiPhone />, title: "Calling", desc: "Make and receive business calls using a professional identity.", cta: "Explore Calling" },
  { icon: <FiVideo />, title: "Video", desc: "Support high-trust customer, partner, and team conversations.", cta: "Explore Video" },
  { icon: <FiMessageSquare />, title: "AI Receptionist", badge: "The Difference", desc: "Answers, captures, qualifies, and routes calls when teams are busy or unavailable.", cta: "Explore AI Receptionist" },
];

// Comparison table
const comparison: [string, string][] = [
  ["One number with limited context", "Solution paths by business need"],
  ["Often tied to one person", "Built for teams, founders, support & expansion"],
  ["Hard to route inquiries", "Routes by need, team, market, or availability"],
  ["Missed calls may be lost", "AI Receptionist helps capture and route inquiries"],
  ["Weak upgrade path", "Scales into users, markets, video, AI & porting"],
  ["Not tailored to buyer intent", "Guides each visitor to the right commercial path"],
];

// Coverage markets
const markets = ["United States", "United Kingdom", "Jamaica", "Canada", "Nigeria", "South Africa"];

// Grow-with-your-business checklist
const growList = ["Add numbers by need", "Add users and teams", "Add support paths", "Add AI Receptionist coverage", "Add video conversations", "Add multi-market setup"];

// FAQ
const faqs: { q: string; a: string }[] = [
  { q: "Which Zoiko Local solution is right for my business?", a: "Use the Solution Finder above — pick the outcome that sounds like you, and we'll route you to the path built for that need, whether it's a single number or a full communication layer." },
  { q: "Can I start with one business number?", a: "Yes. Many businesses start with a single local number and expand into calling, video, and AI Receptionist coverage as they grow." },
  { q: "Can remote teams use Zoiko Local?", a: "Yes. Remote teams can share a local number with routing, call history, and AI Receptionist support regardless of where staff are located." },
  { q: "Can I use Zoiko Local for customer support calls?", a: "Yes. You can set up a dedicated support number with routing and AI Receptionist handling to reduce missed inquiries." },
  { q: "Can founders use Zoiko Local instead of a personal phone?", a: "Yes. A dedicated business number separates personal and business communication while presenting a more professional, established identity." },
  { q: "Can Zoiko Local support international expansion?", a: "Yes. You can create local presence in new markets before opening an office, subject to local regulations and eligibility." },
  { q: "Does Zoiko Local include an AI Receptionist?", a: "Yes. The AI Receptionist answers, captures, qualifies, and routes calls when your team is busy or unavailable." },
  { q: "Can I add more numbers, users, or markets later?", a: "Yes. Zoiko Local is designed to grow from a single solution into a broader, long-term communication layer." },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function ZoikoLocalUseCases() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <main className="bg-[#f3efe7] font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <div aria-hidden className="pointer-events-none absolute -right-20 -top-10 h-80 w-80 rounded-full bg-[#d9603f]/15 blur-3xl dark:bg-[#d9603f]/10" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Use Cases</Eyebrow>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
              Local presence and business communication solutions for the way you <span className="text-[#d9603f]">grow.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Zoiko Local helps businesses, founders, remote teams, support teams, diaspora operators, and expansion teams
              create trusted local presence, manage calls, meet customers, and reduce missed inquiries from anywhere.
              Sound local. Reach anywhere.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className={coralBtn}>Find Your Solution <FiArrowRight /></button>
              <button className={outlineBtn}>Get a Local Number</button>
            </div>
            <p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
              Replacing a Skype Number? <a href="#" className="font-semibold text-[#d9603f] hover:underline">Switch from Skype →</a>
            </p>
            <div className="mt-5 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {heroChecks.map((c) => (
                <span key={c} className="flex items-center gap-2"><FiCheck className="text-[#d9603f]" /> {c}</span>
              ))}
            </div>
          </div>

          {/* Solution-path card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
            <div className="bg-[#163a2e] px-5 py-4 text-sm font-semibold text-white">Find the right solution path</div>
            <div className="p-5">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f1ec] px-3 py-1 text-xs font-semibold text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]">
                Zoiko Local platform
              </span>
              <ul className="mt-4 divide-y divide-gray-100 dark:divide-gray-700">
                {solutionPaths.map((s) => (
                  <li key={s} className="flex items-center justify-between py-3 text-sm text-gray-700 dark:text-gray-200">
                    <span className="flex items-center gap-2"><FiCheck className="text-[#163a2e] dark:text-[#34d39e]" /> {s}</span>
                    <span className="text-xs text-gray-400">path</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 rounded-lg bg-[#e8f1ec] px-3 py-2 text-center text-xs font-semibold text-[#163a2e] dark:bg-gray-900 dark:text-[#34d39e]">
                Right solution path selected — ready to start
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SOLUTION FINDER ─── */}
      <section className="bg-[#F7F5F2] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-4xl">
          <SectionHead eyebrow="Solution Finder" title="Start with the outcome your business needs." sub="Pick what sounds like you — we'll route you to the path built for it." />
          <div className="mt-12 space-y-3">
            {finder.map((f) => (
              <div key={f.need} className="flex flex-col gap-3 rounded-xl bg-white p-4 ring-1 ring-black/5 sm:flex-row sm:items-center sm:justify-between dark:bg-gray-800 dark:ring-white/10">
                <span className="text-sm font-semibold dark:text-white">{f.need}</span>
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-[#e8f1ec] px-3 py-1 text-xs font-semibold text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]">{f.tag}</span>
                  <a href="#" className="inline-flex items-center gap-1 whitespace-nowrap text-sm font-semibold text-[#d9603f] hover:underline">{f.cta} <FiArrowRight /></a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SOLUTIONS ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Solutions" title="Built for the communication moments that decide trust." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((s) => (
              <div key={s.title} className="flex flex-col rounded-2xl bg-[#f3efe7] p-6 dark:bg-gray-900">
                <IconTile>{s.icon}</IconTile>
                <h3 className="mt-5 text-base font-bold text-[#1c2b26] dark:text-white">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#d9603f] hover:underline">{s.cta} <FiArrowRight /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMMON PROBLEM ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="The Common Problem" title={<>Different needs. One shared problem: customers need to reach you with confidence.</>} sub="Founder, remote team, support operation, diaspora entrepreneur, or expansion team — the underlying problem is the same. Zoiko Local scales as you grow." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {problems.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <IconTile>{p.icon}</IconTile>
                <h3 className="mt-4 text-sm font-bold text-[#1c2b26] dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button className={coralBtn}>Get a Local Number <FiArrowRight /></button>
          </div>
        </div>
      </section>

      {/* ─── ONE PLATFORM ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto max-w-4xl">
          <SectionHead eyebrow="One Platform Behind Every Solution" title="Every solution is powered by the same connected platform." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            {platform.map((p) => (
              <div key={p.title} className={`rounded-2xl p-6 ring-1 ${p.badge === "The Difference" ? "bg-[#f3efe7] ring-[#d9603f]/30 dark:bg-gray-900" : "bg-[#f3efe7] ring-black/5 dark:bg-gray-900 dark:ring-white/10"}`}>
                {p.badge && (
                  <span className={`mb-3 inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${p.badge === "The Difference" ? "bg-[#d9603f]/15 text-[#d9603f]" : "bg-[#e8f1ec] text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]"}`}>{p.badge}</span>
                )}
                <IconTile>{p.icon}</IconTile>
                <h3 className="mt-4 text-base font-bold text-[#1c2b26] dark:text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.desc}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#d9603f] hover:underline">{p.cta} <FiArrowRight /></a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-4xl">
          <SectionHead eyebrow="Solution vs Generic Phone Setup" title="A generic number doesn't solve the whole communication problem." />
          <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
            <div className="grid grid-cols-2 bg-[#163a2e] text-sm font-semibold text-white">
              <div className="px-5 py-3">Generic phone setup</div>
              <div className="px-5 py-3 border-l border-white/10">Zoiko Local solutions</div>
            </div>
            {comparison.map(([a, b], i) => (
              <div key={a} className={`grid grid-cols-2 text-sm ${i % 2 ? "bg-white dark:bg-gray-800" : "bg-[#faf8f4] dark:bg-gray-900"}`}>
                <div className="px-5 py-4 text-gray-500 dark:text-gray-400">{a}</div>
                <div className="px-5 py-4 font-medium text-[#1c2b26] border-l border-black/5 dark:border-white/10 dark:text-gray-100">{b}</div>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <button className={coralBtn}>Find Your Solution <FiArrowRight /></button>
          </div>
        </div>
      </section>

      {/* ─── COVERAGE BANNER ─── */}
      <section className="bg-[#f3efe7] px-4 pb-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0f2a21] p-10 text-center text-white sm:p-14">
          <div aria-hidden className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#d9603f]/15 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Build local trust in the markets <span className="italic text-[#d9603f]">that matter.</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">Priority coverage markets, with regional coverage expanding under our global connectivity network.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {markets.map((m) => (
                <span key={m} className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-white/90">
                  <FiMapPin className="text-[#e9a98f]" /> {m}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button className={outlineBtnDark}>Explore Global Coverage</button>
              <button className={coralBtn}>Request a Market <FiArrowRight /></button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── START WITH ONE SOLUTION ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-800">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Start with one need. Grow into a broader layer</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold leading-snug dark:text-white">Start with one solution. Scale into a communication layer.</h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              A founder may start with one number. A support team may later add AI Receptionist. A remote team may add
              routing. An expanding company may add new markets. Zoiko Local is designed to grow from a single solution
              into a long-term communication layer.
            </p>
            <button className={`${coralBtn} mt-8`}>See Pricing <FiArrowRight /></button>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 dark:bg-gray-900 dark:ring-white/10">
            <div className="bg-[#163a2e] px-5 py-4 text-sm font-semibold text-white">Grow with your business</div>
            <ul className="space-y-4 p-6">
              {growList.map((g) => (
                <li key={g} className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-200">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#e8f1ec] text-[#163a2e] dark:bg-[#34d39e]/15 dark:text-[#34d39e]"><FiCheck size={14} /></span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-[#F7F5F2] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-3xl">
          <SectionHead eyebrow="Questions" title="Zoiko Local solutions, answered." />
          <div className="mt-12 divide-y divide-black/10 dark:divide-white/10">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button onClick={() => setOpen(isOpen ? null : i)} className="flex w-full items-center justify-between gap-4 py-5 text-left" aria-expanded={isOpen}>
                    <span className="text-sm font-semibold dark:text-white/90">{f.q}</span>
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full border border-black/15 text-[#1c2b26] dark:border-white/20 dark:text-white/70">
                      {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                    </span>
                  </button>
                  {isOpen && <p className="pb-5 text-sm leading-relaxed text-gray-600 dark:text-white/60">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#F7F5F2] px-4 pb-24 pt-4 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#0f2a21] p-10 text-center text-white sm:p-16">
          <div aria-hidden className="pointer-events-none absolute -right-16 top-0 h-72 w-72 rounded-full bg-[#d9603f]/15 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to choose your path to <span className="text-[#d9603f]">local presence?</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
              Find the solution that fits your business, get a local number your customers recognize, and scale into
              calling, video, routing, and AI Receptionist when you're ready.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button className={coralBtn}>Find Your Solution <FiArrowRight /></button>
              <button className={outlineBtnDark}>Get a Local Number</button>
              <button className={outlineBtnDark}>See Pricing</button>
            </div>
            <p className="mt-6 text-sm text-white/70">
              Replacing a Skype Number? <a href="#" className="font-semibold text-[#e9a98f] hover:underline">Switch from Skype →</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ZoikoLocalUseCases;
export { ZoikoLocalUseCases };