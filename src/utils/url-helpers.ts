import { NextRequest } from "next/server";

export function urlPath(applicationPath: string, tenant: string) {
    return applicationPath;
}

export function buildUrl(applicationPath: string, tenant: string, request: NextRequest) {
    const [hostname, port] = getHostnameAndPort(request);
    const portSuffix = port && port != "443" ? `:${port}` : "";
    const { protocol } = request.nextUrl;
    const tenantUrl = `${protocol}//${hostname}${portSuffix}/`;
    return new URL(urlPath(applicationPath, tenant), tenantUrl);
}

export function getHostnameAndPort(request: NextRequest) {
    const hostnameWithPort = request.headers.get("host");
    const [hostname, port] = (hostnameWithPort?.split(":") ?? [undefined, undefined]);
    return [hostname, port];
}


