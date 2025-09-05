'use client';

import { getSupabaseBrowserClient } from "@/supabase-utils/browserClient";
import { urlPath } from "@/utils/url-helpers";
import { useRouter } from "next/navigation";
import { useRef, useState, use } from "react";

export default function CreateTicketPage({ params }: { params: Promise<{ tenant: string }> }) {
    const { tenant } = use(params);
    const ticketTitleRef = useRef<HTMLInputElement>(null);
    const ticketDescriptionRef = useRef<HTMLTextAreaElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const supabase = getSupabaseBrowserClient();
    const router = useRouter()

    return (
        <article>
            <h3>Create a new ticket</h3>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const title = ticketTitleRef.current?.value ?? "";
                    const description = ticketDescriptionRef.current?.value;
                    if (title.trim().length > 4 && (description ?? "").trim().length > 9) {
                        setIsLoading(true);
                        supabase
                            .from("tickets")
                            .insert({
                                title,
                                description,
                                tenant
                            })
                            .select()
                            .single()
                            .then(({ error, data }) => {
                                if (error) {
                                    setIsLoading(false);
                                    alert("Could not create ticket");
                                    console.error(error);
                                } else {
                                    setIsLoading(false)
                                    router.push(urlPath(`/tickets/details/${data.id}`, tenant));
                                }
                            });
                    } else {
                        alert(
                            "A title must have at least 5 chars and a description must at least contain 10"
                        );
                    }
                }}
            >
                <input disabled={isLoading} placeholder="Add a title" ref={ticketTitleRef} />
                <textarea disabled={isLoading} placeholder="Add a description" ref={ticketDescriptionRef} />
                <button disabled={isLoading} type="submit" aria-busy={isLoading}>
                    Create Ticket
                </button>
            </form>
        </article>
    );
}
