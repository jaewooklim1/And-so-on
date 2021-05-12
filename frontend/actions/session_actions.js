import * as APIUtils from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"

const receiveCurrentUser = (user) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  }
}

const logoutCurrentUser = () => {
  return {
    type: LOGOUT_CURRENT_USER
  }
}

const receiveErrors = (errors) => {
  debugger
  return ({
  type: RECEIVE_ERRORS,
  errors: errors.responseJSON
})}


export const removeErrors = () => {
  return ({
    type: REMOVE_ERRORS,
  })
} 

export const signup = (user) => (dispatch) => (
  APIUtils.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors))) 
)

export const login = (user) => (dispatch) => {
  return (
  APIUtils.login(user)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(errors => dispatch(receiveErrors(errors))) 
)}

export const logout = () => (dispatch) => (
  APIUtils.logout()
    .then(() => dispatch(logoutCurrentUser()))
)