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
