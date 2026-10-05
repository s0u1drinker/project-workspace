<script lang="ts">
  import { APP_NAME } from "$lib/constants";
  import type { ILogo } from "./Logo.types";

  const { size }: ILogo = $props();

  const classSize = $derived(size && `logo_${size}`);
</script>

<div class={[ 'logo', classSize ]}>
  {APP_NAME}
</div>

<style lang="postcss">
  @import './Logo.postcss';
</style>