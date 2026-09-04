<script lang="ts">
  import { APP_NAME } from "$lib/constants";
  import Icon from "$lib/components/ui/Icon";
  import Button from "$lib/components/ui/Button";
</script>

<h1>Welcome to { APP_NAME }</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> <Icon icon="akar-icons:link-out" aria-hidden="true" aria-label="Ссылка" color="purple" /> to read the documentation</p>
<div>
  <Button
    color="secondary"
    aria-label="Morning"
    data-highlight="true"
    text="Hello!"
  />
  <Button
    color="danger"
    variant="outline"
    aria-label="Afternoon"
    data-error="no"
    iconLeft="local:close"
  />

  <Button
    variant="plain"
    aria-label="Evening"
    data-verify="today"
    text="Warning"
    iconLeft="local:warning"
    iconRight="local:warning"
  />
    <Button
    color="success"
    variant="plain"
    aria-label="Evening"
    data-verify="today"
    text="Warning"
    iconLeft="local:warning"
    iconRight="local:warning"
  />
    <Button
    color="danger"
    variant="plain"
    aria-label="Evening"
    data-verify="today"
    text="Warning"
    iconLeft="local:warning"
    iconRight="local:warning"
  />
    <Button
    color="warning"
    variant="plain"
    aria-label="Evening"
    data-verify="today"
    text="Warning"
    iconLeft="local:warning"
    iconRight="local:warning"
  />
    <Button
    color="gray"
    variant="plain"
    aria-label="Evening"
    data-verify="today"
    text="Warning"
    iconLeft="local:warning"
    iconRight="local:warning"
  />
    <Button
    color="secondary"
    variant="plain"
    aria-label="Evening"
    data-verify="today"
    text="Warning"
    iconLeft="local:warning"
    iconRight="local:warning"
  />

  <Button>
    <Icon icon="svg-spinners:eclipse" />
    Content button
  </Button>
</div>

<style lang="postcss">
  p {
    color: green;

    @media (--viewport-lg) {
      color: red;
    }
  }
  div {
    display: flex;
    gap: 1rem;
  }
</style>