import { NextResponse, NextRequest } from "next/server";
import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import nodemailer from "nodemailer";
import { buildUrl } from "@/utils/url-helpers";


export async function POST(request: NextRequest, { params }: { params: { tenant: string } }) {
    const formData = await request.formData();
    const email = formData.get("email");

    if (!email) {
        return NextResponse.redirect(
            buildUrl("/error?type=missing-email", params.tenant, request),
            302
        );
    }

    if (typeof email !== "string") {
        return NextResponse.redirect(
            buildUrl("/error?type=invalid-email", params.tenant, request),
            302
        );
    }

    const supabaseAdmin = getSupabaseAdminClient();
    const { data: linkData, error: adminError } =
        await supabaseAdmin.auth.admin.generateLink({
            email: email,
            type: "magiclink"
        });

    if (adminError) {
        console.error("Error generating magic link:", adminError);
        return NextResponse.redirect(
            buildUrl("/error?type=magic-link", params.tenant, request),
            302
        );
    }

    const { hashed_token } = linkData.properties;

    const constructedLink = new URL(
        `/auth/verify?hashed_token=${hashed_token}&type=recovery`,
        request.url
    );

    const transporter = nodemailer.createTransport({
        host: "localhost",
        port: 54327,
    });

    await transporter.sendMail({
        from: "Your Company <your@mail.whatever>",
        to: email,
        subject: "Magic Link",
        html: `
            <h1>Hi there, Jere speaking. This is a custom magic link email!</h1>
            <p>Click <a href="${constructedLink.toString()}">here</a> to log in.</p>
            <p>If you did not request this email, please ignore it.</p>
            <p>Thank you!</p>
        `,
    });

    const thanksUrl = buildUrl("/magic-thanks", params.tenant, request);
    return NextResponse.redirect(thanksUrl, 302);
}