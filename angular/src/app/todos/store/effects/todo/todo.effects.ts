import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

import {
  addTodoSuccessAction,
  deleteTodoSuccessAction,
  getTodosSuccessAction,
  requestAddTodoAction,
  requestDeleteTodoAction,
  requestGetTodosAction,
  requestUpdateTodoAction,
  updateTodoSuccessAction,
} from '../../actions/todo.actions';
import { IToDo } from "../../../models";

@Injectable()
export class TodoEffects {
  getTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestGetTodosAction),
      mergeMap(({filter}) => {
        let params = {};

        if (filter) {
          params = {
            filter: JSON.stringify(filter)
          }
        }

        return this.http.get('http://localhost:3000/todos', { params })
          .pipe(
            map((todos: IToDo[]) => getTodosSuccessAction({ todos }))
          )
      })
    )
  );

  addTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestAddTodoAction),
      mergeMap(({todo}) => this.http.post('http://localhost:3000/todos', todo).pipe(
        mergeMap(() => [
          addTodoSuccessAction(),
          requestGetTodosAction({})
        ])
      ))
    )
  );

  updateTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestUpdateTodoAction),
      mergeMap(({todo}) => this.http.put(`http://localhost:3000/todos/${todo.id}`, todo).pipe(
        mergeMap(() => [
          updateTodoSuccessAction(),
          requestGetTodosAction({})
        ])
      ))
    )
  );

  deleteTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(requestDeleteTodoAction),
      mergeMap(({todo}) => this.http.delete(`http://localhost:3000/todos/${todo.id}`).pipe(
        mergeMap(() => [
          deleteTodoSuccessAction(),
          requestGetTodosAction({})
        ])
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient
  ) {}
}
