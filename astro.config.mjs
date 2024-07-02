import { defineConfig } from 'astro/config';
import million from 'million/compiler';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  site: 'https://zmrclub.store/',
    output: 'server',
    adapter: vercel(),
    vite: {
      plugins: [million.vite({
        mode: "react",
        server: true,
        auto: true
      })],
  },
});
