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

/** Cards that sit on a DARK band stay light in light mode and go glassy in
 *  dark mode — matching the screenshot, where the band is near-black but the
 *  cards read as white panels. */
const cardOnDark =
  "rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-white/[0.04] dark:ring-white/10";
const cardOnLight =
  "rounded-2xl bg-white p-6 ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10";

/** Near-black bands. Kept as classes, never inline styles — an inline
 *  backgroundColor overrides every `dark:` variant and silently kills dark mode. */
const darkBand = "bg-[#0d100f] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950";

// ─── SHARED IMAGE PATHS ───────────────────────────────────────────────────────
const IC = {
  check: "/icons/check.svg",
  phone: "/icons/phone.svg",
  aiBot: "/icons/ai-bot.svg",
  video: "/icons/video.svg",
  globe: "/icons/globe.svg",
  heart: "/icons/heart.svg",
  chat: "/icons/chat.svg",
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const heroChecks = [
  "Backed by a global connectivity agreement",
  "One workspace for every Caribbean market",
];

type Availability = "live" | "request";

const coverage: { code: string; name: string; dial: string; state: Availability }[] = [
  { code: "JM", name: "Jamaica", dial: "+1 876", state: "live" },
  { code: "TT", name: "Trinidad & Tobago", dial: "+1 868", state: "request" },
  { code: "BB", name: "Barbados", dial: "+1 246", state: "request" },
];

const markets: {
  code: string;
  name: string;
  dial: string;
  state: Availability;
  desc: string;
  cta: string;
}[] = [
  {
    code: "JM",
    name: "Jamaica",
    dial: "+1 876",
    state: "live",
    desc: "Local presence for business, diaspora, and cross-border reach.",
    cta: "Get a number",
  },
  {
    code: "TT",
    name: "Trinidad & Tobago",
    dial: "+1 868",
    state: "request",
    desc: "Local Caribbean presence for business and community.",
    cta: "Request this market",
  },
  {
    code: "BB",
    name: "Barbados",
    dial: "+1 246",
    state: "request",
    desc: "Local Barbadian presence for customers and cross-border business.",
    cta: "Request this market",
  },
];

const whyCards = [
  {
    title: "Diaspora & community",
    desc: "Trusted local lines for Caribbean customers, community, and family.",
    icon: IC.heart,
    tint: "bg-[#e3f3ee]",
  },
  {
    title: "Cross-border business",
    desc: "Serve Caribbean markets from anywhere with local presence.",
    icon: IC.globe,
    tint: "bg-[#e3f3ee]",
  },
  {
    title: "Customer support",
    desc: "Familiar local numbers Caribbean customers trust and call.",
    icon: IC.chat,
    tint: "bg-[#e3f3ee]",
  },
];

const connected = [
  {
    title: "Calling",
    desc: "Inbound and outbound business calls on every Caribbean number, with routing and history.",
    icon: IC.phone,
    tint: "bg-[#e3f3ee]",
  },
  {
    title: "AI Receptionist",
    desc: "Answers, qualifies, and routes calls across Caribbean markets — and captures what you miss.",
    icon: IC.aiBot,
    tint: "bg-[#fdf0db]",
  },
  {
    title: "Video",
    desc: "Meet customers and partners across Caribbean face-to-face, from anywhere.",
    icon: IC.video,
    tint: "bg-[#e3f3ee]",
  },
];

const faqs = [
  {
    q: "Which Caribbean markets are live?",
    a: "Jamaica (+1 876) is live today. Trinidad & Tobago (+1 868) and Barbados (+1 246) are available by request — tell us the market you need and we will confirm availability, lead time and any verification required.",
  },
  {
    q: "Can diaspora founders get Caribbean numbers from abroad?",
    a: "Yes. You do not need to be resident in the market to hold a number there. Some markets require business verification, proof of address or identity checks before activation, and those requirements are set by the local regulator rather than by us.",
  },
  {
    q: "Can I use a Caribbean number for calls, video, and AI?",
    a: "Yes. Every Caribbean number works with calling, routing, call history, video and the AI Receptionist from the same workspace — there is no separate product to buy per capability.",
  },
  {
    q: "Can I request a Caribbean market not listed?",
    a: "Yes. We are expanding across the region by demand. Tell us the country or city and we will review availability with our carrier partners and come back with what is possible and when.",
  },
];

// ─── PAGE ─────────────────────────────────────────────────────────────────────

function CaribbeanLocalNumbers() {
  const [open, setOpen] = useState<number | null>(null);

  const badge = (state: Availability, onDark = false) =>
    state === "live"
      ? "rounded-full bg-[#e3f3ee] px-2.5 py-1 text-[11px] font-semibold text-[#1f8a6b] dark:bg-[#34d39e]/15 dark:text-[#34d39e]"
      : `rounded-full px-2.5 py-1 text-[11px] font-semibold ${
          onDark
            ? "bg-white/10 text-white/70"
            : "bg-gray-100 text-gray-500 dark:bg-white/10 dark:text-gray-300"
        }`;

  return (
    <main className="bg-white font-sans text-[#1c2b26] dark:bg-gray-900 dark:text-gray-100">

      {/* ─── HERO ─── */}
      <section className="bg-[#f6ece5] px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Caribbean · Local numbers</Eyebrow>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight sm:text-5xl dark:text-white">
              Caribbean local numbers <span className="text-[#d9603f]">for business.</span>
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              Get local numbers across Caribbean markets — reach customers, communities, and diaspora
              networks with trusted local presence. Sound local. Reach anywhere.
            </p>

            <div className="mt-8 flex flex-col items-start gap-3">
              <button className={coralBtn}>Explore Caribbean Coverage →</button>
              <button className={outlineTealBtn}>Check Number Availability</button>
            </div>

            <p className="mt-5 text-sm text-gray-600 dark:text-gray-400">
              Replacing a Skype Number across markets?{" "}
              <a href="#" className="font-semibold text-[#d9603f] hover:underline">
                Switch from Skype →
              </a>
            </p>

            <ul className="mt-6 space-y-2">
              {heroChecks.map((c) => (
                <li key={c} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                  <Img src={IC.check} alt="" className="h-4 w-4" /> {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage card */}
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-black/5 dark:bg-gray-800 dark:ring-white/10">
            <div className="bg-[#0f4338] px-5 py-4">
              <p className="text-sm font-semibold text-white">Caribbean · coverage</p>
            </div>
            <div className="space-y-2 p-4">
              {coverage.map((c) => (
                <div
                  key={c.code}
                  className="flex items-center justify-between gap-3 rounded-xl bg-[#f8f6f2] px-4 py-3 dark:bg-white/5"
                >
                  <span className="flex items-center gap-3">
                    <span className="text-xs font-bold text-gray-400 dark:text-gray-500">{c.code}</span>
                    <span className="text-sm font-medium dark:text-white">{c.name}</span>
                  </span>
                  <span className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 dark:text-gray-500">{c.dial}</span>
                    <span className={badge(c.state)}>{c.state === "live" ? "Live" : "Request"}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CARIBBEAN MARKETS (dark) ─── */}
      <section className={darkBand}>
        <div className="mx-auto max-w-6xl">
          <SectionHead
            onDark
            eyebrow="Caribbean markets"
            title="Local numbers across Caribbean."
            sub="Get local numbers across Caribbean markets — reach customers, communities, and diaspora networks with trusted local presence."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {markets.map((m) => (
              <div key={m.code} className={`${cardOnDark} flex flex-col`}>
                <div className="flex items-start justify-between">
                  <span className="text-2xl font-extrabold tracking-tight dark:text-white">{m.code}</span>
                  <span className={badge(m.state)}>{m.state === "live" ? "Available" : "By request"}</span>
                </div>
                <h3 className="mt-6 text-base font-bold dark:text-white">{m.name}</h3>
                <p className="mt-0.5 text-xs text-gray-400 dark:text-gray-500">{m.dial}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{m.desc}</p>
                <a href="#" className="mt-5 inline-block text-sm font-semibold text-[#d9603f] hover:underline">
                  {m.cta} →
                </a>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-2xl text-center text-xs leading-relaxed text-white/40">
            Market availability, number types and lead times vary by country and carrier partner. Some markets
            require verification before activation.
          </p>
        </div>
      </section>

      {/* ─── WHY CARIBBEAN PRESENCE MATTERS ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-6xl">
          <SectionHead
            eyebrow="Why Caribbean presence matters"
            title={
              <>
                Be local across Caribbean — <br className="hidden sm:block" />
                from one workspace.
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {whyCards.map((w) => (
              <div key={w.title} className={cardOnLight}>
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${w.tint} dark:bg-white/5`}
                >
                  <Img src={w.icon} alt="" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold dark:text-white">{w.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{w.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CALLING, AI RECEPTIONIST & VIDEO (dark) ─── */}
      <section className={darkBand}>
        <div className="mx-auto max-w-6xl">
          <SectionHead
            onDark
            eyebrow="Calling, AI Receptionist & Video"
            title={
              <>
                Every Caribbean number, <br className="hidden sm:block" />
                connected to everything.
              </>
            }
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {connected.map((c) => (
              <div key={c.title} className={cardOnDark}>
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${c.tint} dark:bg-white/5`}
                >
                  <Img src={c.icon} alt="" className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold dark:text-white">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MORE CARIBBEAN MARKETS ─── */}
      <section className="bg-white px-4 py-20 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow pill>More Caribbean markets</Eyebrow>
          <h2 className="mt-4 text-3xl font-extrabold leading-snug sm:text-4xl dark:text-white">
            Need a market not listed?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Backed by a global connectivity agreement, we&rsquo;re expanding across Caribbean by demand. Tell us
            the country or city you need and we&rsquo;ll review availability.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className={coralBtn}>Request a Market →</button>
            <button className={outlineTealBtn}>Talk to Sales</button>
          </div>
        </div>
      </section>

      {/* ─── QUESTIONS (dark) ─── */}
      <section className={darkBand}>
        <div className="mx-auto max-w-3xl">
          <SectionHead onDark eyebrow="Questions" title="Caribbean coverage, answered." />

          {/* Availability notice */}
          <div className="mt-10 rounded-2xl border-l-4 border-[#d9603f] bg-white p-5 shadow-sm dark:bg-white/[0.04]">
            <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400">
              Local-number availability may vary by country, city, number type, carrier partner, verification
              requirement, eligibility rule, and applicable law. Some numbers may require business verification,
              proof of address, identity checks, or additional onboarding before activation.
            </p>
          </div>

          <div className="mt-6 space-y-3">
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
                        isOpen ? "bg-[#d9603f] text-white" : "text-[#d9603f]"
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
      <section className="bg-[#0d100f] px-4 pb-20 sm:px-6 lg:px-8 dark:bg-gray-950">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-[#0f4338] to-[#136b53] px-6 py-16 text-center sm:px-10">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Sound local across Caribbean.
            <br />
            <span className="text-[#f0a58c]">Reach anywhere.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/70">
            Get local numbers across Caribbean with calling, video, and an AI Receptionist — managed from one
            workspace.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <button className={coralBtn}>Explore Caribbean Coverage →</button>
            <button className={lightBtn}>Request a Market</button>
            <button className={lightBtn}>Talk to Sales</button>
          </div>
          <p className="mt-6 text-sm text-white/70">
            Replacing a Skype Number?{" "}
            <a href="#" className="font-semibold text-white hover:underline">
              Switch from Skype →
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}

export default CaribbeanLocalNumbers;
export { CaribbeanLocalNumbers };