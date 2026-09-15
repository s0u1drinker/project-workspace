<script lang="ts">
  import type { IFormField } from "./Form.types";

  const { children }: IFormField = $props();
</script>

<div class="form-field">
  {@render children()}
</div>

<style lang="postcss">
  @import './FormField.postcss';
</style>