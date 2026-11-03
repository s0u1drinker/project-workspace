<script lang="ts">
  import { ORIENT_MAP } from "$constants";
  import type { ISeparator } from "./Separator.types";

  const {
    orientation = ORIENT_MAP.horizontal,
    color,
    fade
  }: ISeparator = $props();
  const classes = $derived([
    "separator",
    orientation && `separator_${orientation}`,
    fade && `separator_fade_${fade}`
  ]);
  const style = $derived(color && `--separator-bg-color: ${color};`);
</script>

<div
  class={classes}
  role="separator"
  aria-orientation={orientation}
  {style}
></div>

<style lang="postcss">
.separator {
  --separator-size: 1px;
  --separator-bg-color: var(--color-gray);
  --separator-bg: var(--separator-bg-color);

  background: var(--separator-bg);
  margin-block: var(--indent-half);

  &_vertical {
    width: var(--separator-size);
    align-self: stretch;
  }

  &_horizontal {
    width: 100%;
    height: var(--separator-size);
  }

  &_fade {
    &_in {
      --separator-bg: linear-gradient(to right, transparent, var(--separator-bg-color) 15%);
    }

    &_out {
      --separator-bg: linear-gradient(to right, var(--separator-bg-color) 85%, transparent);
    }

    &_inout {
      --separator-bg: linear-gradient(to right, transparent, var(--separator-bg-color) 15%, var(--separator-bg-color) 85%, transparent);
    }
  }
}
</style>