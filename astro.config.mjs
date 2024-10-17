// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'MobX & Preact Examples',
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      defaultLocale: "zh-CN",
      locales: {
        "zh-CN": {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      sidebar: [],
      customCss: ['./src/tailwind.css'],
    }),
    tailwind({ applyBaseStyles: false }),
    preact(),
  ],
});
