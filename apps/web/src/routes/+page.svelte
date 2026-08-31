<script lang="ts">
  import { APP_NAME } from "$lib/constants";
</script>

<h1>Welcome to { APP_NAME }</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<style lang="postcss">
  p {
    color: green;

    @media (--viewport-lg) {
      color: red;
    }
  }
</style>