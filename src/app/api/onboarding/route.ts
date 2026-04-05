import { NextResponse } from "next/server";
import { notifyAppsScript, saveOnboardingSubmission } from "../../../lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await saveOnboardingSubmission(body);
    await notifyAppsScript({ email: body.email, onboarding: body });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
