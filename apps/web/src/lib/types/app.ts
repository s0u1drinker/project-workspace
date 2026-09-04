import type { AriaAttributes } from 'svelte/elements';

/** Тип для списка ошибок. */
export type TErrorMap = Record<string, string>;

/** Data-атрибуты. */
export type DataAttributes = {
  [key: `data-${string}`]: string | undefined;
};

/** Тип для доступности: aria-атрибуты + data-атрибуты. */
export type TAccessibilityProps = AriaAttributes & DataAttributes;

/** Список значений, в которых "Имя свойства" === "Значение". */
export type TValuesEqualsKeys<K extends PropertyKey> = {
  [P in K]: P;
};
