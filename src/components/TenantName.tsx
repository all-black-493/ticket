import { getSupabaseCookiesUtilClient } from "@/supabase-utils/cookiesUtilClient";

export default async function TenantName(props: { tenant: string }) {
    let tenantName = "Unknown";
    const supabase = await getSupabaseCookiesUtilClient();
    const selection = await supabase
        .from("tenants")
        .select("name")
        .eq("id", props.tenant)
        .single();

    const { data, error } = selection;
    console.log({
        tenant: props.tenant,
        data,
        error,
    });

    tenantName = data?.name ?? "Unknown";

    return (
        <header style={{ marginBottom: "10px" }}>
            <div style={{
                borderLeft: "4px solid orange",
                display: "block",
                padding: "4px 10px",
                fontSize: "1.1em",
            }}>
                Ticket System
                <strong style={{ marginLeft: "1ex" }}>
                    {tenantName}
                </strong>
            </div>

        </header>
    );
}