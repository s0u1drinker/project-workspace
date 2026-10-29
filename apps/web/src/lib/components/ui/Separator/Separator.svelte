<script lang="ts">
  import { ORIENT_MAP } from "$constants";
  import type { ISeparator } from "./Separator.types";

  const { orientation = ORIENT_MAP.horizontal }: ISeparator = $props();
  const classes = $derived([
    "separator",
    orientation && `separator_${orientation}`
  ]);
</script>

<div
  class={classes}
  role="separator"
  aria-orientation={orientation}
></div>

<style lang="postcss">
.separator {
  --separator-size: 1px;

  background-color: var(--color-gray);
  margin-block: var(--indent-half);

  &_vertical {
    width: var(--separator-size);
    align-self: stretch;
  }

  &_horizontal {
    width: 100%;
    height: var(--separator-size);
  }
}
</style>