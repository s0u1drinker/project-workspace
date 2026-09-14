<script lang="ts">
  import type { IForm } from "./Form.types";

  const { className, header, body, message, buttons, extra }: IForm = $props();
</script>

<form class={[ 'form', className ]}>
  {#if header}
    <div class="form__header">
      {@render header()}
    </div>
  {/if}
  {#if body}
    <div class="form__body">
      {@render body()}
    </div>
  {/if}
  {#if message}
    <div class="form__message">
      {@render message()}
    </div>
  {/if}
  {#if buttons}
    <div class="form__buttons">
      {@render buttons()}
    </div>
  {/if}
  {#if extra}
    <div class="form__extra">
      {@render extra()}
    </div>
  {/if}
</form>

<style lang="postcss">
  @import './Form.postcss';
</style>