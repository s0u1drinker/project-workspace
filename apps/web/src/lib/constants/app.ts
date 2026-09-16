import type { TValuesEqualsKeys, TOrient } from '$lib/types';

export const APP_NAME = 'ProjectWorkspace';

export const NONAME = 'noname';
export const NO_MESSAGE_TEXT = '-';

export const BUTTON_COMPONENT_NAME = 'Button';

export const CARD_COMPONENT_CLASS = 'card';

export const ORIENT_MAP = {
  horizontal: 'horizontal',
  vertical: 'vertical'
} as const satisfies TValuesEqualsKeys<TOrient>;

export const FORM_LABEL = {
  login: 'Логин',
  password: 'Пароль',
  remember: 'Запомнить меня'
} as const;
