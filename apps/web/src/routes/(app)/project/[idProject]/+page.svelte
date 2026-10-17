<script lang="ts">
  import { page } from '$app/state';

  const idProject = $derived(page.params.idProject);
</script>

<h1>Project {`"${idProject}"`}</h1>

<style lang="postcss"></style>