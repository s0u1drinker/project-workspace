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
  value: string;
  placeholder?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
  readonly?: boolean;
}

interface IInputWithIcon {
  icon?: TIconName;
}

export interface IInputWrapper extends IInputWithIcon {
  children: Snippet;
  className?: string;
}

export interface IInputText extends IInputBase, IInputWithIcon {
  maxLength?: number;
  minLength?: number;
}

export interface IInputPassword extends IInputBase, IInputWithIcon {
  autocomplete?: HTMLInputAttributes['autocomplete'];
}
