<script lang="ts">
  import DashboardBlockList from "./DashboardBlockList.svelte";
  import { projects } from '$stores';
</script>

{#snippet projectItem(project: typeof projects[number])}
  <div class="project-progress">
    <strong>{project.name}</strong>
    <progress value={project.description.length + project.name.length} max="100"></progress>
    <span>{project.description.length + project.name.length}%</span>
  </div>
{/snippet}

<div class="d-block-projects">
  <DashboardBlockList
    headerText='Мои проекты'
    icon='local:projects'
    link='/'
    linkText='Все проекты'
    items={projects}
    listItem={projectItem}
  />
</div>

<style lang="postcss">
.d-block-projects {
  grid-area: projects;
}
</style>