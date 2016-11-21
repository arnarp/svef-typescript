import {
  IGetStarsRequest,
  IGetStarsSuccess,
  IGetStarsFailure,
} from './actions';

export function createGetStarsRequestAction(): IGetStarsRequest {
  return {
    type: 'stars/GET_STARS_REQUEST',
  };
}

export function createGetStarsSuccessAction(count: number): IGetStarsSuccess {
  return {
    type: 'stars/GET_STARS_SUCCESS',
    payload: {
      count,
    },
  };
}

export function createGetStarsFailureAction(message: any): IGetStarsFailure {
  return {
    type: 'stars/GET_STARS_FAILURE',
    payload: {
      message,
    },
  };
}
