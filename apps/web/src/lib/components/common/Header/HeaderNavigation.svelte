<script lang="ts">
  import { Navigation, UserInfo } from '$components';
</script>

<div class="header-nav">
  <Navigation />
  <UserInfo />
</div>

<style lang="postcss">
.header-nav {
  display: flex;
  align-items: center;
  gap: var(--header-padding);
}
</style>