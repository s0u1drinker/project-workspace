/**
 * Выводит в консоль предупреждение с именем компонента.
 * @param componentName Имя компонента.
 * @param text Текст предупреждения.
 */
export function showWarning(componentName: string, text: string): void {
  console.warn(`[${componentName || ''}]: ${text}.`);
}
