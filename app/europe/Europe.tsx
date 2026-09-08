"use client";
import { useState } from 'react';
import {
    FiArrowRight, FiPhone,
    FiMic, FiVideo, FiMinus, FiPlus,
    FiCheck, FiTrendingUp,
    FiGlobe, FiMessageSquare,
} from "react-icons/fi";

const europeCoverage = [
    {
        code: "GB",
        country: "United Kingdom",
        dial: "+44",
        status: "Live",
        type: "live",
    },
    {
        code: "IE",
        country: "Ireland",
        dial: "+353",
        status: "Request",
        type: "request",
    },
    {
        code: "DE",
        country: "Germany",
        dial: "+49",
        status: "Request",
        type: "request",
    },
];
const europeMarkets = [
    {
        code: "GB",
        country: "United Kingdom",
        dial: "+44",
        status: "Available",
        available: true,
        description:
            "UK local presence for business calls and customer communication.",
        action: "Get a number",
    },
    {
        code: "IE",
        country: "Ireland",
        dial: "+353",
        status: "By request",
        available: false,
        description:
            "Local Irish presence for business and customer reach.",
        action: "Request this market",
    },
    {
        code: "DE",
        country: "Germany",
        dial: "+49",
        status: "By request",
        available: false,
        description:
            "Local German presence for one of Europe's largest markets.",
        action: "Request this market",
    },
];
const europeBenefits = [
    {
        icon: <FiTrendingUp />,
        title: "European presence",
        description:
            "Credible local presence in European markets without a local office.",
        color: "green",
    },
    {
        icon: <FiGlobe />,
        title: "Regional expansion",
        description:
            "Enter and test European markets before committing to infrastructure.",
        color: "green",
    },
    {
        icon: <FiMessageSquare />,
        title: "Local-language support",
        description:
            "Route European calls by market, language, or business hours.",
        color: "green",
    },
];
const europeServices = [
    {
        icon: <FiPhone />,
        title: "Calling",
        description:
            "Inbound and outbound business calls on every Europe number, with routing and history.",
    },
    {
        icon: <FiMic />,
        title: "AI Receptionist",
        description:
            "Answers, qualifies, and routes calls across Europe markets — and captures what you miss.",
    },
    {
        icon: <FiVideo />,
        title: "Video",
        description:
            "Meet customers and partners across Europe face-to-face, from anywhere.",
    },
];
const Faqs = [
    {
        question: "Which European markets are live?",
        answer:
            "Available markets may change over time based on carrier partnerships, regulations, and local availability. Contact Zoiko Local for the latest list of supported European countries and number types.",
    },
    {
        question: "Can I get a European number without a local office?",
        answer:
            "In many supported markets, businesses may be eligible for local European numbers without maintaining a physical office, subject to verification requirements, regulatory rules, and supporting documentation.",
    },
    {
        question: "Can I cover multiple European markets?",
        answer:
            "Yes. Businesses can manage multiple European numbers from a single workspace, supporting calling, routing, voicemail, video meetings, and AI Receptionist capabilities across markets.",
    },
    {
        question: "Can I request a European market not listed?",
        answer:
            "Yes. Zoiko Local continually evaluates new countries and regions. You can submit a market request and the team will review demand, regulatory requirements, and carrier availability.",
    },
];


export default function Europe() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    return (
        <>
            {/* Hero section */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 lg:py-14 overflow-hidden">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT */}
                        <div>
                            <p className="uppercase tracking-[0.32em] text-[11px] font-semibold text-[#EB643F]">
                                Europe • Local Numbers
                            </p>

                            <h1 className="mt-6 text-4xl md:text-5xl lg:text-[58px] font-bold leading-[1.1] text-[#123533] dark:text-white">
                                Europe local numbers
                                <br />
                                <span className="text-[#EB643F]">
                                    for business.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-lg text-[17px] leading-8 text-[#666666] dark:text-gray-400">
                                Get local numbers across European markets and build trusted
                                regional presence from one workspace. Sound local.
                                Reach anywhere.
                            </p>

                            {/* Buttons */}
                            <div className="mt-10 flex flex-wrap gap-4">
                                <button className="h-12 px-8 rounded-xl bg-[#EB643F] text-white font-semibold shadow-lg hover:bg-[#D95A37] transition">
                                    Explore Europe Coverage
                                </button>

                                <button className="h-12 px-8 rounded-xl border border-[#0F6660] dark:border-slate-700 bg-white dark:bg-slate-800 text-[#123533] dark:text-white font-semibold hover:bg-[#0F6660] hover:text-white transition">
                                    Check Number Availability
                                </button>
                            </div>

                            {/* Helper */}
                            <div className="mt-8 text-sm">
                                <span className="text-gray-500 dark:text-gray-400">
                                    Replacing a Skype Number across markets?
                                </span>

                                <button className="ml-2 text-[#EB643F] font-semibold inline-flex items-center gap-1">
                                    Switch from Skype
                                    <FiArrowRight size={14} />
                                </button>
                            </div>

                            {/* Features */}

                            <div className="mt-10 space-y-4">
                                {[
                                    "Backed by a global connectivity agreement",
                                    "One workspace for every Europe market",
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
                        <div className="flex justify-center">
                            <div className="w-full max-w-xl rounded-[24px] overflow-hidden bg-white dark:bg-slate-800 shadow-2xl border border-[#E7DED2] dark:border-slate-700">
                                {/* Header */}
                                <div className="bg-[#0F5A52] text-white px-7 py-5 text-sm font-semibold">
                                    Europe · coverage
                                </div>

                                {/* Countries */}
                                <div className="p-6 space-y-4">
                                    {europeCoverage.map((item) => (
                                        <div
                                            key={item.country}
                                            className="flex items-center justify-between rounded-xl border border-[#ECE6DA] dark:border-slate-700 bg-[#FAF8F5] dark:bg-slate-700 px-5 py-4"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="font-semibold text-[#123533] dark:text-white">
                                                            {item.code}
                                                        </span>
                                                        <span className="text-[#123533] dark:text-white">
                                                            {item.country}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="text-sm text-gray-400">
                                                    {item.dial}
                                                </span>
                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold
                                        ${item.type === "live"
                                                            ? "bg-[#EAF7F2] text-[#0F6660]"
                                                            : "bg-[#F3F2EF] text-gray-500"
                                                        }`}
                                                >

                                                    {item.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Europe Markets */}
            <section className="bg-white dark:bg-slate-900 py-10 lg:py-14">
                <div className="max-w-7xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="uppercase tracking-[0.32em] text-[11px] font-semibold text-[#EB643F]">
                            Europe Markets
                        </p>

                        <h2 className="mt-5 text-4xl md:text-[48px] font-bold leading-tight text-[#123533] dark:text-white">
                            Local numbers across Europe.
                        </h2>

                        <p className="mt-6 text-[17px] leading-8 text-gray-500 dark:text-gray-400">
                            Get local numbers across European markets and build
                            trusted regional presence from one workspace.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {europeMarkets.map((market) => (
                            <div
                                key={market.code}
                                className="rounded-[24px]
                    border border-[#E7DDD2]
                    dark:border-slate-700
                    bg-white
                    dark:bg-slate-800
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:shadow-xl"
                            >

                                {/* Top */}
                                <div className="flex items-start justify-between">
                                    <h3 className="text-[34px] font-bold tracking-tight text-[#123533] dark:text-white">
                                        {market.code}
                                    </h3>

                                    <span
                                        className={`px-3 py-1 rounded-full text-xs font-semibold
                            ${market.available
                                                ? "bg-[#EAF7F2] text-[#0F6660]"
                                                : "bg-[#F2F2F2] dark:bg-slate-700 text-gray-500 dark:text-gray-300"
                                            }`}
                                    >
                                        {market.status}
                                    </span>
                                </div>

                                {/* Country */}
                                <h4 className="mt-6 text-xl font-semibold text-[#123533] dark:text-white">
                                    {market.country}
                                </h4>

                                <p className="mt-1 text-sm text-gray-500">
                                    {market.dial}
                                </p>

                                {/* Description */}
                                <p className="mt-6 text-[15px] leading-7 text-gray-500 dark:text-gray-400">
                                    {market.description}
                                </p>

                                {/* CTA */}
                                <button
                                    className="mt-8
                        inline-flex
                        items-center
                        gap-2
                        text-[#EB643F]
                        font-semibold
                        hover:gap-3
                        transition-all"
                                >
                                    {market.action}
                                    <span>→</span>
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Note */}
                    <div className="mt-12 text-center">
                        <p className="max-w-3xl mx-auto text-sm leading-7 text-gray-400 dark:text-gray-500">
                            The United Kingdom is live today.
                            Additional European markets, including Ireland and Germany,
                            are available by request under our global connectivity agreement.
                        </p>
                    </div>
                </div>
            </section>
            {/* Benefits */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 lg:py-14">

                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.32em] text-[11px] font-semibold text-[#EB643F]">

                            Why Europe Presence Matters

                        </p>

                        <h2 className="mt-5 text-4xl md:text-[48px] font-bold leading-tight text-[#123533] dark:text-white">

                            Be local across Europe —

                            <br />

                            from one workspace.

                        </h2>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                        {europeBenefits.map((item) => (

                            <div
                                key={item.title}
                                className="group rounded-[24px]
                    border border-[#E7DDD2]
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
                        ${item.color === "green"
                                            ? "bg-[#EAF7F2] text-[#0F6660]"
                                            : "bg-[#FCE8E2] text-[#EB643F]"
                                        }`}
                                >

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-xl font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-4 text-[15px] leading-7 text-gray-500 dark:text-gray-400">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/*  */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900">

                {/* ================= Services ================= */}
                <div className="py-10 lg:py-14">

                    <div className="max-w-7xl mx-auto px-5">

                        {/* Heading */}

                        <div className="max-w-4xl mx-auto text-center">

                            <p className="uppercase tracking-[0.32em] text-[11px] font-semibold text-[#EB643F]">

                                Calling, AI Receptionist & Video

                            </p>

                            <h2 className="mt-5 text-4xl md:text-[48px] font-bold leading-tight text-[#123533] dark:text-white">

                                Every Europe number,

                                <span className="mx-2">connected to</span>

                                <br />

                                everything.

                            </h2>

                        </div>

                        {/* Cards */}

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

                            {europeServices.map((item) => (

                                <div
                                    key={item.title}
                                    className="group rounded-[24px]
                        border border-[#E7DDD2]
                        dark:border-slate-700
                        bg-white dark:bg-slate-800
                        p-8
                        min-h-[210px]
                        transition-all duration-300
                        hover:-translate-y-1
                        hover:shadow-xl"
                                >

                                    <div className="w-12 h-12 rounded-xl bg-[#EAF7F2] flex items-center justify-center text-[#0F6660] text-xl">

                                        {item.icon}

                                    </div>

                                    <h3 className="mt-6 text-xl font-semibold text-[#123533] dark:text-white">

                                        {item.title}

                                    </h3>

                                    <p className="mt-4 text-[15px] leading-7 text-gray-500 dark:text-gray-400">

                                        {item.description}

                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

                {/* ================= Bottom CTA ================= */}
                <div className="border-t border-[#ECE5DA] dark:border-slate-800">

                    <div className="max-w-5xl mx-auto px-5 py-10 lg:py-14 text-center">

                        <p className="uppercase tracking-[0.32em] text-[11px] font-semibold text-[#EB643F]">

                            More Europe Markets

                        </p>

                        <h2 className="mt-5 text-4xl md:text-[48px] font-bold leading-tight text-[#123533] dark:text-white">

                            Need a market not listed?

                        </h2>

                        <p className="mt-6 max-w-3xl mx-auto text-[17px] leading-8 text-gray-500 dark:text-gray-400">

                            Backed by a global connectivity agreement,
                            we're expanding across Europe by demand.
                            Tell us the country or city you need and
                            we'll review availability.

                        </p>

                        <div className="mt-10 flex flex-wrap justify-center gap-4">

                            <button
                                className="h-12 px-8 rounded-xl
                    bg-[#EB643F]
                    text-white
                    font-semibold
                    shadow-lg
                    hover:bg-[#D95A37]
                    transition"
                            >

                                Request a Market

                            </button>

                            <button
                                className="h-12 px-8 rounded-xl
                    border border-[#0F6660]
                    dark:border-slate-700
                    bg-white dark:bg-slate-800
                    text-[#123533]
                    dark:text-white
                    font-semibold
                    hover:bg-[#0F6660]
                    hover:text-white
                    transition"
                            >

                                Talk to Sales

                            </button>

                        </div>

                    </div>

                </div>

            </section>
            {/* Frequently Asked Questions */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-5xl mx-auto px-5">
                    {/* Heading */}
                    <div className="text-center">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            Questions
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[50px] font-bold leading-tight text-[#123533] dark:text-white">
                            Africa coverage, answered.
                        </h2>
                    </div>

                    {/* Notice */}

                    <div className="mt-10 rounded-xl border-l-4 border-[#EB643F] border border-[#EB643F] dark:border-[#EB643F] bg-white dark:bg-slate-800 px-6 py-5">
                        <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
                            Local-number availability may vary by country, city, number type, carrier partner, verification requirement, eligibility rule, and
                            applicable law. Some numbers may require business verification, proof of address, identity checks, or additional onboarding before
                            activation.
                        </p>
                    </div>

                    {/* FAQ */}
                    <div className="mt-8">
                        {Faqs.map((faq, index) => {

                            const isOpen = openFaq === index;
                            return (
                                <div
                                    key={faq.question}
                                    className="border-b border-[#E8E1D7] dark:border-slate-700"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full py-6 flex items-center justify-between text-left"
                                    >
                                        <span className="text-lg font-medium text-[#123533] dark:text-white">
                                            {faq.question}
                                        </span>

                                        <div
                                            className="w-8 h-8 rounded-full
                                                                                bg-[#EDF6F2]
                                                                                dark:bg-slate-700
                                                                                flex items-center justify-center
                                                                                text-[#0F6660]"
                                        >

                                            {isOpen ? (
                                                <FiMinus size={16} />
                                            ) : (
                                                <FiPlus size={16} />
                                            )}
                                        </div>
                                    </button>

                                    <div
                                        className={`grid transition-all duration-300 ${isOpen
                                            ? "grid-rows-[1fr] pb-6"
                                            : "grid-rows-[0fr]"
                                            }`}
                                    >

                                        <div className="overflow-hidden">
                                            <p className="pr-14 text-[15px] leading-7 text-gray-500 dark:text-gray-400">
                                                {faq.answer}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* Final CTA */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div
                        className="relative overflow-hidden rounded-[32px] px-8 py-10 md:px-20 md:py-12 text-center"
                        style={{
                            background:
                                "radial-gradient(circle at top right, rgba(16,120,108,0.25), transparent 35%), linear-gradient(135deg,#0F6660 0%, #083D3B 100%)",
                        }}
                    >

                        {/* Background Glow */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute -top-24 right-0 w-80 h-80 bg-white/5 rounded-full blur-[100px]" />
                            <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0F8B80]/20 rounded-full blur-[120px]" />
                        </div>

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Heading */}
                            <h2 className="text-3xl md:text-[50px] leading-[1.12] font-bold text-white">
                                Sound local.

                                <span className="text-[#EB643F] italic">
                                    {" "}Reach anywhere.
                                </span>
                            </h2>

                            {/* Description */}

                            <p className="mt-7 max-w-2xl mx-auto text-[16px] md:text-lg leading-8 text-white/75">
                                Get local numbers across Europe with calling, video, and an AI Receptionist — managed from one workspace.
                            </p>

                            {/* Buttons */}

                            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">
                                {/* Primary */}
                                <button
                                    className="h-12 px-8 rounded-xl
                                                bg-[#EB643F]
                                                text-white
                                                text-sm
                                                font-semibold
                                                shadow-lg
                                                hover:bg-[#D95A37]
                                                transition-all duration-300"
                                >

                                    Explore Europe Coverage  →
                                </button>

                                {/* Secondary */}
                                <button
                                    className="h-12 px-8 rounded-xl
                                                bg-white
                                                text-[#123533]
                                                text-sm
                                                font-semibold
                                                hover:bg-gray-100
                                                transition-all duration-300"
                                >

                                    Request a Market
                                </button>

                                {/* Outline */}
                                <button
                                    className="h-12 px-8 rounded-xl
                                                border border-white/25
                                                text-white
                                                text-sm
                                                font-semibold
                                                hover:bg-white
                                                hover:text-[#123533]
                                                transition-all duration-300"
                                >

                                    Talk to Sales
                                </button>
                            </div>

                            {/* Footer Text */}
                            <p className="mt-8 text-sm text-white/60">

                                Replacing a Skype Number too?

                                <span className="ml-1 text-[#F5A58C] hover:underline cursor-pointer">
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
