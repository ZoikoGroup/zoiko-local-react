import React from 'react';
import Image from 'next/image';
import { PiPaintBrushLight } from 'react-icons/pi'
import {
    FiArrowRight,
    FiCheck, FiBriefcase, FiUsers, FiMessageSquare,
    FiMapPin, FiMap, FiHeart,
    FiMic, FiPhone, FiVideo,
    FiActivity,
} from "react-icons/fi";
import Faq from '../Components/Faq';

const faqItems = [
  {
    question: "What is Zoiko Local?",
    answer:
      "Zoiko Local is a business communication platform that gives you local phone numbers, calling, video, and an AI Receptionist — all connected in one workspace. It's built for businesses that need to sound local and stay reachable across markets.",
  },
  {
    question: "What does the platform include?",
    answer:
      "Zoiko Local includes local numbers across supported markets, inbound and outbound calling, call routing, smart voicemail, video meetings, an AI Receptionist, and a shared team workspace — all from one platform.",
  },
  {
    question: "Can I get a local number and make business calls?",
    answer:
      "Yes. You can get a local number in supported markets and use it to receive inbound calls and — on supported plans — make outbound calls with that number as your caller ID.",
  },
  {
    question: "Does Zoiko Local include an AI Receptionist?",
    answer:
      "Yes. The AI Receptionist answers calls when your team is unavailable, screens and qualifies callers, captures the intent of the call, and routes or logs inquiries automatically — so no call is ever lost.",
  },
  {
    question: "Can it replace a Skype Number?",
    answer:
      "Zoiko Local is a direct alternative for businesses moving away from Skype Numbers. You can get an equivalent local number, retain the same market presence, and gain additional business features like routing, video, and AI call handling.",
  },
  {
    question: "Can remote teams use Zoiko Local?",
    answer:
      "Yes. Zoiko Local is built for distributed and remote teams. Multiple team members can share a single business line, with calls routed by role, availability, or department — regardless of where each person is located.",
  },
  {
    question: "Can it support customer support calls?",
    answer:
      "Yes. You can set up a dedicated support number, route calls to the right team, capture missed calls with the AI Receptionist, and track call history — making Zoiko Local a reliable layer for customer-facing support operations.",
  },
  {
    question: "Can I add more numbers or markets later?",
    answer:
      "Yes. You can add numbers in additional markets as your business expands. Zoiko Local is designed to scale — start with one number and grow your presence, team size, and routing complexity over time.",
  },
];

export default function Platform() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[#F7F3ED] dark:bg-slate-950">
                <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
                    <div className="grid items-center gap-16 lg:grid-cols-2">

                        {/* Left Content */}
                        <div>
                            <p className="mb-4 text-[10px] md:text-xs font-semibold uppercase tracking-[4px] text-[#F26B45]">
                                The Zoiko Local Platform · AI Powered
                            </p>

                            <h1 className="max-w-xl text-3xl font-bold leading-tight dark:text-white md:text-5xl">
                                The AI-powered platform for local presence in every market you serve.
                            </h1>

                            <p className="mt-6 max-w-xl text-[16px] leading-8 text-slate-600 dark:text-slate-400">
                                Local numbers, business calling, video, and an AI Receptionist that
                                answers, qualifies and captures calls when your team can't — in one
                                workspace.
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                                <button className="flex items-center justify-center gap-2 rounded-2xl bg-[#F26B45] px-7 py-3.5 font-semibold text-white transition hover:bg-[#EB5D34]">
                                    Get a Local Number
                                    <FiArrowRight />
                                </button>

                                <button className="rounded-2xl border border-[#D8D2C8] bg-white px-7 py-3.5 font-semibold text-[#143A36] transition hover:bg-[#F8F5F1] dark:border-slate-700 dark:bg-slate-900 dark:text-white">
                                    Explore the Platform
                                </button>
                            </div>

                            {/* Supporting Text */}
                            <p className="mt-8 text-sm text-slate-500 dark:text-slate-400">
                                Replacing a retired Skype Number?
                                <span className="ml-1 font-semibold text-[#F26B45]">
                                    Switch from Skype →
                                </span>
                            </p>

                            {/* Features */}
                            <div className="mt-8 space-y-4">
                                {[
                                    "Local numbers across 150+ markets",
                                    "Calling, video & routing in one platform",
                                    "AI Receptionist captures every missed call",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <FiCheck className="text-[#0D7A4D]" />
                                        <span className="text-sm text-slate-700 dark:text-slate-300">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Dashboard */}
                        <div className="mx-auto w-full max-w-[470px]">
                            <div className="overflow-hidden rounded-[16px] bg-white shadow-[0_18px_40px_rgba(0,0,0,0.12)] dark:bg-slate-900">

                                {/* Header */}
                                <div className="flex items-center justify-between bg-[#0D5C54] px-5 py-3">
                                    <h3 className="text-[13px] font-medium text-white">
                                        AI Receptionist · call captured
                                    </h3>

                                    <div className="flex flex-col items-center">
                                        <span className="h-1.5 w-1.5 rounded-full bg-[#5FE39C]" />
                                        <span className="mt-1 text-[9px] uppercase tracking-wider text-white/80">
                                            LIVE
                                        </span>
                                    </div>
                                </div>

                                <div className="p-4">

                                    {/* Number */}
                                    <div className="flex items-start justify-between">
                                        <div className="flex gap-3">
                                            <span className="mt-1 text-sm font-semibold text-[#2B2B2B]">
                                                GB
                                            </span>

                                            <div>
                                                <h4 className="text-sm font-semibold text-[#3D88D8]">
                                                    +44 20 7946 0238
                                                </h4>

                                                <p className="mt-1 text-[11px] text-[#9A9A9A]">
                                                    Missed by team · 6:42 pm
                                                </p>
                                            </div>
                                        </div>

                                        <span className="rounded-full bg-[#FFE9DF] px-3 py-1 text-[10px] font-semibold text-[#E86A3B]">
                                            After hours
                                        </span>
                                    </div>

                                    {/* Summary Box */}
                                    <div className="mt-4 rounded-xl border border-[#DDD7CF] bg-[#F8F5F1]">
                                        <div className="border-b border-[#E7DED5] px-4 py-3">
                                            <p className="text-[10px] font-bold uppercase tracking-[2px] text-[#9B958C]">
                                                AI RECEPTIONIST HANDLED
                                            </p>
                                        </div>

                                        {[
                                            ["Caller", "Priya Madsen"],
                                            ["Intent", "New enquiry — pricing"],
                                            ["Qualified", "Yes · 12 staff"],
                                            ["Callback", "Tomorrow 9:30am"],
                                            ["Routed to", "Sales team"],
                                        ].map(([label, value], index) => (
                                            <div
                                                key={label}
                                                className={`grid grid-cols-[90px_1fr] px-4 py-3 ${index !== 4 ? "border-b border-[#ECE4DB]" : ""
                                                    }`}
                                            >
                                                <span className="text-[12px] text-[#8B8B8B]">
                                                    {label}
                                                </span>

                                                <span
                                                    className={`text-right text-[12px] font-semibold ${label === "Routed to"
                                                        ? "text-[#E96A3B]"
                                                        : "text-[#2E2E2E] dark:text-white"
                                                        }`}
                                                >
                                                    {value}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Footer Pills */}
                                    <div className="mt-4 flex gap-2">
                                        <span className="rounded-full bg-[#E8F7EE] px-3 py-1 text-[10px] md:text-xs text-[#0D7A4D]">
                                            Captured, not lost
                                        </span>

                                        <span className="rounded-full bg-[#EEF4F2] px-3 py-1 text-[10px] md:text-xs text-[#0D5C54]">
                                            Summary logged
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* What Makes It Different */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-12 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl">

                    {/* Heading */}
                    <div className="mx-auto max-w-4xl text-center">
                        <p className="mb-4 text-[10px] md:text-xs font-semibold uppercase tracking-[4px] text-[#F26B45]">
                            What Makes It Different
                        </p>

                        <h2 className="mx-auto max-w-3xl text-[34px] font-bold leading-tight text-[#143A36] dark:text-white md:text-[40px]">
                            Local presence in many markets.
                            <br />
                            AI that catches every call.
                            One platform.
                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-[15px] leading-7 text-slate-500 dark:text-slate-400">
                            Most tools give you a number, or calls, or an answering service.
                            Zoiko Local is the layer that does all of it together —
                            recognizable local numbers across the markets you serve,
                            with an AI Receptionist making sure no enquiry is ever lost.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="mt-16 grid gap-6 md:grid-cols-3">

                        {[
                            {
                                title: "Multi-market local presence",
                                desc: "Hold recognizable local numbers across several countries and manage them from one workspace — no one domestic line.",
                                icon: FiMapPin,
                            },
                            {
                                title: "AI call capture built in",
                                desc: "When your team is busy, after hours, or offline, the AI Receptionist answers, qualifies and books the callback automatically.",
                                icon: FiMic,
                            },
                            {
                                title: "One connected layer",
                                desc: "Numbers, calling, video and routing work together — not stitched across separate apps and providers.",
                                icon: FiActivity,
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
              rounded-2xl
              border
              border-[#E6DDD2]
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
                mb-6
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
                                        <Icon
                                            size={18}
                                            className="text-[#0D5C54]"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[18px] font-semibold leading-7 text-[#143A36] dark:text-white">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-4 text-[14px] leading-7 text-slate-500 dark:text-slate-400">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}

                    </div>

                </div>
            </section>
            {/* Everything Starts Section */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-12 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl">

                    {/* Heading */}
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                            The Four Pillars
                        </p>

                        <h2 className="text-[34px] font-bold leading-tight text-[#143A36] dark:text-white md:text-[40px]">
                            Everything starts with the way
                            <br />
                            customers reach you.
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="mt-14 grid gap-5 lg:grid-cols-2">

                        {[
                            {
                                icon: FiMapPin,
                                title: "Local Numbers",
                                badge: "Start here",
                                desc:
                                    "Create local presence in the markets your customers recognize.",
                                link: "Explore Local Numbers",
                            },
                            {
                                icon: FiPhone,
                                title: "Calling",
                                desc:
                                    "Make and receive business calls with a professional local identity.",
                                link: "Explore Calling",
                            },
                            {
                                icon: FiVideo,
                                title: "Video",
                                desc:
                                    "Move high-trust conversations into secure video when voice isn't enough.",
                                link: "Explore Video",
                            },
                            {
                                icon: FiMic,
                                title: "AI Receptionist",
                                featured: true,
                                badgeTop: "The differentiator",
                                desc:
                                    "Answers, qualifies and captures calls when your team is busy or unavailable — so no enquiry is ever lost.",
                                link: "Explore AI Receptionist",
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`
              relative
              rounded-[18px]
              border
              bg-white
              p-6
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-lg

              ${item.featured
                                            ? "border-[#F26B45]"
                                            : "border-[#E4DDD3]"
                                        }

              dark:bg-slate-900
              dark:border-slate-700
            `}
                                >
                                    {/* Floating Badge */}
                                    {item.badgeTop && (
                                        <div className="absolute -top-3 left-6">
                                            <span className="rounded-full bg-[#F26B45] px-3 py-1 text-[10px] font-semibold text-white shadow-md">
                                                {item.badgeTop}
                                            </span>
                                        </div>
                                    )}

                                    {/* Icon */}
                                    <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-[#EEF4F2] dark:bg-slate-800">
                                        <Icon
                                            size={18}
                                            className={`${item.featured
                                                ? "text-[#F26B45]"
                                                : "text-[#0D5C54]"
                                                }`}
                                        />
                                    </div>

                                    {/* Title */}
                                    <div className="flex items-center gap-2">
                                        <h3 className="text-lg font-semibold text-[#143A36] dark:text-white">
                                            {item.title}
                                        </h3>

                                        {item.badge && (
                                            <span className="text-[10px] font-semibold uppercase tracking-wide text-[#F26B45]">
                                                {item.badge}
                                            </span>
                                        )}
                                    </div>

                                    {/* Description */}
                                    <p className="mt-3 text-[14px] leading-6 text-slate-500 dark:text-slate-400">
                                        {item.desc}
                                    </p>

                                    {/* Link */}
                                    <button className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F26B45] transition hover:gap-3">
                                        {item.link}
                                        <FiArrowRight size={14} />
                                    </button>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* How It Works Section */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-12 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl">

                    {/* Heading */}
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mb-3 text-[10px] md:text-xs font-semibold uppercase tracking-[4px] text-[#F26B45]">
                            How It Works
                        </p>

                        <h2 className="text-[30px] font-bold leading-tight dark:text-white md:text-[40px]">
                            From local number to customer
                            <br />
                            conversation in one connected flow.
                        </h2>
                    </div>

                    {/* Steps */}
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {[
                            {
                                number: "1",
                                title: "Choose a market",
                                desc: "Pick the country, city, or area code customers already trust.",
                            },
                            {
                                number: "2",
                                title: "Get a local number",
                                desc: "Secure your business number instantly with guided setup.",
                            },
                            {
                                number: "3",
                                title: "Connect paths",
                                desc: "Route calls to people, teams, departments, or AI Receptionist.",
                            },
                            {
                                number: "4",
                                title: "Add calling, video & AI",
                                desc: "Handle every conversation through one connected workspace.",
                            },
                            {
                                number: "5",
                                title: "Scale by market",
                                desc: "Add countries, users, routing and compliance as you grow.",
                            },
                        ].map((step) => (
                            <div
                                key={step.number}
                                className="
            rounded-[16px]
            border
            border-[#E6DDD2]
            bg-white
            p-5
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-[#F26B45]
            hover:shadow-lg
            dark:border-slate-700
            dark:bg-slate-900
          "
                            >
                                {/* Number */}
                                <div className="mb-5 flex h-7 w-7 items-center justify-center rounded-full bg-[#F26B45] text-xs md:text-sm font-bold text-white">
                                    {step.number}
                                </div>

                                {/* Title */}
                                <h3 className="text-[16px] font-semibold text-[#143A36] dark:text-white">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-3 text-[13px] leading-6 text-slate-500 dark:text-slate-400">
                                    {step.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 flex justify-center">
                        <button
                            className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-[#F26B45]
          px-8
          py-3.5
          text-sm
          font-semibold
          text-white
          shadow-[0_10px_25px_rgba(242,107,69,0.25)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-[#EA5F36]
        "
                        >
                            Check Number Availability
                            <FiArrowRight size={16} />
                        </button>
                    </div>

                </div>
            </section>
            {/* Built For Business Section */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-12 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl">

                    {/* Heading */}
                    <div className="mx-auto max-w-3xl text-center">
                        <p className="mb-3 text-[10px] md:text-xs font-semibold uppercase tracking-[4px] text-[#F26B45]">
                            Built For Your Business
                        </p>

                        <h2 className="text-[30px] font-bold leading-tight text-[#143A36] dark:text-white md:text-[40px]">
                            Built for the way modern businesses grow.
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {[
                            {
                                title: "For Business",
                                desc: "Build a professional phone presence for customers, sales, and support.",
                                icon: FiBriefcase,
                            },
                            {
                                title: "Remote Teams",
                                desc: "Give distributed teams one professional communication layer.",
                                icon: FiUsers,
                            },
                            {
                                title: "Customer Support",
                                desc: "Create a trusted support number and reduce missed enquiries.",
                                icon: FiMessageSquare,
                            },
                            {
                                title: "Founder-Led",
                                desc: "Separate personal and business calls from day one.",
                                icon: PiPaintBrushLight,
                            },
                            {
                                title: "International Expansion",
                                desc: "Build local presence before opening offices.",
                                icon: FiMap,
                            },
                            {
                                title: "Diaspora Founders",
                                desc: "Stay locally reachable across borders and customer communities.",
                                icon: FiHeart,
                            },
                        ].map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="
              rounded-[16px]
              border
              border-[#E5DDD3]
              bg-white
              p-5
              transition-all
              duration-300
              hover:-translate-y-1
              hover:border-[#F26B45]
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
                h-10
                w-10
                items-center
                justify-center
                rounded-lg
                bg-[#EEF4F2]
                dark:bg-slate-800
              "
                                    >
                                        <Icon
                                            size={17}
                                            className="text-[#0D5C54]"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-[17px] font-semibold text-[#143A36] dark:text-white">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="mt-3 text-[13px] leading-6 text-slate-500 dark:text-slate-400">
                                        {item.desc}
                                    </p>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </section>
            {/* Platform vs Basic Number */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-12 dark:bg-slate-950">
                <div className="mx-auto max-w-5xl">

                    {/* Heading */}
                    <div className="text-center">
                        <p className="mb-3 text-[10px] font-semibold uppercase tracking-[4px] text-[#F26B45]">
                            Platform vs Basic Number
                        </p>

                        <h2 className="text-[30px] font-bold leading-tight text-[#143A36] dark:text-white md:text-[40px]">
                            Zoiko Local is more than a number.
                        </h2>
                    </div>

                    {/* Desktop Table */}
                    <div
                        className="
        mt-12
        hidden
        overflow-hidden
        rounded-[18px]
        border
        border-[#E5DDD3]
        bg-white
        shadow-sm
        dark:border-slate-700
        dark:bg-slate-900
        md:block
      "
                    >
                        {/* Header */}
                        <div className="grid grid-cols-2 bg-[#0D5C54] text-white">
                            <div className="border-r border-white/10 px-6 py-4 text-sm font-semibold">
                                Basic number service
                            </div>

                            <div className="px-6 py-4 text-sm font-semibold">
                                Zoiko Local platform
                            </div>
                        </div>

                        {[
                            [
                                "A number only",
                                "Numbers connected to calling, video, routing & AI Receptionist",
                            ],
                            [
                                "Limited business context",
                                "Built for real business use cases",
                            ],
                            [
                                "Often tied to one user",
                                "Supports teams, departments & market growth",
                            ],
                            [
                                "Missed calls may be lost",
                                "AI Receptionist captures and routes enquiries",
                            ],
                            [
                                "Single domestic market",
                                "Local presence across multiple markets at once",
                            ],
                            [
                                "Generic utility",
                                "AI-powered platform for local presence & customer communication",
                            ],
                        ].map(([left, right], index) => (
                            <div
                                key={left}
                                className={`grid grid-cols-2 ${index !== 5
                                    ? "border-b border-[#ECE5DC] dark:border-slate-700"
                                    : ""
                                    }`}
                            >
                                {/* Left */}
                                <div
                                    className="
              border-r
              border-[#ECE5DC]
              bg-[#FAF8F5]
              px-6
              py-5
              text-[14px]
              text-slate-500
              dark:border-slate-700
              dark:bg-slate-800
              dark:text-slate-400
            "
                                >
                                    {left}
                                </div>

                                {/* Right */}
                                <div
                                    className="
              px-6
              py-5
              text-[14px]
              font-medium
              text-[#143A36]
              dark:text-white
            "
                                >
                                    {right}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Cards */}
                    <div className="mt-10 space-y-5 md:hidden">
                        {[
                            [
                                "A number only",
                                "Numbers connected to calling, video, routing & AI Receptionist",
                            ],
                            [
                                "Limited business context",
                                "Built for real business use cases",
                            ],
                            [
                                "Often tied to one user",
                                "Supports teams, departments & market growth",
                            ],
                            [
                                "Missed calls may be lost",
                                "AI Receptionist captures and routes enquiries",
                            ],
                            [
                                "Single domestic market",
                                "Local presence across multiple markets",
                            ],
                            [
                                "Generic utility",
                                "AI-powered communication platform",
                            ],
                        ].map(([basic, zoiko]) => (
                            <div
                                key={basic}
                                className="rounded-2xl border border-[#E5DDD3] bg-white p-5 dark:border-slate-700 dark:bg-slate-900"
                            >
                                <div>
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
                                        Basic Number
                                    </p>

                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        {basic}
                                    </p>
                                </div>

                                <div className="my-5 border-t border-[#ECE5DC] dark:border-slate-700" />

                                <div>
                                    <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#0D5C54]">
                                        Zoiko Local
                                    </p>

                                    <p className="text-sm font-medium text-[#143A36] dark:text-white">
                                        {zoiko}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="mt-12 flex justify-center">
                        <button
                            className="
          inline-flex
          items-center
          gap-2
          rounded-full
          bg-[#F26B45]
          px-8
          py-3.5
          text-sm
          font-semibold
          text-white
          shadow-[0_10px_25px_rgba(242,107,69,0.25)]
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-[#EA5F36]
        "
                        >
                            Get a Local Number
                            <FiArrowRight size={15} />
                        </button>
                    </div>

                </div>
            </section>
            {/* Global Coverage CTA */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-12 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl">

                    <div
                        className="
        relative
        overflow-hidden
        rounded-[28px]
        bg-[#0D5C54]
        px-6
        py-14
        text-center
        shadow-[0_25px_70px_rgba(0,0,0,0.12)]

        md:px-12
        md:py-20
      "
                    >
                        {/* Background Glow */}
                        <div
                            className="
          absolute
          right-0
          top-0
          h-72
          w-72
          rounded-full
          bg-[radial-gradient(circle,rgba(255,255,255,0.12)_0%,transparent_70%)]
        "
                        />

                        <div className="relative z-10">

                            {/* Heading */}
                            <h2 className="mx-auto max-w-3xl text-[30px] font-bold leading-tight text-white md:text-[40px]">
                                Be local{" "}
                                <span className="text-[#F6A27E]">
                                    where your customers are.
                                </span>
                            </h2>

                            {/* Description */}
                            <p className="mx-auto mt-6 max-w-2xl text-[15px] md:text-[16px] leading-7 text-white/70">
                                Live now across six markets, with regional coverage expanding
                                under our global connectivity agreement.
                            </p>

                            {/* Countries */}
                            <div className="mt-8 flex flex-wrap justify-center gap-3">
                                {[
                                    {
                                        name: "United States",
                                        flag: "/images/platform/US.png",
                                    },
                                    {
                                        name: "United Kingdom",
                                        flag: "/images/platform/UK.png",
                                    },
                                    {
                                        name: "Jamaica",
                                        flag: "/images/platform/JM.png",
                                    },
                                    {
                                        name: "Canada",
                                        flag: "/images/platform/CA.png",
                                    },
                                    {
                                        name: "Nigeria",
                                        flag: "/images/platform/NG.png",
                                    },
                                    {
                                        name: "South Africa",
                                        flag: "/images/platform/SA.png",
                                    },
                                ].map((country) => (
                                    <div
                                        key={country.name}
                                        className="
                flex
                items-center
                gap-2
                rounded-full
                bg-white/10
                px-4
                py-2
                backdrop-blur-md
              "
                                    >
                                        <Image
                                            src={country.flag}
                                            alt={country.name}
                                            width={20}
                                            height={20}
                                            className="rounded-full"
                                        />

                                        <span className="text-xs md:text-sm text-white">
                                            {country.name}
                                        </span>

                                        <span
                                            className="
                  rounded-full
                  bg-white/10
                  px-2
                  py-0.5
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-wide
                  text-[#8FE2BE]
                "
                                        >
                                            LIVE
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Buttons */}
                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                                <button
                                    className="
              rounded-xl
              border
              border-white/20
              bg-white/5
              px-8
              py-3.5
              text-sm
              font-semibold
              text-white
              backdrop-blur-md
              transition-all
              hover:bg-white/10
            "
                                >
                                    Explore Global Coverage
                                </button>

                                <button
                                    className="
              rounded-xl
              border
              border-white/20
              bg-transparent
              px-8
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              hover:bg-white/10
            "
                                >
                                    Request a Market
                                </button>

                            </div>

                        </div>
                    </div>

                </div>
            </section>
            {/* Long-Term Growth Section */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-12 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl">

                    <div className="grid items-center gap-14 lg:grid-cols-2">

                        {/* Left */}
                        <div>
                            <p className="mb-4 text-[10px] md:text-xs font-semibold uppercase tracking-[4px] text-[#F26B45]">
                                Start Simple. Stay Because It Grows With You.
                            </p>

                            <h2 className="max-w-xl text-[30px] font-bold leading-tight text-[#143A36] dark:text-white md:text-[40px]">
                                A long-term communication layer, not a one-time number purchase.
                            </h2>

                            <p className="mt-8 max-w-xl text-[15px] leading-8 text-slate-500 dark:text-slate-400">
                                A business may start with one local number. As needs grow,
                                Zoiko Local adds users, markets, support paths, AI Receptionist
                                coverage, video, reporting and multi-market setup — so the
                                platform scales into a lasting part of how you operate.
                            </p>

                            <button
                                className="
            mt-10
            rounded-lg
            bg-[#F26B45]
            px-8
            py-4
            text-sm
            font-semibold
            text-white
            shadow-[0_10px_25px_rgba(242,107,69,0.25)]
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-[#EB5D34]
          "
                            >
                                Start with a Local Number →
                            </button>
                        </div>

                        {/* Right Card */}
                        <div className="mx-auto w-full max-w-[520px]">

                            <div
                                className="
            overflow-hidden
            rounded-[18px]
            bg-white
            shadow-[0_20px_50px_rgba(0,0,0,0.08)]
            dark:bg-slate-900
          "
                            >

                                {/* Header */}
                                <div className="bg-[#0D5C54] px-6 py-4">
                                    <h3 className="text-sm font-medium text-white">
                                        Grows with your business
                                    </h3>
                                </div>

                                {/* Body */}
                                <div className="p-6">

                                    <div className="space-y-4">

                                        {[
                                            "Add numbers by market",
                                            "Add users and teams",
                                            "Add call routing",
                                            "Add AI Receptionist coverage",
                                            "Add video for high-trust conversations",
                                            "Add multi-market setup as you expand",
                                        ].map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-start gap-3"
                                            >
                                                <div className="mt-0.5">
                                                    <FiCheck
                                                        size={16}
                                                        className="text-[#0D7A4D]"
                                                    />
                                                </div>

                                                <span className="text-[14px] text-[#4A4A4A] dark:text-slate-300">
                                                    {item}
                                                </span>
                                            </div>
                                        ))}

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* FAQ */}
            <Faq
                heading="Questions"
                subHeading="The Zoiko Local platform, answered."
                items={faqItems}
            />
            {/* Final CTA */}
            <section className="bg-[#F7F3ED] px-4 py-8 md:py-14 dark:bg-slate-950">
                <div className="mx-auto max-w-6xl">
                    <div
                        className="
        relative
        overflow-hidden
        rounded-[24px]
        bg-[#0D5C54]
        px-6
        py-16
        text-center
        shadow-[0_20px_60px_rgba(0,0,0,0.12)]

        md:px-12
        md:py-12
      "
                    >
                        {/* Background Glow */}
                        <div
                            className="
          absolute
          right-0
          top-0
          h-72
          w-72
          rounded-full
          bg-[radial-gradient(circle,rgba(255,255,255,0.08),transparent_70%)]
        "
                        />

                        <div className="relative z-10">
                            {/* Heading */}
                            <h2 className="text-[30px] font-bold text-white md:text-[40px]">
                                Ready to sound local where it matters?
                            </h2>

                            {/* Description */}
                            <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-white/70">
                                Start with a local number your customers recognize, then scale
                                into calling, video, routing, and an AI Receptionist as your
                                business grows.
                            </p>

                            {/* Buttons */}
                            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

                                {/* Primary */}
                                <button
                                    className="
              inline-flex
              items-center
              gap-2
              rounded-lg
              bg-[#F26B45]
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-[#EB5D34]
              hover:-translate-y-0.5
            "
                                >
                                    Get a Local Number
                                    <FiArrowRight size={15} />
                                </button>

                                {/* Secondary */}
                                <button
                                    className="
              rounded-lg
              border
              border-white/20
              bg-transparent
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-white/10
            "
                                >
                                    Check Number Availability
                                </button>

                                {/* Third */}
                                <button
                                    className="
              rounded-lg
              border
              border-white/20
              bg-transparent
              px-6
              py-3.5
              text-sm
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-white/10
            "
                                >
                                    See Pricing
                                </button>

                            </div>

                            {/* Bottom Text */}
                            <p className="mt-8 text-[12px] text-white/60">
                                Replacing a retired Skype Number?
                                <span className="ml-1 font-semibold text-[#F6A27E]">
                                    Switch from Skype →
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
