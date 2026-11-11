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
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  justify-content: center;

  @media (--viewport-lg) {
    display: none;
  }
}
</style>