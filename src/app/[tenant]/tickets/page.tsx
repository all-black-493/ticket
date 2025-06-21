import TicketList from "@/components/TicketList";

export default async function TicketsListPage({params}: { params: {tenant: string} }) {
    const { tenant } = await params;
    const dummyTickets = [
        {
            id: 1,
            title: "Write Supabase API",
            status: "Not started",
            author: "Jeremy",
        },
        {
            id: 2,  
            title: "Read more Packt books",
            status: "In Progress",
            author: "David",
        },
        {
            id: 3,
            title: "Make videos for the YouTube channel",
            status: "Done",
            author: "Jeremy",
        },
    ];
    return (
       <TicketList tickets={dummyTickets} tenant={tenant} />
    );
}