import { ADD_GOAL, REMOVE_GOAL, RECIVE_GOALS } from '../actions/goals';
import { RECIVE_DATA } from '../actions/shared';

export default function goals(state = [], action) {
  switch (action.type) {
    case ADD_GOAL:
      return [...state, action.goal];
    case REMOVE_GOAL:
      return state.filter(i => i.id !== action.id);
    case RECIVE_DATA:
      return action.goals;
    case RECIVE_GOALS:
      return action.goals;
    default:
      return state;
  }
}
