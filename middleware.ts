import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

import { routing } from "./i18n/routing";
// export function middleware(request: NextRequest) {
//   const token = request.cookies.get("miras-token");

//   if (!token && request.nextUrl.pathname !== "/login") {
//     return NextResponse.redirect(new URL("/login", request.url));
//   }

//   return NextResponse.next();
// }

export default createMiddleware(routing);

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pe|ru|en)/:path*"],
};
