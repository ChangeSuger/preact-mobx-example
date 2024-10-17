import type { SidebarItem } from 'node_modules/@astrojs/starlight/schemas/sidebar';

export const sidebar: SidebarItem[] = [
  { label: '首页', link: '/' },
].map(item => ({...item, translations: {}, attrs: {}}));