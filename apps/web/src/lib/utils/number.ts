/**
 * Возвращает случайное число от min до max включительно.
 * @param min Минимальное значение.
 * @param max Максимальное значение.
 * @returns Случайное число.
 */
export function getRandomNumber(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
