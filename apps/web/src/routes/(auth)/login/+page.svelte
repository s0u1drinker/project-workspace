<script>
  import FormLogin from "$lib/components/form/FormLogin.svelte";
</script>

<svelte:head>
  <title>Вход | ProjectWorkspace</title>
</svelte:head>

<main class="login-container">
  <div class="login-card">
    <FormLogin />
  </div>
</main>

<style lang="postcss">
  .login-container {
    position: relative;
    isolation: isolate;
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

  .login-card {
    width: min(100%, 420px);
    padding: var(--indent-double);
    background: rgba(255, 255, 255, .45);
    border: var(--border) rgba(255, 255, 255, .35);
    border-radius: calc(var(--radius) * 2);
    box-shadow: var(--shadow-md);
    backdrop-filter: blur(12px);
    display: flex;
    flex-direction: column;
    gap: var(--indent-double);
  }
</style>