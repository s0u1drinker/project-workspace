<script lang="ts">
  import { UserIdentity, UserNavigation, Separator } from '$components';
</script>

<div
  class="user-menu"
  id="userMenu"
  popover
>
  <UserIdentity />
  <Separator />
  <UserNavigation />
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
  transition: opacity var(--transition-base), display 0.2s allow-discrete;;
  opacity: var(--popover-opacity);
  z-index: var(--popover-z-index);
  width: anchor-size(width);
  border: 0 none;
  border-radius: var(--radius);
  padding: var(--indent-half) var(--indent);
  box-shadow: var(--shadow-md);

  &:popover-open {
    --popover-opacity: 1;
    --popover-z-index: 1;
  }
}
</style>