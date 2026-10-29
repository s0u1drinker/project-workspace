<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from '$app/paths';
  import { Icon } from '$components';
  import {
    NAVIGATION,
    NAV_LINK_CLASS,
    NAV_LINK_ACTIVE_CLASS,
    ARIA_CURRENT_PAGE,
    ARIA_LABEL
  } from '$constants';

  const navList = $derived(Object.entries(NAVIGATION));

  const isActive = (path: string) => page.url.pathname === path;
  const getAriaCurrent = (path: string) => (isActive(path) ? ARIA_CURRENT_PAGE : undefined);
  const getNavLinkClass = (path: string) => [
    NAV_LINK_CLASS,
    { [NAV_LINK_ACTIVE_CLASS]: isActive(path) }
  ];
</script>

<nav class="navigation" aria-label={ARIA_LABEL.mainNavigation}>
  <ul class="navigation__list">
    {#each navList as [key, item] (key)}
      <li class="navigation__item">
        <a
          href={resolve(item.path)}
          class={getNavLinkClass(item.path)}
          aria-current={getAriaCurrent(item.path)}
        >
          <Icon class="navigation__link-icon" icon={item.icon} />
          <span class="navigation__link-text">{item.title}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="postcss">
.navigation {

  &__list {
    display: flex;
    gap: var(--indent);
  }

  &__link {
    --after-height: 2px;
    --after-show-offset: calc(-1 * var(--after-height) * 2);

    display: flex;
    align-items: center;
    gap: var(--indent-half);
    position: relative;
    padding-block: var(--indent-half);
    color: var(--color-text);

    &::after {
      content: "";
      width: 100%;
      display: block;
      height: var(--after-height);
      background-color: var(--color-primary);
      position: absolute;
      bottom: 0;
      opacity: 0;
      transform: translateY(var(--after-height));
      transition: transform var(--transition-base), opacity var(--transition-base), color var(--transition-base);
    }

    @mixin hover {
      text-decoration: none;

      &::after {
        transform: translateY(var(--after-show-offset));
        opacity: 1;
      }
    }

    &_active {
      pointer-events: none;
      color: var(--color-black);

      &::after {
        transform: translateY(var(--after-show-offset));
        opacity: 1;
      }

      :global(.navigation__link-icon) {
        color: var(--color-primary);
      }
    }

    :global(&-icon) {
      color: var(--color-gray);
    }
  }
}
</style>
