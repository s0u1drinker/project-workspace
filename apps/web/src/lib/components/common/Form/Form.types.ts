import type { Snippet } from 'svelte';

export interface IForm {
  className?: string;
  header?: Snippet;
  body?: Snippet;
  message?: Snippet;
  buttons?: Snippet;
  extra?: Snippet;
}

export interface IFormField {
  children: Snippet;
}
