<script lang="ts">
  import type { IInputCheckbox } from './Input.types';

  let {
    children,
    checked = $bindable(false),
    label,
    ...props
  }: IInputCheckbox = $props();
</script>

<label class="i-checkbox">
  <input
    type="checkbox"
    bind:checked
    {...props}
  />
  <span>
    {#if label}
      {label}
    {:else}
      {@render children?.()}
    {/if}
  </span>
</label>

<style lang="postcss">
  .i-checkbox {
    display: inline-grid;
    grid-template-columns: auto 1fr;
    align-items: baseline;
    gap: var(--indent-half);
    cursor: pointer;
    user-select: none;
  }
</style>