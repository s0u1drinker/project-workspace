<script lang="ts">
  import type { IForm } from "./Form.types";

  const { children }: IForm = $props();
</script>

<form class="form">
  {@render children()}
</form>

<style lang="postcss">
  @import './Form.postcss';
</style>