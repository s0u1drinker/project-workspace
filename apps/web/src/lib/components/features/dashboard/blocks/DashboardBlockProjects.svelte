<script lang="ts">
  import DashboardBlockList from "./DashboardBlockList.svelte";

  const projectsProgress = [
    { id: 1, name: 'Проект Альфа', progress: 78 },
    { id: 2, name: 'Проект Бета', progress: 56 },
    { id: 3, name: 'Проект Гамма', progress: 34 }
  ];
</script>

{#snippet projectItem(project: typeof projectsProgress[number])}
  <div class="project-progress">
    <strong>{project.name}</strong>
    <progress value={project.progress} max="100"></progress>
    <span>{project.progress}%</span>
  </div>
{/snippet}

<div class="d-block-projects">
  <DashboardBlockList
    headerText='Мои проекты'
    icon='local:projects'
    link='/'
    linkText='Все проекты'
    items={projectsProgress}
    listItem={projectItem}
  />
</div>

<style lang="postcss">
.d-block-projects {
  grid-area: projects;
}
</style>