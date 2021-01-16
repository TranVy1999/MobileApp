import { types } from "./news.meta";
import { handleActions } from "redux-actions";

const defaultNewsState = {
  news: [],
  //   byId: {},
};
  //10
const getNewsSuccess = (state, action) => ({
  ...state,
  news: action.payload,
});

// const getMangaByIdSuccess = (state, action) => ({
//   ...state,
//   byId: action.payload,
// });

export default handleActions(
  {   //9
    [types.FETCH_NEWS_SUCCESS]: getNewsSuccess,
    // [types.FETCH_MANGA_BY_ID_SUCCESS]: getMangaByIdSuccess,
  },
  defaultNewsState
);
