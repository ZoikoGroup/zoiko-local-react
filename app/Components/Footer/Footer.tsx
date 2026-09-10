import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

type FooterLink = string | { title: string; href: string };

type FooterSection = {
    title: string;
    links: FooterLink[];
};

const footerSections: FooterSection[] = [
    {
        title: "Platform",
        links: [
            { title: "Search Numbers", href: "/get-a-local-number" },
            { title: "Pricing", href: "/plans-and-pricing" },
            { title: "Business Workspace", href: "/business" },
            { title: "Mobile Apps", href: "#" },
            { title: "Status Page", href: "#" },
            { title: "Contact Support", href: "/contact-support" },
            { title: "Contact Sales", href: "#" },
        ],
    },
    {
        title: "Global Coverage",
        links: [
            { title: "United States", href: "#" },
            { title: "United Kingdom", href: "#" },
            { title: "Canada", href: "#" },
            { title: "European Numbers", href: "#" },
            { title: "Nigeria", href: "#" },
            { title: "South Africa", href: "#" },
            { title: "Caribbean Numbers", href: "#" },
            { title: "African Numbers", href: "#" },
            { title: "All Countries", href: "#" },
        ],
    },
    {
        title: "Use Cases",
        links: [
            { title: "Business Numbers", href: "/business" },
            { title: "Diaspora Founders", href: "/diaspora-founders" },
            { title: "Remote Teams", href: "/remote-teams" },
            { title: "International Expansion", href: "#" },
            { title: "Customer Support", href: "/customer-support" },
            { title: "Founder-Led Business", href: "/founder-led-business" },
        ],
    },
    {
        title: "Compare",
        links: [
            { title: "Skype Alternative", href: "/switch-from-skype" },
            { title: "Google Voice Alternative", href: "/google-voice-alternative" },
            { title: "OpenPhone Alternative", href: "/openphone-alternative" },
            { title: "Teams Phone Alternative", href: "/teams-phone-alternative" },
            { title: "Virtual Phone Number", href: "/virtual-phone-numbers" },
            { title: "Local Business Number", href: "/local-business-numbers" },
        ],
    },
    {
        title: "Legal",
        links: [
            { title: "Privacy Policy",href:"#" },
            { title: "Terms of Service", href: "#" },
            { title: "Acceptable Use Policy", href: "#" },
            { title: "Data Processing Agreement", href: "#" },
            { title: "AI Terms", href: "#" },
            { title: "Recording & Consent", href: "#" },
            { title: "Emergency Calling", href: "/emergency-calling" },
            { title: "Number Porting", href: "/number-porting" },
            { title: "Low Enforcement Requests", href: "#" },
            { title: "Accessibility", href: "#" },
            
        ],
    },
    {
        title: "Company",
        links: [
            { title: "About", href: "/about-us" },
            { title: "Communications", href: "/communications" },
            { title: "Careers", href: "/careers" },
            { title: "Press", href: "/press" },
            { title: "Contact", href: "/contact-support" },
        ],
    },
];

export default function Footer() {
    return (
        <footer className="bg-emerald-950 text-slate-300 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl px-6 py-16">
                {/* Top */}
                <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
                    {/* Brand */}
                    <div>
                        <Link href="/">
                            <Image
                                src="/Zoiko-Local-Logo.png"
                                alt="Zoiko Local"
                                width={180}
                                height={40}
                            />
                        </Link>

                        <p className="mt-5 text-sm leading-7 text-slate-400">
                            A governed local-number and business communications service — built for transparent billing, jurisdiction-aware compliance, verified account ownership, and trusted global business presence.
                        </p>

                        <div className="mt-6 flex flex-wrap gap-3">
                            <span className="rounded-full border border-white/10 px-3 py-1 text-xs">
                                ✓ Compliance Led
                            </span>

                            <span className="rounded-full border border-white/10 px-3 py-1 text-xs">
                                ✓ Global Coverage
                            </span>

                            <span className="rounded-full border border-white/10 px-3 py-1 text-xs">
                                ✓ Enterprise Ready
                            </span>
                        </div>

                        <div className="mt-8 flex gap-3">
                            <SocialIcon icon={<FaTwitter size={16} />} />
                            <SocialIcon icon={<FaLinkedin size={16} />} />
                            <SocialIcon icon={<FaFacebook size={16} />} />
                            <SocialIcon icon={<FaInstagram size={16} />} />
                        </div>
                    </div>

                    {/* Links */}
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:grid-cols-6">
                        {footerSections.map((section) => (
                            <div key={section.title}>
                                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                                    {section.title}
                                </h3>

                                <ul className="space-y-3">
                                    {section.links.map((link) => (
                                        <li key={typeof link === "string" ? link : link.title}>
                                            <Link
                                                href={typeof link === "string" ? "#" : link.href}
                                                className="text-sm text-slate-400 transition hover:text-white"
                                            >
                                                {typeof link === "string" ? link : link.title}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Middle */}
                <div className="my-12 h-px bg-white/10" />

                <div className="grid gap-8 md:grid-cols-3">
                    <InfoBlock
                        title="Platform Ownership"
                        text="Zoiko Local is a trading name of Zoiko Communications Group Inc., a
                            Zoiko Group company. Zoiko Local provides local-number, business
                            communication, verification, account management, and related
                            communications services, subject to the policies linked above."
                    />

                    <InfoBlock
                        title="Availability & Reliability"
                        text="Number availability, activation and verification requirements,
                            emergency-services access, porting, inbound and outbound calling,
                            SMS/MMS, recording, transcription, AI-assisted features, taxes,
                            surcharges, regulatory fees, and data processing may vary by
                            country, number type, customer category, carrier partner, and
                            applicable law."
                    />                          

                    <InfoBlock
                        title="Trademarks & Comparisons"
                        text="Zoiko Local is not affiliated with, endorsed by, or sponsored by Skype,
                            Microsoft, Microsoft Teams, Google, Google Voice, OpenPhone,
                            Zoom, RingCentral, Dialpad, Aircall, or any third-party brand
                            referenced for comparison, compatibility, or migration. All third-party
                            trademarks remain the property of their respective owners.                          "
                    />
                </div>

                {/* Bottom */}
                <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
                    <p className="max-w-lg">
                        © {new Date().getFullYear()} Zoiko Local  |  Zoiko Local is a trading name of Zoiko Communications
                        Group Inc., a Zoiko Group company  |  All rights reserved.
                    </p>

                    <div className="flex flex-wrap gap-5">
                        <Link href="#">Privacy</Link>
                        <Link href="#">Terms</Link>
                        <Link href="#">Accessibility</Link>
                        <Link href="#">Status</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function SocialIcon({ icon }: { icon: React.ReactNode }) {
    return (
        <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 transition hover:bg-white/10">
            {icon}
        </button>
    );
}

function InfoBlock({
    title,
    text,
}: {
    title: string;
    text: string;
}) {
    return (
        <div>
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white">
                {title}
            </h4>

            <p className="text-sm leading-6 text-slate-400">
                {text}
            </p>
        </div>
    );
}