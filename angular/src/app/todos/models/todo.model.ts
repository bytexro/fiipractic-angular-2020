export type ToDoType = 'all' | 'done' | 'uncompleted';

export interface IToDo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
