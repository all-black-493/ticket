"use client";

import { getSupabaseAdminClient } from "@/supabase-utils/adminClient";
import { LoginForm } from "../../components/LoginForm";
import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";

export default async function LoginPage({ params }: { params: { tenant: string } }) {
  const searchParams = useSearchParams();
  const wantsMagicLink = searchParams.get('magicLink') === "yes";
  const supabaseAdmin = getSupabaseAdminClient();
  const { data, error } = await supabaseAdmin
    .from("tenants").select("*").eq("id", params.tenant).single();
  if (error) {
    notFound();
  }
  const { name: tenantName } = data;
  return <LoginForm isPasswordLogin={!wantsMagicLink} tenant={params.tenant} tenantName={tenantName} />;
}