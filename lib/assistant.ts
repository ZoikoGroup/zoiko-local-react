import { ApiError } from "./api";

const API_ROOT = `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000"}/api/v1/assistant`;

export type QuickStartAction = {
  intent_id: string;
  title: string;
  description: string;
};

export type Bootstrap = {
  enabled: boolean;
  assistant_name: string;
  ai_disclosure: string;
  safety_notice: string;
  content_version: string;
  supported_locales: string[];
  default_locale: string;
  privacy_url: string;
  actions: QuickStartAction[];
};

export type AssistantSession = {
  session_id: string;
  session_token: string;
  expires_at: string;
  locale_used: string;
  locale_fallback: boolean;
};

export type Claim = {
  text: string;
  source_slugs: string[];
};

export type SourceCard = {
  slug: string;
  title: string;
  publisher: string;
  canonical_url: string;
  authority_class: string;
  content_version: string;
  reviewed_at: string | null;
};

export type AssistantAction = {
  destination_key: string;
  label: string;
  url: string;
  style: string;
};

export type Suggestion = {
  label: string;
  value: string;
  kind: string;
};

export type AssistantMessageResponse = {
  message_id: string;
  client_message_id: string | null;
  response_type:
    | "guidance"
    | "answer"
    | "safety_urgent"
    | "sensitive_blocked"
    | "unknown";
  intent_id: string | null;
  text: string;
  claims: Claim[];
  sources: SourceCard[];
  actions: AssistantAction[];
  suggestions: Suggestion[];
  flow_step: "country" | "customer_type" | "summary" | null;
  verifiability_status: "verified" | "qualified" | "none";
  locale_used: string;
  content_version: string;
};

export type MessageSelection = {
  country?: string;
  customer_type?: string;
};

export type MessageRequest = {
  intent_id?: string;
  text?: string;
  selection?: MessageSelection;
  client_message_id?: string;
};

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  let res: Response;
  try {
    res = await fetch(`${API_ROOT}${path}`, init);
  } catch {
    throw new ApiError("Could not reach the assistant service");
  }
  if (!res.ok) {
    let detail = "";
    try {
      const body = (await res.json()) as { detail?: string };
      detail = body.detail ?? "";
    } catch {
      detail = "";
    }
    throw new ApiError(detail || `Assistant service error (${res.status})`, res.status);
  }
  return (await res.json()) as T;
}

export function fetchBootstrap(): Promise<Bootstrap> {
  return request<Bootstrap>("/bootstrap");
}

export function createAssistantSession(pageContext?: string): Promise<AssistantSession> {
  return request<AssistantSession>("/sessions", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      page_context: pageContext?.slice(0, 200),
      locale: "en-US",
    }),
  });
}

export function sendAssistantMessage(
  session: AssistantSession,
  body: MessageRequest,
): Promise<AssistantMessageResponse> {
  return request<AssistantMessageResponse>("/messages", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Assistant-Session": session.session_id,
      "X-Assistant-Token": session.session_token,
    },
    body: JSON.stringify(body),
  });
}

export function endAssistantSession(
  session: AssistantSession,
): Promise<{ ended: boolean; session_id: string }> {
  return request<{ ended: boolean; session_id: string }>("/sessions/end", {
    method: "POST",
    headers: {
      "X-Assistant-Session": session.session_id,
      "X-Assistant-Token": session.session_token,
    },
  });
}
