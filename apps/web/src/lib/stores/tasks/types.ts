import type { TCapitalizeFirstChar } from '$lib/types';

type TTaskTypeID = 'bug' | 'design' | 'feature' | 'other';

interface ITaskType {
  id: TTaskTypeID;
  color: string;
  prefix: TCapitalizeFirstChar<TTaskTypeID>;
  title: string;
}

interface ITaskChange {
  dateOfChange: string;
  status: TTaskStatus;
}

type TTaskId = `${ITaskType['prefix']}-${number}`;
type TTaskStatus = 'created' | 'sprint' | 'inProgress' | 'test' | 'complete';

export interface ITask {
  id: string;
  idTask: TTaskId;
  idProject: string;
  subject: string;
  description: string;
  type: TTaskTypeID;
  deadline: string;
  status: TTaskStatus;
  urgent: boolean;
  created: string;
  finished: string;
  changes: ITaskChange[];
}
