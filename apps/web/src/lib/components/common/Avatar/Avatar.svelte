<script lang="ts">
  import { Icon } from '$components';
  import { AVATAR_REPLACE, ICON_MAP } from '$constants'; 
  import type { IAvatar } from "./Avatar.types";

  const {
    img,
    avatarReplace = AVATAR_REPLACE.svg,
    userInitials = '',
  }: IAvatar = $props();
</script>

<div class="avatar">
  {#if img}
    <img
      class="avatar__img"
      src={img}
      alt="Аватар"
    />
  {:else if (avatarReplace === AVATAR_REPLACE.letters)}
    <div class="avatar__block">{ userInitials }</div>
  {:else}
    <Icon
      className='avatar__icon'
      icon={ICON_MAP.local('user-avatar')}
      size="2rem"
    />
  {/if}
</div>

<style lang="postcss">
.avatar {
  border-radius: var(--radius-full);
  width: 2rem;
  height: 2rem;
  
  &__block {
    padding: var(--indent-quarter);
    background-color: var(--color-primary);
    color: var(--color-white);
    border-radius: var(--indent-quarter);
    display: grid;
    place-items: center;
  }
}
</style>