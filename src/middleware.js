import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(request) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login";
  const cookieStore = cookies();
  const accessToken = cookieStore.get("accesstoken");
  console.log(accessToken);

  if (!isPublicPath && accessToken === "undefined") {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  if (isPublicPath && accessToken) {
    return NextResponse.redirect(new URL("/dashboad", request.nextUrl));
  }
}77

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/login"],
};
