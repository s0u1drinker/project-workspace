import type { AriaAttributes } from 'svelte/elements';

export type TErrorMap = Record<string, string>;

export type DataAttributes = {
  [key: `data-${string}`]: string | undefined;
};

export type TAccessibilityProps = AriaAttributes & DataAttributes;
