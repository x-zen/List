import axios from 'axios';

//Authentication actions
export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const login = creds => dispatch => {
  dispatch({ type:LOGIN_START })
  return axios.post('https://buildweek-wunderlist.herokuapp.com/api/login', creds, {headers: { authorization: localStorage.getItem('token')}})
    .then(res => {
      localStorage.setItem('token', res.data.token)
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

//ListNav actions
export const GET_LIST_START = 'GET_LIST_START';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAIL = 'GET_LIST_FAIL';

export const readLists = lists => dispatch => {
  dispatch({ type: GET_LIST_START });
  return axios.post('https://buildweek-wunderlist.herokuapp.com/api/lists', lists, {headers: { authorization: localStorage.getItem('token')}})
    .then(res => {
      console.log(res)
      localStorage.setItem('', res.data.payload)
      dispatch({ type: GET_LIST_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_LIST_FAIL, payload: err })
    });
};

export const ADD_LIST_START = 'ADD_LIST_START';
export const ADD_LIST_SUCCESS = 'ADD_LIST_SUCCESS';
export const ADD_LIST_FAIL = 'ADD_LIST_FAIL';

export const addList = lists => dispatch => {
  dispatch({ type: ADD_LIST_START });
  return axios.post('https://buildweek-wunderlist.herokuapp.com/api/lists', lists, {headers: { authorization: localStorage.getItem('token')}})
    .then(res => {
      dispatch({ type: ADD_LIST_SUCCESS, payload: res.data.payload });
    })
    .catch(err => {
      dispatch({ type: ADD_LIST_FAIL, payload: err })
    });
};
