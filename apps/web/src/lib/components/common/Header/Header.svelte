<script lang="ts">
  import { Logo, Navigation, UserInfo, Breadcrumbs } from '$components';
</script>

<header class="header">
  <Logo />
  <Breadcrumbs />
  <div class="header__user-block">
    <Navigation />
    <UserInfo />
  </div>
</header>

<style lang="postcss">
.header {
  --header-padding: var(--indent);

  display: flex;
  align-items: center;
  padding: var(--header-padding);

  &__user-block {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: var(--header-padding);
  }
}
</style>