import type { TErrorMap } from '$lib/types';

export const ICON_DELIMITER = ':';
export const LOCAL_ICON_PREFIX = 'local';
export const ICON_COMPONENT_NAME = 'Icon';
export const ICON_ERRORS = {
  wrongName: 'Не удалось получить имя иконки',
  wrongPrefix: 'Не удалось получить префикс иконки'
} as const satisfies TErrorMap;
