<script>
  import { FormLogin, Card } from "$components";
</script>

<svelte:head>
  <title>Вход | ProjectWorkspace</title>
</svelte:head>

<main class="login-container">
  <Card variant="glass">
    <FormLogin />
  </Card>
</main>

<style lang="postcss">
  .login-container {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 100%;
    padding: var(--indent);
    overflow: hidden;
    background: linear-gradient(
      135deg,
      var(--color-gradient-1),
      var(--color-gradient-2)
    );
  }
</style>