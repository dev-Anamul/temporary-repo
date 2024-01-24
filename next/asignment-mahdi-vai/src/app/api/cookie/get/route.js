import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  return NextResponse.json({ cookies: cookieStore.getAll() });
}
