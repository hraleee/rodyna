import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/area-riservata/dashboard")) {
    
    const token = request.cookies.get("token_jwt_rodyna")?.value;
    console.log("token => ", token)
    if (!token) {
      return NextResponse.redirect(new URL("/area-riservata", request.url));
    }
   
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/area-riservata/dashboard/:path*"],
}; 