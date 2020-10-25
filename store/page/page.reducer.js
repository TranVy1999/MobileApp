import { handleActions } from "redux-actions";
import { types } from "./page.meta";

const initialState = {
  loading: false,
};

const setLoading = (state, action) => ({
  ...state,
  loading: !!action.payload,
});

export default handleActions(
  {
    [types.SET_LOADING]: setLoading,
  },
  initialState
);
