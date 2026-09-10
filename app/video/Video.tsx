import React from 'react'
import {
    FiVideo, FiFileText, FiZap,
    FiClipboard, FiInfo,
    FiMic, FiMonitor, FiPhoneOff,
    FiUsers, FiMessageSquare,
    FiLink, FiCheck, FiGlobe,
    FiShield, FiUserCheck, FiClock,
    FiCheckCircle, FiPhone, FiUser,
    FiCopy, FiCalendar,
} from "react-icons/fi";
import Faq from '../Components/Faq';

const participants = [
    {
        initials: "AM",
        name: "Amira • Host",
        color: "from-[#0B6A61] to-[#0A4B47]",
        avatar: "bg-[#EB643F]",
    },
    {
        initials: "DK",
        name: "Daniel • Client",
        color: "from-[#184A7B] to-[#123D65]",
        avatar: "bg-[#3B82F6]",
    },
    {
        initials: "RB",
        name: "Rosa • Video",
        color: "from-[#7A4A22] to-[#593319]",
        avatar: "bg-[#C98B2D]",
    },
    {
        initials: "AK",
        name: "Anik • Support",
        color: "from-[#275A3B] to-[#183C27]",
        avatar: "bg-[#2FA36C]",
    },
];
const steps = [
    {
        step: "Step 1",
        title: "Create a meeting",
    },
    {
        step: "Step 2",
        title: "Invite customers or teams",
    },
    {
        step: "Step 3",
        title: "Meet professionally",
    },
    {
        step: "Step 4",
        title: "Capture the follow-up",
    },
];
const meetingFeatures = [
    "One-click meeting creation",
    "Browser-friendly joining",
    "Host controls",
    "Works with local numbers & calling",
];
const videoUseCases = [
    "Sales demos & advisory reviews",
    "Support walkthroughs & onboarding",
    "Booked consultations",
];
const collaborationFeatures = [
    {
        icon: <FiUsers />,
        title: "Team collaboration",
        description:
            "Internal meetings, department check-ins, escalation rooms and cross-location collaboration.",
    },
    {
        icon: <FiMonitor />,
        title: "Screen sharing",
        description:
            "Full screen, window or tab for demos, onboarding, support and reviews.",
    },
    {
        icon: <FiLink />,
        title: "Meeting links",
        description:
            "Instant, scheduled, or reusable links shared by email, calendar, SMS or portal.",
    },
];
const followUpFeatures = [
    {
        icon: <FiFileText />,
        title: "Meeting history & follow-up tasks",
    },
    {
        icon: <FiUsers />,
        title: "Customer & internal handoff notes",
    },
    {
        icon: <FiZap />,
        title: "AI summaries linked to call activity",
    },
];
const aiNotes = [
    {
        label: "Summary",
        value: "Reviewed Q3 proposal; client wants revised pricing.",
    },
    {
        label: "Customer intent",
        value: "High — ready to proceed with changes.",
    },
    {
        label: "Action item",
        value: "Send revised quote by Friday.",
    },
    {
        label: "Next call",
        value: "Schedule follow-up next week.",
    },
];
const skypeVideoComparison = [
    {
        capability: "Video calls",
        skype: "Basic calling",
        zoiko: "Professional meetings",
    },
    {
        capability: "Meeting links",
        skype: "Limited",
        zoiko: "Instant, scheduled & reusable",
    },
    {
        capability: "Customer calls",
        skype: "Disconnected",
        zoiko: "Tied to local number identity",
    },
    {
        capability: "Screen sharing",
        skype: "Basic",
        zoiko: "Full screen, window or tab",
    },
    {
        capability: "Notes",
        skype: "Manual",
        zoiko: "AI-supported summaries (where available)",
    },
    {
        capability: "Continuity",
        skype: "Declining",
        zoiko: "Modern workspace",
    },
];
const availabilityFeatures = [
    {
        icon: <FiGlobe />,
        title: "Country availability",
        description:
            "Features vary by market, plan and configuration.",
    },
    {
        icon: <FiShield />,
        title: "Consent controls",
        description:
            "Recording, transcription and AI summaries may require consent.",
    },
    {
        icon: <FiUserCheck />,
        title: "Business verification",
        description:
            "May be required for certain capabilities.",
    },
    {
        icon: <FiClock />,
        title: "Data retention",
        description:
            "Retention aligns with account type and jurisdiction.",
    },
    {
        icon: <FiCheckCircle />,
        title: "Regulated use",
        description:
            "Configure carefully; some sectors need enhanced review.",
    },
    {
        icon: <FiFileText />,
        title: "Acceptable use",
        description:
            "Service is provided subject to approved use and terms.",
    },
];
const videoPlans = [
    {
        title: "Video Meetings",
        description: "Simple business video meetings and collaboration.",
        button: "View Plans",
        featured: false,
    },
    {
        title: "Video + Calling",
        description: "Video connected to local numbers and call history.",
        button: "Compare Plans",
        featured: true,
        badge: "Most Popular",
    },
    {
        title: "Video + AI",
        description: "AI notes, summaries, follow-up and handoff where available.",
        button: "Explore AI Pricing",
        featured: false,
    },
];
const faqItems = [
    {
        question: "What is Zoiko Local Video?",
        answer:
            "Zoiko Local Video is a browser-based video meeting tool built into your Zoiko Local workspace. It connects your video meetings to your local numbers, call history, and team workflows — so every customer interaction stays in one place.",
    },
    {
        question: "Can I use it for customer calls?",
        answer:
            "Yes. You can host customer consultations, demos, support sessions, and onboarding calls. Each meeting is shareable via a branded link and connected to your local number identity.",
    },
    {
        question: "Do customers need to download an app?",
        answer:
            "No. Customers join via a browser link — no downloads or accounts required. They simply click the meeting link and join directly from their device.",
    },
    {
        question: "Can I share my screen?",
        answer:
            "Yes. Screen sharing is available for presentations, walkthroughs, and collaborative reviews. Availability may vary by plan and device.",
    },
    {
        question: "Does it include AI meeting notes?",
        answer:
            "AI meeting notes and summaries are available on eligible plans where supported. They capture key points, action items, and next steps — linked back to your call and meeting history.",
    },
    {
        question: "Can it replace Skype video calls?",
        answer:
            "Yes. Zoiko Local Video offers everything Skype provided for business video — and more. You get branded meeting links, local number integration, AI notes, and follow-up tasks in a single workspace.",
    },
    {
        question: "Can I connect video meetings to local numbers?",
        answer:
            "Yes. Video meetings are tied to your Zoiko Local number identity. Meeting history, notes, and follow-ups appear alongside your call records so your team always has full context.",
    },
    {
        question: "Are recording and transcription available?",
        answer:
            "Recording and transcription are available on eligible plans where supported. They require appropriate consent notices and may vary by country, configuration, and applicable law.",
    },
];
export default function Video() {
    return (
        <>
            {/* ================= Hero ================= */}
            <section className="bg-[#F7F5F2] dark:bg-[#0F172A] pt-14 lg:pt-18 pb-14 px-5">
                <div className="max-w-7xl mx-auto">
                    {/* Heading */}
                    <div className="max-w-4xl mx-auto text-center">
                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-[#EB643F]" />
                            Business Video, Connected to your Local Presence
                        </p>
                        <h1 className="mt-5 text-4xl md:text-6xl font-bold leading-tight text-[#123533] dark:text-white">
                            Video meetings that feel professional
                            <span className="block italic text-[#EB643F]">
                                and easy to join.
                            </span>
                        </h1>

                        <p className="mt-7 text-base md:text-lg text-gray-500 dark:text-gray-400 leading-8 max-w-3xl mx-auto">

                            Host customer calls, team meetings, demos and consultations
                            through a modern video workspace built around your Zoiko Local
                            identity — with meeting links, screen sharing, AI notes and
                            follow-up.

                        </p>

                        {/* Buttons */}

                        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

                            <button className="h-11 px-8 rounded-full bg-[#EB643F] text-white text-sm font-semibold hover:bg-[#D95B38] transition">

                                Start Video Meetings →

                            </button>

                            <button className="h-11 px-8 rounded-full border border-[#0F6660] text-[#123533] dark:text-white hover:bg-[#0F6660] hover:text-white transition">

                                Switch from Skype

                            </button>

                        </div>

                        {/* Bottom Link */}

                        <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">

                            Already have Zoiko Local numbers?

                            <button className="ml-1 text-[#EB643F] font-medium hover:underline">

                                Add video to your workspace →

                            </button>

                        </p>

                    </div>

                    {/* ================= Video Workspace ================= */}

                    <div className="mt-16 flex justify-center">

                        <div className="w-full max-w-3xl rounded-[22px] overflow-hidden bg-[#083E3A] shadow-2xl border border-[#0D5A55]">

                            {/* Header */}

                            <div className="h-12 px-5 bg-[#073732] flex items-center justify-between">

                                <span className="text-white text-sm">

                                    +44 (20) 555-0142 • Team Room

                                </span>

                                <div className="flex items-center gap-2">

                                    <div className="w-2 h-2 rounded-full bg-green-400" />

                                    <span className="text-[11px] uppercase tracking-widest text-green-200">

                                        4 Video Active

                                    </span>

                                </div>

                            </div>

                            {/* Grid */}

                            <div className="grid grid-cols-2 gap-[2px] bg-[#0A3532] p-[2px]">

                                {participants.map((user) => (

                                    <div
                                        key={user.name}
                                        className={`relative aspect-video bg-gradient-to-br ${user.color} rounded-md overflow-hidden`}
                                    >

                                        {/* Avatar */}

                                        <div className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full ${user.avatar} flex items-center justify-center text-white font-bold`}>

                                            {user.initials}

                                        </div>

                                        {/* Name */}

                                        <div className="absolute bottom-2 left-2 text-white text-[11px] bg-black/30 backdrop-blur-sm rounded px-2 py-1">

                                            {user.name}

                                        </div>

                                    </div>

                                ))}

                            </div>

                            {/* Controls */}

                            <div className="h-16 bg-[#073732] flex justify-center items-center gap-4">

                                <button className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition">

                                    <FiMic className="mx-auto" />
                                </button>

                                <button className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition">

                                    <FiMonitor className="mx-auto" />
                                </button>

                                <button className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition">

                                    <FiUsers className="mx-auto" />
                                </button>

                                <button className="w-10 h-10 rounded-full bg-[#EB643F] text-white hover:bg-[#D95B38] transition">

                                    <FiPhoneOff className="mx-auto" />
                                </button>

                                <button className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-white/20 transition">

                                    <FiMessageSquare className="mx-auto" />
                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= How it Works ================= */}
            <section className="bg-[#FFFFFF] dark:bg-[#0F172A] py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] flex items-center justify-center gap-2">

                            <span className="w-8 h-px bg-[#EB643F]" />

                            How It Works

                        </p>

                        <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight text-[#123533] dark:text-white">

                            Create. Invite. Meet.

                            <span className="text-[#EB643F] italic">

                                {" "}Follow up.

                            </span>

                        </h2>

                        <p className="mt-5 text-gray-500 dark:text-gray-400">

                            A professional meeting in four simple steps.

                        </p>

                    </div>

                    {/* Steps */}

                    <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

                        {steps.map((item) => (

                            <div
                                key={item.title}
                                className="rounded-xl border border-[#E6DED2] dark:border-slate-700 bg-white dark:bg-slate-800 px-6 py-6 hover:shadow-md transition"
                            >

                                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#EB643F]">

                                    {item.step}

                                </p>

                                <h3 className="mt-3 text-base font-semibold text-[#123533] dark:text-white leading-6">

                                    {item.title}

                                </h3>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* ================= Professional Meetings ================= */}
            <section className="bg-[#F3F0EA] dark:bg-[#111827] py-12 md:py-16">
                <div className="max-w-6xl mx-auto px-5">
                    {/* ---------- Heading ---------- */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.28em] text-[11px] font-semibold text-[#EB643F] flex items-center justify-center gap-2">

                            <span className="w-8 h-px bg-[#EB643F]" />

                            Video Meetings

                        </p>

                        <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight text-[#123533] dark:text-white">

                            Professional meetings —

                            <br />

                            without making customers

                            <span className="text-[#EB643F] italic">

                                {" "}download another tool.

                            </span>

                        </h2>

                        <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-7 text-gray-500 dark:text-gray-400">

                            One-click meeting creation, browser-friendly joining,
                            and host controls that work alongside your local
                            numbers and calling.

                        </p>

                    </div>
                    {/* ---------- Bottom Row ---------- */}
                    <div className="mt-14 grid grid-cols-1 lg:grid-cols-[1fr_520px] gap-14 items-center">

                        {/* ================= Left Features ================= */}

                        <div>

                            <div className="space-y-1">

                                {meetingFeatures.map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3 py-3 border-b border-[#E7DED2] dark:border-slate-700"
                                    >

                                        <div className="w-5 h-5 rounded-full bg-[#FDE9E3] flex items-center justify-center">

                                            <FiCheck
                                                size={11}
                                                className="text-[#EB643F]"
                                            />

                                        </div>

                                        <span className="text-[14px] text-[#123533] dark:text-gray-300">

                                            {item}

                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* ================= Meeting Card ================= */}

                        <div className="flex justify-center lg:justify-end">

                            <div className="w-full max-w-[480px] rounded-xl overflow-hidden border border-[#E5DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 shadow-xl">

                                {/* Header */}

                                <div className="flex items-center gap-3 px-4 py-3 border-b border-[#ECE6DB] dark:border-slate-700">

                                    <div className="w-8 h-8 rounded-lg bg-[#EEF5F2] dark:bg-slate-700 flex items-center justify-center text-[#0F6660]">

                                        <FiLink size={16} />

                                    </div>

                                    <div>

                                        <p className="text-[11px] text-gray-500">

                                            New meeting link

                                        </p>

                                        <h4 className="text-[15px] font-semibold text-[#123533] dark:text-white">

                                            Q3 Client Review

                                        </h4>

                                    </div>

                                </div>

                                {/* Link */}

                                <div className="p-4">

                                    <div className="flex items-center justify-between rounded-lg border border-[#E4DDD2] dark:border-slate-700 bg-[#F8F7F4] dark:bg-slate-700 px-4 py-3">

                                        <span className="font-mono text-[12px] text-gray-500 truncate">

                                            zoiko.live/q3-client-review

                                        </span>

                                        <button className="flex items-center gap-1 text-[12px] font-medium text-[#EB643F] hover:underline">

                                            <FiCopy size={13} />

                                            Copy

                                        </button>

                                    </div>

                                    {/* Buttons */}

                                    <div className="mt-4 grid grid-cols-2 gap-3">

                                        <button className="h-10 rounded-full bg-[#EB643F] text-white text-[13px] font-semibold hover:bg-[#D95B38] transition">

                                            Send Invite

                                        </button>

                                        <button className="h-10 py-2 rounded-full border border-[#D7D0C6] dark:border-slate-600 bg-white dark:bg-slate-700 text-[#123533] dark:text-white text-[13px] font-semibold flex items-center justify-center gap-2 hover:bg-gray-100 dark:hover:bg-slate-600 transition">

                                            <FiCalendar size={15} />

                                            Add to Calendar

                                        </button>

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>
                    {/* ---------- CTA ---------- */}
                    <div className="mt-12 flex justify-center">

                        <button className="h-10 px-8 rounded-full bg-[#EB643F] text-white text-[13px] font-semibold hover:bg-[#D95B38] transition-all duration-300 shadow-md hover:shadow-lg">

                            Create a Video Meeting

                        </button>

                    </div>
                </div>
            </section>
            {/* ================= Customer Video Calls ================= */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* ================= Heading ================= */}
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="uppercase tracking-[0.28em] text-[10px] font-semibold text-[#EB643F]">
                            Customer Video Calls
                        </p>
                        <h2 className="mt-4 text-[30px] md:text-[40px] font-bold leading-[1.2] text-[#123533] dark:text-white">

                            Move from a phone call to face-

                            <br />

                            to-face when the moment needs

                            <span className="text-[#EB643F]">

                                {" "}more trust.

                            </span>

                        </h2>

                        <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-7 text-gray-500 dark:text-gray-400">

                            Turn a local-number voice call into a video session for
                            the conversations that matter most.

                        </p>

                    </div>

                    {/* ================= Content ================= */}

                    <div className="mt-16 grid lg:grid-cols-2 gap-16 items-center">

                        {/* ================= Left Card ================= */}

                        <div className="flex justify-center">

                            <div className="w-full max-w-[430px] rounded-2xl bg-white dark:bg-slate-800 border border-[#E6DDD2] dark:border-slate-700 shadow-xl overflow-hidden">

                                {/* Header */}

                                <div className="px-5 py-4 flex items-center gap-3 border-b border-[#ECE5DA] dark:border-slate-700">

                                    <div className="w-8 h-8 rounded-lg bg-[#EEF5F2] flex items-center justify-center text-[#0F6660]">

                                        <FiPhone size={15} />

                                    </div>

                                    <div>

                                        <p className="text-[13px] font-semibold text-[#123533] dark:text-white">

                                            Incoming call · +1 (212) 555

                                        </p>

                                    </div>

                                </div>

                                {/* Caller */}

                                <div className="px-5 pt-5">

                                    <div className="rounded-lg bg-[#EEF3F2] dark:bg-slate-700 border border-[#D8DDD8] dark:border-slate-600 flex items-center gap-3 px-4 py-3">

                                        <FiUser className="text-[#0F6660]" />

                                        <span className="text-[13px] text-[#123533] dark:text-white">

                                            Daniel Mensah · returning client

                                        </span>

                                    </div>

                                </div>

                                {/* Voice -> Video */}

                                <div className="px-5 pt-5">

                                    <div className="flex items-center justify-center gap-4 text-[12px] text-gray-500">

                                        <span>Voice</span>

                                        <FiVideo className="text-[#EB643F]" />

                                        <span>Video</span>

                                    </div>

                                    <button className="mt-3 w-full h-11 rounded-full bg-[#EB643F] text-white text-sm font-semibold hover:bg-[#D95B38] transition">

                                        Move to Video

                                    </button>

                                </div>

                                {/* Footer */}

                                <p className="text-center text-[11px] text-gray-500 dark:text-gray-400 py-4">

                                    AI follow-up prepared after the call

                                </p>

                            </div>

                        </div>

                        {/* ================= Right ================= */}

                        <div>

                            <h3 className="text-3xl md:text-4xl font-bold leading-tight text-[#123533] dark:text-white">

                                Use video when a voice

                                <br />

                                call

                                <span className="text-[#EB643F]">

                                    {" "}isn't enough.

                                </span>

                            </h3>

                            <p className="mt-6 text-[15px] leading-7 text-gray-500 dark:text-gray-400">

                                When a conversation needs a face,
                                escalate in one tap — connected to
                                the same local number identity and
                                call history.

                            </p>

                            {/* Checklist */}

                            <div className="mt-8 space-y-0">

                                {videoUseCases.map((item) => (

                                    <div
                                        key={item}
                                        className="flex items-center gap-3 py-4 border-b border-[#E7DED2] dark:border-slate-700"
                                    >

                                        <div className="w-5 h-5 rounded-md bg-[#FDE9E3] flex items-center justify-center">

                                            <FiCheck
                                                size={11}
                                                className="text-[#EB643F]"
                                            />

                                        </div>

                                        <span className="text-[14px] text-[#123533] dark:text-gray-300">

                                            {item}

                                        </span>

                                    </div>

                                ))}

                            </div>

                            <p className="mt-6 text-[12px] text-gray-500 dark:text-gray-400">

                                Video escalation depends on customer consent
                                and device capability.

                            </p>

                        </div>

                    </div>

                </div>

            </section>
            {/* ================= Collaboration ================= */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="uppercase tracking-[0.28em] text-[10px] font-semibold text-[#EB643F] flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-[#EB643F]" />
                            Collaboration
                        </p>
                        <h2 className="mt-5 text-[34px] md:text-[44px] font-bold leading-[1.2] text-[#123533] dark:text-white">

                            Keep teams aligned.

                            <span className="text-[#EB643F]">

                                {" "}Show,

                                <br />

                                explain, and resolve.

                            </span>

                        </h2>

                        <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-7 text-gray-500 dark:text-gray-400">

                            Internal meetings, screen sharing and flexible meeting
                            links — in the same workspace.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {collaborationFeatures.map((item) => (

                            <div
                                key={item.title}
                                className="group rounded-2xl border border-[#E6DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 px-8 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-[#0F6660]/20"
                            >

                                {/* Icon */}

                                <div className="mx-auto w-12 h-12 rounded-xl bg-[#EEF5F2] dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-xl transition-transform duration-300 group-hover:scale-110">

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-lg font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-4 text-[14px] leading-6 text-gray-500 dark:text-gray-400">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                    {/* CTA */}

                    <div className="mt-12 flex justify-center">

                        <button className="h-11 px-8 rounded-full border border-[#0F6660] bg-white dark:bg-slate-800 text-[#123533] dark:text-white text-[13px] font-semibold transition-all duration-300 hover:bg-[#0F6660] hover:text-white">

                            Start a Demo Call

                        </button>

                    </div>

                </div>

            </section>
            {/* ================= Follow-up & AI Notes ================= */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="uppercase tracking-[0.28em] text-[10px] font-semibold text-[#EB643F] flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-[#EB643F]" />

                            Follow-up & AI Notes
                        </p>

                        <h2 className="mt-4 text-[34px] md:text-[44px] font-bold leading-[1.2] text-[#123533] dark:text-white">
                            The value of a meeting is what
                            <br />
                            happens

                            <span className="text-[#EB643F]">

                                {" "}after it ends.

                            </span>

                        </h2>

                        <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-7 text-gray-500 dark:text-gray-400">

                            Meeting history, follow-up tasks and AI-supported summaries —
                            linked back to call activity.

                        </p>

                    </div>

                    {/* Content */}

                    <div className="mt-12 flex flex-col lg:flex-row items-center justify-center gap-16">

                        {/* Left */}

                        <div className="w-full max-w-[460px]">

                            <div>

                                {followUpFeatures.map((item) => (

                                    <div
                                        key={item.title}
                                        className="flex items-center gap-3 py-4 border-b border-[#E7DED2] dark:border-slate-700"
                                    >

                                        <div className="w-6 h-6 rounded-md bg-[#FDE9E3] flex items-center justify-center text-[#EB643F]">

                                            {item.icon}

                                        </div>

                                        <span className="text-sm md:text-base text-[#123533] dark:text-gray-300">

                                            {item.title}

                                        </span>

                                    </div>

                                ))}

                            </div>
                        </div>

                        {/* Right */}

                        <div className="w-full max-w-[420px]">

                            <div className="rounded-2xl bg-white dark:bg-slate-800 border border-[#E7DED2] dark:border-slate-700 shadow-xl p-5">

                                {/* Header */}

                                <div className="rounded-xl border border-[#E6DDD2] dark:border-slate-700 p-4">

                                    <div className="flex items-center gap-3">

                                        <div className="w-12 h-12 rounded-xl bg-[#EEF5F2] dark:bg-slate-700 flex items-center justify-center text-[#0F6660]">

                                            <FiClipboard size={20} />

                                        </div>

                                        <div>

                                            <p className="text-[11px] uppercase tracking-wide text-gray-500">

                                                AI Meeting

                                            </p>

                                            <h4 className="text-sm font-semibold text-[#123533] dark:text-white">

                                                Notes Draft

                                            </h4>

                                        </div>

                                    </div>
                                </div>

                                {/* Notes */}

                                <div className="mt-5 space-y-4">

                                    {aiNotes.map((note) => (

                                        <div
                                            key={note.label}
                                            className="grid grid-cols-[90px_1fr] gap-4 pb-3 border-b border-[#ECE6DB] dark:border-slate-700"
                                        >

                                            <span className="text-[12px] font-medium text-gray-500">

                                                {note.label}

                                            </span>

                                            <span className="text-[13px] text-[#123533] dark:text-gray-300">

                                                {note.value}

                                            </span>

                                        </div>

                                    ))}

                                </div>

                                {/* Footer */}

                                <div className="mt-5 flex items-start gap-2 text-[11px] text-gray-500 dark:text-gray-400">

                                    <FiInfo className="mt-0.5 flex-shrink-0" />

                                    <span>

                                        Recording, transcription and AI summaries may require
                                        consent and vary by country, plan, configuration and
                                        applicable law.

                                    </span>

                                </div>

                            </div>

                        </div>
                    </div>

                    <div className="flex justify-center">
                        <button className="mt-10 h-10 px-7 rounded-full bg-[#EB643F] text-white text-[13px] font-semibold hover:bg-[#D95B38] transition shadow-md">

                            See Meeting Follow-Up

                        </button>
                    </div>

                </div>

            </section>
            {/* ================= Skype Video Replacement ================= */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F] flex items-center justify-center gap-2">
                            <span className="w-8 h-px bg-[#EB643F]" />

                            Skype Video Replacement
                        </p>

                        <h2 className="mt-5 text-[30px] md:text-[40px] font-bold leading-[1.2] text-[#123533] dark:text-white">

                            Used Skype for video calls?

                            <span className="text-[#EB643F]">

                                {" "}Move forward with Zoiko Local.

                            </span>

                        </h2>

                        <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-7 text-gray-500 dark:text-gray-400">

                            A modern continuation — not a like-for-like clone.
                            Skype is treated as the migration path,
                            not the benchmark.

                        </p>

                    </div>

                    {/* ================= Table ================= */}

                    <div className="mt-14 overflow-x-auto">

                        <div className="min-w-[760px] overflow-hidden rounded-2xl border border-[#E5DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 shadow-lg">

                            {/* Header */}

                            <div className="grid grid-cols-[1.2fr_1fr_1fr] bg-[#083F3A] text-white">

                                <div className="px-6 py-4 text-sm font-semibold">

                                    Capability

                                </div>

                                <div className="px-6 py-4 text-sm font-semibold border-l border-[#0F5C56]">

                                    Legacy Skype-style use

                                </div>

                                <div className="px-6 py-4 text-sm font-semibold border-l border-[#0F5C56]">

                                    Zoiko Local

                                </div>

                            </div>

                            {/* Rows */}

                            {skypeVideoComparison.map((item) => (

                                <div
                                    key={item.capability}
                                    className="grid grid-cols-[1.2fr_1fr_1fr] border-t border-[#ECE6DB] dark:border-slate-700"
                                >

                                    {/* Capability */}

                                    <div className="px-6 py-5 font-semibold text-[#123533] dark:text-white">

                                        {item.capability}

                                    </div>

                                    {/* Skype */}

                                    <div className="px-6 py-5 border-l border-[#ECE6DB] dark:border-slate-700 text-gray-500 dark:text-gray-400">

                                        {item.skype}

                                    </div>

                                    {/* Zoiko */}

                                    <div className="px-6 py-5 border-l border-[#ECE6DB] dark:border-slate-700 bg-[#F5F8F7] dark:bg-slate-700">

                                        <div className="flex items-start gap-2">

                                            <FiCheck
                                                size={16}
                                                className="text-[#0F6660] mt-0.5 flex-shrink-0"
                                            />

                                            <span className="text-[#123533] dark:text-white text-sm leading-6">

                                                {item.zoiko}

                                            </span>

                                        </div>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                    {/* Buttons */}

                    <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">

                        <button className="h-11 px-8 rounded-full bg-[#EB643F] text-white text-sm font-semibold hover:bg-[#D95B38] transition shadow-md">

                            Switch from Skype

                        </button>

                        <button className="h-11 px-8 rounded-full border border-[#0F6660] bg-white dark:bg-slate-800 text-[#123533] dark:text-white text-sm font-semibold hover:bg-[#0F6660] hover:text-white transition">

                            Compare Zoiko Local

                        </button>

                    </div>

                </div>

            </section>
            {/* ================= Availability & Controls ================= */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-5xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">

                        <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F] flex items-center justify-center gap-2">

                            <span className="w-8 h-px bg-[#EB643F]" />

                            Availability & Controls

                        </p>

                        <h2 className="mt-5 text-[34px] md:text-[42px] font-bold leading-[1.2] text-[#123533] dark:text-white">

                            Video features match the rules of

                            <br />

                            <span className="text-[#EB643F]">

                                each market and use case.

                            </span>

                        </h2>

                        <p className="mt-6 max-w-2xl mx-auto text-[15px] leading-7 text-gray-500 dark:text-gray-400">

                            Confident, but qualified — so you always know what applies.

                        </p>

                    </div>

                    {/* Cards */}

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {availabilityFeatures.map((item) => (

                            <div
                                key={item.title}
                                className="group rounded-xl border border-[#E5DDD2] dark:border-slate-700 bg-white dark:bg-slate-800 px-8 py-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                            >

                                {/* Icon */}

                                <div className="mx-auto w-11 h-11 rounded-xl bg-[#EEF5F2] dark:bg-slate-700 flex items-center justify-center text-[#0F6660] text-lg transition-transform duration-300 group-hover:scale-110">

                                    {item.icon}

                                </div>

                                {/* Title */}

                                <h3 className="mt-6 text-[18px] font-semibold text-[#123533] dark:text-white">

                                    {item.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-4 text-[13px] leading-6 text-gray-500 dark:text-gray-400">

                                    {item.description}

                                </p>

                            </div>

                        ))}

                    </div>

                    {/* CTA */}

                    <div className="mt-12 flex justify-center">

                        <button className="h-11 px-8 rounded-full border border-[#0F6660] bg-white dark:bg-slate-800 text-[#123533] dark:text-white text-[13px] font-semibold transition-all duration-300 hover:bg-[#0F6660] hover:text-white">

                            Review Video Availability

                        </button>
                    </div>
                </div>
            </section>
            {/* ===================== Video Plans ===================== */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-5xl mx-auto px-5">
                    {/* Heading */}
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="uppercase tracking-[0.28em] text-[10px] font-semibold text-[#EB643F] flex items-center justify-center gap-2">

                            <span className="w-8 h-px bg-[#EB643F]" />

                            Video Plans
                        </p>

                        <h2 className="mt-5 text-[34px] md:text-[42px] font-bold leading-tight text-[#123533] dark:text-white">
                            Add video to how your business

                            <br />

                            <span className="text-[#EB643F]">

                                already communicates.

                            </span>

                        </h2>

                        <p className="mt-6 max-w-xl mx-auto text-[15px] leading-7 text-gray-500 dark:text-gray-400">

                            Pricing is rendered from the billing catalog and confirmed
                            at checkout by market.

                        </p>

                    </div>

                    {/* Plans */}

                    <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">

                        {videoPlans.map((plan) => (

                            <div
                                key={plan.title}
                                className={`relative rounded-2xl px-7 py-7 transition-all duration-300
                    ${plan.featured
                                        ? "bg-white dark:bg-slate-800 border-2 border-[#EB643F] shadow-lg"
                                        : "bg-white dark:bg-slate-800 border border-[#E5DDD2] dark:border-slate-700 hover:shadow-lg"
                                    }`}
                            >

                                {/* Badge */}

                                {plan.featured && (

                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">

                                        <span className="bg-[#EB643F] text-white text-[10px] font-bold uppercase tracking-wide px-4 py-1 rounded-full shadow">

                                            {plan.badge}

                                        </span>

                                    </div>

                                )}

                                {/* Title */}

                                <h3 className="text-lg font-semibold text-[#123533] dark:text-white">

                                    {plan.title}

                                </h3>

                                {/* Description */}

                                <p className="mt-3 min-h-[48px] text-[13px] leading-6 text-gray-500 dark:text-gray-400">

                                    {plan.description}

                                </p>

                                {/* Button */}

                                <button
                                    className={`mt-8 w-full h-11 rounded-full text-sm font-semibold transition-all duration-300
                        ${plan.featured
                                            ? "bg-[#EB643F] text-white hover:bg-[#D95B38] shadow-md"
                                            : "border border-[#D7D0C6] dark:border-slate-600 bg-white dark:bg-slate-700 text-[#123533] dark:text-white hover:border-[#0F6660] hover:text-[#0F6660] dark:hover:text-[#0F6660]"
                                        }`}
                                >
                                    {plan.button}
                                </button>

                            </div>

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
            {/* ====================== Final CTA ====================== */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">
                    <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-[#0D635D] via-[#0A4F4A] to-[#032F2D] px-8 py-16 md:px-16 md:py-20">
                        {/* Background Glow */}

                        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#0F8A82]/20 blur-[120px]" />

                        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#0F8A82]/10 blur-[120px]" />

                        <div className="relative z-10 max-w-3xl mx-auto text-center">

                            {/* Eyebrow */}

                            <div className="flex items-center justify-center gap-3">

                                <span className="w-8 h-px bg-[#EB643F]" />

                                <p className="uppercase tracking-[0.3em] text-[10px] font-semibold text-[#EB643F]">

                                    One Workspace

                                </p>

                            </div>

                            {/* Heading */}

                            <h2 className="mt-7 text-4xl md:text-5xl font-bold leading-tight text-white">

                                Calls, video, local

                                <br />

                                numbers, and follow-up

                                <br />

                                — one workspace.

                            </h2>

                            {/* Description */}

                            <p className="mt-7 max-w-xl mx-auto text-[15px] leading-7 text-[#D7E5E2]">

                                Move from simple conversations to structured customer
                                communication, with meeting links, screen sharing,
                                AI notes, and call history.

                            </p>

                            {/* Buttons */}

                            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">

                                {/* Primary */}

                                <button className="h-12 px-8 rounded-full bg-[#EB643F] text-white text-sm font-semibold shadow-lg transition-all duration-300 hover:bg-[#D95835] hover:scale-[1.02]">

                                    Start Video Meetings

                                </button>

                                {/* Secondary */}

                                <button className="h-12 px-8 rounded-full bg-white text-[#123533] text-sm font-semibold transition-all duration-300 hover:bg-gray-100">

                                    Switch from Skype

                                </button>

                                {/* Outline */}

                                <button className="h-12 px-8 rounded-full border border-white/40 text-white text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-[#123533]">

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
