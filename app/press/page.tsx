"use client";


import React, { useMemo, useState } from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiBook,
  FiCheck,
  FiClock,
  FiCopy,
  FiDownload,
  FiFile,
  FiGlobe,
  FiHome,
  FiInfo,
  FiMic,
  FiPackage,
  FiPhone,
  FiPlus,
  FiSearch,
  FiSmartphone,
  FiX,
} from "react-icons/fi";

// ─── IMAGE PATHS ─────────────────────────────────────────────────────────────
const IMAGES = {
  heroOffice: { src: "/images/Zoiko Local communications team reviewing an announcement together.png", alt: "An open-plan office with rows of desks" },
  heroMeeting: { src: "/images/Journalist taking notes during a briefing.png", alt: "Two colleagues talking across a desk" },
  featured: { src: "/images/Mobile phone displaying a call-summary interface.png", alt: "A laptop on a marble table beside a coffee cup" },
  r1: { src: "/images/European city skyline.png", alt: "A business leader seated in an office" },
  r2: { src: "/images/Two business professionals shaking hands.png", alt: "A team presentation in a brick-walled office" },
  r3: { src: "/images/Overhead view of a desk with documents and a laptop.png", alt: "A professional smiling at the camera" },
  r4: { src: "/images/Team discussing around a table in an office.png", alt: "Overhead view of laptops on a shared desk" },
  r5: { src: "/images/Colleagues collaborating on a laptop.png", alt: "A customer being served at a counter" },
  r6: { src: "/images/Group of professionals in a meeting.png", alt: "Hands gesturing near a laptop in a meeting" },
  r7: { src: "/images/press/release-correction.png", alt: "A person using a laptop dashboard" },
  r8: { src: "/images/press/release-alliance.png", alt: "Two colleagues high-fiving at a desk" },
  screenshot: { src: "/images/Modern office building exterior.png", alt: "Conversation Center product screenshot" },
  lifestyle: { src: "/images/Zoiko Local mobile app interface screenshot.png", alt: "A team collaborating in a meeting room" },
  headshots: { src: "/images/Background (2).png", alt: "Four colleagues talking together" },
  amara: { src: "/images/Portrait of Amara Chen.png", alt: "Portrait of Amara Chen" },
  rafael: { src: "/images/Portrait of Rafael Ortiz.png", alt: "Portrait of Rafael Ortiz" },
  priya: { src: "/images/Portrait of Priya Nandakumar.png", alt: "Portrait of Priya Nandakumar" },
};

// Fixed-frame image. Wrapper holds the reserved space, so a missing file shows
// the warm placeholder tone rather than collapsing the card.
function Img({
  src,
  alt,
  className = "",
  rounded = "rounded-2xl",
}: {
  src: string;
  alt: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div className={`relative overflow-hidden bg-[#EDE7DB] ${rounded} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  );
}

// ─── RELEASES ────────────────────────────────────────────────────────────────
const CATEGORIES = [
  "All",
  "Product",
  "Expansion",
  "Partnerships",
  "Trust & compliance",
  "Leadership",
  "Corporate",
] as const;

type Release = {
  id: string;
  tag: string;
  category: (typeof CATEGORIES)[number];
  date: string;
  title: string;
  summary: string;
  image: { src: string; alt: string };
  correction?: string;
};

const releases: Release[] = [
  {
    id: "eu-markets",
    tag: "Market expansion",
    category: "Expansion",
    date: "Jul 14, 2026",
    title: "Zoiko Local expands local-number availability to five additional European markets.",
    summary:
      "Business number registration is now open in five more European countries, following the same verification and porting process used in existing markets.",
    image: IMAGES.r1,
  },
  {
    id: "globalporting",
    tag: "Partnership",
    category: "Partnerships",
    date: "Jun 2, 2026",
    title: "Zoiko Local partners with GlobalPorting Hub to streamline number porting for diaspora founders.",
    summary:
      "The partnership reduces the manual documentation steps founders face when porting an existing number into Zoiko Local from abroad.",
    image: IMAGES.r2,
  },
  {
    id: "recording-review",
    tag: "Trust & compliance",
    category: "Trust & compliance",
    date: "May 5, 2026",
    title: "Zoiko Local completes an independent review of its recording and consent controls.",
    summary:
      "An external reviewer evaluated how call-recording and transcription settings are configured, disclosed and enforced across supported markets.",
    image: IMAGES.r3,
  },
  {
    id: "trust-lead",
    tag: "Leadership",
    category: "Leadership",
    date: "Mar 18, 2026",
    title: "Zoiko Local names a new Head of Trust & Communications Compliance.",
    summary:
      "The role will oversee recording-and-consent policy, regulatory correspondence and market-entry compliance reviews across Zoiko Local's supported regions.",
    image: IMAGES.r4,
  },
  {
    id: "conversation-center-beta",
    tag: "Product update",
    category: "Product",
    date: "Feb 9, 2026",
    title: "Zoiko Local rolls out Conversation Center to web and mobile beta testers.",
    summary:
      "Beta access brings calls, messages and voicemail into a single supported view, with general availability to follow after the feedback period closes.",
    image: IMAGES.r5,
  },
  {
    id: "advisory-council",
    tag: "Corporate",
    category: "Corporate",
    date: "Jan 12, 2026",
    title: "Zoiko Local opens applications for its 2026 Founder Advisory Council.",
    summary:
      "The council will give a small group of business owners a standing channel to shape upcoming calling, messaging and number-porting features.",
    image: IMAGES.r6,
  },
  {
    id: "nigeria-clarification",
    tag: "Correction",
    category: "Corporate",
    date: "Dec 4, 2025",
    correction: "Corrected Dec 19, 2025",
    title: "Clarifying the rollout timeline for Nigeria number availability.",
    summary:
      "This release was updated to correct the stated onboarding window for new business-number registrations in Nigeria. The original claim overstated same-day activation.",
    image: IMAGES.r7,
  },
  {
    id: "carrier-alliance",
    tag: "Partnership",
    category: "Partnerships",
    date: "Oct 21, 2025",
    title: "Zoiko Local joins the Carrier Interoperability Alliance.",
    summary:
      "Membership supports faster, more consistent number-porting timelines as Zoiko Local coordinates with additional regional carrier partners.",
    image: IMAGES.r8,
  },
];

const PER_PAGE = 6;

// ─── FACTS ───────────────────────────────────────────────────────────────────
const facts = [
  { icon: <FiHome />, title: "Corporate relationship", body: "Zoiko Local is a trading name of Zoiko Communications Group Inc., a Zoiko Group company." },
  { icon: <FiPhone />, title: "Product category", body: "A business calling and communications platform for phone, messaging, video and AI-assisted call handling." },
  { icon: <FiGlobe />, title: "Supported markets", body: "Local numbers are available across the United States, United Kingdom, Canada, selected European markets, Nigeria, South Africa and Jamaica." },
  { icon: <FiSmartphone />, title: "Access today", body: "Zoiko Local is available on the web now. Native iOS and Android apps are in development ahead of release." },
];

const factQa = [
  { q: "What is Zoiko Local?", a: "Zoiko Local is a business calling and communications platform that gives teams a dedicated business number for calling, messaging, video and AI-assisted call handling, on the web and on supported mobile devices." },
  { q: "Who operates Zoiko Local?", a: "Zoiko Local is a trading name of Zoiko Communications Group Inc., a Zoiko Group company." },
  { q: "Where can media download logos and brand assets?", a: "Approved logos, product screenshots and boilerplate copy are available in the media resources section below, with no account or form required." },
  { q: "How can journalists contact Zoiko Local?", a: "Use the media inquiry form on this page, which routes directly to the media relations team rather than to sales or customer support." },
];

// ─── MEDIA ASSETS ────────────────────────────────────────────────────────────
const assets = [
  { kind: "logo-dark", title: "Zoiko Local logo — light", meta: "SVG, PNG · for dark backgrounds" },
  { kind: "logo-light", title: "Zoiko Local logo — dark", meta: "SVG, PNG · for light backgrounds" },
  { kind: "image", image: IMAGES.screenshot, title: "Product screenshot — Conversation Center", meta: "PNG · v2026.08 · web" },
  { kind: "image", image: IMAGES.lifestyle, title: "Approved lifestyle imagery", meta: "png · rights cleared for press use" },
  { kind: "doc", icon: <FiFile />, title: "Boilerplate & fact sheet", meta: "DOCX, PDF · v1.3 · effective Aug 2026" },
  { kind: "doc", icon: <FiBook />, title: "Brand usage guidelines", meta: "PDF · naming, clear space, do's and don'ts" },
  { kind: "image", image: IMAGES.headshots, title: "Leadership headshots", meta: "png · approved spokespeople only" },
  { kind: "zip", icon: <FiPackage />, title: "Full media kit (ZIP)", meta: "All current approved assets, with manifest" },
];

// ─── SPOKESPEOPLE — require sign-off before publishing ──────────────────────
const spokespeople = [
  {
    image: IMAGES.amara,
    name: "Amara Chen",
    role: "Head of Communications",
    body: "Amara leads corporate communications for Zoiko Local and speaks to the company's product direction, market strategy and newsroom practices.",
    topics: ["Company strategy", "Market expansion"],
  },
  {
    image: IMAGES.rafael,
    name: "Rafael Ortiz",
    role: "VP, Trust & Compliance",
    body: "Rafael oversees recording-and-consent policy and regulatory readiness, and is available to speak on privacy and compliance questions.",
    topics: ["Privacy", "Regulatory compliance"],
  },
  {
    image: IMAGES.priya,
    name: "Priya Nandakumar",
    role: "Head of Product",
    body: "Priya leads product for Zoiko Local, including Conversation Center and AI Receptionist, and can speak to feature roadmap and design decisions.",
    topics: ["Product roadmap", "AI Receptionist"],
  },
];

// ─── COVERAGE — each needs a real, live link ─────────────────────────────────
const coverage = [
  { outlet: "TechWire Daily", headline: "Zoiko Local expands local-number access across new regions", date: "Jul 16, 2026" },
  { outlet: "Comms Weekly", headline: "Inside the AI-receptionist trend business tools are chasing", date: "Jun 10, 2026" },
  { outlet: "The Diaspora Founder", headline: "How a local number helps founders build trust abroad", date: "Apr 2, 2026" },
  { outlet: "Small Business Signal", headline: "What separating your work number actually solves", date: "Feb 20, 2026" },
];

// ─── BOILERPLATE ─────────────────────────────────────────────────────────────
const boilerplates = [
  {
    title: "About Zoiko Local",
    body: "Zoiko Local is a business calling and communications platform that gives teams a dedicated business number for calling, messaging, video conversations and AI-assisted call handling — on the web today, with mobile apps in development. Zoiko Local is a trading name of Zoiko Communications Group Inc.",
  },
  {
    title: "About Zoiko Communications Group",
    body: "Zoiko Communications Group Inc. is the entity behind Zoiko Local's local-number, business-communication, verification and account-management services, operating under applicable regulatory, compliance and data-processing policies in each supported market.",
  },
  {
    title: "About Zoiko Group",
    body: "Zoiko Communications Group Inc. is a Zoiko Group company. For more on the wider Zoiko Group family and its other businesses, visit the corporate About page linked below.",
    link: "Visit About Zoiko Group",
  },
];

// ─── FAQ ─────────────────────────────────────────────────────────────────────
// Only the first answer was legible in the mockup; the rest restate rules
// already stated on this page so the FAQ can't contradict it.
const faqs = [
  {
    q: "Can I use the Zoiko Local logo in my article?",
    a: "Yes. Logos in the media resources section are cleared for editorial and press use without approval. Please keep the original proportions and colors, and avoid placing the logo on a busy background.",
  },
  {
    q: "How do I request an interview with a Zoiko Local spokesperson?",
    a: "Use the media inquiry form and select “Interview / comment request”. Availability isn't guaranteed on any given topic or date — the team will route your request to the right spokesperson.",
  },
  {
    q: "What should I do if I spot an error in a published release?",
    a: "Send it through the media inquiry form. Corrected releases keep their original publication date and carry a visible correction notice and correction date, as with the Nigeria availability clarification in the archive above.",
  },
  {
    q: "Can I request a product demo for a story?",
    a: "Yes — note it in your inquiry, along with your deadline. Demos are arranged with the product team rather than through sales, so lead time varies with the feature you want to see.",
  },
  {
    q: "I'm a customer with a support question — is this the right place?",
    a: "No. This form reaches media relations only. Customer support and sales requests should use their dedicated contact channels, which will get you a faster answer.",
  },
  {
    q: "Do you guarantee a response time for media inquiries?",
    a: "No fixed service level is promised. Including your deadline with the date, time and time zone lets the team triage accordingly, and deadline-bound requests are prioritised.",
  },
];

// ─── SHARED ──────────────────────────────────────────────────────────────────
const cardBase = "rounded-2xl border border-[#E8E2D5] bg-white";

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#C2603F]">
      <span className="h-px w-5 bg-[#C2603F]" aria-hidden />
      {children}
    </p>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-4 text-3xl font-bold leading-[1.2] tracking-tight text-[#0E2A21] md:text-[34px]">
      {children}
    </h2>
  );
}

// Category → pill colour. A "Correction" tag is visually distinct on purpose:
// a reader scanning the archive should be able to spot it without reading.
function tagClass(tag: string) {
  if (tag === "Correction") return "bg-[#FBDDD2] text-[#C2421F]";
  if (tag === "Market expansion") return "bg-[#FBEAE3] text-[#C2421F]";
  if (tag === "Trust & compliance") return "bg-[#FBEAE3] text-[#C2421F]";
  return "bg-[#E4EFE9] text-[#0E5C4E]";
}

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function PressNewsroom() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [page, setPage] = useState(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return releases.filter((r) => {
      const inCategory = category === "All" || r.category === category;
      const inQuery =
        !q || r.title.toLowerCase().includes(q) || r.summary.toLowerCase().includes(q);
      return inCategory && inQuery;
    });
  }, [query, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  // Clamp rather than store a page that no longer exists after filtering.
  const currentPage = Math.min(page, totalPages);
  const visible = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  async function copyBoilerplate(title: string, body: string) {
    try {
      await navigator.clipboard.writeText(body);
      setCopied(title);
      window.setTimeout(() => setCopied(null), 2000);
    } catch {
      // Clipboard can be blocked by permissions or a non-secure context.
      // Failing silently is wrong here — the text is selectable, so tell them.
      setCopied(`${title}:failed`);
      window.setTimeout(() => setCopied(null), 3000);
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F3EC]">
      {/* ═══ HERO ═══ */}
      <section className="bg-[#E7E9E3] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Press &amp; Newsroom</Eyebrow>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-[#0E2A21] md:text-[48px]">
              News from <span className="italic text-[#C2421F]">Zoiko Local.</span>
            </h1>
            <p className="mt-5 max-w-lg text-[14px] leading-7 text-[#5C6660]">
              Official announcements, product news, company updates, media resources, and press
              information from Zoiko Local.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#media-inquiry"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#E85D3C] px-7 text-[14px] font-semibold text-white shadow-lg transition hover:bg-[#D14C2C]"
              >
                Send Media Enquiry
              </Link>
              <Link
                href="#media-resources"
                className="inline-flex h-12 items-center justify-center rounded-full border border-[#C9CBC2] bg-transparent px-7 text-[14px] font-semibold text-[#0E2A21] transition hover:bg-white"
              >
                Media resources
              </Link>
            </div>
          </div>

          <div className="relative">
            <Img src={IMAGES.heroOffice.src} alt={IMAGES.heroOffice.alt} className="ml-auto h-[300px] w-[82%]" />
            <Img
              src={IMAGES.heroMeeting.src}
              alt={IMAGES.heroMeeting.alt}
              className="absolute -bottom-8 left-0 h-[170px] w-[48%] ring-4 ring-[#E7E9E3]"
            />

            <span className="absolute -left-2 top-4 inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FBEAE3] text-[#C2421F]">
                <FiMic className="text-[13px]" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[12.5px] font-bold text-[#0E2A21]">New release</span>
                <span className="block text-[11px] text-[#8C8271]">Published Aug 26, 2026</span>
              </span>
            </span>

            <span className="absolute bottom-6 right-0 inline-flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#FBEAE3] text-[#C2421F]">
                <FiDownload className="text-[13px]" aria-hidden />
              </span>
              <span className="leading-tight">
                <span className="block text-[12.5px] font-bold text-[#0E2A21]">Media kit</span>
                <span className="block text-[11px] text-[#8C8271]">Logos &amp; boilerplate</span>
              </span>
            </span>
          </div>
        </div>
      </section>

      {/* ═══ FEATURED RELEASE ═══ */}
      <section className="bg-[#F4F0E7] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Latest release</Eyebrow>
          <H2>The newest word from Zoiko Local.</H2>

          <article className="mt-10 grid overflow-hidden rounded-2xl bg-white md:grid-cols-2">
            <div className="relative">
              <Img
                src={IMAGES.featured.src}
                alt={IMAGES.featured.alt}
                className="h-[240px] w-full md:h-full md:min-h-[280px]"
                rounded="rounded-none"
              />
              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1.5 text-[11px] font-bold text-[#0E2A21]">
                Featured
              </span>
            </div>

            <div className="p-7 md:p-8">
              <p className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#E4EFE9] px-3 py-1.5 text-[11.5px] font-semibold text-[#0E5C4E]">
                  Product update
                </span>
                <span className="text-[12.5px] text-[#8C8271]">Aug 26, 2026</span>
              </p>
              <h3 className="mt-4 text-[22px] font-bold leading-tight text-[#0E2A21]">
                Zoiko Local brings AI Receptionist call summaries to Business plan subscribers.
              </h3>
              <p className="mt-3 text-[13px] leading-7 text-[#5C6660]">
                The update surfaces call intent, caller detail, and follow-up notes from AI
                Receptionist-handled calls directly in the Conversation Center, on web and supported
                mobile devices.
              </p>
              <Link
                href="#"
                className="mt-5 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#E85D3C] hover:underline"
              >
                Read the full release <FiArrowRight aria-hidden />
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* ═══ NEWSROOM ARCHIVE ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Newsroom archive</Eyebrow>
          <H2>Latest news and press releases.</H2>

          {/* Search + filters. Both really work — they filter the array below. */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <div className="relative min-w-[240px] flex-1 sm:max-w-xs">
              <label htmlFor="press-search" className="sr-only">
                Search press releases
              </label>
              <FiSearch
                className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8C8271]"
                aria-hidden
              />
              <input
                id="press-search"
                type="search"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setPage(1);
                }}
                placeholder="Search press releases"
                className="h-11 w-full rounded-full border border-[#DDD3C2] bg-white pl-11 pr-4 text-[13px] text-[#0E2A21] placeholder:text-[#A79C86] focus:border-[#0E5C4E] focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by category">
              {CATEGORIES.map((c) => {
                const on = c === category;
                return (
                  <button
                    key={c}
                    type="button"
                    aria-pressed={on}
                    onClick={() => {
                      setCategory(c);
                      setPage(1);
                    }}
                    className={`h-11 rounded-full px-5 text-[13px] font-semibold transition ${
                      on ? "bg-[#0E3A32] text-white" : "bg-white text-[#5C6660] hover:text-[#0E2A21]"
                    }`}
                  >
                    {c}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Results */}
          {visible.length === 0 ? (
            <p className="mt-10 rounded-2xl bg-white px-6 py-8 text-center text-[13.5px] text-[#5C6660]">
              No releases match that search. Try a different term or clear the category filter.
            </p>
          ) : (
            <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {visible.map((r) => (
                <article key={r.id} className="flex flex-col overflow-hidden rounded-2xl bg-white">
                  <Img src={r.image.src} alt={r.image.alt} className="h-[150px] w-full" rounded="rounded-none" />

                  <div className="flex flex-1 flex-col p-5">
                    {r.correction && (
                      <span className="mb-2.5 w-fit rounded-full bg-[#FBDDD2] px-3 py-1 text-[11px] font-bold text-[#C2421F]">
                        {r.correction}
                      </span>
                    )}
                    <p className="flex flex-wrap items-center gap-3">
                      <span
                        className={`rounded-full px-3 py-1 text-[11px] font-semibold ${tagClass(r.tag)}`}
                      >
                        {r.tag}
                      </span>
                      <span className="text-[12px] text-[#8C8271]">{r.date}</span>
                    </p>

                    <h3 className="mt-3.5 text-[15.5px] font-bold leading-snug text-[#0E2A21]">
                      {r.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[12.5px] leading-6 text-[#5C6660]">{r.summary}</p>

                    <Link
                      href="#"
                      className="mt-4 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#E85D3C] hover:underline"
                    >
                      Read release <FiArrowRight aria-hidden />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Pagination — real, and reflects the filtered result count. */}
          {totalPages > 1 && (
            <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Pagination">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="h-10 rounded-lg bg-white px-4 text-[13px] font-semibold text-[#0E2A21] transition disabled:opacity-40"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setPage(n)}
                  aria-current={n === currentPage ? "page" : undefined}
                  className={`h-10 w-10 rounded-lg text-[13px] font-semibold transition ${
                    n === currentPage ? "bg-[#0E3A32] text-white" : "bg-white text-[#0E2A21]"
                  }`}
                >
                  {n}
                </button>
              ))}
              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="h-10 rounded-lg bg-white px-4 text-[13px] font-semibold text-[#0E2A21] transition disabled:opacity-40"
              >
                Next
              </button>
            </nav>
          )}
        </div>
      </section>

      {/* ═══ FACTS AT A GLANCE ═══ */}
      <section className="bg-[#F4F0E7] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Facts at a glance</Eyebrow>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <H2>Zoiko Local, briefly.</H2>
            <span className="rounded-full bg-[#E4EFE9] px-4 py-2 text-[11.5px] text-[#0E5C4E]">
              Facts as of August 2026
            </span>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.title} className="rounded-2xl bg-white p-5">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#E4EFE9] text-[#0E5C4E]">
                  {f.icon}
                </span>
                <h3 className="mt-4 text-[14px] font-bold text-[#0E2A21]">{f.title}</h3>
                <p className="mt-2 text-[12px] leading-6 text-[#5C6660]">{f.body}</p>
              </div>
            ))}
          </div>

          {/* Description list — these are question/answer pairs, so <dl> is the
              correct element and it stacks cleanly on mobile. */}
          <dl className="mt-5 rounded-2xl bg-white p-6 md:p-7">
            {factQa.map((f, i) => (
              <div key={f.q} className={i > 0 ? "mt-5 border-t border-[#EDE7DB] pt-5" : ""}>
                <dt className="text-[13.5px] font-bold text-[#0E2A21]">{f.q}</dt>
                <dd className="mt-1.5 text-[12.5px] leading-6 text-[#5C6660]">{f.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ═══ MEDIA RESOURCES ═══ */}
      <section id="media-resources" className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Media resources</Eyebrow>
          <H2>Everything you need to cite Zoiko Local accurately.</H2>
          <p className="mt-4 max-w-xl text-[13px] leading-7 text-[#5C6660]">
            Logos, product imagery and approved boilerplate text, free to use in coverage. No account
            required.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {assets.map((a) => (
              <div key={a.title} className="flex flex-col overflow-hidden rounded-2xl bg-white">
                {/* Logo tiles render the wordmark as type, not an image file —
                    the preview stays crisp at any size. */}
                {a.kind === "logo-dark" && (
                  <div className="flex h-[130px] items-center justify-center bg-[#0E3129]">
                    <span className="text-[17px] font-bold tracking-tight">
                      <span className="text-[#E85D3C]">ZOiKO</span>
                      <span className="text-white">LOCAL</span>
                      <sup className="ml-0.5 align-super text-[7px] text-white/50">™</sup>
                    </span>
                  </div>
                )}
                {a.kind === "logo-light" && (
                  <div className="flex h-[130px] items-center justify-center bg-white">
                    <span className="text-[17px] font-bold tracking-tight">
                      <span className="text-[#E85D3C]">ZOiKO</span>
                      <span className="text-[#0E2A21]">LOCAL</span>
                      <sup className="ml-0.5 align-super text-[7px] text-[#8C8271]">™</sup>
                    </span>
                  </div>
                )}
                {a.kind === "image" && a.image && (
                  <Img src={a.image.src} alt={a.image.alt} className="h-[130px] w-full" rounded="rounded-none" />
                )}
                {(a.kind === "doc" || a.kind === "zip") && (
                  <div
                    className={`flex h-[130px] items-center justify-center ${
                      a.kind === "zip" ? "bg-[#FBEAE3] text-[#C2421F]" : "bg-white text-[#0E5C4E]"
                    }`}
                  >
                    <span className="text-3xl">{a.icon}</span>
                  </div>
                )}

                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-[13.5px] font-bold leading-snug text-[#0E2A21]">{a.title}</h3>
                  <p className="mt-1.5 flex-1 text-[11.5px] leading-5 text-[#8C8271]">{a.meta}</p>
                  <Link
                    href="#"
                    className="mt-4 flex items-center justify-between text-[12.5px] font-semibold text-[#E85D3C] hover:underline"
                  >
                    Download <FiDownload aria-hidden />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 flex items-start gap-2.5 rounded-xl bg-white px-5 py-4 text-[11.5px] leading-5 text-[#8C8271]">
            <FiInfo className="mt-0.5 shrink-0" aria-hidden />
            All assets are cleared for editorial and press use. Please don&apos;t alter logo colors or
            proportions, and credit imagery as noted in each file&apos;s metadata.
          </p>
        </div>
      </section>

      {/* ═══ SPOKESPEOPLE ═══ */}
      <section className="bg-[#F4F0E7] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Media spokespeople</Eyebrow>
          <H2>Approved sources for interviews and comment.</H2>
          <p className="mt-4 max-w-xl text-[13px] leading-7 text-[#5C6660]">
            Availability isn&apos;t guaranteed on any given topic or date — reach out through the media
            inquiry form and our team will route your request.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {spokespeople.map((s) => (
              <div key={s.name} className={`${cardBase} p-5`}>
                <Img
                  src={s.image.src}
                  alt={s.image.alt}
                  className="h-[72px] w-[72px]"
                  rounded="rounded-xl"
                />
                <h3 className="mt-4 text-[15px] font-bold text-[#0E2A21]">{s.name}</h3>
                <p className="mt-0.5 text-[12.5px] font-semibold text-[#E85D3C]">{s.role}</p>
                <p className="mt-3 text-[12px] leading-6 text-[#5C6660]">{s.body}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.topics.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-[#E4EFE9] px-3 py-1.5 text-[11px] font-semibold text-[#0E5C4E]"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ MEDIA INQUIRY ═══ */}
      <section id="media-inquiry" className="bg-[#0E3129] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.15fr]">
          <div>
            <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8B49A]">
              <span className="h-px w-5 bg-[#E8B49A]" aria-hidden />
              Media inquiry
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.2] text-white md:text-[34px]">
              Reach our press team directly.
            </h2>
            <p className="mt-5 max-w-md text-[13px] leading-7 text-white/70">
              Journalist or media professional? Send your inquiry and deadline. Customer support and
              sales requests should use their dedicated contact channels.
            </p>

            <ul className="mt-7 space-y-4">
              <li className="flex items-start gap-3">
                <FiClock className="mt-0.5 shrink-0 text-white/50" aria-hidden />
                <p className="text-[12.5px] leading-6 text-white/70">
                  If you&apos;re working to a deadline, include the date, time and time zone so we can
                  triage accordingly.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <FiMic className="mt-0.5 shrink-0 text-white/50" aria-hidden />
                <p className="text-[12.5px] leading-6 text-white/70">
                  Use this form only for media inquiries. Please don&apos;t include customer account
                  data, passwords or call content.
                </p>
              </li>
            </ul>
          </div>

          {/* Real labelled fields. No endpoint wired — point the submit at your
              media-relations handler. */}
          <div className="rounded-2xl bg-white/[0.05] p-6 ring-1 ring-white/10 md:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="inq-type" className="block text-[12px] font-semibold text-white">
                  Inquiry type
                </label>
                <select
                  id="inq-type"
                  className="mt-2 h-11 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 text-[13px] text-white focus:border-[#E8B49A] focus:outline-none"
                >
                  <option className="text-[#0E2A21]">Interview / comment request</option>
                  <option className="text-[#0E2A21]">Product demo for a story</option>
                  <option className="text-[#0E2A21]">Fact check / correction</option>
                  <option className="text-[#0E2A21]">Media assets question</option>
                </select>
              </div>
              <div>
                <label htmlFor="inq-outlet" className="block text-[12px] font-semibold text-white">
                  Outlet / publication
                </label>
                <input
                  id="inq-outlet"
                  type="text"
                  placeholder="e.g. TechWire Daily"
                  className="mt-2 h-11 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 text-[13px] text-white placeholder:text-white/35 focus:border-[#E8B49A] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="inq-name" className="block text-[12px] font-semibold text-white">
                  Your name
                </label>
                <input
                  id="inq-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Full name"
                  className="mt-2 h-11 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 text-[13px] text-white placeholder:text-white/35 focus:border-[#E8B49A] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="inq-email" className="block text-[12px] font-semibold text-white">
                  Work email
                </label>
                <input
                  id="inq-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@outlet.com"
                  className="mt-2 h-11 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 text-[13px] text-white placeholder:text-white/35 focus:border-[#E8B49A] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="inq-deadline" className="block text-[12px] font-semibold text-white">
                  Deadline (optional)
                </label>
                <input
                  id="inq-deadline"
                  type="text"
                  placeholder="Date, time and time zone"
                  className="mt-2 h-11 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 text-[13px] text-white placeholder:text-white/35 focus:border-[#E8B49A] focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="inq-subject" className="block text-[12px] font-semibold text-white">
                  Subject
                </label>
                <input
                  id="inq-subject"
                  type="text"
                  placeholder="Brief subject line"
                  className="mt-2 h-11 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 text-[13px] text-white placeholder:text-white/35 focus:border-[#E8B49A] focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="inq-message" className="block text-[12px] font-semibold text-white">
                Message
              </label>
              <textarea
                id="inq-message"
                rows={4}
                placeholder="Tell us what you're working on and what you need"
                className="mt-2 w-full rounded-lg border border-white/15 bg-white/[0.06] px-3.5 py-3 text-[13px] text-white placeholder:text-white/35 focus:border-[#E8B49A] focus:outline-none"
              />
            </div>

            <p className="mt-4 text-[11.5px] leading-5 text-white/50">
              We&apos;ll use these details only to respond to your inquiry. Marketing communications
              are opt-in and separate from press correspondence.
            </p>

            <button
              type="button"
              className="mt-5 h-12 w-full rounded-full bg-[#E85D3C] text-[14px] font-semibold text-white transition hover:bg-[#D14C2C]"
            >
              Send media inquiry
            </button>
          </div>
        </div>
      </section>

      {/* ═══ SELECTED COVERAGE ═══ */}
      <section className="bg-[#F4F0E7] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Selected coverage</Eyebrow>
          <H2>What outlets are reporting.</H2>
          <p className="mt-4 max-w-xl text-[13px] leading-7 text-[#5C6660]">
            Independent, third-party reporting on Zoiko Local. Inclusion here isn&apos;t an
            endorsement by the outlets listed, and doesn&apos;t imply Zoiko authored these pieces.
          </p>

          <ul className="mt-10 border-t border-[#DDD3C2]">
            {coverage.map((c) => (
              <li key={c.headline} className="border-b border-[#DDD3C2]">
                <Link
                  href="#"
                  className="grid items-center gap-2 py-5 transition hover:opacity-70 md:grid-cols-[200px_1fr_auto_40px] md:gap-6"
                >
                  <span className="text-[13px] font-bold text-[#0E2A21]">{c.outlet}</span>
                  <span className="text-[13px] text-[#5C6660]">{c.headline}</span>
                  <span className="text-[12px] text-[#8C8271]">{c.date}</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E4EFE9] text-[#0E5C4E]">
                    <FiArrowUpRight className="text-[13px]" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-[11.5px] leading-5 text-[#8C8271]">
            Coverage links are reviewed periodically. Links that become broken, misleading or
            materially changed are updated or removed.
          </p>
        </div>
      </section>

      {/* ═══ BOILERPLATE ═══ */}
      <section className="bg-[#EBE4D8] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>About Zoiko Local</Eyebrow>
          <H2>Standard company descriptions, for citation.</H2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {boilerplates.map((b) => (
              <div key={b.title} className="flex flex-col rounded-2xl bg-white p-5">
                <h3 className="text-[14.5px] font-bold leading-snug text-[#0E2A21]">{b.title}</h3>
                <p className="mt-3 flex-1 text-[12px] leading-6 text-[#5C6660]">{b.body}</p>

                {b.link ? (
                  <Link
                    href="#"
                    className="mt-5 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0E5C4E] hover:underline"
                  >
                    {b.link} <FiArrowRight aria-hidden />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => copyBoilerplate(b.title, b.body)}
                    className="mt-5 inline-flex w-fit items-center gap-2 rounded-lg border border-[#DDD3C2] px-3.5 py-2 text-[12px] font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
                  >
                    {copied === b.title ? (
                      <>
                        <FiCheck className="text-[#0E5C4E]" aria-hidden /> Copied
                      </>
                    ) : copied === `${b.title}:failed` ? (
                      <>
                        <FiInfo aria-hidden /> Select and copy manually
                      </>
                    ) : (
                      <>
                        <FiCopy aria-hidden /> Copy boilerplate
                      </>
                    )}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-[#F7F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <Eyebrow>FAQ</Eyebrow>
          <H2>Press questions.</H2>

          <div className="mt-10 border-t border-[#DDD3C2]">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className="border-b border-[#DDD3C2]">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-4 py-5 text-left"
                  >
                    <span className="text-[13.5px] font-bold leading-6 text-[#0E2A21]">{f.q}</span>
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[11px] transition ${
                        open ? "bg-[#E85D3C] text-white" : "bg-[#E4EFE9] text-[#0E5C4E]"
                      }`}
                    >
                      {open ? <FiX aria-hidden /> : <FiPlus aria-hidden />}
                    </span>
                  </button>
                  {open && (
                    <p className="pb-5 pr-10 text-[12.5px] leading-6 text-[#5C6660]">{f.a}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}