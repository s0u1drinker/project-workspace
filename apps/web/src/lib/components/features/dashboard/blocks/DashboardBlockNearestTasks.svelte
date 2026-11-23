<script lang="ts">
  import DashboardBlockList from "./DashboardBlockList.svelte";
  import { tasks } from '$stores';
</script>

{#snippet taskItem(task: typeof tasks[number])}
  <div class="task-list">
    <div>{task.type}</div>
    <div>{task.subject} ({task.idProject})</div>
    <div>{task.deadline}</div>
  </div>
{/snippet}

<div class="d-block-tasks">
  <DashboardBlockList
    headerText='Ближайшие задачи'
    icon='local:tasks'
    link='/'
    linkText='Все задачи'
    items={tasks}
    listItem={taskItem}
  />
</div>

<style lang="postcss">
.d-block-tasks {
  grid-area: tasks;
}
</style>