import ICounterState from '../app/counter/state';
import IStarsState from '../app/stars/state';

interface IStore {
  counter: ICounterState;
  stars: IStarsState;
};

export default IStore;
