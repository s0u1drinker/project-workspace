<script lang="ts">
  import { page } from '$app/state';
  import { ARIA_LABEL } from '$constants';

  const params: string[] = $derived.by(() => {
    if (page.params?.idProject) {
      return [ page.params.idProject ];
    }

    return [];
  });
</script>

<nav
  class="breadcrumbs"
  aria-label={ARIA_LABEL.breadcrumbs}
>
  {#each params as param, key (key)}
    <div class="breadcrumbs__item">
      <span class="breadcrumbs__delimiter">/</span>
      <span class="breadcrumbs__current-page">{ param }</span>
    </div>
  {/each}
</nav>

<style lang="postcss">
  @import './Breadcrumbs.postcss';
</style>
