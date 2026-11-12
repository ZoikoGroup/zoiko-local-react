import React from "react";
import { Tag, Check } from "lucide-react";

interface PricingPlan {
  id: string;
  name: string;
  description: string;
  isProposed?: boolean;
  isMostPopular?: boolean;
  originalPrice?: string;
  price: string;
  priceUnit?: string;
  pricingSubtext?: string;
  discountBadge?: string;
  isCustomPrice?: boolean;
  customSubtitle?: string;
  secondaryTag?: string;
  ctaText: string;
  ctaHref: string;
  isPrimaryCta?: boolean;
  features: string[];
}

const plans: PricingPlan[] = [
  {
    id: "individual",
    name: "Individual",
    description:
      "A local U.S. number for your global life, with the essentials to stay reachable.",
    isProposed: true,
    originalPrice: "$4.99",
    price: "$3.74",
    priceUnit: "/ user / mo*",
    pricingSubtext: "First 3 months · standard pricing after",
    discountBadge: "Save 25% · first 3 months*",
    ctaText: "Get Started",
    ctaHref: "/pricing",
    features: [
      "One eligible local number",
      "Inbound & outbound calling",
      "Voicemail & summaries",
      "Web & mobile apps",
    ],
  },
  {
    id: "business-starter",
    name: "Business Starter",
    description:
      "For small teams getting a trusted local presence in a market.",
    isProposed: true,
    originalPrice: "$12",
    price: "$9",
    priceUnit: "/ user / mo*",
    pricingSubtext: "First 3 months · standard pricing after",
    discountBadge: "Save 25% · first 3 months*",
    ctaText: "Choose Plan",
    ctaHref: "/business-communications",
    features: [
      "Everything in Individual",
      "Team seats & call routing",
      "Business hours & forwarding",
      "Usage visibility",
    ],
  },
  {
    id: "business-growth",
    name: "Business Growth",
    description:
      "For growing teams across territories that need AI handling and controls.",
    isProposed: true,
    isMostPopular: true,
    originalPrice: "$19",
    price: "$14.25",
    priceUnit: "/ user / mo*",
    pricingSubtext: "First 3 months · standard pricing after",
    discountBadge: "Save 25% · first 3 months*",
    ctaText: "Choose Plan",
    ctaHref: "/business-communications",
    isPrimaryCta: true,
    features: [
      "Everything in Starter",
      "AI Receptionist",
      "Compliance controls",
      "ZoikoNex billing & usage",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description:
      "For complex, multi-market operations with bespoke requirements.",
    isProposed: true,
    price: "Custom",
    isCustomPrice: true,
    customSubtitle: "Tailored to your markets",
    secondaryTag: "Volume pricing",
    ctaText: "Talk to Sales",
    ctaHref: "/contact-sales",
    features: [
      "Everything in Growth",
      "Advanced controls & support",
      "SSO & access management",
      "ZoikoNex billing at scale",
    ],
  },
] as const;

export default function FindThePlanThatFits() {
  return (
    <section className="w-full bg-[#F7F5EE] py-16 px-4 sm:px-6 lg:px-8 font-sans text-[#2D3748]">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Promo Tag */}
        <div className="inline-flex items-center gap-2 bg-[#FFECE5] text-[#D9532F] px-4 py-1.5 rounded-full text-xs font-semibold mb-6 border border-[#FFD5C6]">
          <Tag className="w-3.5 h-3.5" />
          <span>
            Black Friday — 25% off eligible plans for the first 3 months*
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-3xl sm:text-4xl font-serif text-[#1A202C] tracking-tight text-center mb-12">
          Find the plan that fits.
        </h2>

        {/* Pricing Cards Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl p-6 flex flex-col justify-between transition-shadow ${
                plan.isMostPopular
                  ? "border-2 border-[#1F9D68] shadow-lg ring-1 ring-[#1F9D68]/20"
                  : "border border-[#E2E8F0] shadow-sm"
              }`}
            >
              {/* Most Popular Badge */}
              {plan.isMostPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1F9D68] text-white text-[10px] uppercase font-bold tracking-wider px-3.5 py-1 rounded-full shadow-xs">
                  MOST POPULAR
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-[#1A202C] mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-[#718096] leading-relaxed min-h-[40px]">
                    {plan.description}
                  </p>
                </div>

                {/* Proposed Badge */}
                {plan.isProposed && (
                  <div className="w-full bg-[#F5A623] text-white text-[10px] font-bold uppercase tracking-wider py-1 px-2.5 rounded flex items-center gap-1.5 mb-4">
                    <span className="w-2 h-2 rounded-full border border-white flex items-center justify-center text-[8px]">
                      i
                    </span>
                    PROPOSED
                  </div>
                )}

                {/* Price Display */}
                <div className="mb-4">
                  {plan.isCustomPrice ? (
                    <div className="py-1">
                      <div className="text-3xl font-bold text-[#1A202C] tracking-tight">
                        {plan.price}
                      </div>
                      <p className="text-xs text-[#718096] mt-1">
                        {plan.customSubtitle}
                      </p>
                    </div>
                  ) : (
                    <div>
                      {plan.originalPrice && (
                        <div className="text-xs text-[#A0AEC0] line-through font-medium mb-0.5">
                          {plan.originalPrice}
                        </div>
                      )}
                      <div className="flex items-baseline gap-1">
                        <span className="text-3xl font-extrabold text-[#1A202C] tracking-tight">
                          {plan.price}
                        </span>
                        <span className="text-xs text-[#718096] font-normal">
                          {plan.priceUnit}
                        </span>
                      </div>
                      {plan.pricingSubtext && (
                        <p className="text-[11px] text-[#A0AEC0] mt-1">
                          {plan.pricingSubtext}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Highlight Badge / Secondary Tag */}
                <div className="mb-6 min-h-[28px]">
                  {plan.discountBadge && (
                    <div className="inline-block bg-[#E6F4EA] text-[#2E7D52] text-xs font-semibold px-3 py-1 rounded-md">
                      {plan.discountBadge}
                    </div>
                  )}
                  {plan.secondaryTag && (
                    <div className="inline-block bg-[#F7F5EE] text-[#718096] text-xs font-semibold px-3 py-1 rounded-md border border-[#E2E8F0]">
                      {plan.secondaryTag}
                    </div>
                  )}
                </div>

                {/* CTA Button */}
                <a
                  href={plan.ctaHref}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center text-center shadow-xs ${
                    plan.isPrimaryCta
                      ? "bg-[#D9532F] hover:bg-[#C44624] text-white shadow-md"
                      : "bg-white hover:bg-gray-50 text-[#2D3748] border border-[#CBD5E0]"
                  }`}
                >
                  {plan.ctaText}
                </a>

                {/* Features List */}
                <div className="mt-6 pt-6 border-t border-[#EDF2F7]">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-[#2E7D52] shrink-0 mt-0.5" />
                        <span className="text-xs text-[#4A5568] leading-tight">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Disclaimer */}
        <p className="text-[11px] text-[#A0AEC0] text-center max-w-4xl mt-12 leading-relaxed">
          Prices are illustrative placeholders, shown per user per month. Final
          prices are confirmed at checkout and may depend on market,
          verification requirements and selected features. *The 25% Black Friday
          discount is{" "}
          <span className="font-semibold text-[#718096]">
            proposed and subject to Finance & Product approval and an
            inventory/billing check
          </span>
          ; it applies to eligible local-number platform subscriptions for the
          first 3 months on new business accounts. Number charges, carrier fees
          and usage are excluded unless specifically approved.
        </p>
      </div>
    </section>
  );
}
