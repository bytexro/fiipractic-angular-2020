import { IToDo } from "../../models";
import { State } from "../../../app.state";

export interface FeatureState {
  loading: boolean,
  todos: IToDo[],
}

export const selectTodoFeature = (state: State) => state.todoFeature;
