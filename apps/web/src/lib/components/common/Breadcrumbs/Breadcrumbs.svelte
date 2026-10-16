<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from "$app/paths";
  import { ARIA_LABEL } from '$constants';

  const idProject = $derived(page.params?.id);
</script>

<nav
  class="breadcrumbs"
  aria-label={ARIA_LABEL.breadcrumbs}
>
  <span class="breadcrumbs__delimiter">/</span>
  <a href={resolve('/')}>{idProject}</a>
</nav>

<style lang="postcss">
  @import './Breadcrumbs.postcss';
</style>
