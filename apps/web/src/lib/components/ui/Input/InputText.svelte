<script lang="ts">
  import { INPUT_PLACEHOLDER } from "$lib/constants";
  import InputWrapper from "./InputWrapper.svelte";
  import type { IInputText } from "./Input.types";

  let {
    value = $bindable(),
    placeholder = INPUT_PLACEHOLDER.text,
    icon,
    ...props
  }: IInputText = $props();
</script>

<InputWrapper {icon}>
  <input
    type="text"
    {placeholder}
    bind:value={value}
    {...props}
  />
</InputWrapper>

<style lang="postcss">
  @import './Input.postcss';
</style>
