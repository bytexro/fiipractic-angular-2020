import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import {
  requestAddTodoAction,
  requestDeleteTodoAction,
  requestGetTodosAction,
  requestUpdateTodoAction
} from '../store/actions/todo.actions'
import { selectTodos } from '../store/seletors/select-todos/select-todos.selector'
import { selectTodosLoading } from "../store/seletors/select-todos-loading/select-todos-loading.selector";
import { IToDo, ToDoType } from "../models";

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public isLoading$ = this.store$.select(selectTodosLoading);
  public todos$: Observable<IToDo[]> = this.store$.select<IToDo[]>(selectTodos);

  constructor(private store$: Store,) { }


  public getTodos(selectedType: ToDoType) {
    let filter = {};

    switch (selectedType) {
      case "done":
        filter = {
          where: {
            completed: true,
          }
        }
        break;

      case "uncompleted":
        filter = {
          where: {
            completed: false,
          }
        }
        break;
    }

    this.store$.dispatch(requestGetTodosAction({filter}));
  }

  public addTodo() {
    this.store$.dispatch(requestAddTodoAction({
      todo: {
        title: 'new todo',
        completed: false,
        description: 'description',
      }
    }))
  }

  public updateTodo(todo: IToDo): void {
    this.store$.dispatch(requestUpdateTodoAction({todo}))
  }

  public deleteTodo(todo: IToDo): void {
    this.store$.dispatch(requestDeleteTodoAction({todo}))
  }
}
