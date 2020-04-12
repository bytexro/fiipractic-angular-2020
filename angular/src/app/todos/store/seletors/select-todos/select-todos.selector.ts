import { createSelector } from "@ngrx/store";

import { FeatureState, selectTodoFeature } from "../../state/todo.state";
import { IToDo } from "../../../models";

export const selectTodos = createSelector(
  selectTodoFeature,
  (state: FeatureState): IToDo[] => state.todos
);
