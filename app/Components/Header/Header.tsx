"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  FiActivity, FiMenu, FiX, FiMapPin, FiPhone, FiVideo, FiMic,
  FiSmartphone, FiGrid, FiBriefcase, FiHash, FiUsers, FiGlobe,
  FiTrendingUp, FiHeadphones, FiUser, FiChevronDown,
} from "react-icons/fi";

const platformItems = [
  { title: "Local Numbers", desc: "Search, reserve & manage local presence", icon: FiMapPin },
  { title: "Calling", desc: "Business-grade inbound & outbound voice", icon: FiPhone },
  { title: "Video", desc: "Meetings & customer video calls", icon: FiVideo },
  { title: "AI Receptionist", desc: "Answer, qualify & route missed calls", icon: FiMic, badge: "NEW" },
  { title: "Mobile Apps", desc: "Take your number anywhere", icon: FiSmartphone },
  { title: "Business Workspace", desc: "Teams, roles, routing & billing", icon: FiGrid },
  { title: "Status Page", desc: "Live service & uptime status", icon: FiActivity },
];

const solutionItems = [
  { title: "For Business", desc: "One communication layer for every team", icon: FiBriefcase },
  { title: "Business Numbers", desc: "Local & toll-free numbers for work", icon: FiHash },
  { title: "Remote Teams", desc: "Connect distributed teams anywhere", icon: FiUsers },
  { title: "Diaspora Founders", desc: "Stay local in home & host markets", icon: FiGlobe },
  { title: "International Expansion", desc: "Local presence in new markets", icon: FiTrendingUp },
  { title: "Customer Support", desc: "Route, capture & resolve enquiries", icon: FiHeadphones },
  { title: "Founder-Led Business", desc: "A professional front desk for one", icon: FiUser },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState<"platform" | "solutions" | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<"platform" | "solutions" | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md relative">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0">
          <Image src="/Zoiko-Local-Logo.png" alt="Zoiko Local" width={180} height={40} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-8 list-none m-0 p-0">

            {/* Platform */}
            <li
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("platform")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-2 text-base font-medium">
                Platform
                <FiChevronDown className={`transition-transform ${activeMegaMenu === "platform" ? "rotate-180" : ""}`} />
              </button>
            </li>

            {/* Solutions */}
            <li
              className="relative"
              onMouseEnter={() => setActiveMegaMenu("solutions")}
              onMouseLeave={() => setActiveMegaMenu(null)}
            >
              <button className="flex items-center gap-2 text-base font-medium">
                Solutions
                <FiChevronDown className={`transition-transform ${activeMegaMenu === "solutions" ? "rotate-180" : ""}`} />
              </button>
            </li>

            {[
              { label: "Global Coverage", href: "/global-coverage" },
              { label: "Plans and Pricing", href: "/plans-and-pricing" },
              { label: "Resources", href: "/resources" },
            ].map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="text-base font-medium hover:text-[#F26B45]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link href="/login" className="text-base font-medium text-muted-foreground hover:text-foreground">
            Sign In
          </Link>
          <Link href="/start-free" className="rounded-full bg-[#F26B45] px-6 py-3 text-base font-semibold text-white transition hover:opacity-90">
            Start Free
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setOpen(!open)} className="lg:hidden" aria-label="Menu">
          {open ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* FIX 3: Mobile Menu with accordion dropdowns */}
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="space-y-1 px-4 py-6">

            {/* Platform accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "platform" ? null : "platform")}
                className="flex w-full items-center justify-between py-3 text-base font-medium"
              >
                Platform
                <FiChevronDown className={`transition-transform ${mobileExpanded === "platform" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "platform" && (
                <div className="grid grid-cols-2 gap-4 pb-4 pl-2">
                  {platformItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-2">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF4F2]">
                          <Icon size={16} className="text-[#0D5C54]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold leading-tight">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Solutions accordion */}
            <div>
              <button
                onClick={() => setMobileExpanded(mobileExpanded === "solutions" ? null : "solutions")}
                className="flex w-full items-center justify-between py-3 text-base font-medium"
              >
                Solutions
                <FiChevronDown className={`transition-transform ${mobileExpanded === "solutions" ? "rotate-180" : ""}`} />
              </button>
              {mobileExpanded === "solutions" && (
                <div className="grid grid-cols-2 gap-4 pb-4 pl-2">
                  {solutionItems.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="flex items-start gap-2">
                        <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF4F2]">
                          <Icon size={16} className="text-[#0D5C54]" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold leading-tight">{item.title}</p>
                          <p className="text-xs text-muted-foreground">{item.desc}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>

            {/* Regular links */}
            {[
              { label: "Global Coverage", href: "/global-coverage" },
              { label: "Plans and Pricing", href: "/plans-and-pricing" },
              { label: "Resources", href: "/resources" },
            ].map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="block py-3 text-base font-medium">
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 pt-4">
              <Link href="/signin" className="rounded-lg border px-4 py-3 text-center">Sign In</Link>
              <Link href="/signup" className="rounded-lg bg-[#F26B45] px-4 py-3 text-center font-semibold text-white">Start Free</Link>
            </div>
          </div>
        </div>
      )}
      {activeMegaMenu && (
        <div
          className="absolute left-1/2 -translate-x-1/2 z-50"
          style={{ top: "80px" }}
          onMouseEnter={() => setActiveMegaMenu(activeMegaMenu)}
          onMouseLeave={() => setActiveMegaMenu(null)}
        >
          {activeMegaMenu === "platform" && (
            <MegaMenu title="Platform" items={platformItems} buttonText="Start Free" buttonlink="/start-free" />
          )}
          {activeMegaMenu === "solutions" && (
            <MegaMenu title="Solutions" items={solutionItems} buttonText="Talk to Sales" buttonlink="/contact-sales" />
          )}
        </div>
      )}
    </header>
  );
}

function MegaMenu({ title, items, buttonText, buttonlink }: { title: string; items: any[]; buttonText: string; buttonlink: string }) {
  return (
    <div className="w-[min(1000px,90vw)] overflow-hidden rounded-[28px] border border-[#E5DDD4] bg-white shadow-[0_25px_80px_rgba(0,0,0,0.08)] dark:border-slate-700 dark:bg-slate-900">
      <div className="p-8">
        <div className="mb-10 flex items-center justify-between">
          <span className="text-xs font-bold uppercase tracking-[4px] text-slate-500">{title}</span>
          <Link href={`/${title.toLowerCase()}`}>
            <button className="font-medium text-[#F26B45]">View {title} →</button>
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-x-7 gap-y-7">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="group cursor-pointer">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#EEF4F2] dark:bg-slate-800">
                  <Icon size={20} className="text-[#0D5C54]" />
                </div>
                <h4 className="mb-2 flex items-center gap-2 text-lg font-semibold">
                  {item.title}
                  {item.badge && (
                    <span className="rounded-full bg-[#F26B45] px-2 py-0.5 text-[10px] text-white">NEW</span>
                  )}
                </h4>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-[#E5DDD4] bg-[#F8F5F1] px-10 py-5 dark:border-slate-700 dark:bg-slate-800">
        <p className="text-sm text-slate-600 dark:text-slate-300">Use one product or build the full stack.</p>
        <Link href={buttonlink}>
          <button className="rounded-full bg-[#F26B45] px-8 py-3 font-semibold text-white">{buttonText}</button>
        </Link>
      </div>
    </div>
  );
}