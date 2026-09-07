<script lang="ts">
  import Icon from "../Icon";
  import type { IInputWrapper } from "./Input.types";

  let {
    children,
    className,
    icon
  }: IInputWrapper = $props();
  const inputIcon = $derived(icon && 'input_icon');
  const classes = $derived(['input', className, inputIcon]);
</script>

<div class={classes}>
  {#if icon}
    <Icon {icon} />
  {/if}
  {@render children()}
</div>

<style lang="postcss">
  @import './Input.postcss';
</style>
