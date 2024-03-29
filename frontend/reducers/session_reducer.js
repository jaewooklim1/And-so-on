import { LOGOUT_CURRENT_USER, RECEIVE_CURRENT_USER } from "../actions/session_actions";

const nullSession = {
  id: null
}

const sessionReducer = (state = nullSession, action) =>{
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return Object.assign({}, {id: action.user.id})
    case LOGOUT_CURRENT_USER:
      return nullSession;
    default:
      return state;
  }
}

export default sessionReducer;