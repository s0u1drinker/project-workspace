<script lang="ts">
  import { resolve } from "$app/paths";
  import { NAVIGATION } from "$constants";
  
  const navList = $derived(Object.entries(NAVIGATION));
</script>

<nav class="navigation" aria-label="Основная навигация">
  <ul class="navigation__list">
    {#each navList as [key, item] (key)}
      <li class="navigation__item">
        <a href={resolve(item.path)} class="navigation__link">{item.title}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="postcss">
  @import './Navigation.postcss';
</style>