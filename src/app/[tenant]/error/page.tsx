import Link from "next/link";
import { urlPath } from "@/utils/url-helpers";

interface ErrorPageProps {
    searchParams: {
        type?: string;
        [key: string]: string | undefined;
    };
    params: {
        tenant: string;
    };
    
}

export default function ErrorPage({ searchParams, params }: ErrorPageProps) {
    const { type } = searchParams;
    const knownErrors = ["login-failed", "magic-link","missing-email","invalid-email", "missing-credentials", "invalid-magic-link", "missing-token"];
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
            {/* Display a generic error message for unknown types */}
            {!knownErrors.includes(type ?? "") && (
                <strong>
                    Something went wrong. Please try again or contact support.
                </strong>
            )}
            <br /><br />
            <Link role="button" href={urlPath("/", params.tenant)}>
                Go back.
            </Link>
        </div>
    );
}