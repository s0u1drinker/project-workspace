<script lang="ts">
  import { UserIdentity, UserMenu } from '$components';
  import { ARIA_LABEL } from '$constants'; 
</script>

<div class="user-panel">
  <button
    class="user-panel__button"
    aria-label={ARIA_LABEL.userMenu}
    popovertarget="idMenu"
  >
    <UserIdentity />
  </button>
  <UserMenu />
</div>

<style lang="postcss">
  @import './UserInfo.postcss';
</style>