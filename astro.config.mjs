import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.foxteck.com',
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
  ],
});
