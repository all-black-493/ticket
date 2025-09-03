import { NextRequest, NextResponse } from "next/server";
import { getSupabaseReqResClient } from "./supabase-utils/reqResClient";
import { TENANT_MAP } from './tenant-map'
import { getHostnameAndPort } from "./utils/url-helpers";
import { buildUrl } from "./utils/url-helpers";
import { getSupabaseAdminClient } from "./supabase-utils/adminClient";

export default async function middleware(request: NextRequest) {
    const { supabase, response } = await getSupabaseReqResClient({ request });
    const session = await supabase.auth.getUser();

    const [hostname] = getHostnameAndPort(request);
    const supabaseAdmin = getSupabaseAdminClient()

    const { data: tenantData, error: tenantError } = await supabaseAdmin
        .from("tenants")
        .select("*")
        .eq("domain", hostname)
        .single()

    if (tenantError) {
        return NextResponse.rewrite(new URL("/not-found", request.url))
    }

    const requestedPath = request.nextUrl.pathname;

    const tenant = tenantData.id;

    if (!/[a-z0-9-_]+/.test(tenant)) {
        return NextResponse.rewrite(new URL("/not-found", request.url));
    }
    const applicationPath = requestedPath;
    const sessionUser = session.data.user;

    if (applicationPath.startsWith("/tickets")) {
        if (!sessionUser) {
            return NextResponse.redirect(buildUrl('/', tenant, request));
        } else if (!sessionUser.app_metadata?.tenants.includes(tenant)) {
            return NextResponse.rewrite(new URL("/not-found", request.url));
        }
    } else if (applicationPath === "/") {
        if (sessionUser) {
            return NextResponse.redirect(buildUrl('/tickets', tenant, request));
        }
    }

    const rewrittenResponse = NextResponse.rewrite(
        new URL(`/${tenant}${applicationPath}${request.nextUrl.search}`, request.url),
        {
            request: request,
        }
    );
    const cookiesToSet = response.value.cookies.getAll();
    cookiesToSet.forEach((cookie) => {
        rewrittenResponse.cookies.set(cookie.name, cookie.value, cookie);
    });
    return rewrittenResponse;
}

export const config = {
    matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

