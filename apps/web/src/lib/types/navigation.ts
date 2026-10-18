import type { TIconName } from './icon';

type TPath = `/${string}`;

interface NavigationProps {
  path: TPath;
  title: string;
  icon: TIconName;
}

export type TPathName = Record<string, TPath>;

export type TNavigation = Record<string, NavigationProps>;
