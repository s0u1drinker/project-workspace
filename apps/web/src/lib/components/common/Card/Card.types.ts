import type { Snippet } from 'svelte';

type CardVariant = 'glass' | 'login';

export interface ICard {
  children: Snippet;
  variant?: CardVariant;
}
