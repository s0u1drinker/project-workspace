import type { Snippet } from 'svelte';
import type { TOrient } from '$lib/types';

type FieldTag = 'div' | 'label';

export interface IField {
  children: Snippet;
  orient?: TOrient;
  tag?: FieldTag;
}
