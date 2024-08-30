import { withContentCollections } from "@content-collections/next";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    transpilePackages: ['@content-collections/mdx'],
};

export default withContentCollections(nextConfig);
