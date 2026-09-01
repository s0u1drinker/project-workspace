<script lang="ts">
  import IconifyIcon from '@iconify/svelte';
  import { getIconData, isIconLocal, isValidIconName } from '$lib/utils';
  import type { IIcon } from './Icon.types';
  
  let {
    iconName,
    width = '1rem',
    height = '1rem',
    color,
    class: className = '',
    ...restProps
  }: IIcon = $props();
  let iconLocal = $derived(isIconLocal(iconName));
  let iconData = $derived(iconLocal ? getIconData(iconName) : null);
</script>

{#if isValidIconName(iconName)}
  {#if !iconLocal}
    <IconifyIcon
      icon={iconName}
      class={className}
      width={width}
      height={height}
      color={color}
    />
  {:else if iconData}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={iconData.viewBox}
      class={className}
      width={width}
      height={height}
      color={color}
      {...restProps}
    >
      <!-- eslint-disable-next-line svelte/no-at-html-tags -->
      {@html iconData.innerHtml}
    </svg>
  {/if}
{/if}

<style lang="postcss"></style>