<script lang="ts">
  import { APP_NAME } from "$lib/constants";
  import Icon from "$lib/components/ui/Icon";
</script>

<h1>Welcome to { APP_NAME }</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> <Icon aria-hidden="true" aria-label="Кактус2" color="purple" iconName="akar-icons:link-out" /> to read the documentation</p>
<div class="block">
  <Icon color="blue" iconName="local:close" aria-label="Кактус" />
  <span>Some text</span>
</div>
<Icon iconName="local:email" width="2rem" height="2rem" color="gray" />
<Icon iconName="local:logo" width="2rem" height="2rem" />
<Icon iconName="local:lock" width="2rem" height="2rem" />

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