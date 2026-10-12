<script lang="ts">
  import { Logo, Navigation, UserPanel } from '$components';
</script>

<header class="header">
  <Logo />
  <div class="header__user-block">
    <Navigation />
    <UserPanel />
  </div>
</header>

<style lang="postcss">
  @import './Header.postcss';
</style>