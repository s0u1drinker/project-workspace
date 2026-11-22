<script lang="ts">
  import {
    DashboardBlockStat,
    DashboardBlockNearestTasks,
    DashboardBlockLastChanges,
    DashboardBlockProjects
  } from "./blocks";
</script>

<div class="d-grid">
  <DashboardBlockStat />
  <DashboardBlockNearestTasks />
  <DashboardBlockLastChanges />
  <DashboardBlockProjects />
</div>

<style lang="postcss">
.d-grid {
  display: grid;
  gap: var(--app-padding);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-areas:
    "stat stat stat"
    "tasks events projects";
  align-items: stretch;
  margin-top: calc(var(--app-padding) * 2);
}
</style>