import type { Snippet } from 'svelte';

type CardVariant = 'glass' | 'login' | 'signup';

export interface ICard {
  children: Snippet;
  variant?: CardVariant;
}
