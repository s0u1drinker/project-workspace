<script lang="ts">
  import { Avatar } from '$components';
</script>

<div class="user-identity">
  <Avatar />
  <span>UserName</span>
</div>

<style lang="postcss">
.user-identity{
  display: flex;
  color: var(--color-black);
}
</style>