<script lang="ts">
  import { Icon } from '$components';
  import type { IAvatar } from "./Avatar.types";

  const {
    img,
    avatarReplace = 'svg',
    userInitials = '',
  }: IAvatar = $props();
</script>

{#if img}
  <img class="avatar avatar_img" src={img} alt="Аватар">
{:else if (avatarReplace === 'letters')}
  <span class="avatar">{ userInitials }</span>
{:else}
  <Icon icon='local:user-avatar' />
{/if}

<style lang="postcss">
.avatar {
  border-radius: var(--radius-full);
}
</style>