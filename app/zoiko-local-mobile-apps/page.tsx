"use client";


import React, { useState } from "react";
import {
  FiArrowRight,
  FiBell,
  FiCheck,
  FiGrid,
  FiImage,
  FiInfo,
  FiLock,
  FiMapPin,
  FiMessageCircle,
  FiMic,
  FiPhone,
  FiPlus,
  FiSearch,
  FiShield,
  FiUsers,
  FiVideo,
  FiX,
} from "react-icons/fi";

// ─── IMAGE PLACEHOLDER ───────────────────────────────────────────────────────
// Every photo in the design is a slot, not a hardcoded asset. Each one is
// labelled with what belongs there and sized to the aspect ratio from the
// mockup, so the layout holds its shape before any asset exists.
//
// To drop a real image in, replace the inner <div> with:
//   <Image src="/images/…" alt="…" fill className="object-cover" />
// and keep the wrapper's `relative` + rounding classes.
function ImageSlot({
  label,
  className = "",
  rounded = "rounded-2xl",
}: {
  label: string;
  className?: string;
  rounded?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden ${rounded} border border-dashed border-[#CFC6B4] bg-[#EDE7DB] ${className}`}
      role="img"
      aria-label={`Image placeholder: ${label}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4 text-center">
        <FiImage className="text-xl text-[#A79C86]" aria-hidden />
        <span className="text-[11px] font-medium leading-tight text-[#8C8271]">{label}</span>
      </div>
    </div>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────
const capabilityStrip = [
  { icon: <FiMapPin />, title: "Business number", description: "Keep work calls on your business identity." },
  { icon: <FiPhone />, title: "Calling", description: "Make and receive calls while mobile." },
  { icon: <FiMessageCircle />, title: "Messages", description: "Keep conversations in one place." },
  { icon: <FiVideo />, title: "Video", description: "Join face-to-face conversations on the go." },
  { icon: <FiMic />, title: "AI Receptionist", description: "See and manage plan-enabled AI call activity." },
];

const identityPoints = [
  "One business identity across your team.",
  "Mobile access without publishing your personal number.",
  "Calls and conversations tied to your Zoiko Local workspace.",
];

const deviceSteps = [
  { step: "1", title: "Sign in", description: "Sign in to your Zoiko Local account on your phone or the web." },
  { step: "2", title: "Continue", description: "Access the communications your plan and device support." },
  { step: "3", title: "Stay informed", description: "Keep your business identity and settings connected to your workspace." },
];

const locations = [
  { name: "United States", caption: "Local & toll-free numbers" },
  { name: "United Kingdom", caption: "Local city numbers" },
  { name: "Canada", caption: "Local numbers by region" },
  { name: "Europe", caption: "Selected markets" },
  { name: "Nigeria", caption: "Local business numbers" },
  { name: "South Africa", caption: "Local numbers by region" },
  { name: "Jamaica", caption: "Local presence" },
];

const trustControls = [
  {
    icon: <FiLock />,
    title: "App permissions",
    description:
      "Request only the device permissions needed for the features you choose to use — nothing more.",
    link: null,
  },
  {
    icon: <FiMic />,
    title: "Recording & consent",
    description:
      "Recording and transcription behavior follows configured controls and applicable requirements in your market.",
    link: "Recording & Consent",
  },
  {
    icon: <FiShield />,
    title: "Privacy",
    description:
      "Learn how Zoiko Local handles personal data and account information across your workspace.",
    link: "Privacy Policy",
  },
];

const planPoints = [
  "Clear plan entitlements — no surprises.",
  "Upgrade or downgrade as your needs change.",
  "Feature availability shown before purchase.",
];

// Only the first answer is visible in the mockup — the other seven are written
// in the page's voice and hedged the same way (plan-dependent, market-dependent).
// Replace with your approved copy before launch.
const faqItems = [
  {
    question: "Is Zoiko Local available on iPhone and Android?",
    answer:
      "Zoiko Local mobile apps for iPhone and Android are being prepared for release. You can get mobile app updates to be notified when the app is available for your device and market, and use Zoiko Local on the web in the meantime.",
  },
  {
    question: "Can I use my Zoiko Local business number from the mobile app?",
    answer:
      "Yes. Eligible numbers on your account can be used from supported devices, so calls and conversations stay on your business identity rather than your personal number. Availability depends on your plan and market.",
  },
  {
    question: "Do mobile features depend on my Zoiko Local plan?",
    answer:
      "Yes. Mobile access follows the same subscription and entitlements as your account. Features that require a specific plan are labelled as plan dependent, and availability is shown before purchase.",
  },
  {
    question: "Can I use Zoiko Local abroad?",
    answer:
      "Access from outside your home market depends on connectivity, local regulation, and the destinations included in your plan. Some number types and calling capabilities are restricted by jurisdiction.",
  },
  {
    question: "Does the mobile app support video?",
    answer:
      "Supported video sessions can be started or joined from your phone where your plan includes video. Session capabilities and any recording behavior follow your workspace configuration.",
  },
  {
    question: "Can I manage AI Receptionist activity from my phone?",
    answer:
      "For plans that include AI Receptionist, mobile access can surface supported call activity, summaries, messages, and follow-up context. Exact controls depend on plan and release availability.",
  },
  {
    question: "What permissions does the app request?",
    answer:
      "Only the device permissions needed for the features you choose to use — for example microphone for calling, or notifications for call and message alerts. Each is requested at the point of use.",
  },
  {
    question: "Where can I check number availability?",
    answer:
      "Use the availability search on this page, or the number search in your workspace. Availability, number types, requirements, and capabilities vary by location and are confirmed during setup.",
  },
];

// ─── SHARED CLASSES ──────────────────────────────────────────────────────────
const eyebrow =
  "inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#E85D3C] before:block before:h-px before:w-5 before:bg-[#E85D3C]";
const btnOrange =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#E85D3C] px-7 text-sm font-semibold text-white shadow-lg transition hover:bg-[#D14C2C]";
const btnOutline =
  "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-[#D9D2C4] bg-white px-7 text-sm font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]";
const cardBase = "rounded-2xl border border-[#E4DED0] bg-white";
const chip =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E4EFE9] text-lg text-[#0E5C4E]";
const h2Class =
  "text-3xl font-bold leading-[1.15] tracking-tight text-[#0E2A21] md:text-[40px]";
const accent = "italic text-[#E85D3C]";

export default function MobileApps() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="bg-gradient-to-br from-[#E7E8E2] via-[#F1EDE6] to-[#F7E9E2] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <p className={eyebrow}>Zoiko Local Mobile Apps</p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight text-[#0E2A21] md:text-[54px]">
              Business calling and communications,
              <br />
              <span className={accent}>wherever you work.</span>
            </h1>

            <p className="mt-6 max-w-lg text-[15px] leading-7 text-[#5C6660]">
              Use Zoiko Local on your phone to stay reachable on your business number, manage
              conversations, and keep work moving beyond your desk.
            </p>

            <div className="mt-6 flex max-w-md items-start gap-2.5 rounded-xl border border-[#E4DED0] bg-white/70 px-4 py-3">
              <FiInfo className="mt-0.5 shrink-0 text-[#8C8271]" aria-hidden />
              <p className="text-[13px] leading-5 text-[#5C6660]">
                Available features depend on your plan, number availability, device, and market.
              </p>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button type="button" className={btnOrange}>
                <FiBell aria-hidden /> Get mobile app updates
              </button>
              <button type="button" className={btnOutline}>
                Use Zoiko Local on the web
              </button>
            </div>

            <div className="mt-4 flex items-start gap-2 text-[12px] leading-5 text-[#8C8271]">
              <FiInfo className="mt-0.5 shrink-0" aria-hidden />
              <p>
                Mobile apps are coming soon — get notified when they&apos;re available for your
                device and market.
              </p>
            </div>
          </div>

          {/* Hero collage: overlapping photo slots + the two floating status
              chips from the mockup, plus the phone mock (real markup, not an
              image, so the number stays selectable text). */}
          <div className="relative min-h-[520px]">
            <ImageSlot
              label="Photo — person on a business call by a window"
              className="absolute right-0 top-0 h-[300px] w-[62%]"
            />
            <ImageSlot
              label="Photo — team meeting around a table"
              className="absolute bottom-14 left-0 h-[150px] w-[52%]"
              rounded="rounded-xl"
            />

            <div className="absolute left-[6%] top-[6%] flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E4EFE9] text-[#0E5C4E]">
                <FiPhone className="text-sm" aria-hidden />
              </span>
              <div className="leading-tight">
                <p className="text-[13px] font-semibold text-[#0E2A21]">On your business line</p>
                <p className="text-[11px] text-[#8C8271]">Not your personal number</p>
              </div>
            </div>

            <div className="absolute left-0 top-[30%] flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FBEAE3] text-[#C2421F]">
                <FiMic className="text-sm" aria-hidden />
              </span>
              <div className="leading-tight">
                <p className="text-[13px] font-semibold text-[#0E2A21]">AI answers overflow</p>
                <p className="text-[11px] text-[#8C8271]">Plan dependent</p>
              </div>
            </div>

            <div className="absolute bottom-0 right-[4%] w-[210px] rounded-[28px] border-[6px] border-[#0E2A21] bg-[#0E2A21] p-3 shadow-2xl">
              <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-white/50">
                Primary number
              </p>
              <p className="mt-1 text-[17px] font-bold text-white">+1 (916) 555-0148</p>
              <p className="mt-1 flex items-center gap-1.5 text-[10px] text-white/60">
                <span className="h-1.5 w-1.5 rounded-full bg-[#3FBE95]" /> Calls routed normally
              </p>

              <div className="mt-3 space-y-2 rounded-2xl bg-[#F4F7F5] p-2">
                {[
                  { initials: "ST", name: "Sarah Thompson", meta: "Incoming call", icon: <FiPhone />, tint: "bg-[#0E5C4E]" },
                  { initials: "DC", name: "David Chen", meta: "Message", icon: <FiMessageCircle />, tint: "bg-[#2B5C9B]" },
                  { initials: "AI", name: "AI Receptionist", meta: "2 calls handled", icon: <FiMic />, tint: "bg-[#E85D3C]" },
                ].map((row) => (
                  <div
                    key={row.initials}
                    className="flex items-center gap-2 rounded-xl bg-white px-2 py-1.5"
                  >
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${row.tint}`}
                    >
                      {row.initials}
                    </span>
                    <div className="min-w-0 flex-1 leading-tight">
                      <p className="truncate text-[10px] font-semibold text-[#0E2A21]">{row.name}</p>
                      <p className="text-[9px] text-[#8C8271]">{row.meta}</p>
                    </div>
                    <span className="text-[11px] text-[#0E5C4E]">{row.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CAPABILITY STRIP ═══ */}
      <section className="bg-[#F6F3EC] py-10">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-4 px-5 md:grid-cols-3 lg:grid-cols-5">
          {capabilityStrip.map((item) => (
            <div key={item.title} className={`${cardBase} p-5`}>
              <div className={chip}>{item.icon}</div>
              <h3 className="mt-4 text-[15px] font-bold text-[#0E2A21]">{item.title}</h3>
              <p className="mt-1.5 text-[12.5px] leading-5 text-[#5C6660]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══ BUSINESS IDENTITY ═══ */}
      <section className="bg-[#F6F3EC] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-2">
          <div>
            <p className={eyebrow}>Work number, personal phone</p>
            <h2 className={`mt-5 ${h2Class}`}>
              Your business identity, <span className={accent}>on your phone.</span>
            </h2>
            <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#5C6660]">
              Use Zoiko Local to keep business communications separate from personal calling while
              staying reachable away from your desk. Your available numbers and calling capabilities
              follow your account, plan, and supported markets.
            </p>

            <ul className="mt-7 space-y-3.5">
              {identityPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#FBEAE3] text-[11px] text-[#E85D3C]">
                    <FiCheck strokeWidth={3} aria-hidden />
                  </span>
                  <span className="text-[14px] leading-6 text-[#3F4B45]">{point}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full border border-[#D9D2C4] bg-white px-6 text-sm font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
            >
              Explore local numbers <FiArrowRight aria-hidden />
            </button>
          </div>

          <div className="relative">
            <ImageSlot
              label="Photo — retail counter, staff serving a customer holding a phone"
              className="h-[380px] w-full"
            />
            <div className="absolute -bottom-5 right-4 flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#E4EFE9] text-[#0E5C4E]">
                <FiMapPin className="text-sm" aria-hidden />
              </span>
              <div className="leading-tight">
                <p className="text-[13px] font-bold text-[#0E2A21]">+1 (916) 555-0148</p>
                <p className="text-[11px] text-[#8C8271]">Your business line</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CORE MOBILE FEATURES (bento) ═══ */}
      <section className="bg-[#EDE7DB] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${eyebrow} justify-center`}>Core mobile features</p>
            <h2 className={`mt-5 ${h2Class}`}>
              Built for work <span className={accent}>beyond the desk.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#5C6660]">
              Everything you need to run business conversations from your phone — with
              plan-dependent features clearly labeled.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            {/* Business calling — image on top */}
            <div className={`${cardBase} overflow-hidden`}>
              <ImageSlot
                label="Photo — phone home screen with app icons"
                className="h-[190px] w-full border-0 border-b border-dashed"
                rounded="rounded-none"
              />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className={chip}>
                    <FiPhone />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0E2A21]">Business calling</h3>
                </div>
                <p className="mt-3 text-[13.5px] leading-6 text-[#5C6660]">
                  Make and receive inbound and outbound calls using your entitled business numbers,
                  wherever you are.
                </p>
              </div>
            </div>

            {/* Conversation center — text only */}
            <div className={`${cardBase} p-6`}>
              <div className="flex items-center gap-3">
                <div className={chip}>
                  <FiMessageCircle />
                </div>
                <h3 className="text-[16px] font-bold text-[#0E2A21]">Conversation center</h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-6 text-[#5C6660]">
                Access supported calls, messages, voicemail, and related activity in one place, so
                nothing gets lost between channels.
              </p>
            </div>

            {/* Video conversations — text + plan badge */}
            <div className={`${cardBase} p-6`}>
              <div className="flex items-center gap-3">
                <div className={chip}>
                  <FiVideo />
                </div>
                <h3 className="text-[16px] font-bold text-[#0E2A21]">Video conversations</h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-6 text-[#5C6660]">
                Start or join supported video sessions from your phone when a conversation needs a
                face, not just a voice.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#FBF0DC] px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#B4761A]">
                <FiInfo aria-hidden /> Plan dependent
              </span>
            </div>

            {/* Contacts & caller context — image on top */}
            <div className={`${cardBase} overflow-hidden`}>
              <ImageSlot
                label="Photo — two colleagues high-fiving in an office"
                className="h-[150px] w-full border-0 border-b border-dashed"
                rounded="rounded-none"
              />
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <div className={chip}>
                    <FiUsers />
                  </div>
                  <h3 className="text-[16px] font-bold text-[#0E2A21]">Contacts &amp; caller context</h3>
                </div>
                <p className="mt-3 text-[13.5px] leading-6 text-[#5C6660]">
                  Surface relevant caller and contact information so you know who&apos;s reaching you
                  before you answer.
                </p>
              </div>
            </div>

            {/* Notifications */}
            <div className={`${cardBase} p-6`}>
              <div className="flex items-center gap-3">
                <div className={chip}>
                  <FiBell />
                </div>
                <h3 className="text-[16px] font-bold text-[#0E2A21]">Notifications you control</h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-6 text-[#5C6660]">
                Call and message alerts with OS-level permission controls — you decide what reaches
                you and when.
              </p>
            </div>

            {/* Account & availability */}
            <div className={`${cardBase} p-6`}>
              <div className="flex items-center gap-3">
                <div className={chip}>
                  <FiGrid />
                </div>
                <h3 className="text-[16px] font-bold text-[#0E2A21]">Account &amp; availability controls</h3>
              </div>
              <p className="mt-3 text-[13.5px] leading-6 text-[#5C6660]">
                Manage supported preferences and availability states so your team and callers see the
                right status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ACROSS DEVICES (green band) ═══ */}
      <section className="bg-[#F6F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="rounded-[28px] bg-gradient-to-br from-[#12403C] via-[#0F3A36] to-[#0B302D] p-8 md:p-12">
            <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#F5B19A] before:block before:h-px before:w-5 before:bg-[#F5B19A]">
              Across devices
            </p>
            <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-[40px]">
              Stay connected across{" "}
              <span className="italic text-[#F5B19A]">the way you work.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-white/70">
              Use Zoiko Local from supported devices and keep your business communications tied to
              the same account and workspace.
            </p>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {deviceSteps.map((s) => (
                <div
                  key={s.step}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-5"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-sm font-bold text-[#F5B19A]">
                    {s.step}
                  </span>
                  <h3 className="mt-4 text-[15px] font-bold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-[12.5px] leading-5 text-white/65">{s.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 grid gap-4 md:grid-cols-3">
              <ImageSlot
                label="Photo — hand holding phone against colourful mural"
                className="h-[120px] w-full border-white/20 bg-white/[0.06]"
                rounded="rounded-xl"
              />
              <ImageSlot
                label="Photo — sticky note held up"
                className="h-[120px] w-full border-white/20 bg-white/[0.06]"
                rounded="rounded-xl"
              />
              <ImageSlot
                label="Photo — hands gesturing near a laptop"
                className="h-[120px] w-full border-white/20 bg-white/[0.06]"
                rounded="rounded-xl"
              />
            </div>

            <button
              type="button"
              className="mt-8 inline-flex h-11 items-center gap-2 rounded-full bg-white px-6 text-sm font-semibold text-[#0E2A21] transition hover:bg-[#F1EDE6]"
            >
              Explore the platform <FiArrowRight aria-hidden />
            </button>
          </div>
        </div>
      </section>

      {/* ═══ AI RECEPTIONIST ═══ */}
      <section className="bg-[#EDE7DB] py-14 md:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
          <div className="relative">
            <ImageSlot
              label="Photo — person on a phone call, blue ambient lighting"
              className="h-[420px] w-full"
            />
            <div className="absolute -bottom-5 -left-4 flex items-center gap-2.5 rounded-xl bg-white px-4 py-2.5 shadow-lg">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#FBEAE3] text-[#C2421F]">
                <FiMic className="text-sm" aria-hidden />
              </span>
              <div className="leading-tight">
                <p className="text-[13px] font-bold text-[#0E2A21]">3 calls handled today</p>
                <p className="text-[11px] text-[#8C8271]">Summaries ready to review</p>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-flex rounded-full bg-[#FBEAE3] px-3 py-1.5 text-[10.5px] font-bold uppercase tracking-[0.1em] text-[#C2421F]">
              AI Receptionist · Plan dependent
            </span>
            <h2 className={`mt-5 ${h2Class}`}>
              Keep an eye on the calls your{" "}
              <span className={accent}>AI receptionist handles.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-7 text-[#5C6660]">
              For plans that include AI Receptionist, mobile access can surface supported call
              activity, summaries, messages, and follow-up context — so you can stay informed when
              you are away from your desk.
            </p>

            <div className="mt-7 flex items-start gap-3.5">
              <FiInfo className="mt-0.5 shrink-0 text-2xl text-[#A79C86]" aria-hidden />
              <p className="text-[12.5px] leading-5 text-[#8C8271]">
                Exact controls and AI features depend on plan and release availability. AI does not
                make legal, medical, financial, or emergency decisions.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button type="button" className={btnOrange}>
                Explore AI Receptionist
              </button>
              <button type="button" className={btnOutline}>
                Compare plans
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOCAL NUMBERS & AVAILABILITY ═══ */}
      <section className="bg-[#F6F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${eyebrow} justify-center`}>Local numbers &amp; availability</p>
            <h2 className={`mt-5 ${h2Class}`}>
              Use Zoiko Local where your business needs{" "}
              <span className={accent}>a local presence.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#5C6660]">
              Choose from supported number types and locations, then use eligible numbers with Zoiko
              Local on supported devices.
            </p>
          </div>

          {/* Search card. The input is a real, labelled field but has no
              endpoint wired — point it at your number-search API. */}
          <div className={`mx-auto mt-10 max-w-2xl ${cardBase} p-6`}>
            <label htmlFor="availability" className="block text-[13px] font-bold text-[#0E2A21]">
              Find number availability
            </label>
            <div className="mt-3 flex flex-col gap-3 sm:flex-row">
              <div className="relative flex-1">
                <FiSearch
                  className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#8C8271]"
                  aria-hidden
                />
                <input
                  id="availability"
                  type="search"
                  placeholder="Search country, city, or area code"
                  className="h-12 w-full rounded-full border border-[#E4DED0] bg-white pl-11 pr-4 text-sm text-[#0E2A21] placeholder:text-[#8C8271] focus:border-[#E85D3C] focus:outline-none focus:ring-2 focus:ring-[#E85D3C]/25"
                />
              </div>
              <button type="button" className={btnOrange}>
                Check availability
              </button>
            </div>
            <p className="mt-4 flex items-start gap-2 text-[12px] leading-5 text-[#8C8271]">
              <FiInfo className="mt-0.5 shrink-0" aria-hidden />
              Availability, number types, requirements, and capabilities vary by location.
            </p>
          </div>

          {/* Location tiles — each photo is a slot with the label overlaid. */}
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {locations.map((loc) => (
              <div key={loc.name} className={`${cardBase} overflow-hidden`}>
                <div className="relative">
                  <ImageSlot
                    label={`Photo — ${loc.name}`}
                    className="h-[110px] w-full border-0"
                    rounded="rounded-none"
                  />
                  <div className="pointer-events-none absolute inset-0 flex items-end gap-2.5 bg-gradient-to-t from-black/55 to-transparent p-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur">
                      <FiMapPin className="text-sm" aria-hidden />
                    </span>
                    <span className="text-[13px] font-bold leading-tight text-white">
                      {loc.name}
                    </span>
                  </div>
                </div>
                <p className="px-4 py-3 text-[12px] text-[#5C6660]">{loc.caption}</p>
              </div>
            ))}

            <button
              type="button"
              className="flex flex-col items-start justify-center gap-2 rounded-2xl border border-[#CBDDD5] bg-[#E4EFE9] p-5 text-left transition hover:bg-[#D8E8E0]"
            >
              <span className="text-[13.5px] font-bold leading-tight text-[#0E2A21]">
                View all supported locations
              </span>
              <FiArrowRight className="text-[#0E5C4E]" aria-hidden />
            </button>
          </div>

          <p className="mt-6 text-center text-[12px] text-[#8C8271]">
            Locations shown are illustrative of supported markets. Availability and requirements are
            confirmed during setup.
          </p>
        </div>
      </section>

      {/* ═══ TRUST, PRIVACY & PERMISSIONS ═══ */}
      <section className="bg-[#EDE7DB] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-2xl text-center">
            <p className={`${eyebrow} justify-center`}>Trust, privacy &amp; permissions</p>
            <h2 className={`mt-5 ${h2Class}`}>
              Built with <span className={accent}>clear controls.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[15px] leading-7 text-[#5C6660]">
              Precise, verifiable statements — so you know what the app accesses and why before you
              install.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {trustControls.map((item) => (
              <div key={item.title} className={`${cardBase} flex flex-col p-6`}>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E4EFE9] text-lg text-[#0E5C4E]">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-[16px] font-bold text-[#0E2A21]">{item.title}</h3>
                <p className="mt-3 flex-1 text-[13.5px] leading-6 text-[#5C6660]">
                  {item.description}
                </p>
                {item.link && (
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-2 text-[13px] font-semibold text-[#E85D3C] hover:underline"
                  >
                    {item.link} <FiArrowRight aria-hidden />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ PLANS & COMMERCIAL ═══ */}
      <section className="bg-[#F6F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className={`grid items-center gap-10 overflow-hidden ${cardBase} p-8 lg:grid-cols-2 md:p-10`}>
            <div>
              <p className={eyebrow}>Plans &amp; commercial</p>
              <h2 className={`mt-5 ${h2Class}`}>
                Choose the Zoiko Local plan that <span className={accent}>fits how you work.</span>
              </h2>
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#5C6660]">
                Mobile access follows the same subscription and entitlements as your Zoiko Local
                account. Compare plans to see included numbers, calling, collaboration, and AI
                capabilities.
              </p>

              <ul className="mt-7 space-y-3.5">
                {planPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#FBEAE3] text-[11px] text-[#E85D3C]">
                      <FiCheck strokeWidth={3} aria-hidden />
                    </span>
                    <span className="text-[14px] leading-6 text-[#3F4B45]">{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button type="button" className={btnOrange}>
                  Compare plans
                </button>
                <button type="button" className={btnOutline}>
                  Start free
                </button>
              </div>
            </div>

            <ImageSlot
              label="Photo — two people shaking hands"
              className="h-[340px] w-full"
            />
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══ */}
      <section className="bg-[#EDE7DB] py-14 md:py-20">
        <div className="mx-auto max-w-3xl px-5">
          <div className="text-center">
            <p className={`${eyebrow} justify-center`}>FAQ</p>
            <h2 className={`mt-5 ${h2Class}`}>
              Zoiko Local mobile app <span className={accent}>questions.</span>
            </h2>
          </div>

          <div className="mt-12 space-y-3">
            {faqItems.map((item, i) => {
              const open = openFaq === i;
              return (
                <div key={item.question} className="overflow-hidden rounded-2xl bg-white">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-[14.5px] font-bold text-[#0E2A21]">{item.question}</span>
                    <span
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs transition ${
                        open ? "bg-[#E85D3C] text-white" : "bg-[#EDE7DB] text-[#0E2A21]"
                      }`}
                    >
                      {open ? <FiX aria-hidden /> : <FiPlus aria-hidden />}
                    </span>
                  </button>
                  {open && (
                    <p className="px-6 pb-6 text-[13.5px] leading-6 text-[#5C6660]">{item.answer}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="bg-[#F6F3EC] py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5">
          <div className="rounded-[28px] bg-gradient-to-br from-[#12403C] via-[#0F3A36] to-[#0B302D] px-8 py-14 text-center md:px-12">
            <p className="inline-flex items-center gap-2.5 text-[11px] font-bold uppercase tracking-[0.16em] text-[#F5B19A] before:block before:h-px before:w-5 before:bg-[#F5B19A]">
              Be ready
            </p>
            <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-[40px]">
              Be ready when Zoiko Local mobile is available.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-7 text-white/70">
              Get product updates for your device and market — then bring your business number,
              calling, messaging, video, and plan-enabled AI Receptionist with you.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button type="button" className={btnOrange}>
                <FiBell aria-hidden /> Get mobile app updates
              </button>
              <button
                type="button"
                className="inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold text-[#0E2A21] transition hover:bg-[#F1EDE6]"
              >
                Compare plans
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}