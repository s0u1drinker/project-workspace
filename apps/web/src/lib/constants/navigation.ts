import type { TNavigation, TPathName } from '$lib/types';

export const PATH_NAME = {
  login: '/login',
  signup: '/signup'
} as const satisfies TPathName;

export const NAVIGATION = {
  index: {
    path: '/',
    title: 'Главная',
    icon: 'local:tasks'
  },
  projects: {
    path: '/projects',
    title: 'Проекты',
    icon: 'local:projects'
  },
  workspace: {
    path: '/workspace',
    title: 'Задачи',
    icon: 'local:stats'
  }
} as const satisfies TNavigation;

export const NAV_LINK_CLASS = 'navigation__link';
export const NAV_LINK_ACTIVE_CLASS = `${NAV_LINK_CLASS}_active`;

export const USER_NAVIGATION = {
  profile: {
    path: '/user',
    title: 'Профиль',
    icon: 'local:user'
  },
  settings: {
    path: '/user',
    title: 'Настройки',
    icon: 'local:settings'
  }
} as const satisfies TNavigation;
