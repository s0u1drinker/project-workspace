<script lang="ts">
  import { Navigation, UserInfo } from '$components';
</script>

<div class="nav-desktop">
  <Navigation />
  <UserInfo />
</div>

<style lang="postcss">
.nav-desktop {
  display: none;
  
  @media (--viewport-lg) {
    display: flex;
    align-items: center;
    gap: var(--app-padding);
    margin-left: auto;
  }
}
</style>