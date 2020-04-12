import { Component, EventEmitter, Input, Output } from '@angular/core';

import { IToDo } from '../../models';

@Component({
  selector: 'todos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() public todos: IToDo[] = [];
  @Output() public todoChanged: EventEmitter<IToDo> = new EventEmitter<IToDo>();
  @Output() public todoDeleted: EventEmitter<IToDo> = new EventEmitter<IToDo>();

  changeTodo(todo: IToDo):void {
    this.todoChanged.emit({
      ...todo,
      completed: !todo.completed,
    })
  }

  deleteTodo(todo: IToDo):void {
    this.todoDeleted.emit(todo);
  }
}
