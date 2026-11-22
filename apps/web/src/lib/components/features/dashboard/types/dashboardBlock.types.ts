import type { Snippet } from 'svelte';
import type { TIconName, TPath } from '$lib/types';

export interface IDashboardBlockWrapper {
  header: Snippet;
  body: Snippet;
  className?: string;
}

export interface IDashboardBlockList {
  icon: TIconName;
  headerText: string;
  link: TPath;
  linkText: string;
  items: any[];
  listItem: Snippet<[any]>;
}
