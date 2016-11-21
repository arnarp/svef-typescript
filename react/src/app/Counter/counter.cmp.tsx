import * as React from 'react';
import {
  createIncrementAction,
  createDecrementAction,
} from './action.creators';
import {
  IIncrementAction,
  IDecrementAction,
} from './actions';
import ICounterState from './state';
const { connect } = require('react-redux');
const s = require('./counter.cmp.css');

interface IProps {
  counter: ICounterState;
  increment: Redux.ActionCreator<IIncrementAction>;
  decrement: Redux.ActionCreator<IDecrementAction>;
}

@connect(
  state => ({ counter: state.counter }),
  dispatch => ({
    decrement: () => dispatch(createDecrementAction()),
    increment: () => dispatch(createIncrementAction()),
  })
)
export default class Counter extends React.Component<IProps, void> {

  public render() {
    const { increment, decrement, counter } = this.props;

    return (
      <div className={s.counter}>
        <h4>Counter Example</h4>
        <button
          name="incBtn"
          onClick={increment}>
          INCREMENT
        </button>
        <button
          name="decBtn"
          onClick={decrement}
          disabled={counter.count <= 0}>
          DECREMENT
        </button>
        <p>{counter.count}</p>
      </div>
    );
  }
}
