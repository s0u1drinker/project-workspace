<script lang="ts">
  import { resolve } from '$app/paths';
  import { Icon } from '$components';
  import DashboardBlockWrapper from "./DashboardBlockWrapper.svelte";
  import type { IDashboardBlockList } from './../types';

  const props: IDashboardBlockList = $props();
</script>
  
<DashboardBlockWrapper className="d-block_list">
  {#snippet header()}
    <Icon icon={props.icon} />
    <h3>{ props.headerText }</h3>
    <a
      href={resolve(props.link)}
      class="d-block-link"
    >{props.linkText} &rarr;</a>
  {/snippet}
  {#snippet body()}
    {#each props.items as item (item)}
      {@render props.listItem(item)}
    {/each}
  {/snippet}
</DashboardBlockWrapper>

<style lang="postcss"></style>