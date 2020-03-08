import { RECIVE_DATA } from '../actions/shared';
import { RECIVE_GOALS } from '../actions/goals';
import { RECIVE_TODOS } from '../actions/todos';

export default function loading(state = true, action) {
  switch (action.type) {
    case RECIVE_DATA:
      return false;
    case RECIVE_TODOS:
      return false;
    case RECIVE_GOALS:
      return false;
    default:
      return state;
  }
}
