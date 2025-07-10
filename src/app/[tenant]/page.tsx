import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import SearchParamWrapper from "./SearchParamWrapper";

export default async function LoginPage({ params }: { params: { tenant: string } }) {
  const supabaseAdmin = getSupabaseAdminClient();

  const { data, error } = await supabaseAdmin
    .from("tenants")
    .select("*")
    .eq("id", params.tenant)
    .single();

  if (error || !data) {
    notFound();
  }

  const { name: tenantName } = data;

  return (
    <Suspense fallback={<div>Loading login form...</div>}>
      <SearchParamWrapper tenant={params.tenant} tenantName={tenantName} />
    </Suspense>
  );
}
