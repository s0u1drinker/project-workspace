<script lang="ts">
  import { Navigation } from '$components';
  import { USER_NAVIGATION } from '$constants';

  const extraItems = $derived({ profile: USER_NAVIGATION.profile});
</script>

<div class="nav-mobile">
  <Navigation { extraItems } />
</div>

<style lang="postcss">
.nav-mobile {
  display: flex;

  @media (--viewport-lg) {
    display: none;
  }
}
</style>