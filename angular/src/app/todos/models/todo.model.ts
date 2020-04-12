export type ToDoType = 'all' | 'done' | 'uncompleted';

export interface IToDo {
  id?: number | string;
  title: string;
  description: string,
  completed: boolean;
}

export interface IAPIFilter {
  where?: {
    completed: boolean,
  };
}
