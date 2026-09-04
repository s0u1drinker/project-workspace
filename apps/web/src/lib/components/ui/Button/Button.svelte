<script lang="ts">
  import Icon from "../Icon";
  import type { IButton } from "./Button.types";

  const {
    children,
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
  {#if children}
    {@render children()}
  {:else}
    {#if iconLeft}
      <Icon
        icon={iconLeft}
        color={iconColor}
        aria-hidden="true"
      />
    {/if}
    {#if text}
      <span>
        { text }
      </span>
    {/if}
    {#if iconRight}
      <Icon
        icon={iconRight}
        color={iconColor}
        aria-hidden="true"
      />
    {/if}
  {/if}
</button>

<style lang="postcss">
  @import "./Button.postcss";
</style>