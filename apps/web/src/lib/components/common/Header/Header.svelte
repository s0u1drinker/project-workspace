<script lang="ts">
  import { Logo, Navigation, UserInfo } from '$components';
</script>

<header class="header">
  <Logo />
  <div class="header__user-block">
    <Navigation />
    <UserInfo />
  </div>
</header>

<style lang="postcss">
  @import './Header.postcss';
</style>