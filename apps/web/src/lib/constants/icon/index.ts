import { LOCAL_ICONS } from './local';
import { ICONIFY_ICON_MAP } from './iconify';
import { getLocalIconName } from '$lib/utils';
import type { TErrorMap } from '$lib/types';

export const ICON_DELIMITER = ':';
export const ICON_LOCAL_PREFIX = 'local';
export const ICON_DEFAULT_SIZE = '1rem';
export const ICON_ERRORS = {
  wrongName: 'Не удалось получить имя иконки',
  wrongPrefix: 'Не удалось получить префикс иконки'
} as const satisfies TErrorMap;

export { LOCAL_ICONS, ICONIFY_ICON_MAP };

export const ICON_MAP = {
  local: getLocalIconName,
  iconify: ICONIFY_ICON_MAP
} as const;
