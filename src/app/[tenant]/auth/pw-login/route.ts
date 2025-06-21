import { NextRequest, NextResponse } from "next/server";
import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { buildUrl } from "@/utils/url-helpers";

export async function POST(request: NextRequest, { params }: { params: { tenant: string } }) {
    
    const formData = await request.formData();
    console.log("Form Data =>", formData);
    const email = formData.get("email");
    const password = formData.get("password");

    if (typeof email !== "string" || typeof password !== "string") {
        return NextResponse.redirect(
            buildUrl("/error?type=missing-credentials", params.tenant, request),
            { status: 302 }
        );
    }

    const supabase = await getSupabaseCookiesUtilClient();
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
    });

    const userData = data?.user;
    if (error || !userData) {
        return NextResponse.redirect(
            buildUrl("/error?type=login-failed", params.tenant, request),
            { status: 302 }
        );
    }
    return NextResponse.redirect(buildUrl("/tickets", params.tenant, request), {
        status: 302,
    });
}
