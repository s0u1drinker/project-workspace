<script lang="ts">
  import DashboardBlockList from "./DashboardBlockList.svelte";

  const tasks = [
    { id: 1, type: 'bug', project: 'Проект Альфа', title: 'Исправить баг с вёрсткой', end: 'Сегодня' },
    { id: 2, type: 'feature', project: 'Проект Бета', title: 'Добавить фильтр в таблицу', end: 'Сегодня' },
    { id: 3, type: 'design', project: 'Проект Альфа', title: 'Придумать дизайн страницы', end: 'Завтра' }
  ];
</script>

{#snippet taskItem(task: typeof tasks[number])}
  <div class="task-list">
    <div>{task.type}</div>
    <div>{task.title} ({task.project})</div>
    <div>{task.end}</div>
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