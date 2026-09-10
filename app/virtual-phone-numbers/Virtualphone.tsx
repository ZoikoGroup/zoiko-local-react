import React from 'react';
import { FiCheck, FiMapPin, FiPhone, FiMic, } from "react-icons/fi";
import Faq from '../Components/Faq';

const howItWorks = [
    {
        icon: <FiMapPin />,
        title: "Pick a local number",
        description:
            "Choose a number in the market you want to be reachable in — no physical presence needed.",
    },
    {
        icon: <FiPhone />,
        title: "Answer anywhere",
        description:
            "Calls reach your phone, computer, or team, wherever you are.",
    },
    {
        icon: <FiMic />,
        title: "Add intelligence",
        description:
            "Routing, voicemail, and an AI Receptionist handle calls when you can't.",
    },
];
const businessBenefits = [
    "Businesses wanting local presence without an office",
    "Remote and distributed teams",
    "Founders separating business from personal calls",
    "Cross-border and diaspora businesses",
];

const includedFeatures = [
    "A local number in the markets you choose",
    "Calling with routing and call history",
    "Video meetings connected to your number",
    "AI Receptionist for missed-call capture",
];
const faqItems = [
    {
        question: "What is a virtual phone number?",
        answer:
            "A virtual phone number is a business number that operates through the internet rather than a traditional phone line, allowing calls to be managed from anywhere.",
    },
    {
        question: "How does a virtual phone number work?",
        answer:
            "Calls to a virtual number can be routed to users, teams, devices, or workflows through a cloud-based communication platform instead of a physical phone line.",
    },
    {
        question: "Can I get a virtual number without an office?",
        answer:
            "Yes. Virtual numbers are commonly used by remote teams, startups, freelancers, and businesses that do not operate from a physical office.",
    },
    {
        question: "Can I use a virtual number for international business?",
        answer:
            "Yes. Businesses can use virtual numbers to establish a local presence in supported markets while managing communications from a central platform.",
    },
    {
        question: "Can I make and receive calls?",
        answer:
            "Yes. Virtual phone numbers can support inbound and outbound calling, subject to service availability, local regulations, and account configuration.",
    },
];

export default function Virtualphone() {
    return (
        <>
            {/* Hero section */}
            <section className="relative overflow-hidden bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[420px] h-[420px] rounded-full bg-[#F4A58E]/20 blur-[120px] pointer-events-none" />
                <div className="relative z-10 max-w-6xl mx-auto px-5">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}

                        <div>
                            <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                                Virtual Phone Numbers
                            </p>

                            <h1 className="mt-5 text-4xl md:text-[58px] font-bold leading-[1.08] text-[#123533] dark:text-white">
                                Virtual phone numbers
                                <br />

                                <span className="text-[#EB643F] italic">
                                    for business.
                                </span>

                            </h1>

                            <p className="mt-8 max-w-xl text-[17px] leading-8 text-[#666666] dark:text-gray-400">
                                Learn how virtual phone numbers help businesses stay
                                reachable from anywhere — then get one in minutes.
                                Sound local. Reach anywhere.
                            </p>

                            {/* Buttons */}

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
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

                                <button
                                    className="h-12 px-8 rounded-xl
                        border border-[#0F6660]
                        dark:border-slate-600
                        bg-white
                        dark:bg-slate-800
                        text-[#123533]
                        dark:text-white
                        text-sm
                        font-semibold
                        hover:bg-[#0F6660]
                        hover:text-white
                        transition-all duration-300"
                                >
                                    How it works
                                </button>
                            </div>

                            {/* Helper */}

                            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">

                                Replacing a Skype Number?
                                <span className="ml-1 text-[#EB643F] font-medium hover:underline cursor-pointer">
                                    Switch from Skype →
                                </span>
                            </p>

                            {/* Features */}

                            <div className="mt-8 flex flex-col md:flex-row gap-6">
                                <div className="flex items-center gap-2">

                                    <FiCheck className="text-[#0F6660]" />

                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        No hardware or office required
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <FiCheck className="text-[#0F6660]" />

                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        Calling, video & AI receptionist included
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-xl rounded-[24px] overflow-hidden bg-white dark:bg-slate-800 border border-[#E5DDD2] dark:border-slate-700 shadow-2xl">
                                {/* Header */}
                                <div className="bg-[#0F6660] text-white px-7 py-5">
                                    <h3 className="font-medium text-sm">
                                        In plain terms
                                    </h3>
                                </div>

                                {/* Body */}

                                <div className="p-8">

                                    <p className="text-[16px] leading-8 text-[#555555] dark:text-gray-300">
                                        A <strong className="text-[#123533] dark:text-white">
                                            virtual phone number
                                        </strong>{" "}
                                        is a phone number that isn't tied to a single
                                        physical phone line or location.

                                        Calls are delivered over the internet to any
                                        device you choose, so you can have a local
                                        number in a market without an office or SIM
                                        card there — and route, answer, and manage
                                        calls from anywhere.
                                    </p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* How It Works */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            How It Works
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[50px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                            Simple to get, powerful to use.
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {howItWorks.map((item) => (
                            <div
                                key={item.title}
                                className="group
                    rounded-[22px]
                    bg-white
                    dark:bg-slate-800
                    border border-[#E5DDD2]
                    dark:border-slate-700
                    p-8
                    transition-all duration-300
                    hover:-translate-y-1
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
                                    {item.icon}
                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-[22px] font-semibold text-[#123533] dark:text-white">
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
            {/* Who It's For */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left */}
                        <div>
                            <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                                Who It's For
                            </p>

                            <h2 className="mt-5 text-3xl md:text-[52px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                                Built for businesses that
                                <br />
                                need to be reachable.
                            </h2>

                            {/* Checklist */}

                            <div className="mt-10">

                                {businessBenefits.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-4 py-4 border-b border-[#E7DED3] dark:border-slate-700"
                                    >
                                        <FiCheck className="text-[#EB643F] text-lg flex-shrink-0" />
                                        <span className="text-[15px] text-[#4E4E4E] dark:text-gray-300">

                                            {item}

                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Button */}

                            <button
                                className="mt-10 h-12 px-8 rounded-xl
                    bg-[#EB643F]
                    text-white
                    text-sm
                    font-semibold
                    shadow-lg
                    hover:bg-[#D95A37]
                    hover:shadow-xl
                    transition-all duration-300"
                            >
                                Get a Local Number →
                            </button>
                        </div>

                        {/* Right */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-xl rounded-[24px] overflow-hidden bg-white dark:bg-slate-800 border border-[#E5DDD2] dark:border-slate-700 shadow-2xl">
                                {/* Header */}
                                <div className="bg-[#0F6660] px-7 py-5 text-white">
                                    <h3 className="text-sm font-medium">
                                        What you get
                                    </h3>
                                </div>

                                {/* Content */}

                                <div className="p-7">
                                    <div className="space-y-5">
                                        {includedFeatures.map((item) => (
                                            <div
                                                key={item}
                                                className="flex items-start gap-3"
                                            >
                                                <FiCheck className="mt-1 text-[#0F6660] flex-shrink-0" />

                                                <span className="text-[15px] leading-7 text-[#123533] dark:text-gray-300">
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
                heading="QUESTIONS"
                subHeading="Zoiko Local resources, answered."
                items={faqItems}
            />
            {/* Final CTA */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5">
                    <div
                        className="relative overflow-hidden rounded-[32px] px-8 py-16 md:px-16 md:py-20 text-center text-white"
                        style={{
                            background:
                                "radial-gradient(circle at top right, rgba(20,135,120,0.30), transparent 38%), linear-gradient(135deg,#0F6660 0%, #083D3A 100%)",
                        }}
                    >

                        {/* Decorative Glow */}

                        <div className="absolute inset-0 pointer-events-none">

                            <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-white/5 blur-[110px]" />

                            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#0F8B80]/20 blur-[120px]" />

                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">

                            {/* Heading */}

                            <h2 className="text-3xl md:text-[52px] font-bold leading-[1.1]">

                                Sound local.

                                <span className="text-[#F4A58E] italic">

                                    {" "}Reach anywhere.

                                </span>

                            </h2>

                            {/* Description */}

                            <p className="mt-7 max-w-2xl mx-auto text-[16px] leading-8 text-white/75">

                                Get a number, connect your team, and add an AI Receptionist —
                                built for businesses that need to be reachable from anywhere.

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
                        hover:shadow-xl
                        transition-all duration-300"
                                >

                                    Get a Local Number →

                                </button>

                                {/* Secondary */}

                                <button
                                    className="h-12 px-8 rounded-xl
                        border border-white/20
                        text-white
                        text-sm
                        font-semibold
                        hover:bg-white
                        hover:text-[#123533]
                        transition-all duration-300"
                                >

                                    See Pricing

                                </button>

                                {/* Third */}

                                <button
                                    className="h-12 px-8 rounded-xl
                        border border-white/20
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

                            {/* Bottom Link */}

                            <p className="mt-8 text-sm text-white/70">

                                Replacing a Skype Number?

                                <span className="ml-1 text-[#F4A58E] font-medium cursor-pointer hover:underline">

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
