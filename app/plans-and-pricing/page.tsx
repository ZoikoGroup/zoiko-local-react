"use client";

// ─────────────────────────────────────────────────────────────────────────────
// NOTE ON `metadata`
// This is a client component, because the Monthly/Annual toggle needs useState.
// Next.js only reads a `metadata` export from SERVER components, so it is
// deliberately NOT exported here — exporting it would be silently dead code.
//
// To keep the page title/description, add this sibling file:
//
//   // app/plans-pricing/layout.tsx
//   import type { Metadata } from "next";
//   export const metadata: Metadata = {
//     title: "Plans & Pricing | Zoiko Local",
//     description:
//       "Pricing that stays simple as your reach grows. Plans from $12.99/user/month.",
//   };
//   export default function Layout({ children }: { children: React.ReactNode }) {
//     return children;
//   }
// ─────────────────────────────────────────────────────────────────────────────

import React, { useState } from "react";
import {
  FiBarChart2,
  FiCheck,
  FiCpu,
  FiGlobe,
  FiHome,
  FiSmartphone,
  FiTag,
  FiTrendingUp,
  FiUser,
  FiUsers,
} from "react-icons/fi";

// ─── DATA ────────────────────────────────────────────────────────────────────
// Monthly and annual figures are both stored, never derived. $129/12 = $10.75
// but $199/12 = $16.58 and $449/12 = $37.42 — none is exactly 17% off, so
// computing the annual number in the browser would print prices that don't
// match the billing catalog.
type Plan = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  monthly: string;
  annualEquivalent: string;
  annualTotal: string;
  popular: boolean;
  features: string[];
};

const corePlans: Plan[] = [
  {
    icon: <FiUser />,
    title: "Starter",
    subtitle: "For independent professionals and solo operators.",
    monthly: "$12.99",
    annualEquivalent: "$10.75",
    annualTotal: "$129/user/year",
    popular: false,
    features: [
      "1 eligible standard local number",
      "Inbound & outbound PSTN calling at published rates",
      "Zoiko app-to-app voice where supported",
      "Voicemail and voicemail summaries",
      "Call forwarding & core account controls",
      "Usage visibility",
      "AI Receptionist available as an add-on",
    ],
  },
  {
    icon: <FiUsers />,
    title: "Business",
    subtitle: "For growing teams that need a shared, professional communications layer.",
    monthly: "$19.99",
    annualEquivalent: "$16.58",
    annualTotal: "$199/user/year",
    popular: true,
    features: [
      "Everything in Starter",
      "1 eligible standard local number per paid user",
      "Team members, roles & number assignment",
      "Business-hours & team routing",
      "Shared call handling where generally available",
      "Standard usage & business reporting",
      "AI Receptionist available as an add-on",
    ],
  },
  {
    icon: <FiBarChart2 />,
    title: "Pro",
    subtitle: "For customer-facing teams that need more control, intelligence and automation.",
    monthly: "$29.99",
    annualEquivalent: "$24.92",
    annualTotal: "$299/user/year",
    popular: false,
    features: [
      "Everything in Business",
      "Advanced routing & shared handling",
      "Advanced analytics & reporting",
      "API & webhooks where generally available",
      "50 AI Receptionist minutes/workspace/month included",
      "Priority support",
    ],
  },
  {
    icon: <FiSmartphone />,
    title: "Scale",
    subtitle: "For multi-market organizations managing more numbers, workflows and complexity.",
    monthly: "$44.99",
    annualEquivalent: "$37.42",
    annualTotal: "$449/user/year",
    popular: false,
    features: [
      "Everything in Pro",
      "Multi-market & multi-number administration",
      "Advanced roles & operational controls",
      "Cross-market usage & analytics views",
      "150 AI Receptionist minutes/workspace/month included",
      "Priority onboarding & priority support",
    ],
  },
];

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Nigeria",
  "South Africa",
  "Jamaica",
];

const currencies = ["USD", "GBP", "EUR", "CAD"];

// ─── DATA ────────────────────────────────────────────────────────────────────
const enterpriseFeatures = [
  "Negotiated market & number capacity",
  "Contracted routing, integrations & API requirements",
  "Volume rate cards & committed usage where approved",
  "Custom AI Receptionist allowance/capacity",
  "Security, compliance & procurement review",
  "Contracted onboarding, support & service objectives",
];

const trustSignals = [
  {
    icon: <FiTag />,
    title: "Transparent telecom pricing",
    description:
      "Clear pricing with metered calling disclosed up front — no hidden surcharges at checkout.",
  },
  {
    icon: <FiCpu />,
    title: "AI when you need it",
    description:
      "Add AI Receptionist as an add-on, or unlock included minutes as your plan grows.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Built for local business growth",
    description:
      "Expand across teams and markets without changing platforms as your reach grows.",
  },
];

const comparisonColumns = ["Starter", "Business", "Pro", "Scale", "Enterprise"];

const comparisonRows = [
  {
    feature: "Eligible standard local number",
    values: ["1", "1 / paid user", "1 / paid user", "1 / paid user", "Negotiated"],
  },
  {
    feature: "PSTN calling",
    values: ["Metered", "Metered", "Metered", "Metered / volume", "Contract / volume"],
  },
  {
    feature: "Team administration",
    values: ["—", "Included", "Included", "Advanced", "Advanced / custom"],
  },
  {
    feature: "Business-hours & routing",
    values: ["Core, personal", "Included", "Advanced", "Advanced, multi-market", "Custom"],
  },
  {
    feature: "Analytics",
    values: ["Basic", "Standard", "Advanced", "Advanced, multi-market", "Custom"],
  },
  {
    feature: "API & webhooks",
    values: ["—", "Limited / where GA", "Included", "Included", "Contracted"],
  },
  {
    feature: "AI Receptionist",
    values: ["Add-on", "Add-on", "50 min/workspace incl.", "150 min/workspace incl.", "Custom"],
  },
  {
    feature: "Support",
    values: [
      "Standard",
      "Standard",
      "Priority",
      "Priority + onboarding",
      "Contract / service objectives",
    ],
  },
];

// The Business column is highlighted in the design, so its index is named
// rather than hard-coded at each usage.
const FEATURED_COLUMN = 1;

const coverageCountries = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇲🇽", name: "Mexico" },
  { flag: "🇰🇪", name: "Kenya" },
  { flag: "🇯🇲", name: "Jamaica" },
  { flag: "🇳🇬", name: "Nigeria" },
  { flag: "🇿🇦", name: "South Africa" },
  { flag: "🇬🇭", name: "Ghana" },
];

export default function PlansPricing() {
  const [annual, setAnnual] = useState(false);

  const selectClass =
    "h-[42px] rounded-full border border-[#E4E0D4] dark:border-slate-700 bg-white dark:bg-slate-800 pl-4 pr-9 text-sm text-[#16211C] dark:text-white appearance-none cursor-pointer bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2214%22 height=%2214%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22%235A6660%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22m6 9 6 6 6-6%22/></svg>')] bg-[length:14px_14px] bg-[right_14px_center] bg-no-repeat focus:outline-none focus:ring-2 focus:ring-[#E2622D]/40";

  return (
    <>
      {/* ─── HERO + PLANS ─── */}
      <section className="bg-[#F6F2E8] dark:bg-slate-900 pt-14 pb-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#E2622D]">
              Plans &amp; Pricing · USD
            </p>

            <h1 className="mx-auto mt-4 max-w-[16ch] font-serif text-4xl font-medium leading-[1.16] tracking-tight text-[#16211C] md:text-[49px] dark:text-white">
              Pricing that stays simple as your reach grows.
            </h1>

            <p className="mx-auto mt-[18px] max-w-[44ch] font-serif text-[17px] italic leading-[1.5] text-[#4A564F] dark:text-gray-300">
              Start with a local number. Add your team, new markets and AI when you need them.
            </p>

            <p className="mx-auto mt-[18px] max-w-[62ch] text-[13.5px] leading-[1.6] text-[#5A6660] dark:text-gray-400">
              Plans from{" "}
              <strong className="font-semibold text-[#16211C] dark:text-white">
                $12.99/user/month
              </strong>
              . One standard local number included in eligible markets. PSTN usage and certain number
              types are billed separately.
            </p>
          </div>

    {/* ─── CONTROLS ─── */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="relative flex items-center">
              <FiGlobe className="pointer-events-none absolute left-4 text-[#5A6660]" aria-hidden />
              <label htmlFor="market" className="sr-only">
                Country
              </label>
              <select id="market" className={`${selectClass} !pl-10`}>
                {countries.map((c) => (
                  <option key={c}>Country: {c}</option>
                ))}
              </select>
            </div>

            <label htmlFor="currency" className="sr-only">
              Currency
            </label>
            <select id="currency" className={selectClass}>
              {currencies.map((c) => (
                <option key={c}>Currency: {c}</option>
              ))}
            </select>

            {/* Real buttons with aria-pressed rather than a styled checkbox, so the
                state is announced and both are reachable by keyboard. */}
            <div
              role="group"
              aria-label="Billing period"
              className="flex h-[42px] items-center gap-0.5 rounded-full border border-[#E4E0D4] dark:border-slate-700 bg-white dark:bg-slate-800 p-1"
            >
              <button
                type="button"
                aria-pressed={!annual}
                onClick={() => setAnnual(false)}
                className={`h-[32px] rounded-full px-4 text-sm transition ${
                  annual
                    ? "text-[#5A6660] dark:text-gray-400"
                    : "bg-[#EAE4D5] dark:bg-slate-700 font-semibold text-[#16211C] dark:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                aria-pressed={annual}
                onClick={() => setAnnual(true)}
                className={`flex h-[32px] items-center gap-2 rounded-full px-4 text-sm transition ${
                  annual
                    ? "bg-[#EAE4D5] dark:bg-slate-700 font-semibold text-[#16211C] dark:text-white"
                    : "text-[#5A6660] dark:text-gray-400"
                }`}
              >
                Annual
                <span className="rounded-full bg-[#DFF0E4] px-2 py-0.5 text-[11px] font-bold text-[#2E7D5B]">
                  Save ~17%
                </span>
              </button>
            </div>

            <a
              href="#compare"
              className="flex h-[42px] items-center rounded-full border border-[#E2622D] px-6 text-sm font-semibold text-[#E2622D] transition hover:bg-[#E2622D]/[0.07]"
            >
              Compare Plans
            </a>
          </div>

          {/* ─── PLAN CARDS ─── */}
          <div className="mt-11 grid grid-cols-1 items-start gap-5 md:grid-cols-2 xl:grid-cols-4">
            {corePlans.map((plan) => (
              <div
                key={plan.title}
                className={`relative flex h-full flex-col rounded-xl bg-white dark:bg-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  plan.popular
                    ? "border-[1.5px] border-[#E2622D]"
                    : "border border-[#E4E0D4] dark:border-slate-700"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-[11px] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#E2622D] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                    Most Popular
                  </span>
                )}

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E4EBE3] dark:bg-slate-700 text-lg text-[#0E2A21] dark:text-[#8FC7B4]">
                  {plan.icon}
                </div>

                <h3 className="mt-5 font-serif text-xl font-medium text-[#16211C] dark:text-white">
                  {plan.title}
                </h3>
                <p className="mt-1.5 min-h-[3.2em] text-[13.5px] leading-[1.55] text-[#5A6660] dark:text-gray-400">
                  {plan.subtitle}
                </p>

                <p className="mt-4 flex flex-wrap items-baseline gap-1.5">
                  <span className="font-serif text-[33px] font-medium tracking-tight text-[#16211C] dark:text-white">
                    {annual ? plan.annualEquivalent : plan.monthly}
                  </span>
                  <span className="text-[13px] text-[#5A6660] dark:text-gray-400">/user/month</span>
                </p>

                <p className="mt-1.5 text-[12.5px] leading-[1.5] text-[#5A6660] dark:text-gray-400">
                  {annual ? "Billed " : "Annual plan: "}
                  <strong className="font-semibold text-[#16211C] dark:text-white">
                    {plan.annualTotal}
                  </strong>
                  <br />
                  <span className="font-semibold text-[#2E7D5B]">
                    {annual ? "Save ~17% vs monthly" : `(${plan.annualEquivalent}/mo equivalent)`}
                  </span>
                </p>

                <hr className="my-[18px] border-[#E4E0D4] dark:border-slate-700" />

                <div className="flex-1 space-y-[11px]">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <FiCheck
                        className="mt-1 flex-shrink-0 text-[#2E7D5B]"
                        strokeWidth={3}
                        aria-hidden
                      />
                      <span className="text-[13.5px] leading-[1.5] text-[#3F4B45] dark:text-gray-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  className={`mt-6 h-12 w-full rounded-full text-sm font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-[#E2622D] text-white shadow-lg hover:bg-[#C9521F]"
                      : "border border-[#D5D0C2] dark:border-slate-600 bg-white dark:bg-slate-700 text-[#16211C] dark:text-white hover:border-[#0E2A21] hover:text-[#0E2A21] dark:hover:text-white"
                  }`}
                >
                  Start 14-Day Free Trial
                </button>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-7 max-w-[78ch] text-center text-[12.5px] leading-[1.65] text-[#7C8681] dark:text-gray-500">
            Prices shown in USD. Taxes and certain regulatory fees may apply. One standard local
            number is included per paid user in eligible markets; higher-cost or specially regulated
            numbers may carry an additional charge shown before purchase. Calls to and from the public
            telephone network are billed at published destination rates unless expressly included in a
            market-specific calling bundle. Number availability and features vary by country.
          </p>

          {/* ─── ENTERPRISE ─── */}
          <div className="mt-11 grid grid-cols-1 items-center gap-9 rounded-2xl bg-[#0E2A21] px-8 py-9 lg:grid-cols-[1fr_auto] md:px-9">
            <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.35fr)]">
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-[#E9F0EA]/10 text-2xl text-[#E9F0EA]">
                  <FiHome />
                </div>
                <div>
                  <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#E2622D]">
                    Enterprise
                  </p>
                  <h2 className="mt-0.5 font-serif text-[22px] font-medium text-white">Custom</h2>
                  <p className="mt-2.5 max-w-[34ch] text-[13.5px] leading-[1.6] text-[#E9F0EA]/70">
                    Contracted communications infrastructure for large, regulated or highly
                    customized deployments.
                  </p>
                </div>
              </div>

              <ul className="grid grid-cols-1 gap-x-7 gap-y-4 border-t border-[#E9F0EA]/[0.14] pt-6 sm:grid-cols-2 lg:border-x lg:border-t-0 lg:px-8 lg:py-1">
                {enterpriseFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <FiCheck
                      className="mt-1 flex-shrink-0 text-[#E2622D]"
                      strokeWidth={3}
                      aria-hidden
                    />
                    <span className="text-[13.5px] leading-[1.5] text-[#E9F0EA]">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              type="button"
              className="h-12 rounded-full bg-[#E2622D] px-8 text-sm font-semibold text-white shadow-lg transition hover:bg-[#C9521F]"
            >
              Contact Sales
            </button>
          </div>

          {/* ─── TRUST STRIP ─── */}
          <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-3">
            {trustSignals.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-3.5 rounded-xl border border-[#E4E0D4] dark:border-slate-700 bg-white dark:bg-slate-800 p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full bg-[#E4EBE3] dark:bg-slate-700 text-lg text-[#0E2A21] dark:text-[#8FC7B4]">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-[14.5px] font-semibold text-[#16211C] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-[1.55] text-[#5A6660] dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── COMPARISON ─── */}
      <section id="compare" className="bg-[#0E2A21] py-16">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-9 max-w-[56ch] text-center">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#E2622D]">
              Side by Side
            </p>
            <h2 className="mt-3.5 font-serif text-3xl font-medium text-white md:text-[33px]">
              Compare every entitlement.
            </h2>
            <p className="mt-3 text-sm leading-[1.6] text-[#E9F0EA]/70">
              Every plan resolves from one approved catalog — see exactly what&apos;s included before
              you choose.
            </p>
          </div>

          <div className="overflow-hidden rounded-[10px] border border-[#E9F0EA]/[0.14]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[900px] border-collapse">
                <caption className="sr-only">
                  Plan entitlements compared across Starter, Business, Pro, Scale and Enterprise
                </caption>
                <thead>
                  <tr className="bg-[#243D35]">
                    <th scope="col" className="px-[18px] py-3.5 text-left text-[13.5px] font-semibold text-white">
                      Capability
                    </th>
                    {comparisonColumns.map((col, i) => (
                      <th
                        key={col}
                        scope="col"
                        className={`whitespace-nowrap px-[18px] py-3.5 text-center text-[13.5px] font-semibold ${
                          i === FEATURED_COLUMN ? "text-[#E2622D]" : "text-white"
                        }`}
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr key={row.feature} className="group">
                      <th
                        scope="row"
                        className="border-t border-[#E9F0EA]/[0.14] px-[18px] py-3.5 text-left text-[13.5px] font-medium text-[#E9F0EA] transition group-hover:bg-white/[0.045]"
                      >
                        {row.feature}
                      </th>
                      {row.values.map((value, i) => (
                        <td
                          key={comparisonColumns[i]}
                          className={`whitespace-nowrap border-t border-[#E9F0EA]/[0.14] px-[18px] py-3.5 text-center text-[13.5px] transition group-hover:bg-white/[0.045] ${
                            i === FEATURED_COLUMN
                              ? "bg-[#243D35] text-[#E9F0EA]"
                              : "text-[#E9F0EA]/70"
                          }`}
                        >
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FINAL CTA ─── */}
      <section className="bg-[#F6F2E8] dark:bg-slate-900 py-14">
        <div className="mx-auto max-w-6xl px-5">
          <div className="rounded-2xl bg-[#0E2A21] px-8 pb-11 pt-13 text-center md:px-12">
            <p className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-[#E2622D]">
              Ready When You Are
            </p>
            <h2 className="mx-auto mt-3.5 max-w-3xl font-serif text-3xl font-medium leading-[1.2] text-white md:text-[33px]">
              Get your local number where business and life happen.
            </h2>

            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <button
                type="button"
                className="h-12 rounded-full bg-[#E2622D] px-8 text-sm font-semibold text-white shadow-lg transition hover:bg-[#C9521F]"
              >
                Get a Local Number →
              </button>
              <button
                type="button"
                className="h-12 rounded-full bg-white px-8 text-sm font-semibold text-[#16211C] transition hover:bg-gray-100"
              >
                Talk to Sales
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {coverageCountries.map((c) => (
                <span
                  key={c.name}
                  className="inline-flex items-center gap-[7px] rounded-full border border-[#E9F0EA]/[0.14] bg-[#E9F0EA]/[0.06] px-3.5 py-[7px] text-[12.5px] text-[#E9F0EA]"
                >
                  <span aria-hidden>{c.flag}</span>
                  {c.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}