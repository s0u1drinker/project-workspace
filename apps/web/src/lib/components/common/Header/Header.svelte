<script lang="ts">
  import { Logo, Breadcrumbs, HeaderNavigation } from '$components';
</script>

<header class="header">
  <Logo />
  <Breadcrumbs />
  <HeaderNavigation />
</header>

<style lang="postcss">
.header {
  --header-padding: var(--indent);

  display: flex;
  align-items: center;
  padding: var(--header-padding);

  :global(.header-nav) {
    margin-left: auto;
  }
}
</style>