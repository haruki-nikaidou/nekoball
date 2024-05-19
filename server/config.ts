function cloudflareImageAccountHash(): string {
    return process.env.CLOUDFLARE_IMAGE_ACCOUNT_HASH!;
}

function cloudflareImageVariantName(): string {
    return process.env.CLOUDFLARE_IMAGE_VARIANT_NAME!;
}

export function getImageUrl(uuid: string): string {
    return `https://imagedelivery.net/${cloudflareImageAccountHash()}/${uuid}/${cloudflareImageVariantName()}`;
}