import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import adapter from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    adapter: adapter(),
    output: "server",
});
