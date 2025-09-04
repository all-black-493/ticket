import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";
import { buildUrl } from "@/utils/url-helpers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
    request: NextRequest,
    { params }: { params: { tenant: string } }
) {
    const url = new URL(request.url);
    const supabase = await getSupabaseCookiesUtilClient();
    const { data: sessionData, error: sessionError } =
        await supabase.auth.exchangeCodeForSession(
            url.searchParams.get("code") ?? "",
        );
    if (sessionError) {
        console.error("Session Error =>", sessionError)
        return NextResponse.redirect(
            buildUrl("/error?type=login-failed", params.tenant, request),
        );
    }

    const { tenant } = params;
    const supabaseAdmin = getSupabaseAdminClient();
    const { user } = sessionData;
    const { email } = user;

    if (!email) {
        await supabase.auth.signOut();
        return NextResponse.redirect(
            buildUrl(
                `/error?type=register_mail_mismatch&email=no_email_provided`,
                params.tenant,
                request,
            ),
        );
    }
    const [, emailHost] = email.split("@");

    const { error: tenantMatchError } = await supabaseAdmin
        .from("tenants")
        .select()
        .eq("id", tenant)
        .eq("domain", emailHost)
        .single();

    if (tenantMatchError) {
        await supabase.auth.signOut();
        return NextResponse.redirect(
            buildUrl(
                `/error?type=register_mail_mismatch&email=${email}`,
                params.tenant,
                request,
            ),
        );
    }

    const needsInitialSetup =
        !user.app_metadata.tenants?.includes(tenant);

    if (needsInitialSetup) {
        await supabaseAdmin.auth.admin.updateUserById(user.id, {
            app_metadata: {
                tenants: [tenant, ...(user.app_metadata.tenants ?? [])],
            },
        });
        const { data: profile } = await supabaseAdmin
            .from("profiles")
            .insert({
                full_name: user.user_metadata.full_name,
                user_id: user.id,
            })
            .select()
            .single();

        await supabaseAdmin.from("tenant_permissions").insert({
            tenant,
            profile: profile?.id,
        });
    }

    return NextResponse.json({ session: sessionData.session });
}