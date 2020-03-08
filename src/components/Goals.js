import React from 'react';
import { connect } from 'react-redux';
import ListCompo from './List';
import { handleAddGoal, handleRemoveGoal } from '../actions/goals';

class Goals extends React.Component {
  state = { value: '' };

  capturethis = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
  };

  removeitem = i => {
    this.props.dispatch(handleRemoveGoal(i));
  };

  submitThis = e => {
    e.preventDefault();
    this.props.dispatch(handleAddGoal(this.state.value));
    this.setState({ value: '' });
  };

  render() {
    return (
      <div id='goalsArea'>
        <h1>Goals</h1>
        <form id='addGoalForm'>
          <input
            type='text'
            id='addAGoalInReact'
            value={this.state.value}
            onChange={this.capturethis}
            placeholder='Add A Goal'
          />
          <input
            onClick={this.submitThis}
            type='submit'
            id='submitGoalInReact'
            value='Submit'
          />
        </form>
        <ul id='goalslist'>
          <ListCompo removeitem={this.removeitem} thelist={this.props.goals} />
        </ul>
      </div>
    );
  }
}

export default connect(state => ({
  goals: state.goals
}))(Goals);
