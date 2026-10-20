<script lang="ts">
  import { APP_NAME } from "$lib/constants";
  import { Icon } from '$components';
  import type { ILogo } from "./Logo.types";

  const { size }: ILogo = $props();

  const classSize = $derived(size && `logo_${size}`);

  const logoText = $derived(APP_NAME.split('s'));
</script>

<div class={[ 'logo', classSize ]}>
  {logoText[0]}
  <Icon
    class="logo__icon"
    icon="local:logo"
    size="1.5rem"
  />
  {logoText[1]}
</div>

<style lang="postcss">
  @import './Logo.postcss';
</style>