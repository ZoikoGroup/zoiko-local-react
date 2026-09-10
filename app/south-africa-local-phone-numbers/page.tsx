"use client";

import React, { useState } from "react";
import Link from "next/link";
import type { IconType } from "react-icons";
import {
  FiInfo,
  FiPlus,
  FiSearch,
  FiX,
  FiPhone,
  FiMessageSquare,
  FiVideo,
  FiMic,
  FiSmartphone,
  FiShield,
  FiAlertTriangle,
  FiAlertCircle,
  FiCheck,
  FiMapPin,
  FiGrid,
  FiSliders,
} from "react-icons/fi";

/* -------------------------------------------------------------------------- */
/*  Assets                                                                    */
/* -------------------------------------------------------------------------- */

const IMAGES = {
  heroMain: { src: "/images/City skyline representing a South African metro business hub.png", alt: "City skyline at dusk, South Africa" },
  heroMeeting: { src: "/images/Person using a phone outdoors.png", alt: "Colleagues meeting in a glass-walled office" },
  heroLaptops: { src: "/images/Small business team reviewing calls together.png", alt: "Two colleagues reviewing work on laptops" },
  johannesburg: { src: "/images/Small business team reviewing calls together.png", alt: "Johannesburg skyline" },
  pretoria: { src: "/images/Johannesburg city skyline.png", alt: "A government building in Pretoria" },
  capeTown: { src: "/images/image 6.png", alt: "Table Mountain overlooking Cape Town" },
  durban: { src: "/images/image 5.png", alt: "Durban beachfront" },
  gqeberha: { src: "/images/image 7.png", alt: "Gqeberha coastline" },
  eastLondon: { src: "/images/image 3.png", alt: "East London skyline" },
  bloemfontein: { src: "/images/image 4.png", alt: "Bloemfontein cityscape" },
  polokwane: { src: "/images/Bloemfontein city center.png", alt: "A park and monument in Polokwane" },
  remoteUse: { src: "/images/Person using a mobile app while traveling.png", alt: "A group working together at a cafe table" },
  manageDevices: { src: "/images/Mobile phone showing a calling app interface.png", alt: "Laptop and coffee on a round table" },
};

/* -------------------------------------------------------------------------- */
/*  Shared primitives (mirrors the pattern used on the Nigeria page)          */
/* -------------------------------------------------------------------------- */

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

function PhotoCard({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`rounded-2xl border border-white bg-white p-1.5 shadow-[0_14px_30px_-14px_rgba(22,19,15,0.35)] ${className}`}
    >
      <div className="h-full w-full overflow-hidden rounded-xl bg-[#EDE7DB]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt={alt} loading="lazy" decoding="async" className="h-full w-full object-cover" />
      </div>
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

const searchTabs = [
  { id: "city", label: "City / metro" },
  { id: "province", label: "Province" },
  { id: "dialing", label: "Dialing code" },
] as const;

const cities = [
  { name: "Johannesburg", province: "Gauteng", code: "010 / 011", image: IMAGES.johannesburg },
  { name: "Pretoria / Tshwane", province: "Gauteng", code: "012", image: IMAGES.pretoria },
  { name: "Cape Town", province: "Western Cape", code: "021", image: IMAGES.capeTown },
  { name: "Durban", province: "KwaZulu-Natal", code: "031", image: IMAGES.durban },
  { name: "Gqeberha", province: "Eastern Cape", code: "041", image: IMAGES.gqeberha },
  { name: "East London", province: "Eastern Cape", code: "043", image: IMAGES.eastLondon },
  { name: "Bloemfontein", province: "Free State", code: "051", image: IMAGES.bloemfontein },
  { name: "Polokwane", province: "Limpopo", code: "015", image: IMAGES.polokwane },
];

const howItWorksSteps = [
  { n: "1", title: "Search", body: "Find eligible numbers by city, province, or dialing code." },
  { n: "2", title: "Choose", body: "Select an available number. It's held for you temporarily." },
  { n: "3", title: "Plan / sign in", body: "Sign in or create an account and confirm an eligible plan." },
  { n: "4", title: "Verify", body: "Complete any identity or service-address verification required." },
  { n: "5", title: "Activate", body: "Your number, calling, and eligible features go live." },
];

const capabilities: { title: string; body: string; tag: string; icon: IconType }[] = [
  {
    title: "Calling",
    body: "Inbound and outbound calling on eligible numbers. Domestic and international destinations are separate — a +27 number doesn't include international calling automatically.",
    tag: "Plan dependent",
    icon: FiPhone,
  },
  {
    title: "Eligible messaging",
    body: "Not every South African geographic number supports SMS. Messaging depends on the number, provider, plan, and provisioning state.",
    tag: "Number dependent",
    icon: FiMessageSquare,
  },
  {
    title: "Video",
    body: "Start or join supported video conversations from web or mobile as a platform feature — not an inherent property of the number itself.",
    tag: "Plan dependent",
    icon: FiVideo,
  },
  {
    title: "AI Receptionist",
    body: "Where enabled, answers, routes, and summarizes calls. Gated by plan, release state, language, and number route — and never intercepts emergency dialing.",
    tag: "Plan & release gated",
    icon: FiMic,
  },
  {
    title: "Web & mobile apps",
    body: "Manage your South African number from the web today. Native iOS and Android apps are in development.",
    tag: "Web available now",
    icon: FiSmartphone,
  },
];

const sampleResults = [
  {
    number: "+27 11 234 0198",
    domestic: "Domestic: 011 234 0198",
    area: "Johannesburg (011)",
    capabilities: ["Voice", "Messaging eligible"],
    fee: "From R99/mo",
    status: "Available",
  },
  {
    number: "+27 21 345 0672",
    domestic: "Domestic: 021 345 0672",
    area: "Cape Town (021)",
    capabilities: ["Voice", "Video"],
    fee: "From R99/mo",
    status: "Available",
  },
  {
    number: "+27 12 456 0219",
    domestic: "Domestic: 012 456 0219",
    area: "Pretoria / Tshwane (012)",
    capabilities: ["Voice"],
    fee: "From R89/mo",
    status: "Limited",
  },
  {
    number: "+27 31 567 0834",
    domestic: "Domestic: 031 567 0834",
    area: "Durban (031)",
    capabilities: ["Voice", "Messaging eligible", "AI Receptionist"],
    fee: "From R129/mo",
    status: "Available",
  },
];

const portingSteps = [
  { title: "Check portability", body: "We validate the number type, current provider, and target service route." },
  { title: "Confirm your account", body: "Provide your subscriber and account details through a secure, authenticated flow." },
  {
    title: "Validate the number",
    body: "We confirm whether it's geographic, non-geographic, or mobile, and that the provider supports porting.",
  },
  { title: "Authorize the port", body: "Complete the required authorization and ordering steps." },
  {
    title: "Submit & activate",
    body: "Your request goes through the approved porting process; we confirm routing, caller ID, and messaging once complete.",
  },
];

const trustedCalling: { title: string; body: string; icon: IconType }[] = [
  {
    title: "Authorized caller ID only",
    body: "You can present only a number that's assigned, ported, or otherwise authorized to your account — never an arbitrary number.",
    icon: FiShield,
  },
  {
    title: "Spoofing & fraud controls",
    body: "We block arbitrary number presentation and apply enhanced verification for anomalous traffic or suspicious activation.",
    icon: FiAlertTriangle,
  },
  {
    title: "Caller name isn't guaranteed",
    body: "If a caller name is shown, how it displays downstream depends on the receiving network or app and isn't guaranteed by Zoiko Local.",
    icon: FiInfo,
  },
];

const emergencyNumbers = [
  { code: "112", title: "Mobile emergency route", body: "Commonly published by South African authorities as a mobile emergency number." },
  { code: "10111", title: "Police emergency", body: "South African Police Service emergency call-center route." },
  { code: "10177", title: "Medical / ambulance", body: "Emergency medical services route per current government guidance." },
  {
    code: "107",
    title: "Municipal emergency",
    body: "Local fire/emergency route in some municipalities, such as Cape Town — not a universal national number.",
  },
];

const messagingStates = [
  { label: "Enabled", body: "Available, subject to plan, AUP, and applicable channel rules." },
  { label: "Activation required", body: "Configuration or registration needed before sending." },
  { label: "Pending", body: "Provisioning or approval in progress." },
  { label: "Voice-only", body: "This number doesn't currently support messaging." },
  { label: "Unknown", body: "Eligibility confirmed during activation." },
];

const popiaPoints = [
  "Unsolicited electronic direct marketing is subject to POPIA and current Information Regulator guidance — not reduced to one generic consent checkbox.",
  "Existing-customer and prospective-customer marketing are treated separately, with distinct consent and opt-out handling.",
  "Marketing opt-out is honored across applicable messaging and calling workflows.",
  "See our Acceptable Use Policy and Privacy Policy for responsible-use expectations.",
];

const remotePoints = [
  "Remote use through supported Zoiko Local apps may be offered where provider, plan, identity, and regulatory rules permit.",
  "Owning a South African geographic number doesn't create physical presence, tax residence, or a local office.",
  "Eligibility, service-address requirements, tax, emergency routing, and messaging rules may differ for customers based outside South Africa.",
  "Emergency and public-safety dialing is location-sensitive — South African emergency routes can't serve someone physically overseas.",
];

const deviceAvailability = [
  { label: "Web — available now", active: true },
  { label: "iOS — coming soon", active: false },
  { label: "Android — coming soon", active: false },
];

const whyZoiko: { title: string; body: string; icon: IconType }[] = [
  { title: "A local identity", body: "A dialing code your callers recognize, without needing an office on the ground.", icon: FiMapPin },
  {
    title: "One multi-channel platform",
    body: "Calling, eligible messaging, video and AI Receptionist in a single account, where supported.",
    icon: FiGrid,
  },
  {
    title: "Plan-level control",
    body: "Clear entitlements — number, calling, messaging, and AI features shown before you commit.",
    icon: FiSliders,
  },
  {
    title: "Trust & accessibility",
    body: "Regulatory-aware design, POPIA-conscious messaging controls, and WCAG 2.2 AA accessibility.",
    icon: FiShield,
  },
];

const faqs = [
  {
    q: "What is a South African local phone number?",
    a: "A South African geographic number is a +27 number associated with a geographic dialing area. The dialing code doesn't prove that the user or business has a physical office there.",
  },
  {
    q: "How do I get a South African local number?",
    a: "Search a supported city, province, or dialing code, choose an available number, sign in and confirm an eligible plan, complete any required verification, then activate.",
  },
  {
    q: "Can I choose a Johannesburg 010 or 011 number?",
    a: "Where inventory allows, yes — Johannesburg numbers are shown with the 010 or 011 access code depending on live availability at search time.",
  },
  {
    q: "Can I get a South African number from outside South Africa?",
    a: "You may use a supported South African number from outside South Africa via Zoiko apps, subject to provider, legal, and product rules. Number allocation doesn't create a legal establishment or office in South Africa.",
  },
  {
    q: "Can I port my existing South African number?",
    a: "Porting depends on number type, current provider, account details, and our supported porting route. Not every number or provider is eligible.",
  },
  {
    q: "Does every South African geographic number support SMS?",
    a: "No. Messaging is not guaranteed by holding a +27 number — it depends on the number, provider, plan, and provisioning state, each independently qualified.",
  },
  {
    q: "Can I call 112, 10111, or 10177?",
    a: "Zoiko Local is not a guaranteed emergency-calling service. Emergency and public-safety routes are validated separately for each number and configuration before they're relied upon.",
  },
  {
    q: "How does POPIA affect marketing messages?",
    a: "Unsolicited electronic direct marketing is subject to POPIA and current Information Regulator guidance. Existing-customer and prospective-customer marketing are treated separately, with distinct consent and opt-out handling.",
  },
  {
    q: "How much does a South African number cost?",
    a: "Number fees, plan pricing, included usage, and applicable tax are shown from our current price book during selection and checkout — never hard-coded on this page.",
  },
];

/* -------------------------------------------------------------------------- */
/*  Page                                                                       */
/* -------------------------------------------------------------------------- */

export default function SouthAfricaLocalNumbers() {
  const [activeTab, setActiveTab] = useState<(typeof searchTabs)[number]["id"]>("city");
  const [query, setQuery] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-[#EDEAE0] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_1fr]">
          <div>
            <Eyebrow>South Africa · +27</Eyebrow>
            <h1 className="mt-4 text-4xl font-bold leading-[1.12] tracking-tight text-[#16130F] md:text-[44px]">
              Get a South African local number for{" "}
              <span className="text-[#E85D3C]">calling and business communications.</span>
            </h1>
            <p className="mt-5 max-w-lg text-[14px] leading-7 text-[#5C5C55]">
              Find an eligible South African local number by city, province, or dialing code, then use
              Zoiko Local for calling and other communications capabilities included with your plan.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#search"
                className="inline-flex h-12 items-center justify-center rounded-lg bg-[#E85D3C] px-7 text-[14px] font-semibold text-white transition hover:bg-[#D14C2C]"
              >
                Find a South African number
              </Link>
              <Link
                href="#port"
                className="inline-flex h-12 items-center justify-center rounded-lg border border-[#D8D3C4] bg-white px-7 text-[14px] font-semibold text-[#16130F] transition hover:bg-[#F4F2ED]"
              >
                Port my existing number
              </Link>
            </div>
          </div>

          <div className="grid h-[300px] grid-cols-2 gap-3">
            <PhotoCard src={IMAGES.heroMain.src} alt={IMAGES.heroMain.alt} className="row-span-2 h-full" />
            <PhotoCard src={IMAGES.heroMeeting.src} alt={IMAGES.heroMeeting.alt} className="h-full" />
            <PhotoCard src={IMAGES.heroLaptops.src} alt={IMAGES.heroLaptops.alt} className="h-full" />
          </div>
        </div>
      </section>

      {/* Search */}
      <section id="search" className="bg-white py-14 md:py-16">
        <div className="mx-auto max-w-4xl px-5">
          <div className={`${cardBase} p-6 shadow-[0_1px_0_rgba(22,19,15,0.02)]`}>
            <div className="inline-flex flex-wrap gap-1 rounded-full bg-[#F4F2ED] p-1">
              {searchTabs.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActiveTab(t.id)}
                  className={`rounded-full px-4 py-2 text-[12.5px] font-semibold transition ${
                    activeTab === t.id ? "bg-[#0E3B33] text-white" : "text-[#5C5C55] hover:text-[#16130F]"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="za-search" className="sr-only">
                Search by city, province, or dialing code
              </label>
              <input
                id="za-search"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by city, province, or dialing code — e.g. Johannesburg or 011"
                className="h-12 flex-1 rounded-lg border border-[#E4E0D6] bg-white px-4 text-[13.5px] text-[#16130F] placeholder:text-[#A79C86] focus:border-[#E85D3C] focus:outline-none"
              />
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-[#E85D3C] px-7 text-[14px] font-semibold text-white transition hover:bg-[#D14C2C]"
              >
                <FiSearch aria-hidden /> Search numbers
              </button>
            </div>

            <p className="mt-4 text-[11.5px] leading-5 text-[#8C8271]">
              Availability updates in real time and can vary by number, provider, plan, verification, and
              capability.
            </p>
          </div>
        </div>
      </section>

      {/* Popular locations */}
      <section className="bg-white pb-14 md:pb-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow centered>Popular locations</Eyebrow>
          <H2>Search South African numbers by city.</H2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-[13px] leading-7 text-[#5C5C55]">
            A dialing code shows the numbering area a number belongs to — not proof of a physical office
            there.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cities.map((c) => (
              <article key={c.name} className={`overflow-hidden ${cardBase}`}>
                <div className="relative h-[110px] w-full">
                  <Img src={c.image.src} alt={c.image.alt} className="h-full w-full" rounded="rounded-none" />
                  <span className="absolute left-3 top-3 rounded-md bg-white/95 px-2 py-1 text-[11px] font-bold text-[#16130F] shadow-sm">
                    {c.code}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-[14.5px] font-bold text-[#16130F]">{c.name}</h3>
                  <p className="mt-0.5 text-[12px] text-[#8C8271]">{c.province}</p>
                  <p className="mt-2.5 flex items-center gap-1.5 text-[12px] font-semibold text-[#20654A]">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#3FBE95]" aria-hidden /> Numbers available
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 rounded-lg bg-[#E7F0EC] px-5 py-4 text-[12.5px] leading-6 text-[#2E5A4C]">
            A South African geographic number is a +27 number associated with a geographic dialing area.
            Owning a Johannesburg, Cape Town, Durban, or other geographic number doesn&apos;t confirm a
            physical office or establishment there.
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#0E3B33] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8825F]">How it works</p>
          <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-white md:text-[32px]">
            From search to activation.
          </h2>
          <p className="mt-4 max-w-2xl text-[13px] leading-7 text-white/70">
            Your selected number is held for you through sign-in, plan selection, and verification — it
            doesn&apos;t disappear mid-checkout.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {howItWorksSteps.map((s) => (
              <div key={s.n} className="rounded-xl border border-white/10 bg-white/[0.04] p-5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#E85D3C] text-[13px] font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mt-4 text-[13.5px] font-bold text-white">{s.title}</h3>
                <p className="mt-1.5 text-[12px] leading-5 text-white/65">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>What you can do with the number</Eyebrow>
          <H2 centered={false}>Calling, messaging, video, and AI — where supported.</H2>
          <p className="mt-4 max-w-2xl text-[13px] leading-7 text-[#5C5C55]">
            Capabilities depend on the specific number, your plan, and provider support — not every
            capability is available on every number.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {capabilities.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className={`${cardBase} p-5`}>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#F4F2ED] text-[#16130F]">
                    <Icon aria-hidden />
                  </span>
                  <h3 className="mt-4 text-[13.5px] font-bold text-[#16130F]">{c.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-5 text-[#5C5C55]">{c.body}</p>
                  <div className="mt-3">
                    <Tag label={c.tag} tone="warn" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sample results */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <div>
              <Eyebrow>Sample results</Eyebrow>
              <H2 centered={false}>What number search looks like.</H2>
            </div>
            <span className="text-[11px] font-semibold text-[#B0432A]">
              Illustrative example — not a live inventory listing
            </span>
          </div>

          <div className="mt-8 overflow-x-auto rounded-xl border border-[#E4E0D6] bg-white">
            <table className="w-full min-w-[700px] border-collapse text-left">
              <thead>
                <tr className="border-b border-[#EFEBE1] bg-[#F8F6F1]">
                  <th className="px-5 py-3 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#8C8271]">
                    Number
                  </th>
                  <th className="px-5 py-3 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#8C8271]">
                    Area
                  </th>
                  <th className="px-5 py-3 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#8C8271]">
                    Capabilities
                  </th>
                  <th className="px-5 py-3 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#8C8271]">
                    Est. fee
                  </th>
                  <th className="px-5 py-3 text-[10.5px] font-bold uppercase tracking-[0.08em] text-[#8C8271]">
                    Status
                  </th>
                  <th className="px-5 py-3" />
                </tr>
              </thead>
              <tbody>
                {sampleResults.map((r, i) => (
                  <tr key={r.number} className={i > 0 ? "border-t border-[#EFEBE1]" : ""}>
                    <td className="px-5 py-4">
                      <p className="text-[13.5px] font-bold text-[#16130F]">{r.number}</p>
                      <p className="text-[11px] text-[#8C8271]">{r.domestic}</p>
                    </td>
                    <td className="px-5 py-4 text-[12.5px] text-[#5C5C55]">{r.area}</td>
                    <td className="px-5 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        {r.capabilities.map((cap) => (
                          <Tag key={cap} label={cap} tone="ok" />
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-[12.5px] text-[#5C5C55]">{r.fee}</td>
                    <td className="px-5 py-4">
                      <Tag label={r.status} tone={r.status === "Available" ? "ok" : "danger"} />
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button className="rounded-full bg-[#16130F] px-4 py-2 text-[12px] font-semibold text-white transition hover:bg-black">
                        Select
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-[11.5px] leading-5 text-[#8C8271]">
            Numbers, capability badges, and fees shown here are illustrative examples for this page
            design. Live availability, capabilities, and current pricing are confirmed during search and
            checkout.
          </p>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="bg-[#EDEAE0] py-14 md:py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className={`${cardBase} flex flex-col items-start justify-between gap-6 p-8 sm:flex-row sm:items-center`}>
            <div>
              <h3 className="text-[19px] font-bold text-[#16130F]">See current South Africa pricing.</h3>
              <p className="mt-2 max-w-md text-[13px] leading-6 text-[#5C5C55]">
                Number fees, plan pricing, included usage, and applicable tax are shown from our current
                price book during selection and checkout — never hard-coded on this page.
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Link
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-[#E85D3C] px-6 text-[13.5px] font-semibold text-white transition hover:bg-[#D14C2C]"
              >
                Compare plans
              </Link>
              <Link
                href="#"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-[#E4E0D6] px-6 text-[13.5px] font-semibold text-[#16130F] transition hover:bg-[#F4F2ED]"
              >
                Start free
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Porting */}
      <section id="port" className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Keep your number</Eyebrow>
          <H2 centered={false}>Port your existing South African number.</H2>
          <p className="mt-4 max-w-2xl text-[13px] leading-7 text-[#5C5C55]">
            Portability depends on number type, current provider, account details, and our supported
            porting route.
          </p>

          <div className="mt-9 grid gap-8 lg:grid-cols-2">
            <div className={`${cardBase} p-6`}>
              <h3 className="text-[15px] font-bold text-[#16130F]">Check portability</h3>
              <div className="mt-4 flex flex-col gap-3 sm:flex-row">
                <label htmlFor="port-check" className="sr-only">
                  Enter your South African number
                </label>
                <input
                  id="port-check"
                  type="tel"
                  placeholder="Enter your South African number"
                  className="h-12 flex-1 rounded-lg border border-[#E4E0D6] bg-white px-4 text-[13.5px] text-[#16130F] placeholder:text-[#A79C86] focus:border-[#E85D3C] focus:outline-none"
                />
                <button className="inline-flex h-12 items-center justify-center rounded-lg bg-[#E85D3C] px-7 text-[14px] font-semibold text-white transition hover:bg-[#D14C2C]">
                  Check
                </button>
              </div>
              <p className="mt-4 flex items-start gap-2.5 rounded-lg border border-[#F3CFC0] bg-[#FCEAE5] px-4 py-3 text-[11.5px] leading-5 text-[#B0432A]">
                <FiAlertCircle className="mt-0.5 shrink-0" aria-hidden />
                Keep your current service active until your port is confirmed complete — canceling early
                can cause you to lose the number.
              </p>
            </div>

            <dl>
              {portingSteps.map((s, i) => (
                <div key={s.title} className={`flex gap-4 py-4 ${i > 0 ? "border-t border-[#E4E0D6]" : ""}`}>
                  <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-[#DCEDE6]" aria-hidden />
                  <div>
                    <dt className="text-[13.5px] font-bold text-[#16130F]">{s.title}</dt>
                    <dd className="mt-1 text-[12.5px] leading-5 text-[#5C5C55]">{s.body}</dd>
                  </div>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Trusted calling */}
      <section className="bg-[#EDEAE0] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Caller ID & identity</Eyebrow>
          <H2 centered={false}>Trusted, authorized calling.</H2>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {trustedCalling.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className={`${cardBase} p-6`}>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#F4F2ED] text-[#16130F]">
                    <Icon aria-hidden />
                  </span>
                  <h3 className="mt-4 text-[13.5px] font-bold text-[#16130F]">{c.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-5 text-[#5C5C55]">{c.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Safety</Eyebrow>
          <H2 centered={false}>Emergency and public-safety calling.</H2>

          <div className="mt-8 flex items-start gap-3 rounded-xl border border-[#EFDFC4] bg-[#FDF7EA] px-5 py-4">
            <FiAlertTriangle className="mt-0.5 shrink-0 text-[#8A6114]" aria-hidden />
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-[#8A6114]">
                Important — please read
              </p>
              <p className="mt-1.5 text-[12.5px] leading-6 text-[#8A6114]">
                Zoiko Local is not a guaranteed emergency-calling service. Emergency and public-safety
                routes are validated separately for each number and configuration — don&apos;t rely on any
                number for emergency access until it&apos;s confirmed active in your account and settings.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {emergencyNumbers.map((e) => (
              <div key={e.code} className={`${cardBase} p-5`}>
                <p className="text-[22px] font-bold text-[#16130F]">{e.code}</p>
                <h3 className="mt-1 text-[13px] font-bold text-[#16130F]">{e.title}</h3>
                <p className="mt-1.5 text-[12px] leading-5 text-[#5C5C55]">{e.body}</p>
                <div className="mt-3">
                  <Tag label="Requires validation" tone="warn" />
                </div>
              </div>
            ))}
          </div>

          <p className="mt-6 text-[11.5px] leading-5 text-[#8C8271]">
            Emergency calls, where supported, bypass AI Receptionist, business call routing, and
            non-required call recording. If someone is in immediate danger, use the most reliable
            emergency access available to you — this page provides routing and status information only,
            not emergency-response advice.
          </p>
        </div>
      </section>

      {/* Messaging & privacy */}
      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Messaging & privacy</Eyebrow>
          <H2 centered={false}>Messaging, privacy, and direct marketing.</H2>

          <div className="mt-8 grid gap-8 lg:grid-cols-2">
            <div>
              <h3 className="text-[13.5px] font-bold text-[#16130F]">Messaging capability states</h3>
              <div className="mt-4 space-y-2.5">
                {messagingStates.map((m) => (
                  <div
                    key={m.label}
                    className={`flex flex-wrap items-center justify-between gap-2 ${cardBase} px-4 py-3.5`}
                  >
                    <span className="text-[12.5px] font-bold text-[#16130F]">{m.label}</span>
                    <span className="text-right text-[11.5px] text-[#8C8271]">{m.body}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`${cardBase} p-6`}>
              <h3 className="text-[15px] font-bold text-[#16130F]">POPIA &amp; direct marketing</h3>
              <ul className="mt-4 space-y-3">
                {popiaPoints.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[12.5px] leading-6 text-[#5C5C55]">
                    <FiCheck className="mt-0.5 shrink-0 text-[#20654A]" aria-hidden /> {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Use remotely */}
      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <Img src={IMAGES.remoteUse.src} alt={IMAGES.remoteUse.alt} className="h-[300px] w-full" />

          <div>
            <Eyebrow>Using a number remotely</Eyebrow>
            <H2 centered={false}>Use a South African number from outside South Africa.</H2>
            <ul className="mt-5 space-y-3">
              {remotePoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[13px] leading-6 text-[#5C5C55]">
                  <FiCheck className="mt-0.5 shrink-0 text-[#20654A]" aria-hidden /> {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Manage from web/mobile */}
      <section className="bg-[#0E3B33] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#E8825F]">Available today</p>
            <h2 className="mt-3 text-[28px] font-bold leading-tight tracking-tight text-white md:text-[32px]">
              Manage your South African number from web or mobile.
            </h2>
            <p className="mt-4 max-w-md text-[13px] leading-7 text-white/70">
              Zoiko Local is available on the web now. Native iOS and Android apps are in development
              ahead of release.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {deviceAvailability.map((d) => (
                <span
                  key={d.label}
                  className={`rounded-lg px-4 py-2.5 text-[12.5px] font-semibold ${
                    d.active ? "bg-[#E85D3C] text-white" : "border border-white/15 text-white/60"
                  }`}
                >
                  {d.label}
                </span>
              ))}
            </div>
          </div>

          <Img src={IMAGES.manageDevices.src} alt={IMAGES.manageDevices.alt} className="h-[280px] w-full" />
        </div>
      </section>

      {/* Why Zoiko Local */}
      <section className="bg-[#EDEAE0] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <Eyebrow>Why Zoiko Local</Eyebrow>
          <H2 centered={false}>A local number, backed by a governed platform.</H2>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyZoiko.map((w) => {
              const Icon = w.icon;
              return (
                <div key={w.title} className={`${cardBase} p-5`}>
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#F4F2ED] text-[#16130F]">
                    <Icon aria-hidden />
                  </span>
                  <h3 className="mt-4 text-[13.5px] font-bold text-[#16130F]">{w.title}</h3>
                  <p className="mt-1.5 text-[12px] leading-5 text-[#5C5C55]">{w.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#F4F2ED] py-14 md:py-20">
        <div className="mx-auto max-w-4xl px-5">
          <Eyebrow>FAQ</Eyebrow>
          <H2 centered={false}>South African local number questions.</H2>

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