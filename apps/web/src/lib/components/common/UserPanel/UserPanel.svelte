<script lang="ts">
  import { Avatar } from '$components';
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
</div>

<style lang="postcss">
  @import './UserPanel.postcss';
</style>