<script lang="ts">
  import { resolve } from "$app/paths";
  import { NAVIGATION } from "$constants";
</script>

<nav class="navigation" aria-label="Основная навигация">
  <ul class="navigation__list">
    {#each Object.values(NAVIGATION) as item, index (index)}
      <li class="navigation__item">
        <a href={resolve(item.path)} class="navigation__link">{item.title}</a>
      </li>
    {/each}
  </ul>
</nav>

<style lang="postcss">
  @import './Navigation.postcss';
</style>