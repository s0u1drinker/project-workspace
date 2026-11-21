<script lang="ts">
  import { DashboardBlockProjects, DashboardBlockTasks } from "./blocks";
</script>

<div class="d-grid">
  <DashboardBlockTasks />
  <DashboardBlockProjects />
</div>

<style lang="postcss">
.d-grid {
  display: flex;
  gap: var(--app-padding);
  flex-wrap: wrap;
  margin-top: calc(var(--app-padding) * 2);
}
</style>