import React from 'react';
import {
    FiArrowRight,
    FiCheck, FiPhone, FiDollarSign,
    FiTrendingUp, FiHeadphones,
    FiCheckSquare, FiGlobe,
    FiPlusCircle, FiClipboard,
    FiShoppingCart, FiHome,
    FiFileText, FiLink, FiUsers,
    FiMessageSquare, FiUser, FiClock,
} from "react-icons/fi";
import Faq from '../Components/Faq';

const receptionistFeatures = [
    "Answers when your team sleeps",
    "Qualifies before handoff",
    "Captures messages & callbacks",
];
const missedCallProblems = [
    {
        icon: <FiCheck />,
        title: "Missed enquiries",
        description:
            "Customers call once, then choose the next provider who answers.",
    },
    {
        icon: <FiUser />,
        title: "Busy teams",
        description:
            "Staff can't answer every call while serving customers and running operations.",
    },
    {
        icon: <FiClock />,
        title: "After-hours demand",
        description:
            "Customers call outside office hours — across time zones and mobile-first markets.",
    },
    {
        icon: <FiUsers />,
        title: "Weak follow-up",
        description:
            "Voicemails and manual notes create gaps, delays and lost context.",
    },
];
const aiSteps = [
    {
        number: "1",
        title: "Answer",
        description:
            "AI Receptionist answers calls on your selected Zoiko Local numbers.",
    },
    {
        number: "2",
        title: "Understand",
        description:
            "It identifies intent, urgency, customer type and the reason for the call.",
    },
    {
        number: "3",
        title: "Route",
        description:
            "It sends the caller to the right person, team, location, booking path, or callback queue.",
    },
    {
        number: "4",
        title: "Capture",
        description:
            "It records key details, creates a summary and prepares the next action.",
    },
];
const handlingFeatures = [
    "New enquiries, support, and pricing questions",
    "Appointment requests and location routing",
    "Callback capture and after-hours intake",
];
const controlRules = [
    {
        label: "Greeting script",
        value: "Custom",
        toggle: false,
    },
    {
        label: "Business hours",
        value: "Mon–Fri · 9–6",
        toggle: false,
    },
    {
        label: "Department routing",
        toggle: true,
    },
    {
        label: "After-hours capture",
        toggle: true,
    },
    {
        label: "Human handoff rules",
        toggle: true,
    },
    {
        label: "Consent & disclosure",
        toggle: true,
    },
];
const businessOutcomes = [
    {
        icon: <FiDollarSign />,
        title: "Capture more enquiries",
        description:
            "Reduce lost opportunities from unanswered calls and missed voicemails.",
    },
    {
        icon: <FiClock />,
        title: "Respond faster",
        description:
            "Give customers an immediate answer path instead of waiting for a callback.",
    },
    {
        icon: <FiTrendingUp />,
        title: "Route calls better",
        description:
            "Send calls to the right team, location, person, or workflow.",
    },
    {
        icon: <FiHeadphones />,
        title: "Reduce front-desk pressure",
        description:
            "Let staff focus on higher-value work while AI handles repetitive intake.",
    },
    {
        icon: <FiCheckSquare />,
        title: "Improve follow-up",
        description:
            "Turn calls into summaries, tasks, callbacks, and customer history.",
    },
    {
        icon: <FiGlobe />,
        title: "Extend coverage",
        description:
            "Support after-hours, overflow, weekends, and multi-time-zone demand.",
    },
];
const identifyTags = [
    "New sales enquiry",
    "Existing support",
    "Appointment request",
    "Billing question",
    "Urgent escalation",
    "Location-specific",
    "Callback request",
    "Supplier / partner",
    "Recruitment / HR",
    "General info",
];
const routeTags = [
    "Sales",
    "Support",
    "Accounts",
    "Bookings",
    "Local branch",
    "Named team member",
    "Overflow queue",
    "Voicemail",
    "Callback task",
    "Human receptionist",
];
const afterHoursFeatures = [
    "After-hours answering and weekend coverage",
    "Overflow when your team is already on a call",
    "Appointment, message, and callback capture",
    "Multi-location routing by city or branch",
];
const captureRows = [
    { label: "Caller", value: "Sarah Johnson" },
    { label: "Reason", value: "Pricing enquiry" },
    { label: "Urgency", value: "Today" },
    { label: "Preferred time", value: "3:00 PM" },
    { label: "Assigned to", value: "Sales Team" },
    { label: "Source", value: "AI Receptionist" },
    { label: "Status", value: "Pending" },
];
const connectedFeatures = [
    {
        icon: <FiPhone />,
        title: "Assigned to local numbers",
        description:
            "Attach AI Receptionist to selected numbers by country, team or branch.",
    },
    {
        icon: <FiFileText />,
        title: "Greetings by number",
        description:
            "Use different scripts by number, country, team or location.",
    },
    {
        icon: <FiLink />,
        title: "Connected history",
        description:
            "Link call notes to customer history where available across calling and video.",
    },
];
const useCases = [
    {
        icon: <FiFileText />,
        title: "Professional services",
        description:
            "Law firms, accountants, consultants, agencies — capture enquiries, qualify matters, route urgent calls, and protect client confidence.",
    },
    {
        icon: <FiPlusCircle />,
        title: "Healthcare & wellness",
        description:
            "Clinics, practices, therapists — support appointment intake and routing, subject to appropriate compliance and consent settings.",
    },
    {
        icon: <FiClipboard />,
        title: "Trades & field services",
        description:
            "Contractors, repair teams, installers — capture job requests, urgency, location, and callback details.",
    },
    {
        icon: <FiShoppingCart />,
        title: "E-commerce & retail",
        description:
            "Online stores and local retailers — help with order queries, product questions, opening times, and escalation.",
    },
    {
        icon: <FiHome />,
        title: "Real estate & property",
        description:
            "Agents, property managers, lettings — route buyers, tenants, landlords, vendors, and maintenance requests.",
    },
    {
        icon: <FiGlobe />,
        title: "Multi-location businesses",
        description:
            "Branches, franchises, regional teams — keep call handling consistent across locations and teams.",
    },
];
const handoffFeatures = [
    "Human handoff and urgent-call escalation rules",
    "Admin-controlled scripts and response boundaries",
    "Consent notices and call-summary review",
    "VIP / known-caller handling and fallback routing",
];
const escalationRules = [
    "Urgent call → on-call senior",
    '"Speak to a person" → human',
    "Known VIP caller → priority",
    "Out of scope → fallback queue",
    "Consent disclosure played",
];
const skypeComparison = [
    {
        need: "Local number presence",
        skype: "Receive calls",
        zoiko: "Local numbers with intelligent answering",
    },
    {
        need: "Missed calls",
        skype: "Voicemail or manual callback",
        zoiko: "AI call capture and routing",
    },
    {
        need: "Customer enquiries",
        skype: "Manual handling",
        zoiko: "Intent detection and structured intake",
    },
    {
        need: "After-hours calls",
        skype: "Often missed",
        zoiko: "Professional after-hours response",
    },
    {
        need: "Call routing",
        skype: "Basic or manual",
        zoiko: "Rules-based routing and escalation",
    },
    {
        need: "Follow-up",
        skype: "Manual notes",
        zoiko: "Summaries, callback tasks, customer context",
    },
];
const aiPlans = [
    {
        title: "AI Receptionist Starter",
        description:
            "For small teams that need professional answering and basic call capture.",
        button: "View Starter Plan",
        primary: false,
        popular: false,
    },
    {
        title: "AI Receptionist Business",
        description:
            "For growing businesses needing routing, overflow, after-hours, and follow-up workflows.",
        button: "Compare Business Plans",
        primary: true,
        popular: true,
    },
    {
        title: "AI Receptionist Advanced",
        description:
            "For multi-location teams, higher volumes, advanced routing, and AI summaries where available.",
        button: "Talk to Sales",
        primary: false,
        popular: false,
    },
];
const faqItems = [
    {
        question: "What is Zoiko Local AI Receptionist?",
        answer:
            "Zoiko Local AI Receptionist is an intelligent call-answering layer connected to your local business numbers. It answers, qualifies, routes, and captures customer calls automatically — so you never miss an opportunity, even when your team is busy or offline.",
    },
    {
        question: "Does it replace my receptionist?",
        answer:
            "No — it works alongside your team. AI Receptionist handles overflow, after-hours, and routine enquiries, freeing your staff to focus on high-value interactions. It escalates to a human whenever needed, based on rules you control.",
    },
    {
        question: "Can it answer calls after hours?",
        answer:
            "Yes. AI Receptionist is always on. You can configure separate after-hours scripts, routing rules, and escalation behaviour so customers always reach the right response — even at midnight or on weekends.",
    },
    {
        question: "Can it route calls to my team?",
        answer:
            "Yes. Calls can be routed to specific team members, departments, locations, or a callback queue based on intent, urgency, caller identity, and business rules you define in your dashboard.",
    },
    {
        question: "Can customers speak to a person?",
        answer:
            "Absolutely. Saying speak to a person or similar triggers an immediate handoff. You configure when and how human escalation happens — so customers always have a clear path to your team when they need it.",
    },
    {
        question: "Can I control what the AI says?",
        answer:
            "Yes. You control the greeting, business context, response boundaries, and what topics the AI can and cannot address. Scripts and escalation rules are fully admin-configurable from your dashboard.",
    },
    {
        question: "Is it suitable for regulated businesses?",
        answer:
            "AI Receptionist includes consent disclosure features and is configurable to meet specific industry requirements. For highly regulated industries (healthcare, finance, legal), we recommend reviewing your jurisdiction's requirements before deployment.",
    },
    {
        question: "Can it replace Skype?",
        answer:
            "Zoiko Local goes well beyond what Skype offered. Where Skype provided basic calling and numbers, Zoiko Local adds intelligent answering, routing, call capture, follow-up tasks, and team workflows — all connected to local numbers in 100+ countries.",
    },
];

export default function Aireceptionist() {
    return (
        <>
            {/* ================= AI Receptionist Hero ================= */}
            <section className="bg-[#F6F3ED] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* ================= Left ================= */}
                        <div>
                            <div className="flex items-center gap-3">
                                <span className="w-8 h-px bg-[#EB643F]" />
                                <p className="uppercase tracking-[0.28em] text-[10px] font-semibold text-[#EB643F]">

                                    AI Receptionist for Local Business Numbers

                                </p>
                            </div>

                            <h1 className="mt-7 text-[42px] md:text-[58px] font-bold leading-[1.15] dark:text-white">

                                Never let a valuable

                                <br />

                                customer call

                                <span className="text-[#EB643F]">

                                    {" "}go unanswered.

                                </span>

                            </h1>

                            <p className="mt-8 max-w-xl text-[16px] leading-8 text-gray-500 dark:text-gray-400">

                                Zoiko Local's AI Receptionist answers, qualifies,
                                routes and captures customer calls — connected
                                to your local numbers, call history and team
                                workflows. Stay professional and responsive
                                when your team is busy, offline or after hours.

                            </p>

                            {/* Buttons */}

                            <div className="mt-10 flex flex-wrap gap-4">

                                <button className="h-12 px-8 rounded-full bg-[#EB643F] text-white text-sm font-semibold shadow-lg hover:bg-[#D95A37] transition">

                                    Activate AI Receptionist

                                    <FiArrowRight className="inline ml-2" />

                                </button>

                                <button className="h-12 px-8 rounded-full border border-[#0F6660] bg-white dark:bg-slate-800 text-[#123533] dark:text-white text-sm font-semibold hover:bg-[#0F6660] hover:text-white transition">

                                    See How It Works

                                </button>

                            </div>

                            {/* Helper */}

                            <p className="mt-7 text-sm text-gray-500">

                                Already have a Zoiko Local number?

                                <span className="ml-2 text-[#EB643F] font-medium cursor-pointer hover:underline">

                                    Add AI Receptionist →

                                </span>

                            </p>

                            {/* Features */}

                            <div className="mt-8 grid sm:grid-cols-2 gap-y-4 gap-x-8">

                                {receptionistFeatures.map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3"
                                    >

                                        <FiCheck className="text-[#0F6660]" />

                                        <span className="text-[14px] text-[#123533] dark:text-gray-300">

                                            {item}

                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* ================= Right ================= */}

                        <div className="flex justify-center">

                            <div className="w-full max-w-[520px] rounded-3xl overflow-hidden bg-white dark:bg-slate-800 shadow-2xl border border-[#E5DDD2] dark:border-slate-700">

                                {/* Header */}

                                <div className="bg-[#072F2E] px-6 py-5 flex justify-between items-center">

                                    <span className="text-white font-semibold">

                                        AI Receptionist

                                    </span>

                                    <div className="flex items-center gap-2 text-[#6CE4AE] text-xs">

                                        <span className="w-2 h-2 rounded-full bg-[#37E087]" />

                                        Answering Now

                                    </div>

                                </div>

                                {/* Information */}

                                <div className="bg-[#EEF3F2] dark:bg-slate-700 grid grid-cols-2 gap-6 px-6 py-5">

                                    <div>

                                        <p className="text-[10px] uppercase text-gray-500">

                                            Incoming From

                                        </p>

                                        <p className="font-semibold text-[#123533] dark:text-white">

                                            +1 212 555 0186

                                        </p>

                                        <p className="mt-4 text-[10px] uppercase text-gray-500">

                                            Recommended Route

                                        </p>

                                        <p className="font-semibold text-[#123533] dark:text-white">

                                            Sales Team

                                        </p>

                                    </div>

                                    <div>

                                        <p className="text-[10px] uppercase text-gray-500">

                                            Detected Intent

                                        </p>

                                        <p className="font-semibold text-[#EB643F]">

                                            New customer enquiry

                                        </p>

                                        <p className="mt-4 text-[10px] uppercase text-gray-500">

                                            Urgency

                                        </p>

                                        <p className="font-semibold text-[#123533] dark:text-white">

                                            Medium

                                        </p>

                                    </div>

                                </div>

                                {/* Chat */}

                                <div className="p-6 space-y-5">

                                    <div>

                                        <p className="text-[10px] uppercase text-gray-400 mb-2">

                                            AI Receptionist

                                        </p>

                                        <div className="rounded-2xl bg-[#EEF3F2] dark:bg-slate-700 px-5 py-4 text-sm leading-7 text-[#123533] dark:text-white">

                                            Thanks for calling Zoiko Consulting.
                                            I can route your enquiry — are you calling
                                            about pricing, support or booking a consultation?

                                        </div>

                                    </div>

                                    <div className="flex justify-end">

                                        <div className="rounded-2xl bg-[#EB643F] px-5 py-3 text-white text-sm">

                                            I'd like pricing and availability.

                                        </div>

                                    </div>

                                    <div>

                                        <p className="text-[10px] uppercase text-gray-400 mb-2">

                                            AI Receptionist

                                        </p>

                                        <div className="rounded-2xl bg-[#EEF3F2] dark:bg-slate-700 px-5 py-4 text-sm leading-7 text-[#123533] dark:text-white">

                                            Got it. I'll connect you to the right
                                            team and capture your details in case
                                            the line is busy.

                                        </div>

                                    </div>

                                </div>

                                {/* Footer */}

                                <div className="border-t border-[#ECE5DA] dark:border-slate-700 px-6 py-4 flex gap-3">

                                    <div className="w-10 h-10 rounded-xl bg-[#FDE9E3] flex items-center justify-center text-[#EB643F]">

                                        <FiMessageSquare />

                                    </div>

                                    <div>

                                        <h4 className="text-sm font-semibold text-[#123533] dark:text-white">

                                            Follow-up task created

                                        </h4>

                                        <p className="text-xs text-gray-500">

                                            Pricing enquiry routed to Sales · callback captured

                                        </p>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= Cost of a Missed Call ================= */}
            <section className="bg-[#07111D] dark:bg-black py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F]">

                            The Cost of a Missed Call

                        </p>

                        <h2 className="mt-5 text-[34px] md:text-[46px] font-bold leading-[1.2] text-white">

                            Every missed call is a customer

                            <br />

                            decision

                            <span className="text-[#E79A7D]">

                                {" "}waiting to happen.

                            </span>

                        </h2>

                    </div>

                    {/* Cards */}
                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
                        {missedCallProblems.map((item) => (

                            <div
                                key={item.title}
                                className="rounded-2xl border border-white/10 bg-[#0C1724] px-6 py-6 transition-all duration-300 hover:border-[#EB643F]/30 hover:bg-[#101D2D]"
                            >

                                {/* Icon */}

                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-[#EB643F]">

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-5 text-lg font-semibold text-white">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-3 text-sm leading-7 text-[#94A3B8]">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                    {/* Bottom Statement */}
                    <div className="max-w-4xl mx-auto text-center mt-14">

                        <p className="text-[20px] md:text-[22px] italic font-light text-[#E7D5CB]">

                            Zoiko Local AI Receptionist turns these gaps into

                            <span className="not-italic font-medium text-white">

                                {" "}structured conversations,

                            </span>

                            <br />

                            captured details, routed calls, and follow-up actions.
                        </p>
                    </div>
                </div>
            </section>
            {/* ================= How It Works =================*/}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F]">

                            How It Works

                        </p>
                        <h2 className="mt-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight dark:text-white">

                            From incoming call to captured

                            <br />

                            opportunity — in seconds.

                        </h2>

                    </div>
                    <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-4 gap-5">

                        {aiSteps.map((step) => (

                            <div
                                key={step.number}
                                className="rounded-2xl bg-white dark:bg-slate-800 border border-[#E6DDD2] dark:border-slate-700 p-7"
                            >
                                <div className="text-[34px] italic text-[#EB643F]">

                                    {step.number}

                                </div>
                                <h3 className="mt-3 font-semibold text-[#123533] dark:text-white">

                                    {step.title}

                                </h3>
                                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">

                                    {step.description}

                                </p>

                            </div>
                        ))}
                    </div>
                    <div className="mt-12 flex justify-center">
                        <button className="h-11 px-8 rounded-full bg-[#EB643F] text-white text-sm font-semibold hover:bg-[#D95A37] transition">

                            Set Up AI Receptionist →

                        </button>
                    </div>
                </div>
            </section>
            {/* ================= LIVE CALL HANDLING =================*/}
            <section className="bg-white dark:bg-[#0f172a] py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-20 items-center">

                    {/* LEFT */}
                    <div>
                        <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F]">

                            Live Call Handling

                        </p>

                        <h2 className="mt-5 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight dark:text-white">

                            A smarter front desk —

                            <br />

                            that you control.

                        </h2>

                        <p className="mt-7 text-gray-500 dark:text-gray-400 leading-8">

                            AI handles the first response; your business defines
                            the rules. Set the greeting, hours, routing,
                            escalation, and exactly when a call must
                            reach a human.

                        </p>

                        <div className="mt-8">
                            {handlingFeatures.map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-3 py-4 border-b border-[#E8E2D8] dark:border-slate-700"
                                >

                                    <FiCheck className="text-[#EB643F]" />

                                    <span className="text-[#123533] dark:text-gray-300">

                                        {item}

                                    </span>

                                </div>
                            ))}
                        </div>
                        <button className="mt-10 h-11 px-8 rounded-lg border border-[#0F6660] text-[#123533] dark:text-white hover:bg-[#0F6660] hover:text-white transition">

                            Design My Call Flow

                        </button>

                    </div>

                    {/* RIGHT */}
                    <div className="flex justify-center">
                        <div className="w-full max-w-md rounded-2xl overflow-hidden bg-white dark:bg-slate-800 shadow-xl border border-[#E6DDD2] dark:border-slate-700">
                            <div className="bg-[#0F6660] px-6 py-4 text-white text-sm font-medium">

                                Business control panel

                            </div>
                            {controlRules.map((rule) => (

                                <div
                                    key={rule.label}
                                    className="flex justify-between items-center px-6 py-4 border-b border-[#ECE5DA] dark:border-slate-700"
                                >
                                    <div>

                                        <h4 className="text-sm text-[#123533] dark:text-white">

                                            {rule.label}

                                        </h4>

                                        {rule.value && (

                                            <p className="text-xs text-gray-500">

                                                {rule.value}

                                            </p>

                                        )}

                                    </div>

                                    {rule.toggle ? (

                                        <div className="w-10 h-6 rounded-full bg-[#EB643F] relative">

                                            <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />

                                        </div>

                                    ) : (

                                        <span className="text-sm font-semibold text-[#123533] dark:text-white">

                                            {rule.value}

                                        </span>

                                    )}

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* ================= Business Outcomes ================= */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F]">

                            Business Outcomes

                        </p>
                        <h2 className="mt-4 text-[34px] md:text-[42px] font-bold leading-tight dark:text-white">

                            Built to protect revenue,

                            time, and customer trust.

                        </h2>
                    </div>

                    <div className="mt-14 grid md:grid-cols-2 xl:grid-cols-3 gap-5">

                        {businessOutcomes.map((item) => (

                            <div
                                key={item.title}
                                className="rounded-2xl bg-[#EDF5F3] dark:bg-slate-800 p-7 transition hover:shadow-lg"
                            >

                                <div className="w-10 h-10 rounded-lg bg-[#0F6660] flex items-center justify-center text-white">

                                    {item.icon}

                                </div>

                                <h3 className="mt-5 font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Qualification & Routing ================= */}
            <section className="bg-white dark:bg-[#111827] py-10 md:py-14">
                <div className="max-w-5xl mx-auto px-5">
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F]">

                            Qualification & Routing

                        </p>
                        <h2 className="mt-4 text-[34px] md:text-[42px] font-bold leading-tight dark:text-white">

                            Know why the customer is calling

                            <br />

                            before your team picks up.

                        </h2>
                        <p className="mt-6 text-gray-500 dark:text-gray-400 leading-8">

                            AI Receptionist identifies call intent and qualifies the enquiry
                            before routing — so teams get context and customers reach
                            the right place faster.

                        </p>
                    </div>

                    <div className="mt-14 grid lg:grid-cols-2 gap-14">
                        {/* Left */}

                        <div>

                            <p className="uppercase text-[10px] tracking-[0.28em] font-semibold text-[#EB643F] mb-6">

                                It Can Identify

                            </p>

                            <div className="flex flex-wrap gap-3">

                                {identifyTags.map((tag) => (

                                    <span
                                        key={tag}
                                        className="px-4 py-2 rounded-full border border-[#E5DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 text-sm text-[#123533] dark:text-gray-300"
                                    >

                                        {tag}

                                    </span>

                                ))}

                            </div>

                        </div>

                        {/* Right */}

                        <div>

                            <p className="uppercase text-[10px] tracking-[0.28em] font-semibold text-[#EB643F] mb-6">

                                It Can Route To

                            </p>

                            <div className="flex flex-wrap gap-3">

                                {routeTags.map((tag) => (

                                    <span
                                        key={tag}
                                        className="px-4 py-2 rounded-full bg-[#EAF5F2] dark:bg-slate-700 border border-[#CDE3DD] dark:border-slate-600 text-sm text-[#0F6660] dark:text-white"
                                    >

                                        {tag}

                                    </span>

                                ))}

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= After-Hours Features ================= */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5 grid lg:grid-cols-2 gap-20 items-center">
                    {/* Left */}
                    <div>

                        <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F]">

                            After-hours · Overflow · Capture

                        </p>

                        <h2 className="mt-5 text-[30px] md:text-[40px] font-bold leading-tight dark:text-white">

                            Stay open to customers,

                            <br />

                            even when your office is

                            <br />

                            closed.

                        </h2>

                        <p className="mt-7 leading-8 text-gray-500 dark:text-gray-400">

                            Customers don't only call during business hours.
                            Capture the call, understand the request, set
                            expectations, and turn every conversation into a
                            clear next step — an appointment, a structured
                            message, or a callback task.

                        </p>

                        <div className="mt-8">

                            {afterHoursFeatures.map((item) => (

                                <div
                                    key={item}
                                    className="flex items-center gap-3 py-4 border-b border-[#E8E2D8] dark:border-slate-700"
                                >

                                    <FiCheck className="text-[#EB643F]" />

                                    <span className="text-[#123533] dark:text-gray-300">

                                        {item}

                                    </span>

                                </div>

                            ))}

                        </div>

                        <p className="mt-7 text-xs text-gray-400">

                            Availability, language, transcription and AI summaries
                            vary by market, plan, number type, and configuration.

                        </p>

                    </div>

                    {/* Right */}

                    <div className="flex justify-center">

                        <div className="w-full max-w-md rounded-2xl bg-white dark:bg-slate-800 border border-[#EB643F] shadow-xl overflow-hidden">

                            <div className="px-6 py-4 border-b border-[#ECE5DA] dark:border-slate-700 flex items-center gap-2">

                                <FiFileText className="text-[#EB643F]" />

                                <span className="uppercase text-[10px] tracking-wide font-semibold text-[#EB643F]">

                                    Callback Task · Captured by AI

                                </span>

                            </div>

                            {captureRows.map((row) => (

                                <div
                                    key={row.label}
                                    className="flex justify-between items-center px-6 py-4 border-b border-[#ECE5DA] dark:border-slate-700"
                                >

                                    <span className="text-sm text-gray-500">

                                        {row.label}

                                    </span>

                                    <span className="font-medium text-[#123533] dark:text-white">

                                        {row.value}

                                    </span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= Connected Features ================= */}
            <section className="bg-white dark:bg-[#111827] py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F]">

                            Connected, Not Separate

                        </p>
                        <h2 className="mt-5 text-[30px] md:text-[40px] font-bold leading-tight dark:text-white">

                            AI Receptionist is part of your phone

                            <br />

                            system — not bolted onto it.

                        </h2>
                        <p className="mt-6 text-gray-500 dark:text-gray-400 leading-8">

                            It works around your local numbers, calling workflows,
                            and team routing. The AI becomes part of your
                            communication layer, not a tool that sits outside the
                            business.

                        </p>
                    </div>

                    <div className="mt-14 grid md:grid-cols-3 gap-6">
                        {connectedFeatures.map((item) => (
                            <div
                                key={item.title}
                                className="rounded-2xl bg-[#EDF5F3] dark:bg-slate-800 p-7"
                            >

                                <div className="w-10 h-10 rounded-lg bg-[#0F6660] text-white flex items-center justify-center">

                                    {item.icon}

                                </div>

                                <h3 className="mt-5 font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">

                                    {item.description}

                                </p>

                            </div>
                        ))}
                    </div>

                    <div className="mt-12 flex justify-center">
                        <button className="h-11 px-8 rounded-full bg-[#EB643F] text-white text-sm font-semibold hover:bg-[#D95A37] transition">

                            Connect AI to My Local Number →

                        </button>
                    </div>
                </div>
            </section>
            {/*================= Use Cases =================*/}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}

                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.32em] text-[10px] font-semibold text-[#EB643F]">

                            Use Cases

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[46px] font-bold leading-[1.15] dark:text-white">

                            Designed for the calls businesses

                            <br />

                            actually receive.

                        </h2>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">

                        {useCases.map((item) => (

                            <div
                                key={item.title}
                                className="group rounded-2xl bg-white dark:bg-slate-800 border border-[#E5DED3] dark:border-slate-700 p-7 transition-all duration-300 hover:border-[#0F6660]/30 hover:-translate-y-1 hover:shadow-lg"
                            >

                                {/* Icon */}

                                <div className="w-11 h-11 rounded-xl bg-[#EEF5F2] dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-[20px]">

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-[19px] font-semibold text-[#123533] dark:text-white leading-tight">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-4 text-[14px] leading-7 text-[#6D6D6D] dark:text-gray-400">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/*================= Handoff Features =================*/}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

                        {/* LEFT */}
                        <div>

                            <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F]">

                                Human Handoff & Control

                            </p>

                            <h2 className="mt-4 text-3xl md:text-[40px] leading-[1.15] font-bold text-[#123533] dark:text-white">

                                AI when it helps.

                                <br />

                                Human handoff when it matters.

                            </h2>

                            <p className="mt-4 text-[15px] leading-8 text-[#6B6B6B] dark:text-gray-400 max-w-xl">

                                AI Receptionist should never feel like a wall between
                                your business and your customer. It answers,
                                qualifies and routes — while giving customers a
                                clear path to a person when needed. The business
                                decides how AI answers, what it can say,
                                and when it must escalate.

                            </p>

                            {/* Checklist */}

                            <div className="mt-6">

                                {handoffFeatures.map((feature) => (

                                    <div
                                        key={feature}
                                        className="flex items-center gap-3 py-4 border-b border-[#E5DED3] dark:border-slate-700"
                                    >

                                        <FiCheck
                                            size={15}
                                            className="text-[#EB643F] shrink-0"
                                        />

                                        <span className="text-[15px] text-[#555] dark:text-gray-300">

                                            {feature}

                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-lg overflow-hidden rounded-2xl border border-[#E5DED3] dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl">

                                {/* Header */}

                                <div className="bg-[#0F6660] px-7 py-5">

                                    <h3 className="text-white text-sm font-medium">

                                        Escalation rules

                                    </h3>

                                </div>

                                {/* Rows */}

                                {escalationRules.map((rule) => (

                                    <div
                                        key={rule}
                                        className="flex items-center justify-between px-7 py-5 border-b border-[#ECE6DA] dark:border-slate-700"
                                    >

                                        <span className="text-[14px] text-[#555] dark:text-gray-300">

                                            {rule}

                                        </span>

                                        {/* Toggle */}

                                        <button
                                            className="relative w-11 h-6 rounded-full bg-[#EB643F] transition"
                                        >

                                            <span className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white" />

                                        </button>

                                    </div>

                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/*================= Comparison Table ================= */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F]">

                            Skype Replacement

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[46px] font-bold leading-[1.15] dark:text-white">

                            Skype gave businesses calling.

                            <br />

                            Zoiko Local adds intelligence.

                        </h2>

                        <p className="mt-7 text-[15px] leading-8 text-[#666] dark:text-gray-400">

                            Skype helped millions make calls and receive numbers.
                            Modern businesses now need more — intelligent answering,
                            routing, capture, and follow-up in one workspace.

                        </p>

                    </div>

                    {/* Comparison Table */}

                    <div className="mt-16 overflow-hidden rounded-2xl border border-[#E5DED3] dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg">

                        {/* Header */}
                        <div className="grid grid-cols-3 bg-[#0F6660] text-white">

                            <div className="px-6 py-5 text-sm font-semibold">

                                Business need

                            </div>

                            <div className="px-6 py-5 text-sm font-semibold border-l border-[#2A8078]">

                                Legacy Skype Use

                            </div>

                            <div className="px-6 py-5 text-sm font-semibold border-l border-[#2A8078]">

                                Zoiko Local AI Receptionist

                            </div>
                        </div>

                        {/* Rows */}

                        {skypeComparison.map((row, index) => (
                            <div
                                key={index}
                                className={`grid grid-cols-3 border-t border-[#ECE6DA] dark:border-slate-700 ${index % 2 === 0
                                    ? "bg-white dark:bg-slate-800"
                                    : "bg-[#FCFBF9] dark:bg-slate-850"
                                    }`}
                            >

                                <div className="px-6 py-5 text-xs sm:text-sm md:text-base font-semibold text-[#123533] dark:text-white">

                                    {row.need}

                                </div>

                                <div className="px-6 py-5 border-l border-[#ECE6DA] dark:border-slate-700 text-xs sm:text-sm md:text-base text-[#666] dark:text-gray-400">

                                    {row.skype}

                                </div>

                                <div className="px-6 py-5 border-l border-[#ECE6DA] dark:border-slate-700 text-xs sm:text-sm md:text-base font-medium text-[#0F6660] dark:text-emerald-400">

                                    {row.zoiko}

                                </div>

                            </div>

                        ))}
                    </div>

                    {/* CTA */}

                    <div className="mt-12 flex justify-center">

                        <button className="h-12 px-10 rounded-xl bg-[#EB643F] text-white font-semibold shadow-lg hover:bg-[#D95A37] transition">

                            Switch from Skype to Zoiko Local →

                        </button>
                    </div>
                </div>
            </section>
            {/*================= Plans ================= */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F]">
                            Plans & Packaging

                        </p>

                        <h2 className="mt-5 text-3xl md:text-[46px] font-bold leading-[1.15] text-[#123533] dark:text-white">

                            Add AI Receptionist to how your

                            <br />

                            business already communicates.

                        </h2>
                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                        {aiPlans.map((plan) => (
                            <div
                                key={plan.title}
                                className={`relative rounded-2xl border bg-white dark:bg-slate-800 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl
                    ${plan.popular
                                        ? "border-[#EB643F] shadow-lg"
                                        : "border-[#E5DED3] dark:border-slate-700"
                                    }`}
                            >
                                {/* Badge */}

                                {plan.popular && (
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">

                                        <span className="bg-[#EB643F] text-white text-[10px] font-semibold px-4 py-1 rounded-full whitespace-nowrap shadow">

                                            Most popular

                                        </span>
                                    </div>
                                )}

                                <div className="p-8 flex flex-col h-full">
                                    <h3 className="text-xl font-semibold text-[#123533] dark:text-white">

                                        {plan.title}

                                    </h3>

                                    <p className="mt-4 text-[15px] leading-7 text-[#666] dark:text-gray-400 flex-1">

                                        {plan.description}

                                    </p>

                                    <button
                                        className={`mt-8 h-12 w-full rounded-xl text-sm font-semibold transition-all duration-300
                            ${plan.primary
                                                ? "bg-[#EB643F] text-white shadow-lg hover:bg-[#D95A37]"
                                                : "border border-[#0F6660] text-[#123533] dark:text-white hover:bg-[#0F6660] hover:text-white"
                                            }`}
                                    >

                                        {plan.button}

                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Footer */}
                    <p className="mt-10 text-center text-xs leading-6 text-[#8A8A8A] dark:text-gray-500 max-w-4xl mx-auto">
                        Feature availability, call minutes, AI usage, number eligibility,
                        routing controls, recording, transcription, and summaries
                        may vary by plan, country, and configuration.
                    </p>
                </div>
            </section>
            {/* ================= FAQ's ================= */}
            <Faq
                heading="Questions"
                subHeading="AI Receptionist, answered."
                items={faqItems}
            />
            {/* ================= Final CTA ================= */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div
                        className="relative overflow-hidden rounded-[28px] px-8 py-16 md:px-16 md:py-20 text-center text-white"
                        style={{
                            background:
                                "radial-gradient(circle at top right, rgba(16,120,108,0.35), transparent 35%), linear-gradient(135deg,#0F6660 0%, #063A38 100%)",
                        }}
                    >

                        {/* Small Label */}

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#F29B82]">

                            One Workspace

                        </p>

                        {/* Heading */}

                        <h2 className="mt-5 text-3xl md:text-[46px] leading-[1.15] font-bold max-w-3xl mx-auto">

                            Give every local number a

                            <br />

                            smarter front desk.

                        </h2>

                        {/* Description */}

                        <p className="mt-7 max-w-2xl mx-auto text-[15px] leading-8 text-white/80">

                            Answer more calls, capture more opportunities, route
                            customers faster, and give your business a consistent,
                            professional experience — whether your team is online,
                            offline, or busy.

                        </p>

                        {/* Buttons */}
                        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">

                            {/* Primary */}

                            <button className="h-12 px-8 rounded-full bg-[#EB643F] text-white text-sm font-semibold shadow-lg hover:bg-[#D95A37] transition">

                                Activate AI Receptionist →

                            </button>

                            {/* Secondary */}

                            <button className="h-12 px-8 rounded-full bg-white text-[#123533] text-sm font-semibold hover:bg-gray-100 transition">

                                Talk to Sales

                            </button>

                            {/* Outline */}

                            <button className="h-12 px-8 rounded-full border border-white/30 text-white text-sm font-semibold hover:bg-white hover:text-[#123533] transition">

                                Switch from Skype

                            </button>

                        </div>

                        {/* Footer */}

                        <p className="mt-8 text-xs text-white/60">

                            Already using Zoiko Local?

                            <span className="text-[#F29B82] font-medium">

                                {" "}Add AI Receptionist to your number →

                            </span>

                        </p>

                    </div>
                </div>
            </section>
        </>
    )
}
