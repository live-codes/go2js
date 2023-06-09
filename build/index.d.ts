declare module "get-url" {
    export const getUrl: (baseUrl?: string | undefined) => string;
}
declare module "compile" {
    export const compile: (code: string, baseUrl?: string | undefined) => Promise<string>;
}
declare module "format" {
    export const format: (code: string, baseUrl?: string | undefined, imports?: boolean) => Promise<string>;
}
declare module "index" {
    export { compile } from "compile";
    export { format } from "format";
}
