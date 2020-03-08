import { ADD_TODO } from '../actions/todos';

const checker = store => next => action => {
  if (
    action.type === ADD_TODO &&
    action.todo.name.toLowerCase().includes('bitcoin')
  ) {
    console.log('yesst');
    return alert('Bad Idea!');
  }
  return next(action);
};

export default checker;
