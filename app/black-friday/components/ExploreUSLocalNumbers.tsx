import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";

interface CityMarket {
  id: number;
  city: string;
  areaCodes: string;
  description: string;
  imageSrc: string;
  linkText: string;
  href: string;
}

const cityMarkets: CityMarket[] = [
  {
    id: 1,
    city: "New York",
    areaCodes: "212 · 646 · 332",
    description:
      "Manhattan's classic area codes remain some of the most requested in the country.",
    imageSrc: "/images/sale/2.png",
    linkText: "View numbers in New York",
    href: "/us-local-phone-numbers",
  },
  {
    id: 2,
    city: "Los Angeles",
    areaCodes: "213 · 310 · 323",
    description: "Multiple overlay codes serve the greater LA metro area.",
    imageSrc: "/images/sale/3.png",
    linkText: "View numbers in Los Angeles",
    href: "/us-local-phone-numbers",
  },
  {
    id: 3,
    city: "Chicago",
    areaCodes: "312 · 773 · 872",
    description: "A recognizable downtown code for teams serving the Midwest.",
    imageSrc: "/images/sale/4.png",
    linkText: "View numbers in Chicago",
    href: "/us-local-phone-numbers",
  },
  {
    id: 4,
    city: "Houston",
    areaCodes: "713 · 281 · 832",
    description: "One of the fastest growing business markets in the South.",
    imageSrc: "/images/sale/5.png",
    linkText: "View numbers in Houston",
    href: "/us-local-phone-numbers",
  },
  {
    id: 5,
    city: "Miami",
    areaCodes: "305 · 786 · 645",
    description:
      "A local presence for teams serving South Florida and Latin America.",
    imageSrc: "/images/sale/6.png",
    linkText: "View numbers in Miami",
    href: "/us-local-phone-numbers",
  },
  {
    id: 6,
    city: "San Francisco",
    areaCodes: "415 · 628",
    description: "Bay Area identity for teams building on the West Coast.",
    imageSrc: "/images/sale/7.png",
    linkText: "View numbers in San Francisco",
    href: "/us-local-phone-numbers",
  },
] as const;

export default function ExploreUSLocalNumbers() {
  return (
    <main className="w-full min-h-screen bg-[#F6F2E9] py-16 px-4 sm:px-6 lg:px-12 font-sans antialiased text-[#2D3748]">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header & Search Box */}
        <section className="space-y-6">
          <div className="space-y-2">
            <span className="text-xs tracking-wider uppercase font-bold text-[#3B6E4C]">
              FIND YOUR NUMBER
            </span>
            <h1 className="text-3xl sm:text-4xl font-serif text-[#1A202C] tracking-tight">
              Explore U.S. local numbers
            </h1>
          </div>

          {/* Search Card Container */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-sm border border-[#E2E8F0]/60 space-y-3">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="relative flex-1 w-full">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search by city, state, or area code — e.g. Austin, Texas, or 512"
                  className="w-full pl-11 pr-4 py-3.5 bg-[#F7F5EE]/60 border border-[#E2E8F0] rounded-xl text-sm text-[#2D3748] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FF6B4A]/40 focus:border-transparent transition-all"
                />
              </div>
              <Link
                href="/get-local-number"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#FF7A59] to-[#FF5232] hover:from-[#FF6A47] hover:to-[#EF4222] text-white font-medium text-sm rounded-xl transition-all shadow-sm flex items-center justify-center whitespace-nowrap cursor-pointer text-center"
              >
                Search numbers
              </Link>
            </div>
            <p className="text-[11px] text-gray-400 font-normal leading-relaxed pl-1">
              Availability updates in real time and can vary by location, plan,
              verification, and number capability. Search is an illustrative
              preview — not live inventory.
            </p>
          </div>
        </section>

        {/* Popular Business Markets Section */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-xs tracking-wider uppercase font-bold text-[#3B6E4C]">
              POPULAR BUSINESS MARKETS
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif text-[#1A202C] tracking-tight">
              Where U.S. teams build local presence.
            </h2>
            <p className="text-sm text-gray-500 max-w-2xl leading-relaxed">
              Shown here for layout — live availability and area codes are
              resolved from current inventory, not a fixed list.
            </p>
          </div>

          {/* Cards Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cityMarkets.map((market) => (
              <div
                key={market.id}
                className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0]/70 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Card Image Banner */}
                  <div className="relative h-44 w-full bg-gray-100">
                    <Image
                      src={market.imageSrc}
                      alt={`${market.city} skyline`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200/80 shadow-xs">
                      <span className="text-[11px] font-medium text-[#2E7D52]">
                        Numbers available
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-2">
                    <h3 className="text-lg font-serif font-semibold text-[#1A202C]">
                      {market.city}
                    </h3>
                    <p className="text-xs font-semibold text-[#3B6E4C] tracking-wide">
                      {market.areaCodes}
                    </p>
                    <p className="text-xs text-gray-500 leading-relaxed pt-1">
                      {market.description}
                    </p>
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="px-5 pb-5 pt-2">
                  <Link
                    href={market.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#FF6B4A] hover:text-[#E05333] transition-colors"
                  >
                    <span>{market.linkText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
