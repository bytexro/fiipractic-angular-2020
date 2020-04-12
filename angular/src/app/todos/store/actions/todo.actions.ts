import { createAction, props } from '@ngrx/store';

import { IAPIFilter, IToDo } from "../../models";


export const requestGetTodosAction = createAction(
  '[Feature Action] Request Get Todos',
  props<{ filter?: IAPIFilter }>()
);

export const requestGetTodosCloneAction = createAction(
  '[Feature Action] Request Get Todos Clone'
);

export const getTodosSuccessAction = createAction(
  '[Feature Action] Get Todos Success',
  props<{ todos: IToDo[] }>()
);

export const requestAddTodoAction = createAction(
  '[Feature Action] Request Add Todo',
  props<{ todo: IToDo }>()
);

export const addTodoSuccessAction = createAction(
  '[Feature Action] Add Todo Success'
);

export const requestUpdateTodoAction = createAction(
  '[Feature Action] Request Update Todo',
  props<{ todo: IToDo }>()
);

export const updateTodoSuccessAction = createAction(
  '[Feature Action] Update Todo Success'
);

export const requestDeleteTodoAction = createAction(
  '[Feature Action] Request Delete Todo',
  props<{ todo: IToDo }>()
);

export const deleteTodoSuccessAction = createAction(
  '[Feature Action] Delete Todo Success'
);
