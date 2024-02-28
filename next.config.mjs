/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {unoptimized: true},
    experimental: {images: {unoptimized: true}},
    basePath: "/typespeed",
    output: 'export'
}
module.exports = nextConfig

export default nextConfig;
