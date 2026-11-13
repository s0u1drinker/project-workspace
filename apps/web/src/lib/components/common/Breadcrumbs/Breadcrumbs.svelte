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
  --brd-gap: 0;
  --brd-direction: column;
  --brd-f-size: 1.25rem;

  display: flex;
  flex-direction: var(--brd-direction);
  gap: var(--brd-gap);
  margin-left: var(--brd-gap);
  font-size: var(--brd-f-size);

  @media (--viewport-sm) {
    --brd-direction: row;
    --brd-gap: var(--indent-half);
  }

  &__item {
    display: flex;
    gap: var(--indent-half);
  }

  &__delimiter {
    color: var(--color-gray);
    font-weight: bold;
  }
}
</style>
