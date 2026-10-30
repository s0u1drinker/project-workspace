<script lang="ts">
  import { UserButton, UserMenu } from '$components';
  
</script>

<div class="user-info">
  <UserButton />
  <UserMenu />
</div>

<style lang="postcss">
.user-info {
  display: flex;
  position: relative;
  min-width: 11rem;
}
</style>