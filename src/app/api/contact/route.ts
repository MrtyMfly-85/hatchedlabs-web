import { NextResponse } from "next/server";
import { saveContactSubmission } from "../../../lib/supabase";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    await saveContactSubmission({
      name: body.name,
      email: body.email,
      message: body.message,
      status: "new",
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ ok: false, error: String(error) }, { status: 500 });
  }
}
