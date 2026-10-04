import type { Snippet } from 'svelte';
import type { HTMLFormAttributes } from 'svelte/elements';

export interface IForm {
  className?: string;
  method?: HTMLFormAttributes['method'];
  action?: string;
  header?: Snippet;
  body?: Snippet;
  message?: Snippet;
  buttons?: Snippet;
  extra?: Snippet;
}
