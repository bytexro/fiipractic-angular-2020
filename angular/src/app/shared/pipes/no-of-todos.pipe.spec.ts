import { NoOfTodosPipe } from './no-of-todos.pipe';

describe('NoOfTodosPipe', () => {
  it('create an instance', () => {
    const pipe = new NoOfTodosPipe();
    expect(pipe).toBeTruthy();
  });
});
