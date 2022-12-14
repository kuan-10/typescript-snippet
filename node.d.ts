declare module "url" {
    export interface Url {
        protocol?: string|null;
        hostname?: string|null;
        pathname?: string|null;
    }

    export function parse(urlStr: string, parseQueryString?, slashesDenoteHost?): Url;
}

declare module "path" {
    export function normalize(p: string): string;
    export function join(...paths: any[]): string;
    export let sep: string;
}