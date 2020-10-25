import { createAction } from "redux-actions";

export const types = {
  SET_LOADING: "SET_LOADING",
};

export const actionCreator = {
  setLoading: createAction(types.SET_LOADING),
};
