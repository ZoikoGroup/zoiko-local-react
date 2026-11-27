"use client";
import React, { useState } from "react";
import { Plus, X } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "What is a U.S. local phone number?",
    answer:
      "A U.S. local number uses country code +1 and a U.S. area code associated with a numbering region. The area code does not prove that the number owner has a physical office in that location.",
  },
  {
    id: "2",
    question: "How do I get a U.S. local number?",
    answer:
      "You can search available numbers by city, state, or area code, choose your preferred number, select an eligible plan, complete any required verification, and go live.",
  },
  {
    id: "3",
    question: "Can I choose any U.S. area code?",
    answer:
      "Area code availability depends on real-time inventory, carrier regulations, and specific numbering region rules.",
  },
  {
    id: "4",
    question: "Can I get a U.S. number if I live outside the United States?",
    answer:
      "Yes, you can use your U.S. number from supported apps globally, subject to verification and local app capabilities.",
  },
  {
    id: "5",
    question: "Can I port my existing U.S. number?",
    answer:
      "Many numbers may be portable, but eligibility depends on the number, provider, geography, and account information.",
  },
  {
    id: "6",
    question: "Does every U.S. number support SMS and MMS?",
    answer:
      "No, messaging eligibility varies by number, carrier support, and required business registration.",
  },
  {
    id: "7",
    question: "Can I call 911 with Zoiko Local?",
    answer:
      "Emergency calling depends on exact service configuration, device capabilities, and a registered emergency address.",
  },
  {
    id: "8",
    question: "What is 988?",
    answer:
      "988 is the Suicide & Crisis Lifeline. Routing depends on your live voice configuration and never from a U.S. number alone.",
  },
] as const;

export default function USLocalNumberFAQ() {
  const [openId, setOpenId] = useState<string>("1");

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? "" : id);
  };

  return (
    <section className="w-full bg-[#F7F5EE] py-20 px-4 sm:px-6 lg:px-8 font-sans text-[#2D3748]">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs tracking-wider uppercase font-bold text-[#2E7D52]">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#1A202C] tracking-tight">
            U.S. local number questions
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="border-t border-[#E2E8F0]">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="border-b border-[#E2E8F0]">
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full py-6 flex items-center justify-between text-left group cursor-pointer focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-serif font-medium text-[#1A202C] group-hover:text-[#2E7D52] transition-colors pr-4">
                    {item.question}
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center shrink-0 text-[#DD6B20]">
                    {isOpen ? (
                      <X className="w-4 h-4" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-6 pr-12 animate-fadeIn">
                    <p className="text-sm text-[#718096] leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Disclaimer */}
        <p className="text-[11px] text-[#A0AEC0] leading-relaxed pt-4">
          Numbers, area codes and pricing shown on this page are illustrative
          for layout. Live availability, capability, verification requirements
          and pricing are resolved from current inventory at the time of search.
        </p>
      </div>
    </section>
  );
}
