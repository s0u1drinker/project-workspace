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
  @import './Header.postcss';
</style>