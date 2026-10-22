<script lang="ts">
  import { UserIdentity } from '$components';
  import { ARIA_LABEL } from '$constants'; 
</script>

<button
  class="user-button"
  aria-label={ARIA_LABEL.userMenu}
  popovertarget="userMenu"
  popovertargetaction="show"
>
  <UserIdentity />
</button>

<style lang="postcss">
  @import './UserButton.postcss';
</style>