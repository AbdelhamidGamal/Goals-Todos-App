import { reciveTodos } from './todos';
import { reciveGoals } from './goals';

export const RECIVE_DATA = 'RECIVE_DATA';

function reciveData(todos, goals) {
  return {
    type: RECIVE_DATA,
    todos,
    goals
  };
}

export function handleInitialData() {
  return dispatch => {
    fetch('http://localhost:4000/todos')
      .then(res => res.json())
      .then(data => {
        dispatch(reciveTodos(data));
      });

    fetch('http://localhost:4000/goals')
      .then(res => res.json())
      .then(data => {
        dispatch(reciveGoals(data));
      });
  };
}
