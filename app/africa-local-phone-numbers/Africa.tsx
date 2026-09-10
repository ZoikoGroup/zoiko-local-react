"use client";
import { useState } from 'react';
import {
    FiCheck, FiPlus, FiMinus, FiArrowRight, FiHeart,
    FiTrendingUp, FiPhone, FiMic, FiVideo,
    FiMessageSquare,
} from "react-icons/fi";

const africaCoverage = [
    {
        code: "NG",
        country: "Nigeria",
        prefix: "+234",
        status: "Live",
        live: true,
    },
    {
        code: "ZA",
        country: "South Africa",
        prefix: "+27",
        status: "Live",
        live: true,
    },
    {
        code: "KE",
        country: "Kenya",
        prefix: "+254",
        status: "Request",
        live: false,
    },
];
const africaMarkets = [
    {
        code: "NG",
        country: "Nigeria",
        prefix: "+234",
        status: "Available",
        available: true,
        description:
            "Local presence in one of Africa's most important markets.",
        action: "Get a number",
    },
    {
        code: "ZA",
        country: "South Africa",
        prefix: "+27",
        status: "Available",
        available: true,
        description:
            "Local presence to support customers and growth in South Africa.",
        action: "Get a number",
    },
    {
        code: "KE",
        country: "Kenya",
        prefix: "+254",
        status: "By request",
        available: false,
        description:
            "Local Kenyan presence for East African business.",
        action: "Request this market",
    },
];
const africaBenefits = [
    {
        icon: <FiHeart />,
        title: "Diaspora founders",
        description:
            "Serve African home markets with trusted local lines from anywhere.",
    },
    {
        icon: <FiTrendingUp />,
        title: "Market presence",
        description:
            "Credible local presence in Africa's fast-growing commercial centers.",
    },
    {
        icon: <FiMessageSquare />,
        title: "Customer support",
        description:
            "Familiar local numbers African customers trust and call.",
    },
];
const africaServices = [
    {
        icon: <FiPhone />,
        title: "Calling",
        description:
            "Inbound and outbound business calls on every African number, with routing and history.",
    },
    {
        icon: <FiMic />,
        title: "AI Receptionist",
        description:
            "Answer, qualifies, and routes calls across Africa markets — and captures what you miss.",
    },
    {
        icon: <FiVideo />,
        title: "Video",
        description:
            "Meet customers and partners across Africa face-to-face, from anywhere.",
    },
];
const Faqs = [
    {
        question: "Which African markets are live?",
        answer:
            "Available markets may change over time based on carrier partnerships, regulations, and local availability. Contact Zoiko Local for the latest list of supported African countries and number types.",
    },
    {
        question: "Can diaspora founders get African numbers from abroad?",
        answer:
            "In many supported markets, businesses and founders operating internationally may be eligible for local numbers, subject to verification requirements, regulatory rules, and supporting documentation.",
    },
    {
        question: "Can I use an African number for calls, video, and AI?",
        answer:
            "Yes. Supported numbers can work with calling, routing, voicemail, video meetings, and AI Receptionist capabilities, depending on your plan and local availability.",
    },
    {
        question: "Can I request an African market not listed?",
        answer:
            "Yes. Zoiko Local regularly evaluates new countries and markets. You can submit a market request and the team will review demand, regulatory requirements, and carrier availability.",
    },
];

export default function Africa() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    return (
        <>
            {/* Hero section */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* LEFT */}
                        <div>
                            <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                                Africa · Local Numbers
                            </p>

                            <h1 className="mt-5 text-4xl md:text-[58px] leading-[1.08] font-bold text-[#123533] dark:text-white">
                                Africa local numbers
                                <br />
                                <span className="text-[#EB643F] italic">
                                    for business.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-[17px] leading-8 text-[#666666] dark:text-gray-400">
                                Get local numbers across African markets —
                                build trusted presence in the continent's
                                fast-growing commercial centers.

                                Sound local. Reach anywhere.
                            </p>

                            {/* Buttons */}

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <button
                                    className="py-3 px-6 rounded-xl
                        bg-[#EB643F]
                        text-white text-sm md:text-base
                        font-semibold
                        shadow-lg
                        hover:bg-[#D95A37]
                        transition-all duration-300"
                                >

                                    Explore Africa Coverage →
                                </button>

                                <button
                                    className="py-3 px-6 rounded-xl
                        border border-[#0F6660]
                        dark:border-slate-600
                        bg-white text-sm md:text-base
                        dark:bg-slate-800
                        text-[#123533]
                        dark:text-white
                        font-semibold
                        hover:bg-[#0F6660]
                        hover:text-white
                        transition-all duration-300"
                                >

                                    Check Number Availability
                                </button>
                            </div>

                            {/* Helper Link */}
                            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                                Replacing a Skype Number across markets?

                                <span className="ml-1 text-[#EB643F] font-medium cursor-pointer hover:underline">
                                    Switch from Skype →
                                </span>
                            </p>

                            {/* Features */}
                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-3">
                                    <FiCheck className="text-[#0F6660]" />

                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        Backed by a global connectivity agreement
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FiCheck className="text-[#0F6660]" />

                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        One workspace for every Africa market
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-xl rounded-[24px] overflow-hidden bg-white dark:bg-slate-800 border border-[#E5DDD2] dark:border-slate-700 shadow-2xl">
                                {/* Header */}
                                <div className="bg-[#0F6660] px-7 py-5 text-white">
                                    <h3 className="font-medium text-sm">
                                        Africa · Coverage
                                    </h3>
                                </div>
                                {/* Countries */}

                                <div className="p-5 space-y-4">
                                    {africaCoverage.map((item) => (
                                        <div
                                            key={item.country}
                                            className="flex items-center justify-between rounded-xl border border-[#E6DDD2] dark:border-slate-700 bg-[#FBF8F3] dark:bg-slate-700 px-5 py-4"
                                        >

                                            {/* Left */}
                                            <div className="flex items-center gap-4">
                                                <div className="w-10 h-10 rounded-lg bg-[#EDF6F2] dark:bg-slate-600 flex items-center justify-center text-[#0F6660] text-xs font-bold">
                                                    {item.code}
                                                </div>

                                                <div>
                                                    <h4 className="font-semibold text-[#123533] dark:text-white">
                                                        {item.country}
                                                    </h4>
                                                </div>
                                            </div>

                                            {/* Right */}
                                            <div className="flex items-center gap-4">
                                                <span className="text-sm text-gray-500 dark:text-gray-400">
                                                    {item.prefix}
                                                </span>

                                                <span
                                                    className={`px-3 py-1 rounded-full text-xs font-semibold
                                        ${item.live
                                                            ? "bg-[#EDF6F2] text-[#0F6660]"
                                                            : "bg-[#F5F2EB] text-gray-500 dark:bg-slate-600 dark:text-gray-300"
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
            {/* Africa Benefits */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            Africa Markets
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[48px] font-bold leading-tight text-[#123533] dark:text-white">
                            Local numbers across Africa.
                        </h2>

                        <p className="mt-6 text-gray-500 dark:text-gray-400 leading-8">
                            Get local numbers across African markets —
                            build trusted presence in the continent's
                            fast-growing commercial centers.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {africaMarkets.map((market) => (
                            <div
                                key={market.country}
                                className="rounded-[24px]
                    bg-white dark:bg-slate-800
                    border border-[#E6DDD2] dark:border-slate-700
                    p-8
                    hover:-translate-y-1
                    hover:shadow-xl
                    transition"
                            >
                                <div className="flex justify-between items-start">
                                    <h3 className="text-4xl font-bold text-[#123533] dark:text-white">
                                        {market.code}
                                    </h3>

                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold
                            ${market.available
                                                ? "bg-[#EDF6F2] text-[#0F6660]"
                                                : "bg-[#F4F3EF] dark:bg-slate-700 text-gray-500"
                                            }`}
                                    >
                                        {market.status}
                                    </span>
                                </div>

                                <h4 className="mt-8 text-xl font-semibold text-[#123533] dark:text-white">
                                    {market.country}
                                </h4>

                                <p className="mt-2 text-sm text-gray-500">
                                    {market.prefix}
                                </p>

                                <p className="mt-5 text-[15px] leading-7 text-gray-500 dark:text-gray-400">
                                    {market.description}
                                </p>
                                <button className="mt-8 text-[#EB643F] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                                    {market.action}
                                    <FiArrowRight />
                                </button>
                            </div>
                        ))}
                    </div>

                    <p className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400 max-w-3xl mx-auto">
                        Nigeria and South Africa are live today.
                        Additional African markets, including Kenya
                        and Ghana, are available by request under our
                        global connectivity agreement.
                    </p>
                </div>
            </section>
            {/* Why Africa Presence Matters */}
            <section className="bg-[#FAF8F5] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            Why Africa Presence Matters
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[48px] font-bold leading-tight text-[#123533] dark:text-white">
                            Be local across Africa —
                            <br />
                            from one workspace.
                        </h2>
                    </div>

                    <div className="mt-16 grid md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {africaBenefits.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-[24px]
                    bg-white dark:bg-slate-800
                    border border-[#E6DDD2] dark:border-slate-700
                    p-8
                    hover:-translate-y-1
                    hover:shadow-xl
                    transition"
                            >

                                <div
                                    className="w-12 h-12
                        rounded-xl
                        bg-[#EDF6F2]
                        dark:bg-slate-700
                        flex items-center justify-center
                        text-[#0F6660]
                        text-xl"
                                >
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
            </section>
            {/* Services */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Calling, AI Receptionist & Video

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[48px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Every African number,

                            connected to everything.

                        </h2>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">

                        {africaServices.map((item) => (

                            <div
                                key={item.title}
                                className="group
                    rounded-[24px]
                    bg-white
                    dark:bg-slate-800
                    border border-[#E6DDD2]
                    dark:border-slate-700
                    p-8
                    min-h-[220px]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                    hover:border-[#0F6660]/20"
                            >

                                {/* Icon */}

                                <div
                                    className="w-12 h-12
                        rounded-xl
                        bg-[#EDF6F2]
                        dark:bg-slate-700
                        flex items-center justify-center
                        text-[#0F6660]
                        text-xl"
                                >

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-xl font-semibold text-[#123533] dark:text-white">

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
            {/* More Africa Markets */}
            <section className="bg-white dark:bg-[#111827] py-10 md:py-14">

                <div className="max-w-4xl mx-auto px-5 text-center">

                    {/* Label */}

                    <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                        More Africa Markets

                    </p>

                    {/* Heading */}

                    <h2 className="mt-5 text-3xl md:text-[46px] font-bold leading-tight text-[#123533] dark:text-white">

                        Need a market not listed?

                    </h2>

                    {/* Description */}

                    <p className="mt-7 max-w-2xl mx-auto text-[16px] leading-8 text-[#666666] dark:text-gray-400">

                        Backed by a global connectivity agreement,
                        we're expanding across Africa by demand.
                        Tell us the country or city you need and
                        we'll review availability.

                    </p>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

                        {/* Primary */}

                        <button
                            className="h-12 px-8 rounded-xl
                bg-[#EB643F]
                text-white
                font-semibold
                shadow-lg
                hover:bg-[#D95A37]
                transition-all duration-300"
                        >

                            Request a Market →

                        </button>

                        {/* Secondary */}

                        <button
                            className="h-12 px-8 rounded-xl
                border border-[#0F6660]
                dark:border-slate-600
                bg-white
                dark:bg-slate-800
                text-[#123533]
                dark:text-white
                font-semibold
                hover:bg-[#0F6660]
                hover:text-white
                transition-all duration-300"
                        >

                            Talk to Sales

                        </button>

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
                               Get local numbers across Africa with calling, video, and an AI Receptionist — managed from one workspace.
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

                                    Explore Africa Coverage  →
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
