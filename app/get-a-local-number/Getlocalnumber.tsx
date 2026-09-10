import React from 'react';
import {
    FiSearch,
    FiCheck,
    FiInfo, FiMapPin,
    FiSend,
    FiSmartphone,
    FiExternalLink,
    FiShield,
    FiMonitor,
    FiUsers,
    FiGlobe,
    FiMic, FiUser,
    FiHome, FiSquare,
    FiCalendar, FiUserCheck,
    FiLock,
    FiActivity,
    FiDatabase,
    FiTrendingUp,
    FiShoppingCart,
    FiBriefcase,
    FiRefreshCw, FiPlus,
    FiEdit3,
    FiPhoneForwarded,
} from "react-icons/fi";
import Faq from '../Components/Faq';

const steps = [
    "Search",
    "Choose",
    "Verify",
    "Pay",
    "Set Up",
];

const availableNumbers = [
    {
        number: "+1 (212) 555-0148",
        country: "US",
        location: "New York · Manhattan · Local",
        tags: [
            "Recommended",
            "Works with AI Receptionist",
            "Easy to remember",
        ],
        secondaryBtn: "Compare",
    },
    {
        number: "+1 (212) 555-0192",
        country: "US",
        location: "New York · Manhattan · Local",
        tags: [
            "Easy to remember",
            "Works with AI Receptionist",
        ],
        secondaryBtn: "Save for Later",
    },
    {
        number: "+1 (800) 555-0110",
        country: "US",
        location: "United States · Toll-free",
        tags: [
            "Business verification required",
            "National inbound",
        ],
        secondaryBtn: "Compare",
    },
    {
        number: "+1 (646) 555-0173",
        country: "US",
        location: "New York · Local",
        tags: [
            "Works with AI Receptionist",
            "Team routing ready",
        ],
        secondaryBtn: "Copy Number",
    },
];
const numberTypes = [
    {
        icon: <FiMapPin />,
        title: "Local Number",
        description: "City, regional and business presence.",
        points: [
            "Best for local credibility",
            "Fast setup where available",
            "Light verification in some markets",
        ],
    },
    {
        icon: <FiSend />,
        title: "Toll-Free",
        description: "Customer support and national inbound, where available.",
        points: [
            "Best for national support",
            "Business verification often required",
        ],
    },
    {
        icon: <FiSmartphone />,
        title: "Mobile / Virtual",
        description: "Shown only where supported and compliant.",
        points: [
            "Country-dependent",
            "Subject to local rules",
        ],
    },
    {
        icon: <FiExternalLink />,
        title: "Port Existing Number",
        description: "Skype replacement, existing lines and continuity.",
        points: [
            "Keep your known number",
            "Subject to porting eligibility",
        ],
    },
];
const benefits = [
    {
        icon: <FiShield />,
        title: "Sales trust",
        description:
            "Local presence increases confidence for customers choosing who to call.",
    },
    {
        icon: <FiMonitor />,
        title: "Operational clarity",
        description:
            "Separate business calls from your personal number, cleanly.",
    },
    {
        icon: <FiUsers />,
        title: "Team coverage",
        description:
            "Route calls to the right person, queue or branch.",
    },
    {
        icon: <FiGlobe />,
        title: "International expansion",
        description:
            "Serve customers in countries where you are building demand.",
    },
    {
        icon: <FiExternalLink />,
        title: "Skype continuity",
        description:
            "Protect customer-facing contact points as legacy products decline.",
    },
    {
        icon: <FiMic />,
        title: "AI-ready endpoint",
        description:
            "Attach AI Receptionist so missed calls become captured enquiries.",
    },
];
const availabilityData = [
    {
        code: "US",
        country: "United States",
        dial: "+1",
        status: "Available online",
        setup: "Self-serve",
        color: "green",
    },
    {
        code: "GB",
        country: "United Kingdom",
        dial: "+44",
        status: "Verification required",
        setup: "ID / address",
        color: "yellow",
    },
    {
        code: "JM",
        country: "Jamaica",
        dial: "+1 876",
        status: "Available online",
        setup: "Self-serve",
        color: "green",
    },
    {
        code: "CA",
        country: "Canada",
        dial: "+1",
        status: "Verification required",
        setup: "ID / address",
        color: "yellow",
    },
    {
        code: "NG",
        country: "Nigeria",
        dial: "+234",
        status: "Sales-assisted",
        setup: "Talk to sales",
        color: "blue",
    },
    {
        code: "ZA",
        country: "South Africa",
        dial: "+27",
        status: "Coming soon",
        setup: "Notify me",
        color: "gray",
    },
];
const setupPlans = [
    {
        icon: <FiUser />,
        title: "Solo Business",
        description: "One number, ready for calls and capture.",
        features: [
            "Local number + calling",
            "Voicemail & summaries",
        ],
        button: "Choose",
        primary: false,
    },
    {
        icon: <FiUsers />,
        title: "Growing Team",
        description: "Route enquiries to the right people.",
        features: [
            "Team routing",
            "AI Receptionist option",
        ],
        button: "Choose",
        primary: true,
    },
    {
        icon: <FiHome />,
        title: "Multi-Location",
        description: "Branch numbers, central control.",
        features: [
            "Numbers per location",
            "Admin & reporting",
        ],
        button: "Talk to Sales",
        primary: false,
    },
    {
        icon: <FiRefreshCw />,
        title: "Skype Replacement",
        description: "Continuity for legacy calling needs.",
        features: [
            "New or ported number",
            "Forwarding during transition",
        ],
        button: "Choose",
        primary: false,
    },
];
const migrationSteps = [
    {
        icon: <FiPlus />,
        title: "Get a new Zoiko Local number",
        description:
            "Pick a local or toll-free number in minutes where available.",
    },
    {
        icon: <FiEdit3 />,
        title: "Port an eligible existing number",
        description:
            "Keep the number your customers use, subject to eligibility.",
    },
    {
        icon: <FiPhoneForwarded />,
        title: "Set up forwarding during transition",
        description:
            "Avoid missed calls while the switch completes.",
    },
    {
        icon: <FiMic />,
        title: "Add AI Receptionist",
        description:
            "Capture calls automatically while you notify customers.",
    },
];
const businessUseCases = [
    {
        icon: <FiUser />,
        title: "Professional services",
        description:
            "Intake, consultation requests and urgent-client routing.",
    },
    {
        icon: <FiCalendar />,
        title: "Healthcare & wellness",
        description:
            "Appointment requests and compliant intake, subject to configuration.",
    },
    {
        icon: <FiHome />,
        title: "Real estate & property",
        description:
            "Buyer, tenant, vendor, landlord and maintenance flows.",
    },
    {
        icon: <FiTrendingUp />,
        title: "Trades & field services",
        description:
            "Job requests, location capture and callback workflows.",
    },
    {
        icon: <FiShoppingCart />,
        title: "E-commerce & retail",
        description:
            "Product questions, order issues and store support.",
    },
    {
        icon: <FiBriefcase />,
        title: "Multi-location",
        description:
            "Branch-specific numbers with centralized control.",
    },
];
const migrationChecklist = [
    "Current number & country",
    "Customer-facing use",
    "Port eligibility check",
    "Forwarding plan",
    "Website & contact updates",
];
const complianceCards = [
    {
        icon: <FiUserCheck />,
        title: "Identity & address",
        description:
            "Some countries require identity, address or business verification before a number can be activated. We explain what's needed in plain English.",
    },
    {
        icon: <FiShield />,
        title: "Emergency services",
        description:
            "Service capabilities and limitations vary by country, number type and configuration. We do not imply full emergency-service equivalence.",
    },
    {
        icon: <FiDatabase />,
        title: "Recording & AI",
        description:
            "Recording, transcription and AI processing are subject to consent, configuration and applicable law.",
    },
    {
        icon: <FiLock />,
        title: "Secure data handling",
        description:
            "Your information is used to verify eligibility, provision service and protect your account.",
        link: "Need help with documents?",
    },
];
const setupChecklist = [
    {
        title: "Number reserved / activated",
        description: "Status: Activated • Pending verification • Pending provisioning",
        completed: true,
    },
    {
        title: "Choose greeting & business hours",
        description: "Set how callers are welcomed and when.",
        completed: false,
    },
    {
        title: "Configure forwarding & voicemail",
        description: "Decide where key calls go and how leave a message.",
        completed: false,
    },
    {
        title: "Add AI Receptionist",
        description: "Capture missed and after-hours calls.",
        completed: false,
    },
    {
        title: "Invite team & assign roles",
        description: "Owners, admins, number managers and agents.",
        completed: false,
    },
    {
        title: "Test your first call",
        description: "Confirm everything works end to end.",
        completed: false,
    },
];
const confidenceCards = [
    {
        icon: <FiShield />,
        title: "Account protection",
        description:
            "Verification, admin controls and activity history.",
    },
    {
        icon: <FiUser />,
        title: "Setup & porting help",
        description:
            "Guidance through activation and porting.",
    },
    {
        icon: <FiMonitor />,
        title: "Billing support",
        description:
            "Clear questions answered before and after purchase.",
    },
    {
        icon: <FiActivity />,
        title: "Business configuration",
        description:
            "Help routing calls the way your team works.",
    },
];
const faqItems = [
    {
        question: "Can I choose a specific area code?",
        answer:
            "Yes — when available. Area code availability depends on the country and number type you select. We show you available options at the time of search, and in many markets you can filter by region or city code .",
    },
    {
        question: "Can I port my existing number?",
        answer:
            "Porting is supported in many countries. You can initiate a port request after purchase. Timelines vary by carrier and country — typically 5–15 business days. We guide you through the LOA and submission process.",
    },
    {
        question: "How long does activation take?",
        answer:
            "Most numbers activate instantly or within a few minutes. Regulated markets (e.g. Germany, Australia, Brazil) may require identity or address verification first, which can add 1–3 business days.",
    },
    {
        question: "Why do some numbers require verification?",
        answer:
            "Local telecommunications laws in certain countries require carriers to verify the identity and/or address of the number holder before a number can be provisioned. We make this as straightforward as possible with plain-English instructions.",
    },
    {
        question: "Can I use this for WhatsApp or SMS verification?",
        answer:
            "Numbers can receive SMS and voice calls, but WhatsApp Business registration requires specific approval from Meta. We do not guarantee WhatsApp activation, and some number types are not eligible for OTP or platform verification use cases.",
    },
    {
        question: "Can I receive or make emergency calls?",
        answer:
            "Emergency service support varies by country, number type and configuration. We do not imply full emergency-service equivalence. Please do not rely solely on a virtual number for emergency access.",
    },
    {
        question: "Can I add AI Receptionist later?",
        answer:
            "Yes. AI Receptionist can be added to any active number at any time from your dashboard. It handles missed calls, after-hours routing and can be configured with your business details and call-handling rules.",
    },
    {
        question: "What happens if my selected number becomes unavailable?",
        answer:
            "Numbers are reserved at checkout but confirmed at provisioning. In the rare case your number becomes unavailable between search and activation, we will offer an equivalent replacement or a full refund.",
    },
    {
        question: "Can I buy numbers for multiple countries?",
        answer:
            "Yes. You can purchase numbers across multiple countries from a single account. Each country may have its own verification requirements. Multi-location and bulk plans are also available for teams rolling out across regions.",
    },
    {
        question: "Can I cancel or change my number?",
        answer:
            "You can release a number at any time from your dashboard. Changing to a different number is possible subject to availability. Note that released numbers may not be recoverable, so we recommend confirming your choice before cancelling.",
    },
];
export default function Getlocalnumber() {
    return (
        <>
            {/* ================= Hero Search Section ================= */}
            <section className="bg-[#E1DACE] dark:bg-[#0F172A] py-10 lg:py-16 px-5">

                <div className="max-w-7xl mx-auto">

                    {/* Heading */}

                    <div className="max-w-4xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#E86845] mb-4">
                            Get A Local Number For Your Business
                        </p>

                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#123533] dark:text-white">
                            Choose a local number that makes your business{" "}
                            <span className="italic text-[#EB643F]">
                                easier to reach
                            </span>
                        </h1>

                        <p className="mt-6 text-gray-500 dark:text-gray-400 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                            Search by country, city or area code. Use your Zoiko Local
                            number for business calls, team routing, voicemail,
                            AI Receptionist, video contact flows and Skype replacement.
                        </p>

                    </div>

                    {/* Progress */}

                    <div className="flex flex-wrap justify-center gap-3 mt-12">

                        {steps.map((step, index) => (
                            <div
                                key={step}
                                className={`flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition
          ${index === 0
                                        ? "bg-white border-[#0F6660] text-[#0F6660] dark:bg-slate-800 dark:text-white dark:border-[#0F6660]"
                                        : "bg-white border-gray-300 text-gray-500 dark:bg-slate-800 dark:border-slate-700 dark:text-gray-300"
                                    }`}
                            >
                                <span
                                    className={`w-5 h-5 rounded-full flex items-center justify-center text-xs
            ${index === 0
                                            ? "bg-[#0F6660] text-white"
                                            : "bg-gray-200 dark:bg-slate-700"
                                        }`}
                                >
                                    {index + 1}
                                </span>

                                {step}
                            </div>
                        ))}

                    </div>

                    {/* Search Card */}

                    <div className="mt-12 max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-800 border border-[#E6DED2] dark:border-slate-700 shadow-2xl p-8">

                        {/* Row 1 */}

                        <div className="grid lg:grid-cols-12 gap-5">

                            <div className="lg:col-span-5">

                                <label className="text-sm font-semibold text-[#123533] dark:text-white">
                                    Country & city
                                </label>

                                <div className="mt-2 relative">

                                    <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                                    <input
                                        type="text"
                                        placeholder="New York, United States"
                                        className="w-full rounded-xl border border-gray-300 dark:border-slate-600 bg-transparent pl-11 pr-4 py-3 outline-none focus:border-[#0F6660]"
                                    />

                                </div>

                            </div>

                            <div className="lg:col-span-3">

                                <label className="text-sm font-semibold text-[#123533] dark:text-white">
                                    Area code
                                    <span className="text-gray-400 font-normal">
                                        {" "}
                                        (optional)
                                    </span>
                                </label>

                                <input
                                    placeholder="212"
                                    className="mt-2 w-full rounded-xl border border-gray-300 dark:border-slate-600 bg-transparent px-4 py-3 outline-none focus:border-[#0F6660]"
                                />

                            </div>

                            <div className="lg:col-span-4">

                                <label className="text-sm font-semibold text-[#123533] dark:text-white">
                                    Number type
                                </label>

                                <select className="mt-2 w-full rounded-xl border border-gray-300 dark:border-slate-600 bg-transparent px-4 py-3 outline-none focus:border-[#0F6660]">
                                    <option>Local number</option>
                                </select>

                            </div>

                        </div>

                        {/* Row 2 */}

                        <div className="grid lg:grid-cols-12 gap-5 mt-6">

                            <div className="lg:col-span-6">

                                <label className="text-sm font-semibold text-[#123533] dark:text-white">
                                    Business purpose
                                </label>

                                <input
                                    placeholder="Sales"
                                    className="mt-2 w-full rounded-xl border border-gray-300 dark:border-slate-600 bg-transparent px-4 py-3 outline-none focus:border-[#0F6660]"
                                />

                            </div>

                            <div className="lg:col-span-6">

                                <label className="text-sm font-semibold text-[#123533] dark:text-white">
                                    Availability preview
                                </label>

                                <div className="mt-3 flex flex-wrap gap-3">

                                    <span className="rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-4 py-2 text-sm">
                                        ● Numbers available
                                    </span>

                                    <span className="rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 px-4 py-2 text-sm">
                                        ● Verification may apply
                                    </span>

                                </div>

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="grid md:grid-cols-2 gap-5 mt-8">

                            <button className="rounded-full text-sm md:text-base bg-[#EC643E] hover:bg-[#D95934] transition text-white py-4 font-semibold">
                                Search Available Numbers →
                            </button>

                            <button className="rounded-full text-sm md:text-base border border-gray-300 dark:border-slate-600 hover:bg-gray-50 dark:hover:bg-slate-700 py-4 font-semibold text-[#123533] dark:text-white">
                                Port an Existing Number
                            </button>

                        </div>

                        {/* Bottom */}

                        <div className="mt-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

                            <div className="flex items-start gap-2 text-sm text-gray-500 dark:text-gray-400">

                                <FiInfo className="mt-1" />

                                <p>
                                    Availability, setup time and verification requirements
                                    vary by country, number type and use case.
                                </p>

                            </div>

                            <button className="text-[#E66845] font-semibold hover:underline">
                                Talk to Sales →
                            </button>

                        </div>

                    </div>

                    {/* Bottom Features */}

                    <div className="mt-10 flex flex-wrap justify-center gap-8 text-[#0F6660] dark:text-green-400 font-medium text-sm">

                        {[
                            "Fast setup where available",
                            "Business-ready routing",
                            "Skype replacement path",
                            "Secure verification",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-2">

                                <FiCheck />

                                {item}

                            </div>
                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Available Numbers ================= */}
            <section className="bg-[#FFFFFF] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-5xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.3em] text-[11px] font-semibold text-[#EB643F] mb-4">
                            Available Numbers
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            Pick a number that{" "}

                            <span className="italic text-[#EB643F]">
                                fits your business.
                            </span>

                        </h2>

                        <p className="mt-6 text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            Sample results for your search. Reserve a number to hold it while
                            you complete a secure checkout, where reservation is supported.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="grid md:grid-cols-2 gap-7 mt-14">

                        {availableNumbers.map((item, index) => (

                            <div
                                key={index}
                                className="rounded-3xl border border-[#E8DDD0] dark:border-slate-700 bg-[#F5ECDD] dark:bg-slate-800 p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                            >

                                {/* Top */}

                                <div className="flex justify-between items-start">

                                    <div className="flex gap-3">

                                        <span className="text-xl font-medium text-[#123533] dark:text-white">
                                            {item.country}
                                        </span>

                                        <div>

                                            <h3 className="text-2xl font-bold text-[#123533] dark:text-white">
                                                {item.number}
                                            </h3>

                                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                {item.location}
                                            </p>

                                        </div>

                                    </div>

                                    <div className="text-right">

                                        <p className="text-sm text-gray-500 dark:text-gray-400">
                                            from
                                        </p>

                                        <p className="font-bold text-[#123533] dark:text-white">
                                            catalog price
                                        </p>

                                    </div>

                                </div>

                                {/* Tags */}

                                <div className="flex flex-wrap gap-2 mt-6">

                                    {item.tags.map((tag) => (

                                        <span
                                            key={tag}
                                            className="px-3 py-1 rounded-full text-xs font-medium bg-[#DDEEEB] dark:bg-slate-700 text-[#0E6760] dark:text-green-300"
                                        >
                                            {tag}
                                        </span>

                                    ))}

                                </div>

                                {/* Buttons */}

                                <div className="flex flex-col sm:flex-row gap-3 mt-8">

                                    <button className="flex-1 rounded-full bg-[#EB643F] hover:bg-[#D95934] transition text-white font-semibold py-3">

                                        Reserve This Number

                                    </button>

                                    <button className="flex-1 rounded-full border border-[#D8D0C5] dark:border-slate-600 hover:bg-white dark:hover:bg-slate-700 transition font-semibold text-[#123533] dark:text-white py-3">

                                        {item.secondaryBtn}

                                    </button>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Bottom Note */}

                    <div className="mt-10 flex justify-center">

                        <div className="flex items-start gap-3 text-center max-w-3xl text-sm text-gray-500 dark:text-gray-400">

                            <FiInfo className="mt-1 flex-shrink-0 text-[#0E6760]" />

                            <p>
                                Prices shown are placeholders rendered from the pricing
                                catalog. Selected numbers may be held temporarily during
                                checkout where reservation is supported and released after
                                timeout or failed payment.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= Number Types Section ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4">
                            Choose Number Type
                        </p>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#123533] dark:text-white">
                            The right number,
                            <span className="italic text-[#EB643F]">
                                {" "}without the telecom confusion.
                            </span>
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Each option shows what it's best for, what setup it needs,
                            expected activation timing and any verification note.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                        {numberTypes.map((item, index) => (

                            <div
                                key={index}
                                className="rounded-3xl border border-[#E6DDD1] dark:border-slate-700 bg-white dark:bg-slate-800 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full"
                            >

                                {/* Icon */}

                                <div className="w-12 h-12 rounded-xl bg-[#EEF3F2] dark:bg-slate-700 flex items-center justify-center text-[#0E6760] text-xl">

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-xl font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">

                                    {item.description}

                                </p>

                                {/* Bullet List */}

                                <div className="mt-6 space-y-3">

                                    {item.points.map((point) => (

                                        <div
                                            key={point}
                                            className="flex items-start gap-3"
                                        >
                                            <FiCheck className="text-[#0E6760] mt-1 flex-shrink-0" />

                                            <span className="text-sm text-[#123533] dark:text-gray-300 leading-5">
                                                {point}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Why Get A Local Number ================= */}
            <section className="bg-[#FFFFFF] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-5xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.3em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-[#EB643F]" />
                            Why Get A Local Number
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">
                            A local presence customers{" "}
                            <span className="italic text-[#EB643F]">
                                actually trust.
                            </span>
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Turn national interest into a reachable, professional business front door.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {benefits.map((item, index) => (

                            <div
                                key={index}
                                className="group rounded-3xl border border-[#E5DCCF] dark:border-slate-700 bg-[#F6ECDC] dark:bg-slate-800 p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                            >

                                {/* Icon */}

                                <div className="mx-auto w-14 h-14 rounded-xl bg-[#EEF2EF] dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-2xl transition-transform duration-300 group-hover:scale-110">

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-xl font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Availability & Eligibility ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-5xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-[#EB643F]" />
                            Availability & Eligibility
                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">
                            Clear status,
                            <span className="italic text-[#EB643F]">
                                {" "}before you commit.
                            </span>
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Some countries require proof of address, business registration
                            or identity verification before a number can be activated.
                        </p>

                    </div>

                    {/* Table */}

                    <div className="mt-14 overflow-hidden rounded-3xl border border-[#E6DDD1] dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl">

                        {/* Header */}

                        <div className="hidden md:grid grid-cols-12 bg-[#032E2C] text-white text-xs uppercase tracking-wider font-semibold px-8 py-5">

                            <div className="col-span-5">Country</div>
                            <div className="col-span-4">Status</div>
                            <div className="col-span-3">Setup Path</div>

                        </div>

                        {/* Rows */}

                        {availabilityData.map((item, index) => (

                            <div
                                key={index}
                                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-0 px-6 md:px-8 py-5 border-t border-gray-200 dark:border-slate-700 hover:bg-[#FAF7F2] dark:hover:bg-slate-700/40 transition"
                            >

                                {/* Country */}

                                <div className="md:col-span-5 flex items-center gap-3">

                                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400 w-8">
                                        {item.code}
                                    </span>

                                    <div>

                                        <h4 className="font-semibold text-[#123533] dark:text-white">
                                            {item.country}
                                        </h4>

                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {item.dial}
                                        </span>

                                    </div>

                                </div>

                                {/* Status */}

                                <div className="md:col-span-4 flex items-center">

                                    <span
                                        className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium
              ${item.color === "green"
                                                ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                                                : item.color === "yellow"
                                                    ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300"
                                                    : item.color === "blue"
                                                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300"
                                                        : "bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                            }`}
                                    >
                                        ● {item.status}
                                    </span>

                                </div>

                                {/* Setup */}

                                <div className="md:col-span-3 flex items-center text-gray-500 dark:text-gray-400">

                                    {item.setup}

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Footer Note */}

                    <div className="mt-8 flex justify-center">

                        <div className="max-w-4xl flex items-start gap-3 text-sm text-gray-500 dark:text-gray-400">

                            <FiInfo className="mt-1 text-[#0E6760] flex-shrink-0" />

                            <p>
                                Number availability changes. We use "where available" and
                                "subject to verification" rather than promising universal
                                instant activation.
                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= Plans & Add-ons ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}

                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.3em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-[#EB643F]" />
                            Plans & Add-ons
                        </p>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">
                            Build a smarter setup
                            <span className="italic text-[#EB643F]">
                                {" "}around your number.
                            </span>
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Start with the base number plan, then add only the capabilities
                            you need. Pricing is set per market in the billing catalog.
                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {setupPlans.map((plan, index) => (

                            <div
                                key={index}
                                className="group bg-[#F6ECDC] dark:bg-slate-800 border border-[#E6DDD1] dark:border-slate-700 rounded-2xl px-5 py-5 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0F6660]/20"
                            >

                                {/* Icon */}

                                <div className="flex items-center gap-3">

                                    <div className="w-7 h-7 rounded-lg bg-[#FDF0EC] dark:bg-slate-700 flex items-center justify-center text-[#EB643F] text-sm">

                                        {plan.icon}

                                    </div>

                                    <h3 className="text-[17px] font-semibold text-[#123533] dark:text-white">

                                        {plan.title}

                                    </h3>

                                </div>

                                {/* Description */}

                                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400 min-h-[52px]">

                                    {plan.description}

                                </p>

                                {/* Features */}

                                <div className="mt-6 space-y-3 flex-1">

                                    {plan.features.map((feature) => (

                                        <div
                                            key={feature}
                                            className="flex items-start gap-3"
                                        >

                                            <FiCheck className="mt-1 text-[#0F6660] flex-shrink-0" />

                                            <span className="text-xs md:text-sm text-[#123533] dark:text-gray-300">
                                                {feature}
                                            </span>

                                        </div>

                                    ))}

                                </div>

                                {/* Button */}

                                <button
                                    className="mt-6 w-full h-10 rounded-full border border-[#D9D3C8] dark:border-slate-600 bg-white dark:bg-slate-700 text-[#123533] dark:text-white text-sm font-semibold transition-all duration-300 hover:bg-[#EB643F] hover:border-[#EB643F] hover:text-white"
                                >
                                    {plan.button}
                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Skype Number Replacement ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-[#EB643F]" />
                            Skype Number Replacement
                        </p>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#123533] dark:text-white">
                            Replacing a Skype number?
                            <span className="italic text-[#EB643F]">
                                {" "}Keep the customer path clear.
                            </span>
                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Move to a modern business number with continuity built into the
                            transition.
                        </p>

                    </div>

                    {/* Content */}

                    <div className="mt-16 grid lg:grid-cols-[1fr_1fr] gap-10 items-start">

                        {/* Left Steps */}

                        <div className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-[#E5DDD0] dark:border-slate-700">

                            {migrationSteps.map((step, index) => (

                                <div
                                    key={index}
                                    className={`flex gap-4 px-6 py-5 ${index !== migrationSteps.length - 1
                                        ? "border-b border-[#ECE7DD] dark:border-slate-700"
                                        : ""
                                        }`}
                                >

                                    <div className="w-8 h-8 rounded-lg bg-[#FDEEE9] dark:bg-slate-700 flex items-center justify-center text-[#EB643F] flex-shrink-0">

                                        {step.icon}

                                    </div>

                                    <div>

                                        <h3 className="text-[15px] font-semibold text-[#123533] dark:text-white">

                                            {step.title}

                                        </h3>

                                        <p className="mt-1 text-[13px] leading-5 text-gray-500 dark:text-gray-400">

                                            {step.description}

                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                        {/* Right Card */}

                        <div className="rounded-3xl bg-gradient-to-br from-[#0B5B56] via-[#033A37] to-[#022B29] p-6 text-white shadow-2xl">

                            <h3 className="text-2xl font-bold">

                                Migration checklist

                            </h3>

                            <p className="mt-3 text-sm leading-6 text-gray-200">

                                We guide you through each step so nothing slips during the
                                switch.

                            </p>

                            <div className="mt-8 space-y-4">

                                {migrationChecklist.map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >

                                        <FiCheck className="text-green-300 flex-shrink-0" />

                                        <span className="text-sm">

                                            {item}

                                        </span>

                                    </div>

                                ))}

                            </div>

                            <div className="mt-10 space-y-4">

                                <button className="w-full h-12 rounded-full bg-[#EB643F] text-white font-semibold transition hover:bg-[#D95934]">

                                    Start Skype Replacement

                                </button>

                                <button className="w-full h-12 rounded-full bg-white text-[#123533] font-semibold border border-white transition hover:bg-gray-100">

                                    Check Porting Eligibility

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= Business Use Cases ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">

                            <span className="w-8 h-px bg-[#EB643F]" />

                            Business Use Cases

                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            See your business

                            <span className="italic text-[#EB643F]">

                                {" "}in the product.

                            </span>

                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">

                            A local number becomes the front door for the workflows your
                            customers rely on.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {businessUseCases.map((item, index) => (

                            <div
                                key={index}
                                className="group bg-white dark:bg-slate-800 border border-[#E6DDD1] dark:border-slate-700 rounded-2xl px-8 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0F6660]/20"
                            >

                                {/* Icon */}

                                <div className="mx-auto w-12 h-12 rounded-xl bg-[#F4EFE8] dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-xl transition-transform duration-300 group-hover:scale-110">

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-lg font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-3 text-[14px] leading-6 text-gray-500 dark:text-gray-400 max-w-[240px] mx-auto">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Verification & Compliance ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">

                            <span className="w-8 h-px bg-[#EB643F]" />

                            Verification & Compliance

                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            Regulated numbers,

                            <span className="italic text-[#EB643F]">

                                {" "}handled honestly.

                            </span>

                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">

                            We build trust by being clear about identity, address,
                            recording and emergency-service realities.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {complianceCards.map((card, index) => (

                            <div
                                key={index}
                                className="group min-h-[210px] rounded-2xl border border-[#E6DDD1] dark:border-slate-700 bg-white dark:bg-slate-800 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0F6660]/20"
                            >

                                {/* Icon */}

                                <div className="w-12 h-12 rounded-xl bg-[#F4EFE8] dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-xl transition-transform duration-300 group-hover:scale-110">

                                    {card.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-xl font-semibold text-[#123533] dark:text-white">

                                    {card.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-3 text-[14px] leading-6 text-gray-500 dark:text-gray-400">

                                    {card.description}

                                    {card.link && (
                                        <>
                                            {" "}
                                            <button className="font-semibold text-[#EB643F] hover:underline">
                                                {card.link}
                                            </button>
                                        </>
                                    )}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Setup After Purchase ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-5xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">

                            <span className="w-8 h-px bg-[#EB643F]" />

                            Setup After Purchase

                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            Live and ready

                            <span className="italic text-[#EB643F]">

                                {" "}before your first customer call.

                            </span>

                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">

                            Retention starts at checkout. Your number arrives with a
                            guided first-run checklist.

                        </p>

                    </div>

                    {/* Checklist */}

                    <div className="max-w-2xl mx-auto mt-14 rounded-2xl overflow-hidden border border-[#E6DDD1] dark:border-slate-700 bg-white dark:bg-slate-800">

                        {setupChecklist.map((item, index) => (

                            <div
                                key={index}
                                className={`flex items-start gap-4 px-6 py-5 transition-colors duration-300
                    ${index !== setupChecklist.length - 1
                                        ? "border-b border-[#ECE6DB] dark:border-slate-700"
                                        : ""
                                    }
                    hover:bg-[#FBF8F3] dark:hover:bg-slate-700/40`}
                            >

                                {/* Checkbox */}

                                <div className="mt-1">

                                    {item.completed ? (

                                        <div className="w-6 h-6 rounded-md bg-[#0F6660] flex items-center justify-center">

                                            <FiCheck className="text-white text-sm" />

                                        </div>

                                    ) : (

                                        <div className="w-6 h-6 rounded-md border border-[#D9D3C8] dark:border-slate-600 bg-white dark:bg-slate-700" />

                                    )}

                                </div>

                                {/* Content */}

                                <div>

                                    <h3 className="text-[15px] font-semibold text-[#123533] dark:text-white">

                                        {item.title}

                                    </h3>

                                    <p className="mt-1 text-[13px] leading-5 text-gray-500 dark:text-gray-400">

                                        {item.description}

                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Bottom Note */}

                    <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">

                        Then add your number to your website, Google Business Profile,
                        email signature and customer communications.

                    </p>

                </div>

            </section>
            {/* ================= Bulk & Multi Location ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-5xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">

                            <span className="w-8 h-px bg-[#EB643F]" />

                            Bulk & Multi-location

                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            Buying numbers

                            <span className="italic text-[#EB643F]">

                                {" "}at scale?

                            </span>

                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">

                            For 5+ numbers, multiple branches, multi-country rollouts,
                            regulated verification and procurement needs — a specialist
                            will review availability, verification and rollout sequencing.

                        </p>

                    </div>

                    {/* Form */}

                    <div className="mt-14 max-w-3xl mx-auto rounded-3xl border border-[#E6DDD1] dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg p-6 md:p-8">

                        <form
                            // onSubmit={handleSubmit}
                            className="grid grid-cols-1 md:grid-cols-2 gap-5"
                        >

                            {/* Countries */}

                            <div>

                                <label className="block text-sm font-medium text-[#123533] dark:text-white mb-2">

                                    Countries needed

                                </label>

                                <input
                                    type="text"
                                    name="countries"
                                    // value={bulkForm.countries}
                                    // onChange={handleChange}
                                    placeholder="e.g. US, UK, Canada"
                                    className="w-full h-11 rounded-xl border border-[#DDD6CB] dark:border-slate-600 bg-white dark:bg-slate-700 px-4 text-sm outline-none focus:border-[#EB643F]"
                                />

                            </div>

                            {/* Quantity */}

                            <div>

                                <label className="block text-sm font-medium text-[#123533] dark:text-white mb-2">

                                    Number quantity

                                </label>

                                <select
                                    name="quantity"
                                    // value={bulkForm.quantity}
                                    // onChange={handleChange}
                                    className="w-full h-11 rounded-xl border border-[#DDD6CB] dark:border-slate-600 bg-white dark:bg-slate-700 px-4 text-sm outline-none focus:border-[#EB643F]"
                                >
                                    <option>5–10</option>
                                    <option>10–25</option>
                                    <option>25–50</option>
                                    <option>50+</option>
                                </select>

                            </div>

                            {/* Business */}

                            <div>

                                <label className="block text-sm font-medium text-[#123533] dark:text-white mb-2">

                                    Business type

                                </label>

                                <input
                                    type="text"
                                    name="business"
                                    // value={bulkForm.business}
                                    // onChange={handleChange}
                                    placeholder="e.g. Professional services"
                                    className="w-full h-11 rounded-xl border border-[#DDD6CB] dark:border-slate-600 bg-white dark:bg-slate-700 px-4 text-sm outline-none focus:border-[#EB643F]"
                                />

                            </div>

                            {/* Timeline */}

                            <div>

                                <label className="block text-sm font-medium text-[#123533] dark:text-white mb-2">

                                    Launch timeline

                                </label>

                                <select
                                    name="timeline"
                                    // value={bulkForm.timeline}
                                    // onChange={handleChange}
                                    className="w-full h-11 rounded-xl border border-[#DDD6CB] dark:border-slate-600 bg-white dark:bg-slate-700 px-4 text-sm outline-none focus:border-[#EB643F]"
                                >
                                    <option>This month</option>
                                    <option>Next month</option>
                                    <option>Next quarter</option>
                                </select>

                            </div>

                            {/* Provider */}

                            <div>

                                <label className="block text-sm font-medium text-[#123533] dark:text-white mb-2">

                                    Current provider

                                </label>

                                <input
                                    type="text"
                                    name="provider"
                                    // value={bulkForm.provider}
                                    // onChange={handleChange}
                                    placeholder="Optional"
                                    className="w-full h-11 rounded-xl border border-[#DDD6CB] dark:border-slate-600 bg-white dark:bg-slate-700 px-4 text-sm outline-none focus:border-[#EB643F]"
                                />

                            </div>

                            {/* Porting */}

                            <div>

                                <label className="block text-sm font-medium text-[#123533] dark:text-white mb-2">

                                    Porting needs

                                </label>

                                <select
                                    name="porting"
                                    // value={bulkForm.porting}
                                    // onChange={handleChange}
                                    className="w-full h-11 rounded-xl border border-[#DDD6CB] dark:border-slate-600 bg-white dark:bg-slate-700 px-4 text-sm outline-none focus:border-[#EB643F]"
                                >
                                    <option>No porting</option>
                                    <option>Some numbers</option>
                                    <option>All numbers</option>
                                </select>

                            </div>

                            {/* Button */}

                            <div className="md:col-span-2 pt-2">

                                <button
                                    type="submit"
                                    className="w-full h-12 rounded-full bg-[#EB643F] hover:bg-[#D95B38] transition-all duration-300 text-white font-semibold shadow-lg hover:shadow-xl"
                                >

                                    Build a Multi-location Number Plan

                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </section>
            {/* ================= Buy With Confidence ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-20 lg:py-24 px-5">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">

                            <span className="w-8 h-px bg-[#EB643F]" />

                            Trust, Security & Support

                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            Buy with

                            <span className="italic text-[#EB643F]">

                                {" "}confidence.

                            </span>

                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">

                            Account protection and human support at the point of purchase.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

                        {confidenceCards.map((card, index) => (

                            <div
                                key={index}
                                className="group bg-white dark:bg-slate-800 border border-[#E6DDD1] dark:border-slate-700 rounded-2xl px-6 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0F6660]/20"
                            >

                                {/* Icon */}

                                <div className="mx-auto w-11 h-11 rounded-xl bg-[#F5EFE8] dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-lg transition-transform duration-300 group-hover:scale-110">

                                    {card.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-5 text-lg font-semibold text-[#123533] dark:text-white">

                                    {card.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-3 text-[14px] leading-6 text-gray-500 dark:text-gray-400">

                                    {card.description}

                                </p>

                            </div>

                        ))}

                    </div>

                    {/* CTA */}

                    <div className="mt-12 flex justify-center">

                        <button
                            className="px-8 h-11 rounded-full border border-[#D8D2C7] dark:border-slate-600 bg-white dark:bg-slate-800 text-[#123533] dark:text-white text-sm font-semibold transition-all duration-300 hover:bg-[#EB643F] hover:border-[#EB643F] hover:text-white"
                        >

                            Talk to a Specialist

                        </button>

                    </div>

                    {/* Bottom Note */}

                    <div className="mt-8 flex justify-center">

                        <div className="flex items-center gap-2 text-[13px] text-gray-500 dark:text-gray-400">

                            <FiInfo className="text-[#0F6660]" />

                            <span>

                                Number services are provided subject to country rules,
                                carrier availability and approved use.

                            </span>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= FAQ's ================= */}
            <Faq
                heading="FAQ"
                subHeading="Questions, answered."
                items={faqItems}
            />
            {/* ================= Final CTA ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-6xl mx-auto">
                    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#0C5A54] via-[#06403C] to-[#032E2B] px-8 py-12 md:px-16 md:py-16">

                        {/* Background Glow */}

                        <div className="absolute top-0 right-0 w-80 h-80 bg-[#0F6660]/20 blur-[140px] rounded-full" />

                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#0F6660]/10 blur-[120px] rounded-full" />

                        <div className="relative z-10 text-center max-w-3xl mx-auto">

                            {/* Small Label */}

                            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">

                                <span className="w-8 h-px bg-[#EB643F]" />

                                Start Here

                            </p>

                            {/* Heading */}

                            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">

                                Start with one number.

                                <br />

                                Build a smarter business

                                <br />

                                phone system around it.

                            </h2>

                            {/* Description */}

                            <p className="mt-6 text-sm md:text-base leading-7 text-gray-200 max-w-xl mx-auto">

                                Availability, pricing and setup requirements vary by
                                country and number type.

                            </p>

                            {/* Buttons */}

                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                                {/* Primary */}

                                <button className="w-full sm:w-auto px-7 h-12 rounded-full bg-[#EB643F] text-white font-semibold text-sm transition-all duration-300 hover:bg-[#D95B38] hover:shadow-xl">

                                    Search Available Numbers →

                                </button>

                                {/* Secondary */}

                                <button className="w-full sm:w-auto px-7 h-12 rounded-full bg-white text-[#123533] font-semibold text-sm transition-all duration-300 hover:bg-gray-100">

                                    Port an Existing Number

                                </button>

                                {/* Outline */}

                                <button className="w-full sm:w-auto px-7 h-12 rounded-full border border-[#4B7772] text-white font-semibold text-sm transition-all duration-300 hover:border-white hover:bg-white/10">

                                    Talk to Sales for Bulk Numbers

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
        </>
    )
}
