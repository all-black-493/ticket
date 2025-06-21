import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { buildUrl } from "@/utils/url-helpers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { tenant: string } }) {
    const { searchParams } = new URL(request.url);
    const hashed_token = searchParams.get("hashed_token");
    const type = searchParams.get("type");

    const supabase = await getSupabaseCookiesUtilClient();

    if (!hashed_token) {
        return NextResponse.redirect(
            buildUrl("/error?type=missing-token", params.tenant, request)
        );
    }

    const { error } = await supabase.auth.verifyOtp({
        type: "magiclink",
        token_hash: hashed_token,
    });

    if (error) {
        return NextResponse.redirect(
            buildUrl("/error?type=invalid-magic-link", params.tenant, request)
        );
    }

    if (type === "recovery") {
        return NextResponse.redirect(
            buildUrl("/tickets/change-password", params.tenant, request)
        );
    } else {
        return NextResponse.redirect(buildUrl("/tickets", params.tenant, request));
    }
}
