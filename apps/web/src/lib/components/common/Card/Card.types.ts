import type { Snippet } from 'svelte';

type CardVariant = 'glass';

export interface ICard {
  children: Snippet;
  variant?: CardVariant;
}
