import { createReducer, on } from "@ngrx/store";

import {
  addTodoSuccessAction,
  deleteTodoSuccessAction,
  getTodosSuccessAction,
  requestAddTodoAction,
  requestDeleteTodoAction,
  requestGetTodosAction,
  requestUpdateTodoAction,
  updateTodoSuccessAction
} from "../actions/todo.actions";
import { FeatureState } from "../state/todo.state";

export const initialState: FeatureState = {
  loading: true,
  todos: [],
};

const _featureReducer = createReducer(
  initialState,
  on(requestGetTodosAction, state => ({
    ...state,
    loading: true,
  })),
  on(getTodosSuccessAction, (state, { todos}) => ({
    loading: false,
    todos,
  })),
  on(requestAddTodoAction, state => ({
    ...state,
    loading: true,
  })),
  on(addTodoSuccessAction, state => ({
    ...state,
    loading: false,
  })),
  on(requestUpdateTodoAction, state => ({
    ...state,
    loading: true,
  })),
  on(updateTodoSuccessAction, state => ({
    ...state,
    loading: false,
  })),
  on(requestDeleteTodoAction, state => ({
    ...state,
    loading: true,
  })),
  on(deleteTodoSuccessAction, state => ({
    ...state,
    loading: false,
  })),
);

export function featureReducer(state: FeatureState, action): FeatureState {
  return _featureReducer(state, action);
}
