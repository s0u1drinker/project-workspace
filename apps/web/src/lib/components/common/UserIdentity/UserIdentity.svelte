<script lang="ts">
  import { Avatar } from '$components';
  import { AVATAR_REPLACE } from '$constants';
  import { user } from '$stores';
</script>

<div class="user-identity">
  <Avatar
    img={user.avatar}
    avatarReplace={AVATAR_REPLACE.letters}
    userInitials={user.initials}
  />
  <span>{ user.fullName }</span>
</div>

<style lang="postcss">
.user-identity{
  display: flex;
  color: var(--color-black);
}
</style>