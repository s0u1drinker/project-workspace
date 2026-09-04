<script lang="ts">
  import { INPUT_DEFAULT_PLACEHOLDER } from "$lib/constants";
  import type { IInputText } from "./Input.types";

  let {
    value = $bindable(),
    placeholder = INPUT_DEFAULT_PLACEHOLDER,
    ...props
  }: IInputText = $props();
</script>

<input
  class="input"
  type="text"
  {placeholder}
  bind:value={value}
  {...props}
/>

<style lang="postcss">
  @import './Input.postcss';
</style>
