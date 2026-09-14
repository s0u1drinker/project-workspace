<script lang="ts">
  import type { IErrorText } from "./ErrorText.types";

  const { text }: IErrorText = $props();
</script>

<p class="error-text">{ text }</p>

<style lang="postcss">
  .error-text {
    color: var(--color-danger);
  }
</style>