<script lang="ts">
  import { page } from '$app/state';

  const greeting = $derived(page.data.greeting);
  const message = $derived(page.data.message);
</script>

{#if greeting}
  <h1>{ greeting }</h1>
{/if}
{#if message}
  <p>{ message }</p>
{/if}

<style lang="postcss"></style>