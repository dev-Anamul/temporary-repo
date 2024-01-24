import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request) {
  const data = await request.json();

  const { name, value } = data || {};

  const cookeStore = cookies();
  cookeStore.set(name, value);

  return NextResponse.json({ cookie: { name, value } });
}
