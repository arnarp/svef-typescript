import {
  createGetStarsFailureAction,
  createGetStarsRequestAction,
  createGetStarsSuccessAction,
} from './action.creators';

export function getStars() {
  return dispatch => {
    dispatch(createGetStarsRequestAction());

    return fetch('https://api.github.com/repos/barbar/vortigern')
      .then(res => {
        if (res.ok) {
          return res.json()
            .then(res => dispatch(createGetStarsSuccessAction(res.stargazers_count)));
        } else {
          return res.json()
            .then(res => dispatch(createGetStarsFailureAction(res)));
        }
      })
      .catch(err => dispatch(createGetStarsFailureAction(err)));
  };
}
