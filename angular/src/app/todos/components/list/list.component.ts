import { Component, Input } from '@angular/core';

import { IToDo } from '../../models';

@Component({
  selector: 'todos-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() public todos: IToDo[] = [];
}
