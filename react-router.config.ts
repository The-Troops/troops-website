import type { Config } from "@react-router/dev/config";

export default {
  // SPA mode for GitHub Pages (static hosting)
  ssr: false,
  // Custom domain uses root path
  basename: "/",
} satisfies Config;
