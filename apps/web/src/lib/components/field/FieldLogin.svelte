<script lang="ts">
  import { Field } from "../common/Field";
  import { InputText } from "../ui/Input";
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