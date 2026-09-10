"use client";
import { useState } from "react";
import { FiCheck, FiPhone, FiMapPin, FiMic, FiPlus, FiMinus } from "react-icons/fi";

const portingSteps = [
    {
        number: "1",
        title: "Check eligibility",
        description:
            "Tell us your country, current provider, and number type.",
    },
    {
        number: "2",
        title: "Review requirements",
        description:
            "We confirm documentation, timing, and carrier rules.",
    },
    {
        number: "3",
        title: "Prepare the transfer",
        description:
            "Your team gets guidance before the request begins.",
    },
    {
        number: "4",
        title: "Activate",
        description:
            "Once complete, connect it to calling, routing, and your workspace.",
    },
];
const portingBenefits = [
    {
        icon: <FiPhone />,
        title: "No lost calls",
        description:
            "Customers reach the same number they already know—now with modern routing and capture behind it.",
    },
    {
        icon: <FiMapPin />,
        title: "Keep your presence",
        description:
            "Hold onto the local identity you've built in your market.",
    },
    {
        icon: <FiMic />,
        title: "Gain new capability",
        description:
            "Add routing, video, and AI Receptionist to your existing number without replacing it.",
    },
];
const portingFaqs = [
    {
        question: "Can I port my existing business number?",
        answer:
            "Yes. Most business numbers can be ported, provided they are eligible with your current provider and meet local regulatory requirements.",
    },
    {
        question: "How does number porting work?",
        answer:
            "After verifying eligibility, we submit the transfer request to your current provider. Once approved, the number is moved to Zoiko Local with minimal disruption.",
    },
    {
        question: "How long does porting take?",
        answer:
            "Porting time varies depending on your country, provider, and number type. We'll provide an estimated timeline before the transfer begins.",
    },
    {
        question: "Will I lose calls during porting?",
        answer:
            "No. Your existing service should remain active until the port completes. We help coordinate the process to minimize any interruption.",
    },
    {
        question: "Is there a cost to port?",
        answer:
            "Costs depend on your market, provider, and service package. Any applicable charges are explained before the port request is submitted.",
    },
];
export default function Numberporting() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };
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
                                Number Porting
                            </p>

                            <h1 className="mt-5 text-4xl md:text-[50px] font-bold leading-[1.08] text-[#123533] dark:text-white">
                                Bring your existing
                                <br />
                                number
                                <span className="text-[#EB643F] italic">
                                    {" "}to Zoiko Local.
                                </span>
                            </h1>

                            <p className="mt-8 max-w-xl text-[17px] leading-8 text-[#666666] dark:text-gray-400">
                                If your current number is eligible,
                                you may be able to keep it and move it to Zoiko Local —
                                so your business keeps continuity while gaining modern
                                calling, video, and AI Receptionist.
                                Sound local. Reach anywhere.
                            </p>

                            {/* Buttons */}
                            <div className="mt-10 flex flex-col sm:flex-row gap-4">

                                <button
                                    className="h-12 px-8 rounded-xl bg-[#EB643F]
                        text-white text-sm font-semibold shadow-lg
                        hover:bg-[#D95A37] transition-all duration-300"
                                >
                                    Check Porting Eligibility →
                                </button>

                                <button
                                    className="h-12 px-8 rounded-xl
                        border border-[#0F6660]
                        dark:border-slate-600
                        bg-white dark:bg-slate-800
                        text-[#123533] dark:text-white
                        text-sm font-semibold
                        hover:bg-[#0F6660]
                        hover:text-white
                        transition-all duration-300"
                                >
                                    Talk to Sales
                                </button>
                            </div>

                            {/* Helper */}
                            <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                                Moving off a Skype Number?
                                <span className="ml-1 text-[#EB643F] font-medium cursor-pointer hover:underline">
                                    Switch from Skype →
                                </span>
                            </p>

                            {/* Bottom */}

                            <div className="mt-8 flex flex-col md:flex-row gap-6">
                                <div className="flex items-center gap-2">

                                    <FiCheck className="text-[#0F6660]" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        Keep the number customers already know
                                    </span>
                                </div>

                                <div className="flex items-center gap-2">
                                    <FiCheck className="text-[#0F6660]" />
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        Guided, step-by-step process
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="flex justify-center">
                            <div className="w-full max-w-xl rounded-[24px] overflow-hidden bg-white dark:bg-slate-800 border border-[#E6DDD2] dark:border-slate-700 shadow-2xl">

                                {/* Header */}
                                <div className="bg-[#0F6660] px-7 py-5 text-white">
                                    <h3 className="font-medium">
                                        Porting · How it works
                                    </h3>
                                </div>

                                {/* Steps */}
                                <div>

                                    {portingSteps.map((step, index) => (
                                        <div
                                            key={step.number}
                                            className={`flex gap-5 px-7 py-6 ${index !== portingSteps.length - 1
                                                ? "border-b border-[#ECE6DA] dark:border-slate-700"
                                                : ""
                                                }`}
                                        >

                                            {/* Number */}
                                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#EB643F] text-white flex items-center justify-center text-sm font-bold">
                                                {step.number}
                                            </div>

                                            {/* Content */}
                                            <div>

                                                <h4 className="font-semibold text-[#123533] dark:text-white">
                                                    {step.title}
                                                </h4>

                                                <p className="mt-2 text-sm leading-6 text-gray-500 dark:text-gray-400">
                                                    {step.description}
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
            {/* Why Port Your Number */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-6xl mx-auto px-5">

                    {/* Heading */}
                    <div className="text-center max-w-3xl mx-auto">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            Why Port Your Number
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[50px] font-bold leading-[1.15] text-[#123533] dark:text-white">
                            Keep the number customers
                            <br />
                            already know.
                        </h2>

                        <p className="mt-7 text-[17px] leading-8 text-[#666666] dark:text-gray-400">
                            Your number is on your website, cards, listings,
                            and in your customers' phones. Porting preserves
                            that continuity while you upgrade everything around it.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {portingBenefits.map((item) => (
                            <div
                                key={item.title}
                                className="group rounded-[24px]
                    bg-white dark:bg-slate-800
                    border border-[#E6DDD2] dark:border-slate-700
                    p-8
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl"
                            >

                                {/* Icon */}
                                <div
                                    className="w-12 h-12 rounded-xl
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
            {/* Frequently Asked Questions */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-5xl mx-auto px-5">
                    {/* Heading */}

                    <div className="text-center">
                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">
                            Questions
                        </p>

                        <h2 className="mt-5 text-3xl md:text-[50px] font-bold leading-tight text-[#123533] dark:text-white">
                            Number porting, answered.
                        </h2>

                    </div>

                    {/* Notice */}

                    <div className="mt-10 rounded-xl border-l-4 border-[#EB643F] border border-[#EB643F] dark:border-[#EB643F] bg-white dark:bg-slate-800 px-6 py-5">

                        <p className="text-sm leading-7 text-gray-500 dark:text-gray-400">

                            Porting availability depends on your current carrier,
                            number type, country, documentation, account status,
                            eligibility and applicable law. Porting cannot be
                            guaranteed until eligibility is verified. Keep your
                            existing service active until a port completes.

                        </p>

                    </div>

                    {/* FAQ */}

                    <div className="mt-8">

                        {portingFaqs.map((faq, index) => {

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
            {/* Final CTA section */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py_14">
                <div className="max-w-7xl mx-auto px-5">
                    <div
                        className="relative overflow-hidden rounded-[32px] px-8 py-12 md:px-16 md:py-16 text-center text-white"
                        style={{
                            background:
                                "radial-gradient(circle at top right, rgba(20,135,120,0.28), transparent 38%), linear-gradient(135deg,#0F6660 0%, #083D3A 100%)",
                        }}
                    >

                        {/* Decorative Glow */}

                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute -top-16 right-0 w-80 h-80 rounded-full bg-white/5 blur-[110px]" />
                            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#0F8B80]/20 blur-[120px]" />
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">

                            {/* Heading */}

                            <h2 className="text-3xl md:text-[52px] font-bold leading-[1.1]">
                                Keep your number.
                                <span className="text-[#F4A58E] italic">
                                    {" "}Upgrade
                                    <br />
                                    everything else.
                                </span>

                            </h2>

                            {/* Description */}

                            <p className="mt-7 max-w-2xl mx-auto text-[16px] leading-8 text-white/75">
                                Check whether your existing number can move to Zoiko
                                Local and gain modern calling, video, and an AI
                                Receptionist.
                            </p>

                            {/* Buttons */}

                            <div className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4">

                                {/* Primary */}
                                <button
                                    className="h-12 px-8 rounded-xl
                        bg-[#EB643F]
                        text-white
                        text-sm md:text-base
                        font-semibold
                        shadow-lg
                        hover:bg-[#D95A37]
                        hover:shadow-xl
                        transition-all duration-300"
                                >
                                    Check Porting Eligibility →
                                </button>

                                {/* Secondary */}
                                <button
                                    className="h-12 px-8 rounded-xl
                        border border-white/25
                        text-white
                        text-sm md:text-base
                        font-semibold
                        hover:bg-white
                        hover:text-[#123533]
                        transition-all duration-300"
                                >
                                    Talk to Sales
                                </button>

                                {/* Tertiary */}
                                <button
                                    className="h-12 px-8 rounded-xl
                        border border-white/25
                        text-white
                        text-sm md:text-base
                        font-semibold
                        hover:bg-white
                        hover:text-[#123533]
                        transition-all duration-300"
                                >
                                    Contact Support
                                </button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
