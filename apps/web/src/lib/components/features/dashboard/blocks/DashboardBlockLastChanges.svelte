<script lang="ts">
  import DashboardBlockList from "./DashboardBlockList.svelte";

  const events = [
    { id: 1, eventType: 'end', eventTitle: 'Задача завершена', project: 'Проект Альфа', taskTitle: 'Создать API', datetime: '20 минут' },
    { id: 2, eventType: 'new', eventTitle: 'Создана задача', project: 'Проект Альфа', taskTitle: 'Перенести БД', datetime: '37 минут' },
    { id: 3, eventType: 'update', eventTitle: 'Задача обновлена', project: 'Проект Гамма', taskTitle: 'Обновить библиотеки', datetime: '1 час' }
  ];
</script>

{#snippet eventItem(event: typeof events[number])}
  <div class="list-changes">
    <div>{event.eventType}</div>
    <div>{event.eventTitle} ({event.project})</div>
    <div>{event.taskTitle}</div>
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