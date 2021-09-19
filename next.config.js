module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["brandslogos.com"]
  },
  env: {
    NEXT_PUBLIC_API_KEYS: process.env.NEXT_PUBLIC_API_KEYS,
    NEXT_PUBLIC_CONTEXT_KEYS: process.env.NEXT_PUBLIC_CONTEXT_KEYS,
  },
}
