import type { TNavigation, TPathName } from '$lib/types';

export const PATH_NAME = {
  login: '/login',
  signup: '/signup'
} as const satisfies TPathName;

export const NAVIGATION = {
  index: {
    path: '/',
    title: 'Главная'
  },
  projects: {
    path: '/projects',
    title: 'Проекты'
  },
  workspace: {
    path: '/workspace',
    title: 'Задачи'
  }
} as const satisfies TNavigation;
