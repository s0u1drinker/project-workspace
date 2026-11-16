import { getRandomNumber } from './number';

/**
 * Возвращает случайный элемент массива.
 * @param arr Массив.
 * @returns Случайный элемент.
 */
export function getRandomItemFromArray<T>(arr: readonly T[]): T | undefined {
  return arr.length ? arr[getRandomNumber(0, arr.length - 1)] : undefined;
}
