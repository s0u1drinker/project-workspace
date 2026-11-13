<script lang="ts">
  import { Logo, Breadcrumbs, NavigationDesktop } from '$components';
</script>

<header class="header">
  <Logo />
  <Breadcrumbs />
  <NavigationDesktop />
</header>

<style lang="postcss">
.header {
  --header-padding: var(--indent);
  --header-direction: column;
  --header-align: flex-start;

  display: flex;
  flex-direction: var(--header-direction);
  align-items: var(--header-align);
  padding: var(--header-padding);

  @media (--viewport-sm) {
    --header-direction: row;
    --header-align: center;
  }
}
</style>