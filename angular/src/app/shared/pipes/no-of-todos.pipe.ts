import { Pipe, PipeTransform } from '@angular/core';
import memo from 'memo-decorator';

@Pipe({
  name: 'noOfTodos'
})
export class NoOfTodosPipe implements PipeTransform {
  @memo()
  transform(value: number): string {
    if (!value) {
      return 'no todos';
    }

    if (value === 1) {
      return 'one todo';
    }

    return `${value} todos`;
  }
}
