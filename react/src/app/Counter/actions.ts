import IUnkownAction from '../../store/IUnknownAction';

export interface IIncrementAction {
  type: 'counter/INCREMENT';
}

export interface IDecrementAction {
  type: 'counter/DECREMENT';
}

type ICounterAction = IIncrementAction | IDecrementAction | IUnkownAction;

export default ICounterAction;
