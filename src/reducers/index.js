import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  GET_LIST_START,
  GET_LIST_SUCCESS,
  GET_LIST_FAIL
} from '../actions'

const initialState = {
  lists: [
    {
      id: 999,
      title: 'New list',
      description: 'My new list!',
      dueDate: '01/01/2020'
    }
  ],
  isLoggingIn: false,
  isSigningUp: false,
  isGettingLists: false,
  isAddingList: false,
  error: null
}

function reducer(state = initialState, action) {
  switch(action.type) {
    case LOGIN_START:
      return {
        ...state,
        isLoggingIn: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,

      }
    case LOGIN_FAIL:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload
      }
    case SIGNUP_START:
      return {
        ...state,
        isSigningUp: true
      }
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isSigningUp: false
      }
    case SIGNUP_FAIL:
      return {
        ...state,
        isSigningUp: false,
        error: action.payload
      }
    case GET_LIST_START:
      return {
        ...state,
        isGettingLists: true
      }
    case GET_LIST_SUCCESS:
      return {
        ...state,
        isGettingLists: false,
        lists: action.payload,
      }
    case GET_LIST_FAIL:
      return{
        ...state,
        isGettingLists: false,
        error: action.payload
      }
    default:
      return state;
  }
}

export default reducer;
