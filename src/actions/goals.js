export const ADD_GOAL = 'ADD-GOAL';
export const REMOVE_GOAL = 'REMOVE_GOAL';
export const RECIVE_GOALS = 'RECIVE_GOALS';

function addGoal(goal) {
  return {
    type: ADD_GOAL,
    goal
  };
}

function removeGoal(id) {
  return {
    type: REMOVE_GOAL,
    id
  };
}

export function reciveGoals(goals) {
  return {
    type: RECIVE_GOALS,
    goals
  };
}

export function handleRemoveGoal(i) {
  return dispatch => {
    dispatch(removeGoal(i.id));
    fetch(`http://localhost:4000/goals/${i.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => dispatch(addGoal(i)));
  };
}

export function handleAddGoal(name) {
  return dispatch => {
    fetch('http://localhost:4000/goals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name })
    })
      .then(res => res.json())
      .then(data => {
        dispatch(addGoal(data));
      })
      .catch(err => console.log(err));
  };
}
