<script lang="ts">
  import { page } from '$app/state';

  const idTask = $derived(page.params.idTask);
</script>

<h1>Task {`"${idTask}"`}</h1>

<style lang="postcss"></style>