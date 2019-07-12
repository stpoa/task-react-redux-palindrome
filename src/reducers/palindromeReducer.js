import { createReducer } from "./utils";

export default createReducer([], {
  SET_PALINDROME: (state, action) => [action.payload, ...state],
})
