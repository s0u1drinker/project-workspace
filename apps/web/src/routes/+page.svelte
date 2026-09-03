<script lang="ts">
  import { APP_NAME } from "$lib/constants";
  import Icon from "$lib/components/ui/Icon";
  import Button from "$lib/components/ui/Button";
</script>

<h1>Welcome to { APP_NAME }</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> <Icon icon="akar-icons:link-out" aria-hidden="true" aria-label="Ссылка" color="purple" /> to read the documentation</p>
<Button
  color="secondary"
  variant="outline"
  aria-label="Morning"
  data-highlight="true"
/>

<style lang="postcss">
  p {
    color: green;

    @media (--viewport-lg) {
      color: red;
    }
  }
</style>