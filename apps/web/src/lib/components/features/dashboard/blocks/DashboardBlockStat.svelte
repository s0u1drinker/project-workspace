<script lang="ts">
  import DashboardBlockWrapper from "./DashboardBlockWrapper.svelte";
</script>
  
<div class="d-block-stat">
  <DashboardBlockWrapper>
    {#snippet header()}
      Статистика по проекту
    {/snippet}
    {#snippet body()}
      Интересное о проекте
    {/snippet}
  </DashboardBlockWrapper>
</div>

<style lang="postcss">
.d-block-stat {
  grid-area: stat;
}
</style>