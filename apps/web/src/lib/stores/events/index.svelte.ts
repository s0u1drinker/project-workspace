import type { IEvent } from './types';

export const events = $state<IEvent[]>([
  {
    id: '1',
    eventType: 'end',
    idProject: '1',
    idTask: '1',
    datetime: '20 минут'
  },
  {
    id: '2',
    eventType: 'new',
    idProject: '2',
    idTask: '2',
    datetime: '37 минут'
  },
  {
    id: '3',
    eventType: 'update',
    idProject: '3',
    idTask: '3',
    datetime: '1 час'
  }
]);
