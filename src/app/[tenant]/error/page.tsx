import Link from "next/link";
import { urlPath } from "@/utils/url-helpers";

interface ErrorPageProps {
    searchParams: Promise<{
        type?: string;
        email?: string;
    }>;
    params: Promise<{
        tenant: string;
    }>;

}

export default async function ErrorPage({ searchParams, params }: ErrorPageProps) {
    const { type, email } = await searchParams;
    const { tenant } = await params
    const knownErrors = [
        "login-failed",
        "magic-link",
        "missing-email",
        "invalid-email",
        "missing-credentials",
        "invalid-magic-link",
        "missing-token",
        "register_mail_mismatch",
        "register_mail_exists",
        "register_unknown",
    ];

    console.log("Search Params Type: ", type)
    console.log("Search Params Email: ", email)
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Oops!</h1>

            {type === "login-failed" && (
                <strong>Login was not successful, sorry.</strong>
            )}
            {type === "magic-link" && (
                <strong>
                    Could not send a magic link. Maybe you had a typo in your E-Mail?
                </strong>
            )}
            {type === "missing-email" && (
                <strong>
                    Please provide your email address to receive a magic link.
                </strong>
            )}
            {type === "invalid-email" && (
                <strong>
                    The email address provided is invalid. Please check and try again.
                </strong>
            )}
            {type === "missing-credentials" && (
                <strong>
                    Please provide both email and password to log in.
                </strong>
            )}
            {type === "invalid-magic-link" && (
                <strong>
                    The magic link is invalid or has expired. Please request a new one.
                </strong>
            )}
            {type === "missing-token" && (
                <strong>
                    The token is missing. Please try again or contact support.
                </strong>
            )}
            {type === "register_mail_mismatch" && (
                <strong>
                    You are not legitimated to register an account with <u>{email}</u>
                </strong>
            )}
            {type === "register_mail_exists" && (
                <strong>
                    There is already an account registered with &nbsp;
                    <u>{email}</u>.
                </strong>
            )}
            {type === "register_unknown" && (
                <strong>
                    Sorry but an unknown error occurred when trying to create
                    an account.
                </strong>
            )}
            {/* Display a generic error message for unknown types */}
            {!knownErrors.includes(type ?? "") && (
                <strong>
                    Something went wrong. Please try again or contact support.
                </strong>
            )}
            <br /><br />
            <Link role="button" href={urlPath("/", tenant)}>
                Go back.
            </Link>
        </div>
    );
}