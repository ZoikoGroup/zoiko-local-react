"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FiInfo,
  FiSearch,
  FiPlus,
  FiX,
  FiPhone,
  FiMessageSquare,
  FiVideo,
  FiMic,
  FiSmartphone,
  FiShield,
  FiGlobe,
  FiLock,
  FiChevronDown,
  FiAlertCircle,
} from "react-icons/fi";
import { FaLinkedin, FaXTwitter, FaInstagram } from "react-icons/fa6";



const IMAGES = {
  heroKingston: { src: "/images/Kingston, Jamaica city view with mountains in the background.png", alt: "Aerial skyline of Kingston, Jamaica" },
  cardKingston: { src: "/images/Kingston, Jamaica.png", alt: "Kingston, Jamaica" },
  cardMontegoBay: { src: "/images/Montego Bay, Jamaica.png", alt: "Montego Bay coastline, Jamaica" },
  porting: { src: "/images/Two people shaking hands in agreement.png", alt: "Two people shaking hands in an office" },
  callerIdentity: { src: "/images/Person using a laptop for account verification.png", alt: "A team reviewing code together on laptops" },
  useAnywhere: { src: "/images/Person using a phone for business communications.png", alt: "A man on a phone call at a desk with a laptop and coffee" },
};


function Img({
  src,
  alt,
  className = "",
  rounded = "rounded-xl",
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

const cardBase = "rounded-xl border border-[#E4E0D6] bg-white";

function Eyebrow({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <p className={`text-[11px] font-bold uppercase tracking-[0.14em] text-[#8C8271] ${centered ? "text-center" : ""}`}>
      {children}
    </p>
  );
}

function H2({ children, centered = true }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <h2
      className={`mt-3 text-[28px] font-bold leading-tight tracking-tight text-[#16130F] md:text-[32px] ${
        centered ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

function Tag({ label, tone = "ok" }: { label: string; tone?: "ok" | "warn" | "danger" }) {
  const styles: Record<string, string> = {
    ok: "bg-[#E1EFE6] text-[#20654A]",
    warn: "bg-[#FBF1DE] text-[#8A6114]",
    danger: "bg-[#FBE4DC] text-[#B0432A]",
  };
  return (
    <span
      className={`inline-block shrink-0 rounded px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.07em] ${styles[tone]}`}
    >
      {label}
    </span>
  );
}

/* -------------------------------------------------------------------------- */
/*  Content                                                                    */
/* -------------------------------------------------------------------------- */

const cities: { name: string; image?: { src: string; alt: string } }[] = [
  { name: "Kingston", image: IMAGES.cardKingston },
  { name: "Montego Bay", image: IMAGES.cardMontegoBay },
  { name: "Spanish Town" },
  { name: "Portmore" },
  { name: "Mandeville" },
  { name: "Ocho Rios" },
  { name: "Negril" },
  { name: "May Pen" },
];

const howItWorksSteps = [
  { n: "01", title: "Choose", body: "Pick an available eligible 876 or 658 number." },
  { n: "02", title: "Plan", body: "Confirm an eligible plan." },
  { n: "03", title: "Verify", body: "Complete required verification." },
  { n: "04", title: "Activate", body: "Activate the service." },
  { n: "05", title: "Dial", body: "Use mandatory 10-digit local dialing." },
];

const capabilities: { title: string; body: string; tag: string; tone: "ok" | "warn"; icon: IconType }[] = [
  {
    title: "Calling",
    body: "Inbound and outbound calling where the number, route, and plan support it. Jamaica domestic, wider NANP, Caribbean, and international destinations are treated separately.",
    tag: "Number dependent",
    tone: "ok",
    icon: FiPhone,
  },
  {
    title: "Messaging",
    body: "SMS/MMS only where technically supported, subject to Jamaica Data Protection Act direct-marketing rules.",
    tag: "Not guaranteed",
    tone: "warn",
    icon: FiMessageSquare,
  },
  {
    title: "Video",
    body: "Platform capability, plan dependent.",
    tag: "Plan dependent",
    tone: "warn",
    icon: FiVideo,
  },
  {
    title: "AI Receptionist",
    body: "Availability depends on plan, language, and release; never intercepts emergency dial paths.",
    tag: "Plan dependent",
    tone: "warn",
    icon: FiMic,
  },
  {
    title: "Web & mobile apps",
    body: "Manage your Jamaican number from supported devices, on-island or abroad.",
    tag: "Included",
    tone: "ok",
    icon: FiSmartphone,
  },
];

const portingSteps = [
  { title: "Check", body: "Portability and provider validation." },
  { title: "Authorize", body: "Subscriber authorization through the approved INPG process." },
  {
    title: "Activate",
    body: "Inbound/outbound routing, caller ID, messaging, and public-safety configuration verified after completion.",
  },
];

const emergencyNumbers = [
  { code: "119", title: "Police emergency (current JCF guidance)", active: true },
  { code: "110", title: "Ambulance / fire (current JCF guidance)", active: true },
  { code: "911", title: "Historic telecom route", active: false },
  { code: "112", title: "Historic telecom route", active: false },
];

const emergencyLegend: { label: string; body: string; dot: string }[] = [
  { label: "Active", body: "Routing confirmed end-to-end for your configured Jamaican service.", dot: "bg-[#3FBE95]" },
  {
    label: "Route validation required",
    body: "Not active for emergency use until upstream validation completes.",
    dot: "bg-[#E8B54B]",
  },
  { label: "Not offered", body: "Disclosed before purchase or activation, with alternative safety guidance.", dot: "bg-[#E8654A]" },
];

const messagingRows: { title: string; body: string; tag: string; tone: "ok" | "warn" }[] = [
  { title: "Sender identity", body: "Marketing messages carry identifiable sender/contact information.", tag: "Required", tone: "ok" },
  { title: "Cease-contact / objection", body: "A practical opt-out route is provided where required by law.", tag: "Supported", tone: "ok" },
  {
    title: "Purpose separation",
    body: "Service, security, billing, conversational, and marketing messages are treated as separate purposes.",
    tag: "Purpose-separated",
    tone: "ok",
  },
  {
    title: "List sourcing",
    body: "Scraped or purchased contact data is never presumed to be valid marketing permission.",
    tag: "Restricted",
    tone: "warn",
  },
];

/*
 * FAQ CONTENT — READ BEFORE USING
 * Only the first answer below ("What are Jamaica's area codes?") is actually
 * visible in your screenshot — every other accordion item is shown collapsed,
 * so there's no source text for it anywhere in the design you gave me.
 * The other 8 answers are my best-effort drafts, written to match the facts
 * and tone stated elsewhere on this same page (INPG porting, JCF numbers,
 * Jamaica's Data Protection Act, JMD billing). Replace them with your
 * approved copy before shipping — don't treat them as verified content.
 */
const faqs = [
  {
    q: "What are Jamaica's area codes?",
    a: "Jamaica uses 876 and 658. They are overlay area codes serving the same island-wide geographic area.",
  },
  {
    q: "Do 876 and 658 cover different parts of Jamaica?",
    a: "No. Both codes overlay the same territory island-wide — neither is tied to a specific city or parish, and choosing one over the other is an inventory preference, not a location signal.", // DRAFT — verify
  },
  {
    q: "How do I get a Jamaican number?",
    a: "Search for an available 876 or 658 number, confirm an eligible plan, complete any required verification, then activate the number.", // DRAFT — verify
  },
  {
    q: "Do I need to dial 10 digits in Jamaica?",
    a: "Yes. Local calls within Jamaica require all 10 digits, including the 876 or 658 area code.", // DRAFT — verify
  },
  {
    q: "Can I port my Jamaican number?",
    a: "Porting depends on your current provider, number type, and the approved INPG process — not every number is eligible, and your current service should stay active until the port is confirmed complete.", // DRAFT — verify
  },
  {
    q: "Does every Jamaican number support SMS?",
    a: "No. SMS/MMS support depends on the specific number, provider, and plan, and is subject to Jamaica's Data Protection Act direct-marketing rules.", // DRAFT — verify
  },
  {
    q: "Can I call 119 or 110?",
    a: "119 (police) and 110 (ambulance/fire) reflect current JCF guidance. 911 and 112 are historic telecom routes that Zoiko does not advertise as supported without independent route validation.", // DRAFT — verify
  },
  {
    q: "Can I use a Jamaican number while living abroad?",
    a: "Yes, through supported Zoiko Local apps where provider, plan, identity, and regulatory rules permit — though owning the number doesn't create a physical presence in Jamaica, and Jamaican emergency services shouldn't be relied on from overseas.", // DRAFT — verify
  },
  {
    q: "How much does a Jamaican number cost?",
    a: "Number fees, plan pricing, and applicable tax are shown from Zoiko's current price book during selection and checkout, billed in JMD when the Jamaican billing context is active.", // DRAFT — verify
  },
];

const footerColumns: { title: string; links: string[] }[] = [
  {
    title: "Platform",
    links: ["Search Numbers", "Pricing", "Business Workspace", "Mobile Apps", "Status Page", "Contact Support", "Contact Sales"],
  },
  {
    title: "Countries",
    links: ["United States", "United Kingdom", "Jamaica", "Canada", "Nigeria", "South Africa", "All Countries"],
  },
  {
    title: "Use cases",
    links: ["Business Numbers", "Diaspora Founders", "Remote Teams", "International Expansion", "Customer Support", "Founder-Led Business"],
  },
  {
    title: "Compare",
    links: ["Skype Alternative", "Google Voice Alternative", "OpenPhone Alternative", "Teams Phone Alternative", "Virtual Phone Number", "Local Business Number"],
  },
  {
    title: "Legal",
    links: [
      "Privacy Policy",
      "Terms of Service",
      "Acceptable Use Policy",
      "Data Processing Agreement",
      "AI Terms",
      "Recording & Consent",
      "Emergency Calling",
      "Number Porting",
      "Law Enforcement Requests",
      "Accessibility",
    ],
  },
  {
    title: "Company",
    links: ["About Zoiko Local", "About Zoiko Communications Group", "About Zoiko Group", "Press", "Careers", "Contact"],
  },
];

const footerBadges: { label: string; icon: IconType }[] = [
  { label: "Compliance-led", icon: FiShield },
  { label: "Cross-border", icon: FiGlobe },
  { label: "Enterprise-ready", icon: FiLock },
];

/* -------------------------------------------------------------------------- */
/*  Standalone header/footer — see note at top of file                       */
/* -------------------------------------------------------------------------- */

function SiteHeader() {
  return (
    <header className="border-b border-[#E4E0D6] bg-white">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0E3B33]">
            <FiPhone className="text-[15px] text-white" aria-hidden />
          </span>
          <span className="text-[16px] font-extrabold tracking-tight">
            <span className="text-[#0E3B33]">ZOIKO</span>
            <span className="text-[#E85D3C]">LOCAL</span>
            <sup className="ml-0.5 text-[9px] font-semibold text-[#8C8271]">TM</sup>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <button className="flex items-center gap-1 text-[13.5px] font-semibold text-[#16130F]">
            Products <FiChevronDown className="text-[13px]" aria-hidden />
          </button>
          <Link href="#" className="text-[13.5px] font-semibold text-[#16130F]">
            For Business
          </Link>
          <Link href="#" className="text-[13.5px] font-semibold text-[#16130F]">
            Pricing
          </Link>
          <Link href="#" className="flex items-center gap-1.5 text-[13.5px] font-semibold text-[#16130F]">
            Switch from Skype
            <span className="rounded bg-[#FBE4DC] px-1.5 py-0.5 text-[9.5px] font-bold uppercase tracking-[0.06em] text-[#B0432A]">
              Migrate
            </span>
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          <Link href="#" className="text-[13.5px] font-semibold text-[#0E3B33]">
            Sign In
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-[#E85D3C] px-5 text-[13.5px] font-semibold text-white transition hover:bg-[#D14C2C]"
          >
            Start Free
          </Link>
        </div>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t-4 border-[#E85D3C] bg-[#0B2620] py-14">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(6,1fr)]">
          <div>
            <span className="text-[16px] font-extrabold tracking-tight">
              <span className="text-white">ZOIKO</span>
              <span className="text-[#E8825F]">LOCAL</span>
            </span>
            <p className="mt-4 max-w-[220px] text-[12.5px] leading-6 text-white/60">
              A governed local-number and business communications service — built for transparent billing,
              jurisdiction-aware compliance, verified account ownership, and trusted global business presence.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              {footerBadges.map((b) => {
                const Icon = b.icon;
                return (
                  <span
                    key={b.label}
                    className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/15 px-3 py-1.5 text-[11px] font-semibold text-white/70"
                  >
                    <Icon aria-hidden /> {b.label}
                  </span>
                );
              })}
            </div>
            <div className="mt-5 flex gap-2.5">
              {[FaLinkedin, FaXTwitter, FaInstagram].map((Icon, i) => (
                <span
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-white/70"
                >
                  <Icon aria-hidden />
                </span>
              ))}
            </div>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/50">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-[12.5px] leading-5 text-white/75 hover:text-white">
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-3">
          <div>
            <h5 className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/50">Platform & ownership</h5>
            <p className="mt-2.5 text-[11.5px] leading-6 text-white/50">
              Zoiko Local is a trading name of Zoiko Communications Group Inc., a Zoiko Group company. Zoiko Local
              provides local-number, business communication, verification, account management, and related
              communications services, subject to the policies linked above.
            </p>
          </div>
          <div>
            <h5 className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/50">Availability & eligibility</h5>
            <p className="mt-2.5 text-[11.5px] leading-6 text-white/50">
              Number availability, activation and verification requirements, emergency-services access, porting,
              inbound and outbound calling, SMS/MMS, recording, transcription, AI-assisted features, taxes,
              surcharges, regulatory fees, and data processing may vary by country, number type, customer category,
              carrier partner, and applicable law.
            </p>
          </div>
          <div>
            <h5 className="text-[10.5px] font-bold uppercase tracking-[0.08em] text-white/50">Trademarks & comparisons</h5>
            <p className="mt-2.5 text-[11.5px] leading-6 text-white/50">
              Zoiko Local is not affiliated with, endorsed by, or sponsored by Skype, Microsoft, Microsoft Teams,
              Google, Google Voice, OpenPhone, Zoom, RingCentral, Dialpad, Aircall, or any third-party brand
              referenced for comparison, compatibility, or migration. All third-party trademarks remain the
              property of their respective owners.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-[11.5px] text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Zoiko Local &nbsp;|&nbsp; Zoiko Local is a trading name of Zoiko
            Communications Group Inc., a Zoiko Group company &nbsp;|&nbsp; All rights reserved.
          </p>
          <div className="flex gap-5">
            {["Privacy", "Terms", "Emergency Calling", "Accessibility", "Status"].map((l) => (
              <Link key={l} href="#" className="hover:text-white">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

function JamaicaLocalNumbers() {
  const [areaFilter, setAreaFilter] = useState<"either" | "876" | "658">("either");
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>Jamaica · +1 876 / +1 658</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-[1.12] tracking-tight text-[#16130F] md:text-[44px]">
              Get a Jamaican phone number for calling and business communications.
            </h1>
            <p className="mt-5 max-w-lg text-[14px] leading-7 text-[#5C5C55]">
              Find an eligible Jamaican number under the 876 or 658 area code, then use Zoiko Local for calling
              and other communications capabilities included with your plan. Jamaica is its own national telecom
              market — its numbers share the +1 NANP code, but eligibility, capability, and support are all
              Jamaica-specific.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#search"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#E85D3C] px-7 text-[14px] font-semibold text-white transition hover:bg-[#D14C2C]"
              >
                Find a Jamaican number
              </Link>
              <Link
                href="#port"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-[#D8D3C4] bg-white px-7 text-[14px] font-semibold text-[#16130F] transition hover:bg-[#F4F2ED]"
              >
                Port my existing number
              </Link>
            </div>

            <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-[#EFE1C4] bg-[#FBF3E4] px-4 py-3.5">
              <FiInfo className="mt-0.5 shrink-0 text-[#8A6114]" aria-hidden />
              <p className="text-[11.5px] leading-5 text-[#8A6114]">
                Jamaican numbers are a regulated national numbering resource administered by the OUR. Zoiko Local
                provides eligible numbers through an approved supply chain — a wholesale relationship doesn&apos;t
                itself make Zoiko a licensed Jamaican carrier.
              </p>
            </div>
          </div>

          <div>
            <div className="overflow-hidden rounded-2xl border border-white shadow-[0_14px_30px_-14px_rgba(22,19,15,0.35)]">
              <Img src={IMAGES.heroKingston.src} alt={IMAGES.heroKingston.alt} className="h-[300px] w-full" rounded="rounded-none" />
            </div>
            <p className="mt-2.5 text-[12px] text-[#8C8271]">Kingston, Jamaica</p>
          </div>
        </div>
      </section>

      {/* Search */}
      <section id="search" className="bg-[#F4F2ED] py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-5">
          <Eyebrow centered>Search live inventory</Eyebrow>
          <H2>Choose 876 or 658, or search available numbers.</H2>

          <div className={`mt-8 ${cardBase} p-6`}>
            <div className="flex flex-wrap items-start gap-4 sm:items-center">
              <div className="flex shrink-0 gap-2">
                <span className="flex h-11 w-14 items-center justify-center rounded-lg bg-[#E85D3C] text-[13px] font-bold text-white">
                  876
                </span>
                <span className="flex h-11 w-14 items-center justify-center rounded-lg bg-[#E85D3C] text-[13px] font-bold text-white">
                  658
                </span>
              </div>
              <p className="text-[13px] leading-6 text-[#5C5C55]">
                <span className="font-bold text-[#E85D3C]">Both area codes serve all of Jamaica.</span> 658 is an
                overlay added to expand capacity across the same territory as 876 — neither code identifies a
                specific city or parish. Local calls require all 10 digits.
              </p>
            </div>
          </div>

          <div className={`mt-5 ${cardBase} p-6`}>
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { id: "either", label: "Either area code" },
                  { id: "876", label: "876 only" },
                  { id: "658", label: "658 only" },
                ] as const
              ).map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setAreaFilter(opt.id)}
                  className={`rounded-full px-5 py-2.5 text-[13px] font-semibold transition ${
                    areaFilter === opt.id ? "bg-[#E85D3C] text-white" : "bg-[#F4F2ED] text-[#16130F] hover:bg-[#EDEAE0]"
                  }`}
                >
                  {opt.label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="jm-search" className="sr-only">
                Search available Jamaican numbers, or enter a number to check porting
              </label>
              <input
                id="jm-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search available Jamaican numbers, or enter a number to check porting"
                className="h-12 flex-1 rounded-lg border border-[#E4E0D6] bg-white px-4 text-[13.5px] text-[#16130F] placeholder:text-[#A79C86] focus:border-[#E85D3C] focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#E85D3C] px-7 text-[14px] font-semibold text-white transition hover:bg-[#D14C2C]"
              >
                <FiSearch aria-hidden /> Search
              </button>
            </div>

            <p className="mt-4 text-[11.5px] leading-5 text-[#8C8271]">
              Availability can vary by number, provider, plan, verification, and capability. Area-code choice is an
              inventory preference, not proof of your location.
            </p>
          </div>
        </div>
      </section>

      {/* Popular places */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow centered>Explore</Eyebrow>
          <H2>Popular places across Jamaica.</H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[13px] leading-7 text-[#5C5C55]">
            Because 876 and 658 are island-wide, these are discovery destinations, not separate area-code markets —
            a listed place doesn&apos;t imply Zoiko has an office there, and it isn&apos;t tied to one specific area
            code.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((c) => (
              <article key={c.name} className={`overflow-hidden ${cardBase}`}>
                {c.image && (
                  <div className="relative h-[110px] w-full">
                    <Img src={c.image.src} alt={c.image.alt} className="h-full w-full" rounded="rounded-none" />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="text-[14.5px] font-bold text-[#16130F]">{c.name}</h3>
                  <p className="mt-0.5 text-[12px] text-[#8C8271]">876 / 658 island-wide</p>
                  <Link
                    href="#search"
                    className="mt-2.5 inline-block text-[12px] font-semibold text-[#20654A] hover:underline"
                  >
                    Explore numbers →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Process</Eyebrow>
          <H2 centered={false}>How to get a Jamaican number.</H2>

          <div className={`mt-8 grid overflow-hidden sm:grid-cols-2 lg:grid-cols-5 ${cardBase}`}>
            {howItWorksSteps.map((s, i) => (
              <div
                key={s.n}
                className={`p-6 ${i > 0 ? "border-t border-[#E4E0D6] sm:border-t-0 sm:border-l" : ""}`}
              >
                <span className="text-[11px] font-bold text-[#A79C86]">{s.n}</span>
                <h3 className="mt-2 text-[14px] font-bold text-[#16130F]">{s.title}</h3>
                <p className="mt-1.5 text-[12px] leading-5 text-[#5C5C55]">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Capabilities</Eyebrow>
          <H2 centered={false}>More than a phone number.</H2>
          <p className="mt-4 max-w-2xl text-[13px] leading-7 text-[#5C5C55]">
            Each capability is independently qualified by your number, provider route, plan, and applicable
            regulatory state — not inferred from having a +1 Jamaican number.
          </p>

          <div className={`mt-8 overflow-hidden ${cardBase}`}>
            {capabilities.map((c, i) => (
              <div
                key={c.title}
                className={`flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  i > 0 ? "border-t border-[#EFEBE1]" : ""
                }`}
              >
                <div className="flex items-start gap-3 sm:w-1/4 sm:shrink-0">
                  <span className="mt-0.5 text-[#8C8271]">
                    <c.icon aria-hidden />
                  </span>
                  <h3 className="text-[13.5px] font-bold text-[#16130F]">{c.title}</h3>
                </div>
                <p className="text-[12.5px] leading-6 text-[#5C5C55] sm:flex-1">{c.body}</p>
                <div className="sm:shrink-0">
                  <Tag label={c.tag} tone={c.tone} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-[#F4F2ED] py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Plans & pricing</Eyebrow>
          <H2 centered={false}>Commercial terms confirmed at checkout.</H2>
          <p className="mt-4 max-w-2xl text-[13px] leading-7 text-[#5C5C55]">
            Number fees, included usage, currency, and tax are shown from Zoiko&apos;s commercial systems during
            selection and checkout — not fixed on this page.
          </p>

          <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-[#EFE1C4] bg-[#FBF3E4] px-5 py-4">
            <FiInfo className="mt-0.5 shrink-0 text-[#8A6114]" aria-hidden />
            <p className="text-[12.5px] leading-6 text-[#8A6114]">
              Billing currency resolves to JMD when the approved Jamaican billing context is active; other
              supported currencies apply only through commercial rules, not from the page locale alone.
            </p>
          </div>
        </div>
      </section>

      {/* Porting */}
      <section id="port" className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <Img src={IMAGES.porting.src} alt={IMAGES.porting.alt} className="h-[300px] w-full" />

          <div>
            <Eyebrow>Keep your existing Jamaican number</Eyebrow>
            <H2 centered={false}>Portability depends on number, provider, and route.</H2>
            <p className="mt-4 text-[13px] leading-7 text-[#5C5C55]">
              Porting is governed by the Telecommunications (Number Portability) Rules and the current Industry
              Number Portability Guidelines. Transfer of your specific number is offered only once Zoiko&apos;s
              Porting Service validates the number, current provider/participant, and target route.
            </p>

            <div className="mt-5 space-y-2.5">
              {portingSteps.map((s) => (
                <div key={s.title} className={`${cardBase} px-4 py-3.5`}>
                  <span className="text-[13px] leading-5 text-[#5C5C55]">
                    <span className="font-semibold text-[#8C8271]">{s.title} — </span>
                    <span className="font-medium text-[#16130F]">{s.body}</span>
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 text-[12px] leading-5 text-[#8C8271]">
              Keep your current service active until the port completes — don&apos;t cancel it early.
            </p>
          </div>
        </div>
      </section>

      {/* Caller identity */}
      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <Eyebrow>Caller identity</Eyebrow>
            <H2 centered={false}>Caller identity and responsible communications.</H2>
            <p className="mt-4 text-[13px] leading-7 text-[#5C5C55]">
              Only numbers assigned, ported, or otherwise authorized to your account may be presented as your
              outbound caller ID, and a +1 Jamaican number retains its JM market identity — it cannot be
              arbitrarily switched to a U.S. or Canada identity. Caller-name display isn&apos;t guaranteed.
              Anomalous traffic, rapid number activation/rotation, or suspicious destinations can trigger enhanced
              verification.
            </p>
            <Link href="#" className="mt-4 inline-block text-[13px] font-semibold text-[#20654A] hover:underline">
              Acceptable Use Policy →
            </Link>
          </div>

          <Img src={IMAGES.callerIdentity.src} alt={IMAGES.callerIdentity.alt} className="h-[300px] w-full" />
        </div>
      </section>

      {/* Emergency */}
      <section className="bg-[#0E3B33] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Safety</Eyebrow>
          <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-white md:text-[32px]">
            Emergency and public-safety calling.
          </h2>
          <p className="mt-4 max-w-2xl text-[13px] leading-7 text-white/70">
            Current JCF guidance lists 119 for police and 110 for ambulance/fire. Older telecom materials also
            mention 911 and 112, but Zoiko does not advertise those as supported without independent route
            validation — a Jamaican number alone is not evidence any of these routes work on your configuration.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {emergencyNumbers.map((e) => (
              <div key={e.code} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <p className={`text-[22px] font-bold ${e.active ? "text-white" : "text-white/40"}`}>{e.code}</p>
                <p className={`mt-1 text-[12px] ${e.active ? "text-white/70" : "text-white/40"}`}>{e.title}</p>
                {!e.active && (
                  <p className="mt-2 text-[10.5px] font-bold uppercase tracking-[0.07em] text-[#E8B54B]">
                    Not validated
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {emergencyLegend.map((l) => (
              <div key={l.label} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <p className="flex items-center gap-2 text-[13px] font-bold text-white">
                  <span className={`h-1.5 w-1.5 rounded-full ${l.dot}`} aria-hidden /> {l.label}
                </p>
                <p className="mt-1.5 text-[12px] leading-5 text-white/60">{l.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Messaging & privacy */}
      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Privacy & direct marketing</Eyebrow>
          <H2 centered={false}>Messaging, privacy, and direct marketing.</H2>
          <p className="mt-4 max-w-2xl text-[13px] leading-7 text-[#5C5C55]">
            Direct marketing is a defined processing purpose under Jamaica&apos;s Data Protection Act. We support
            the legal consent workflow the 2024 Regulations prescribe rather than a generic checkbox.
          </p>

          <div className={`mt-8 overflow-hidden ${cardBase}`}>
            {messagingRows.map((r, i) => (
              <div
                key={r.title}
                className={`flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between ${
                  i > 0 ? "border-t border-[#EFEBE1]" : ""
                }`}
              >
                <h3 className="text-[13.5px] font-bold text-[#16130F] sm:w-1/4 sm:shrink-0">{r.title}</h3>
                <p className="text-[12.5px] leading-6 text-[#5C5C55] sm:flex-1">{r.body}</p>
                <div className="sm:shrink-0">
                  <Tag label={r.tag} tone={r.tone} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use anywhere */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <Eyebrow>Use it anywhere</Eyebrow>
            <H2 centered={false}>Use your Jamaican number through supported Zoiko Local apps.</H2>
            <p className="mt-4 text-[13px] leading-7 text-[#5C5C55]">
              Whether you&apos;re on the island or part of the diaspora abroad, remote use through supported Zoiko
              apps may be offered where provider, plan, identity, and regulatory rules permit. Owning a Jamaican
              number doesn&apos;t create physical presence or a local office — and Jamaican public-safety services
              should not be relied on from an overseas physical location.
            </p>
          </div>

          <Img src={IMAGES.useAnywhere.src} alt={IMAGES.useAnywhere.alt} className="h-[300px] w-full" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <Eyebrow>FAQ</Eyebrow>
          <H2 centered={false}>Jamaica phone number questions.</H2>

          <div className="mt-8 space-y-2.5">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <div key={f.q} className={`overflow-hidden ${cardBase}`}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-start justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-[13.5px] font-bold leading-6 text-[#16130F]">{f.q}</span>
                    <span className="mt-0.5 shrink-0 text-[13px] text-[#8C8271]">
                      {open ? <FiX aria-hidden /> : <FiPlus aria-hidden />}
                    </span>
                  </button>
                  {open && <p className="px-5 pb-5 text-[12.5px] leading-7 text-[#5C5C55]">{f.a}</p>}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function JamaicaLocalNumbersPage() {
  return (
    <>
      <SiteHeader />
      <JamaicaLocalNumbers />
      <SiteFooter />
    </>
  );
}