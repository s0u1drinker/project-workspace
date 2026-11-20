<script lang="ts">
  import { DashboardBlock as Block } from "$components";
</script>

<div class="d-grid">
  <Block>
    {#snippet header()}
      6
    {/snippet}
    {#snippet body()}
      Задач  в работе
    {/snippet}
  </Block>
  <Block>
    {#snippet header()}
      3
    {/snippet}
    {#snippet body()}
      Проекта
    {/snippet}
  </Block>
</div>

<style lang="postcss">
.d-grid {
  display: flex;
  gap: var(--app-padding);
  flex-wrap: wrap;
  margin-top: calc(var(--app-padding) * 2);
}
</style>