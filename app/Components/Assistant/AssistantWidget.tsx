"use client";

import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";
import {
  FiAlertTriangle,
  FiArrowRight,
  FiExternalLink,
  FiLock,
  FiLogOut,
  FiMessageSquare,
  FiSend,
  FiTrash2,
  FiX,
} from "react-icons/fi";
import Image from "next/image";
import { ApiError } from "@/lib/api";
import {
  createAssistantSession,
  endAssistantSession,
  fetchBootstrap,
  sendAssistantMessage,
  type AssistantMessageResponse,
  type AssistantSession,
  type Bootstrap,
  type MessageRequest,
  type Suggestion,
} from "@/lib/assistant";

type Turn =
  | { role: "user"; text: string }
  | { role: "assistant"; response: AssistantMessageResponse };

const MAX_TEXT = 2000;

const FALLBACK_BOOTSTRAP: Bootstrap = {
  enabled: true,
  assistant_name: "Zoiko Local Assistant",
  ai_disclosure:
    "This assistant is automated and uses approved Zoiko Local data. It is not a live agent and cannot place calls, change your account, take payments, or confirm live number availability.",
  safety_notice:
    "Zoiko Local numbers are not a replacement for emergency calling. In an emergency, contact your local emergency number (such as 911, 112, or 999) directly.",
  content_version: "offline-fallback",
  supported_locales: ["en-US"],
  default_locale: "en-US",
  privacy_url: "/zoiko-local-privacy-policy",
  actions: [
    {
      intent_id: "NUMBER_DISCOVERY",
      title: "Find a local number",
      description: "Explore countries, number types and verification before buying.",
    },
    {
      intent_id: "RECEPTIONIST_OVERVIEW",
      title: "Explore the AI Receptionist",
      description: "What the AI Receptionist can answer, route and hand off.",
    },
    {
      intent_id: "CALLING_OVERVIEW",
      title: "How calling works",
      description: "Cloud calling from your browser or app on a local number.",
    },
    {
      intent_id: "PLANS_OVERVIEW",
      title: "Plans & pricing",
      description: "Current approved plan prices and what affects your total.",
    },
    {
      intent_id: "ACTIVATION_GUIDE",
      title: "Get started",
      description: "From free account to an activated number and first call.",
    },
    {
      intent_id: "CONTACT_HANDOFF",
      title: "Talk to a person",
      description: "Route to the sales or support team for anything human.",
    },
  ],
};

function newClientMessageId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function describeError(err: unknown): string {
  if (err instanceof ApiError) {
    if (err.status === 401) {
      return "This chat session ended. Send your message again to start a fresh chat.";
    }
    if (err.status === 429) {
      return "You're sending messages a bit too quickly - please wait a moment and try again.";
    }
    if (err.status === 503) {
      return "The assistant is temporarily unavailable. Please try again later.";
    }
  }
  return "Something went wrong reaching the assistant. Please check your connection and try again.";
}

function AssistantBubble({ response }: { response: AssistantMessageResponse }) {
  const isUrgent = response.response_type === "safety_urgent";
  const isBlocked = response.response_type === "sensitive_blocked";

  const bubbleClass = isUrgent
    ? "w-full rounded-2xl rounded-bl-md border-2 border-[#C2421F] bg-[#FDF1EE] px-4 py-3 dark:border-red-800 dark:bg-red-950"
    : isBlocked
      ? "w-full rounded-2xl rounded-bl-md border border-[#B7791F] bg-[#FBF3E4] px-4 py-3 dark:border-amber-700 dark:bg-amber-950"
      : "w-full rounded-2xl rounded-bl-md bg-[#F7F3ED] px-4 py-3 dark:bg-slate-800";

  return (
    <div className="flex w-full flex-col items-start gap-2">
      <div className={bubbleClass}>
        {isUrgent && (
          <p
            role="alert"
            className="mb-1.5 flex items-center gap-2 text-sm font-bold text-[#C2421F] dark:text-red-300"
          >
            <FiAlertTriangle size={16} aria-hidden="true" />
            Emergency safety notice
          </p>
        )}
        <p
          className={`whitespace-pre-line text-sm leading-6 ${
            isUrgent
              ? "font-semibold text-slate-900 dark:text-red-50"
              : "text-slate-800 dark:text-slate-100"
          }`}
        >
          {response.text}
        </p>
        {response.sources.length > 0 && (
          <div className="mt-3 border-t border-[#E5DDD3] pt-2 dark:border-slate-700">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
              Sources
            </p>
            <ul className="mt-1 space-y-1">
              {response.sources.map((source) => (
                <li key={source.slug}>
                  <a
                    href={source.canonical_url}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0D5C54] underline underline-offset-2 transition-colors hover:text-[#143A36] dark:text-teal-300"
                  >
                    {source.title}
                    <FiExternalLink size={12} aria-hidden="true" />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {response.actions.length > 0 && (
        <div className="flex w-full flex-wrap gap-2">
          {response.actions.map((action) => (
            <a
              key={action.destination_key}
              href={action.url}
              target="_blank"
              rel="noopener"
              className={
                action.style === "primary"
                  ? "inline-flex min-h-[44px] items-center rounded-lg bg-[#0D5C54] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#143A36] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C54] dark:bg-teal-300 dark:text-slate-900 dark:hover:bg-teal-200"
                  : "inline-flex min-h-[44px] items-center rounded-lg border border-[#0D5C54] px-4 py-2 text-sm font-semibold text-[#0D5C54] transition-colors hover:bg-[#EEF4F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C54] dark:border-teal-300 dark:text-teal-300 dark:hover:bg-slate-800"
              }
            >
              {action.label}
              <FiExternalLink size={12} className="ml-1.5" aria-hidden="true" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function AssistantWidget() {
  const [open, setOpen] = useState(false);
  const [bootstrap, setBootstrap] = useState<Bootstrap | null>(null);
  const [session, setSession] = useState<AssistantSession | null>(null);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const launcherRef = useRef<HTMLButtonElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const transcriptRef = useRef<HTMLDivElement>(null);
  const lastPayloadRef = useRef<MessageRequest | null>(null);

  const panelId = useId();

  useEffect(() => {
    let cancelled = false;
    fetchBootstrap()
      .then((payload) => {
        if (!cancelled) setBootstrap(payload);
      })
      .catch(() => {
        if (!cancelled) setBootstrap(FALLBACK_BOOTSTRAP);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    setPrivacyOpen(false);
    launcherRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, close]);

  useEffect(() => {
    if (open) textareaRef.current?.focus();
  }, [open]);

  useEffect(() => {
    const el = transcriptRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [turns, sending]);

  const runSend = useCallback(
    async (body: MessageRequest) => {
      if (sending) return;
      setSending(true);
      setError(null);
      lastPayloadRef.current = body;
      try {
        let activeSession = session;
        if (activeSession === null) {
          activeSession = await createAssistantSession(
            typeof window === "undefined" ? undefined : window.location.pathname,
          );
          setSession(activeSession);
        }
        try {
          const response = await sendAssistantMessage(activeSession, {
            ...body,
            client_message_id: newClientMessageId(),
          });
          setTurns((prev) => [...prev, { role: "assistant", response }]);
        } catch (err) {
          if (err instanceof ApiError && err.status === 401) {
            activeSession = await createAssistantSession(
              typeof window === "undefined" ? undefined : window.location.pathname,
            );
            setSession(activeSession);
            const response = await sendAssistantMessage(activeSession, {
              ...body,
              client_message_id: newClientMessageId(),
            });
            setTurns((prev) => [...prev, { role: "assistant", response }]);
          } else {
            throw err;
          }
        }
      } catch (err) {
        setError(describeError(err));
      } finally {
        setSending(false);
      }
    },
    [sending, session],
  );

  const sendWithUserTurn = useCallback(
    (label: string, body: MessageRequest) => {
      setPrivacyOpen(false);
      setTurns((prev) => [...prev, { role: "user", text: label }]);
      void runSend(body);
    },
    [runSend],
  );

  const handleSuggestion = (suggestion: Suggestion) => {
    if (suggestion.kind === "country") {
      sendWithUserTurn(suggestion.label, { selection: { country: suggestion.value } });
    } else if (suggestion.kind === "customer_type") {
      sendWithUserTurn(suggestion.label, { selection: { customer_type: suggestion.value } });
    } else {
      sendWithUserTurn(suggestion.label, { intent_id: suggestion.value });
    }
  };

  const submitText = () => {
    const text = input.trim();
    if (text === "" || sending) return;
    setInput("");
    sendWithUserTurn(text, { text });
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    submitText();
  };

  const handleComposerKeyDown = (event: ReactKeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submitText();
    }
  };

  const clearView = () => {
    setTurns([]);
    setError(null);
    setPrivacyOpen(false);
  };

  const endChat = () => {
    setPrivacyOpen(false);
    if (session !== null) {
      const current = session;
      void endAssistantSession(current).catch(() => undefined);
    }
    setSession(null);
    setTurns([]);
    setError(null);
  };

  if (bootstrap === null || !bootstrap.enabled) {
    return null;
  }

  const showQuickStarts = turns.length === 0 && !sending;
  const lastTurn = turns.length > 0 ? turns[turns.length - 1] : null;
  const currentSuggestions =
    lastTurn !== null && lastTurn.role === "assistant" && !sending
      ? lastTurn.response.suggestions
      : [];

  return (
    <>
      <button
        ref={launcherRef}
        type="button"
        onClick={() => (open ? close() : setOpen(true))}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-controls={panelId}
        aria-label={
          open ? "Close Zoiko Local Assistant chat" : "Open Zoiko Local Assistant chat"
        }
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0D5C54] text-white shadow-lg transition-colors hover:bg-[#143A36] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C54] dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
      >
        <span className="relative flex h-full w-full items-center justify-center">
          <Image src="/zoiko-local-icon.svg" alt="" width={40} height={40} unoptimized className="h-10 w-10 rounded-xl bg-white p-1" />
          <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[#0D5C54] shadow">
            {open ? <FiX size={13} aria-hidden="true" /> : <FiMessageSquare size={12} aria-hidden="true" />}
          </span>
        </span>
      </button>

      {open && (
        <section
          id={panelId}
          role="dialog"
          aria-label="Zoiko Local Assistant"
          className="fixed bottom-24 right-5 z-50 flex max-h-[min(70vh,640px)] w-[min(400px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-[#E5DDD3] bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900"
        >
          <div className="flex items-start justify-between gap-2 bg-[#0D5C54] px-4 py-3 dark:bg-slate-800">
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                <Image src="/zoiko-local-icon.svg" alt="" width={28} height={28} unoptimized className="h-7 w-7 rounded-lg bg-white p-0.5" />
              </span>
              <div>
                <p className="text-sm font-bold text-white">{bootstrap.assistant_name}</p>
                <p className="text-[11px] leading-4 text-white/80">
                  Zoiko Local Assistant · answers cite approved sources
                </p>
              </div>
            </div>
            <div className="relative flex items-center gap-1">
              <button
                type="button"
                onClick={() => setPrivacyOpen((prev) => !prev)}
                aria-expanded={privacyOpen}
                aria-haspopup="menu"
                aria-label="Chat privacy options"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white/90 transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <FiLock size={16} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={close}
                aria-label="Close chat"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-white/90 transition-colors hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <FiX size={18} aria-hidden="true" />
              </button>
              {privacyOpen && (
                <div
                  role="menu"
                  aria-label="Chat privacy options"
                  className="absolute right-0 top-12 z-10 w-60 overflow-hidden rounded-lg border border-[#E5DDD3] bg-white py-1 shadow-xl dark:border-slate-700 dark:bg-slate-900"
                >
                  <button
                    role="menuitem"
                    type="button"
                    onClick={clearView}
                    className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm text-slate-700 transition-colors hover:bg-[#EEF4F2] dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <FiTrash2 size={14} aria-hidden="true" />
                    Clear chat from view
                  </button>
                  <button
                    role="menuitem"
                    type="button"
                    onClick={endChat}
                    className="flex w-full items-center gap-2 px-3 py-2.5 text-left text-sm text-slate-700 transition-colors hover:bg-[#EEF4F2] dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <FiLogOut size={14} aria-hidden="true" />
                    End session
                  </button>
                  <a
                    role="menuitem"
                    href={bootstrap.privacy_url}
                    target="_blank"
                    rel="noopener"
                    className="flex w-full items-center gap-2 px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-[#EEF4F2] dark:text-slate-200 dark:hover:bg-slate-800"
                  >
                    <FiExternalLink size={14} aria-hidden="true" />
                    Privacy policy
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  <p className="border-t border-[#E5DDD3] px-3 py-2 text-[11px] leading-4 text-slate-500 dark:border-slate-700 dark:text-slate-400">
                    The transcript lives only in this browser tab - nothing is saved to
                    your device.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div
            ref={transcriptRef}
            aria-live="polite"
            aria-label="Chat messages"
            className="flex-1 space-y-4 overflow-y-auto bg-[#FBF9F5] px-4 py-4 dark:bg-slate-950"
          >
            {showQuickStarts && (
              <div className="rounded-2xl bg-[#F7F3ED] p-4 dark:bg-slate-800">
                <p className="text-sm font-bold text-slate-900 dark:text-white">
                  Hi - I&apos;m the {bootstrap.assistant_name}.
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  Ask me about local phone numbers, calling, video, plans, or getting
                  started.
                </p>
                <p className="mt-2 text-[11px] leading-4 text-slate-500 dark:text-slate-400">
                  {bootstrap.ai_disclosure}
                </p>
              </div>
            )}
            {turns.map((turn, index) =>
              turn.role === "user" ? (
                <div key={`user-${index}`} className="flex justify-end">
                  <p className="max-w-[85%] whitespace-pre-line rounded-2xl rounded-br-md bg-[#0D5C54] px-4 py-2.5 text-sm leading-6 text-white dark:bg-slate-100 dark:text-slate-900">
                    {turn.text}
                  </p>
                </div>
              ) : (
                <AssistantBubble
                  key={turn.response.message_id}
                  response={turn.response}
                />
              ),
            )}
            {sending && (
              <div className="flex">
                <div
                  className="rounded-2xl rounded-bl-md bg-[#F7F3ED] px-4 py-3 dark:bg-slate-800"
                  aria-label="Assistant is replying"
                >
                  <span className="inline-flex items-center gap-1">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-slate-400" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-slate-400 [animation-delay:150ms]" />
                    <span className="h-2 w-2 animate-pulse rounded-full bg-slate-400 [animation-delay:300ms]" />
                  </span>
                </div>
              </div>
            )}
            {error !== null && (
              <div className="rounded-xl border border-[#C2421F]/30 bg-[#FDF1EE] px-4 py-3 text-sm text-[#8A2B14] dark:border-red-900 dark:bg-red-950 dark:text-red-200">
                <p>{error}</p>
                <button
                  type="button"
                  onClick={() => {
                    const payload = lastPayloadRef.current;
                    if (payload !== null) void runSend(payload);
                  }}
                  className="mt-2 font-semibold underline underline-offset-2"
                >
                  Try again
                </button>
              </div>
            )}
          </div>

          <div className="border-t border-[#E5DDD3] bg-white p-3 dark:border-slate-700 dark:bg-slate-900">
            {showQuickStarts && bootstrap.actions.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2" aria-label="Suggested questions">
                {bootstrap.actions.map((action) => (
                  <button
                    key={action.intent_id}
                    type="button"
                    title={action.description}
                    onClick={() =>
                      sendWithUserTurn(action.title, { intent_id: action.intent_id })
                    }
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-[#0D5C54]/40 px-3 py-1.5 text-xs font-semibold text-[#0D5C54] transition-colors hover:bg-[#EEF4F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C54] dark:border-teal-300/40 dark:text-teal-300 dark:hover:bg-slate-800"
                  >
                    <FiMessageSquare size={13} aria-hidden="true" />
                    {action.title}
                  </button>
                ))}
              </div>
            )}
            {currentSuggestions.length > 0 && (
              <div className="mb-2 flex flex-wrap gap-2" aria-label="Follow-up suggestions">
                {currentSuggestions.map((suggestion) => (
                  <button
                    key={`${suggestion.kind}-${suggestion.value}`}
                    type="button"
                    onClick={() => handleSuggestion(suggestion)}
                    className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-[#0D5C54]/40 px-3 py-1.5 text-xs font-semibold text-[#0D5C54] transition-colors hover:bg-[#EEF4F2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C54] dark:border-teal-300/40 dark:text-teal-300 dark:hover:bg-slate-800"
                  >
                    {suggestion.label}
                    <FiArrowRight size={13} aria-hidden="true" />
                  </button>
                ))}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="flex items-end gap-2">
                <label htmlFor="assistant-input" className="sr-only">
                  Message the Zoiko Local Assistant
                </label>
                <textarea
                  id="assistant-input"
                  ref={textareaRef}
                  value={input}
                  onChange={(event) => setInput(event.target.value.slice(0, MAX_TEXT))}
                  onKeyDown={handleComposerKeyDown}
                  rows={1}
                  maxLength={MAX_TEXT}
                  placeholder="Ask about local numbers, calling, or plans"
                  className="max-h-28 min-h-[44px] flex-1 resize-none rounded-xl border border-[#E5DDD3] bg-[#FBF9F5] px-3.5 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D5C54] dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder:text-slate-500 dark:focus:ring-teal-300"
                />
                <button
                  type="submit"
                  disabled={sending || input.trim() === ""}
                  aria-label="Send message"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0D5C54] text-white transition-colors hover:bg-[#143A36] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D5C54] disabled:cursor-not-allowed disabled:opacity-40 dark:bg-teal-300 dark:text-slate-900 dark:hover:bg-teal-200"
                >
                  <FiSend size={16} aria-hidden="true" />
                </button>
              </div>
              <div className="mt-1.5 flex items-start justify-between gap-2">
                <p className="text-[10px] leading-3 text-slate-400 dark:text-slate-500">
                  {bootstrap.safety_notice}
                </p>
                {input.length > MAX_TEXT - 100 && (
                  <p className="shrink-0 text-[10px] text-slate-400 dark:text-slate-500">
                    {input.length}/{MAX_TEXT}
                  </p>
                )}
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}
