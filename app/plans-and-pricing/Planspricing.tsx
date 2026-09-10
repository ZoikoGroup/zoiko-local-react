import React from 'react'
import {
    FiArrowUpRight,
    FiGlobe,
    FiMic, FiUser, FiMapPin,
    FiPhone, FiCheck, FiVideo,
} from "react-icons/fi";
import Faq from '../Components/Faq';

const pricingHighlights = [
    {
        icon: <FiArrowUpRight />,
        title: "No legacy Skype\nlock-in",
    },
    {
        icon: <FiGlobe />,
        title: "Country-aware\nnumber pricing",
    },
    {
        icon: <FiMic />,
        title: "Add AI when ready",
    },
    {
        icon: <FiUser />,
        title: "Business support\navailable",
    },
];
const businessNeeds = [
    {
        icon: <FiMapPin />,
        title: "Local presence",
        description:
            "A professional number where your customers are.",
    },
    {
        icon: <FiPhone />,
        title: "Team calling",
        description:
            "Professional call flows and routing for a team.",
    },
    {
        icon: <FiMic />,
        title: "AI call handling",
        description:
            "Capture missed and after-hours calls.",
    },
    {
        icon: <FiGlobe />,
        title: "Multi-country",
        description:
            "Coverage and control across markets.",
    },
];
const corePlans = [
    {
        title: "Starter",
        subtitle: "Solo professionals, new businesses and small teams.",
        price: "catalog",
        pricePrefix: "from",
        note:
            "per month + usage, taxes and number charges where applicable.",
        button: "Start Starter",
        primary: false,
        popular: false,
        features: [
            "Local number access",
            "Essential calling",
            "Voicemail & summaries",
            "Basic account controls",
            "Add video or AI when ready",
        ],
    },
    {
        title: "Business",
        subtitle:
            "Growing teams that need reliable customer communication.",
        price: "catalog",
        pricePrefix: "from",
        note:
            "per month + selected numbers, usage and add-ons.",
        button: "Choose Business",
        primary: true,
        popular: true,
        features: [
            "Everything in Starter",
            "Team controls & roles",
            "Call routing",
            "Video collaboration",
            "Reporting & business support",
            "Optional AI Receptionist",
        ],
    },
    {
        title: "Advanced / Scale",
        subtitle:
            "Multi-location, high-volume and multi-country businesses.",
        price: "Custom quote",
        pricePrefix: "",
        note:
            "based on geography, usage, AI, compliance and support needs.",
        button: "Talk to Sales",
        primary: false,
        popular: false,
        features: [
            "Advanced routing",
            "Higher volume",
            "Multi-number management",
            "AI Receptionist options",
            "Sales onboarding",
            "Custom support",
        ],
    },
];
const capabilityPricing = [
    {
        icon: <FiMapPin />,
        title: "Local number pricing",
        description:
            "Varies by country, number type, availability, verification and porting eligibility. We show clear 'from' ranges and a country selector, not one misleading global price.",
        button: "Search Available Numbers",
        primary: false,
    },
    {
        icon: <FiPhone />,
        title: "Calling pricing",
        description:
            "Choose pay-as-you-go, bundled minutes or a custom calling package. Destination rates and fair-use principles are shown by country.",
        button: "View Calling Options",
        primary: false,
    },
    {
        icon: <FiVideo />,
        title: "Video pricing",
        description:
            "Part of the same workspace: client meetings, team sessions, consultations and support calls. Seats, recording, storage and admin controls are plan variables.",
        button: "Add Video to My Plan",
        primary: false,
    },
    {
        icon: <FiMic />,
        title: "AI Receptionist pricing",
        description:
            "When missed calls start costing revenue, add a smarter front desk. Pricing may depend on call volume, answering minutes, routing rules, summaries, languages and transcription. Starter, Business and Advanced AI packages available.",
        button: "Add AI Receptionist",
        primary: true,
    },
];
const bundlePlans = [
    {
        title: "Local Presence Pack",
        description:
            "Replace a basic Skype number or add a market presence.",
        features: [
            "One or more local numbers",
            "Inbound calling",
            "Essential controls",
        ],
        button: "Search Numbers",
    },
    {
        title: "Business Communication Pack",
        description:
            "Standardize calls and meetings across the team.",
        features: [
            "Numbers + team calling",
            "Routing + video",
            "Admin & support",
        ],
        button: "Build My Plan",
    },
    {
        title: "AI Front Desk Pack",
        description:
            "Stop losing revenue from missed calls.",
        features: [
            "Numbers + calling",
            "AI Receptionist",
            "After-hours capture",
        ],
        button: "Add AI Front Desk",
    },
    {
        title: "Global Operations Pack",
        description:
            "Multi-country or regulated operations.",
        features: [
            "Multi-country coverage",
            "Custom routing",
            "Compliance review",
        ],
        button: "Contact Sales",
    },
];
const estimateFields = {
    market: "United States",
    numberType: "Local",
    quantity: "1",
    users: "1",
    calling: "Light",
    ai: "Off",
    migration: "New customer",
};
const comparisonData = [
    {
        feature: "Local numbers",
        starter: "Single / small setup",
        business: "Multiple by team or location",
        advanced: "Multi-location & multi-country",
        custom: "Custom procurement & migration",
    },
    {
        feature: "Calling",
        starter: "Essential in/out",
        business: "Business packs & routing",
        advanced: "Higher-volume & advanced routing",
        custom: "Custom usage, rates & model",
    },
    {
        feature: "Video",
        starter: "Optional add-on",
        business: "Team video",
        advanced: "Advanced controls where available",
        custom: "Custom security & recording policy",
    },
    {
        feature: "AI Receptionist",
        starter: "Optional entry",
        business: "Recommended package",
        advanced: "Advanced routing & summaries",
        custom: "Custom scripts & workflow review",
    },
    {
        feature: "Admin controls",
        starter: "Basic settings",
        business: "Team management",
        advanced: "Advanced reporting",
        custom: "SSO, invoicing & governance",
    },
    {
        feature: "Support",
        starter: "Standard help",
        business: "Business support",
        advanced: "Priority support",
        custom: "Named commercial support",
    },
];
const faqItems = [
    {
        question: "Can I change plans later?",
        answer:
            "Yes. You can upgrade or downgrade your plan at any time from your workspace settings. Changes take effect at the start of the next billing cycle, and any unused credit is carried forward.",
    },
    {
        question: "How does cancellation work?",
        answer:
            "Month-to-month plans can be cancelled at any time. Annual plans can be cancelled before renewal. Your numbers and data remain accessible until the end of your paid period.",
    },
    {
        question: "Are taxes and fees included?",
        answer:
            "Plan prices are shown exclusive of applicable taxes, regulatory fees, and surcharges. The exact amounts vary by market, number type, and carrier. Final totals are shown at checkout before any charge is made.",
    },
    {
        question: "How is number pricing set?",
        answer:
            "Number pricing depends on the market, number type (local, toll-free, mobile), and any verification or porting requirements. Prices are shown per number per month and confirmed before activation.",
    },
    {
        question: "How are calling rates calculated?",
        answer:
            "Calling rates are per-minute and vary by origin, destination, and call type (inbound/outbound). Business plans include calling packs that reduce per-minute rates. Full rate cards are available in your workspace.",
    },
    {
        question: "How is AI Receptionist priced?",
        answer:
            "AI Receptionist is an add-on priced per handled interaction or as a monthly package depending on your plan. Business and Advanced plans include recommended packages. Enterprise pricing is negotiated separately.",
    },
    {
        question: "Which currency will I be charged in?",
        answer:
            "Billing is in USD by default. Select markets may support local currency billing at checkout. Enterprise customers can request invoice billing in their preferred currency through their commercial specialist.",
    },
    {
        question: "Is migrating from Skype an extra cost?",
        answer:
            "Zoiko Local has a dedicated Skype migration path. Number porting fees may apply depending on your country and carrier. Setup assistance is included in Business plans and above at no extra charge.",
    },
];
export default function Planspricing() {
    return (
        <>
            {/* HERO section */}
            <section className="relative overflow-hidden bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">

                {/* Background Glow */}

                <div className="absolute inset-0 pointer-events-none">

                    <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#EB643F]/10 blur-[130px]" />

                </div>

                <div className="relative max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Pricing for the Modern Local Business Communication Stack

                        </p>

                        <h1 className="mt-6 text-4xl md:text-[64px] font-bold leading-[1.12] text-[#123533] dark:text-white">

                            Pricing that fits the way your

                            <br />

                            business

                            <span className="text-[#EB643F] italic">

                                {" "}communicates

                            </span>

                        </h1>

                        <p className="mt-8 max-w-3xl mx-auto text-[17px] leading-8 text-[#666] dark:text-gray-400">

                            Choose local numbers, calling, video and AI Receptionist
                            in one modern workspace. Start simple, add capability
                            as you grow, and get a clear quote for
                            multi-country or high-volume requirements.

                        </p>

                    </div>

                    {/* CTA Buttons */}

                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

                        <button className="h-12 px-8 rounded-full bg-[#EB643F] text-white font-semibold shadow-lg hover:bg-[#D95A37] transition">

                            Start Free

                        </button>

                        <button className="h-12 px-8 rounded-full bg-white dark:bg-slate-800 border border-[#D9D2C8] dark:border-slate-700 text-[#123533] dark:text-white font-semibold hover:border-[#0F6660] hover:text-[#0F6660] dark:hover:text-[#0F6660] transition">

                            Build My Estimate

                        </button>

                        <button className="h-12 px-8 rounded-full bg-white dark:bg-slate-800 border border-[#D9D2C8] dark:border-slate-700 text-[#123533] dark:text-white font-semibold hover:border-[#0F6660] hover:text-[#0F6660] dark:hover:text-[#0F6660] transition">

                            Talk to Sales

                        </button>

                    </div>

                    {/* Feature Cards */}

                    <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-5">

                        {pricingHighlights.map((item) => (

                            <div
                                key={item.title}
                                className="rounded-2xl border border-[#E4DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                <div className="w-11 h-11 rounded-xl bg-[#EEF5F2] dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-xl flex-shrink-0">

                                    {item.icon}

                                </div>

                                <p className="whitespace-pre-line text-[15px] font-semibold leading-6 text-[#123533] dark:text-white">

                                    {item.title}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* Guided Plan Selector */}
            <section className="bg-[#FFFFFF] dark:bg-slate-900 py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.32em] text-[10px] font-semibold text-[#EB643F]">

                            Guided Plan Selector

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[52px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Not sure where to start?

                            <span className="text-[#EB643F] italic">

                                {" "}Choose

                                <br className="hidden md:block" />

                                by business need.

                            </span>

                        </h2>

                        <p className="mt-8 max-w-3xl mx-auto text-[16px] leading-8 text-[#666] dark:text-gray-400">

                            Find the right plan based on whether you need local presence,

                            team calling, video meetings, AI call handling,

                            or multi-country operations.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                        {businessNeeds.map((item) => (

                            <div
                                key={item.title}
                                className="group rounded-3xl border border-[#E5D9C9] dark:border-slate-700 bg-[#FBF0DE] dark:bg-slate-800 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-[#0F6660]/30 cursor-pointer"
                            >

                                {/* Icon */}

                                <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-xl shadow-sm">

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-[19px] font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-3 text-[14px] leading-6 text-[#666] dark:text-gray-400">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                    {/* CTA */}

                    <div className="mt-14 flex justify-center">

                        <button
                            className="h-12 px-9 rounded-full bg-[#EB643F] text-white font-semibold shadow-lg hover:bg-[#D95A37] transition-all duration-300"
                        >

                            Help Me Choose

                        </button>

                    </div>

                </div>

            </section>
            {/* Core Plans */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Core Plans

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[52px] leading-[1.12] font-bold text-[#123533] dark:text-white">

                            Start with the right base plan.

                            <span className="text-[#EB643F] italic">

                                {" "}Add

                                <br className="hidden md:block" />

                                the rest as needed.

                            </span>

                        </h2>

                        <p className="mt-7 max-w-3xl mx-auto text-[16px] leading-8 text-[#666] dark:text-gray-400">

                            Pricing values are rendered from the approved billing catalog
                            and confirmed at checkout by market, currency and number type.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {corePlans.map((plan) => (

                            <div
                                key={plan.title}
                                className={`relative rounded-[28px] bg-white dark:bg-slate-800 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col
                    ${plan.popular
                                        ? "border-[#EB643F] shadow-lg"
                                        : "border-[#E5DED3] dark:border-slate-700"
                                    }`}
                            >

                                {plan.popular && (

                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">

                                        <span className="bg-[#EB643F] text-white text-[10px] font-semibold px-4 py-1 rounded-full shadow">

                                            Most Popular

                                        </span>

                                    </div>

                                )}

                                <div className="p-8 flex flex-col h-full">

                                    {/* Title */}

                                    <h3 className="text-[28px] font-bold text-[#123533] dark:text-white">

                                        {plan.title}

                                    </h3>

                                    <p className="mt-2 text-sm leading-6 text-[#666] dark:text-gray-400 min-h-[48px]">

                                        {plan.subtitle}

                                    </p>

                                    {/* Price */}

                                    <div className="mt-8">

                                        {plan.pricePrefix && (

                                            <span className="block text-sm text-gray-500">

                                                {plan.pricePrefix}

                                            </span>

                                        )}

                                        <h4 className="text-[42px] font-bold text-[#123533] dark:text-white leading-none">

                                            {plan.price}

                                        </h4>

                                        <p className="mt-3 text-xs leading-5 text-[#777] dark:text-gray-400">

                                            {plan.note}

                                        </p>

                                    </div>

                                    {/* Features */}

                                    <div className="mt-8 space-y-4 flex-1">

                                        {plan.features.map((feature) => (

                                            <div
                                                key={feature}
                                                className="flex items-start gap-3"
                                            >

                                                <FiCheck className="text-[#0F6660] mt-1 flex-shrink-0" />

                                                <span className="text-[15px] text-[#123533] dark:text-gray-300">

                                                    {feature}

                                                </span>

                                            </div>

                                        ))}

                                    </div>

                                    {/* Button */}

                                    <button
                                        className={`mt-10 h-12 rounded-full font-semibold transition-all duration-300
                            ${plan.primary
                                                ? "bg-[#EB643F] text-white shadow-lg hover:bg-[#D95A37]"
                                                : "border border-[#D9D2C8] dark:border-slate-600 bg-white dark:bg-slate-700 text-[#123533] dark:text-white hover:border-[#0F6660] hover:text-[#0F6660]"
                                            }`}
                                    >

                                        {plan.button}

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* Pricing by Capability */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Priced by Capability

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[52px] leading-[1.12] font-bold text-[#123533] dark:text-white">

                            Pay for the parts of the stack

                            <span className="text-[#EB643F] italic">

                                <br className="hidden md:block" />

                                you actually use.

                            </span>

                        </h2>

                        <p className="mt-7 max-w-3xl mx-auto text-[16px] leading-8 text-[#666] dark:text-gray-400">

                            Each capability is priced transparently and varies by
                            market where regulation applies.

                        </p>

                    </div>

                    {/* Pricing Rows */}

                    <div className="mt-16 space-y-5">

                        {capabilityPricing.map((item) => (

                            <div
                                key={item.title}
                                className="rounded-[24px] border border-[#E6DCCF] dark:border-slate-700 bg-[#FBF0DE] dark:bg-slate-800 px-6 md:px-8 py-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 transition-all duration-300 hover:shadow-lg"
                            >

                                {/* Left */}

                                <div className="flex items-start gap-5 flex-1">

                                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-xl shadow-sm flex-shrink-0">

                                        {item.icon}

                                    </div>

                                    <div>

                                        <h3 className="text-[22px] font-semibold text-[#123533] dark:text-white">

                                            {item.title}

                                        </h3>

                                        <p className="mt-2 text-[15px] leading-7 text-[#666] dark:text-gray-400">

                                            {item.description}

                                        </p>

                                    </div>

                                </div>

                                {/* Button */}

                                <div className="lg:ml-10 flex-shrink-0">

                                    <button
                                        className={`h-11 px-7 rounded-full font-semibold text-sm transition-all duration-300 whitespace-nowrap
                            ${item.primary
                                                ? "bg-[#EB643F] text-white shadow-lg hover:bg-[#D95A37]"
                                                : "bg-white dark:bg-slate-700 border border-[#D9D2C8] dark:border-slate-600 text-[#123533] dark:text-white hover:border-[#0F6660] hover:text-[#0F6660]"
                                            }`}
                                    >

                                        {item.button}

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* Bundle Plans */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Bundle Savings

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[42px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Bundle the stack.

                            <span className="text-[#EB643F] italic">

                                Reduce

                                <br className="" />

                                complexity.

                            </span>

                        </h2>

                        <p className="mt-7 max-w-3xl mx-auto text-[16px] leading-8 text-[#666] dark:text-gray-400">

                            Bundles are easier procurement paths, not discount gimmicks.
                            Preferred package pricing applies where approved.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                        {bundlePlans.map((plan) => (

                            <div
                                key={plan.title}
                                className="rounded-[26px] bg-white dark:bg-slate-800 border border-[#E6DDD2] dark:border-slate-700 p-7 flex flex-col hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                            >

                                <h3 className="text-xl font-bold text-[#123533] dark:text-white">

                                    {plan.title}

                                </h3>

                                <p className="mt-3 text-[14px] leading-6 text-[#666] dark:text-gray-400 min-h-[60px]">

                                    {plan.description}

                                </p>

                                <div className="mt-6 space-y-3 flex-1">

                                    {plan.features.map((feature) => (

                                        <div
                                            key={feature}
                                            className="flex items-start gap-3"
                                        >

                                            <FiCheck className="text-[#0F6660] mt-1" />

                                            <span className="text-[14px] text-[#123533] dark:text-gray-300">

                                                {feature}

                                            </span>

                                        </div>

                                    ))}

                                </div>

                                <button className="mt-8 h-11 rounded-full border border-[#D9D2C8] dark:border-slate-600 bg-white dark:bg-slate-700 text-[#123533] dark:text-white font-semibold hover:border-[#0F6660] hover:text-[#0F6660] transition">

                                    {plan.button}

                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* Skype Migration Pricing */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 pb-24">

                <div className="max-w-5xl mx-auto px-5 text-center">

                    <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                        Skype Migration Pricing

                    </p>

                    <h2 className="mt-5 text-3xl md:text-[52px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                        Moving from Skype?

                        <span className="text-[#EB643F] italic">

                            Keep the

                            <br className="hidden md:block" />

                            buying decision simple.

                        </span>

                    </h2>

                    <p className="mt-7 max-w-3xl mx-auto text-[16px] leading-8 text-[#666] dark:text-gray-400">

                        Continuity, clarity and a clear path for numbers, calling,
                        teams and AI upgrades — with modern routing and video beyond
                        legacy calling.

                    </p>

                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

                        <button className="h-12 px-9 rounded-full bg-[#EB643F] text-white font-semibold shadow-lg hover:bg-[#D95A37] transition">

                            Switch from Skype

                        </button>

                        <button className="h-12 px-9 rounded-full border border-[#D9D2C8] dark:border-slate-600 bg-white dark:bg-slate-800 text-[#123533] dark:text-white font-semibold hover:border-[#0F6660] hover:text-[#0F6660] transition">

                            Request a migration review

                        </button>

                    </div>

                </div>

            </section>
            {/* Estimate Pricing */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            Pricing Estimator
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[52px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Build a working estimate

                            <span className="text-[#EB643F] italic">

                                {" "}before

                                <br className="hidden md:block" />

                                you buy.

                            </span>

                        </h2>

                        <p className="mt-7 max-w-3xl mx-auto text-[16px] leading-8 text-[#666] dark:text-gray-400">

                            Tell us about your needs and we'll recommend a configuration.
                            Because taxes, verification, porting and usage vary,
                            this is indicative — not a final quote.

                        </p>

                    </div>

                    {/* Estimator Card */}

                    <div className="mt-12 overflow-hidden rounded-[30px] bg-white dark:bg-slate-800 shadow-2xl border border-[#E5DDD2] dark:border-slate-700">

                        <div className="grid lg:grid-cols-[1.45fr_1fr]">

                            {/* LEFT */}
                            <div className="p-6 md:p-8">

                                <div className="grid sm:grid-cols-2 gap-6">

                                    {/* Country */}

                                    <div>

                                        <label className="block mb-2 text-xs font-semibold text-[#123533] dark:text-white">

                                            Country / market

                                        </label>

                                        <select className="w-full h-12 rounded-xl border border-[#DDD5CB] bg-white dark:bg-slate-700 dark:border-slate-600 px-4 text-sm">

                                            <option>United States</option>

                                            <option>United Kingdom</option>

                                            <option>Canada</option>

                                        </select>

                                    </div>

                                    {/* Number Type */}

                                    <div>

                                        <label className="block mb-2 text-xs font-semibold text-[#123533] dark:text-white">

                                            Number type

                                        </label>

                                        <select className="w-full h-12 rounded-xl border border-[#DDD5CB] bg-white dark:bg-slate-700 dark:border-slate-600 px-4 text-sm">

                                            <option>Local</option>

                                            <option>Mobile</option>

                                            <option>Toll Free</option>

                                        </select>

                                    </div>

                                    {/* Quantity */}

                                    <div>

                                        <label className="block mb-2 text-xs font-semibold text-[#123533] dark:text-white">

                                            Number quantity

                                        </label>

                                        <input
                                            defaultValue="1"
                                            className="w-full h-12 rounded-xl border border-[#DDD5CB] bg-white dark:bg-slate-700 dark:border-slate-600 px-4 text-sm"
                                        />

                                    </div>

                                    {/* Users */}

                                    <div>

                                        <label className="block mb-2 text-xs font-semibold text-[#123533] dark:text-white">

                                            Users / seats

                                        </label>

                                        <input
                                            defaultValue="1"
                                            className="w-full h-12 rounded-xl border border-[#DDD5CB] bg-white dark:bg-slate-700 dark:border-slate-600 px-4 text-sm"
                                        />

                                    </div>

                                    {/* Calling */}

                                    <div>

                                        <label className="block mb-2 text-xs font-semibold text-[#123533] dark:text-white">

                                            Calling usage

                                        </label>

                                        <select className="w-full h-12 rounded-xl border border-[#DDD5CB] bg-white dark:bg-slate-700 dark:border-slate-600 px-4 text-sm">

                                            <option>Light</option>

                                            <option>Medium</option>

                                            <option>Heavy</option>

                                        </select>

                                    </div>

                                    {/* AI */}

                                    <div>

                                        <label className="block mb-2 text-xs font-semibold text-[#123533] dark:text-white">

                                            AI Receptionist

                                        </label>

                                        <select className="w-full h-12 rounded-xl border border-[#DDD5CB] bg-white dark:bg-slate-700 dark:border-slate-600 px-4 text-sm">

                                            <option>Off</option>

                                            <option>Starter</option>

                                            <option>Business</option>

                                        </select>

                                    </div>

                                </div>

                                {/* Migration */}

                                <div className="mt-6">

                                    <label className="block mb-2 text-xs font-semibold text-[#123533] dark:text-white">

                                        Migration

                                    </label>

                                    <select className="w-full h-12 rounded-xl border border-[#DDD5CB] bg-white dark:bg-slate-700 dark:border-slate-600 px-4 text-sm">

                                        <option>New customer</option>

                                        <option>Switching from Skype</option>

                                    </select>

                                </div>

                            </div>

                            {/* RIGHT */}
                            <div className="bg-[#0F4B46] text-white p-6 md:p-8">

                                <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#F5B19A]">

                                    Your Estimate

                                </p>

                                <div className="mt-6 space-y-4 text-sm">

                                    {[
                                        ["Market", "United States"],
                                        ["Number", "Local × 1"],
                                        ["Team", "1 users"],
                                        ["Calling", "Light"],
                                        ["AI Receptionist", "Off"],
                                        ["Path", "New customer"],
                                    ].map(([label, value]) => (

                                        <div
                                            key={label}
                                            className="flex justify-between border-b border-white/10 pb-3"
                                        >

                                            <span className="text-white/70">

                                                {label}

                                            </span>

                                            <span className="font-semibold">

                                                {value}

                                            </span>

                                        </div>

                                    ))}

                                </div>

                                {/* Recommended */}

                                <div className="mt-6 rounded-2xl bg-white/10 border border-white/10 p-4">

                                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">

                                        Recommended Plan

                                    </p>

                                    <h3 className="mt-2 text-2xl font-bold">

                                        Starter

                                    </h3>

                                </div>

                                <p className="mt-4 text-xs leading-6 text-white/65">
                                    Indicative only. Taxes, pricing depend on market,
                                    number verification, porting and usage and are
                                    confirmed at checkout or with Sales.
                                </p>

                                <button className="mt-4 w-full h-12 rounded-full bg-white text-[#123533] font-semibold hover:bg-gray-100 transition">
                                    Talk to Sales with This Estimate
                                </button>

                            </div>
                        </div>

                    </div>

                </div>

            </section>
            {/* Comparison Table */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Compare Plans

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[52px] font-bold leading-[1.12] text-[#123533] dark:text-white">

                            Compare what matters —

                            <span className="text-[#EB643F] italic">

                                {" "}not filler

                                <br className="hidden md:block" />

                                features.

                            </span>

                        </h2>

                        <p className="mt-7 max-w-3xl mx-auto text-[16px] leading-8 text-[#666] dark:text-gray-400">

                            A decision-grade view across Starter, Business,
                            Advanced and Custom.

                        </p>

                    </div>

                    {/* Table */}

                    <div className="mt-16 overflow-x-auto rounded-[24px] shadow-xl border border-[#E4DDD2] dark:border-slate-700">

                        <table className="min-w-[950px] w-full border-collapse bg-white dark:bg-slate-800">

                            {/* Header */}

                            <thead>

                                <tr className="bg-[#0F4B46] text-white">

                                    <th className="px-6 py-5 text-left text-sm font-semibold">

                                        Feature group

                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-semibold">

                                        Starter

                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-semibold">

                                        Business

                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-semibold">

                                        Advanced / Scale

                                    </th>

                                    <th className="px-6 py-5 text-left text-sm font-semibold">

                                        Custom

                                    </th>

                                </tr>

                            </thead>

                            {/* Body */}

                            <tbody>

                                {comparisonData.map((row, index) => (

                                    <tr
                                        key={row.feature}
                                        className={`${index !== comparisonData.length - 1
                                            ? "border-b border-[#ECE4D8] dark:border-slate-700"
                                            : ""
                                            }`}
                                    >

                                        {/* Feature */}

                                        <td className="px-6 py-5 font-semibold text-[#123533] dark:text-white border-r border-[#ECE4D8] dark:border-slate-700 whitespace-nowrap">

                                            {row.feature}

                                        </td>

                                        {/* Starter */}

                                        <td className="px-6 py-5 text-sm leading-6 text-[#666] dark:text-gray-300 border-r border-[#ECE4D8] dark:border-slate-700">

                                            {row.starter}

                                        </td>

                                        {/* Business */}

                                        <td className="px-6 py-5 text-sm leading-6 text-[#666] dark:text-gray-300 border-r border-[#ECE4D8] dark:border-slate-700">

                                            {row.business}

                                        </td>

                                        {/* Advanced */}

                                        <td className="px-6 py-5 text-sm leading-6 font-medium text-[#123533] dark:text-white border-r border-[#ECE4D8] dark:border-slate-700">

                                            {row.advanced}

                                        </td>

                                        {/* Custom */}

                                        <td className="px-6 py-5 text-sm leading-6 text-[#666] dark:text-gray-300">

                                            {row.custom}

                                        </td>

                                    </tr>

                                ))}

                            </tbody>

                        </table>

                    </div>

                    {/* CTA */}

                    <div className="mt-12 flex justify-center">

                        <button className="h-12 px-9 rounded-full bg-[#EB643F] text-white font-semibold shadow-lg hover:bg-[#D95A37] transition-all duration-300">

                            Choose My Plan

                        </button>

                    </div>

                </div>

            </section>
            {/* Business & Enterprise */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-5xl mx-auto px-5 text-center">

                    {/* Section Label */}

                    <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                        Business & Enterprise

                    </p>

                    {/* Heading */}

                    <h2 className="mt-5 text-3xl md:text-[52px] font-bold leading-[1.12] text-[#123533] dark:text-white">

                        Complex needs deserve a clear

                        <br />

                        path to a

                        <span className="text-[#EB643F] italic">

                            {" "}commercial specialist.

                        </span>

                    </h2>

                    {/* Description */}

                    <p className="mt-8 max-w-3xl mx-auto text-[16px] leading-8 text-[#666666] dark:text-gray-400">

                        For multi-country numbers, call centers, regulated workflows,
                        high-volume calling, custom AI scripts, private onboarding,
                        SSO, procurement or invoicing.

                    </p>

                    {/* CTA */}

                    <div className="mt-12">

                        <button
                            className="inline-flex items-center justify-center h-12 px-10 rounded-full
                bg-[#EB643F] text-white text-sm font-semibold shadow-lg
                hover:bg-[#D95A37] hover:shadow-xl transition-all duration-300"
                        >

                            Contact Sales

                        </button>

                    </div>

                </div>

            </section>
            {/* FAQ */}
            <Faq
                heading="Pricing FAQ"
                subHeading="Clear answers before checkout."
                items={faqItems}
            />
            {/* Final CTA */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5">

                    <div
                        className="relative overflow-hidden rounded-[32px] px-8 py-10 md:px-12 md:py-12 text-center text-white"
                        style={{
                            background:
                                "radial-gradient(circle at top right, rgba(16,120,108,0.35), transparent 35%), linear-gradient(135deg,#0F6660 0%, #063A38 100%)",
                        }}
                    >

                        {/* Decorative Glow */}

                        <div className="absolute inset-0 pointer-events-none">

                            <div className="absolute -top-20 right-0 w-72 h-72 bg-white/5 rounded-full blur-[90px]" />

                            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#0F8B80]/20 rounded-full blur-[120px]" />

                        </div>

                        <div className="relative z-10">

                            {/* Label */}

                            <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#F4A58E]">

                                Ready When You Are

                            </p>

                            {/* Heading */}

                            <h2 className="mt-6 text-3xl md:text-[54px] font-bold leading-[1.08] max-w-4xl mx-auto">

                                Start simple. Build the

                                <br />

                                communication stack

                                <br />

                                your business needs.

                            </h2>

                            {/* Description */}

                            <p className="mt-8 max-w-2xl mx-auto text-[16px] leading-8 text-white/75">

                                Choose a plan, build an estimate, or talk to Zoiko Local
                                about a multi-country or high-volume deployment.

                            </p>

                            {/* CTA Buttons */}

                            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">

                                {/* Primary */}

                                <button
                                    className="h-12 px-8 rounded-full bg-[#EB643F] text-white text-sm font-semibold
                        shadow-lg hover:bg-[#D95A37] hover:shadow-xl
                        transition-all duration-300"
                                >

                                    Start Free

                                </button>

                                {/* Secondary */}

                                <button
                                    className="h-12 px-8 rounded-full bg-white text-[#123533]
                        text-sm font-semibold hover:bg-gray-100
                        transition-all duration-300"
                                >

                                    Build Estimate

                                </button>

                                {/* Outline */}

                                <button
                                    className="h-12 px-8 rounded-full border border-white/25
                        text-white text-sm font-semibold
                        hover:bg-white hover:text-[#123533]
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
