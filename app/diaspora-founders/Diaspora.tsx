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
const heroChecks = ["Local numbers for home and growth markets", "Business calling across borders", "AI Receptionist support across time zones"];

const heroRouting = [
  { label: "Founder · abroad", status: "Mobile", dot: "bg-[#d9603f]" },
  { label: "Trusted operator", status: "Local", dot: "bg-[#34d39e]" },
  { label: "AI Receptionist", status: "Time-zone", dot: "bg-[#e8a03b]", highlight: true },
];

const gapCards = [
  { title: "Foreign numbers create hesitation", desc: "Customers may ignore unfamiliar international numbers or doubt whether the business is truly reachable.", icon: "/icons/globe.svg" },
  { title: "Personal numbers do not scale", desc: "Mobile- or WhatsApp-only communication feels informal and gets harder to manage as you grow.", icon: "/icons/phone.svg" },
  { title: "Time zones create missed opportunities", desc: "Customers call during their local hours while the founder is offline elsewhere.", icon: "/icons/clock.svg" },
  { title: "Local trust matters", desc: "Customers, suppliers and partners feel more confident reaching a familiar local number.", icon: "/icons/shield.svg" },
];

const solution = [
  { title: "Local numbers in key markets", desc: "Give customers a familiar number in the country or region they know.", icon: "/icons/pin.svg", tint: "bg-[#fbe9e3]" },
  { title: "Business calling from anywhere", desc: "Make and receive calls without exposing your personal mobile.", icon: "/icons/phone.svg", tint: "bg-[#fbe9e3]" },
  { title: "Cross-border call routing", desc: "Route to founders, team members, departments or fallback paths.", icon: "/icons/route.svg", tint: "bg-[#fbe9e3]" },
  { title: "Video for trust-building", desc: "Move from voice to video when partners or suppliers need face-to-face confidence.", icon: "/icons/video.svg", tint: "bg-[#e3f3ee]" },
  { title: "AI Receptionist for missed calls", desc: "Capture inquiries when unavailable, traveling, or in another time zone.", icon: "/icons/ai-bot.svg", tint: "bg-[#fdf0db]" },
  { title: "Global coverage support", desc: "Build presence across priority markets as the business grows.", icon: "/icons/globe.svg", tint: "bg-[#fbe9e3]" },
];

const steps = [
  { n: 1, title: "Choose your market", desc: "Select the country, city or region where customers need you." },
  { n: 2, title: "Get a local number", desc: "Reserve a number that gives your business local recognition." },
  { n: 3, title: "Connect devices or team", desc: "Route calls to yourself, staff, support or trusted operators." },
  { n: 4, title: "Set hours and routing", desc: "Control where calls go by availability, time zone, team or purpose." },
  { n: 5, title: "Add AI Receptionist", desc: "Capture and route inquiries outside customer hours." },
  { n: 6, title: "Serve customers across borders", desc: "Use presence, calling, video and routing from anywhere." },
];

const useCases = [
  { title: "Home-market businesses", desc: "Serve customers in your country of origin while operating from abroad.", icon: "/icons/pin.svg", tint: "bg-[#fbe9e3]" },
  { title: "Cross-border consultants", desc: "Support clients across countries with a professional local calling identity.", icon: "/icons/briefcase.svg", tint: "bg-[#fbe9e3]" },
  { title: "Community-led businesses", desc: "Stay reachable to customers, families, suppliers and community networks.", icon: "/icons/users.svg", tint: "bg-[#fbe9e3]" },
  { title: "Import and export operators", desc: "Maintain local presence for suppliers, customers and logistics partners.", icon: "/icons/cart.svg", tint: "bg-[#fbe9e3]" },
  { title: "Diaspora service providers", desc: "Support legal, financial, travel, education, property or business services across borders.", icon: "/icons/shield-check.svg", tint: "bg-[#fbe9e3]" },
  { title: "Market-entry founders", desc: "Test demand in a new country before forming a local office or hiring.", icon: "/icons/trend.svg", tint: "bg-[#fbe9e3]" },
];

const platform = [
  { name: "Local Numbers", desc: "Build local presence in markets your customers recognize.", cta: "Explore Local Numbers", icon: "/icons/pin.svg", tint: "bg-[#fbe9e3]" },
  { name: "Calling", desc: "Make and receive business calls across borders with a professional identity.", cta: "Explore Calling", icon: "/icons/phone.svg", tint: "bg-[#fbe9e3]" },
  { name: "Video", desc: "Build trust with customers, suppliers and partners through video.", cta: "Explore Video", icon: "/icons/video.svg", tint: "bg-[#e3f3ee]" },
  { name: "AI Receptionist", desc: "Capture and route calls when busy, traveling or in another time zone.", cta: "Explore AI Receptionist", icon: "/icons/ai-bot.svg", tint: "bg-[#fdf0db]" },
];

const compare = [
  ["Tied to the founder personally", "Built around the business"],
  ["Can feel informal or temporary", "Creates a professional local presence"],
  ["Hard to manage across markets", "Add local numbers by country or region"],
  ["Missed calls depend on one person", "AI Receptionist can capture inquiries"],
  ["Blurs family, personal and business calls", "Separates business communication"],
  ["Weak caller identity in customer markets", "Uses familiar local numbers where available"],
  ["Difficult to scale with growth", "Supports teams, routing and expansion"],
];

const presence = [
  { title: "UK founder · Jamaican customers", desc: "Use a Jamaican local number so customers can reach the business comfortably, subject to availability and verification." },
  { title: "US founder · UK clients", desc: "Use a UK local number for sales, support, or professional services." },
  { title: "Jamaican founder · US customers", desc: "Use a US local number to support customers, suppliers and partners." },
  { title: "African diaspora · North America", desc: "Use local presence to reduce friction before opening physical operations." },
  { title: "Caribbean founder · global clients", desc: "Use local numbers and video conversations to support professional relationships." },
  { title: "Compliance note", desc: "Number availability, eligibility, verification and permitted use vary by country, number type, carrier partner and applicable law.", accent: true },
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
  { title: "Add local numbers by market", desc: "Expand presence as customer demand grows.", icon: "/icons/pin.svg" },
  { title: "Separate inquiry types", desc: "Separate sales, support, partnerships and general inquiries.", icon: "/icons/route.svg" },
  { title: "Add team members or assistants", desc: "Route calls beyond the founder as operations mature.", icon: "/icons/users.svg" },
  { title: "Route by time zone or region", desc: "Support customers across business hours and regions.", icon: "/icons/globe.svg" },
  { title: "Add AI Receptionist", desc: "Protect against missed-call leakage.", icon: "/icons/ai-bot.svg" },
  { title: "Use video for high-trust conversations", desc: "Build confidence with customers, suppliers and partners.", icon: "/icons/video.svg" },
];

const faqs = [
  { q: "How can diaspora founders get a local phone number?", a: "Choose a supported market, reserve a local number, and connect your devices or team. Availability, eligibility and verification vary by country and number type." },
  { q: "Can I get a local number in my home country while living abroad?", a: "Yes — in many supported markets you can hold a local number for your home country while operating from another, subject to availability and verification." },
  { q: "Can I run a business in one country and serve customers in another?", a: "Yes. Hold local numbers in the markets your customers are in and route calls to yourself or your team wherever you are." },
  { q: "Can Zoiko Local help me separate personal and business calls?", a: "Yes. Your business number stays separate from your personal line, with its own routing, greeting and call history." },
  { q: "Can AI Receptionist answer calls when I am in a different time zone?", a: "Yes. The AI Receptionist captures and routes inquiries outside your hours, so customers calling in their local time are never met with silence." },
  { q: "Can I add numbers in more than one country?", a: "Yes. Add local numbers by country or region from one workspace and expand as your customer footprint grows." },
  { q: "Does number availability vary by country?", a: "Yes. Availability, eligibility, verification requirements and permitted use vary by country, number type, carrier partner and applicable law." },
  { q: "Is Zoiko Local a replacement for Skype Number?", a: "Yes. It's built to replace Skype Numbers for cross-border founders. Zoiko Local is not affiliated with or endorsed by Microsoft." },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────
function Diasporafounders() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="bg-white font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">
      {/* ─── HERO ─── */}
      <section className="bg-[#f6ece5] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow pill>Diaspora founders</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
              Local numbers for founders building <span className="text-[#d9603f]">across borders</span>.
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Build trusted local presence in the markets that matter to your customers, even when your business operates
              across countries. Zoiko Local helps diaspora founders sound local, stay reachable, and communicate
              professionally from anywhere.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className={coralBtn}>Build Your Cross-Border Presence</button>
              <button className={lightBtn}>Get a Local Number</button>
            </div>
            <a href="#" className="mt-4 inline-block text-sm font-semibold text-[#d9603f] hover:underline">See Pricing →</a>
            <div className="mt-5 flex max-w-md items-center justify-between gap-4 rounded-2xl bg-white px-5 py-4 text-sm shadow-sm ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <span className="text-gray-600 dark:text-gray-400">Replacing Skype Number for international business calls?</span>
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

          {/* Presence card */}
          <div className="relative">
            <div className="absolute -top-6 left-6 z-10 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold shadow-lg ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <Img src="/icons/pin.svg" alt="" className="h-4 w-4" /> Presence in 3 markets
            </div>
            <div className="rounded-3xl bg-white p-5 shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <div className="flex items-start justify-between rounded-2xl bg-[#16233a] p-5 text-white">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Home-market number</p>
                  <p className="mt-1 text-xl font-extrabold">+1 (876) 555-0117</p>
                </div>
                <Img src="/flags/jm.svg" alt="Jamaica" cover className="h-7 w-9 rounded-md" />
              </div>
              <div className="mt-3 flex items-center gap-3 rounded-2xl bg-[#fbf2ee] p-4 dark:bg-gray-900/40">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d9603f]">
                  <Img src="/icons/phone.svg" alt="" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold dark:text-white">Incoming · Customer market</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Familiar local number</p>
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
                <span className="h-1.5 w-1.5 rounded-full bg-[#1f8a6b]" /> Local presence active in multiple markets
              </p>
            </div>
            <div className="absolute -bottom-5 right-4 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold shadow-lg ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
              <Img src="/icons/shield-check.svg" alt="" className="h-4 w-4" /> Familiar local line
            </div>
          </div>
        </div>
      </section>

      {/* ─── THE TRUST GAP ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="The trust gap"
            title="When your business crosses borders, trust has to travel with you."
            sub="Customers may hesitate when a business feels distant, informal, or difficult to reach. These are the gaps to close first."
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
            title="Sound present in the markets you serve."
            sub="Zoiko Local is the communication bridge for diaspora founders — credible, professional, and built around your business."
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
            <button className={coralBtn}>Build Your Cross-Border Presence</button>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="How it works" title="Choose your market. Get a local number. Stay reachable from anywhere." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className={featureCard}>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#16233a] text-sm font-bold text-white">{s.n}</span>
                <h3 className="mt-5 text-base font-bold dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── USE CASES ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead eyebrow="Use cases" title="Built for founders whose customers, communities, and opportunities cross borders." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
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
          <SectionHead eyebrow="Connected platform" title="Everything diaspora founders need to sound local, trusted, and reachable." />
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
            title="Personal numbers and informal apps are not enough for a cross-border business."
          />
          <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-black/5 dark:ring-white/10">
            <div className="grid grid-cols-2">
              <div className="bg-[#f3efe7] px-5 py-4 text-sm font-bold dark:bg-gray-800 dark:text-white">Personal Numbers &amp; Informal Apps</div>
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
              <button className={coralBtn}>Upgrade to a Professional Local Presence</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── MARKET PRESENCE ─── */}
      <section className="bg-[#f3efe7] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Market presence"
            title="Create presence where your customers already are."
            sub="Illustrative examples — number availability, eligibility and verification vary by market."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {presence.map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
                <h3 className={`text-base font-bold ${p.accent ? "text-[#d9603f]" : "dark:text-white"}`}>{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{p.desc}</p>
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
            title="Build local presence across the markets that matter."
            sub="Zoiko Local supports priority markets and regional expansion based on availability, regulation, carrier support and demand. Start in one market and expand as customer needs grow."
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
            title="Start with one market. Grow into a cross-border communication layer."
            sub="Many founders start with one local number. The platform grows with you instead of forcing a rebuild later."
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
          <SectionHead eyebrow="FAQ" title="Diaspora founder phone numbers, answered." />
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
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Your business can sound local, even when you build globally.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-white/70">
            Give customers a familiar number, a professional calling experience, and a trusted way to reach your business
            across borders.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className={lightBtn}>Build Your Cross-Border Presence</button>
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

export default Diasporafounders;
export { Diasporafounders };