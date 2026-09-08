import type { Snippet } from 'svelte';
import type { HTMLInputAttributes } from 'svelte/elements';
import type { TAccessibilityProps, TValuesEqualsKeys, TIconName } from '$lib/types';

type InputType = 'text' | 'password' | 'number' | 'email' | 'search';

export type TInputTypeMap = TValuesEqualsKeys<InputType>;

export type TInputNameMap = {
  [K in InputType]: `Input${Capitalize<K>}`;
};

export type TInputIconMap = Record<string, TIconName>;

interface IInputBase extends TAccessibilityProps {
  id?: string;
  name?: string;
  disabled?: boolean;
}

interface IInputForText {
  value: string;
  placeholder?: string;
  readonly?: boolean;
}

interface IInputWithIcon {
  icon?: TIconName;
}

export interface IInputWrapper extends IInputWithIcon {
  children: Snippet;
  className?: string;
}

export interface IInputText extends IInputBase, IInputForText, IInputWithIcon {
  maxLength?: number;
  minLength?: number;
}

export interface IInputPassword extends IInputBase, IInputForText, IInputWithIcon {
  autocomplete?: HTMLInputAttributes['autocomplete'];
}

export interface IInputCheckbox extends IInputBase {
  checked: boolean;
  label?: string;
  children?: Snippet;
}
