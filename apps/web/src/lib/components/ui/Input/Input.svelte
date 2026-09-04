<script lang="ts">
  import { INPUT_TYPES, INPUT_COMPONENT_NAMES } from "$lib/constants";
  import { showWarning } from "$lib/utils";
  import type { IBaseInput } from "./Input.types";

  const {
    type,
    ...props
  }: IBaseInput = $props();
  const isValidType: boolean = $derived(Object.keys(INPUT_TYPES).includes(type));

  $effect(() => {
    if (!isValidType) {
      showWarning('Input', 'Передан неверный тип компонента.');
    }
  });
</script>

{#if isValidType}
  {#await import(`./${INPUT_COMPONENT_NAMES[type]}.svelte`) then { default: InputName }}
    <InputName {...props} />
  {/await}
{/if}
