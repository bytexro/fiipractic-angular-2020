import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay, filter, map } from 'rxjs/operators';

import { IToDo, ToDoType } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  public isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);
  public todos$: BehaviorSubject<IToDo[]> = new BehaviorSubject<IToDo[]>([]);
  private readonly api: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  public getTodos(selectedType: ToDoType) {
    this.isLoading$.next(true);

    this.http.get<IToDo[]>(this.api)
      .pipe(
        delay(1000),
        filter((todos: IToDo[]) => todos && !!todos.length),
        map((todos: IToDo[]) => {
          if (selectedType === 'done') {
            return todos.filter(todo => todo.completed);
          }

          if (selectedType === 'uncompleted') {
            return todos.filter(todo => !todo.completed);
          }

          return todos;
        }),
      )
      .subscribe((todos: IToDo[]) => {
        this.isLoading$.next(false);
        this.todos$.next(todos);
      });
  }
}
