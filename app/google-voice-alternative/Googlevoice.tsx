"use client";
import { useState } from 'react';
import { FiCheck, FiMapPin, FiMic, FiPlus, FiMinus } from "react-icons/fi";
import { PiPaintBrush } from 'react-icons/pi';

const fitChecklist = [
    "You need local numbers in more than one country",
    "You want an AI Receptionist to capture missed calls",
    "You're serving customers internationally, not just domestically",
    "You want calling, video, and numbers in one business workspace"
];
const idealFor = [
    "You need local numbers in more than one country",
    "You want an AI Receptionist to capture missed calls",
    "You're serving customers internationally, not just domestically",
    "You want calling, video, and numbers in one business workspace",
];
const whatYouGet = [
    "Local numbers across multiple markets",
    "Calling with routing, history, and business hours",
    "Video meetings connected to your numbers",
    "AI Receptionist for missed-call capture",
    "One workspace for your whole team",
];
const googleVoiceFeatures = [
    {
        icon: <PiPaintBrush />,
        title: "International local presence",
        description:
            "Local numbers across multiple countries and regions, managed together.",
    },
    {
        icon: <FiMapPin />,
        title: "Team routing & capture",
        description:
            "Route by team, market, or availability, with AI capture for missed calls.",
    },
    {
        icon: <FiMic />,
        title: "Calling + video + numbers",
        description:
            "One workspace instead of separate tools for each channel.",
    },
];
const Faqs = [
    {
        question: "Is Zoiko Local a Google Voice alternative?",
        answer:
            "Yes. Businesses evaluating cloud communication platforms may consider Zoiko Local as an alternative for local numbers, business calling, routing, video, and AI Receptionist capabilities. Features and availability vary by provider and plan.",
    },
    {
        question: "How is Zoiko Local different?",
        answer:
            "Zoiko Local focuses on local business presence across multiple markets, combining local numbers, calling, video meetings, routing, and AI Receptionist capabilities in one workspace.",
    },
    {
        question: "Can I get local numbers in multiple countries?",
        answer:
            "Yes. Subject to availability, regulations, carrier support, and eligibility requirements, businesses can acquire and manage local numbers across multiple supported countries and regions from a single account.",
    },
    {
        question: "Can I move from Google Voice to Zoiko Local?",
        answer:
            "In many cases, businesses may be able to migrate their communication setup and request number porting where supported. Eligibility, availability, and requirements vary by country, carrier, and number type.",
    },
];
export default function Googlevoice() {
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
                                GOOGLE VOICE ALTERNATIVE
                            </p>

                            <h1 className="mt-5 text-3xl md:text-4xl md:text-[48px] leading-[1.08] font-bold text-[#123533] dark:text-white">
                                A Google Voice alternative
                                <br />
                                <span className="text-[#EB643F] italic">
                                    built for business.
                                </span>

                            </h1>

                            <p className="mt-8 max-w-xl text-[17px] leading-8 text-[#666666] dark:text-gray-400">
                                If you need local presence across multiple markets, business-grade routing, and an AI Receptionist, Zoiko Local is worth comparing. Sound local. Reach anywhere.
                            </p>

                            {/* Buttons */}

                            <div className="mt-10 flex flex-col sm:flex-row gap-4">
                                <button
                                    className="h-12 px-8 rounded-xl
                              bg-[#EB643F]
                              text-white
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
                              font-semibold
                              hover:bg-[#0F6660]
                              hover:text-white
                              transition-all duration-300"
                                >

                                    See if Zoiko Local Fits
                                </button>
                            </div>

                            {/* Migration */}

                            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                                Also replacing a Skype Number?

                                <span className="ml-1 text-[#EB643F] font-medium cursor-pointer hover:underline">
                                    Switch from Skype →
                                </span>
                            </p>

                            {/* Bottom Features */}

                            <div className="mt-8 space-y-4">
                                <div className="flex items-center gap-3">
                                    <FiCheck className="text-[#EB643F]" />

                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        Local presence in the markets you serve
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <FiCheck className="text-[#EB643F]" />

                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        Calling, video & AI Receptionist in one place
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-xl rounded-[22px] overflow-hidden bg-white dark:bg-slate-800 border border-[#E5DDD2] dark:border-slate-700 shadow-xl">
                                {/* Header */}
                                <div className="bg-[#0F6660] text-white px-6 py-4">
                                    <h3 className="text-sm font-semibold">
                                        Is Zoiko Local right for you?
                                    </h3>
                                </div>

                                {/* Body */}

                                <div className="p-6 space-y-4">
                                    {fitChecklist.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3"
                                        >

                                            <FiCheck
                                                size={15}
                                                className="text-[#0F6660] mt-1 flex-shrink-0"
                                            />

                                            <span className="text-[15px] leading-7 text-[#123533] dark:text-gray-200">
                                                {item}
                                            </span>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* When Zoiko Local Is The Right Fit */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-5xl mx-auto text-center">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            When Zoiko Local Is The Right Fit
                        </p>

                        <h2 className="mt-5 text-2xl sm:text-3xl md:text-[40px] leading-[1.15] font-bold dark:text-white">
                            Choose Zoiko Local when you need
                            <br />
                            local presence that scales.
                        </h2>

                        <p className="mt-7 max-w-3xl mx-auto text-[16px] leading-8 text-[#666666] dark:text-gray-400">
                           Google Voice is a capable product. Zoiko Local is built for a specific need: businesses that want a trusted local presence across markets, with calling, video, and an AI Receptionist in one workspace. Here's where it fits best.
                        </p>
                    </div>

                    {/* Content */}

                    <div className="mt-16 grid lg:grid-cols-2 gap-14 items-start">

                        {/* LEFT */}
                        <div>
                            <div className="space-y-4">
                                {idealFor.map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-start gap-3 pb-4 border-b border-[#E7DED2] dark:border-slate-700"
                                    >
                                        <FiCheck
                                            size={16}
                                            className="text-[#EB643F] mt-1 flex-shrink-0"
                                        />

                                        <p className="text-[15px] leading-7 dark:text-gray-300">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <button
                                className="mt-10 h-12 px-8 rounded-xl
                                bg-[#EB643F]
                                text-white
                                font-semibold
                                shadow-lg
                                hover:bg-[#D95A37]
                                transition-all duration-300"
                            >

                                Get a Local Number →
                            </button>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-center">

                            <div className="w-full max-w-xl rounded-[22px] overflow-hidden bg-white dark:bg-slate-800 border border-[#E5DDD2] dark:border-slate-700 shadow-xl">
                                {/* Header */}
                                <div className="bg-[#0F6660] text-white px-6 py-4">
                                    <h3 className="text-sm font-semibold">
                                        What you get
                                    </h3>
                                </div>

                                {/* Body */}

                                <div className="p-6 space-y-4">
                                    {whatYouGet.map((item) => (
                                        <div
                                            key={item}
                                            className="flex items-start gap-3"
                                        >

                                            <FiCheck
                                                size={15}
                                                className="text-[#0F6660] mt-1 flex-shrink-0"
                                            />

                                            <span className="text-[15px] leading-7 text-[#123533] dark:text-gray-200">
                                                {item}
                                            </span>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Features */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            Why Businesses Choose Zoiko Local
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[50px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                            Built around local presence and
                            <br />
                            reachability.
                        </h2>
                    </div>

                    {/* Cards */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
                        {googleVoiceFeatures.map((feature) => (
                            <div
                                key={feature.title}
                                className="group rounded-[24px]
                    bg-white dark:bg-slate-800
                    border border-[#E7DED2] dark:border-slate-700
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
                                    {feature.icon}
                                </div>

                                {/* Title */}
                                <h3 className="mt-6 text-xl font-semibold text-[#123533] dark:text-white">
                                    {feature.title}
                                </h3>

                                {/* Description */}
                                <p className="mt-4 text-[15px] leading-7 text-[#666666] dark:text-gray-400">
                                    {feature.description}
                                </p>
                            </div>

                        ))}
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
                            Google Voice vs Zoiko Local, answered.
                        </h2>
                    </div>

                    {/* Notice */}

                    <div className="mt-10 rounded-xl border-l-4 border-[#EB643F] border border-[#EB643F] dark:border-[#EB643F] bg-white dark:bg-slate-800 px-6 py-5">
                        <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">
                            Google Voice and its logo are trademarks of their respective owner. Zoiko Local is not affiliated with, endorsed by, or sponsored by Google Voice. Comparisons reflect general product positioning; review each provider's current features and terms before deciding.
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
                                See whether Zoiko Local is the right fit for your
                                business — local presence, calling, video,
                                and an AI Receptionist in one workspace.
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
