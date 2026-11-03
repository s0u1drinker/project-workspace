<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { Icon, ButtonLogout } from '$components';
  import { ARIA_LABEL, USER_NAVIGATION, ARIA_CURRENT_PAGE } from "$constants";
  import type { IUserNavigation } from './UserNavigation.types';

  const NAV_LIST = Object.entries(USER_NAVIGATION);

  const { onNavigate }: IUserNavigation = $props();
  const isActive = (path: string) => page.url.pathname === path;
</script>

<nav
  class="user-nav"
  aria-label={ARIA_LABEL.userNavigation}
>
  <ul class="user-nav__list">
    {#each NAV_LIST as [key, item] (key)}
      <li class="user-nav__item">
        <a
          href={resolve(item.path)}
          class="user-nav__link"
          class:user-nav__link_active={isActive(item.path)}
          aria-current={isActive(item.path) ? ARIA_CURRENT_PAGE : undefined}
          onclick={onNavigate}
        >
          <Icon class="user-nav__link-icon" icon={item.icon} />
          <span class="user-nav__link-text">{item.title}</span>
        </a>
      </li>
    {/each}
  </ul>
  <ButtonLogout />
</nav>

<style lang="postcss">
.user-nav {
  --items-gap: var(--indent-half);

  display: flex;
  flex-direction: column;
  gap: var(--items-gap);

  &__item {
    display: flex;

    & + & {
      margin-block-start: var(--items-gap);
    }
  }

  &__link {
    --link-bgc: transparent;

    padding-block: var(--indent-quarter);
    padding-inline: var(--indent-half);
    background-color: var(--link-bgc);
    border-radius: 4px;
    display: flex;
    align-items: center;
    gap: var(--indent-quarter);
    flex-grow: 1;
    transition: background-color var(--transition-base);

    @mixin hover {
      --link-bgc: var(--color-primary-15-tr);
      text-decoration: none;
    }

    &_active {
      --link-bgc: var(--color-primary);
      color: var(--color-white);
      pointer-events: none;
    }
  }
}
</style>