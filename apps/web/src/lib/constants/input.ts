import type { TInputTypeMap } from '$lib/components/ui/Input';

/** Список типов Input. */
export const INPUT_TYPE = {
  text: 'text',
  password: 'password',
  number: 'number',
  email: 'email',
  search: 'search',
  checkbox: 'checkbox'
} as const satisfies TInputTypeMap;

/** Список дефолтных placeholder. */
export const INPUT_PLACEHOLDER = {
  text: 'Введите значение',
  password: 'Введите пароль',
  email: 'Введите e-mail',
  search: 'Что ищете?',
  login: 'Введите логин'
} as const;
