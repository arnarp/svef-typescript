import ICounterState from './state';
import ICounterAction from './actions';

/** Counter: Initial State */
const initialState: ICounterState = {
  count: 0,
};

/** Reducer: CounterReducer */
export default function counterReducer(state = initialState, action: ICounterAction) {
  switch (action.type) {
    case 'counter/INCREMENT':
      return {
        count: state.count + 1,
      };

    case 'counter/DECREMENT':
      return {
        count: ((state.count - 1 > 0) ? state.count - 1 : 0),
      };

    default:
      return state;
  }
}
