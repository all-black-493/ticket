import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import SearchParamWrapper from "./SearchParamWrapper";

export default async function LoginPage({ params }: { params: Promise<{ tenant: string }> }) {
  const { tenant } = await params;

  const supabaseAdmin = getSupabaseAdminClient();

  const { data, error } = await supabaseAdmin
    .from("tenants")
    .select("*")
    .eq("id", tenant)
    .single();

  if (error || !data) {
    notFound();
  }

  const { name: tenantName } = data;

  return (
    <Suspense fallback={<div>Loading login form...</div>}>
      <SearchParamWrapper tenant={tenant} tenantName={tenantName} />
    </Suspense>
  );
}
