import type { SidebarItem } from 'node_modules/@astrojs/starlight/schemas/sidebar';

export const sidebar: SidebarItem[] = [
  { label: '虚拟 DOM 元素', link: '/examples/01-preact-virtual-element' },
  { label: '组件', link: '/examples/02-preact-component' },
].map(item => ({...item, translations: {}, attrs: {}}));
