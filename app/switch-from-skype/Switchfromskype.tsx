"use client";
import { useState } from 'react';
import {
    FiCheck, FiPhone, FiMapPin, FiPhoneCall, FiMic, FiActivity, FiPlus, FiMinus
} from "react-icons/fi";

const whyMoveNow = [
    {
        icon: <FiMapPin />,
        title: "Keep your local presence",
        description:
            "Add a local number in the markets you serve, so customers still recognize and reach you.",
    },
    {
        icon: <FiPhoneCall />,
        title: "Better business calling",
        description:
            "Routing, call history, business hours, and team handling Skype never offered.",
    },
    {
        icon: <FiMic />,
        title: "Add an AI Receptionist",
        description:
            "Answer, qualify, and capture calls automatically — the upgraded Skype never had.",
    },
];
const skypeComparison = [
    {
        feature: "Local number",
        skype: "Local presence",
        zoiko: "Local numbers across multiple markets",
    },
    {
        feature: "Calling",
        skype: "Basic calls",
        zoiko: "Business calling with routing & history",
    },
    {
        feature: "Video",
        skype: "Consumer video",
        zoiko: "Business video meetings",
    },
    {
        feature: "Missed calls",
        skype: "Voicemail",
        zoiko: "Smart voicemail + AI Receptionist",
    },
    {
        feature: "Team use",
        skype: "Limited",
        zoiko: "Routing, assignment & shared numbers",
    },
    {
        feature: "Status",
        skype: "Retired",
        zoiko: "Live & supported",
    },
];
const migrationSteps = [
    {
        icon: <FiMapPin />,
        title: "1 · Choose your number",
        description:
            "Pick a new local number in the market you need — set up in minutes.",
    },
    {
        icon: <FiActivity />,
        title: "2 · Connect your team",
        description:
            "Route calls to your people and devices, and set your greeting and hours.",
    },
    {
        icon: <FiMic />,
        title: "3 · Add intelligence",
        description:
            "Turn on the AI Receptionist and follow-up so no call is ever missed.",
    },
];
const Faqs = [
    {
        question: "What is the best Skype Number alternative?",
        answer:
            "The right alternative depends on your needs. Businesses looking for local numbers, calling, routing, video meetings, and AI-powered call handling often evaluate Zoiko Local as a modern replacement.",
    },
    {
        question: "How do I switch from a Skype Number?",
        answer:
            "Start by choosing a replacement provider, setting up your new number and calling workflows, then explore number porting options where available. Keep your existing service active until the transition is complete.",
    },
    {
        question: "Is Skype really discontinued?",
        answer:
            "Microsoft has announced changes to Skype services. Review Microsoft's official communications for the latest information regarding Skype, Skype Number availability, and migration options.",
    },
    {
        question: "Can I keep my old number?",
        answer:
            "In some countries and with eligible number types, porting may be available. Eligibility depends on your carrier, number type, country, documentation requirements, and local regulations.",
    },
    {
        question: "Is Zoiko Local more than Skype was?",
        answer:
            "Zoiko Local combines local business numbers, calling, routing, video meetings, AI Receptionist capabilities, and team collaboration tools in one workspace designed for modern business communication.",
    },
];
export default function Switchfromskype() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };
    return (
        <>
            {/* Hero Section */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}
                        <div>
                            <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                                Switch From Skype
                            </p>

                            <h1 className="mt-5 text-3xl md:text-4xl md:text-[40px] leading-[1.08] font-bold text-[#123533] dark:text-white">
                                Move from your Skype
                                <br />
                                Number to
                                <span className="text-[#EB643F] italic">
                                    {" "}Zoiko Local.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-[17px] leading-8 text-[#666666] dark:text-gray-400">

                                Skype is no longer in operation. Move to a modern
                                local-number and business communication platform —
                                local numbers, calling, video, and an AI Receptionist
                                in one workspace. Sound local. Reach anywhere.
                            </p>

                            {/* Buttons */}

                            <div className="mt-4 flex flex-col sm:flex-row gap-4">
                                <button
                                    className="h-12 px-8 rounded-xl
                        bg-[#EB643F]
                        text-white
                        font-semibold
                        shadow-lg
                        hover:bg-[#D95A37]
                        transition-all duration-300"
                                >
                                    Switch from Skype →
                                </button>

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
                                    Get a Local Number
                                </button>
                            </div>

                            {/* Small Link */}

                            <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                                Questions about moving?
                                <span className="ml-1 text-[#EB643F] font-medium cursor-pointer hover:underline">
                                    Talk to migration support →
                                </span>
                            </p>

                            {/* Features */}

                            <div className="mt-4 space-y-4">
                                <div className="flex items-center gap-3">

                                    <FiCheck className="text-[#0F6660]" />

                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        A modern home for your local-number needs
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FiCheck className="text-[#0F6660]" />

                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        More than Skype offered — routing, AI, video
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
                                        Skype → Zoiko Local
                                    </h3>

                                </div>

                                {/* Body */}
                                <div className="p-6 space-y-5">
                                    {/* Skype */}
                                    <div
                                        className="rounded-xl
                            border border-[#E6DDD2]
                            dark:border-slate-700
                            bg-[#FBF8F3]
                            dark:bg-slate-700
                            px-5 py-4
                            flex items-center gap-4"
                                    >

                                        <div className="w-11 h-11 rounded-full bg-white dark:bg-slate-600 flex items-center justify-center text-gray-500">
                                            <FiPhone />
                                        </div>

                                        <div>

                                            <h4 className="font-semibold text-[#123533] dark:text-white">
                                                Skype Number
                                            </h4>

                                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                                Retired by Microsoft
                                            </p>
                                        </div>
                                    </div>

                                    {/* Zoiko */}
                                    <div
                                        className="rounded-xl
                            border-2 border-[#EB643F]
                            bg-[#FFF9F6]
                            dark:bg-slate-700
                            dark:border-[#EB643F]
                            px-5 py-4"
                                    >

                                        <h4 className="font-semibold text-[#123533] dark:text-white">
                                            Zoiko Local
                                        </h4>

                                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                                            Local numbers · Calling · Video · AI
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Why Move Now */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            Why Move Now
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[40px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                            Skype's gone. Your need for a local
                            <br />
                            number isn't.
                        </h2>

                        <p className="mt-7 max-w-3xl mx-auto text-[16px] leading-8 text-[#666666] dark:text-gray-400">
                            If you used a Skype Number for local presence,
                            business calls, or staying reachable across borders,
                            Zoiko Local is the modern path forward — and it
                            does considerably more.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {whyMoveNow.map((item) => (
                            <div
                                key={item.title}
                                className="group
                    rounded-[24px]
                    bg-white
                    dark:bg-slate-800
                    border border-[#E7DED2]
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
            {/* Skype Comparison */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="text-center max-w-4xl mx-auto">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            Skype vs Zoiko Local
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[48px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                            Everything you had —
                            <span className="text-[#123533] dark:text-white">
                                {" "}and more.
                            </span>
                        </h2>
                    </div>

                    {/* Table */}
                    <div className="mt-10 overflow-x-auto rounded-[22px] border border-[#E6DDD2] dark:border-slate-700 shadow-lg">
                        <table className="w-full min-w-[850px] border-collapse bg-white dark:bg-slate-800">
                            <thead>
                                <tr className="bg-[#0F6660] text-white">
                                    <th className="px-7 py-5 text-left text-sm font-semibold">
                                        What you need
                                    </th>

                                    <th className="px-7 py-5 text-left text-sm font-semibold">
                                        Legacy Skype Number
                                    </th>

                                    <th className="px-7 py-5 text-left text-sm font-semibold">
                                        Zoiko Local
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {skypeComparison.map((item, index) => (
                                    <tr
                                        key={item.feature}
                                        className={`${index !== skypeComparison.length - 1
                                            ? "border-b border-[#ECE6DB] dark:border-slate-700"
                                            : ""
                                            }`}
                                    >

                                        {/* Feature */}
                                        <td className="px-7 py-5 font-semibold text-[#123533] dark:text-white">
                                            {item.feature}
                                        </td>

                                        {/* Skype */}
                                        <td className="px-7 py-5 text-gray-500 dark:text-gray-400">
                                            {item.skype}
                                        </td>

                                        {/* Zoiko */}
                                        <td className="px-7 py-5 font-medium text-[#0F6660] dark:text-[#4FD1C5]">
                                            {item.zoiko}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Buttons */}
                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
                        <button
                            className="h-12 px-8 rounded-xl
                bg-[#EB643F]
                text-white
                font-semibold
                shadow-lg
                hover:bg-[#D95A37]
                transition-all duration-300"
                        >

                            Switch from Skype →
                        </button>

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
                            Get a Local Number
                        </button>
                    </div>
                </div>
            </section>
            {/* How To Move */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            How To Move
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[48px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                            Moving over is straightforward.
                        </h2>
                    </div>

                    {/* Steps */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {migrationSteps.map((step) => (
                            <div
                                key={step.title}
                                className="group
                    rounded-[24px]
                    bg-white
                    dark:bg-slate-800
                    border border-[#E7DED2]
                    dark:border-slate-700
                    p-8
                    min-h-[220px]
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#0F6660]/20
                    hover:shadow-xl"
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

                                    {step.icon}
                                </div>

                                {/* Step Title */}
                                <h3 className="mt-6 text-xl font-semibold text-[#123533] dark:text-white">
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 text-[15px] leading-7 text-[#666666] dark:text-gray-400">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Bottom Note */}
                    <p className="mt-10 max-w-3xl mx-auto text-center text-sm leading-6 text-gray-500 dark:text-gray-400">
                        If you want to bring an existing number, porting may be available
                        subject to carrier, country, number type, and eligibility rules.
                    </p>
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
                            Switching from Skype, answered.
                        </h2>
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
                                Move from your retired Skype Number to a modern local-number
                                platform — and gain routing, video, and an AI Receptionist along the way.
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

                                    Get a Local Number →
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

                                    See Pricing
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
