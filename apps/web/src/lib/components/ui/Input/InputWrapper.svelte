<script lang="ts">
  import { Icon } from '$components';
  import { COMPONENT } from '$lib/constants';
  import type { IInputWrapper } from "./Input.types";

  let {
    children,
    className,
    icon
  }: IInputWrapper = $props();
  const inputIcon = $derived(icon && `${COMPONENT.CLASS.input}_icon`);
  const classes = $derived([COMPONENT.CLASS.input, className, inputIcon]);
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
