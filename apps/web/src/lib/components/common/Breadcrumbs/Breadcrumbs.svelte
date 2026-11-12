<script lang="ts">
  import { page } from '$app/state';
  import { ARIA_LABEL } from '$constants';

  const params: string[] = $derived.by(() => {
    if (page.params?.idProject) {
      return [ page.params.idProject ];
    }

    if (page.params?.idTask) {
      return [ 'НазваниеПроекта', page.params.idTask ]
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
.breadcrumbs {
  --gap: var(--indent-half);
  --f-size: 1.25rem;

  display: flex;
  gap: var(--gap);
  margin-left: var(--gap);
  font-size: var(--f-size);

  &__item {
    display: flex;
    gap: var(--gap);
  }

  &__delimiter {
    color: var(--color-gray);
    font-weight: bold;
  }
}
</style>
