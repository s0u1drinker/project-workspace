<script lang="ts">
  import { onMount } from 'svelte';
  import { GREETINGS, MESSAGES } from './constants';
  import { getRandomItemFromArray } from '$lib/utils';

  let greeting: string | undefined = $state(undefined);
  let message: string | undefined = $state(undefined);

  onMount(() => {
    greeting = getRandomItemFromArray(GREETINGS);
    message = getRandomItemFromArray(MESSAGES);
  });
</script>

{#if greeting}
  <h1>{ greeting }</h1>
{/if}
{#if message}
  <p>{ message }</p>
{/if}

<style lang="postcss"></style>