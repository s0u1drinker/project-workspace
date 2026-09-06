import { NONAME, NO_MESSAGE_TEXT } from '$lib/constants';

/**
 * Выводит в консоль предупреждение с именем компонента.
 * @param name Имя компонента.
 * @param text Текст предупреждения.
 */
export function showComponentWarning(name: string, text: string): void {
  const componentName = name || NONAME;
  const warningText = text || NO_MESSAGE_TEXT;

  console.warn(`[${componentName}]: ${warningText}.`);
}
