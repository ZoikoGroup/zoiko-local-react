import React from 'react';
import Faq from '../Components/Faq';

const emergencyInfo = [
    {
        important: true,
        title:
            "Important: do not rely on Zoiko Local as your only way to call emergency services",
        description:
            "Emergency-calling availability, routing, location accuracy, and access may vary by country, number type, device, network connection, your location, and service configuration. You should always keep a traditional phone line or mobile service available for emergencies unless Zoiko Local expressly supports emergency calling in your location and configuration.",
    },
    {
        title: "Availability varies by location",
        description:
            "Emergency-calling support depends on the country, the number type, and your service configuration. It may not be available for every number or in every market.",
    },
    {
        title: "Location may not be automatic",
        description:
            "Unlike a fixed traditional line, an internet-based service may not automatically share your physical location with emergency operators. Be prepared to state your location.",
    },
    {
        title: "It depends on power and internet",
        description:
            "Internet-based calling needs a working device, power, and a network connection. During an outage, it may not function the same way as a traditional telephone service.",
    },
    {
        title: "Numbers may be in another market",
        description:
            "If your local number is for a market different from where you physically are, it may not connect you to local emergency services in your actual location.",
    },
    {
        title: "Keep a backup",
        description:
            "Always maintain access to a mobile phone or traditional landline for emergencies. Make sure others using your account understand these limitations.",
    },
];
const faqItems = [
    {
        question: "Can internet-based phone services call emergency services?",
        answer:
            "Emergency calling availability depends on the country, number type, carrier support, and applicable regulations. Always review local emergency-calling requirements before relying on an internet-based service.",
    },
    {
        question: "Does Zoiko Local share my location with emergency operators?",
        answer:
            "Location sharing capabilities vary by jurisdiction and emergency-calling framework. Availability may differ depending on the service configuration and local regulations.",
    },
    {
        question: "What happens during a power or internet outage?",
        answer:
            "Internet-based communication services may be affected by power failures, network disruptions, or connectivity issues. Consider backup communication methods for emergencies.",
    },
    {
        question: "My number is for another country — can I call local emergency services?",
        answer:
            "Emergency-calling behavior may vary when using numbers associated with another country or region. Review local regulations and service limitations before use.",
    },
];

export default function Emergencycalling() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[420px] h-[420px] bg-[#F4A58E]/20 blur-[120px] rounded-full pointer-events-none" />

                <div className="max-w-7xl mx-auto px-5 relative z-10">

                    <div className="max-w-2xl mx-auto">

                        {/* Label */}

                        <p className="uppercase tracking-[0.35em] text-[10px] font-semibold text-[#EB643F]">

                            Emergency Calling · Important Information

                        </p>

                        {/* Heading */}

                        <h1 className="mt-6 text-4xl md:text-[58px] font-bold leading-[1.08] text-[#123533] dark:text-white">

                            Emergency calling with

                            <br />

                            internet-based services.

                        </h1>

                        {/* Description */}

                        <p className="mt-8 max-w-xl text-[17px] leading-8 text-[#666666] dark:text-gray-400">

                            Internet-based calling works differently from
                            traditional phone lines. Please read this
                            information carefully and make sure you have
                            a reliable way to reach emergency services.

                        </p>

                        {/* Buttons */}

                        <div className="mt-10 flex flex-col sm:flex-row gap-4">

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

                                Read the details →

                            </button>

                            {/* Secondary */}

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

                                Contact Support

                            </button>

                        </div>

                    </div>

                </div>

            </section>
            {/*  */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-12">
                <div className="max-w-4xl mx-auto px-5">

                    <div className="space-y-6">

                        {emergencyInfo.map((item, index) => (

                            <div
                                key={index}
                                className={`
                        rounded-2xl
                        bg-white
                        dark:bg-slate-800
                        shadow-sm
                        transition-all
                        duration-300
                        hover:shadow-lg
                        ${item.important
                                        ? "border-l-4 border-[#EB643F] border border-[#F4C4B6] dark:border-[#EB643F]"
                                        : "border border-[#E7DED2] dark:border-slate-700"
                                    }
                    `}
                            >

                                <div className="px-7 py-6">
                                    <h3
                                        className={`text-lg font-semibold leading-7
                            ${item.important
                                                ? "text-[#EB643F]"
                                                : "text-[#123533] dark:text-white"
                                            }`}
                                    >

                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-[15px] leading-8 text-[#666666] dark:text-gray-400">

                                        {item.description}

                                    </p>

                                </div>

                            </div>

                        ))}

                    </div>

                </div>

            </section>
            {/* FAQ Section */}
            <Faq
                heading="QUESTIONS"
                subHeading="Emergency calling, answered."
                items={faqItems}
            />
            {/* Final CTA section */}
            <section className="bg-[#F7F5F2] dark:bg-slate-900 py-10 md:py-14">
                <div className="max-w-7xl mx-auto px-5">
                    <div
                        className="relative overflow-hidden rounded-[32px] px-8 py-16 md:px-16 md:py-20 text-center text-white"
                        style={{
                            background:
                                "radial-gradient(circle at top right, rgba(18,130,118,0.30), transparent 38%), linear-gradient(135deg,#0F6660 0%, #083D3A 100%)",
                        }}
                    >

                        {/* Decorative Glow */}

                        <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute -top-20 right-0 w-80 h-80 rounded-full bg-white/5 blur-[110px]" />
                            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-[#0F8B80]/20 blur-[120px]" />
                        </div>

                        <div className="relative z-10 max-w-5xl mx-auto">

                            {/* Heading */}
                            <h2 className="text-3xl md:text-[52px] font-bold leading-[1.1]">
                                Questions about service
                                <br className="block md:hidden"/>
                                and safety?
                            </h2>

                            {/* Description */}
                            <p className="mt-7 max-w-2xl mx-auto text-[16px] md:text-[18px] leading-8 text-white/75">

                                Our support team can help you understand availability,
                                emergency-calling capabilities, and configuration for
                                your specific location and number.

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

                                    Find Help
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
