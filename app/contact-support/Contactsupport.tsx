import React from 'react';
import {
    FiHelpCircle,
    FiMail,
    FiUsers, FiMessageSquare,
    FiPhone,
    FiMapPin,
    FiFeather,
    FiShield,
    FiGlobe,
} from "react-icons/fi";
import Faq from '../Components/Faq';

const supportOptions = [
    {
        icon: <FiHelpCircle />,
        title: "Help Center",
        subtitle: "Self-serve answers, 24/7",
    },
    {
        icon: <FiMail />,
        title: "Email Support",
        subtitle: "For account, billing & technical help",
    },
    {
        icon: <FiUsers />,
        title: "Sales & Onboarding",
        subtitle: "For new numbers and setup",
    },
];
const supportCategories = [
    {
        icon: <FiMessageSquare />,
        title: "Help Center",
        description:
            "Browse setup guides, account help, and troubleshooting — the fastest answer for most questions.",
    },
    {
        icon: <FiPhone />,
        title: "Account & technical",
        description:
            "Help with numbers, calling, routing, video, or your workspace. Reach the support team by email or in-app.",
    },
    {
        icon: <FiMapPin />,
        title: "Number porting",
        description:
            "Questions about moving an existing number? Start with porting eligibility and support can guide you.",
    },
    {
        icon: <FiFeather />,
        title: "Sales & onboarding",
        description:
            "New to Zoiko Local or adding markets? Talk to sales for setup and the right plan.",
    },
    {
        icon: <FiShield />,
        title: "Billing",
        description:
            "Questions about invoices, plans, or payments? The billing team can help.",
    },
    {
        icon: <FiGlobe />,
        title: "Emergency calling",
        description:
            "Review emergency-calling availability and limitations for your location before relying on the service.",
    },
];
const faqItems = [
    {
        question: "How do I contact Zoiko Local support?",
        answer:
            "Contact our support team through your account portal or customer support channels. Response times may vary by plan and request type.",
    },
    {
        question: "How do I get help with my account?",
        answer:
            "Account assistance is available for billing, settings, number management, user access, and service configuration questions.",
    },
    {
        question: "Can support help me move my number?",
        answer:
            "Yes. Our team can guide you through number porting and migration options where supported and available.",
    },
    {
        question: "How do I reach sales?",
        answer:
            "Contact our sales team to discuss pricing, plans, market availability, onboarding, and business requirements.",
    },
];

export default function Contactsupport() {
    return (
        <>
            {/* Hero section */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* LEFT */}

                        <div>

                            <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                                Contact Support

                            </p>

                            <h1 className="mt-5 text-4xl md:text-[58px] leading-[1.08] font-bold text-[#123533] dark:text-white">

                                We're here to

                                <span className="text-[#EB643F] italic">

                                    {" "}help.

                                </span>

                            </h1>

                            <p className="mt-8 max-w-lg text-[17px] leading-8 text-[#666666] dark:text-gray-400">

                                Get help with your numbers, account, billing,
                                porting, or anything technical. Choose the option
                                that fits and we'll point you to the fastest route.
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

                                    Get Help →

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

                                    Visit Help Center

                                </button>

                            </div>

                        </div>

                        {/* RIGHT */}

                        <div className="flex justify-center">

                            <div className="w-full max-w-lg rounded-[24px] overflow-hidden bg-white dark:bg-slate-800 shadow-2xl border border-[#E5DDD2] dark:border-slate-700">

                                {/* Header */}

                                <div className="bg-[#0F6660] text-white px-7 py-5">

                                    <h3 className="font-medium text-sm">

                                        Support · Typical response

                                    </h3>

                                </div>

                                {/* Body */}

                                <div className="p-6 space-y-4">

                                    {supportOptions.map((item) => (

                                        <div
                                            key={item.title}
                                            className="flex items-center gap-4 rounded-xl border border-[#E7E0D4] dark:border-slate-700 bg-[#FBF9F5] dark:bg-slate-700 px-5 py-4 hover:shadow-md transition"
                                        >

                                            <div className="w-11 h-11 rounded-xl bg-white dark:bg-slate-600 flex items-center justify-center text-[#0F6660] text-lg flex-shrink-0">

                                                {item.icon}

                                            </div>

                                            <div>

                                                <h4 className="font-semibold text-[#123533] dark:text-white">

                                                    {item.title}

                                                </h4>

                                                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">

                                                    {item.subtitle}

                                                </p>

                                            </div>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* Help Center */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="text-center max-w-3xl mx-auto">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            How Can We Help?

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[50px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Choose the right route.

                        </h2>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {supportCategories.map((item) => (

                            <div
                                key={item.title}
                                className="group rounded-[24px] bg-white dark:bg-slate-800 border border-[#E6DDD2] dark:border-slate-700 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >

                                {/* Icon */}

                                <div className="w-12 h-12 rounded-xl bg-[#EDF6F2] dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-xl">

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

                    {/* Buttons */}

                    <div className="mt-14 flex flex-col sm:flex-row justify-center gap-4">

                        <button
                            className="h-12 px-9 rounded-xl bg-[#EB643F]
                text-white font-semibold shadow-lg
                hover:bg-[#D95A37]
                transition-all duration-300"
                        >

                            Contact Support →

                        </button>

                        <button
                            className="h-12 px-9 rounded-xl border border-[#0F6660]
                dark:border-slate-600
                bg-white dark:bg-slate-800
                text-[#123533] dark:text-white
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
            {/* FAQ section */}
            <Faq
                heading="QUESTIONS"
                subHeading="Getting help, answered."
                items={faqItems}
            />
            {/* Final CTA Section */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div
                        className="relative overflow-hidden rounded-[32px] px-8 py-16 md:px-16 md:py-20 text-center text-white"
                        style={{
                            background:
                                "radial-gradient(circle at top right, rgba(20,135,120,0.28), transparent 38%), linear-gradient(135deg,#0F6660 0%, #083D3A 100%)",
                        }}
                    >

                        {/* Decorative Background */}

                        <div className="absolute inset-0 pointer-events-none">

                            <div className="absolute -top-16 right-0 w-80 h-80 rounded-full bg-white/5 blur-[110px]" />

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

                            <p className="mt-7 text-[16px] leading-8 text-white/75 max-w-2xl mx-auto">

                                However you need help — numbers, account, billing,
                                porting, or setup — we'll get you to the right place.

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

                                    Contact Support →

                                </button>

                                {/* Secondary */}

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

                                    Visit Help Center

                                </button>

                                {/* Tertiary */}

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

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
