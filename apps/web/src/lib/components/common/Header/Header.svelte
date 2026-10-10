<script lang="ts">
  import { Logo, Navigation } from '$components';
</script>

<header class="header">
  <Logo />
  <div class="header__user-block">
    <Navigation />
    <div>UserPanel</div>
  </div>
</header>

<style lang="postcss">
  @import './Header.postcss';
</style>