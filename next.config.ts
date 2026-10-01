import type { NextConfig } from "next";
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  distDir: process.env.THERAPY_DEV === "1" ? ".next-dev" : ".next",
  images: { unoptimized: true },
};
export default config;
