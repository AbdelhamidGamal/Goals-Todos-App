export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const RECIVE_TODOS = 'RECIVE_TODOS';

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo
  };
}

function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    id
  };
}

function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    id
  };
}

export function reciveTodos(todos) {
  return {
    type: RECIVE_TODOS,
    todos
  };
}

export function handleDeleteTodo(todo) {
  return dispatch => {
    dispatch(removeTodo(todo.id));
    fetch(`http://localhost:4000/todos/${todo.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => dispatch(addTodo(todo)));
  };
}

export function handleAddTodo(name) {
  return dispatch => {
    fetch('http://localhost:4000/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: name, complete: false })
    })
      .then(res => res.json())
      .then(data => {
        dispatch(addTodo(data));
      })
      .catch(err => console.log(err));
  };
}

export function handleToggleTodo(i) {
  return dispatch => {
    fetch(`http://localhost:4000/todos/${i.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: i.id, name: i.name, complete: !i.complete })
    })
      .then(res => res.json())
      .then(data => dispatch(toggleTodo(i.id)))
      .catch(err => dispatch(toggleTodo(i.id)));
  };
}
