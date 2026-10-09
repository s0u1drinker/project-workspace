type TPath = `/${string}`;

interface NavigationProps {
  path: TPath;
  title: string;
}

export type TPathName = Record<string, TPath>;

export type TNavigation = Record<string, NavigationProps>;
