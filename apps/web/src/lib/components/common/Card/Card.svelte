<script lang="ts">
  import { CARD_COMPONENT_CLASS } from "$lib/constants";
  import type { ICard } from "./Card.types";

  const { children, variant }: ICard = $props();
  const cardVariantClass = $derived(variant ? `${CARD_COMPONENT_CLASS}_${variant}` : null);
</script>

<div class={[CARD_COMPONENT_CLASS, cardVariantClass]}>
  {@render children()}
</div>

<style lang="postcss">
  @import './Card.postcss';
</style>