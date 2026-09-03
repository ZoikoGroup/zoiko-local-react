// ─── AUTH HELPERS (STUB — no backend yet) ────────────────────────────────────
// TODO: Replace with real auth logic (e.g. reading a JWT from cookies/localStorage)

export function getToken(): string | null {
  if (typeof window === "undefined") return null;

  // TODO: Replace with your actual token storage key
  // return localStorage.getItem("zoiko_token");

  return null; // No one is "signed in" until auth exists
}