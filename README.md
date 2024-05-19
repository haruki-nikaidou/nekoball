# Neko ball

a tiny anime sharing platform.

## Getting started

```bash
bun install
bun dev
```

## Deploy

You should use [Neon](https://console.neon.tech/) as database.

You must use Cloudflare Image to store images.

These environment variables are required:

- `DRIZZLE_DATABASE_URL`: the postgresql database url, provided by Neon.
- `CLOUDFLARE_IMAGE_ACCOUNT_HASH`: the account hash of Cloudflare Image.
- `CLOUDFLARE_IMAGE_VARIANT_NAME`: the variant name of Cloudflare Image.

> Because how images stored in database is by UUID, you must use Cloudflare Image to store images. The link will be like `https://imagedelivery.net/ACCOUNT_HASH/IMAGE_UUID/IMAGE_VARIANT_NAME`.
