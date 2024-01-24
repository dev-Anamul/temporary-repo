import { NextResponse } from "next/server";

export async function GET(request) {
  const newHeaders = new Headers(request.headers);

  const token = newHeaders.get("authorization");
  newHeaders.set("authorization", `Bearer ${token}`);

  const response = NextResponse.next({
    headers: newHeaders,
    request: {
      headers: newHeaders,
    },
  });

  return NextResponse.json({
    message: "Header modified successfully",
    authorization: response.headers.get("authorization"),
  });
}
