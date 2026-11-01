<script lang="ts">
  import { Icon } from '$components';
  import { AVATAR_REPLACE } from '$constants'; 
  import type { IAvatar } from "./Avatar.types";

  const {
    img,
    avatarReplace = AVATAR_REPLACE.svg,
    userInitials = '',
  }: IAvatar = $props();
</script>

{#if img}
  <img class="avatar avatar_img" src={img} alt="Аватар">
{:else if (avatarReplace === AVATAR_REPLACE.letters)}
  <span class="avatar">{ userInitials }</span>
{:else}
  <Icon icon='local:user-avatar' />
{/if}

<style lang="postcss">
.avatar {
  border-radius: var(--radius-full);
}
</style>