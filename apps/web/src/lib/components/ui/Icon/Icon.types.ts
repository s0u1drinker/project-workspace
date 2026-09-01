import type { SVGAttributes } from 'svelte/elements';
import type { TIconName } from '$lib/types';

export interface IIcon extends SVGAttributes<SVGSVGElement> {
  iconName: TIconName;
  color?: string;
}
