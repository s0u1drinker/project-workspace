import type { IProject } from './types';

export const projects = $state<IProject[]>([
  {
    id: '1',
    description: 'Приложение для управления задачами.',
    icon: 'logos:svelte-icon',
    name: 'ProjectWorkspace'
  },
  {
    id: '2',
    description: 'Приложение для учёта тренировок.',
    icon: 'logos:nuxt-icon',
    name: 'MoveMate'
  },
  {
    id: '3',
    description: 'Кулинарная книга + учёт продуктов',
    icon: 'logos:react',
    name: 'ReactCookBook'
  }
]);

/** Количество проектов. */
export const projectsCount = $derived(projects.length);
