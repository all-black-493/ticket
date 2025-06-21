import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { buildUrl } from "@/utils/url-helpers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, { params }: { params: { tenant: string } }) {
    const supabase = await getSupabaseCookiesUtilClient();
    await supabase.auth.signOut();
    return NextResponse.redirect(buildUrl("/", params.tenant, request));
}
