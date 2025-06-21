import TenantName from "@/components/TenantName";
import Nav from "@/components/Nav";

export default async function TicketsLayout({ children, params }: { children: React.ReactNode, params: { tenant: string } }) {
    const { tenant } = await params;
    return (
        <>
            <div style={{ margin: "0 10px" }}>
                <section style={{ borderBottom: "1px solid gray" }}>
                    <TenantName tenantName={tenant} />
                    <Nav tenant={tenant} />
                </section>
                <section>
                    {children}
                </section>
            </div>
        </>
    );
}