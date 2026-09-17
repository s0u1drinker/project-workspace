<script lang="ts">
  import { APP_NAME } from "$lib/constants";
  import { Icon } from "$components";
  import { InputCheckbox } from "$lib/components/ui/Input";

  let boxChecked = $state(true);
</script>

<h1>Welcome to { APP_NAME }</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> <Icon icon="akar-icons:link-out" aria-label="Ссылка" color="purple" /> to read the documentation</p>
<InputCheckbox
  label="Click me"
  bind:checked={boxChecked}
/>

<style lang="postcss">
  p {
    color: green;

    @media (--viewport-lg) {
      color: red;
    }
  }
</style>