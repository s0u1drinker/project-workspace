<script lang="ts">
  import { APP_NAME } from "$lib/constants";
  import Icon from "$lib/components/ui/Icon";
</script>

<h1>Welcome to { APP_NAME }</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> <Icon icon="akar-icons:link-out" aria-hidden="true" aria-label="Ссылка" color="purple" /> to read the documentation</p>
<div class="block">
  <Icon color="blue" icon="local:close" aria-label="Кактус" aria-hidden="true" />
  <span>Some text</span>
</div>
<Icon icon="local:email" width="2rem" height="2rem" color="gray" />
<Icon icon="local:logo" width="2rem" height="2rem" />
<Icon icon="local:lock" width="2rem" height="2rem" />
<Icon icon="local:eye-open" width="2rem" height="2rem" />
<Icon icon="local:eye-slashed" width="2rem" height="2rem" />
<Icon icon="local:login" width="4rem" height="1rem" />
<Icon icon="local:warning" size="2rem" color="red" aria-hidden="true" data-highlight="true" />
<Icon icon="carbon:warning-alt" width="3rem" height="1rem" color="var(--color-warning)" data-highlight="true" aria-hidden="true" />

<style lang="postcss">
  p {
    color: green;

    @media (--viewport-lg) {
      color: red;
    }
  }

.block {
  color: salmon;
}
</style>