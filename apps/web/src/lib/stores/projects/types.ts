import type { TIconName } from '$lib/types';

export interface IProject {
  id: string;
  description: string;
  icon: TIconName;
  name: string;
}
