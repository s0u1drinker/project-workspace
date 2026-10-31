<script lang="ts">
  import { Avatar } from '$components';
  import { user } from '$stores';
</script>

<div class="user-identity">
  <Avatar
    img={user.avatar}
    avatarReplace='letters'
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