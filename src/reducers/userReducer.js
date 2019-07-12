import { createReducer } from "./utils";

export default createReducer({ isLoggedIn: false }, {
  LOGIN_REQUEST: (state, action) => ({ ...state, username: action.username, isLoggedIn: false }),
  LOGIN_SUCCESS:  (state, action) => ({ ...state, username: action.username, isLoggedIn: true }),
  LOGIN_FAILURE:  (state, action) => ({ ...state, error: action.error, isLoggedIn: false }),
  LOGOUT:  () => ({ isLoggedIn: false }),
})
