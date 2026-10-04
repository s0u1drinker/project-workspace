import type { TValuesEqualsKeys, TOrient } from '$lib/types';

export const APP_NAME = 'ProjectWorkspace';

export const NONAME = 'noname';
export const NO_MESSAGE_TEXT = '-';

export const HTTP_METHOD = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
} as const;

export const COMPONENT = {
  NAME: {
    button: 'Button',
    icon: 'Icon'
  },
  CLASS: {
    input: 'input',
    card: 'card'
  }
} as const;

export const ORIENT_MAP = {
  horizontal: 'horizontal',
  vertical: 'vertical'
} as const satisfies TValuesEqualsKeys<TOrient>;

export const FORM_LABEL = {
  login: 'Логин',
  password: 'Пароль',
  remember: 'Запомнить меня'
} as const;

export const PATH_NAME = {
  login: '/login',
  signup: '/signup',
  index: '/'
} as const;

export const APP_ERROR = {
  403: {
    title: 'Доступ запрещён',
    message: 'У вас нет доступа к этой странице.'
  },
  404: {
    title: 'Страница не найдена',
    message: 'Запрашиваемая страница не существует.'
  },
  500: {
    title: 'Ошибка сервера',
    message: 'Что-то пошло не так. Попробуйте повторить попытку позже.'
  }
} as const satisfies Record<number, { title: string; message: string }>;

export const DEFAULT_ERROR_TITLE = 'Произошла ошибка';
export const DEFAULT_ERROR_MESSAGE = 'Не удалось выполнить запрос.';

export const APP_API = {
  authDemo: '/api/auth/demo'
} as const;
