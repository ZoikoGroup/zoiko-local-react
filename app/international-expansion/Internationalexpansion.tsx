"use client";
import { useState } from "react";
import {
    FiArrowRight, FiCheck, FiGlobe,
    FiMapPin, FiPhoneCall, FiShield,
    FiPhoneIncoming, FiPlus, FiX,
    FiTrendingUp, FiBriefcase,
    FiShoppingCart, FiSun, FiZap,
    FiPhone, FiShuffle, FiVideo, FiMic,
} from "react-icons/fi";
import Image from "next/image";

const routingItems = [
    {
        label: "Expansion team",
        status: "Central",
        color: "orange",
    },
    {
        label: "Regional sales",
        status: "Routed",
        color: "green",
    },
    {
        label: "AI Receptionist",
        status: "Qualify",
        color: "green",
    },
    {
        label: "Market presence activated before office launch",
        status: "",
        color: "success",
    },
];
const marketEntryChallenges = [
    {
        icon: <FiGlobe />,
        title: "Foreign numbers reduce confidence",
        description:
            "An unfamiliar number can stop a promising lead before the first conversation.",
    },
    {
        icon: <FiMapPin />,
        title: "No local office feels distant",
        description:
            "Without local signals, a capable business can seem far away or temporary.",
    },
    {
        icon: <FiPhoneIncoming />,
        title: "Early leads are easy to miss",
        description:
            "Before a local team exists, inbound interest slips through the cracks.",
    },
    {
        icon: <FiTrendingUp />,
        title: "Teams need to test demand",
        description:
            "Expansion teams need a flexible, low-commitment way to validate a market.",
    },
];
const expansionSolutions = [
    {
        icon: <FiMapPin />,
        title: "Local numbers in target markets",
        description:
            "Give customers a familiar number in the country, city or region you want to serve.",
        color: "orange",
    },
    {
        icon: <FiPhone />,
        title: "Business calling from anywhere",
        description:
            "Central teams can call and receive with a professional local identity.",
        color: "orange",
    },
    {
        icon: <FiShuffle />,
        title: "Market-specific routing",
        description:
            "Route by region, department, language path, hours or expansion team.",
        color: "orange",
    },
    {
        icon: <FiVideo />,
        title: "Video for high-trust conversations",
        description:
            "Move important sales, partner and onboarding conversations into video.",
        color: "green",
    },
    {
        icon: <FiMic />,
        title: "AI Receptionist coverage",
        description:
            "Capture and route inquiries before a local team is fully staffed.",
        color: "yellow",
    },
    {
        icon: <FiGlobe />,
        title: "Scalable global coverage",
        description:
            "Add numbers, users and markets as expansion grows.",
        color: "orange",
    },
];
const expansionSteps = [
    {
        step: "1",
        title: "Select the target market",
        description:
            "Choose the country, city, region or area code.",
    },
    {
        step: "2",
        title: "Reserve a local number",
        description:
            "Pick a number customers recognize.",
    },
    {
        step: "3",
        title: "Connect your teams",
        description:
            "Connect sales, support, founders or central operations.",
    },
    {
        step: "4",
        title: "Set market routing",
        description:
            "Route by market, hours, team or language path.",
    },
    {
        step: "5",
        title: "Add AI Receptionist",
        description:
            "Capture inquiries when the team is unavailable.",
    },
    {
        step: "6",
        title: "Scale as demand grows",
        description:
            "Add numbers, users, call flows and markets.",
    },
];
const expansionUseCases = [
    {
        icon: <FiTrendingUp />,
        title: "Market testing",
        description:
            "Validate demand before opening an office or hiring locally.",
        color: "orange",
    },
    {
        icon: <FiBriefcase />,
        title: "International sales",
        description:
            "Give prospects a local number and route calls to the right team.",
        color: "orange",
    },
    {
        icon: <FiPhone />,
        title: "Cross-border support",
        description:
            "Provide customers with familiar support numbers in their markets.",
        color: "green",
    },
    {
        icon: <FiShoppingCart />,
        title: "E-commerce expansion",
        description:
            "Support shoppers in new countries with local contact points.",
        color: "orange",
    },
    {
        icon: <FiShield />,
        title: "Professional services",
        description:
            "Build credibility with clients, partners and referral networks.",
        color: "orange",
    },
    {
        icon: <FiSun />,
        title: "Pre-office campaigns",
        description:
            "Run ads and landing pages with a local number before launch.",
        color: "yellow",
    },
];
const connectedPlatform = [
    {
        icon: <FiMapPin />,
        title: "Local Numbers",
        description:
            "Create local presence in countries and regions you want to serve.",
        action: "Explore Local Numbers",
        color: "orange",
    },
    {
        icon: <FiPhone />,
        title: "Calling",
        description:
            "Make and receive international business calls through a professional layer.",
        action: "Explore Calling",
        color: "orange",
    },
    {
        icon: <FiVideo />,
        title: "Video",
        description:
            "Build trust with prospects, customers and partners through video.",
        action: "Explore Video",
        color: "green",
    },
    {
        icon: <FiMic />,
        title: "AI Receptionist",
        description:
            "Capture, qualify and route inquiries while the market team is forming.",
        action: "Explore AI Receptionist",
        color: "yellow",
    },
];
const comparisonRows = [
    {
        generic: "Contact forms delay conversations",
        zoiko: "Local numbers invite direct contact",
    },
    {
        generic: "Foreign numbers feel distant",
        zoiko: "Local numbers create market familiarity",
    },
    {
        generic: "Early inquiries can be missed",
        zoiko: "AI Receptionist can capture and route calls",
    },
    {
        generic: "One global number may not fit every market",
        zoiko: "Add numbers by country, city or region",
    },
    {
        generic: "Hard to assign calls by market",
        zoiko: "Route calls by market, team or business hours",
    },
    {
        generic: "Weak local trust signal",
        zoiko: "Professional local presence from day one",
    },
    {
        generic: "Difficult to scale across regions",
        zoiko: "Expand numbers and users as markets grow",
    },
];
const countries = [
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
    {
        name: "Caribbean",
        flag: "/images/platform/CR.png",
    },
    {
        name: "Europe",
        flag: "/images/platform/EU.png",
    },
    {
        name: "Africa",
        flag: "/images/platform/AF.png",
    },
    {
        name: "North America",
        flag: "/images/platform/NA.png",
    },
];
const internationalFaqs = [
    {
        question:
            "How can my business get a local number in another country?",
        answer:
            "Select a supported target market, reserve a local number, connect your team, and set routing. Availability and eligibility vary by country and number type.",
    },
    {
        question:
            "Can I test a new market before opening an office?",
        answer:
            "Yes. Local numbers allow you to validate demand, run campaigns and speak with prospects before establishing a physical office.",
    },
    {
        question:
            "Do I need a physical office to get a local business number?",
        answer:
            "Not always. Requirements depend on local regulations, documentation rules and number availability in each market.",
    },
    {
        question:
            "Can calls from one country be routed to a team in another country?",
        answer:
            "Yes. Calls can be routed to founders, sales teams, support teams or departments regardless of location.",
    },
    {
        question:
            "Can Zoiko Local support multiple countries?",
        answer:
            "Yes. You can add and manage local numbers across multiple countries and regions from one platform.",
    },
    {
        question:
            "Can AI Receptionist answer inquiries from new markets?",
        answer:
            "Yes. AI Receptionist can answer, qualify and route inquiries even when no local team is available.",
    },
    {
        question:
            "Does number availability vary by country?",
        answer:
            "Yes. Availability depends on regulations, carrier support, verification requirements and inventory in each market.",
    },
    {
        question:
            "Is Zoiko Local a replacement for Skype Number?",
        answer:
            "Yes. Zoiko Local provides local numbers, business calling, routing, video and AI Receptionist capabilities beyond Skype Number.",
    },
];

export default function Internationalexpansion() {
    const [openFaq, setOpenFaq] = useState(0);
    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? -1 : index);
    };
    return (
        <>
            {/* Hero section */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 lg:py-14 overflow-hidden">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT */}
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-800 border border-[#EFE5D8] dark:border-slate-700">
                                <span className="w-2 h-2 rounded-full bg-[#EB643F]" />
                                <span className="uppercase tracking-[0.28em] text-[10px] font-semibold text-[#EB643F]">
                                    International Expansion
                                </span>
                            </div>

                            <h1 className="mt-8 text-3xl md:text-4xl lg:text-[48px] font-bold leading-[1.08] text-[#123533] dark:text-white">
                                Local numbers for
                                <br />
                                businesses
                                <br />
                                entering
                                <span className="text-[#EB643F] italic">
                                    {" "}new markets.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-[17px] leading-8 text-[#666666] dark:text-gray-400">
                                Create trusted local presence before you open an office,
                                hire a local team, or build regional infrastructure.
                                Zoiko Local helps expanding businesses get local numbers,
                                manage calls, route inquiries, meet customers,
                                and support new-market conversations from anywhere.
                            </p>

                            {/* CTA */}
                            <div className="mt-10 flex flex-wrap gap-4">
                                <button className="h-12 px-8 rounded-xl bg-[#EB643F] text-white font-semibold shadow-lg hover:bg-[#D95A37] transition">
                                    Start Expanding with a Local Number
                                </button>

                                <button className="h-12 px-8 rounded-xl border border-[#0F6660] bg-white dark:bg-slate-800 dark:border-slate-700 text-[#123533] dark:text-white font-semibold hover:bg-[#0F6660] hover:text-white transition">
                                    Explore Global Coverage
                                </button>

                                <button className="text-[#EB643F] font-semibold flex items-center gap-2">
                                    See Pricing
                                    <FiArrowRight />
                                </button>
                            </div>

                            {/* Helper Card */}
                            <div className="mt-8 rounded-full bg-white dark:bg-slate-800 border border-[#E8DDD1] dark:border-slate-700 px-6 py-4 flex flex-col md:flex-row justify-between gap-3">
                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                    Replacing Skype Number for international market presence?
                                </span>

                                <button className="text-[#EB643F] font-semibold">
                                    Switch from Skype →
                                </button>
                            </div>

                            {/* Benefits */}
                            <div className="mt-10 space-y-4">
                                {[
                                    "Local numbers for new-market credibility",
                                    "Calling, video, and routing for international teams",
                                    "AI Receptionist support for missed inquiries",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >
                                        <FiCheck className="text-[#0F6660]" />
                                        <span className="text-gray-600 dark:text-gray-400">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="relative flex justify-center">
                            {/* Floating Badge */}
                            <div className="absolute -top-5 left-2 md:left-8 z-20 bg-white dark:bg-slate-800 rounded-xl shadow-lg px-4 py-3 flex items-center gap-3 border border-[#EFE5D8] dark:border-slate-700">
                                <FiMapPin className="text-[#EB643F]" />
                                <span className="text-sm font-semibold text-[#123533] dark:text-white">
                                    HQ + target markets
                                </span>
                            </div>

                            <div className="w-full max-w-xl rounded-[26px] bg-white dark:bg-slate-800 border border-[#E7DDD2] dark:border-slate-700 shadow-2xl overflow-hidden">
                                {/* Number */}
                                <div className="bg-[#162354] p-6">
                                    <p className="uppercase text-[11px] tracking-widest text-blue-200">
                                        New-Market Number
                                    </p>

                                    <div className="mt-3 flex justify-between items-center">
                                        <h2 className="text-white text-3xl font-bold">
                                            +44 20 7946 0—
                                        </h2>

                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                                            🇬🇧
                                        </div>
                                    </div>
                                </div>

                                {/* Incoming */}
                                <div className="px-7 py-6 border-b border-[#ECE6DA] dark:border-slate-700">
                                    <div className="flex gap-4">
                                        <div className="w-11 h-11 rounded-xl bg-[#FCE8E2] flex items-center justify-center text-[#EB643F]">
                                            <FiPhoneCall />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-[#123533] dark:text-white">
                                                Incoming · New market
                                            </h4>

                                            <p className="text-gray-500 text-sm">
                                                First inbound lead
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Routing */}
                                <div className="p-7">
                                    <p className="uppercase text-[10px] tracking-widest text-gray-400 mb-5">
                                        Routing
                                    </p>

                                    <div className="space-y-4">
                                        {routingItems.map((item) => (
                                            <div
                                                key={item.label}
                                                className="flex items-center justify-between rounded-xl border border-[#ECE6DA] dark:border-slate-700 px-4 py-3"
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span
                                                        className={`w-2 h-2 rounded-full ${item.color === "orange"
                                                            ? "bg-[#EB643F]"
                                                            : "bg-[#15B67A]"
                                                            }`}
                                                    />

                                                    <span className="text-[#123533] dark:text-white text-sm font-medium">
                                                        {item.label}
                                                    </span>
                                                </div>

                                                {item.status && (
                                                    <span
                                                        className={`text-xs font-semibold px-3 py-1 rounded-full ${item.color === "orange"
                                                            ? "bg-[#FCE8E2] text-[#EB643F]"
                                                            : "bg-[#EAF7F2] text-[#0F6660]"
                                                            }`}
                                                    >
                                                        {item.status}
                                                    </span>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Floating Success */}
                            <div className="absolute -bottom-5 right-0 bg-white dark:bg-slate-800 rounded-xl shadow-xl px-5 py-3 flex items-center gap-3 border border-[#E7DDD2] dark:border-slate-700">
                                <div className="w-9 h-9 rounded-full bg-[#EAF7F2] flex items-center justify-center text-[#0F6660]">
                                    <FiShield />
                                </div>

                                <span className="font-semibold text-[#123533] dark:text-white">
                                    Lead captured
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Market-Entry Gap */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 lg:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            Market-Entry Gap
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[50px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                            Entering a new market is harder
                            <br />
                            when customers cannot reach you
                            <br />
                            locally.
                        </h2>

                        <p className="mt-7 max-w-3xl mx-auto text-[16px] leading-8 text-[#666666] dark:text-gray-400">
                            Before a local team exists, early demand is fragile.
                            These are the friction points to remove first.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
                        {marketEntryChallenges.map((item) => (
                            <div
                                key={item.title}
                                className="group
                    rounded-[24px]
                    bg-white
                    dark:bg-slate-800
                    border border-[#E8DED2]
                    dark:border-slate-700
                    p-8
                    min-h-[250px]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:border-[#EB643F]/20"
                            >

                                {/* Icon */}
                                <div
                                    className="w-12 h-12
                        rounded-xl
                        bg-[#FCE8E2]
                        dark:bg-slate-700
                        flex items-center justify-center
                        text-[#EB643F]
                        text-xl"
                                >
                                    {item.icon}
                                </div>
                                {/* Title */}
                                <h3 className="mt-6 text-xl font-semibold leading-8 text-[#123533] dark:text-white">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-5 text-[15px] leading-7 text-[#666666] dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* The Solution */}
            <section className="bg-white dark:bg-slate-900 py-10 lg:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3EC] dark:bg-slate-800 px-5 py-2">
                            <span className="w-2 h-2 rounded-full bg-[#EB643F]" />
                            <span className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                                The Solution
                            </span>
                        </div>

                        <h2 className="mt-5 text-4xl md:text-[48px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                            Build local presence before physical
                            <br />
                            presence.
                        </h2>

                        <p className="mt-6 max-w-3xl mx-auto text-[17px] leading-8 text-[#666666] dark:text-gray-400">
                            Zoiko Local becomes the first communication layer
                            for market entry — local trust while operations mature.
                        </p>
                    </div>
                    {/* Grid */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {expansionSolutions.map((item) => (
                            <div
                                key={item.title}
                                className="group rounded-[24px]
                    border border-[#E7DED2]
                    dark:border-slate-700
                    bg-white dark:bg-slate-800
                    p-8
                    min-h-[230px]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl"
                            >

                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl
                        ${item.color === "orange"
                                            ? "bg-[#FCE8E2] text-[#EB643F]"
                                            : item.color === "green"
                                                ? "bg-[#E8F7F2] text-[#0F6660]"
                                                : "bg-[#FFF5DD] text-[#D99A1C]"
                                        }`}
                                >
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="mt-6 text-xl font-semibold leading-8 text-[#123533] dark:text-white">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 text-[15px] leading-7 text-[#666666] dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                    {/* CTA */}
                    <div className="mt-14 flex justify-center">
                        <button
                            className="h-12 px-10 rounded-full
                bg-[#EB643F]
                text-white
                font-semibold
                shadow-lg
                hover:bg-[#D95A37]
                transition-all duration-300"
                        >
                            Start Expanding with a Local Number
                        </button>
                    </div>
                </div>
            </section>
            {/* How It Works */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 lg:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            How It Works
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[50px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                            Choose a market. Activate a local
                            <br />
                            number. Start building demand.
                        </h2>
                    </div>

                    {/* Steps */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {expansionSteps.map((item) => (
                            <div
                                key={item.step}
                                className="group
                    rounded-[22px]
                    bg-white
                    dark:bg-slate-800
                    border border-[#E7DED2]
                    dark:border-slate-700
                    p-7
                    min-h-[185px]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl"
                            >

                                {/* Number */}
                                <div
                                    className="w-10 h-10
                        rounded-xl
                        bg-[#18234A]
                        flex items-center justify-center
                        text-white
                        font-bold
                        text-sm"
                                >
                                    {item.step}
                                </div>

                                {/* Title */}
                                <h3 className="mt-6 text-lg font-semibold leading-7 text-[#123533] dark:text-white">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 text-[15px] leading-7 text-[#666666] dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Use Cases */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 lg:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3EC] dark:bg-slate-800 px-5 py-2">
                            <span className="w-2 h-2 rounded-full bg-[#EB643F]" />
                            <span className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                                Use Cases
                            </span>
                        </div>

                        <h2 className="mt-8 text-4xl md:text-[52px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                            Built for businesses entering new
                            <br />
                            markets with discipline and speed.
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {expansionUseCases.map((item) => (
                            <div
                                key={item.title}
                                className="group
                    rounded-[24px]
                    border border-[#E7DED2]
                    dark:border-slate-700
                    bg-white
                    dark:bg-slate-800
                    p-8
                    min-h-[220px]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl
                        ${item.color === "orange"
                                            ? "bg-[#FCE8E2] text-[#EB643F]"
                                            : item.color === "green"
                                                ? "bg-[#E8F7F2] text-[#0F6660]"
                                                : "bg-[#FFF5DD] text-[#D99A1C]"
                                        }`}
                                >
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="mt-6 text-xl font-semibold leading-7 text-[#123533] dark:text-white">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 text-[15px] leading-7 text-[#666666] dark:text-gray-400">
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Connected Platform */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 lg:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3EC] dark:bg-slate-800 px-5 py-2">
                            <span className="w-2 h-2 rounded-full bg-[#EB643F]" />
                            <span className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                                Connected Platform
                            </span>
                        </div>

                        <h2 className="mt-8 text-4xl md:text-[52px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                            Everything your business needs to
                            <br />
                            enter new markets with a local
                            <br />
                            voice.
                        </h2>
                    </div>
                    {/* Cards */}
                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7">
                        {connectedPlatform.map((item) => (
                            <div
                                key={item.title}
                                className="group
                    rounded-[24px]
                    bg-white
                    dark:bg-slate-800
                    border border-[#E7DED2]
                    dark:border-slate-700
                    p-8
                    min-h-[300px]
                    flex flex-col
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl"
                            >
                                {/* Icon */}
                                <div
                                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl
                        ${item.color === "orange"
                                            ? "bg-[#FCE8E2] text-[#EB643F]"
                                            : item.color === "green"
                                                ? "bg-[#E8F7F2] text-[#0F6660]"
                                                : "bg-[#FFF5DD] text-[#D99A1C]"
                                        }`}
                                >
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="mt-6 text-xl font-semibold text-[#123533] dark:text-white">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 text-[15px] leading-7 text-[#666666] dark:text-gray-400 flex-grow">
                                    {item.description}
                                </p>

                                {/* CTA */}
                                <button
                                    className="mt-8 inline-flex items-center gap-2
                        text-[#EB643F]
                        font-semibold
                        transition-all
                        hover:gap-3"
                                >
                                    {item.action}
                                    <FiArrowRight size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Comparison Table */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 lg:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3EC] dark:bg-slate-800 px-5 py-2">
                            <span className="w-2 h-2 rounded-full bg-[#EB643F]" />
                            <span className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                                Why Upgrade
                            </span>
                        </div>

                        <h2 className="mt-8 text-4xl md:text-[52px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                            A contact form alone is not a
                            <br />
                            market-entry strategy.
                        </h2>
                    </div>

                    {/* Comparison Table */}
                    <div className="mt-16 overflow-hidden rounded-[26px] border border-[#E7DED2] dark:border-slate-700 shadow-lg bg-white dark:bg-slate-800">
                        <div className="overflow-x-auto">
                            <table className="min-w-[760px] w-full">
                                <thead>
                                    <tr>
                                        <th className="bg-[#F4F2EE] dark:bg-slate-700 text-left px-8 py-6 text-[#123533] dark:text-white font-semibold">
                                            Generic Contact Methods
                                        </th>
                                        <th className="bg-[#EB643F] text-white px-8 py-6 text-left font-semibold">
                                            <div className="flex items-center gap-2">
                                                <FiZap />
                                                Zoiko Local
                                            </div>
                                        </th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {comparisonRows.map((row, index) => (
                                        <tr
                                            key={index}
                                            className="border-t border-[#ECE6DA] dark:border-slate-700"
                                        >
                                            <td className="px-8 py-5 text-gray-500 dark:text-gray-400">
                                                {row.generic}
                                            </td>

                                            <td className="px-8 py-5 font-medium text-[#123533] dark:text-white">
                                                {row.zoiko}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* CTA */}
                        <div className="py-10 flex justify-center border-t border-[#ECE6DA] dark:border-slate-700">
                            <button
                                className="px-10 h-12 rounded-full
                    bg-[#EB643F]
                    text-white
                    font-semibold
                    shadow-lg
                    hover:bg-[#D95A37]
                    transition-all duration-300"
                            >
                                Create Local Presence Before You Open an Office
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* Coverage & Scaling */}
            <section className="py-10 lg:py-14 bg-[#0F5A52] dark:bg-[#083C37] overflow-hidden">
                <div className="max-w-6xl mx-auto px-5 text-center">
                    {/* Label */}
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-5 py-2">
                        <span className="w-2 h-2 rounded-full bg-[#EB643F]" />
                        <span className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            Coverage & Scaling
                        </span>
                    </div>

                    {/* Heading */}
                    <h2 className="mt-8 text-4xl md:text-[52px] font-bold leading-[1.15] text-white">
                        Start in one market.
                        <br />
                        Expand into the next.
                    </h2>

                    {/* Description */}
                    <p className="mt-7 max-w-3xl mx-auto text-[17px] leading-8 text-white/70">
                        Start with one target market, then add numbers,
                        users, teams, routing rules, AI Receptionist coverage,
                        video and new regions as traction grows.
                    </p>

                    {/* Countries */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        {countries.map((country) => (
                            <div
                                key={country.name}
                                className="flex items-center gap-3
                    rounded-full
                    bg-white/8
                    border border-white/10
                    px-5
                    py-3
                    transition-all
                    duration-300
                    hover:bg-white/15
                    hover:border-white/20"
                            >
                                <Image
                                    src={country.flag}
                                    alt={country.name}
                                    width={18}
                                    height={18}
                                    className="rounded-full object-cover"
                                />

                                <span className="text-white text-sm md:text-base font-medium">
                                    {country.name}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">
                        <button
                            className="h-12 px-8 rounded-full
                bg-white
                text-[#123533]
                font-semibold
                hover:bg-gray-100
                transition"
                        >
                            Explore Global Coverage
                        </button>

                        <button
                            className="h-12 px-8 rounded-full
                border border-white/20
                text-white
                font-semibold
                bg-white/5
                hover:bg-white/10
                transition"
                        >
                            Request a Market
                        </button>

                        <button
                            className="h-12 px-8 rounded-full
                border border-white/20
                text-white
                font-semibold
                bg-white/5
                hover:bg-white/10
                transition"
                        >
                            See Pricing
                        </button>
                    </div>
                </div>
            </section>
            {/* FAQ */}
            <section className="bg-white dark:bg-slate-900 py-10 lg:py-14">
                <div className="max-w-5xl mx-auto px-5">
                    {/* Heading */}
                    <div className="text-center">
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF3EC] dark:bg-slate-800 px-5 py-2">
                            <span className="w-2 h-2 rounded-full bg-[#EB643F]" />
                            <span className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                                FAQ
                            </span>
                        </div>

                        <h2 className="mt-8 text-4xl md:text-[50px] font-bold leading-tight text-[#123533] dark:text-white">
                            International expansion phone
                            <br />
                            numbers, answered.
                        </h2>
                    </div>

                    {/* Accordion */}
                    <div className="mt-16 space-y-4">
                        {internationalFaqs.map((faq, index) => {
                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={faq.question}
                                    className={`rounded-2xl overflow-hidden transition-all duration-300
              border
              ${isOpen
                                            ? "border-[#D8E4F4] shadow-lg"
                                            : "border-[#ECE5DA] dark:border-slate-700"
                                        }
              bg-white dark:bg-slate-800`}
                                >

                                    {/* Header */}
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full flex items-center justify-between px-6 md:px-8 py-6 text-left"
                                    >
                                        <h3 className="font-semibold text-[#123533] dark:text-white text-base md:text-lg pr-5">
                                            {faq.question}
                                        </h3>

                                        <div
                                            className={`flex items-center justify-center
                w-8 h-8
                rounded-full
                transition-all
                ${isOpen
                                                    ? "bg-[#EB643F] text-white"
                                                    : "bg-[#FFF3EC] text-[#EB643F]"
                                                }`}
                                        >
                                            {isOpen ? <FiX size={18} /> : <FiPlus size={18} />}
                                        </div>
                                    </button>

                                    {/* Content */}
                                    <div
                                        className={`grid transition-all duration-300 ease-in-out ${isOpen
                                            ? "grid-rows-[1fr]"
                                            : "grid-rows-[0fr]"
                                            }`}
                                    >
                                        <div className="overflow-hidden">
                                            <div className="px-6 md:px-8 pb-7 text-[15px] leading-8 text-gray-600 dark:text-gray-400">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Final CTA */}
            <section className="bg-[#0F5A52] dark:bg-[#083C37] py-10 lg:py-14 overflow-hidden">
                <div className="max-w-5xl mx-auto px-5 text-center">
                    {/* Heading */}
                    <h2 className="text-4xl md:text-[52px] font-bold leading-[1.15] text-white">
                        Enter new markets with a local
                        <br />
                        voice.
                    </h2>

                    {/* Description */}
                    <p className="mt-8 max-w-2xl mx-auto text-[17px] leading-8 text-white/70">
                        Create trusted local presence, capture early demand,
                        and support customer conversations before your physical
                        operations are fully in place.
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
                        {/* Primary */}
                        <button
                            className="h-12 px-8 rounded-full
                bg-white
                text-[#123533]
                text-sm
                font-semibold
                shadow-lg
                hover:bg-gray-100
                transition-all duration-300"
                        >
                            Start Expanding with a Local Number
                        </button>

                        {/* Secondary */}
                        <button
                            className="h-12 px-8 rounded-full
                border border-white/20
                bg-white/5
                text-white
                text-sm
                font-semibold
                hover:bg-white/10
                transition-all duration-300"
                        >
                            Explore Global Coverage
                        </button>

                        {/* Third */}
                        <button
                            className="h-12 px-8 rounded-full
                border border-white/20
                bg-white/5
                text-white
                text-sm
                font-semibold
                hover:bg-white/10
                transition-all duration-300"
                        >
                            See Pricing
                        </button>
                    </div>

                    {/* Bottom Pill */}
                    <div className="mt-10 flex justify-center">
                        <button
                            className="inline-flex items-center gap-3
                rounded-full
                border border-white/10
                bg-white/5
                px-6
                py-3
                text-sm
                transition-all
                duration-300
                hover:bg-white/10"
                        >
                            <span className="text-white/60">
                                Replacing Skype Number?
                            </span>

                            <span className="font-semibold text-white flex items-center gap-2">
                                Switch from Skype
                                <FiArrowRight size={15} />
                            </span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}
