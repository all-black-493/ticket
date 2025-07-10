"use client";

import { useSearchParams } from "next/navigation";
import { LoginForm } from "@/components/LoginForm";

export default function SearchParamWrapper({
  tenant,
  tenantName,
}: {
  tenant: string;
  tenantName: string;
}) {
  const searchParams = useSearchParams();
  const wantsMagicLink = searchParams.get("magicLink") === "yes";

  return (
    <LoginForm
      isPasswordLogin={!wantsMagicLink}
      tenant={tenant}
      tenantName={tenantName}
    />
  );
}
