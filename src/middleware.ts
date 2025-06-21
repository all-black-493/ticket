import { NextRequest, NextResponse } from "next/server";
import { getSupabaseReqResClient } from "./supabase-utils/reqResClient";

export default async function middleware(request: NextRequest) {
    const { supabase, response } = await getSupabaseReqResClient({ request });
    const session = await supabase.auth.getUser();
    const requestedPath = request.nextUrl.pathname;

    const [tenant, ...restOfPath] = requestedPath.substr(1).split("/");
    if (!/[a-z0-9-_]+/.test(tenant)) {
        return NextResponse.rewrite(new URL("/not-found", request.url));
    }
    const applicationPath = "/" + restOfPath.join("/");
    const sessionUser = session.data.user;

    if (applicationPath.startsWith("/tickets")) {
        if (!sessionUser) {
            return NextResponse.redirect(new URL(`/${tenant}/`, request.url));
        }
    } else if (applicationPath === "/") {
        if (sessionUser) {
            return NextResponse.redirect(new URL(`/${tenant}/tickets`,
                request.url));
        }
    }

    return response.value;
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};