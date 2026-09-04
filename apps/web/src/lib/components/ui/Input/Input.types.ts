import type { TAccessibilityProps, TValuesEqualsKeys } from '$lib/types';

type InputType = 'text' | 'password' | 'number' | 'email' | 'search';

export type TInputTypeMap = TValuesEqualsKeys<InputType>;

export type TInputNameMap = {
  [K in InputType]: `Input${Capitalize<K>}`;
};

export interface IBaseInput extends TAccessibilityProps {
  type: InputType;
  value: string;
  placeholder?: string;
}

export type IInputText = Omit<IBaseInput, 'type'>;
