<script lang="ts">
  import { Field, InputPassword } from "$components";
  import { FORM_LABEL } from "$lib/constants";
  import type { TFieldBase } from "./field.types";

  let { value = $bindable() }: TFieldBase = $props();
</script>

<Field tag="label">
  <span>{ FORM_LABEL.password }</span>
  <InputPassword
    bind:value={value}
  />
</Field>