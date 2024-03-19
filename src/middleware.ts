import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // replace default url to home page
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL("/home", request.url));
  }

  return NextResponse.next();
}
