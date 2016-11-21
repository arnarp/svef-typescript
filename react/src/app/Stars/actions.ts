export interface IGetStarsRequest {
  type: 'stars/GET_STARS_REQUEST';
}

export interface IGetStarsSuccess {
  type: 'stars/GET_STARS_SUCCESS';
  payload: {
    count: number
  };
}

export interface IGetStarsFailure {
  type: 'stars/GET_STARS_FAILURE';
  payload: {
    message: string;
  };
}

type IStarsAction = IGetStarsRequest | IGetStarsSuccess | IGetStarsFailure;

export default IStarsAction;
