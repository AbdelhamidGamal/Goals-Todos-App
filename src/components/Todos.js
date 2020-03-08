import React from 'react';
import { connect } from 'react-redux';
import ListCompo from './List';
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggleTodo
} from '../actions/todos';

class Todos extends React.Component {
  state = { value: '' };

  capturethis = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  removeitem = i => {
    this.props.dispatch(handleDeleteTodo(i));
  };

  submitThis = e => {
    e.preventDefault();
    this.props.dispatch(handleAddTodo(this.state.value));
    this.setState({ value: '' });
  };

  toggleItem = i => {
    this.props.dispatch(handleToggleTodo(i));
  };

  render() {
    return (
      <div id='todoArea'>
        <h1>ToDos</h1>
        <form id='addTodoForm'>
          <input
            type='text'
            id='addATodoInReact'
            value={this.state.value}
            onChange={this.capturethis}
            placeholder=' Add A Todo'
          />

          <input
            onClick={this.submitThis}
            type='submit'
            id='submitTodoInReact'
            value='Submit'
          />
        </form>
        <ul id='todoslist'>
          <ListCompo
            toggle={this.toggleItem}
            removeitem={this.removeitem}
            thelist={this.props.todos}
          />
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}))(Todos);
