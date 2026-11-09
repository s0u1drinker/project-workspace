import type { Pathname } from '$app/types';
import type { TIconName } from './icon';

type TPath = Pathname;

interface NavigationProps {
  path: TPath;
  title: string;
  icon: TIconName;
}

export type TPathName = Record<string, TPath>;

export type TNavigation = Record<string, NavigationProps>;
