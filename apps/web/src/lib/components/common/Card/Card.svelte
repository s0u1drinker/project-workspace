<script lang="ts">
  import { COMPONENT } from "$lib/constants";
  import type { ICard } from "./Card.types";

  const { children, variant }: ICard = $props();
  const cardVariantClass = $derived(variant ? `${COMPONENT.CLASS.card}_${variant}` : null);
</script>

<div class={[COMPONENT.CLASS.card, cardVariantClass]}>
  {@render children()}
</div>

<style lang="postcss">
  @import './Card.postcss';
</style>