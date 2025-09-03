import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import nodemailer from "nodemailer";
import { buildUrl } from "./url-helpers";
import { NextRequest } from "next/server";

export async function sendOTPLink(
    email: string,
    type: "signup" | "recovery" | "magiclink",
    tenant: string,
    request: NextRequest
) {
    const supabaseAdmin = getSupabaseAdminClient();
    const { data: linkData, error } = await supabaseAdmin.auth.admin.generateLink(
        type === "signup"
            ? {
                email,
                type,
                password: "temporary-password", // Replace with actual password logic if needed
            }
            : {
                email,
                type,
            },
    );

    console.log("Link Type Success =>", linkData, type)
    
    const user = linkData.user;
    if (error || !user?.app_metadata?.tenants.includes(tenant)) {
        return false;
    }

    console.log("The user to be verified =>", user)
    const { hashed_token } = linkData.properties;
    const constructedLink = buildUrl(
        `/auth/verify?hashed_token=${hashed_token}&type=${type}`,
        tenant,
        request,
    );
    const transporter = nodemailer.createTransport({
        host: "localhost",
        port: 54327,
    });
    let mailSubject = "";
    let initialSentence = "";
    let sentenceEnding = "";
    if (type === "signup") {
        mailSubject = "Activate your account";
        initialSentence = "Hi there, you successfully signed up!";
        sentenceEnding = "activate your account";
    } else if (type === "recovery") {
        mailSubject = "New password requested";
        initialSentence = "Hi there, you requested a password change!";
        sentenceEnding = "change it";
    } else {
        mailSubject = "Magic Link requested";
        initialSentence = "Hey, you requested a magic login link!";
        sentenceEnding = "log in";
    }
    await transporter.sendMail({
        from: "Your Company <your@mail.whatever>",
        to: email,
        subject: mailSubject,
        html: `
            <h1>${initialSentence}</h1>
            <p>Click <a href="${constructedLink.toString()}">here</a> to 
            ${sentenceEnding}.</p>
        `,
    });
    return true;
}