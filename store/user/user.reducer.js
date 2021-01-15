import { handleActions } from "redux-actions";
import { types } from "./user.meta";

const login = (state, action) => ({
  ...state,
  user: action.payload,
});

const editProfileSuccess = (state, action) => ({
  ...state,
  user: action.payload,
});

const loginSuccess = (state, action) => ({
  ...state,
  user: action.payload
})

export default handleActions(
  {
    [types.LOGIN_SUCCESS]: login,
    [types.EDIT_PROFILE_SUCCESS]: editProfileSuccess,
    [types.LOGIN_SUCCESS]: loginSuccess,
  },
  {}
);
