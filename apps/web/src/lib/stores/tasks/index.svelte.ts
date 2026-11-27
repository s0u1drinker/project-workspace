import type { ITask } from './types';

export const tasks = $state<ITask[]>([
  {
    id: '1',
    idTask: 'B-1',
    idProject: '1',
    subject: 'Исправить баг',
    description: 'Баг, который нужно исправить.',
    type: 'bug',
    deadline: 'Сегодня',
    status: 'inProgress',
    urgent: false,
    created: '',
    finished: '',
    changes: []
  },
  {
    id: '2',
    idTask: 'D-1',
    idProject: '2',
    subject: 'Дизайн компонента',
    description: 'Дизайн выпадающего меню.',
    type: 'design',
    deadline: 'Сегодня',
    status: 'sprint',
    urgent: false,
    created: '',
    finished: '',
    changes: []
  },
  {
    id: '3',
    idTask: 'F-1',
    idProject: '3',
    subject: 'Фильтр для таблицы',
    description: 'Реализовать фильтрацию строк в таблице.',
    type: 'feature',
    deadline: 'Завтра',
    status: 'created',
    urgent: false,
    created: '',
    finished: '',
    changes: []
  }
]);

/** Количество задач. */
export const tasksCount = $derived(tasks.length);

/** Количество срочных задач. */
export const tasksUrgent = $derived(tasks.filter((task) => task.urgent).length);

/**
 * Количество задач с определённым статусом.
 * @param status Статус.
 * @returns Количество задач.
 */
export const getTasksCountByStatus = (status: ITask['status']) =>
  tasks.filter((task) => task.status === status).length;

/**
 * Количество задач с определённым типом.
 * @param type Тип задачи.
 * @returns Количество задач.
 */
export const getTasksCountByType = (type: ITask['type']) =>
  tasks.filter((task) => task.type === type).length;
