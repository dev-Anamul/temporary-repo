import { NextResponse } from "next/server";

export async function GET(request) {
  console.log(request.url);
  return NextResponse.redirect(new URL("/about", request.url));
}
