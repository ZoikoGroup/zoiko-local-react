// ─── API CLIENT (STUB — no backend yet) ─────────────────────────────────────
// TODO: Replace BASE_URL with your real API once the backend exists.
// e.g. const BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";

// ─── TYPES ───────────────────────────────────────────────────────────────────

export type Subscription = {
  plan_code: string;
  billing_period: "monthly" | "annual";
  trial_ends_at: string | null;
  status: "active" | "trialing" | "canceled" | "past_due";
};

export type PublicStatus = {
  overall: string;
  components: { name: string; status: string }[];
};

// ─── ERROR ───────────────────────────────────────────────────────────────────

export class ApiError extends Error {
  status: number;
  constructor(message: string, status: number = 0) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

// ─── STUBS ───────────────────────────────────────────────────────────────────
// These return hardcoded data so the site builds and renders.
// Replace with real fetch() calls when the backend is ready.

export async function getSubscription(_token: string): Promise<Subscription> {
  // TODO: Replace with real API call
  // const res = await fetch(`${BASE_URL}/api/subscription`, {
  //   headers: { Authorization: `Bearer ${_token}` },
  // });
  // if (!res.ok) throw new ApiError("Failed to fetch subscription", res.status);
  // return res.json();

  return {
    plan_code: "Starter",
    billing_period: "monthly",
    trial_ends_at: null,
    status: "active",
  };
}

export async function getPublicStatus(): Promise<PublicStatus> {
  // TODO: Replace with real API call
  // const res = await fetch(`${BASE_URL}/ops/status`);
  // if (!res.ok) throw new ApiError("Failed to fetch status", res.status);
  // return res.json();

  return {
    overall: "operational",
    components: [
      { name: "Website", status: "operational" },
      { name: "Sign-in & account", status: "operational" },
      { name: "Web app", status: "operational" },
      { name: "iOS app", status: "operational" },
      { name: "Android app", status: "operational" },
      { name: "Inbound calling", status: "operational" },
      { name: "Outbound calling", status: "operational" },
      { name: "Messaging", status: "operational" },
      { name: "Video", status: "operational" },
      { name: "AI Receptionist", status: "operational" },
      { name: "Number search & provisioning", status: "operational" },
      { name: "Billing & subscriptions", status: "operational" },
    ],
  };
}