<script lang="ts">
  import Icon from "../Icon";
  import type { IButton } from "./Button.types";

  const {
    type = "button",
    color = "primary",
    variant = "default",
    rounded,
    elevated,
    iconLeft,
    iconRight,
    iconColor,
    text,
    ...props
  }: IButton = $props();
  const buttonColor = $derived(color !== 'primary' ? `button_${color}` : null);
  const buttonVariant = $derived(variant !== 'default' ? `button_${variant}` : null);
  const buttonRounded = $derived(rounded && 'button_rounded');
  const buttonElevated = $derived(elevated && 'button_elevated');
</script>

<button
  class={["button", buttonColor, buttonVariant, buttonRounded, buttonElevated]}
  type={type}
  disabled={props.disabled}
  {...props}
>
  {#if iconLeft}
    <Icon
      icon={iconLeft}
      color={iconColor}
      aria-hidden="true"
    />
  {/if}
  
  <span>
    { text }
  </span>

  {#if iconRight}
    <Icon
      icon={iconRight}
      color={iconColor}
      aria-hidden="true"
    />
  {/if}
</button>

<style lang="postcss">
  @import "./Button.postcss";
</style>