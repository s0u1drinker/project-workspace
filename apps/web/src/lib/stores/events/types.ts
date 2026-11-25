type TEventType = 'new' | 'update' | 'end';

export interface IEvent {
  id: string;
  eventType: TEventType;
  idProject: string;
  idTask: string;
  datetime: string;
}
