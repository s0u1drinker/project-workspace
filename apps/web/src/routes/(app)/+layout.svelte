<script lang="ts">
  import { Logo } from "$components";
  let { children } = $props();
</script>

<div class="app-layout">
  <header class="app-layout__header">
    <Logo />
  </header>

  <main class="app-layout__content">
    {@render children()}
  </main>
</div>

<style lang="postcss">
  .app-layout {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;

    &__header {
      flex: 0 0 auto;
    }

    &__content {
      flex: 1;
    }
  }
</style>