import { NextRequest, NextResponse } from "next/server";

import { pageRouter } from "@/constants/page-router";

export function middleware(request: NextRequest) {
  // replace default url to home page
  if (request.nextUrl.pathname === "/") {
    return NextResponse.rewrite(new URL(pageRouter.home.url, request.url));
  }

  return NextResponse.next();
}
