import { ICON_MAP } from '$constants';
import type { TNavigation, TPathName } from '$lib/types';

export const PATH_NAME = {
  login: '/login',
  signup: '/signup'
} as const satisfies TPathName;

export const NAVIGATION = {
  index: {
    path: '/',
    title: 'Главная',
    icon: ICON_MAP.local('stats')
  },
  projects: {
    path: '/projects',
    title: 'Проекты',
    icon: ICON_MAP.local('projects')
  },
  workspace: {
    path: '/workspace',
    title: 'Задачи',
    icon: ICON_MAP.local('tasks')
  }
} as const satisfies TNavigation;

export const NAV_LINK_CLASS = 'navigation__link';
export const NAV_LINK_ACTIVE_CLASS = `${NAV_LINK_CLASS}_active`;

export const USER_NAVIGATION = {
  profile: {
    path: '/user/profile',
    title: 'Профиль',
    icon: ICON_MAP.local('user')
  },
  settings: {
    path: '/user/settings',
    title: 'Настройки',
    icon: ICON_MAP.local('settings')
  }
} as const satisfies TNavigation;
