import { NextResponse } from "next/server";

export function middleware(req) {
  req.headers.set("Content-Length", "Infinity"); // Remove size limit
  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*", // Sirf API routes ke liye middleware apply karega
};
