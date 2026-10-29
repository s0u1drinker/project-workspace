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
.user-button {
  --button-bgc: transparent;

  anchor-name: --anchor-user-button;
  padding: var(--indent-half) var(--indent);
  border: 0 none;
  background-color: var(--button-bgc);
  transition: background-color var(--transition-base);
  border-radius: var(--radius);
  cursor: pointer;
  line-height: inherit;
  width: 100%;

  @mixin hover {
    --button-bgc: color-mix(in oklab, var(--color-gray) 25%, white);
  }
}
</style>