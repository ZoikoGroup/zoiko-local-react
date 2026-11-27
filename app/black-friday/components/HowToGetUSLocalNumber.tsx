import React from "react";

interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
}

const steps: StepItem[] = [
  {
    stepNumber: 1,
    title: "Search",
    description: "Look up a location or area code.",
  },
  {
    stepNumber: 2,
    title: "Choose",
    description: "Select an available eligible number.",
  },
  {
    stepNumber: 3,
    title: "Choose a plan",
    description: "Confirm or sign in to an eligible plan.",
  },
  {
    stepNumber: 4,
    title: "Verify",
    description: "Complete any required verification.",
  },
  {
    stepNumber: 5,
    title: "Go live",
    description: "Start communicating on your number.",
  },
] as const;

export default function HowToGetUSLocalNumber() {
  return (
    <section className="w-full bg-[#F6F2E9] py-20 px-4 sm:px-6 lg:px-8 font-sans text-[#2D3748]">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <span className="text-xs tracking-wider uppercase font-bold text-[#2E7D52] mb-3">
          GETTING STARTED
        </span>
        <h2 className="text-3xl sm:text-4xl font-serif text-[#1A202C] tracking-tight mb-16">
          How to get a U.S. local number.
        </h2>

        {/* Horizontal Process Steps */}
        <div className="w-full relative">
          {/* Connector Line Container */}
          <div className="hidden md:block absolute top-[26px] left-[10%] right-[10%] h-[2px] z-0">
            <div className="w-full h-full bg-gradient-to-r from-[#2E7D52] via-[#A89658] to-[#D96B43]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step) => (
              <div
                key={step.stepNumber}
                className="flex flex-col items-center text-center group"
              >
                {/* Number Circle Badge */}
                <div className="w-13 h-13 rounded-full bg-[#1F9D68] text-white font-bold text-xl flex items-center justify-center shadow-md mb-5">
                  {step.stepNumber}
                </div>

                {/* Step Title */}
                <h3 className="text-sm font-bold text-[#1A202C] mb-1.5">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-xs text-[#718096] max-w-[170px] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
