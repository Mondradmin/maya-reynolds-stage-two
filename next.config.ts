import type { NextConfig } from "next";
const config: NextConfig = { output: "export", distDir: process.env.THERAPY_DEV === "1" ? ".next-dev" : ".next", images: { unoptimized: true } };
export default config;
