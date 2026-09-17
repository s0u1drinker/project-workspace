<script lang="ts">
  import type { IInputCheckbox } from './Input.types';

  let {
    children,
    checked = $bindable(false),
    label,
    ...props
  }: IInputCheckbox = $props();
</script>

<label class="input_checkbox">
  <input
    type="checkbox"
    class="input_checkbox__checkbox"
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
  @import './Input.postcss';
</style>