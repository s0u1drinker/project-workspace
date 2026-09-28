<script>
  import { Card, FormSignup } from "$components";
</script>

<svelte:head>
  <title>Регистрация | ProjectWorkspace</title>
</svelte:head>

<main class="signup-container">
  <Card variant='signup'>
    <FormSignup />
  </Card>
</main>

<style lang="postcss">
  .signup-container {
    position: relative;
    display: grid;
    place-items: center;
    min-height: 100%;
    overflow: hidden;

    @media (--viewport-sm) {
      place-items: unset;
      justify-content: end;
      background: linear-gradient(
        180deg,
        var(--color-gradient-1),
        var(--color-gradient-2)
      );
    }
  }
</style>