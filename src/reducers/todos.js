import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  RECIVE_TODOS
} from '../actions/todos';
import { RECIVE_DATA } from '../actions/shared';

export default function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.todo];
    case REMOVE_TODO:
      return state.filter(i => i.id !== action.id);
    case TOGGLE_TODO:
      return state.map(i => {
        if (i.id === action.id) {
          i.complete = !i.complete;
        }
        return i;
      });
    case RECIVE_DATA:
      return action.todos;
    case RECIVE_TODOS:
      return action.todos;
    default:
      return state;
  }
}
