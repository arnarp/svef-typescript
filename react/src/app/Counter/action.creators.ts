import { IIncrementAction, IDecrementAction } from './actions';

/** Action Creator: Increments the Counter */
export function createIncrementAction(): IIncrementAction {
  return {
    type: 'counter/INCREMENT',
  };
}

/** Action Creator: Decrements the Counter */
export function createDecrementAction(): IDecrementAction {
  return {
    type: 'counter/DECREMENT',
  };
}
