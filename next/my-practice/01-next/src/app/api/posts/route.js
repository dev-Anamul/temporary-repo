import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ message: "hello from get posts" });
}

export async function POST(request) {
  const body = await request.json();
  console.log("body", body);
  console.log("request-body", request.body, "request", request);
  return NextResponse.json({ message: "hello from post posts" });
}

export async function PUT() {
  return NextResponse.json({ message: "hello from put posts" });
}

export async function DELETE() {
  return NextResponse.json({ message: "hello from delete posts" });
}

export async function PATCH() {
  return NextResponse.json({ message: "hello from patch posts" });
}
