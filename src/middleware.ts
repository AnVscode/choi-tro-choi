import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // add logic here

  return NextResponse.next();
}
