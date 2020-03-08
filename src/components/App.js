import React from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import ContectedTodos from './Todos';
import ConnectedGoals from './Goals';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    if (this.props.loading) {
      return <div>loading ...</div>;
    }
    return (
      <div>
        <h1>بسم الله الرحمن الرحيم</h1>
        <ContectedTodos />
        <ConnectedGoals />
      </div>
    );
  }
}

export default connect(state => ({
  loading: state.loading
}))(App);
