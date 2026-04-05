import { GOOGLE_APPS_SCRIPT_URL } from "./constants";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

function isSupabaseConfigured() {
  return !!supabaseUrl && !!supabaseAnonKey && supabaseUrl !== "placeholder" && supabaseAnonKey !== "placeholder";
}

async function insertRow(table: string, payload: Record<string, unknown>) {
  if (!isSupabaseConfigured()) {
    console.info(`[supabase placeholder] ${table}`, payload);
    return { ok: true, fallback: true };
  }

  const response = await fetch(`${supabaseUrl}/rest/v1/${table}`, {
    method: "POST",
    headers: {
      apikey: supabaseAnonKey as string,
      Authorization: `Bearer ${supabaseAnonKey}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify(payload),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error(`Supabase insert failed for ${table}`);
  }

  return { ok: true, fallback: false };
}

export async function saveContactSubmission(payload: Record<string, unknown>) {
  return insertRow("contact_submissions", payload);
}

export async function saveOnboardingSubmission(payload: Record<string, unknown>) {
  return insertRow("onboarding_submissions", payload);
}

export async function notifyAppsScript(payload: Record<string, unknown>) {
  try {
    await fetch(GOOGLE_APPS_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });
  } catch (error) {
    console.info("[apps-script placeholder]", error);
  }
}
