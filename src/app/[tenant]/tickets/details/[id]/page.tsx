import classes from "./TicketDetails.module.css";
import TicketComments from "@/components/TicketComments";

export default async function TicketDetailsPage({ params }: { params: { id: string } }) {
    const { id } = await params;
    
    return (
        <article className={classes.ticketDetails}>
            <header>
                <strong>#{id}</strong> - <strong className={classes.ticketStatusGreen}>Open</strong>
                <br />
                <small className={classes.authorAndDate}>
                    Created by <strong>AuthorName</strong> at {" "}
                    <time>December 10th, 2025</time>
                </small>
                <h2>Ticket Title here</h2>
            </header>
            <section>
                Details About the Ticket
            </section>
            <TicketComments />
        </article>
    );
}