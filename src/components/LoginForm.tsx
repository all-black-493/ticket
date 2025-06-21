"use client";

import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useRef } from "react";
import { useEffect } from "react";
import { urlPath } from "@/utils/url-helpers";

export const LoginForm = ({ isPasswordLogin, tenant, tenantName }: { isPasswordLogin: boolean, tenant: string, tenantName: string }) => {
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);
    const supabase = getSupabaseBrowserClient();
    const router = useRouter();
    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            if (event === "SIGNED_IN" && session?.user) {
                router.push(urlPath("/tickets", tenant));
            }
        });
        return () => subscription.unsubscribe();
    }, []);
    return (
        <form
            action={isPasswordLogin ? urlPath("/auth/pw-login", tenant) : urlPath("/auth/magic-link", tenant)}
            method="POST"
            onSubmit={(event) => {
                isPasswordLogin && event.preventDefault();
                if (isPasswordLogin) {
                    supabase.auth.signInWithPassword({
                        email: emailInputRef.current?.value ?? "",
                        password: passwordInputRef.current?.value ?? "",
                    }).then((result) => {
                        !result.data?.user && alert("Could not sign in");
                    });
                } else {
                    alert("User wants to login with magic link");
                }
            }}>
            <article style={{ maxWidth: "420px", margin: "auto" }}>
                <header>
                    Login
                    <div style={{ display: "block", fontSize: "0.7em" }}>
                        {tenantName}
                    </div>
                </header>
                <fieldset>
                    <label htmlFor="email">
                        Email
                        <input type="email" id="email" name="email" ref={emailInputRef} required />
                    </label>
                    {isPasswordLogin && (
                        <label htmlFor="password">
                            Password
                            <input type="password" id="password" name="password" ref={passwordInputRef} required />
                        </label>
                    )}
                </fieldset>
                <p>
                    {isPasswordLogin ? (
                        <Link
                            href={{
                                pathname: urlPath("/", tenant),
                                query: {
                                    magicLink: "yes",
                                },
                            }}>
                            Login with Magic Link
                        </Link>
                    ) : (
                        <Link
                            href={{
                                pathname: urlPath("/", tenant),
                                query: {
                                    magicLink: "no",
                                },
                            }}>
                            Login with Password
                        </Link>
                    )}
                </p>
                <button type="submit">
                    {isPasswordLogin ? "Login with Password" : "Login with Magic Link"}
                </button>
            </article>
        </form>
    );
}