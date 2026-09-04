import type { TInputTypeMap, TInputNameMap } from '$lib/components/ui/Input';

/** Список компонентов Input. */
export const INPUT_COMPONENT_NAMES = {
  text: 'InputText',
  password: 'InputPassword',
  number: 'InputNumber',
  email: 'InputEmail',
  search: 'InputSearch'
} as const satisfies TInputNameMap;

/** Список типов Input. */
export const INPUT_TYPES = {
  text: 'text',
  password: 'password',
  number: 'number',
  email: 'email',
  search: 'search'
} as const satisfies TInputTypeMap;

export const INPUT_DEFAULT_PLACEHOLDER = 'Введите значение';
