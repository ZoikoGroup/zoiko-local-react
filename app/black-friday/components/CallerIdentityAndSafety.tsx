import React from "react";
import Image from "next/image";
import { Check, AlertCircle } from "lucide-react";

export default function CallerIdentityAndSafety() {
  return (
    <section className="w-full bg-[#F7F5EE] py-16 px-4 sm:px-6 lg:px-8 font-sans text-[#2D3748]">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Row 1: Caller Identity (Left) & Image (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Caller Identity Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0]/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs tracking-wider uppercase font-bold text-[#2E7D52]">
                CALLER IDENTITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1A202C] tracking-tight">
                Caller identity and trusted communications.
              </h2>
              <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
                Zoiko Local uses caller identity and network trust controls
                designed to support legitimate communications.
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#1F9D68] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#4A5568]">
                    Only numbers assigned or authorized to your account can be
                    used as caller ID.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#1F9D68] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#4A5568]">
                    Caller name display and spam labels depend partly on
                    downstream carriers and devices — they can&apos;t be
                    guaranteed.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-[#1F9D68] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#4A5568]">
                    If your legitimate business calls are mislabeled, our
                    support route can help.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href="/calling"
                className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-[#1A202C] border border-[#CBD5E0] font-semibold text-xs rounded-xl transition-all shadow-2xs cursor-pointer"
              >
                Caller ID & reputation help
              </a>
            </div>
          </div>

          {/* Right Image Banner */}
          <div className="lg:col-span-6 relative min-h-[320px] rounded-3xl overflow-hidden border border-[#E2E8F0]">
            <Image
              src="/images/sale/9.png"
              alt="People reviewing notes and planning over wooden table"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full">
              <span className="text-[11px] font-medium text-white/90">
                Illustrative
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Safety (Left) & Messaging / Abroad (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Safety Card */}
          <div className="lg:col-span-6 bg-white rounded-3xl p-8 sm:p-10 border border-[#E2E8F0]/80 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-xs tracking-wider uppercase font-bold text-[#DD6B20]">
                SAFETY
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif text-[#1A202C] tracking-tight">
                Emergency calling in the United States.
              </h2>
              <p className="text-xs sm:text-sm text-[#718096] leading-relaxed">
                Emergency calling depends on the exact service configuration and
                may require a registered emergency address.
              </p>

              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-[#DD6B20] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#4A5568]">
                    Check the emergency calling status shown for your service
                    before relying on it.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-[#DD6B20] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#4A5568]">
                    988 (Suicide & Crisis Lifeline) routing depends on your live
                    voice configuration — never assumed from a U.S. number
                    alone.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <AlertCircle className="w-4 h-4 text-[#DD6B20] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#4A5568]">
                    Keep your registered emergency address current if your
                    service requires one.
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <a
                href="/calling"
                className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-[#1A202C] border border-[#CBD5E0] font-semibold text-xs rounded-xl transition-all shadow-2xs cursor-pointer"
              >
                Learn about emergency calling
              </a>
            </div>
          </div>

          {/* Right Stacked Cards: Messaging & Abroad */}
          <div className="lg:col-span-6 space-y-8">
            {/* U.S. Messaging Availability Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0]/80 shadow-xs space-y-6">
              <div className="space-y-2">
                <span className="text-xs tracking-wider uppercase font-bold text-[#2E7D52]">
                  U.S. MESSAGING AVAILABILITY
                </span>
                <h3 className="text-xl font-serif font-semibold text-[#1A202C]">
                  Messaging may require verification.
                </h3>
              </div>

              {/* Items List */}
              <div className="border border-[#EDF2F7] rounded-2xl overflow-hidden divide-y divide-[#EDF2F7]">
                <div className="p-4 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-[#1A202C] tracking-wide">
                    TRANSACTIONAL MESSAGES
                  </span>
                  <span className="px-3 py-1 bg-[#E6F4EA] text-[#2E7D52] text-[11px] font-semibold rounded-full shrink-0">
                    Eligible
                  </span>
                </div>
                <div className="p-4 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-[#1A202C] tracking-wide">
                    MARKETING/BULK MESSAGES
                  </span>
                  <span className="px-3 py-1 bg-[#FFECE5] text-[#DD6B20] text-[11px] font-semibold rounded-full shrink-0">
                    Registration required
                  </span>
                </div>
                <div className="p-4 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-[#1A202C] tracking-wide">
                    NEW NUMBERS
                  </span>
                  <span className="px-3 py-1 bg-[#EBF8FF] text-[#3182CE] text-[11px] font-semibold rounded-full shrink-0">
                    Confirmed at activation
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#A0AEC0] leading-relaxed">
                Business messaging may require verified identity, consent, and
                carrier or program approval.
              </p>
            </div>

            {/* Use Abroad Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#E2E8F0]/80 shadow-xs space-y-6">
              <div className="space-y-2">
                <span className="text-xs tracking-wider uppercase font-bold text-[#2E7D52]">
                  USE ABROAD
                </span>
                <h3 className="text-xl font-serif font-semibold text-[#1A202C]">
                  Use your U.S. number from supported apps.
                </h3>
              </div>

              {/* Items List */}
              <div className="border border-[#EDF2F7] rounded-2xl overflow-hidden divide-y divide-[#EDF2F7]">
                <div className="p-4 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-[#1A202C] tracking-wide">
                    CALLING & MESSAGING ABROAD
                  </span>
                  <span className="px-3 py-1 bg-[#EBF8FF] text-[#3182CE] text-[11px] font-semibold rounded-full shrink-0">
                    App dependent
                  </span>
                </div>
                <div className="p-4 flex items-center justify-between gap-4">
                  <span className="text-xs font-bold text-[#1A202C] tracking-wide">
                    EMERGENCY CALLING ABROAD
                  </span>
                  <span className="px-3 py-1 bg-[#FFECE5] text-[#DD6B20] text-[11px] font-semibold rounded-full shrink-0">
                    Not assumed
                  </span>
                </div>
              </div>

              <p className="text-[11px] text-[#A0AEC0] leading-relaxed">
                A U.S. number doesn&apos;t create U.S. physical presence, and
                emergency calling remains especially location sensitive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
