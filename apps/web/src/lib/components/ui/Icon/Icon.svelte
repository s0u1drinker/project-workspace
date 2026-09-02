<script lang="ts">
  import IconifyIcon from '@iconify/svelte';
  import { ICON_DEFAULT_SIZE } from '$lib/constants';
  import { getIconData, isIconLocal, isValidIconName } from '$lib/utils';
  import type { TIcon } from './Icon.types';
  
  let props: TIcon = $props();
  let iconLocal = $derived(isIconLocal(props));
  let iconData = $derived(iconLocal ? getIconData(props.icon) : null);
  let iconWidth = $derived(props.size || props.width || ICON_DEFAULT_SIZE);
  let iconHeight = $derived(props.size || props.height || ICON_DEFAULT_SIZE);
</script>

{#if isValidIconName(props.icon)}
  {#if isIconLocal(props)}
    {#if iconData}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={iconData.viewBox}
        {...props}
        width={iconWidth}
        height={iconHeight}
      >
        <!-- eslint-disable-next-line svelte/no-at-html-tags -->
        {@html iconData.innerHtml}
      </svg>
    {/if}
  {:else}
    <IconifyIcon
      {...props}
      width={iconWidth}
      height={iconHeight}
    />
  {/if}
{/if}

<style lang="postcss"></style>