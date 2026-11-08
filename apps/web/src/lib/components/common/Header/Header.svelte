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

  display: flex;
  align-items: center;
  padding: var(--header-padding);
}
</style>