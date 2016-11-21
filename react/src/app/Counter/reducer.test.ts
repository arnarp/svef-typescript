import { expect } from 'chai';
import counterReducer from './reducer';
import ICounterState from './state';
import ICounterAction from './actions';

/** Module */
describe('Counter Module', () => {
  describe('Reducer', () => {
    let state: ICounterState = { count: 10 };

    it('handles action of type INCREMENT', () => {
      const action: ICounterAction = { type: 'counter/INCREMENT' };
      expect(counterReducer(state, action)).to.be.eql({ count: state.count + 1 });
    });

    it('handles action of type DECREMENT', () => {
      const action: ICounterAction = { type: 'counter/DECREMENT' };
      expect(counterReducer(state, action)).to.be.eql({ count: state.count - 1 });
    });

    it('handles actions with unknown type', () => {
      expect(counterReducer(state, { type: 'unkownAction' })).to.be.eql({ count: state.count });
    });

  });
});
