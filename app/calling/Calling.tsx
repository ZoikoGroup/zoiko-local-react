import React from 'react'
import {
    FiPhone,
    FiPhoneCall,
    FiArrowRight,
    FiCheck,
    FiUsers, FiMessageSquare,
    FiMenu,
    FiCpu,
    FiActivity,
    FiFileText,
    FiSettings,
    FiBarChart2,
    FiHome,
    FiHeadphones,
    FiBriefcase,
    FiGlobe, FiAlertCircle,
    FiEdit3,
    FiShield,
    FiTrendingUp,
    FiMic, FiMapPin,
    FiRotateCcw, FiUserCheck,
} from "react-icons/fi";
import Faq from '../Components/Faq';

const features = [
    "Inbound & outbound business calling",
    "Routing, forwarding, voicemail & history",
    "Built around local phone numbers",
];
const processSteps = [
    {
        number: "1",
        title: "Choose a local number",
        description:
            "Select the country, city or area code where customers need to reach you.",
    },
    {
        number: "2",
        title: "Connect calling",
        description:
            "Use your number for inbound and outbound business calls.",
    },
    {
        number: "3",
        title: "Route intelligently",
        description:
            "Send calls to the right team, device, department or AI flow.",
    },
    {
        number: "4",
        title: "Capture missed calls",
        description:
            "Voicemail, call history, email summaries and AI Receptionist keep your team connected.",
    },
];

const inboundFeatures = [
    "Receive calls through your local numbers",
    "Prove sales, support and service lines",
    "Route by team, market or function",
    "Capture missed calls automatically",
];

const callingIdentity = [
    {
        title: "Calling US customer",
        flag: "🇺🇸",
        number: "+1 212",
    },
    {
        title: "Calling UK supplier",
        flag: "🇬🇧",
        number: "+44 20",
    },
    {
        title: "Calling JM partner",
        flag: "🇯🇲",
        number: "+1 876",
    },
];
const forwardingFeatures = [
    "Forward to mobile, desktop, or web",
    "Forward to a department, team, or location",
    "Fallback to voicemail or AI after no answer",
];
const routingRules = [
    {
        tag: "By department",
        value: "Sales • Support • Billing",
    },
    {
        tag: "By market",
        value: "US number → US team",
    },
    {
        tag: "By time",
        value: "After-hours → fallback",
    },
    {
        tag: "By urgency",
        value: "Priority → on-call senior",
    },
    {
        tag: "By availability",
        value: "Next available member",
    },
    {
        tag: "To AI",
        value: "Screen, qualify, summarize",
        orange: true,
    },
];
const fallbackFlow = [
    {
        icon: <FiPhoneCall />,
        title: "Incoming call",
        status: "Ring 1",
        active: false,
    },
    {
        icon: <FiArrowRight />,
        title: "Forward to mobile",
        status: "No answer",
        active: false,
    },
    {
        icon: <FiUsers />,
        title: "Forward to team",
        status: "No answer",
        active: false,
    },
    {
        icon: <FiMic />,
        title: "AI Receptionist",
        status: "Capture",
        active: true,
    },
];
const voicemailCards = [
    {
        icon: <FiMessageSquare />,
        title: "Smart voicemail",
        description:
            "When you team can't answer, capture the call, preserve the message, and turn it into a structured summary with caller intent and next actions.",
        link: "See AI Receptionist →",
    },
    {
        icon: <FiMenu />,
        title: "Caller ID & labels",
        description:
            "As numbers multiply, keep them organized. Label by country, market, department, or campaigns so teams know the context before they answer.",
        link: "Organize your numbers →",
    },
    {
        icon: <FiMic />,
        title: "AI handoff",
        description:
            "Route unanswered or overflow calls to an AI Receptionist that screens, qualifies, summarizes, and routes — with consent controls built in.",
        link: "Explore AI Receptionist →",
    },
];

const historyRows = [
    {
        number: "+1 212...0184",
        direction: "Inbound",
        assigned: "Sales",
        status: "Answered",
        color: "green",
    },
    {
        number: "+44 20...0238",
        direction: "Inbound",
        assigned: "Support",
        status: "Voicemail",
        color: "yellow",
    },
    {
        number: "+1 876...0142",
        direction: "Outbound",
        assigned: "Founder",
        status: "Answered",
        color: "green",
    },
    {
        number: "+1 212...0184",
        direction: "Inbound",
        assigned: "Sales",
        status: "Missed → AI",
        color: "red",
    },
];

const features1 = [
    "Date, time, number used, and direction",
    "Answered, missed, forwarded, or voicemail",
    "Assigned team, notes, and next action",
];
const addOns = [
    {
        icon: <FiCpu />,
        title: "Advanced routing",
        description:
            "Build advanced rules by team, market, time, or priority.",
    },
    {
        icon: <FiMic />,
        title: "AI Receptionist handoff",
        description:
            "Let AI answer, screen, qualify, summarize, and route calls.",
    },
    {
        icon: <FiActivity />,
        title: "Recording availability",
        description:
            "Enable recording where permitted and properly announced.",
    },
    {
        icon: <FiFileText />,
        title: "Transcription availability",
        description:
            "Convert calls or voicemail into searchable records where supported.",
    },
    {
        icon: <FiSettings />,
        title: "Admin controls",
        description:
            "Manage permissions, assignments, routing and settings centrally.",
    },
    {
        icon: <FiBarChart2 />,
        title: "Business reporting",
        description:
            "Track activity, missed opportunities and team performance.",
    },
];
const workflows = [
    {
        icon: <FiHome />,
        title: "Small business",
        description:
            "Local business with local numbers and professional call handling.",
        link: "Calling for small business →",
    },
    {
        icon: <FiPhoneCall />,
        title: "Sales teams",
        description:
            "Improve answer rates and follow-up with localized identity.",
        link: "Calling for sales teams →",
    },
    {
        icon: <FiHeadphones />,
        title: "Customer support",
        description:
            "Give customers familiar local numbers when they need help.",
        link: "Calling for support →",
    },
    {
        icon: <FiBriefcase />,
        title: "Professional services",
        description:
            "Trusted calling for lawyers, accountants, consultants and agencies.",
        link: "Calling for professional services →",
    },
    {
        icon: <FiUsers />,
        title: "Remote teams",
        description:
            "Answer calls without a legacy office phone system.",
        link: "Calling for remote teams →",
    },
    {
        icon: <FiGlobe />,
        title: "International expansion",
        description:
            "Your local business presence across multiple countries.",
        link: "Calling for expansion →",
    },
];
const skypeComparison = [
    {
        feature: "Local number",
        skype: "Basic local presence",
        zoiko: "Local phone numbers for business",
    },
    {
        feature: "Calling",
        skype: "Basic calling utility",
        zoiko: "Inbound & outbound business calling",
    },
    {
        feature: "Forwarding",
        skype: "Limited workflow",
        zoiko: "Forward to teams, devices, or fallback",
    },
    {
        feature: "Routing",
        skype: "Limited logic",
        zoiko: "Route by team, market, time, or urgency",
    },
    {
        feature: "Voicemail",
        skype: "Basic message capture",
        zoiko: "Smart voicemail & AI Receptionist",
    },
    {
        feature: "Teams",
        skype: "Limited administration",
        zoiko: "Assignment, labels, history, controls",
    },
];
const availabilityCards = [
    {
        icon: <FiGlobe />,
        title: "Country availability",
        description:
            "Calling features may differ by market and number type.",
    },
    {
        icon: <FiUserCheck />,
        title: "Verification",
        description:
            "Some countries require identity, address, or business verification.",
    },
    {
        icon: <FiAlertCircle />,
        title: "Emergency calling",
        description:
            "May be limited, unavailable, or require specific setup.",
    },
    {
        icon: <FiEdit3 />,
        title: "Recording & transcription",
        description:
            "May require notices, consent, or additional controls.",
    },
    {
        icon: <FiShield />,
        title: "Acceptable use",
        description:
            "Calling must comply with platform rules and applicable law.",
    },
    {
        icon: <FiTrendingUp />,
        title: "International rates",
        description:
            "Usage charges may vary by destination, plan, and number type.",
    },
];
const callingPlans = [
    {
        title: "Local Number + Calling",
        description:
            "For businesses that need a local number with basic inbound and outbound calling.",
        button: "View Plans",
        primary: false,
        popular: false,
    },
    {
        title: "Calling + Routing",
        description:
            "For teams needing forwarding, routing, voicemail, labels, and call history.",
        button: "Compare Plans",
        primary: true,
        popular: true,
    },
    {
        title: "Calling + AI Receptionist",
        description:
            "For missed-call capture, caller screening, summaries, and intelligent handoff.",
        button: "View AI Pricing",
        primary: false,
        popular: false,
    },
];
const pricingLinks = [
    "International calling rates",
    "Porting fees",
    "Business & volume pricing",
];
const faqItems = [
    {
        question: "What is Zoiko Local Calling?",
        answer:
            "Zoiko Local Calling gives your business a local phone number in the countries you serve — so customers can reach you on a familiar number, and your team can call, forward, and manage inbound calls from a single workspace.",
    },
    {
        question: "Can I receive calls with my Zoiko Local number?",
        answer:
            "Yes. Calls to your Zoiko Local number can be routed to your team, forwarded to a mobile or landline, or handled by an AI Receptionist — depending on your plan and configuration.",
    },
    {
        question: "Can I make outbound calls with my number?",
        answer:
            "Outbound calling is available on supported plans and in supported countries. When enabled, your local number appears as the caller ID so customers recognise who's calling.",
    },
    {
        question: "Can I forward calls to my team?",
        answer:
            "Yes. You can forward calls to individual team members, ring groups, or external numbers. Advanced routing rules let you define forwarding by time, department, or availability.",
    },
    {
        question: "Can Zoiko Local route calls by department or market?",
        answer:
            "Yes. With advanced routing, you can assign numbers to specific departments, markets, or teams. Calls can be labelled and directed based on the number dialled, time of day, or custom rules.",
    },
    {
        question: "Does Zoiko Local include smart voicemail?",
        answer:
            "Yes. Smart voicemail captures missed calls and turns them into structured summaries with caller intent and suggested next actions — available on plans that include AI features.",
    },
    {
        question: "Can Zoiko Local replace Skype calling?",
        answer:
            "Zoiko Local is designed as a business-grade alternative for teams moving away from Skype. It offers local numbers, inbound and outbound calling, forwarding, voicemail, and team routing in one workspace.",
    },
    {
        question: "Is emergency calling available?",
        answer:
            "Emergency calling availability varies by country and number type. In some markets it may be limited or unavailable. We recommend maintaining a separate emergency-capable line where required by local law",
    },
];
export default function Calling() {
    return (
        <>
            {/* ================= Hero ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] pt-10 lg:pt-14 pb-10 px-5 overflow-hidden">

                <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left Content */}

                    <div>

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-5">

                            Business Calling with Local Presence

                        </p>

                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.08] text-[#123533] dark:text-white">

                            Make and receive calls

                            <span className="block italic text-[#EB643F]">

                                like a local business.

                            </span>

                        </h1>

                        <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-400 max-w-xl">

                            Receive customer calls, make professional outbound calls,
                            route conversations to the right team, and capture every
                            missed call — all through one modern workspace powered by
                            your local numbers.

                        </p>

                        {/* Buttons */}

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">

                            <button className="h-12 px-7 rounded-xl bg-[#EB643F] text-white font-semibold hover:bg-[#d85a39] transition">

                                Start Calling →

                            </button>

                            <button className="h-12 px-7 rounded-xl border border-[#0F6660] text-[#123533] dark:text-white hover:bg-[#0F6660] hover:text-white transition">

                                Get a Local Number

                            </button>

                        </div>

                        {/* Skype */}

                        <div className="mt-7 text-sm text-gray-500 dark:text-gray-400">

                            Replacing Skype Calling?

                            <button className="ml-2 font-semibold text-[#EB643F] hover:underline">

                                Switch from Skype →

                            </button>

                        </div>

                        {/* Features */}

                        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">

                            {features.map((feature) => (

                                <div
                                    key={feature}
                                    className="flex items-center gap-2"
                                >

                                    <FiCheck className="text-[#0F6660]" />

                                    <span className="text-sm text-[#123533] dark:text-gray-300">

                                        {feature}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Right Card */}

                    <div className="relative flex justify-center lg:justify-end">

                        <div className="w-full max-w-md rounded-3xl overflow-hidden bg-white dark:bg-slate-800 shadow-2xl">

                            {/* Header */}

                            <div className="bg-[#0F6660] px-6 py-4 flex items-center justify-between">

                                <span className="text-white text-sm font-medium">

                                    Zoiko Consulting · Calling

                                </span>

                                <div className="flex items-center gap-2">

                                    <div className="w-2 h-2 rounded-full bg-green-300" />

                                    <span className="text-[11px] tracking-widest text-green-200 uppercase">

                                        Incoming

                                    </span>

                                </div>

                            </div>

                            {/* Incoming */}

                            <div className="p-5">

                                <div className="rounded-2xl bg-[#EEF3F1] dark:bg-slate-700 p-4 flex gap-4 items-center">

                                    <div className="w-12 h-12 rounded-full bg-[#0F6660] text-white flex items-center justify-center">

                                        <FiPhoneCall />

                                    </div>

                                    <div className="flex-1">

                                        <h4 className="font-semibold text-[#123533] dark:text-white">

                                            Incoming · London

                                        </h4>

                                        <p className="text-xs text-gray-500 dark:text-gray-400">

                                            +44 20 7946 0958

                                        </p>

                                    </div>

                                    <span className="text-[11px] bg-[#FCE8E2] text-[#EB643F] px-2 py-1 rounded-full font-medium">

                                        UK • Sales

                                    </span>

                                </div>

                                {/* Actions */}

                                <div className="grid grid-cols-2 gap-3 mt-5">

                                    <button className="h-11 rounded-lg bg-[#2E8B57] text-white text-sm font-semibold flex items-center justify-center gap-2">

                                        <FiPhone />

                                        Answer

                                    </button>

                                    <button className="h-11 rounded-lg bg-[#F5F2EC] dark:bg-slate-700 text-[#123533] dark:text-white text-sm font-semibold flex items-center justify-center gap-2">

                                        <FiArrowRight />

                                        Route to team

                                    </button>

                                    <button className="h-11 rounded-lg bg-[#F5F2EC] dark:bg-slate-700 text-[#123533] dark:text-white text-sm font-semibold flex items-center justify-center gap-2">

                                        <FiRotateCcw />

                                        Forward

                                    </button>

                                    <button className="h-11 rounded-lg bg-[#F5F2EC] dark:bg-slate-700 text-[#123533] dark:text-white text-sm font-semibold flex items-center justify-center gap-2">

                                        <FiMic />

                                        Send to AI

                                    </button>

                                </div>

                                {/* Footer */}

                                <div className="mt-6 pt-5 border-t border-[#ECE6DB] dark:border-slate-700">

                                    <p className="uppercase tracking-widest text-[10px] text-gray-400 mb-3">

                                        Auto Assigned

                                    </p>

                                    <div className="flex items-center gap-3">

                                        <div className="w-8 h-8 rounded-full bg-[#EB643F] text-white flex items-center justify-center text-xs font-bold">

                                            S

                                        </div>

                                        <div>

                                            <p className="text-sm text-gray-500 dark:text-gray-400">

                                                Routed to

                                                <span className="font-semibold text-[#123533] dark:text-white">

                                                    {" "}Sarah · UK Sales Team

                                                </span>

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= Calling Workflow ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A]">

                {/* ================= Top Timeline ================= */}

                <div className="bg-[#FFFFFF] dark:bg-[#0F172A] border-y border-[#E5DDD2] dark:border-slate-700">

                    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">

                        {processSteps.map((step, index) => (

                            <div
                                key={index}
                                className="px-8 py-8 border-r last:border-r-0 border-[#E5DDD2] dark:border-slate-700"
                            >

                                <p className="text-[#EB643F] italic text-2xl font-semibold">

                                    {step.number}

                                </p>

                                <h3 className="mt-4 font-semibold text-[#123533] dark:text-white">

                                    {step.title}

                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">

                                    {step.description}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

                {/* ================= Inbound Calling ================= */}

                <div className="max-w-6xl mx-auto px-5 py-24 grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left */}

                    <div>

                        <p className="uppercase tracking-[0.28em] text-[11px] text-[#EB643F] font-semibold">

                            Inbound Calling

                        </p>

                        <h2 className="mt-5 text-4xl font-bold leading-tight text-[#123533] dark:text-white">

                            Let customers call a

                            <br />

                            number they recognize.

                        </h2>

                        <p className="mt-7 text-gray-500 dark:text-gray-400 leading-8">

                            Customers trust numbers that feel local. Receive calls through
                            your local numbers and control exactly what happens next —
                            answer, route, forward or hand off to your AI Receptionist.

                        </p>

                        <div className="mt-8 space-y-4">

                            {inboundFeatures.map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-3 border-b border-[#ECE5DA] dark:border-slate-700 pb-3"
                                >

                                    <FiCheck className="text-[#0F6660]" />

                                    <span className="text-sm text-[#123533] dark:text-gray-300">

                                        {item}

                                    </span>

                                </div>

                            ))}

                        </div>

                        <button className="mt-10 h-12 px-7 rounded-full bg-[#EB643F] hover:bg-[#d85a39] text-white font-semibold transition">

                            Start Receiving Calls →

                        </button>

                    </div>

                    {/* Right */}

                    <div className="flex justify-center">

                        <div className="w-full max-w-md rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-xl border border-[#E7DFD3] dark:border-slate-700">

                            {/* Header */}

                            <div className="bg-[#0B5C56] h-14 flex items-center px-6">

                                <h3 className="text-white text-sm font-medium">

                                    Outbound · Choose your identity

                                </h3>

                            </div>

                            {/* Body */}

                            <div className="relative p-5">

                                {/* Timeline */}

                                <div className="absolute left-[36px] top-10 bottom-16 w-px bg-[#F26A3D]" />

                                <div className="space-y-4">

                                    {callingIdentity.map((item) => (

                                        <div
                                            key={item.title}
                                            className="relative flex items-center justify-between rounded-xl border border-[#DDD5C9] dark:border-slate-700 bg-[#F5F2EC] dark:bg-slate-700 px-4 py-3"
                                        >

                                            {/* Left */}

                                            <div className="flex items-center gap-3">

                                                <div className="relative z-10 w-9 h-9 rounded-lg bg-[#0B5C56] flex items-center justify-center text-white">

                                                    <FiMapPin size={15} />

                                                </div>

                                                <span className="font-medium text-[#123533] dark:text-white text-[15px]">

                                                    {item.title}

                                                </span>

                                            </div>

                                            {/* Right */}

                                            <span className="text-xs text-gray-500 dark:text-gray-300 whitespace-nowrap">

                                                {item.flag} {item.number}

                                            </span>

                                        </div>

                                    ))}

                                </div>

                                {/* Footer */}

                                <p className="mt-5 text-xs leading-5 text-gray-500 dark:text-gray-400">

                                    Each call shows a local caller identity your contact recognizes —
                                    where supported by country and number type.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                {/* ================= Outbound Calling ================= */}

                <div className="max-w-3xl mx-auto text-center px-5 pb-24">

                    <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F]">

                        Outbound Calling

                    </p>

                    <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                        Call with an identity that

                        <br />

                        matches the market.

                    </h2>

                    <p className="mt-7 text-gray-500 dark:text-gray-400 leading-8">

                        Outbound calls shouldn't look random or unfamiliar. Make
                        professional calls using an assigned local number where
                        supported, so customers recognize who's calling and why.

                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                        <button className="h-12 md:h-14 px-7 py-4 rounded-xl bg-[#EB643F] text-white font-semibold hover:bg-[#d85a39] transition">

                            Start Calling →

                        </button>

                        <button className="h-12 md:h-14 px-7 py-4 rounded-xl border border-[#0F6660] text-[#123533] dark:text-white hover:bg-[#0F6660] hover:text-white transition">

                            View Calling Plans

                        </button>

                    </div>
                </div>
            </section>
            {/* ================= Forwarding ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5 space-y-28">

                    {/* ============================================ */}

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left */}

                        <div>

                            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F]">

                                Call Forwarding

                            </p>

                            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#123533] dark:text-white">

                                Forward calls to whoever

                                <br />

                                can actually answer.

                            </h2>

                            <p className="mt-6 text-gray-500 dark:text-gray-400 leading-8">

                                Calls shouldn't stop at one desk or one unavailable
                                person. Forward to mobile, desktop, a department,
                                another location, fallback number, or your AI
                                Receptionist after no answer.

                            </p>

                            <div className="mt-8 space-y-4">

                                {forwardingFeatures.map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3 border-b border-[#E6DDD1] dark:border-slate-700 pb-3"
                                    >

                                        <FiCheck className="text-[#EB643F]" />

                                        <span className="text-sm text-[#123533] dark:text-gray-300">

                                            {item}

                                        </span>

                                    </div>

                                ))}

                            </div>

                            <button className="mt-10 h-11 px-7 rounded-xl border border-[#0F6660] text-[#123533] dark:text-white hover:bg-[#0F6660] hover:text-white transition">

                                Set Up Call Forwarding

                            </button>

                        </div>

                        {/* Right */}

                        <div className="flex justify-center">

                            <div className="w-full max-w-md rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-xl border border-[#E4DBCF] dark:border-slate-700">

                                <div className="bg-[#0B5C56] text-white text-sm px-6 py-4">

                                    Call forwarding · No answer fallback

                                </div>

                                <div className="p-5 space-y-3">

                                    {fallbackFlow.map((item) => (

                                        <div
                                            key={item.title}
                                            className={`flex items-center justify-between rounded-xl border px-4 py-3 transition
                                ${item.active
                                                    ? "border-[#EB643F] bg-[#FFF5F1]"
                                                    : "border-[#DDD5C9] bg-[#F6F3EE]"
                                                }`}
                                        >

                                            <div className="flex items-center gap-3">

                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center
                                    ${item.active
                                                        ? "bg-[#EB643F] text-white"
                                                        : "bg-[#0B5C56] text-white"
                                                    }`}>

                                                    {item.icon}

                                                </div>

                                                <span className="font-medium">

                                                    {item.title}

                                                </span>

                                            </div>

                                            <span className={`text-xs
                                ${item.active
                                                    ? "text-[#EB643F]"
                                                    : "text-gray-500"
                                                }`}>

                                                {item.status}

                                            </span>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* ============================================ */}

                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Left */}

                        <div>

                            <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F]">

                                Team Routing

                            </p>

                            <h2 className="mt-5 text-4xl font-bold leading-tight text-[#123533] dark:text-white">

                                Send each call to the right

                                <br />

                                team before the

                                <br />

                                opportunity is lost.

                            </h2>

                            <p className="mt-6 text-gray-500 dark:text-gray-400 leading-8">

                                Direct calls based on purpose, urgency, location,
                                department or availability. Sales calls to Sales.
                                Support to Support. Urgent calls prioritised.
                                Missed calls captured.

                            </p>

                            <button className="mt-10 h-11 px-7 rounded-xl bg-[#EB643F] text-white hover:bg-[#d85b39] transition">

                                See Team Routing →

                            </button>

                        </div>

                        {/* Right */}

                        <div className="flex justify-center">

                            <div className="w-full max-w-[430px] rounded-xl overflow-hidden border border-[#E5DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg">

                                {/* Header */}

                                <div className="h-12 bg-[#0B5C56] flex items-center px-5">

                                    <h3 className="text-white text-[13px] font-medium tracking-wide">
                                        Routing rules
                                    </h3>

                                </div>

                                {/* Rules */}

                                <div>

                                    {routingRules.map((rule, index) => (

                                        <div
                                            key={rule.tag}
                                            className={`flex items-center gap-3 px-5 h-12 transition-colors duration-200
            ${index !== routingRules.length - 1
                                                    ? "border-b border-[#ECE6DB] dark:border-slate-700"
                                                    : ""
                                                }
            hover:bg-[#FAF8F4] dark:hover:bg-slate-700/40`}
                                        >

                                            {/* Badge */}

                                            <span
                                                className={`shrink-0 min-w-[78px] text-center rounded-md px-2 py-1 text-[10px] font-semibold leading-none
              ${rule.orange
                                                        ? "bg-[#FDE9E3] text-[#EB643F]"
                                                        : "bg-[#EAF5F2] text-[#0F6660]"
                                                    }`}
                                            >
                                                {rule.tag}
                                            </span>

                                            {/* Divider */}

                                            <span className="text-[#C8C1B8] dark:text-slate-500 text-xs">
                                                →
                                            </span>

                                            {/* Value */}

                                            <p className="text-[13px] font-medium text-[#123533] dark:text-white leading-none">

                                                {rule.value}

                                            </p>

                                        </div>

                                    ))}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= Voicemail & Identity ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 md:py-14">

                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="text-center max-w-3xl mx-auto">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F]">

                            Voicemail & Identity

                        </p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            Capture every message.

                            <br />

                            Know every number.

                        </h2>

                    </div>

                    {/* Cards */}

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

                        {voicemailCards.map((card) => (

                            <div
                                key={card.title}
                                className="rounded-2xl border border-[#E5DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 p-7 transition hover:-translate-y-1 hover:shadow-lg"
                            >

                                <div className="w-10 h-10 rounded-lg bg-[#EEF5F2] dark:bg-slate-700 flex items-center justify-center text-[#0F6660]">

                                    {card.icon}

                                </div>

                                <h3 className="mt-5 text-lg font-semibold text-[#123533] dark:text-white">

                                    {card.title}

                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">

                                    {card.description}

                                </p>

                                <button className="mt-5 text-[#EB643F] text-sm font-medium hover:underline">

                                    {card.link}

                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Call History ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left */}
                    <div>
                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F]">
                            Call History
                        </p>

                        <h2 className="mt-5 text-4xl font-bold leading-tight text-[#123533] dark:text-white">

                            See who called,

                            <br />

                            who answered,

                            <br />

                            and what happened next.

                        </h2>

                        <p className="mt-7 text-gray-500 dark:text-gray-400 leading-8">

                            Business calling needs accountability. Review inbound,
                            outbound, missed, forwarded, and voicemail activity —
                            with routing paths, team ownership, and follow-up needs.

                        </p>

                        <div className="mt-8 space-y-4">

                            {features1.map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-3 border-b border-[#E7DFD3] dark:border-slate-700 pb-3"
                                >

                                    <FiCheck className="text-[#EB643F]" />

                                    <span className="text-sm text-[#123533] dark:text-gray-300">

                                        {item}

                                    </span>

                                </div>

                            ))}

                        </div>

                        <button className="mt-10 h-11 px-7 rounded-xl border border-[#0F6660] text-[#123533] dark:text-white hover:bg-[#0F6660] hover:text-white transition">

                            View Call History

                        </button>

                    </div>

                    {/* Right */}

                    <div className="flex justify-center">

                        <div className="w-full max-w-md overflow-hidden rounded-xl border border-[#E5DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg">

                            <div className="bg-[#0B5C56] h-12 flex items-center px-5">

                                <h3 className="text-white text-[13px] font-medium">

                                    Call history

                                </h3>

                            </div>

                            {/* Header */}

                            <div className="grid grid-cols-4 bg-[#F8F5F1] dark:bg-slate-700 px-5 py-3 text-[10px] uppercase tracking-wide text-gray-500">

                                <span>Number</span>

                                <span>Direction</span>

                                <span>Assigned</span>

                                <span>Outcome</span>

                            </div>

                            {/* Rows */}

                            {historyRows.map((row) => (

                                <div
                                    key={row.number + row.status}
                                    className="grid grid-cols-4 items-center px-5 py-3 border-t border-[#ECE6DB] dark:border-slate-700 text-[13px]"
                                >

                                    <span className="font-medium text-[#0F6660]">

                                        {row.number}

                                    </span>

                                    <span>{row.direction}</span>

                                    <span>{row.assigned}</span>

                                    <span>

                                        <span
                                            className={`rounded-full px-2 py-1 text-[10px] font-semibold
                ${row.color === "green"
                                                    ? "bg-[#EAF5F2] text-[#0F6660]"
                                                    : row.color === "yellow"
                                                        ? "bg-[#FFF3D8] text-[#D48806]"
                                                        : "bg-[#FDE9E3] text-[#EB643F]"
                                                }`}
                                        >
                                            {row.status}
                                        </span>

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= Calling Add-ons ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F]">

                            Calling Add-ons

                        </p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            Add the controls your business

                            <br />

                            needs as calling grows.

                        </h2>

                        <p className="mt-6 text-gray-500 dark:text-gray-400 leading-7">

                            Scale from simple calling to advanced business workflows —
                            extend the core service as your team and markets expand.

                        </p>

                    </div>

                    {/* Grid */}

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-[#E5DDD2] dark:border-slate-700 rounded-xl overflow-hidden">

                        {addOns.map((item, index) => (

                            <div
                                key={item.title}
                                className={`bg-white dark:bg-slate-800 p-7 transition hover:bg-[#FAF8F5] dark:hover:bg-slate-700
                    ${index % 3 !== 2
                                        ? "lg:border-r border-[#E5DDD2] dark:border-slate-700"
                                        : ""
                                    }
                    ${index < 3
                                        ? "border-b border-[#E5DDD2] dark:border-slate-700"
                                        : ""
                                    }`}
                            >

                                <div className="w-10 h-10 rounded-lg bg-[#EEF5F2] dark:bg-slate-700 flex items-center justify-center text-[#0F6660]">

                                    {item.icon}

                                </div>

                                <h3 className="mt-5 text-lg font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                    {/* CTA */}

                    <div className="mt-10 flex justify-center">

                        <button className="h-11 px-8 rounded-full border border-[#D7D0C6] dark:border-slate-600 bg-white dark:bg-slate-800 text-[#123533] dark:text-white font-semibold hover:bg-[#0F6660] hover:text-white transition">

                            Explore Calling Add-ons

                        </button>

                    </div>

                </div>

            </section>
            {/* ================= Workflows ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}

                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F]">

                            Real-World Workflows

                        </p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            Calling workflows for teams that

                            <br />

                            depend on being reachable.

                        </h2>

                    </div>

                    {/* Cards */}

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {workflows.map((item) => (

                            <div
                                key={item.title}
                                className="group rounded-2xl bg-[#EEF6F4] dark:bg-slate-800 p-7 transition hover:-translate-y-1 hover:shadow-lg"
                            >

                                <div className="w-11 h-11 rounded-xl bg-[#0F6660] text-white flex items-center justify-center">

                                    {item.icon}

                                </div>

                                <h3 className="mt-5 text-lg font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">

                                    {item.description}

                                </p>

                                <button className="mt-5 text-sm font-medium text-[#EB643F] hover:underline">

                                    {item.link}

                                </button>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Skype Comparison ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F]">

                            Skype Calling Replacement

                        </p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            Used Skype for calling?

                            <br />

                            Move forward with Zoiko Local.

                        </h2>

                        <p className="mt-6 text-gray-500 dark:text-gray-400 leading-7 max-w-2xl mx-auto">

                            Skype is no longer in operation. If your business relied on it
                            for calling, local numbers, or voicemail, Zoiko Local is the
                            modern path forward.

                        </p>

                    </div>

                    {/* ================= Table ================= */}

                    <div className="mt-14 overflow-hidden rounded-2xl border border-[#E5DDD2] dark:border-slate-700 shadow-sm">

                        {/* Header */}

                        <div className="grid grid-cols-3 bg-[#0B5C56]">

                            <div className="px-6 py-4 text-white text-sm font-semibold border-r border-[#0A504B]">

                                What you need

                            </div>

                            <div className="px-6 py-4 text-white text-sm font-semibold border-r border-[#0A504B]">

                                Legacy Skype use

                            </div>

                            <div className="px-6 py-4 text-white text-sm font-semibold">

                                Zoiko Local

                            </div>

                        </div>

                        {/* Rows */}

                        {skypeComparison.map((row, index) => (

                            <div
                                key={row.feature}
                                className={`grid grid-cols-3 bg-white dark:bg-slate-800
                    ${index !== skypeComparison.length - 1
                                        ? "border-b border-[#ECE6DB] dark:border-slate-700"
                                        : ""
                                    }`}
                            >

                                {/* Feature */}

                                <div className="px-6 py-5 font-semibold text-[#123533] dark:text-white border-r border-[#ECE6DB] dark:border-slate-700">

                                    {row.feature}

                                </div>

                                {/* Skype */}

                                <div className="px-6 py-5 text-gray-500 dark:text-gray-400 border-r border-[#ECE6DB] dark:border-slate-700">

                                    {row.skype}

                                </div>

                                {/* Zoiko */}

                                <div className="px-6 py-5 font-medium text-[#0F6660] dark:text-green-400 bg-[#F4F8F7] dark:bg-slate-700">

                                    {row.zoiko}

                                </div>

                            </div>

                        ))}

                    </div>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

                        <button className="h-12 px-8 rounded-xl bg-[#EB643F] text-white font-semibold hover:bg-[#D95B38] transition">

                            Switch from Skype →

                        </button>

                        <button className="h-12 px-8 rounded-xl border border-[#0F6660] text-[#123533] dark:text-white hover:bg-[#0F6660] hover:text-white transition">

                            Read Migration Guide

                        </button>

                    </div>

                </div>

            </section>
            {/* ================= Availability & Rules ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 md:py-14 px-5">
                <div className="max-w-6xl mx-auto">
                    {/* Heading */}

                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">

                            <span className="w-8 h-px bg-[#EB643F]" />

                            Availability & Rules

                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-[#123533] dark:text-white">

                            Calling availability varies by country

                            <br />

                            and configuration.

                        </h2>

                        <p className="mt-6 text-base md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mx-auto">

                            Calling, forwarding, outbound, emergency services,
                            recording, transcription, AI processing, verification,
                            and routing may vary by country, carrier partner,
                            number type, and applicable law.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                        {availabilityCards.map((card) => (

                            <div
                                key={card.title}
                                className="group min-h-[170px] rounded-2xl border border-[#E5DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 px-7 py-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0F6660]/20"
                            >

                                {/* Icon */}

                                <div className="w-10 h-10 rounded-xl bg-[#EEF5F2] dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-lg transition-transform duration-300 group-hover:scale-110">

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

                    {/* Buttons */}

                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">

                        <button className="h-11 px-8 rounded-full border border-[#D7D0C6] dark:border-slate-600 bg-white dark:bg-slate-800 text-[#123533] dark:text-white text-sm font-semibold transition-all duration-300 hover:bg-[#0F6660] hover:border-[#0F6660] hover:text-white">

                            Check Country Rules

                        </button>

                        <button className="h-11 px-8 rounded-full border border-[#0F6660] text-[#123533] dark:text-white text-sm font-semibold transition-all duration-300 hover:bg-[#0F6660] hover:text-white">

                            Talk to Sales

                        </button>

                    </div>

                </div>

            </section>
            {/* ================= Calling Plans ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 md:py-14 px-5">

                <div className="max-w-6xl mx-auto">

                    {/* Heading */}

                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] mb-4 flex items-center justify-center gap-2">

                            <span className="w-8 h-px bg-[#EB643F]" />

                            Calling Plans

                        </p>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            Choose the calling setup that fits

                            <br />

                            your business.

                        </h2>

                    </div>

                    {/* Cards */}

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

                        {callingPlans.map((plan) => (

                            <div
                                key={plan.title}
                                className={`relative rounded-2xl border p-7 flex flex-col justify-between min-h-[250px] transition-all duration-300
                                    ${plan.popular
                                        ? "border-[#EB643F] bg-white dark:bg-slate-800 shadow-lg"
                                        : "border-[#E5DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 hover:shadow-md"
                                    }`}
                            >

                                {/* Popular Badge */}

                                {plan.popular && (

                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">

                                        <span className="px-4 py-1 rounded-full bg-[#EB643F] text-white text-[10px] font-semibold">

                                            Most popular

                                        </span>

                                    </div>

                                )}

                                {/* Content */}

                                <div>

                                    <h3 className="text-lg font-semibold text-[#123533] dark:text-white">

                                        {plan.title}

                                    </h3>

                                    <p className="mt-4 text-sm leading-6 text-gray-500 dark:text-gray-400">

                                        {plan.description}

                                    </p>

                                </div>

                                {/* Button */}

                                <button
                                    className={`mt-8 h-11 w-full rounded-xl text-sm font-semibold transition-all duration-300
                                        ${plan.primary
                                            ? "bg-[#EB643F] text-white hover:bg-[#D95B38]"
                                            : "border border-[#0F6660] bg-white dark:bg-slate-800 text-[#123533] dark:text-white hover:bg-[#0F6660] hover:text-white"
                                        }`}
                                >
                                    {plan.button}
                                </button>

                            </div>

                        ))}

                    </div>

                    {/* Bottom Links */}

                    <div className="mt-10 flex flex-wrap justify-center gap-6">

                        {pricingLinks.map((link) => (

                            <button
                                key={link}
                                className="text-[13px] font-medium text-[#EB643F] hover:underline"
                            >
                                {link}
                            </button>

                        ))}

                    </div>

                </div>

            </section>
            {/* ================= FAQ's ================= */}
            <Faq
                heading="Questions"
                subHeading="Business calling, answered."
                items={faqItems}
            />
            {/* ================= Final CTA ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] py-10 lg:py-14 px-5">
                <div className="max-w-6xl mx-auto">
                    <div className="relative overflow-hidden rounded-[20px] bg-gradient-to-r from-[#0C5B55] via-[#084C47] to-[#053A37] px-8 py-16 lg:px-16">

                        {/* Background Glow */}

                        <div className="absolute -top-24 -right-20 w-72 h-72 rounded-full bg-[#0F6660]/20 blur-[120px]" />

                        <div className="absolute -bottom-24 -left-20 w-72 h-72 rounded-full bg-[#0F6660]/15 blur-[120px]" />

                        <div className="relative z-10 max-w-3xl mx-auto text-center">
                            {/* Heading */}
                            <h2 className="text-3xl md:text-5xl font-bold leading-tight text-white">
                                Turn your local number into a
                                <span className="block text-[#EB643F] italic">
                                    business calling system.
                                </span>

                            </h2>

                            {/* Description */}
                            <p className="mt-6 text-sm md:text-base leading-7 text-gray-200 max-w-xl mx-auto">

                                Receive customer calls, route professionally,
                                forward calls, AI Receptionist, voicemail,
                                and conversations — all powered by your
                                trusted local business number.

                            </p>

                            {/* Buttons */}
                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

                                {/* Primary */}
                                <button
                                    className="h-11 px-7 rounded-full bg-[#EB643F] text-white text-sm font-semibold transition-all duration-300 hover:bg-[#D95A38] hover:shadow-lg"
                                >
                                    Start Calling →
                                </button>

                                {/* Secondary */}
                                <button
                                    className="h-11 px-7 rounded-full bg-white text-[#123533] text-sm font-semibold transition-all duration-300 hover:bg-gray-100"
                                >
                                    Get a Local Number
                                </button>

                                {/* Outline */}
                                <button
                                    className="h-11 px-7 rounded-full border border-[#5E8C88] text-white text-sm font-semibold transition-all duration-300 hover:border-white hover:bg-white/10"
                                >
                                    Talk to Sales
                                </button>
                            </div>

                            {/* Bottom Link */}
                            <p className="mt-8 text-[12px] text-gray-300">
                                Replacing Skype Calling?
                                <button className="ml-1 text-[#EB643F] font-medium hover:underline">
                                    Switch from Skype →
                                </button>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
