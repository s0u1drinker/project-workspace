<script lang="ts">
  import type { IDashboardBlock } from './types';

  const { header, body }: IDashboardBlock = $props();
</script>

<div class="d-block">
  {#if header}
    <div class="d-block__header">
      {@render header()}
    </div>
  {/if}
  {#if body}
    <div class="d-block__body">
      {@render body()}
    </div>
  {/if}
</div>

<style lang="postcss">
.d-block {
  border: var(--border-thick) var(--color-black);
  padding: var(--indent);
  border-radius: var(--radius);
}
</style>