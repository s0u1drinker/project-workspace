<script lang="ts">
  import type { IDashboardBlockWrapper } from '../types';

  const { header, body, className = '' }: IDashboardBlockWrapper = $props();
  const classList = $derived([ 'd-block', className ]);
</script>

<div class={classList}>
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
  padding: var(--app-padding);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  background-color: var(--color-white);
}
</style>