<script lang="ts">
  import { ORIENT_MAP } from "$lib/constants";
  import type { IField } from "./Field.types";

  const {
    children,
    orient  = ORIENT_MAP.vertical,
    tag = 'div'
  }: IField = $props();

  const isHorizontalOrient = $derived(orient === ORIENT_MAP.horizontal);
  const horizontalClass = $derived(isHorizontalOrient && `field_${ORIENT_MAP.horizontal}`);
  const className = $derived(['field', horizontalClass]);
</script>

<svelte:element this={tag} class={className}>
  {@render children()}
</svelte:element>

<style lang="postcss">
  @import './Field.postcss';
</style>