<script lang="ts">
  import { resolve } from '$app/paths';
  import { page } from '$app/state';
  import { Icon, Button } from '$components';
  import { ARIA_LABEL, USER_NAVIGATION, ARIA_CURRENT_PAGE } from "$constants";

  const NAV_LIST = Object.entries(USER_NAVIGATION);

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
        >
          <Icon class="user-nav__link-icon" icon={item.icon} />
          <span class="user-nav__link-text">{item.title}</span>
        </a>
      </li>
    {/each}
  </ul>
  <Button
    className="user-nav__button"
    iconLeft="local:logout"
    text="Выход"
    color="danger"
    variant="plain"
    size="small"
  />
</nav>

<style lang="postcss">
.user-nav {
  display: flex;
  flex-direction: column;
  gap: var(--indent-half);

  &__item {
    display: flex;
  }

  &__link {
    --link-bgc: transparent;

    padding-block: var(--indent-quarter);
    padding-inline: var(--indent-half);
    background-color: var(--link-bgc);
    border-radius: var(--indent-half);
    flex-grow: 1;
    transition: background-color var(--transition-base);

    @mixin hover {
      --link-bgc: var(--color-gray);
    }
  }

  :global(&__button.button) {
    padding-inline: var(--indent-half);
    justify-content: flex-start;
    width: 100%;
  }
}
</style>