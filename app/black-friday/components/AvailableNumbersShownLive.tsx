import React from "react";

interface PhoneItem {
  id: string;
  number: string;
  location: string;
  price: string;
  badges: {
    text: string;
    variant: "green" | "orange";
  }[];
}

const availableNumbers: PhoneItem[] = [
  {
    id: "1",
    number: "(212) 555-0148",
    location: "New York, NY",
    price: "$4.99",
    badges: [
      { text: "Voice", variant: "green" },
      { text: "Registration required", variant: "orange" },
    ],
  },
  {
    id: "2",
    number: "(415) 555-0172",
    location: "San Francisco, CA",
    price: "$4.99",
    badges: [
      { text: "Voice", variant: "green" },
      { text: "SMS eligible", variant: "green" },
    ],
  },
  {
    id: "3",
    number: "(305) 555-0113",
    location: "Miami, FL",
    price: "$4.99",
    badges: [
      { text: "Voice", variant: "green" },
      { text: "SMS eligible", variant: "green" },
    ],
  },
] as const;

export default function AvailableNumbersShownLive() {
  return (
    <section className="w-full bg-[#F6F2E9] py-16 px-4 sm:px-6 lg:px-8 font-sans text-[#2D3748]">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs tracking-wider uppercase font-bold text-[#2E7D52]">
            Choose your number
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A202C] tracking-tight">
            Available numbers, shown live.
          </h2>
          <p className="text-xs sm:text-sm text-[#718096] max-w-3xl leading-relaxed">
            A preview of what search results look like. Capabilities are shown
            per number — never assumed from the area code alone. Numbers below
            are illustrative, not live inventory.
          </p>
        </div>

        {/* List Container */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0]/80 shadow-xs overflow-hidden divide-y divide-[#EDF2F7]">
          {availableNumbers.map((item) => (
            <div
              key={item.id}
              className="p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-gray-50/50 transition-colors"
            >
              {/* Left Column: Number, Location, & Badges */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                <span className="text-base sm:text-lg font-bold text-[#1A202C] tracking-tight">
                  {item.number}
                </span>

                <span className="text-xs sm:text-sm text-[#718096] min-w-[130px]">
                  {item.location}
                </span>

                {/* Capability Badges */}
                <div className="flex items-center gap-2 flex-wrap">
                  {item.badges.map((badge, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 rounded-full text-[11px] font-medium ${
                        badge.variant === "green"
                          ? "bg-[#E6F4EA] text-[#2E7D52]"
                          : "bg-[#FFECE5] text-[#DD6B20]"
                      }`}
                    >
                      {badge.text}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Price & Select Action */}
              <div className="flex items-center justify-between sm:justify-end gap-5 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#EDF2F7]">
                <div className="flex items-baseline gap-1">
                  <span className="text-base sm:text-lg font-bold text-[#1A202C]">
                    {item.price}
                  </span>
                  <span className="text-xs text-[#718096]">/mo</span>
                </div>

                <a
                  href="/get-local-number"
                  className="px-5 py-2 bg-white hover:bg-gray-50 text-[#1A202C] border border-[#CBD5E0] rounded-xl text-xs font-semibold shadow-2xs transition-all flex items-center justify-center min-w-[76px]"
                >
                  Select
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
