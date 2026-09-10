import React from 'react';
import {
    FiCheck, FiRepeat, FiGlobe,
    FiBriefcase, FiBook,
    FiMessageSquare, FiShield, FiMapPin,
    FiMic, FiArrowRight,
} from "react-icons/fi";
import { FaBalanceScale } from "react-icons/fa";
import Faq from '../Components/Faq';

const resourceItems = [
    {
        title: "I'm replacing Skype Number",
        action: "Switch from Skype →",
    },
    {
        title: "I'm comparing alternatives",
        action: "Compare Options →",
    },
    {
        title: "I want to learn about virtual numbers",
        action: "Learn the Basics →",
    },
    {
        title: "I need account or product support",
        action: "Find Help →",
    },
    {
        title: "I want to port a number",
        action: "Check Porting Eligibility →",
    },
    {
        title: "I need emergency-calling information",
        action: "Read Emergency Information →",
    },
];
const decisionPaths = [
    {
        title: "I need a Skype Number replacement",
        badge: "Switch from Skype",
        action: "Switch from Skype →",
    },
    {
        title: "I'm comparing providers",
        badge: "Alternatives & Comparisons",
        action: "Compare Options →",
    },
    {
        title: "I want to understand virtual numbers",
        badge: "Virtual Phone Number",
        action: "Learn About Virtual Numbers →",
    },
    {
        title: "I need a local business number",
        badge: "Local Business Number",
        action: "Get a Local Business Number →",
    },
    {
        title: "I want to keep my existing number",
        badge: "Number Porting",
        action: "Check Porting Eligibility →",
    },
    {
        title: "I need help using Zoiko Local",
        badge: "Help Center",
        action: "Find Help →",
    },
    {
        title: "I need to contact support",
        badge: "Contact Support",
        action: "Contact Support →",
    },
    {
        title: "I need safety information",
        badge: "Emergency Calling",
        action: "Read Emergency Information →",
    },
];
const comparisonCards = [
    {
        title: "Switch from Skype",
        description:
            "Move from Skype Number to Zoiko Local — local numbers, calling, video, and an AI Receptionist.",
        action: "Switch from Skype →",
        icon: FiRepeat,
    },
    {
        title: "Google Voice Alternative",
        description:
            "Compare Zoiko Local with Google Voice for business local numbers, international reach, and communication.",
        action: "Compare Zoiko Local →",
        icon: FaBalanceScale,
    },
    {
        title: "OpenPhone Alternative",
        description:
            "Compare Zoiko Local for local presence, business calling, routing, and growth use cases.",
        action: "Compare Zoiko Local →",
        icon: FaBalanceScale,
    },
    {
        title: "Teams Phone Alternative",
        description:
            "Local numbers and business calling without enterprise-telephony complexity.",
        action: "Explore Zoiko Local →",
        icon: FaBalanceScale,
    },
];
const basicsCards = [
    {
        title: "Virtual Phone Number",
        description:
            "How virtual phone numbers work and how businesses use them for local presence.",
        action: "Get a Virtual Number →",
        icon: FiGlobe,
    },
    {
        title: "Local Business Number",
        description:
            "Why local numbers help customers recognize, trust, and reach your company.",
        action: "Get a Local Business Number →",
        icon: FiBriefcase,
    },
];
const supportCards = [
    {
        title: "Help Center",
        description:
            "Setup guidance, account support, billing, product help, and troubleshooting.",
        action: "Find Help →",
        icon: FiBook,
    },
    {
        title: "Contact Support",
        description:
            "Reach support for account, billing, number porting, or technical issues.",
        action: "Contact Support →",
        icon: FiMessageSquare,
    },
    {
        title: "Number Porting",
        description:
            "How transferring an existing number may work, subject to eligibility.",
        action: "Check Porting Eligibility →",
        icon: FiRepeat,
    },
    {
        title: "Emergency Calling",
        description:
            "Emergency-calling availability, limitations, and responsibilities for internet-based calling.",
        action: "Read Emergency Information →",
        icon: FiShield,
    },
];
const buyerTypes = [
    {
        buyer: "Skype Number user",
        resource: "Switch from Skype",
        action: "Start Migration →",
    },
    {
        buyer: "Comparison shopper",
        resource: "Google Voice / OpenPhone / Teams Phone",
        action: "Compare Options →",
    },
    {
        buyer: "Founder",
        resource: "Local Business Number",
        action: "Get a Local Business Number →",
    },
    {
        buyer: "Small business",
        resource: "Virtual / Local Business Number",
        action: "Get a Local Number →",
    },
    {
        buyer: "Existing customer",
        resource: "Help Center",
        action: "Find Help →",
    },
    {
        buyer: "Porting customer",
        resource: "Number Porting",
        action: "Check Porting Eligibility →",
    },
    {
        buyer: "Safety / compliance reviewer",
        resource: "Emergency Calling",
        action: "Read Emergency Information →",
    },
    {
        buyer: "Enterprise buyer",
        resource: "Contact Support / Sales",
        action: "Talk to Sales →",
    },
];
const trustCards = [
    {
        title: "Number availability",
        description:
            "Availability may vary by country, city, number type, carrier partner, eligibility, and applicable law.",
        icon: FiMapPin,
    },
    {
        title: "Number porting",
        description:
            "Porting depends on current carrier, number type, documentation, account status, and regulatory rules.",
        icon: FiRepeat,
    },
    {
        title: "Emergency calling",
        description:
            "Availability and limitations vary by country, number type, device, network connection, location, and configuration.",
        icon: FiShield,
    },
    {
        title: "AI Receptionist",
        description:
            "Provides automated call handling and does not replace regulated professional advice.",
        icon: FiMic,
    },
];
const resourceSteps = [
    {
        category: "Migration",
        action: "Get a local number",
    },
    {
        category: "Comparison",
        action: "See pricing & check availability",
    },
    {
        category: "Education",
        action: "Get a local number",
    },
    {
        category: "Porting",
        action: "Port or get a new number",
    },
    {
        category: "Support",
        action: "Resolve & keep using Zoiko Local",
    },
    {
        category: "Enterprise",
        action: "Assisted setup with sales",
    },
];
const faqItems = [
    {
        question: "What resources are available for Zoiko Local?",
        answer:
            "Zoiko Local provides help guides, setup walkthroughs, comparison pages, porting instructions, compliance information, emergency-calling notices, and account support resources — all accessible from the Resources hub.",
    },
    {
        question: "Can I switch from Skype Number to Zoiko Local?",
        answer:
            "Yes. Zoiko Local is a direct replacement for Skype Numbers. You can get a new local number in the same country, port your existing number where eligible, and continue receiving calls with AI Receptionist and routing built in.",
    },
    {
        question: "Is Zoiko Local a Google Voice alternative?",
        answer:
            "Yes. Zoiko Local offers local numbers, calling, and team routing like Google Voice, and adds AI Receptionist, video meetings, multi-country support, and business-grade compliance tools that Google Voice doesn't provide.",
    },
    {
        question: "Is Zoiko Local an OpenPhone alternative?",
        answer:
            "Yes. Zoiko Local competes directly with OpenPhone for small business and remote team use cases, and adds multi-country local numbers, AI Receptionist, and video meeting integration in a single workspace",
    },
    {
        question: "Is Zoiko Local a Teams Phone alternative?",
        answer:
            "For businesses that used Teams Phone for local numbers and basic calling, Zoiko Local is a simpler, more focused alternative — with local numbers, routing, AI Receptionist, and video, without the enterprise complexity.",
    },
    {
        question: "What is a virtual phone number?",
        answer:
            "A virtual phone number is a cloud-based number not tied to a physical phone line or location. It receives calls over the internet and routes them to any device or team member — anywhere in the world.",
    },
    {
        question: "Can I port my existing number?",
        answer:
            "Porting is supported in many countries, subject to carrier eligibility and documentation requirements. You can initiate a port after purchasing your Zoiko Local number.",
    },
    {
        question: "Where can I find emergency-calling information?",
        answer:
            "Emergency-calling availability and limitations are documented in the Trust & Compliance section. Zoiko Local does not guarantee emergency-service equivalence — please review this before activating numbers for primary use.",
    },
    {
        question: "How do I contact Zoiko Local support?",
        answer:
            "You can reach Zoiko Local support via the Help Center for self-service guides, or through the Contact Support page for billing, porting, account, and technical issues.",
    },
    {
        question: "Can Resources help me choose the right plan?",
        answer:
            "Yes. The Resources hub includes comparison guides, pricing pages, and use-case walkthroughs to help you find the right number type, plan, and configuration for your business needs.",
    },
];

export default function Resources() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">

                        {/* LEFT */}
                        <div>
                            <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                                Resources
                            </p>

                            <h1 className="mt-4 md:mt-5 text-2xl sm:text-3xl md:text-4xl lg:text-[48px] leading-tight md:leading-[1.08] font-bold text-[#123533] dark:text-white">
                                Resources to compare, switch, learn, and
                                <span className="text-[#EB643F] italic"> get support.</span>
                            </h1>

                            <p className="mt-5 md:mt-8 max-w-xl text-[15px] md:text-[17px] leading-7 md:leading-8 text-[#666666] dark:text-gray-400">
                                Guides, comparisons, migration resources, support pathways, and
                                trust information — built to help your business move from research
                                to local-number activation with confidence. Sound local. Reach
                                anywhere.
                            </p>

                            {/* Buttons */}
                            <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-3 md:gap-4">
                                <button
                                    className="h-11 md:h-12 px-6 md:px-8 rounded-full
              bg-[#EB643F] text-white font-semibold shadow-lg
              hover:bg-[#D95A37] transition-all duration-300
              text-sm md:text-base"
                                >
                                    Switch from Skype
                                </button>
                                <button
                                    className="h-11 md:h-12 px-6 md:px-8 rounded-full
              border border-[#0F6660]
              text-[#123533] dark:text-white dark:border-slate-600
              hover:bg-[#0F6660] hover:text-white
              transition-all duration-300
              text-sm md:text-base"
                                >
                                    Get a Local Number
                                </button>
                            </div>

                            {/* Support */}
                            <p className="mt-6 md:mt-10 text-sm text-gray-500 dark:text-gray-400">
                                Need help with an existing account?
                                <span className="ml-1 text-[#EB643F] font-medium cursor-pointer hover:underline">
                                    Contact Support →
                                </span>
                            </p>

                            {/* Bottom checks */}
                            <div className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-3 md:gap-6">
                                <div className="flex items-center gap-2">
                                    <FiCheck className="text-[#0F6660] shrink-0" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        Skype Number migration pathway
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <FiCheck className="text-[#0F6660] shrink-0" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        Comparison, porting & support resources
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-center mt-4 lg:mt-0">
                            <div className="w-full max-w-xl rounded-[24px] overflow-hidden bg-white dark:bg-slate-800 shadow-2xl border border-[#E5DDD2] dark:border-slate-700">

                                {/* Header */}
                                <div className="bg-[#0F6660] text-white px-5 md:px-7 py-4 md:py-5">
                                    <h3 className="font-medium text-sm md:text-base">
                                        What do you need help with?
                                    </h3>
                                </div>

                                {/* Resources */}
                                <div>
                                    {resourceItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex  flex-col md:flex-row items-center justify-between gap-3 md:gap-6 px-5 md:px-7 py-4 md:py-5 border-b border-[#ECE6DA] dark:border-slate-700"
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <span className="w-2 h-2 rounded-full bg-[#EB643F] shrink-0" />
                                                <span className="text-[13px] md:text-[15px] text-[#123533] dark:text-white truncate">
                                                    {item.title}
                                                </span>
                                            </div>
                                            <button
                                                className="text-[#EB643F] text-xs md:text-sm font-medium
                    whitespace-nowrap hover:underline shrink-0"
                                            >
                                                {item.action}
                                            </button>
                                        </div>
                                    ))}
                                </div>

                                {/* CTA */}
                                <div className="p-4 md:p-6">
                                    <button
                                        className="w-full h-11 md:h-12 rounded-xl
                bg-[#EB643F] text-white font-semibold text-sm md:text-base
                hover:bg-[#D95A37] transition-all duration-300"
                                    >
                                        Find the Right Resource
                                    </button>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* Decision Paths */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Start Here

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[50px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Choose the path that matches your

                            <br />

                            next decision.

                        </h2>

                    </div>

                    {/* Decision List */}

                    <div className="mt-16 rounded-[26px] overflow-hidden border border-[#E5DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl">

                        {decisionPaths.map((item, index) => (

                            <div
                                key={item.title}
                                className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 px-6 md:px-8 py-5 transition-all duration-300 hover:bg-[#FCF7F1] dark:hover:bg-slate-700
                    ${index !== decisionPaths.length - 1
                                        ? "border-b border-[#ECE5DA] dark:border-slate-700"
                                        : ""
                                    }`}
                            >

                                {/* Left */}

                                <div className="flex-1">

                                    <h3 className="text-[15px] md:text-base font-medium text-[#123533] dark:text-white">

                                        {item.title}

                                    </h3>

                                </div>

                                {/* Badge */}

                                <div className="lg:w-[220px] flex lg:justify-center">

                                    <span
                                        className="inline-flex items-center rounded-full
                            bg-[#EDF6F2] dark:bg-slate-600
                            px-4 py-2
                            text-xs font-semibold
                            text-[#0F6660] dark:text-green-300"
                                    >

                                        {item.badge}

                                    </span>

                                </div>

                                {/* CTA */}

                                <div className="lg:w-[240px] lg:text-right">

                                    <button
                                        className="text-[#EB643F]
                            text-sm
                            font-semibold
                            hover:underline
                            transition"
                                    >

                                        {item.action}

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* Migration & Comparison */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Migration & Comparison

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[50px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Replacing Skype Number or

                            <br />

                            comparing options? Start here.

                        </h2>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid md:grid-cols-2 gap-6">

                        {comparisonCards.map((card, index) => {

                            const Icon = card.icon;

                            return (

                                <div
                                    key={index}
                                    className="group rounded-[24px]
                        border border-[#E5DDD2]
                        dark:border-slate-700
                        bg-white
                        dark:bg-slate-800
                        p-8
                        transition-all
                        duration-300
                        hover:border-[#EB643F]
                        hover:-translate-y-1
                        hover:shadow-xl"
                                >

                                    {/* Icon */}

                                    <div
                                        className="w-12 h-12 rounded-xl
                            bg-[#EEF6F3]
                            dark:bg-slate-700
                            flex items-center justify-center
                            text-[#0F6660]
                            transition-all duration-300
                            group-hover:bg-[#EB643F]
                            group-hover:text-white"
                                    >

                                        <Icon size={20} />

                                    </div>

                                    {/* Title */}

                                    <h3 className="mt-8 text-[24px] font-bold text-[#123533] dark:text-white">

                                        {card.title}

                                    </h3>

                                    {/* Description */}

                                    <p className="mt-5 text-[15px] leading-7 text-[#666666] dark:text-gray-400">

                                        {card.description}

                                    </p>

                                    {/* Link */}

                                    <button
                                        className="mt-6
                            text-[#EB643F]
                            font-semibold
                            text-sm
                            hover:underline"
                                    >

                                        {card.action}

                                    </button>

                                </div>

                            );

                        })}

                    </div>

                    {/* Bottom Note */}

                    <p className="mt-12 text-center text-xs leading-6 text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">

                        Comparisons are factual, fair, and use-case led.
                        Review each provider's current features and terms
                        before deciding.

                    </p>

                </div>

            </section>
            {/* learn the basics */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* ===================== */}
                    {/* Learn The Basics */}
                    {/* ===================== */}

                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Learn The Basics

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[48px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Understand the numbers behind

                            <br />

                            local presence.

                        </h2>

                    </div>

                    <div className="mt-14 grid md:grid-cols-2 gap-6">

                        {basicsCards.map((card) => {

                            const Icon = card.icon;

                            return (

                                <div
                                    key={card.title}
                                    className="group bg-white dark:bg-slate-800 rounded-[24px]
                        border border-[#E5DDD2] dark:border-slate-700
                        p-8 transition-all duration-300
                        hover:-translate-y-1 hover:shadow-xl"
                                >

                                    <div
                                        className="w-12 h-12 rounded-xl
                            bg-[#EEF6F3] dark:bg-slate-700
                            flex items-center justify-center
                            text-[#0F6660]
                            group-hover:bg-[#EB643F]
                            group-hover:text-white
                            transition-all"
                                    >

                                        <Icon size={20} />

                                    </div>

                                    <h3 className="mt-7 text-xl font-semibold text-[#123533] dark:text-white">

                                        {card.title}

                                    </h3>

                                    <p className="mt-4 text-[15px] leading-7 text-[#666666] dark:text-gray-400">

                                        {card.description}

                                    </p>

                                    <button
                                        className="mt-6 text-[#EB643F]
                            font-semibold text-sm hover:underline"
                                    >

                                        {card.action}

                                    </button>

                                </div>

                            );

                        })}

                    </div>

                    {/* ===================== */}
                    {/* Support & Trust */}
                    {/* ===================== */}

                    <div className="mt-28 max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Support & Trust

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[48px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Find help, check porting, and

                            <br />

                            understand service information.

                        </h2>

                    </div>

                    <div className="mt-14 grid sm:grid-cols-2 gap-6">

                        {supportCards.map((card) => {

                            const Icon = card.icon;

                            return (

                                <div
                                    key={card.title}
                                    className="group bg-white dark:bg-slate-800 rounded-[24px]
                        border border-[#E5DDD2] dark:border-slate-700
                        p-8 transition-all duration-300
                        hover:-translate-y-1 hover:shadow-xl"
                                >

                                    <div
                                        className="w-12 h-12 rounded-xl
                            bg-[#EEF6F3] dark:bg-slate-700
                            flex items-center justify-center
                            text-[#0F6660]
                            group-hover:bg-[#EB643F]
                            group-hover:text-white
                            transition-all"
                                    >

                                        <Icon size={20} />

                                    </div>

                                    <h3 className="mt-7 text-xl font-semibold text-[#123533] dark:text-white">

                                        {card.title}

                                    </h3>

                                    <p className="mt-4 text-[15px] leading-7 text-[#666666] dark:text-gray-400">

                                        {card.description}

                                    </p>

                                    <button
                                        className="mt-6 text-[#EB643F]
                            font-semibold text-sm hover:underline"
                                    >

                                        {card.action}

                                    </button>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </section>
            {/* By Buyer Type */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="text-center max-w-4xl mx-auto">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            By Buyer Type

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[50px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Find the fastest path to the answer you need.

                        </h2>

                    </div>

                    {/* Table */}

                    <div className="mt-16 rounded-[24px] overflow-hidden bg-white dark:bg-slate-800 border border-[#E5DDD2] dark:border-slate-700 shadow-xl">

                        {buyerTypes.map((item, index) => (

                            <div
                                key={item.buyer}
                                className={`grid md:grid-cols-[1.1fr_1.2fr_auto]
                    items-center gap-5 px-6 md:px-8 py-5
                    transition-all duration-300
                    hover:bg-[#FCF7F1]
                    dark:hover:bg-slate-700
                    ${index !== buyerTypes.length - 1
                                        ? "border-b border-[#ECE6DA] dark:border-slate-700"
                                        : ""
                                    }`}
                            >

                                {/* Buyer */}

                                <div>

                                    <h3 className="font-semibold text-[#123533] dark:text-white">

                                        {item.buyer}

                                    </h3>

                                </div>

                                {/* Resource */}

                                <div>

                                    <p className="text-sm text-gray-500 dark:text-gray-400">

                                        {item.resource}

                                    </p>

                                </div>

                                {/* CTA */}

                                <div className="md:text-right">

                                    <button
                                        className="text-[#EB643F]
                            text-sm
                            font-semibold
                            whitespace-nowrap
                            hover:underline
                            transition"
                                    >

                                        {item.action}

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* Trust Cards */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* ==================================== */}
                    {/* TRUST SECTION */}
                    {/* ==================================== */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Trust, Safety & Service Information

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[50px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Clear information builds trust before

                            <br />

                            and after purchase.

                        </h2>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid sm:grid-cols-2 xl:grid-cols-4 gap-6">

                        {trustCards.map((card) => {

                            const Icon = card.icon;

                            return (

                                <div
                                    key={card.title}
                                    className="group rounded-[24px]
                        bg-white dark:bg-slate-800
                        border border-[#E5DDD2]
                        dark:border-slate-700
                        p-7
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-xl"
                                >

                                    <div
                                        className="w-12 h-12 rounded-xl
                            bg-[#EEF6F3]
                            dark:bg-slate-700
                            text-[#0F6660]
                            flex items-center justify-center
                            group-hover:bg-[#EB643F]
                            group-hover:text-white
                            transition-all"
                                    >

                                        <Icon size={20} />

                                    </div>

                                    <h3 className="mt-7 text-xl font-semibold text-[#123533] dark:text-white">

                                        {card.title}

                                    </h3>

                                    <p className="mt-4 text-[15px] leading-7 text-[#666666] dark:text-gray-400">

                                        {card.description}

                                    </p>

                                </div>

                            );

                        })}

                    </div>

                    {/* ==================================== */}
                    {/* RESOURCE NEXT STEP */}
                    {/* ==================================== */}

                    <div className="mt-28 grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}

                        <div>

                            <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                                Resources That Keep You Moving

                            </p>

                            <h2 className="mt-5 text-3xl md:text-[48px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                                Every resource helps you

                                <br />

                                take the next step.

                            </h2>

                            <p className="mt-7 text-[16px] leading-8 text-[#666666] dark:text-gray-400 max-w-lg">

                                Resources aren't a passive library —
                                each one routes you forward:
                                activate a number, complete porting,
                                understand billing, configure call handling,
                                or reach support, so you move from
                                research to confident use.

                            </p>

                            <button
                                className="mt-10 h-12 px-8 rounded-full
                    bg-[#EB643F]
                    text-white
                    font-semibold
                    shadow-lg
                    hover:bg-[#D95A37]
                    transition-all"
                            >

                                Get a Local Number

                            </button>

                        </div>

                        {/* RIGHT */}

                        <div className="rounded-[24px] overflow-hidden bg-white dark:bg-slate-800 shadow-xl border border-[#E5DDD2] dark:border-slate-700">

                            {/* Header */}

                            <div className="bg-[#0F6660] text-white px-7 py-5">

                                <h3 className="font-medium">

                                    Resource → next step

                                </h3>

                            </div>

                            {/* Rows */}

                            <div>

                                {resourceSteps.map((item, index) => (

                                    <div
                                        key={item.category}
                                        className={`grid grid-cols-[120px_20px_1fr]
                            items-center
                            px-7 py-5
                            transition-all duration-300
                            hover:bg-[#FCF7F1]
                            dark:hover:bg-slate-700
                            ${index !== resourceSteps.length - 1
                                                ? "border-b border-[#ECE6DA] dark:border-slate-700"
                                                : ""
                                            }`}
                                    >

                                        <span className="font-semibold text-[#123533] dark:text-white">

                                            {item.category}

                                        </span>

                                        <FiArrowRight className="text-[#EB643F]" />

                                        <span className="text-sm text-gray-500 dark:text-gray-400">

                                            {item.action}

                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* FAQ */}
            <Faq
                heading="QUESTIONS"
                subHeading="Zoiko Local resources, answered."
                items={faqItems}
            />
            {/* Final CTA */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">

                <div className="max-w-7xl mx-auto px-5">

                    <div
                        className="relative overflow-hidden rounded-[32px] px-8 py-16 md:px-16 md:py-20 text-center"
                        style={{
                            background:
                                "radial-gradient(circle at top right, rgba(20,140,130,.18), transparent 35%), linear-gradient(135deg,#0F6660 0%, #083D3B 100%)",
                        }}
                    >

                        {/* Decorative Glow */}

                        <div className="absolute inset-0 pointer-events-none">

                            <div className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-white/5 blur-[90px]" />

                            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#0F8B80]/20 blur-[110px]" />

                        </div>

                        <div className="relative z-10">

                            {/* Heading */}

                            <h2 className="text-3xl md:text-[50px] font-bold leading-[1.12] text-white">

                                Ready to move from research to

                                <br />

                                <span className="text-[#F5A48D]">

                                    local presence?

                                </span>

                            </h2>

                            {/* Description */}

                            <p className="mt-7 max-w-2xl mx-auto text-[16px] leading-8 text-white/70">

                                Compare options, understand the basics,

                                get support, or start with a local

                                number built for business communication.

                            </p>

                            {/* Buttons */}

                            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">

                                {/* Primary */}

                                <button
                                    className="h-12 px-8 rounded-full
                        bg-[#EB643F]
                        text-white
                        text-sm
                        font-semibold
                        shadow-xl
                        hover:bg-[#D95A37]
                        hover:shadow-2xl
                        transition-all duration-300"
                                >

                                    Get a Local Number

                                </button>

                                {/* Secondary */}

                                <button
                                    className="h-12 px-8 rounded-full
                        border border-white/20
                        text-white
                        text-sm
                        font-semibold
                        hover:bg-white
                        hover:text-[#123533]
                        transition-all duration-300"
                                >

                                    Switch from Skype

                                </button>

                                {/* Outline */}

                                <button
                                    className="h-12 px-8 rounded-full
                        border border-white/20
                        text-white
                        text-sm
                        font-semibold
                        hover:bg-white
                        hover:text-[#123533]
                        transition-all duration-300"
                                >

                                    Find Help

                                </button>

                            </div>

                            {/* Bottom Link */}

                            <p className="mt-8 text-sm text-white/60">

                                Comparing options?

                                <button className="ml-1 text-[#F5A48D] font-medium hover:underline">

                                    See Pricing →

                                </button>

                            </p>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
