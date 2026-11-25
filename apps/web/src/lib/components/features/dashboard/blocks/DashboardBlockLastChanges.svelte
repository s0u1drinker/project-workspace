<script lang="ts">
  import DashboardBlockList from "./DashboardBlockList.svelte";
  import { events } from '$stores';
</script>

{#snippet eventItem(event: typeof events[number])}
  <div class="list-changes">
    <div>{event.eventType}</div>
    <div>{event.idTask}</div>
    <div>{event.idProject}</div>
    <div>{event.datetime} назад</div>
  </div>
{/snippet}
  
<div class="d-block-changes">
  <DashboardBlockList
    headerText='Последние изменения'
    icon='local:stats'
    link='/'
    linkText='Все события'
    items={events}
    listItem={eventItem}
  />
</div>

<style lang="postcss">
.d-block-changes {
  grid-area: events;
}
</style>