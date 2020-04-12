import { createSelector } from "@ngrx/store";

import { FeatureState, selectTodoFeature } from "../../state/todo.state";
import { IToDo } from "../../../models";

export const selectTodosLoading = createSelector(
  selectTodoFeature,
  (state: FeatureState): boolean => state.loading
);
