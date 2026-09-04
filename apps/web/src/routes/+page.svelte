<script lang="ts">
  import { APP_NAME } from "$lib/constants";
  import Icon from "$lib/components/ui/Icon";
  import Input from "$lib/components/ui/Input";
</script>

<h1>Welcome to { APP_NAME }</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> <Icon icon="akar-icons:link-out" aria-hidden="true" aria-label="Ссылка" color="purple" /> to read the documentation</p>
<Input
  type="text"
  value=""
  aria-label=""
/>

<style lang="postcss">
  p {
    color: green;

    @media (--viewport-lg) {
      color: red;
    }
  }
</style>