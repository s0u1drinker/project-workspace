<script lang="ts">
  import { Avatar, UserMenu } from '$components';
</script>

<div class="user-panel">
  <button
    class="user-panel__button"
    aria-label="Меню пользователя"
    popovertarget="idMenu"
  >
    <Avatar />
    <span>UserName</span>
  </button>
  <UserMenu />
</div>

<style lang="postcss">
  @import './UserInfo.postcss';
</style>