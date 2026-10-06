<script lang="ts">
  import { Header } from "$components";
  let { children } = $props();
</script>

<div class="app-layout">
  <Header />

  <main class="app-layout__content">
    {@render children()}
  </main>
</div>

<style lang="postcss">
  .app-layout {
    min-height: 100dvh;
    display: flex;
    flex-direction: column;

    &__content {
      flex: 1;
    }
  }
</style>