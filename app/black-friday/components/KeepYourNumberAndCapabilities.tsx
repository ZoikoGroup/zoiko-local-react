import React from "react";
import Image from "next/image";
import {
  Check,
  Phone,
  MessageSquare,
  Video,
  UserCheck,
  ArrowRightLeft,
  Monitor,
} from "lucide-react";

interface CapabilityCard {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  badgeText: string;
  badgeStyle: "blue" | "orange";
}

const capabilities: CapabilityCard[] = [
  {
    id: "calling",
    icon: Phone,
    title: "Calling",
    description: "Inbound and outbound calling on your entitled U.S. numbers.",
    badgeText: "Plan dependent",
    badgeStyle: "blue",
  },
  {
    id: "messaging",
    icon: MessageSquare,
    title: "Messaging",
    description:
      "SMS/MMS where the number, carrier, and registration support it.",
    badgeText: "Eligibility varies",
    badgeStyle: "orange",
  },
  {
    id: "video",
    icon: Video,
    title: "Video",
    description: "Join or start video conversations from supported apps.",
    badgeText: "Plan dependent",
    badgeStyle: "blue",
  },
  {
    id: "ai-receptionist",
    icon: UserCheck,
    title: "AI Receptionist",
    description:
      "Answer, route, and capture messages with a configured assistant.",
    badgeText: "Market & plan dependent",
    badgeStyle: "orange",
  },
  {
    id: "porting",
    icon: ArrowRightLeft,
    title: "Porting",
    description:
      "Bring an eligible existing U.S. number, subject to a portability check.",
    badgeText: "Eligibility varies",
    badgeStyle: "orange",
  },
  {
    id: "web-mobile-apps",
    icon: Monitor,
    title: "Web & mobile apps",
    description:
      "Manage your number from supported web, iOS, and Android clients.",
    badgeText: "Where available",
    badgeStyle: "blue",
  },
] as const;

export default function KeepYourNumberAndCapabilities() {
  return (
    <section className="w-full bg-[#F6F2E9] py-16 px-4 sm:px-6 lg:px-8 font-sans text-[#2D3748]">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Top Section: Keep Your Number */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Image Banner */}
          <div className="lg:col-span-6 relative min-h-[320px] rounded-3xl overflow-hidden border border-[#E2E8F0]">
            <Image
              src="/images/sale/8.png"
              alt="City skyline bridge view"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              <span className="text-[11px] font-medium text-white/90">
                Stock photography — layout preview
              </span>
            </div>
          </div>

          {/* Right Content Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0]/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs tracking-wider uppercase font-bold text-[#2E7D52]">
                KEEP YOUR NUMBER
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1A202C] tracking-tight">
                Keep your existing U.S. number.
              </h2>
              <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
                Many numbers may be portable, but eligibility depends on the
                number, provider, geography, and account information.
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1F9D68] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#4A5568]">
                    Check portability before canceling your current service.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1F9D68] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#4A5568]">
                    We&apos;ll show you exactly what&apos;s needed — no
                    guesswork.
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-[#1F9D68] shrink-0" />
                  <span className="text-xs sm:text-sm text-[#4A5568]">
                    Your current service stays active until the transfer
                    completes.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href="/number-porting"
                className="inline-flex items-center justify-center px-6 py-3 bg-[#1F9D68] hover:bg-[#188356] text-white font-medium text-xs rounded-xl transition-colors shadow-xs cursor-pointer"
              >
                Check portability
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section: Capabilities */}
        <div className="space-y-8">
          <div className="space-y-3">
            <span className="text-xs tracking-wider uppercase font-bold text-[#2E7D52]">
              CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#1A202C] tracking-tight">
              More than a phone number.
            </h2>
            <p className="text-xs sm:text-sm text-[#718096] max-w-2xl leading-relaxed">
              Use Zoiko Local for calling and, where your plan includes them,
              messaging, video, and AI-assisted communications.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 border border-[#E2E8F0]/80 shadow-xs flex flex-col justify-between min-h-[200px]"
                >
                  <div className="space-y-4">
                    <div className="w-10 h-10 rounded-xl bg-[#E6F4EA] flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-[#1F9D68]" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-base font-serif font-semibold text-[#1A202C]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#718096] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-[11px] font-medium ${
                        item.badgeStyle === "blue"
                          ? "bg-[#EBF8FF] text-[#3182CE]"
                          : "bg-[#FFECE5] text-[#DD6B20]"
                      }`}
                    >
                      {item.badgeText}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
