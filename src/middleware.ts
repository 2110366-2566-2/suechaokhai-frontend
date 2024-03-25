import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/listing","/favorite","/create-property","/edit-profile","/edit-profiles","/editProfile","/my-appointment","/property"],
};

export function middleware(request: NextRequest) {
    const session = request.cookies.get('session')
    // console.log(session,"from cookie")
    if (!session ) {
        return NextResponse.redirect(new URL("http://localhost:3000/login"));
    }
}
