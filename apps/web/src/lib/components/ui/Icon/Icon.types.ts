import type { SVGAttributes } from 'svelte/elements';
import type { IconifyIconProps } from '@iconify/svelte';
import type { TIconNameLocal, TIconNameIconify, TAccessibilityProps } from '$lib/types';

interface IIconBase {
  class?: string;
  color?: string;
  size?: string | number;
}

export type TIconLocal = IIconBase &
  SVGAttributes<SVGSVGElement> & {
    icon: TIconNameLocal;
  };

export type TIconIconify = IIconBase &
  IconifyIconProps &
  TAccessibilityProps & {
    icon: TIconNameIconify;
  };

export type TIcon = TIconLocal | TIconIconify;
