import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { sendOTPLink } from "@/utils/sendOTPLink";
import { buildUrl } from "@/utils/url-helpers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest, { params }: { params: Promise<{ tenant: string }> }) {
    const formData = await request.formData();
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const { tenant } = await params;
    const isNonEmptyString = (value: unknown) =>
        typeof value === "string" && value.trim().length > 0;

    const emailRegex = /^\S+@\S+$/; // simple front@back regex

    console.log(formData)

    if (
        !isNonEmptyString(name) ||
        !isNonEmptyString(email) ||
        !emailRegex.test(typeof email === "string" ? email : "") ||
        !isNonEmptyString(password)
    ) {
        return NextResponse.redirect(
            buildUrl("/error", tenant, request),
            302
        );
    }
    const [, emailHost] = (email as string).split('@');

    const supabaseAdmin = getSupabaseAdminClient();

    const { data, error } = await supabaseAdmin
        .from("tenants")
        .select("*")
        .eq("id", tenant)
        .eq("domain", emailHost)
        .single();

    console.log(data)
    const safeEmailString = encodeURIComponent(typeof email === "string" ? email : "");

    console.log(safeEmailString)
    if (error) {
        console.error("Mail mismatch: ", error)
        return NextResponse.redirect(
            buildUrl(
                `/error?type=register_mail_mismatch&email=${safeEmailString}`,
                tenant,
                request,
            ),
            302,
        );
    }

    const { data: userData, error: userError } =
        await supabaseAdmin.auth.admin.createUser({
            email: typeof email === "string" ? email : undefined,
            password: typeof password === "string" ? password : undefined,
            app_metadata: {
                tenants: [tenant],
            },
        });

    if(userData){
        console.log("Success creating user =>", userData)
    }

    if (userError) {
        const userExists =
            userError.message.includes("already been registered");
        if (userExists) {
            return NextResponse.redirect(
                buildUrl(
                    `/error?type=register_mail_exists&email=${safeEmailString}`,
                    tenant,
                    request,
                ),
                302,
            );
        } else {
            return NextResponse.redirect(
                buildUrl("/error?type=register_unknown", tenant, request),
                302,
            );
        }
    }

    const { data: newProfile } = await supabaseAdmin
        .from("profiles")
        .insert({
            full_name: name,
            user_id: userData.user.id,
        })
        .select()
        .single();

    if(newProfile){
        console.log("New profile created =>", newProfile)
    }

    const { error: tpError } =
        await supabaseAdmin.from("tenant_permissions").insert({
            tenant,
            profile: newProfile?.id,
        });

    if (tpError) {
        console.log("An error occurred in the tenant permissions =>", tpError)
        await supabaseAdmin.auth.admin.deleteUser(userData.user.id);
        return NextResponse.redirect(
            buildUrl("/error", tenant, request), 302
        );
    }

    console.log("Tenant Permissions Success")

    await sendOTPLink(typeof email === "string" ? email : "", "signup", tenant, request);
    
    return NextResponse.redirect(
        buildUrl(
            `/registration-success?email=${safeEmailString}`,
            tenant,
            request
        ),
        302
    );
}
