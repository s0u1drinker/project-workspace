<script lang="ts">
  import { UserIdentity } from '$components';
</script>

<div
  class="user-menu"
  id="userMenu"
  popover
>
  <UserIdentity />
  <div>UserMenu</div>
</div>

<style lang="postcss">
  @import './UserMenu.postcss';
</style>