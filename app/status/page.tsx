"use client";
const USE_SAMPLE_DATA = false;

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  FiAlertCircle,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiChevronDown,
  FiClock,
  FiFileText,
  FiGlobe,
  FiInfo,
  FiLock,
  FiMail,
  FiMessageSquare,
  FiRss,
  FiTool,
  FiZap,
} from "react-icons/fi";
import { getPublicStatus, ApiError, type PublicStatus } from "@/lib/api";

// ─── STATUS VOCABULARY ───────────────────────────────────────────────────────
// The API only emits "operational" | "degraded". The design's legend has six
// states, so the extra four are defined here ready for when the backend
// widens its enum. "delayed" is the default for any component the API did
// not report — the legend is explicit that unverified components must show
// "Status delayed," never "Operational."
type StatusKey =
  | "operational"
  | "degraded"
  | "partial"
  | "major"
  | "maintenance"
  | "delayed";

const STATUS_META: Record<StatusKey, { label: string; dot: string; pill: string }> = {
  operational: {
    label: "Operational",
    dot: "border-[#3FA37F] bg-[#E4EFE9]",
    pill: "bg-[#E4EFE9] text-[#0E5C4E]",
  },
  degraded: {
    label: "Degraded performance",
    dot: "border-[#E0A93B] bg-[#FBF0DC]",
    pill: "bg-[#FBF0DC] text-[#8A6114]",
  },
  partial: {
    label: "Partial outage",
    dot: "border-[#E8814A] bg-[#FBEAE3]",
    pill: "bg-[#FBEAE3] text-[#C2421F]",
  },
  major: {
    label: "Major outage",
    dot: "border-[#D14634] bg-[#FBE4E1]",
    pill: "bg-[#FBE4E1] text-[#9E2E20]",
  },
  maintenance: {
    label: "Under maintenance",
    dot: "border-[#4A86C8] bg-[#E4EDF7]",
    pill: "bg-[#E4EDF7] text-[#2B5C9B]",
  },
  delayed: {
    label: "Status delayed",
    dot: "border-[#B4AC9C] bg-[#EFEBE1]",
    pill: "bg-[#EFEBE1] text-[#6E6656]",
  },
};

// ─── SERVICE GROUPING ────────────────────────────────────────────────────────
// The API returns a flat component list; the design groups it. Matching is by
// name, and anything the API returns that isn't listed here still shows up,
// under "Other services" — so a new backend component can never be silently
// dropped from the page.
const SERVICE_GROUPS: { group: string; components: string[] }[] = [
  {
    group: "Access & apps",
    components: ["Website", "Sign-in & account", "Web app", "iOS app", "Android app"],
  },
  {
    group: "Calling & communications",
    components: ["Inbound calling", "Outbound calling", "Messaging", "Video", "AI Receptionist"],
  },
  {
    group: "Numbers & subscription",
    components: ["Number search & provisioning", "Billing & subscriptions"],
  },
];

const REGIONS = ["All regions", "United States", "United Kingdom", "Canada"];

// ─── SAMPLE DATA (preview only — USE_SAMPLE_DATA) ────────────────────────────
// 90-day history needs an endpoint returning, per service:
//   { name: string; uptime: number; days: StatusKey[] }   // days.length === 90
const SAMPLE_HISTORY: { name: string; uptime: string; days: StatusKey[] }[] = [
  "Calling",
  "Messaging",
  "Video",
  "AI Receptionist",
  "Number provisioning",
  "Sign-in & account",
].map((name, i) => ({
  name,
  uptime: ["99.98", "99.95", "99.90", "99.97", "99.99", "99.96"][i] + "%",
  days: Array.from({ length: 90 }, (_, d) =>
    (i === 0 && d === 62) || (i === 1 && d === 61) || (i === 2 && (d === 34 || d === 74)) || (i === 3 && d === 1) || (i === 4 && d === 45)
      ? ("degraded" as StatusKey)
      : ("operational" as StatusKey)
  ),
}));

// Incident history needs: { id, title, resolvedAt, duration, scope, month }[]
const SAMPLE_INCIDENTS = [
  {
    month: "August 2026",
    items: [
      {
        title: "Messaging — delayed delivery in the United Kingdom",
        date: "Aug 21, 2026",
        duration: "1h 12m",
        scope: "Messaging · United Kingdom",
      },
      {
        title: "Web app — intermittent sign-in errors",
        date: "Aug 9, 2026",
        duration: "34m",
        scope: "Sign-in & account · All regions",
      },
    ],
  },
  { month: "July 2026", items: [] },
];

// Scheduled maintenance needs: { title, window, regions, impact, body }[]
const SAMPLE_MAINTENANCE = [
  {
    title: "Number provisioning — planned upgrade",
    window: "Sep 6, 2:00 AM → Sep 6, 4:00 AM",
    regions: "United States, Canada",
    impact: "Possible brief interruption",
    body: "New number search and provisioning may be briefly unavailable during this window. Existing numbers, calling, and messaging are not expected to be affected.",
  },
];

const SUBSCRIBE_SERVICES = [
  "Calling",
  "Messaging",
  "Video",
  "AI Receptionist",
  "Numbers & billing",
  "Apps & sign-in",
];

// ─── SMALL PARTS ─────────────────────────────────────────────────────────────
function StatusPill({ status }: { status: StatusKey }) {
  const meta = STATUS_META[status];
  return (
    <span
      className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-[12.5px] font-semibold ${meta.pill}`}
    >
      <FiCheckCircle className="text-[13px]" aria-hidden />
      {meta.label}
    </span>
  );
}

// 90 thin bars. Rendered as a list with an accessible summary rather than a
// canvas, so the uptime figure is still available to screen readers.
function UptimeBars({ days, dense = false }: { days: StatusKey[]; dense?: boolean }) {
  return (
    <div
      className={`flex items-stretch gap-[2px] ${dense ? "h-3.5 w-[170px]" : "h-8 w-full"}`}
      aria-hidden
    >
      {days.map((d, i) => (
        <span
          key={i}
          className={`flex-1 rounded-[1px] ${
            d === "operational"
              ? dense
                ? "bg-[#BEDDCF]"
                : "bg-[#1E7A5A]"
              : d === "degraded"
                ? "bg-[#C98A1E]"
                : d === "delayed"
                  ? "bg-[#DED8CB]"
                  : "bg-[#D14634]"
          }`}
        />
      ))}
    </div>
  );
}

function SectionHeading({ children, aside }: { children: React.ReactNode; aside?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <h2 className="text-[19px] font-bold text-[#0E2A21]">{children}</h2>
      {aside}
    </div>
  );
}

function EmptyState({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-[#E4DED0] bg-white px-5 py-5">
      <FiInfo className="mt-0.5 shrink-0 text-[#8C8271]" aria-hidden />
      <p className="text-[13.5px] leading-6 text-[#5C6660]">{children}</p>
    </div>
  );
}

const cardBase = "rounded-xl border border-[#E4DED0] bg-white";

// ─── PAGE ────────────────────────────────────────────────────────────────────
export default function StatusPage() {
  const [status, setStatus] = useState<PublicStatus | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [region, setRegion] = useState(REGIONS[0]);
  const [clock, setClock] = useState<"Local" | "UTC">("Local");
  const [collapsed, setCollapsed] = useState<Record<string, boolean>>({});
  const [incidentRange, setIncidentRange] = useState("Last 30 days");
  const [channel, setChannel] = useState("Email");

  useEffect(() => {
    let live = true;
    getPublicStatus()
      .then((data) => {
        if (live) setStatus(data);
      })
      .catch((err) => {
        if (live) setError(err instanceof ApiError ? err.message : "Could not load service status");
      });
    return () => {
      live = false;
    };
  }, []);

  // Map the flat component list into the design's groups. Any component the
  // API reports that isn't in SERVICE_GROUPS falls through to "Other
  // services" so nothing is hidden.
  const groups = useMemo(() => {
    const byName = new Map<string, StatusKey>();
    status?.components.forEach((c) => byName.set(c.name, c.status as StatusKey));

    const known = new Set(SERVICE_GROUPS.flatMap((g) => g.components));
    const extra = (status?.components ?? [])
      .filter((c) => !known.has(c.name))
      .map((c) => c.name);

    const built = SERVICE_GROUPS.map((g) => ({
      group: g.group,
      rows: g.components.map((name) => ({
        name,
        // Not reported => "delayed", never "operational". The legend in the
        // design is explicit about this.
        status: byName.get(name) ?? ("delayed" as StatusKey),
      })),
    }));

    if (extra.length) {
      built.push({
        group: "Other services",
        rows: extra.map((name) => ({ name, status: byName.get(name) as StatusKey })),
      });
    }
    return built;
  }, [status]);

  function groupStatus(rows: { status: StatusKey }[]): StatusKey {
    const order: StatusKey[] = ["major", "partial", "degraded", "maintenance", "delayed", "operational"];
    return order.find((s) => rows.some((r) => r.status === s)) ?? "operational";
  }

  const overallKey: StatusKey = error
    ? "delayed"
    : status
      ? (status.overall as StatusKey)
      : "delayed";

  const overallLine = error
    ? "Service status is temporarily unavailable."
    : !status
      ? "Checking Zoiko Local service status…"
      : status.overall === "operational"
        ? "All Zoiko Local systems are operational."
        : "Some Zoiko Local systems are degraded.";

  const history = USE_SAMPLE_DATA ? SAMPLE_HISTORY : [];
  const maintenance = USE_SAMPLE_DATA ? SAMPLE_MAINTENANCE : [];
  const incidents = USE_SAMPLE_DATA ? SAMPLE_INCIDENTS : [];

  return (
    <main className="min-h-screen bg-[#F6F2EC] py-10">
      <div className="mx-auto max-w-5xl px-5">
        {/* ═══ OVERALL BANNER ═══ */}
        <div
          className={`overflow-hidden rounded-xl border border-[#E4DED0] bg-white border-l-[5px] ${
            overallKey === "operational"
              ? "border-l-[#0E5C4E]"
              : overallKey === "delayed"
                ? "border-l-[#B4AC9C]"
                : "border-l-[#E0A93B]"
          }`}
        >
          <div className="flex flex-col gap-5 p-6 md:flex-row md:items-start md:justify-between">
            <div className="flex items-start gap-4">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl ${
                  STATUS_META[overallKey].pill
                }`}
              >
                <FiCheckCircle aria-hidden />
              </span>
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8C8271]">
                  Zoiko Local Status
                </p>
                <h1 className="mt-1.5 text-[27px] font-bold leading-tight text-[#0E2A21]">
                  Zoiko Local Service Status
                </h1>
                <p
                  className={`mt-2 text-[16px] font-semibold ${
                    overallKey === "operational" ? "text-[#0E5C4E]" : "text-[#8A6114]"
                  }`}
                >
                  {overallLine}
                </p>
                {error && (
                  <p className="mt-1.5 text-[12.5px] text-[#9E2E20]" role="alert">
                    {error}
                  </p>
                )}
              </div>
            </div>

            <div className="flex flex-col items-start gap-3 md:items-end">
              <p className="flex items-center gap-2 text-[12.5px] text-[#5C6660]">
                <span
                  className={`h-2 w-2 rounded-full ${status ? "bg-[#3FA37F]" : "bg-[#B4AC9C]"}`}
                />
                Updated <span className="font-medium text-[#0E2A21]">{status ? "just now" : "—"}</span>
              </p>

              <div className="flex items-center gap-2">
                <label htmlFor="region" className="sr-only">
                  Region
                </label>
                <div className="relative">
                  <FiGlobe
                    className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#8C8271]"
                    aria-hidden
                  />
                  <select
                    id="region"
                    value={region}
                    onChange={(e) => setRegion(e.target.value)}
                    className="h-10 appearance-none rounded-lg border border-[#E4DED0] bg-white pl-10 pr-9 text-[13.5px] text-[#0E2A21] focus:border-[#0E5C4E] focus:outline-none"
                  >
                    {REGIONS.map((r) => (
                      <option key={r}>{r}</option>
                    ))}
                  </select>
                  <FiChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#8C8271]"
                    aria-hidden
                  />
                </div>

                <div
                  className="flex h-10 overflow-hidden rounded-lg border border-[#E4DED0]"
                  role="group"
                  aria-label="Time zone"
                >
                  {(["Local", "UTC"] as const).map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setClock(c)}
                      aria-pressed={clock === c}
                      className={`px-4 text-[13px] font-semibold transition ${
                        clock === c ? "bg-[#0E3A36] text-white" : "bg-white text-[#5C6660]"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ ACTIVE INCIDENTS ═══ */}
        <div className="mt-9">
          <SectionHeading>Active incidents</SectionHeading>
          {overallKey === "operational" && status ? (
            <div className={`${cardBase} flex items-center gap-3 px-5 py-4`}>
              <FiCheck className="shrink-0 text-[#0E5C4E]" strokeWidth={3} aria-hidden />
              <p className="text-[13.5px] text-[#5C6660]">No active incidents.</p>
            </div>
          ) : (
            <EmptyState>
              Active-incident detail requires an incidents endpoint. The banner above reflects the
              live overall state from <code className="font-mono text-[12px]">/ops/status</code>.
            </EmptyState>
          )}
        </div>

        {/* ═══ SERVICES ═══ */}
        <div className="mt-9">
          <SectionHeading
            aside={
              <span className="text-[12.5px] text-[#8C8271]">
                {region === "All regions" ? "Showing all regions" : `Showing ${region}`}
              </span>
            }
          >
            Services
          </SectionHeading>

          <div className="grid gap-5 lg:grid-cols-[1fr_260px]">
            <div className="space-y-4">
              {groups.map((g) => {
                const gStatus = groupStatus(g.rows);
                const isOpen = !collapsed[g.group];
                return (
                  <div key={g.group} className={`${cardBase} overflow-hidden`}>
                    <button
                      type="button"
                      onClick={() =>
                        setCollapsed((prev) => ({ ...prev, [g.group]: !prev[g.group] }))
                      }
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="text-[15px] font-bold text-[#0E2A21]">{g.group}</span>
                      <span className="flex items-center gap-3">
                        <StatusPill status={gStatus} />
                        <FiChevronDown
                          className={`text-[#8C8271] transition ${isOpen ? "rotate-180" : ""}`}
                          aria-hidden
                        />
                      </span>
                    </button>

                    {isOpen && (
                      <ul className="border-t border-[#EDE7DB]">
                        {g.rows.map((row) => (
                          <li
                            key={row.name}
                            className="flex items-center justify-between gap-4 border-b border-[#EDE7DB] px-5 py-3.5 last:border-b-0"
                          >
                            <span className="text-[13.5px] text-[#0E2A21]">{row.name}</span>
                            <span className="flex items-center gap-4">
                              {USE_SAMPLE_DATA && (
                                <UptimeBars
                                  dense
                                  days={Array.from({ length: 40 }, () => "operational")}
                                />
                              )}
                              <StatusPill status={row.status} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Legend */}
            <aside className={`${cardBase} h-fit p-5`}>
              <h3 className="text-[14px] font-bold text-[#0E2A21]">Status legend</h3>
              <ul className="mt-4 space-y-3">
                {(Object.keys(STATUS_META) as StatusKey[]).map((k) => (
                  <li key={k} className="flex items-center gap-3">
                    <span
                      className={`h-3.5 w-3.5 shrink-0 rounded-[3px] border-[1.5px] ${STATUS_META[k].dot}`}
                    />
                    <span className="text-[13px] text-[#3F4B45]">{STATUS_META[k].label}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 border-t border-[#EDE7DB] pt-4 text-[12px] leading-5 text-[#8C8271]">
                Region defaults to all regions. Selecting a region never hides a global incident.
                Unverified components show &ldquo;Status delayed,&rdquo; not &ldquo;Operational.&rdquo;
              </p>
            </aside>
          </div>
        </div>

        {/* ═══ SCHEDULED MAINTENANCE ═══ */}
        <div className="mt-12">
          <SectionHeading>Scheduled maintenance</SectionHeading>
          {maintenance.length === 0 ? (
            <EmptyState>
              No maintenance windows to show. This section needs an endpoint returning{" "}
              <code className="font-mono text-[12px]">
                {"{ title, window, regions, impact, body }[]"}
              </code>
              .
            </EmptyState>
          ) : (
            <div className="space-y-4">
              {maintenance.map((m) => (
                <div key={m.title} className={`${cardBase} p-5`}>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#E4EDF7] px-3 py-1.5 text-[12px] font-semibold text-[#2B5C9B]">
                      <FiTool className="text-[12px]" aria-hidden /> Scheduled
                    </span>
                    <h3 className="text-[15px] font-bold text-[#0E2A21]">{m.title}</h3>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-[12.5px] text-[#5C6660]">
                    <span className="flex items-center gap-1.5">
                      <FiCalendar aria-hidden /> {m.window}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <FiGlobe aria-hidden /> {m.regions}
                    </span>
                    <span className="rounded-full bg-[#E4EDF7] px-2.5 py-1 text-[11.5px] font-medium text-[#2B5C9B]">
                      {m.impact}
                    </span>
                  </div>

                  <p className="mt-4 text-[13.5px] leading-6 text-[#3F4B45]">{m.body}</p>

                  <button
                    type="button"
                    className="mt-5 h-10 rounded-lg border border-[#E4DED0] px-4 text-[13px] font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
                  >
                    View maintenance details
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ═══ 90-DAY HISTORY ═══ */}
        <div className="mt-12">
          <SectionHeading
            aside={
              <Link href="#" className="text-[12.5px] font-semibold text-[#0E5C4E] hover:underline">
                How uptime is measured
              </Link>
            }
          >
            90-day service history
          </SectionHeading>

          {history.length === 0 ? (
            <EmptyState>
              Uptime history is not published yet. This section needs an endpoint returning, per
              service,{" "}
              <code className="font-mono text-[12px]">
                {"{ name, uptime, days: StatusKey[90] }"}
              </code>
              . It is deliberately left empty rather than showing sample percentages — the
              disclaimer below states these figures come from recorded service states, so
              placeholder numbers would be a false claim to customers.
            </EmptyState>
          ) : (
            <div className={`${cardBase} overflow-hidden`}>
              {history.map((h) => (
                <div key={h.name} className="border-b border-[#EDE7DB] p-5 last:border-b-0">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-[14px] font-semibold text-[#0E2A21]">{h.name}</h3>
                    <span className="text-[13px] font-bold text-[#0E5C4E]">{h.uptime}</span>
                  </div>
                  <div className="mt-3">
                    <UptimeBars days={h.days} />
                  </div>
                  <div className="mt-2 flex justify-between text-[11.5px] text-[#8C8271]">
                    <span>90 days ago</span>
                    <span>Today</span>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-3 border-t border-[#EDE7DB] bg-white p-5">
                <FiInfo className="mt-0.5 shrink-0 text-[#8C8271]" aria-hidden />
                <p className="text-[12px] leading-5 text-[#8C8271]">
                  Historical availability is calculated from customer-facing service states recorded
                  by the status system. Contractual service levels, where applicable, are governed by
                  your agreement.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* ═══ INCIDENT HISTORY ═══ */}
        <div className="mt-12">
          <SectionHeading>Incident history</SectionHeading>

          <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label="Incident range">
            {["Last 30 days", "Last 90 days", "2026"].map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => setIncidentRange(r)}
                aria-pressed={incidentRange === r}
                className={`h-9 rounded-full px-4 text-[13px] font-semibold transition ${
                  incidentRange === r
                    ? "bg-[#0E3A36] text-white"
                    : "border border-[#E4DED0] bg-white text-[#5C6660] hover:border-[#0E2A21]"
                }`}
              >
                {r}
              </button>
            ))}
          </div>

          {incidents.length === 0 ? (
            <EmptyState>
              Incident history is not published yet. This section needs an endpoint returning{" "}
              <code className="font-mono text-[12px]">
                {"{ title, date, duration, scope, resolved }[]"}
              </code>
              , grouped by month.
            </EmptyState>
          ) : (
            <div className="space-y-6">
              {incidents.map((month) => (
                <div key={month.month}>
                  <h3 className="mb-3 text-[12.5px] font-semibold text-[#8C8271]">{month.month}</h3>
                  {month.items.length === 0 ? (
                    <p className="text-[13.5px] text-[#5C6660]">No incidents reported this month.</p>
                  ) : (
                    <div className="space-y-3">
                      {month.items.map((inc) => (
                        <div key={inc.title} className={`${cardBase} p-5`}>
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="rounded-full bg-[#E4EFE9] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#0E5C4E]">
                              Resolved
                            </span>
                            <h4 className="text-[14.5px] font-bold text-[#0E2A21]">{inc.title}</h4>
                          </div>
                          <div className="mt-2.5 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[12.5px] text-[#5C6660]">
                            <span className="flex items-center gap-1.5">
                              <FiCalendar aria-hidden /> {inc.date}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <FiClock aria-hidden /> Duration {inc.duration}
                            </span>
                            <span>{inc.scope}</span>
                          </div>
                          <Link
                            href="#"
                            className="mt-3 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#0E5C4E] hover:underline"
                          >
                            <FiFileText aria-hidden /> Read incident review
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <button
                type="button"
                className="h-10 rounded-lg border border-[#E4DED0] bg-white px-4 text-[13px] font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
              >
                View all incident history
              </button>
            </div>
          )}
        </div>

        {/* ═══ SUBSCRIBE ═══ */}
        <div className={`mt-12 ${cardBase} p-6 md:p-7`}>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-[17px] font-bold text-[#0E2A21]">Get service updates</h2>
              <p className="mt-2 max-w-md text-[13px] leading-6 text-[#5C6660]">
                Choose the Zoiko Local services and regions you want to hear about. You can change or
                unsubscribe at any time.
              </p>

              <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Notification channel">
                {[
                  { key: "Email", icon: <FiMail /> },
                  { key: "SMS", icon: <FiMessageSquare /> },
                  { key: "RSS / Atom", icon: <FiRss /> },
                  { key: "Webhook", icon: <FiZap /> },
                ].map((c) => (
                  <button
                    key={c.key}
                    type="button"
                    onClick={() => setChannel(c.key)}
                    aria-pressed={channel === c.key}
                    className={`inline-flex h-10 items-center gap-2 rounded-lg border px-3.5 text-[13px] font-semibold transition ${
                      channel === c.key
                        ? "border-[#0E5C4E] bg-[#E4EFE9] text-[#0E5C4E]"
                        : "border-[#E4DED0] bg-white text-[#5C6660] hover:border-[#0E2A21]"
                    }`}
                  >
                    {c.icon}
                    {c.key}
                  </button>
                ))}
              </div>

              <div className="mt-5">
                <label htmlFor="notify-email" className="block text-[12.5px] font-semibold text-[#0E2A21]">
                  Email address
                </label>
                <input
                  id="notify-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  className="mt-2 h-11 w-full rounded-lg border border-[#E4DED0] bg-white px-4 text-[13.5px] text-[#0E2A21] placeholder:text-[#A79C86] focus:border-[#0E5C4E] focus:outline-none focus:ring-2 focus:ring-[#0E5C4E]/20"
                />
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <button
                  type="button"
                  className="h-11 rounded-lg bg-[#0E3A36] px-5 text-[13.5px] font-semibold text-white transition hover:bg-[#0B302D]"
                >
                  Subscribe
                </button>
                <button
                  type="button"
                  className="h-11 rounded-lg border border-[#E4DED0] bg-white px-5 text-[13.5px] font-semibold text-[#0E2A21] transition hover:border-[#0E2A21]"
                >
                  Manage an existing subscription
                </button>
              </div>

              <p className="mt-4 flex items-start gap-2 text-[12px] leading-5 text-[#8C8271]">
                <FiLock className="mt-0.5 shrink-0" aria-hidden />
                We use your contact details only to deliver the status notifications you request,
                subject to our{" "}
                <Link href="#" className="font-semibold text-[#0E5C4E] hover:underline">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="rounded-xl bg-[#F6F2EC] p-5">
              <fieldset>
                <legend className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8C8271]">
                  Services
                </legend>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {SUBSCRIBE_SERVICES.map((s) => (
                    <label key={s} className="flex items-center gap-2.5 text-[13px] text-[#3F4B45]">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 shrink-0 accent-[#0E5C4E]"
                      />
                      {s}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-5">
                <legend className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8C8271]">
                  Regions
                </legend>
                <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                  {REGIONS.map((r, i) => (
                    <label key={r} className="flex items-center gap-2.5 text-[13px] text-[#3F4B45]">
                      <input
                        type="checkbox"
                        defaultChecked={i === 0}
                        className="h-4 w-4 shrink-0 accent-[#0E5C4E]"
                      />
                      {r}
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-5">
                <legend className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#8C8271]">
                  Notify me about
                </legend>
                <div className="mt-3 space-y-2.5">
                  {["Incidents", "Scheduled maintenance"].map((n) => (
                    <label key={n} className="flex items-center gap-2.5 text-[13px] text-[#3F4B45]">
                      <input
                        type="checkbox"
                        defaultChecked
                        className="h-4 w-4 shrink-0 accent-[#0E5C4E]"
                      />
                      {n}
                    </label>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </div>

        {/* ═══ CONTACT SUPPORT ═══ */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#E4DED0] bg-[#EDE7DB] p-6 md:flex-row md:items-center">
          <div className="flex items-start gap-3">
            <FiAlertCircle className="mt-0.5 shrink-0 text-[#8C8271]" aria-hidden />
            <div>
              <h3 className="text-[14.5px] font-bold text-[#0E2A21]">
                Experiencing a problem not shown here?
              </h3>
              <p className="mt-1 text-[13px] leading-6 text-[#5C6660]">
                If your issue is not reflected on this page, contact Zoiko Local Support so we can
                investigate.
              </p>
            </div>
          </div>
          <button
            type="button"
            className="h-11 shrink-0 rounded-lg border border-[#0E2A21] bg-white px-5 text-[13.5px] font-semibold text-[#0E2A21] transition hover:bg-white/60"
          >
            Contact support
          </button>
        </div>
      </div>
    </main>
  );
}