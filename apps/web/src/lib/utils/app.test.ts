import { showComponentWarning } from './app';
import { COMPONENT, ICON_ERRORS, NONAME, NO_MESSAGE_TEXT } from '$lib/constants';
import type { MockInstance } from 'vitest';

describe('Функция showComponentWarning:', () => {
  let warningSpy: MockInstance;

  beforeEach(() => {
    warningSpy = vi.spyOn(console, 'warn').mockImplementation(() => {});
  });

  afterEach(() => {
    warningSpy.mockRestore();
  });

  it('- выводит в консоль предупреждение с именем компонента и текстом', () => {
    showComponentWarning(COMPONENT.NAME.icon, ICON_ERRORS.wrongName);

    expect(warningSpy).toHaveBeenCalledWith(`[${COMPONENT.NAME.icon}]: ${ICON_ERRORS.wrongName}.`);
  });

  it(`- если не передано имя компонента, то выводит "${NONAME}"`, () => {
    showComponentWarning('', ICON_ERRORS.wrongPrefix);

    expect(warningSpy).toHaveBeenCalledWith(`[${NONAME}]: ${ICON_ERRORS.wrongPrefix}.`);
  });

  it(`- если не передан текст предупреждения, то выводит "${NO_MESSAGE_TEXT}"`, () => {
    showComponentWarning(COMPONENT.NAME.button, '');

    expect(warningSpy).toHaveBeenCalledWith(`[${COMPONENT.NAME.button}]: ${NO_MESSAGE_TEXT}.`);
  });

  it('- если все параметры функции являются falsy-значениями, то выводит значения по умолчанию', () => {
    // @ts-expect-error Имитация falsy-значений при вызове функции.
    showComponentWarning(null, undefined);

    expect(warningSpy).toHaveBeenCalledWith(`[${NONAME}]: ${NO_MESSAGE_TEXT}.`);
  });
});
