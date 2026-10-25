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
.user-menu {
  --popover-opacity: 0;
  --popover-z-index: -1;

  position-anchor: --anchor-user-button;
  top: anchor(inside);
  left: anchor(inside);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  transition: opacity var(--transition-base), display var(--transition-base), overlay var(--transition-base);
  opacity: var(--popover-opacity);
  z-index: var(--popover-z-index);

  &:popover-open {
    --popover-opacity: 1;
    --popover-z-index: 1;
  }
}
</style>