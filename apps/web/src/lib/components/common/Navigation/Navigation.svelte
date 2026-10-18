<script lang="ts">
  import { page } from '$app/state';
  import { resolve } from "$app/paths";
  import { Icon } from '$components';
  import { NAVIGATION, NAV_LINK_CLASS, NAV_LINK_ACTIVE_CLASS, ARIA_CURRENT_PAGE, ARIA_LABEL } from "$constants";
  
  const navList = $derived(Object.entries(NAVIGATION));

  const isActive = (path: string) => page.url.pathname === path;
  const getAriaCurrent = (path: string) => isActive(path) ? ARIA_CURRENT_PAGE : undefined;
  const getNavLinkClass = (path: string) => ([
    NAV_LINK_CLASS,
    { [NAV_LINK_ACTIVE_CLASS]: isActive(path) }
  ]);
</script>

<nav
  class="navigation"
  aria-label={ARIA_LABEL.mainNavigation}
>
  <ul class="navigation__list">
    {#each navList as [key, item] (key)}
      <li class="navigation__item">
        <a
          href={resolve(item.path)}
          class={getNavLinkClass(item.path)}
          aria-current={getAriaCurrent(item.path)}
        >
          <Icon
            class="navigation__link-icon"
            icon={item.icon}
          />
          <span class="navigation__link-text">{item.title}</span>
        </a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="postcss">
  @import './Navigation.postcss';
</style>