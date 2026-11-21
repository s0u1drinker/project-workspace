<script lang="ts">
  import DashboardGreeting from "./DashboardGreeting.svelte";
  import DashboardGrid from "./DashboardGrid.svelte";
</script>

<div class="dashboard">
  <DashboardGreeting />
  <DashboardGrid />
</div>

<style lang="postcss">
.dashboard {
  display: flex;
  flex-direction: column;
}
</style>