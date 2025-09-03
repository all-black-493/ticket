import { urlPath } from "@/utils/url-helpers";
import Link from "next/link";

interface RegistrationSuccessPageProps {
    searchParams: Promise<{ email?: string }>;
    params: Promise<{ tenant?: string }>;
}

export default async function RegistrationSuccessPage({
    searchParams,
    params,
}: RegistrationSuccessPageProps) {
    const { email } = await searchParams;
    const { tenant } = await params;
    const tenantStr = tenant ?? "";
    
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Registration succeeded!</h1>
            <p>Check your email ({email}) for a link to activate your
                account.</p>
            <br />
            <Link role="button" href={urlPath("/", tenantStr)}>
                Login
            </Link>
        </div>
    );
}