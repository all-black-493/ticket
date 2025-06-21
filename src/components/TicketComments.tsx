'use client';

import { useRef } from "react";
import classes from "@/app/tickets/details/[id]/TicketDetails.module.css";

const comments = [
    {
        author: "Jeremy",
        date: "2025-06-09",
        content: "This is a comment from Jeremy",
    },
    {
        author: "David",
        date: "2024-06-09",
        content: "This is a comment from David",
    },
    {
        author: "John",
        date: "2026-06-09",
        content: "This is a comment from John",
    },
];

export default function TicketComments() {
    const commentRef = useRef<HTMLTextAreaElement>(null);

    return (
        <footer>
            <h3>Comments</h3>
            <form onSubmit={(event)=>{
                event.preventDefault();
                alert("TODO: Comment submitted");
            }}>
                <textarea ref={commentRef} id="comment" placeholder="Add a comment..." />
                <button type="submit">Add Comment</button>
            </form>
            <section>
                {/* We have {comments.length} comments: */}
                <ul>
                    {comments.map((comment)=>(
                        <article key={comment.date} className={classes.comment}>
                            <strong>{comment.author} </strong>
                            <time>{comment.date}</time>
                            <p>{comment.content}</p>
                        </article>
                    ))}
                </ul>
            </section>
        </footer>
    );
}