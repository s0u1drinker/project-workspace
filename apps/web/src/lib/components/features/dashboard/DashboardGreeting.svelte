<script lang="ts">
  import { onMount } from 'svelte';
  import { GREETINGS, MESSAGES } from './constants';

  let greeting = $state('');
  let message = $state('');

  const getRandomItemFrom = <T>(arr: readonly T[]): T =>
    arr[Math.floor(Math.random() * arr.length)];

  onMount(() => {
    greeting = getRandomItemFrom(GREETINGS);
    message = getRandomItemFrom(MESSAGES);
  });
</script>

<h1>{ greeting }</h1>
<p>{ message }</p>

<style lang="postcss"></style>