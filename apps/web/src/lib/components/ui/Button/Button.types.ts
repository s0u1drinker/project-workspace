import type { Snippet } from 'svelte';
import type { TIconName, TAccessibilityProps } from '$lib/types';

type ButtonType = 'button' | 'submit' | 'reset';
type ButtonColor = 'primary' | 'secondary' | 'danger' | 'success' | 'gray' | 'warning';
type ButtonVariant = 'default' | 'plain' | 'outline';
type ButtonSize = 'small' | 'large';

export interface IButton extends TAccessibilityProps {
  children?: Snippet;
  type?: ButtonType;
  className?: string;
  color?: ButtonColor;
  variant?: ButtonVariant;
  disabled?: boolean;
  rounded?: boolean;
  elevated?: boolean;
  circle?: boolean;
  iconLeft?: TIconName;
  iconRight?: TIconName;
  text?: string;
  size?: ButtonSize;
  iconColor?: string;
  onClick?: () => unknown;
}
