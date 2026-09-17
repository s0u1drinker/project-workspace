<script lang="ts">
  import { Field, InputText } from "$components";
  import { FORM_LABEL, INPUT_PLACEHOLDER } from "$lib/constants";
  import type { TFieldBase } from "./field.types";

  let { value = $bindable() }: TFieldBase = $props();
</script>

<Field tag="label">
  <span>{ FORM_LABEL.login }</span>
  <InputText
    placeholder={INPUT_PLACEHOLDER.login}
    bind:value={value}
  />
</Field>