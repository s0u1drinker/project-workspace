<script lang="ts">
  import type { IAvatar } from "./Avatar.types";

  const { img = null }: IAvatar = $props();
</script>

{#if img}
  <img class="avatar avatar_img" src={img} alt="Аватар">
{:else}
  <span class="avatar">Ava</span>
{/if}

<style lang="postcss">
  @import './Avatar.postcss';
</style>