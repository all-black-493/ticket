'use client';

import { useRef } from "react";

export default function CreateTicketPage() {
    const ticketTitleRef = useRef<HTMLInputElement>(null);
    const ticketDescriptionRef = useRef<HTMLTextAreaElement>(null);

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        alert("TODO: Create a new ticket");
    }

    return (
        <article>
            <h3>Create a new ticket</h3>
        <form onSubmit={handleSubmit}>
            <input placeholder="Add a title" ref={ticketTitleRef} />
            <textarea placeholder="Add a description" ref={ticketDescriptionRef} />
            <button type="submit">Create Ticket</button>
        </form>

        </article>
    )
}