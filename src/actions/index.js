import axios from 'axios';

//Authentication actions
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = creds => dispatch => {
  dispatch({ type:LOGIN_START })
  return axios.post('https://buildweek-wunderlist.herokuapp.com/api/login', creds)
    .then(res => {
      localStorage.setItem('token', res.data.payload)
      dispatch({ type: LOGIN_SUCCESS, payload:res.data.payload })
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err })
    })
}

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const signup = creds => dispatch => {
  dispatch({ type: SIGNUP_START });
  return axios.post('https://buildweek-wunderlist.herokuapp.com/api/register', creds)
    .then(res => {
      dispatch({ type: SIGNUP_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: SIGNUP_FAIL, payload: err })
    });
};
