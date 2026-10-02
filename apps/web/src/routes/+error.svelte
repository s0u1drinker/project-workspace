<script lang="ts">
  import { page } from '$app/state';
  import { APP_NAME, APP_ERROR, DEFAULT_ERROR_TITLE, DEFAULT_ERROR_MESSAGE } from '$lib/constants';

  let pageStatus = page.status as keyof typeof APP_ERROR;

  const errorContent = $derived(
    APP_ERROR[pageStatus] ?? {
      title: DEFAULT_ERROR_TITLE,
      message: DEFAULT_ERROR_MESSAGE
    }
  );
</script>

<svelte:head>
  <title>{pageStatus} | {APP_NAME}</title>
</svelte:head>

<main class="error-page">
  <div class="error-page__info">
    <h1>Ошибка {pageStatus}: {errorContent.title}</h1>
    <p>{errorContent.message}</p>
  </div>
</main>

<style lang="postcss">
  .error-page {
    display: grid;
    place-items: center;
    min-height: 100dvh;
    padding: var(--indent);
    text-align: center;
  }
</style>