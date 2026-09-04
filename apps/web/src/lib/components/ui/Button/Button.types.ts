import type { Snippet } from 'svelte';
import type { TIconName, TAccessibilityProps } from '$lib/types';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonColor = 'primary' | 'secondary' | 'danger' | 'success' | 'gray' | 'warning';
type ButtonVariant = 'default' | 'plain' | 'outline';

export interface IButton extends TAccessibilityProps {
  children?: Snippet;
  type?: ButtonType;
  color?: ButtonColor;
  variant?: ButtonVariant;
  disabled?: boolean;
  rounded?: boolean;
  elevated?: boolean;
  iconLeft?: TIconName;
  iconRight?: TIconName;
  text?: string;
  iconColor?: string;
}
