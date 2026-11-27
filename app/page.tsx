import type { Metadata } from "next";
import Image from "next/image";
import { Plus, X, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Global Local Phone Numbers for Business | Zoiko Local",
  description:
    "Get Global Local Phone Numbers for Business with AI Receptionist, HD calling, video meetings, smart voicemail, and secure telecom-grade billing worldwide.",
};
import {
  FiMapPin,
  FiPhone,
  FiVideo,
  FiMic,
  FiUsers,
  FiShield,
  FiSearch,
  FiMessageSquare,
  FiPhoneIncoming,
  FiPhoneOutgoing,
  FiCornerUpRight,
  FiFileText,
  FiVolume2,
  FiActivity,
  FiClipboard,
  FiCheckCircle,
  FiPhoneCall,
  FiCheck,
  FiArrowRight,
  FiGlobe,
  FiClock,
  FiLock,
  FiUser,
  FiX,
  FiHome,
  FiBriefcase,
  FiNavigation,
} from "react-icons/fi";
import { FaCheck, FaCircle } from "react-icons/fa";
export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-[#F6F3EE] dark:bg-slate-950">
        {/* ================= 1. HERO (only this block has the bg image) ================= */}
        <div className="relative w-full pb-16 lg:h-[708px] lg:pb-0">
          {/* Background image (laptop, phone, globe, cards are baked into it) */}
          <Image
            src="/images/homepage/bg.jpg"
            alt="Global communications platform with laptop, phone and local number finder"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[65%_center] lg:object-[85%_center]"
          />

          {/* Left fade, mobile/tablet only (the desktop image is already light on the left) */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F6F3EE] via-[#F6F3EE]/80 to-transparent lg:hidden" />

          {/* Left content */}
          <div className="relative z-10 mx-auto max-w-[1520px] px-6 pt-12 sm:px-10 lg:px-[106px] lg:pt-[65px]">
            <div className="max-w-[560px]">
              <p className="text-[12px] font-semibold uppercase tracking-[0.28em] text-[#0B4A3A] dark:text-[#0B4A3A] lg:text-[13px]">
                Global Communications Platform
              </p>
              <div className="mt-3 h-[2.5px] w-14 rounded-full bg-[#F05A2B]" />

              <h1 className="mt-5 text-[44px] font-extrabold leading-[1.06] tracking-[-0.02em] text-[#0B3D33] sm:text-[56px] lg:text-[68px]">
                Sound Local.
                <br />
                <span className="text-[#F05A2B]">Stay Close.</span>
              </h1>

              <p className="mt-3.5 max-w-[440px] text-[17px] leading-[1.25] text-slate-700 sm:text-lg lg:text-[20px]">
                Your global communications platform for local numbers, business
                calls, video conversations, and AI-powered assistance.
              </p>

              <ul className="mt-5 space-y-[7px]">
                {[
                  "Get local numbers in supported markets",
                  "Make and receive business calls",
                  "Meet by video, from anywhere",
                  "Let an AI receptionist handle your calls",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-[16px] font-medium text-slate-800 lg:text-[18px]"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0B5444] text-white">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href="/get-local-number"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#F05A2B] px-6 text-[15px] font-semibold text-white shadow-lg shadow-[#F05A2B]/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Explore Local Numbers
                  <span aria-hidden="true">→</span>
                </a>
                <a
                  href="/pricing"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-[#0B5444]/50 bg-white/85 px-6 text-[15px] font-semibold text-[#0B3D33] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-xl"
                >
                  See Plans &amp; Pricing
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 2. FEATURE STRIP (floating card, half on hero image / half on plain bg) =================
      The wrapper is pulled up by half the strip height (43px desktop, 32px mobile).
      The absolute div below starts exactly at the hero's bottom edge and paints
      a plain background (no image) for the lower half of the strip. */}
        <div className="relative z-20 -mt-8 pb-6 lg:-mt-[43px] lg:pb-[34px]">
          {/* Plain background that begins where the hero image ends */}
          <div className="absolute inset-x-0 bottom-0 top-8 bg-[#F6F3EE] dark:bg-slate-950 lg:top-[43px]" />

          <div className="relative mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-[30px]">
            <ul className="grid grid-cols-1 gap-1 rounded-[18px] bg-white p-3 shadow-[0_12px_40px_rgba(11,84,68,0.15)] dark:bg-slate-900 sm:grid-cols-2 lg:h-[86px] lg:grid-cols-5 lg:items-center lg:gap-0 lg:p-0">
              {[
                {
                  title: "Local Phone Numbers",
                  text: "Build a local presence",
                  icon: (
                    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
                  ),
                },
                {
                  title: "Video Conversations",
                  text: "Meet and collaborate",
                  icon: (
                    <>
                      <rect x="2" y="6" width="13" height="12" rx="2" />
                      <path d="M22 8l-7 4 7 4V8z" />
                    </>
                  ),
                },
                {
                  title: "AI Receptionist",
                  text: "Answer, route and assist",
                  icon: (
                    <>
                      <path d="M3 14v-2a9 9 0 0 1 18 0v2" />
                      <path d="M21 15a2 2 0 0 1-2 2h-1v-5h1a2 2 0 0 1 2 2v1zM3 15a2 2 0 0 0 2 2h1v-5H5a2 2 0 0 0-2 2v1z" />
                      <path d="M18 17v1a3 3 0 0 1-3 3h-2" />
                    </>
                  ),
                },
                {
                  title: "Business Calling",
                  text: "Reliable and professional",
                  icon: (
                    <>
                      <circle cx="9" cy="8" r="3.5" />
                      <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
                      <path d="M16 4.5a3.5 3.5 0 0 1 0 7M18.5 14.5a6.5 6.5 0 0 1 3 5.5" />
                    </>
                  ),
                },
                {
                  title: "Insights & Analytics",
                  text: "Track calls and performance",
                  icon: <path d="M5 21V10M12 21V3M19 21v-7" />,
                },
              ].map((f, i) => (
                <li
                  key={f.title}
                  className={`relative flex items-center gap-3 px-4 py-3 lg:px-[18px] lg:py-0 ${
                    i !== 0
                      ? "lg:before:absolute lg:before:left-0 lg:before:top-1/2 lg:before:h-[54px] lg:before:w-px lg:before:-translate-y-1/2 lg:before:bg-slate-200"
                      : ""
                  }`}
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E6F1EE] text-[#0B5444]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-[22px] w-[22px]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {f.icon}
                    </svg>
                  </span>
                  <div className="min-w-0">
                    <p className="whitespace-nowrap text-[15px] font-bold leading-tight text-[#0B3D33] dark:text-white lg:text-[16px]">
                      {f.title}
                    </p>
                    <p className="mt-0.5 whitespace-nowrap text-[12.5px] leading-snug text-slate-500 lg:text-[13px]">
                      {f.text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ================= 3. GREEN TRUST BAR ================= */}
        <div className="bg-gradient-to-r from-[#0B5444] to-[#093F33] py-6 lg:py-[22px]">
          <ul className="mx-auto grid max-w-[1440px] grid-cols-1 gap-5 px-6 sm:grid-cols-2 sm:px-10 lg:flex lg:items-center lg:justify-between lg:gap-0 lg:px-[62px]">
            {[
              {
                title: "Business-Ready",
                text: "For individuals, teams and enterprises",
                icon: (
                  <>
                    <circle cx="12" cy="12" r="9.5" />
                    <path d="M2.5 12h19M12 2.5c2.7 2.8 4 6 4 9.5s-1.3 6.7-4 9.5c-2.7-2.8-4-6-4-9.5s1.3-6.7 4-9.5z" />
                  </>
                ),
              },
              {
                title: "Reliable & Secure",
                text: "Enterprise-grade protection",
                icon: (
                  <>
                    <path d="M12 2.5l8 3v6c0 5-3.3 8.5-8 10-4.7-1.5-8-5-8-10v-6l8-3z" />
                    <path d="M8.5 12l2.5 2.5 4.5-5" />
                  </>
                ),
              },
              {
                title: "High-Quality Calls",
                text: "Clear, stable and global",
                icon: <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" />,
              },
              {
                title: "Trusted by Businesses",
                text: "Across multiple industries",
                icon: (
                  <>
                    <circle cx="8" cy="8" r="3" />
                    <circle cx="17" cy="9" r="2.5" />
                    <path d="M2 20a6 6 0 0 1 12 0M14.5 15.5A5 5 0 0 1 22 20" />
                  </>
                ),
              },
            ].map((b, i) => (
              <li
                key={b.title}
                className={`flex items-center gap-4 text-white ${
                  i !== 0
                    ? "lg:border-l lg:border-white/20 lg:py-1 lg:pl-12"
                    : ""
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-9 w-9 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {b.icon}
                </svg>
                <div>
                  <p className="text-[16px] font-semibold leading-tight lg:text-[18px]">
                    {b.title}
                  </p>
                  <p className="mt-1 text-[12px] leading-snug text-white/70 lg:text-[13.5px]">
                    {b.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Features Section */}
      {/* <section className="border-y border-[#D8D4CC] bg-[#F6F3EE] dark:border-slate-800 dark:bg-slate-950">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <div
                  key={feature.label}
                  className={`
                  flex flex-col items-center justify-center
                  gap-3 px-4 py-6 text-center
                  transition-colors duration-300
                  hover:bg-white/60
                  dark:hover:bg-slate-900
                  ${
                    index !== features.length - 1
                      ? "border-r border-[#D8D4CC] dark:border-slate-800"
                      : ""
                  }
                `}
                >
                  <Icon
                    size={20}
                    className="text-[#0D4F49] dark:text-emerald-400"
                    strokeWidth={1.8}
                  />

                  <span className="text-sm md:text-base font-medium text-[#163531] dark:text-slate-200">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Live Country Finder Section */}
      <section className="bg-[#F7F3ED] px-4 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          <div
            className="
      overflow-hidden rounded-[28px]
      bg-gradient-to-br
      from-[#014D46]
      via-[#025C53]
      to-[#014D46]
      p-6 md:p-10
      shadow-[0_20px_60px_rgba(0,0,0,0.15)]
    "
          >
            {/* Heading */}
            <div className="text-center">
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#FF825E]">
                Live Country Finder
              </p>

              <h2 className="text-2xl font-bold text-white md:text-4xl">
                Find your number in seconds.
              </h2>

              <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 md:text-base">
                Search a country or city, check live status, and start your
                activation. Status updates as inventory and compliance approvals
                are confirmed.
              </p>
            </div>

            {/* Search */}
            <div className="mx-auto mt-8 max-w-6xl">
              <div
                className="
      flex flex-col md:flex-row gap-4 items-center
      rounded-[24px]
      bg-white
      p-1
      shadow-[0_8px_25px_rgba(0,0,0,0.08)]
    "
              >
                {/* Search Icon */}
                <FiSearch
                  className="hidden md:block ml-4 shrink-0 text-[#6B7280]"
                  size={20}
                />

                {/* Input */}
                <input
                  type="text"
                  placeholder={`Try "London", "Lagos", or "+1"...`}
                  className="
        h-14
        flex-1
        bg-transparent
        px-4 py-3.5
        w-full
        text-base
        text-slate-700
        outline-none
        placeholder:text-slate-400
      "
                />
                {/* Button */}
                <button
                  className="
        rounded-full
        bg-[#F26B45]
        px-8
        py-3.5
        text-sm
        w-full
        md:w-auto
        font-semibold
        text-white
        transition-all
        duration-300
        hover:scale-[1.02]
        hover:bg-[#EA5C34]
      "
                >
                  Search Numbers
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="mt-5 flex flex-wrap gap-2">
              {["All Markets", "Business", "Individual", "Available Now"].map(
                (item, index) => (
                  <button
                    key={item}
                    className={`rounded-full px-3 md:px-4 py-1.5 md:py-2 text-base md:text-lg font-medium
            ${
              index === 0 ? "bg-white text-[#014D46]" : "bg-white/10 text-white"
            }`}
                  >
                    {item}
                  </button>
                ),
              )}
            </div>

            {/* Countries Grid */}
            <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  city: "New York",
                  country: "United States",
                  code: "+1 212",
                  status: "Available",
                  color: "bg-green-100 text-green-700",
                },
                {
                  city: "Los Angeles",
                  country: "United States",
                  code: "+1 310",
                  status: "Available",
                  color: "bg-green-100 text-green-700",
                },
                {
                  city: "London",
                  country: "United Kingdom",
                  code: "+44 20",
                  status: "Verify",
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  city: "Toronto",
                  country: "Canada",
                  code: "+1 416",
                  status: "Available",
                  color: "bg-green-100 text-green-700",
                },
                {
                  city: "Mexico City",
                  country: "Mexico",
                  code: "+52 55",
                  status: "Phase 1",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  city: "Lagos",
                  country: "Nigeria",
                  code: "+234 1",
                  status: "Verify",
                  color: "bg-orange-100 text-orange-700",
                },
                {
                  city: "Johannesburg",
                  country: "South Africa",
                  code: "+27 11",
                  status: "Phase 1",
                  color: "bg-blue-100 text-blue-700",
                },
                {
                  city: "Accra",
                  country: "Ghana",
                  code: "+233 30",
                  status: "Waitlist",
                  color: "bg-slate-200 text-slate-700",
                },
                {
                  city: "Kingston",
                  country: "Jamaica",
                  code: "+1876",
                  status: "Developing",
                  color: "bg-indigo-100 text-indigo-700",
                },
                {
                  city: "Singapore",
                  country: "Singapore",
                  code: "+65",
                  status: "Available",
                  color: "bg-green-100 text-green-700",
                },
                {
                  city: "Nairobi",
                  country: "Kenya",
                  code: "+254 20",
                  status: "Waitlist",
                  color: "bg-slate-200 text-slate-700",
                },
                {
                  city: "Dubai",
                  country: "United Arab Emirates",
                  code: "+971 4",
                  status: "Waitlist",
                  color: "bg-slate-200 text-slate-700",
                },
              ].map((item) => (
                <div
                  key={item.city}
                  className="
              rounded-xl border border-white/10
              bg-white/5 p-4 p-6 backdrop-blur-sm
              transition hover:bg-white/10
            "
                >
                  <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-base md:text-lg font-medium text-white/70">
                      {item.city}
                    </h3>

                    <span
                      className={`rounded-full px-2.5 py-1 text-sm md:text-base font-semibold ${item.color}`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <p className="text-base sm:text-lg md:text-xl text-white">
                    {item.country}
                  </p>

                  <p className="mt-2 text-sm md:text-base text-white/60">
                    {item.code} • • • •
                  </p>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-8 border-t border-white/10 pt-5">
              <p className="text-base md:text-lg text-white/70">
                Number activation may require identity, business presence, or
                category verification. Status varies by jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Zoiko Local Section */}
      <section className="bg-[#F7F3ED] px-4 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
              Why Zoiko Local
            </p>

            <h2 className="text-3xl font-bold text-[#133A36] dark:text-white md:text-5xl">
              Not a number app.
            </h2>

            <h2 className="mt-1 text-3xl font-bold text-[#F26B45] md:text-5xl">
              A presence layer.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
              Three reasons businesses and individuals choose Zoiko Local over
              commodity VoIP.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                number: "01",
                title: "Get a local number where it matters.",
                desc: "Be reachable in the market you sell into and run a trusted local presence that customers recognize and answer.",
                icon: FiMapPin,
              },
              {
                number: "02",
                title: "Voice, video, and voicemail in one place.",
                desc: "Call, take calls, jump into video, and get intelligent voicemail summaries without juggling separate tools.",
                icon: FiVideo,
              },
              {
                number: "03",
                title: "Let AI handle missed and overflow moments.",
                desc: "Your AI receptionist captures who called, why, and what to do next — available, governed, and never after hours.",
                icon: FiMic,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="
              relative
              rounded-2xl
              border
              border-[#E8DDD0]
              bg-white
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              dark:border-slate-800
              dark:bg-slate-900
            "
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4F2]">
                      <Icon size={18} className="text-[#0D5C54]" />
                    </div>

                    <span className="text-2xl md:text-4xl font-bold text-[#EDE6DA] dark:text-slate-700">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg md:text-xl font-semibold text-[#133A36] dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base leading-7 text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business / Individual Section */}
      <section className="bg-[#EFE9DF] px-4 py-16 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center">
            <p className="mb-3 text-xs md:text-sm font-semibold uppercase tracking-[4px] text-[#F26B45]">
              Built for Both, From Day One
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#133A36] dark:text-white lg:text-5xl">
              Business and individuals.
            </h2>

            <h2 className="mt-1 text-2xl md:text-3xl font-bold text-[#F26B45] lg:text-5xl">
              No second-class users.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm md:text-base text-slate-500 dark:text-slate-400">
              Phase 1 launches for teams that sell across borders and for people
              living global lives.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {/* Business Card */}
            <div
              className="
          rounded-3xl
          bg-[#0D5C54]
          p-8
          text-white
          shadow-xl
        "
            >
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[4px] text-white/70">
                For Business
              </p>

              <h3 className="text-2xl font-bold">
                Local numbers for teams, clients, and every market you sell
                into.
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/70">
                Equip your team with local presence, intelligent routing, and
                the controls serious operations need.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Numbers per team, territory & income line",
                  "Smart routing & business hours",
                  "AI Receptionist & compliance controls",
                  "ZoikoNex billing & usage visibility",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FaCheck className="mt-1 text-[#7CE6C1]" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/pricing">
                <button
                  className="
            mt-8
            w-full
            rounded-full
            bg-[#F26B45]
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:opacity-90
          "
                >
                  Explore Business Plans
                </button>
              </a>
            </div>

            {/* Individual Card */}
            <div
              className="
          rounded-3xl
          bg-white
          p-8
          shadow-xl
          dark:bg-slate-800
        "
            >
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                For Individuals
              </p>

              <h3 className="text-2xl font-bold text-[#133A36] dark:text-white">
                A local number for your global life.
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
                Stay reachable wherever you live, work or keep personal calls
                separate, and never miss the moments that matter.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  "Local presence for family & opportunities",
                  "Separate personal & work calls cleanly",
                  "Voicemail summaries you can actually read",
                  "Simple, trusted reachability anywhere",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <FaCheck className="mt-1 text-[#0D5C54]" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <a href="/get-local-number">
                <button
                  className="
            mt-8
            w-full
            rounded-full
            bg-[#0D5C54]
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:opacity-90
          "
                >
                  Get Started
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Communications Stack */}
      <section className="bg-[#F7F3ED] px-4 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
              Everything In One Number
            </p>

            <h2 className="text-3xl font-bold text-[#143A36] dark:text-white md:text-5xl">
              A complete communications stack.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
              Phase 1 ships with the full set — without the feature overload.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Local Numbers",
                desc: "Be present where your customers are.",
                icon: FiMessageSquare,
              },
              {
                title: "Inbound Calling",
                desc: "Take every call on your local line.",
                icon: FiPhoneIncoming,
              },
              {
                title: "Outbound Calling",
                desc: "Dial out and look local.",
                icon: FiPhoneOutgoing,
              },
              {
                title: "Call Forwarding",
                desc: "Send calls where they belong.",
                icon: FiCornerUpRight,
              },
              {
                title: "Voicemail",
                desc: "Never lose a message.",
                icon: FiMic,
              },
              {
                title: "Voicemail Intelligence",
                desc: "Transcriptions, tags & playback.",
                icon: FiFileText,
              },
              {
                title: "AI Receptionist",
                desc: "Capture requests & qualify calls.",
                icon: FiVolume2,
              },
              {
                title: "Video Calls",
                desc: "Face-to-face in one tap.",
                icon: FiVideo,
              },
              {
                title: "Business Teams",
                desc: "Roles, seats & structure.",
                icon: FiUsers,
              },
              {
                title: "Compliance Controls",
                desc: "Trust built into every call.",
                icon: FiShield,
              },
              {
                title: "Usage Metering",
                desc: "See exactly what you use.",
                icon: FiActivity,
              },
              {
                title: "Audit Trails",
                desc: "Every event on the record.",
                icon: FiClipboard,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
              rounded-2xl
              border
              border-[#E8DDD0]
              bg-white
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              dark:border-slate-800
              dark:bg-slate-900
            "
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4F2]">
                    <Icon size={18} className="text-[#0D5C54]" />
                  </div>

                  <h3 className="font-semibold text-[#143A36] dark:text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Receptionist */}
      <section className="bg-[#EEF4F2] px-4 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left Content */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                AI Receptionist
              </p>

              <h2 className="text-2xl font-bold leading-tight text-[#143A36] dark:text-white md:text-4xl">
                An AI Receptionist for
                <br />
                the calls you cannot miss.
              </h2>

              <p className="mt-6 text-base md:text-lg text-slate-600 dark:text-slate-400">
                When you&apos;re busy or off-hours, your receptionist answers,
                understands, and hands you a clean record — ready for review,
                never out of control.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Answer missed & overflow calls",
                  "Capture name, reason, urgency",
                  "Route summaries to the right team",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <FiCheckCircle className="mt-1 text-[#F26B45]" size={18} />

                    <span className="text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <a href="/ai-receptionist">
                <button
                  className="
            mt-10
            rounded-full
            bg-[#F26B45]
            px-8
            py-3
            font-semibold
            text-white
            transition-all
            hover:opacity-90
          "
                >
                  See AI Receptionist
                </button>
              </a>
            </div>

            {/* Dashboard Card */}
            <div className="mx-auto w-full max-w-[420px] md:max-w-[480px]">
              <div
                className="
    rounded-[28px]
    bg-white
    p-4
    shadow-[0_25px_60px_rgba(0,0,0,0.12)]
    dark:bg-slate-800
  "
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FCE9E2]">
                      <FiPhoneCall size={18} className="text-[#F26B45]" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-[#133A36] dark:text-white">
                        Incoming call · +44 207 946 1234
                      </h4>

                      <p className="mt-1 text-xs text-slate-500">
                        Answered by AI Receptionist
                      </p>
                    </div>
                  </div>

                  <span
                    className="
        rounded-full
        bg-[#DFF4E8]
        px-3
        py-1
        text-[11px]
        font-medium
        text-[#0D7A46]
      "
                  >
                    ● Handled
                  </span>
                </div>

                {/* Divider */}
                <div className="my-4 h-px bg-[#E7DDD2]" />

                {/* AI Summary Box */}
                <div
                  className="
      rounded-2xl
      border
      border-[#DDD4C8]
      bg-[#F8F5F0]
      p-4
      dark:border-slate-600
      dark:bg-slate-700
    "
                >
                  <div className="mb-4">
                    <span
                      className="
          rounded-full
          bg-[#0D5C54]
          px-3
          py-1
          text-[10px]
          font-semibold
          tracking-wide
          text-white
        "
                    >
                      AI SUMMARY — DRAFT FOR REVIEW
                    </span>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div className="grid grid-cols-[70px_1fr] gap-3">
                      <span className="text-slate-500">Caller</span>

                      <span className="font-medium text-[#133A36] dark:text-white">
                        Amara Okonkwo
                      </span>
                    </div>

                    <div className="grid grid-cols-[70px_1fr] gap-3">
                      <span className="text-slate-500">Reason</span>

                      <span className="font-medium text-[#133A36] dark:text-white">
                        Quote on Q3 import shipment
                      </span>
                    </div>

                    <div className="grid grid-cols-[70px_1fr] gap-3">
                      <span className="text-slate-500">Priority</span>

                      <span className="font-medium text-[#F26B45]">
                        High — time sensitive
                      </span>
                    </div>

                    <div className="grid grid-cols-[70px_1fr] gap-3">
                      <span className="text-slate-500">Callback</span>

                      <span className="font-medium text-[#133A36] dark:text-white">
                        Today, before 5:00 PM GMT
                      </span>
                    </div>

                    <div className="grid grid-cols-[70px_1fr] gap-3">
                      <span className="text-slate-500">Suggested</span>

                      <span className="font-medium text-[#133A36] dark:text-white">
                        Assign to Sales · London
                      </span>
                    </div>
                  </div>
                </div>

                {/* Buttons */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    className="
        rounded-xl
        bg-[#F26B45]
        py-3
        text-sm
        font-semibold
        text-white
      "
                  >
                    Approve & route
                  </button>

                  <button
                    className="
        rounded-xl
        bg-[#DCE7E4]
        py-3
        text-sm
        font-semibold
        text-[#0D5C54]
        dark:bg-slate-700
        dark:text-white
      "
                  >
                    Edit summary
                  </button>
                </div>

                {/* Footer Note */}
                <div
                  className="
      mt-4
      flex
      items-start
      gap-3
      rounded-2xl
      bg-[#EEF4F2]
      p-4
      dark:bg-slate-700
    "
                >
                  <FiShield className="mt-2.5 text-[#0D5C54]" size={26} />

                  <p className="text-xs leading-5 text-slate-500 dark:text-slate-300">
                    AI outputs are governed, auditable, and configurable —
                    summaries and routing suggestions for review, never
                    uncontrolled commitments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Calling Section */}
      <section className="bg-[#F7F3ED] px-4 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Video Call UI */}
            <div className="mx-auto w-full max-w-[500px]">
              <div
                className="
          overflow-hidden
          rounded-[24px]
          bg-[#04554E]
          p-4
          shadow-[0_25px_60px_rgba(0,0,0,0.12)]
        "
              >
                {/* Participants */}
                <div className="grid grid-cols-2 gap-3">
                  {[
                    {
                      initials: "SK",
                      name: "Sade · Lagos",
                      bg: "bg-[#0D7A6D]",
                    },
                    {
                      initials: "DM",
                      name: "Daniel · London",
                      bg: "bg-[#1F4F8B]",
                    },
                    {
                      initials: "RP",
                      name: "Rita · Mexico",
                      bg: "bg-[#A56A00]",
                    },
                    {
                      initials: "AK",
                      name: "Ava · Toronto",
                      bg: "bg-[#0E7A57]",
                    },
                  ].map((person) => (
                    <div
                      key={person.name}
                      className={`relative h-[110px] md:h-[150px] lg:h-[180px] rounded-xl ${person.bg}`}
                    >
                      <div className="flex h-full flex-col items-center justify-center">
                        <div
                          className="absolute
                    mb-3
                    flex
                    h-10 md:h-16
                    w-10 md:w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-white/20
                    text-base md:text-lg
                    font-bold
                    text-white
                  "
                        >
                          {person.initials}
                        </div>

                        <span className="relative top-20 -left-12 transform -translate-y-1/2 rounded-full bg-black/20 px-2 py-1 text-xs md:text-sm text-white">
                          {person.name}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Controls */}
                <div className="mt-4 flex justify-center gap-3">
                  <button className="flex h-9 md:h-12 w-9 md:w-12 items-center justify-center rounded-full bg-white/20 text-white">
                    <FiMic size={25} />
                  </button>

                  <button className="flex h-9 md:h-12 w-9 md:w-12 items-center justify-center rounded-full bg-white/20 text-white">
                    <FiVideo size={25} />
                  </button>

                  <button className="flex h-9 md:h-12 w-9 md:w-12 items-center justify-center rounded-full bg-[#F26B45] text-white">
                    <FiPhone size={25} />
                  </button>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                Video Calling · Phase 1
              </p>

              <h2 className="text-2xl font-bold leading-tight text-[#143A36] dark:text-white md:text-4xl">
                Voice when it&apos;s enough.
                <br />
                Video when it matters.
              </h2>

              <p className="mt-6 text-sm md:text-base text-slate-600 dark:text-slate-400">
                Video isn&apos;t an afterthought — it&apos;s core. Jump from a call to
                face-to-face in one tap, with meeting links your clients can
                join from anywhere.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "1:1 and small-group video",
                  "Shareable meeting links",
                  "Screen sharing built in",
                  "Optional summaries & transcripts",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <FiCheck size={16} className="mt-1 text-[#0D7A6D]" />

                    <span className="text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-[#EFE9DF] px-4 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
              How It Works
            </p>

            <h2 className="text-3xl font-bold text-[#143A36] dark:text-white md:text-5xl">
              From zero to local in four steps.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-400">
              No paperwork mountain. Just choose, verify, and start
              communicating.
            </p>
          </div>

          {/* Steps */}
          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {[
              {
                number: "1",
                title: "Choose your market",
                desc: "Pick the country and city where you need local presence.",
              },
              {
                number: "2",
                title: "Select your number",
                desc: "Browse available local numbers and reserve the one you want.",
              },
              {
                number: "3",
                title: "Verify & activate",
                desc: "Complete any identity or business checks required.",
              },
              {
                number: "4",
                title: "Start communicating",
                desc: "Call, take calls, join video meetings and use AI Receptionist.",
              },
            ].map((step) => (
              <div
                key={step.number}
                className="
            rounded-2xl
            bg-white
            p-6
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:shadow-lg
            dark:bg-slate-800
          "
              >
                <div className="mb-4 text-3xl md:text-4xl lg:text-5xl font-bold text-[#F26B45]">
                  {step.number}
                </div>

                <h3 className="mb-3 text-sm md:text-base font-semibold text-[#143A36] dark:text-white">
                  {step.title}
                </h3>

                <p className="text-sm md:text-base leading-6 text-slate-500 dark:text-slate-400">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex justify-center">
            <a href="/get-local-number">
              <button
                className="
          rounded-full
          bg-[#F26B45]
          px-8
          py-3
          text-sm md:text-base
          font-semibold
          text-white
          transition-all
          hover:scale-[1.02]
          hover:opacity-90
        "
              >
                Start With Your First Number
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Launch Markets */}
      <section className="bg-[#F7F3ED] px-4 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <p className="mb-3 text-xs md:text-sm font-semibold uppercase tracking-[4px] text-[#F26B45]">
              Phase 1 Launch Markets
            </p>

            <h2 className="text-2xl sm:text-3xl font-bold text-[#143A36] dark:text-white md:text-4xl">
              Launching in priority business markets
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base md:text-lg text-slate-500 dark:text-slate-400">
              We open markets as inventory, carrier readiness, and regulatory
              checks are confirmed.
            </p>
          </div>

          {/* Market Grid */}
          <div className="mt-12 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                code: "US",
                country: "United States",
                prefix: "+1",
                status: "Available",
                color: "bg-green-100 text-green-700",
              },
              {
                code: "GB",
                country: "United Kingdom",
                prefix: "+44",
                status: "Verify Required",
                color: "bg-orange-100 text-orange-700",
              },
              {
                code: "CA",
                country: "Canada",
                prefix: "+1",
                status: "Available",
                color: "bg-green-100 text-green-700",
              },
              {
                code: "MX",
                country: "Mexico",
                prefix: "+52",
                status: "Phase 1 Target",
                color: "bg-blue-100 text-blue-700",
              },
              {
                code: "NG",
                country: "Nigeria",
                prefix: "+234",
                status: "Verify Required",
                color: "bg-orange-100 text-orange-700",
              },
              {
                code: "ZA",
                country: "South Africa",
                prefix: "+27",
                status: "Phase 1 Target",
                color: "bg-blue-100 text-blue-700",
              },
              {
                code: "GH",
                country: "Ghana",
                prefix: "+233",
                status: "Waitlist",
                color: "bg-slate-200 text-slate-700",
              },
              {
                code: "KE",
                country: "Kenya",
                prefix: "+254",
                status: "Waitlist",
                color: "bg-slate-200 text-slate-700",
              },
              {
                code: "JM",
                country: "Jamaica",
                prefix: "+1876",
                status: "Developing",
                color: "bg-blue-100 text-blue-700",
              },
            ].map((item) => (
              <div
                key={item.country}
                className="
            rounded-xl
            border
            border-[#E8DDD0]
            bg-white
            p-4 md:py-5
            dark:border-slate-700
            dark:bg-slate-900
          "
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F2ED] font-semibold">
                      {item.code}
                    </div>

                    <div>
                      <h3 className="font-medium dark:text-white">
                        {item.country}
                      </h3>

                      <p className="text-xs md:text-sm text-slate-500">
                        {item.prefix}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs md:text-sm font-medium ${item.color}`}
                  >
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Expansion Candidates */}
          <div className="mt-10">
            <p className="mb-4 text-center text-xs md:text-sm font-semibold uppercase tracking-[4px] text-slate-400">
              Expansion Candidates
            </p>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  code: "IE",
                  country: "Ireland",
                  prefix: "+353",
                },
                {
                  code: "AU",
                  country: "Australia",
                  prefix: "+61",
                },
                {
                  code: "SG",
                  country: "Singapore",
                  prefix: "+65",
                },
              ].map((item) => (
                <div
                  key={item.country}
                  className="
              rounded-xl
              border
              border-[#E8DDD0]
              bg-white
              p-4
              dark:border-slate-700
              dark:bg-slate-900
            "
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F5F2ED] font-semibold">
                      {item.code}
                    </div>

                    <div>
                      <h3 className="font-medium dark:text-white">
                        {item.country}
                      </h3>

                      <p className="text-xs md:text-sm text-slate-500">
                        {item.prefix}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex justify-center">
            <a href="/global-coverage">
              <button
                className="
          flex items-center gap-2
          rounded-full
          border
          border-[#D9D0C5]
          bg-white
          px-6
          py-3
          text-sm
          font-medium
          dark:bg-slate-900
        "
              >
                View all countries
                <FiArrowRight />
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Business Workspace */}
      <section className="bg-[#EEF4F2] px-4 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                Business Workspace
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#143A36] dark:text-white md:text-5xl">
                The operating layer for your team&apos;s numbers.
              </h2>

              <p className="mt-6 text-slate-600 dark:text-slate-400">
                Assign numbers, route by territory, set business hours, and
                watch usage and AI-handled calls — all from one dashboard.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Owners, admins & members with clear roles",
                  "Number assignment by territory routing",
                  "Usage dashboards & billing visibility",
                  "AI-handled calls tracked by team",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <FiCheck className="mt-1 text-[#0D7A6D]" size={16} />

                    <span className="text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <a href="#">
                <button
                  className="
            mt-10
            rounded-full
            bg-[#F26B45]
            px-8
            py-3
            font-semibold
            text-white
          "
                >
                  Book a Demo
                </button>
              </a>
            </div>

            {/* Dashboard */}
            <div
              className="
    mx-auto
    w-full
    max-w-[540px]
    overflow-hidden
    rounded-[24px]
    bg-white
    shadow-[0_20px_50px_rgba(0,0,0,0.12)]
    dark:bg-slate-800
  "
            >
              {/* Header */}
              <div className="flex items-center gap-2 bg-[#0C5A52] px-5 py-4">
                <FaCircle className="text-[8px] text-[#FFB84D]" />
                <FaCircle className="text-[8px] text-[#FF7B57]" />
                <FaCircle className="text-[8px] text-[#6EE7A8]" />

                <span className="ml-2 text-sm font-medium text-white">
                  Acme Trade Co · Workspace
                </span>
              </div>

              <div className="p-4 md:p-5">
                {/* Stats */}
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {[
                    {
                      title: "Active\nnumbers",
                      value: "14",
                      growth: "+3 this month",
                    },
                    {
                      title: "Team\nmembers",
                      value: "9",
                      growth: "5 markets",
                    },
                    {
                      title: "Calls this\nmonth",
                      value: "2,847",
                      growth: "+18%",
                    },
                    {
                      title: "AI handled",
                      value: "612",
                      growth: "21% of calls",
                      highlight: true,
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="
            rounded-xl
            bg-[#F7F3ED]
            p-3
            dark:bg-slate-700
          "
                    >
                      <p className="text-[11px] md:text-sm leading-4 text-slate-500 whitespace-pre-line">
                        {item.title}
                      </p>

                      <h4
                        className={`mt-2 text-2xl font-bold ${
                          item.highlight
                            ? "text-[#F26B45]"
                            : "text-[#143A36] dark:text-white"
                        }`}
                      >
                        {item.value}
                      </h4>

                      <p className="mt-1 text-xs md:text-sm font-medium text-[#17A05D]">
                        {item.growth}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Country Table */}
                <div
                  className="
        mt-5
        overflow-hidden
        rounded-2xl
        border
        border-[#E6DDD2]
        dark:border-slate-700
      "
                >
                  {[
                    {
                      code: "US",
                      country: "United States",
                      data: "4 numbers · 1,204 calls",
                    },
                    {
                      code: "GB",
                      country: "United Kingdom",
                      data: "3 numbers · 738 calls",
                    },
                    {
                      code: "NG",
                      country: "Nigeria",
                      data: "2 numbers · 461 calls",
                    },
                    {
                      code: "CA",
                      country: "Canada",
                      data: "2 numbers · 312 calls",
                    },
                  ].map((row, index) => (
                    <div
                      key={row.country}
                      className={`
            flex items-center justify-between
            px-4 py-4
            bg-white
            dark:bg-slate-800

            ${
              index !== 3
                ? "border-b border-[#E6DDD2] dark:border-slate-700"
                : ""
            }
          `}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="
                flex
                h-9
                w-9
                items-center
                justify-center
                rounded-lg
                bg-[#F5F2ED]
                text-xs md:text-sm
                font-semibold
                text-[#143A36]
              "
                        >
                          {row.code}
                        </div>

                        <span className="text-sm md:text-base font-medium text-[#143A36] dark:text-white">
                          {row.country}
                        </span>
                      </div>

                      <span className="text-xs md:text-sm text-slate-500">
                        {row.data}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance & Trust */}
      <section className="bg-[#F7F3ED] px-4 py-20 dark:bg-slate-950">
        <div
          className="
      mx-auto
      max-w-6xl
      overflow-hidden
      rounded-[28px]
      bg-[#052824]
      p-8
      md:p-12
      shadow-[0_25px_60px_rgba(0,0,0,0.15)]
    "
        >
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Left Content */}
            <div>
              <p className="mb-4 text-xs md:text-sm font-semibold uppercase tracking-[4px] text-[#FFC6B4]">
                Compliance & Trust
              </p>

              <h2 className="text-2xl sm:text-3xl max-w-xl font-bold leading-tight text-white md:text-4xl">
                Cross-border communication
                <br />
                that has to be <span className="text-[#FFC6B4]">trusted.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base md:text-lg text-white/70">
                Serious buyers ask serious questions. Zoiko Local answers them
                with identity, consent, audit, and jurisdiction controls built
                in — not bolted on.
              </p>

              <div className="mt-8 flex items-start gap-3">
                <FiCheck className="mt-1 text-[#7EE0B7]" />

                <p className="text-sm text-white/60">
                  Number availability, emergency service, recording,
                  transcription, AI processing, and verification requirements
                  vary by jurisdiction.
                </p>
              </div>
            </div>

            {/* Right Grid */}
            <div className="grid grid-cols-2 gap-3">
              {[
                {
                  icon: FiUser,
                  title: "Identity checks",
                  desc: "Verify who holds each number.",
                },
                {
                  icon: FiShield,
                  title: "Consent controls",
                  desc: "Recording & transcription governance.",
                },
                {
                  icon: FiFileText,
                  title: "Audit trails",
                  desc: "Every event, time-stamped.",
                },
                {
                  icon: FiLock,
                  title: "Secure access",
                  desc: "Role-based least privilege.",
                },
                {
                  icon: FiClock,
                  title: "Retention settings",
                  desc: "Keep data only as long as needed.",
                },
                {
                  icon: FiGlobe,
                  title: "Jurisdiction rules",
                  desc: "Adapted per country.",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-5
                backdrop-blur-sm
                transition-all
                duration-300
                hover:bg-white/10
              "
                  >
                    <Icon size={18} className="mb-4 text-white" />

                    <h3 className="font-semibold text-white">{item.title}</h3>

                    <p className="mt-2 text-sm text-white/60">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ZoikoNex Billing */}
      <section className="bg-[#EFE9DF] px-4 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Billing Statement Card */}
            <div
              className="
          mx-auto
          w-full
          max-w-[480px]
          rounded-[24px]
          bg-white
          p-5
          shadow-[0_20px_50px_rgba(0,0,0,0.08)]
          dark:bg-slate-800
        "
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <h4 className="font-semibold text-[#143A36] dark:text-white">
                  Monthly Statement
                </h4>

                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#F26B45]" />
                  <span className="text-xs font-medium text-[#143A36] dark:text-white">
                    ZoikoNex
                  </span>
                </div>
              </div>

              {/* Billing Rows */}
              <div className="mt-6 space-y-4">
                {[
                  ["Business Growth — 9 seats", "Subscription"],
                  ["Outbound usage · 2,847 min", "Metered"],
                  ["AI Receptionist events · 612", "Event-metered"],
                  ["Video minutes · 1140", "Included"],
                ].map(([left, right]) => (
                  <div
                    key={left}
                    className="
                flex
                items-center
                justify-between
                border-b
                border-[#E7DDD2]
                pb-3
                dark:border-slate-700
              "
                  >
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {left}
                    </span>

                    <span className="text-sm font-medium text-[#143A36] dark:text-white">
                      {right}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <p className="font-semibold text-[#143A36] dark:text-white">
                    Invoice Ready
                  </p>

                  <div className="mt-2 inline-flex items-center rounded-full bg-[#E8F7EE] px-3 py-1 text-xs font-medium text-[#0D7A4D]">
                    ✓ Billing events logged & reconciled
                  </div>
                </div>

                <span className="font-semibold text-[#F26B45]">
                  Audit-clean
                </span>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                ZoikoNex Billing Backbone
              </p>

              <h2 className="text-3xl font-bold leading-tight text-[#143A36] dark:text-white md:text-5xl">
                Billing powered by ZoikoNex.
              </h2>

              <p className="mt-6 text-slate-600 dark:text-slate-400">
                Not a lightweight number app. Telecom-grade billing
                infrastructure — usage metering, invoices, dunning, and
                audit-ready events you can trust at scale.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                {[
                  "Plan subscriptions",
                  "Invoices & payments",
                  "Audit-ready billing events",
                  "Usage & event metering",
                  "Grace periods & dunning",
                  "Transparent statements",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <FiCheck className="text-[#0D7A4D]" />

                    <span className="text-slate-700 dark:text-slate-300">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <a href="/pricing">
                <button
                  className="
            mt-10
            rounded-full
            bg-[#F26B45]
            px-8
            py-3
            font-semibold
            text-white
            transition-all
            hover:opacity-90
          "
                >
                  View Pricing
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-[#F7F3ED] px-4 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center">
            <p className="mb-3 text-xs md:text-sm font-semibold uppercase tracking-[4px] text-[#F26B45]">
              The Offering
            </p>

            <h2 className="text-2xl font-bold text-[#143A36] dark:text-white md:text-4xl">
              A modern successor to the local-number use case.
            </h2>

            <p className="mx-auto mt-4 max-w-3xl text-sm md:text-base text-slate-500 dark:text-slate-400">
              People once reached for Skype to get a local number and call
              across borders. This is what that should look like now.
            </p>
          </div>

          {/* Table */}
          <div
            className="
      mt-12
      overflow-hidden
      rounded-[24px]
      border
      border-[#E7DDD2]
      bg-white
      shadow-sm
      dark:border-slate-700
      dark:bg-slate-900
    "
          >
            {/* Header */}
            <div
              className="
        grid
        grid-cols-[2fr_1fr_1fr]
        bg-[#0D5C54]
        px-5
        py-4
        text-sm md:text-base
        font-semibold
        text-white
      "
            >
              <div>Capability</div>
              <div className="text-center">Zoiko Local</div>
              <div className="text-center">Legacy number apps</div>
            </div>

            {[
              ["Local number presence", true, "Limited"],
              ["Reliable calling", true, true],
              ["AI Receptionist", true, false],
              ["Built-in video", true, "Extra"],
              ["Business team control", true, false],
              ["Compliance controls", true, "Limited"],
              ["Telecom-grade billing", true, false],
            ].map((row, index) => (
              <div
                key={String(row[0])}
                className={`
            grid
            grid-cols-[2fr_1fr_1fr]
            items-center
            px-5
            py-4
            text-sm md:text-base

            ${
              index % 2 === 0
                ? "bg-[#FCFAF8] dark:bg-slate-800"
                : "bg-white dark:bg-slate-900"
            }
          `}
              >
                <div className="font-medium text-sm md:text-base text-[#143A36] dark:text-white">
                  {row[0]}
                </div>

                <div className="flex justify-center">
                  <FiCheck className="text-[#0D7A4D]" size={18} />
                </div>

                <div className="flex justify-center">
                  {row[2] === true ? (
                    <FiCheck
                      className="text-sm md:text-base text-[#0D7A4D]"
                      size={18}
                    />
                  ) : row[2] === false ? (
                    <FiX
                      className=" text-sm md:text-base text-[#F26B45]"
                      size={18}
                    />
                  ) : (
                    <span className="text-xs md:text-sm font-medium text-slate-500">
                      {row[2]}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-10 flex justify-center">
            <a href="/switch-from-skype">
              <button
                className="
          rounded-full
          bg-[#F26B45]
          px-8
          py-3
          text-sm
          font-semibold
          text-white
          transition
          hover:opacity-90
        "
              >
                Move Beyond Skype
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-[#F3EFE8] px-4 py-20 dark:bg-slate-900">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center">
            <p className="mb-3 text-xs md:text-sm font-semibold uppercase tracking-[4px] text-[#F26B45]">
              Pricing
            </p>

            <h2 className="text-3xl font-bold text-[#143A36] dark:text-white md:text-4xl">
              Find the plan that <span className="text-[#F26B45]">fits.</span>
            </h2>

            <p className="mx-auto mt-4 text-sm md:text-base max-w-2xl text-slate-500 dark:text-slate-400">
              Pick only what you need today — talk to us when you&apos;re ready to
              scale.
            </p>
          </div>

          {/* Cards */}
          <div className="mt-14 grid gap-6 lg:grid-cols-4">
            {[
              {
                title: "Individual",
                subtitle: "For global life & travel",
                heading: "Get started",
                desc: "Self-serve activation",
                features: [
                  "One local number",
                  "Calling & video",
                  "Voicemail summaries",
                  "Separate work & personal",
                ],
                button: "Choose Plan",
                href: "/pricing",
                featured: false,
              },
              {
                title: "Business Starter",
                subtitle: "For small teams & founders",
                heading: "Choose plan",
                desc: "Built for first hires",
                features: [
                  "Multiple numbers",
                  "Team members & roles",
                  "AI Receptionist",
                  "Usage visibility",
                ],
                button: "Choose Plan",
                href: "/pricing",
                featured: false,
              },
              {
                title: "Business Growth",
                subtitle: "For scaling sales teams",
                heading: "Choose plan",
                desc: "Routing & controls included",
                features: [
                  "Everything in Starter",
                  "Territory routing",
                  "Compliance controls",
                  "Advanced billing visibility",
                ],
                button: "Choose Plan",
                href: "/pricing",
                featured: true,
              },
              {
                title: "Enterprise",
                subtitle: "For multi-market operations",
                heading: "Talk to sales",
                desc: "Custom & compliance-led",
                features: [
                  "Everything in Growth",
                  "Custom market coverage",
                  "Dedicated support",
                  "Procurement & security review",
                ],
                button: "Talk to Sales",
                href: "/contact-sales",
                featured: false,
                isEnterprise: true,
              },
            ].map((plan) => (
              <div
                key={plan.title}
                className={`
            relative
            rounded-[28px]
            border
            p-6
            transition-all
            duration-300
            hover:-translate-y-1
            flex
            flex-col
            justify-between
            ${
              plan.featured
                ? "border-[#0D5C54] bg-[#0A4F4A] text-white shadow-2xl scale-[1.02] z-10"
                : "border-[#E7DDD2] bg-white text-[#143A36] shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            }
          `}
              >
                {plan.featured && (
                  <span
                    className="
                absolute
                -top-3
                left-1/2
                -translate-x-1/2
                rounded-full
                bg-[#F26B45]
                px-3.5
                py-1
                text-[10px]
                font-bold
                uppercase
                tracking-wider
                text-white
                shadow-md
              "
                  >
                    Most Popular
                  </span>
                )}

                <div>
                  <div className="flex flex-col gap-1">
                    <h3
                      className={`text-lg font-bold ${
                        plan.featured
                          ? "text-white"
                          : "text-[#143A36] dark:text-white"
                      }`}
                    >
                      {plan.title}
                    </h3>
                    <p
                      className={`text-xs ${
                        plan.featured
                          ? "text-white/80"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {plan.subtitle}
                    </p>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-2xl font-bold tracking-tight">
                      {plan.heading}
                    </h4>
                    <p
                      className={`mt-1.5 text-xs ${
                        plan.featured
                          ? "text-white/80"
                          : "text-slate-500 dark:text-slate-400"
                      }`}
                    >
                      {plan.desc}
                    </p>
                  </div>

                  <div className="mt-8 space-y-3.5 border-t border-slate-100/10 pt-6">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5">
                        <FiCheck
                          size={14}
                          className={
                            plan.featured
                              ? "text-[#FFC6B4] flex-shrink-0"
                              : "text-[#0D7A4D] flex-shrink-0"
                          }
                        />
                        <span className="text-xs font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <a href={plan.href} className="block w-full">
                    <button
                      className={`
                  w-full
                  rounded-full
                  py-3
                  text-xs
                  font-semibold
                  transition-colors
                  border
                  ${
                    plan.featured
                      ? "bg-[#F26B45] border-transparent text-white hover:bg-[#e05a36]"
                      : plan.isEnterprise
                        ? "bg-[#0D5C54] border-transparent text-white hover:bg-[#094842]"
                        : "bg-white border-[#E7DDD2] text-[#143A36] hover:bg-slate-50 dark:bg-slate-700 dark:border-slate-600 dark:text-white"
                  }
                `}
                    >
                      {plan.button}
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <p className="mt-12 text-center text-xs text-slate-500 dark:text-slate-400">
            Final prices are confirmed at checkout once approved. Plans show fit
            and positioning, not placeholder numbers.
          </p>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="bg-[#F7F3ED] px-4 py-20 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="text-center">
            <p className="mb-3 text-xs md:text-sm font-semibold uppercase tracking-[4px] text-[#F26B45]">
              Use Cases
            </p>

            <h2 className="text-3xl font-bold text-[#143A36] dark:text-white md:text-5xl">
              Made for the way <span className="text-[#F26B45]">you</span> work.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
              Find your situation — and the local presence that fits it.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {[
              {
                title: "International consultants",
                desc: "Bill clients abroad from a number they trust and recognize.",
                icon: FiGlobe,
              },
              {
                title: "Diaspora founders",
                desc: "Stay rooted at home while you build across borders.",
                icon: FiMapPin,
              },
              {
                title: "Remote sales teams",
                desc: "Local presence in every territory your team sells into.",
                icon: FiUsers,
              },
              {
                title: "Import/export businesses",
                desc: "One number for suppliers and buyers worldwide.",
                icon: FiHome,
              },
              {
                title: "Service businesses",
                desc: "Never miss a booking with AI handling overflow.",
                icon: FiBriefcase,
              },
              {
                title: "Frequent travelers",
                desc: "Keep one reachable number wherever you land.",
                icon: FiNavigation,
              },
              {
                title: "Professional firms",
                desc: "Polished presence for law, finance, and advisory.",
                icon: FiFileText,
              },
              {
                title: "Support teams",
                desc: "Route, summarize, and resolve from one place.",
                icon: FiPhone,
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="
              rounded-2xl
              border
              border-[#E7DDD2]
              bg-white
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg
              dark:border-slate-700
              dark:bg-slate-900
            "
                >
                  {/* Icon */}
                  <div
                    className="
                mb-5
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                bg-[#EEF4F2]
                dark:bg-slate-800
              "
                  >
                    <Icon size={18} className="text-[#0D5C54]" />
                  </div>

                  {/* Title */}
                  <h3 className="text-sm md:text-base font-semibold text-[#143A36] dark:text-white">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm md:text-base leading-6 text-slate-500 dark:text-slate-400">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}

      <section className="bg-[#F3EFE8] px-4 py-20 dark:bg-slate-900">
  <div className="mx-auto max-w-3xl">
    {/* Header */}
    <div className="text-center">
      <p className="mb-3 text-xs md:text-sm font-semibold uppercase tracking-[4px] text-[#F26B45]">
        FAQ
      </p>

      <h2 className="text-3xl font-bold text-[#143A36] dark:text-white md:text-4xl">
        Questions, answered.
      </h2>
    </div>

    {/* Accordion List */}
    <div className="mt-12 space-y-4">
      {[
        {
          question: "Can I get more than one number?",
          answer:
            "Yes. Individuals can hold a personal local number, and business plans support multiple numbers across teams, territories, and inbound lines — all managed from your workspace.",
        },
        {
          question: "Does Zoiko Local support business teams?",
          answer:
            "Yes, Zoiko Local provides tools designed specifically for teams, including shared workspaces, role-based access control, and collaborative routing capabilities.",
        },
        {
          question: "Is video calling included?",
          answer:
            "Yes, high-definition video calling is included across supported plans to enable seamless communication.",
        },
        {
          question: "How does the AI Receptionist work?",
          answer:
            "The AI Receptionist automatically answers inbound calls, routes callers appropriately, and provides conversational summaries.",
        },
        {
          question: "Which countries are available?",
          answer:
            "We support local numbers and service across multiple global markets and regions.",
        },
        {
          question: "Is this a Skype replacement?",
          answer:
            "Zoiko Local is built for professional remote work with modern business features, local numbers, and team controls.",
        },
        {
          question: "What about emergency calling?",
          answer:
            "Emergency calling features vary by region and number type. Please review our compliance documentation for details.",
        },
        {
          question: "How are recording and transcription consent handled?",
          answer:
            "Built-in notice and prompt controls assist with compliance regarding local call recording and transcription regulations.",
        },
        {
          question: "How does billing work?",
          answer:
            "Billing is handled securely online with flexible terms depending on your selected plan.",
        },
        {
          question: "Can I cancel anytime?",
          answer:
            "Yes, you can cancel your subscription directly from your workspace settings at any time.",
        },
      ].map((faq) => (
        <details
          key={faq.question}
          className="group rounded-[20px] border border-[#E7DDD2] bg-white transition-all duration-300 overflow-hidden shadow-sm dark:border-slate-700 dark:bg-slate-800"
        >
          <summary className="flex w-full cursor-pointer items-center justify-between p-6 text-left list-none [&::-webkit-details-marker]:hidden">
            <span className="text-base font-bold text-[#143A36] dark:text-white md:text-lg">
              {faq.question}
            </span>

            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-colors bg-[#EEF4F2] text-[#143A36] group-open:bg-[#F26B45] group-open:text-white dark:bg-slate-700 dark:text-slate-200">
              <span className="block group-open:hidden">
                <Plus size={16} />
              </span>
              <span className="hidden group-open:block">
                <X size={16} />
              </span>
            </div>
          </summary>

          <div className="px-6 pb-6 pt-0 text-sm leading-relaxed text-slate-500 dark:text-slate-300 md:text-base">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>

    {/* Footer Support Link */}
    <div className="mt-12 text-center">
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Still have questions?{" "}
        <a
          href="/help-center"
          className="inline-flex items-center gap-1 font-semibold text-[#F26B45] hover:underline"
        >
          Visit the Help Center <ArrowRight size={12} />
        </a>
      </p>
    </div>
  </div>
</section>

      {/* Final CTA Section */}
      <section className="bg-[#F7F3ED] px-4 py-16 dark:bg-slate-950">
        <div className="mx-auto max-w-6xl">
          <div
            className="
        overflow-hidden
        rounded-[32px]
        bg-[#0D5C54]
        px-6
        py-14
        text-center
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]

        md:px-12
        md:py-20
      "
          >
            {/* Label */}
            <p
              className="
          mb-4
          text-xs md:text-sm
          font-semibold
          uppercase
          tracking-[4px]
          text-[#F6A27E]
        "
            >
              Ready When You Are
            </p>

            {/* Heading */}
            <h2
              className="
          mx-auto
          max-w-4xl
          text-3xl
          font-bold
          leading-tight
          text-white
          md:text-4xl
        "
            >
              Get your local number where business and life happen.
            </h2>

            {/* Buttons */}
            <div
              className="
          mt-10
          flex
          flex-col
          items-center
          justify-center
          gap-4

          sm:flex-row
        "
            >
              <a href="/get-local-number">
                <button
                  className="
            flex
            items-center
            gap-2
            rounded-full
            bg-[#F26B45]
            px-7
            py-3.5
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:bg-[#EB5D34]
          "
                >
                  Get a Local Number
                  <FiArrowRight size={16} />
                </button>
              </a>

              <a href="/contact-sales">
                <button
                  className="
            rounded-full
            bg-white
            px-7
            py-3.5
            text-sm
            font-semibold
            text-[#0D5C54]
            transition-all
            duration-300
            hover:bg-[#F4F4F4]
          "
                >
                  Talk to Sales
                </button>
              </a>
            </div>

            {/* Country Pills */}
            <div
              className="
          mt-10
          flex 
          max-w-3xl mx-auto
          flex-wrap
          items-center
          justify-center
          gap-3
        "
            >
              {[
                "US United States",
                "GB United Kingdom",
                "CA Canada",
                "MX Mexico",
                "KE Kenya",
                "JM Jamaica",
                "NG Nigeria",
                "ZA South Africa",
                "GH Ghana",
              ].map((country) => (
                <span
                  key={country}
                  className="
              rounded-full
              border
              border-white/10
              bg-white/10
              px-4
              py-2
              text-xs md:text-sm
              font-medium
              text-white/90
              backdrop-blur-sm
            "
                >
                  {country}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
