import {
  ICON_LOCAL_PREFIX,
  ICON_DELIMITER,
  ICON_COMPONENT_NAME,
  ICON_ERRORS
} from '$lib/constants';
import { showComponentWarning } from './app';
import type { TIconName, TIconData, TIconRegistry, TSplittedIconName } from '$lib/types';
import type { TIcon, TIconLocal } from '$lib/components/ui/Icon';

const icons: TIconRegistry = {};

/**
 * Проверяет является ли иконка локальной.
 * @param iconName Имя иконки.
 * @returns Результат проверки.
 */
export function isIconLocal(icon: TIcon): icon is TIconLocal {
  return splittedIconName(icon.icon).prefix === ICON_LOCAL_PREFIX;
}

/**
 * Проверяет на валидность имя иконки.
 * @param iconName Имя иконки.
 * @returns Результат проверки.
 */
export function isValidIconName(iconName: TIconName): boolean {
  const { prefix, name } = splittedIconName(iconName);

  if (!name) {
    showIconWarning(ICON_ERRORS.wrongName);

    return false;
  }

  if (!prefix) {
    showIconWarning(ICON_ERRORS.wrongPrefix);

    return false;
  }

  return true;
}

/**
 * Возвращает подготовленную SVG-строку по имени иконки, если такая существует.
 * @param iconName Имя иконки.
 * @returns Иконка или null.
 */
export function getIconData(iconName: TIconName): TIconData | null {
  if (!isValidIconName(iconName)) {
    return null;
  }

  if (!Object.keys(icons).length) {
    createIconRegistry();
  }

  const name = splittedIconName(iconName).name;

  if (!name) {
    return null;
  }

  const icon = icons?.[name];

  return icon ? parseSvg(icon) : null;
}

/**
 * Выводит в консоль предупреждение.
 * @param text Текст предупреждения.
 */
function showIconWarning(text: string) {
  showComponentWarning(ICON_COMPONENT_NAME, text);
}

/**
 * Делит имя иконки на префикс и имя.
 * @param iconName Имя иконки.
 * @returns Объект из префикса и имени.
 */
function splittedIconName(iconName: TIconName): TSplittedIconName {
  const [prefix, name] = iconName.split(ICON_DELIMITER);

  return { prefix, name };
}

/**
 * У переданной в виде строки SVG-иконки вырезает содержимое между тегами svg и параметр viewBox.
 * @param rawString Строка с SVG-иконкой.
 * @returns Параметр ViewBox и подготовленную иконку.
 */
function parseSvg(rawString: string): TIconData {
  const viewBoxMatch = rawString.match(/viewBox="([^"]+)"/);
  const viewBox = viewBoxMatch ? viewBoxMatch[1] : '0 0 24 24';
  const innerMatch = rawString.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);

  if (!innerMatch) return null;

  const innerHtml = innerMatch[1].trim();

  return { viewBox, innerHtml };
}

/**
 * Создает регистр локальных иконок.
 */
function createIconRegistry(): void {
  const localIcons = import.meta.glob('$lib/assets/icons/*.svg', {
    eager: true,
    query: '?raw',
    import: 'default'
  });

  for (const data of Object.entries(localIcons)) {
    const name = data[0].split('/').pop()?.replace('.svg', '');

    if (name) {
      icons[name] = data[1];
    }
  }
}
