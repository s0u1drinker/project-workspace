export const PATH_NAME = {
  login: '/login',
  signup: '/signup'
} as const;

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
} as const;
