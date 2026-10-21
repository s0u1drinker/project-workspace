<script lang="ts">
  import { resolve } from "$app/paths";

  const PROJECT_LIST = ['nuxt-runner', 'react-bookshelf', 'ProjectWorkspace'];
</script>

<h1>Projects</h1>

<ul>
  {#each PROJECT_LIST as item (item)}
    <li>
      <a href={resolve(`/project/${item}`)}>{item}</a>
    </li>
  {/each}
</ul>

<style lang="postcss"></style>