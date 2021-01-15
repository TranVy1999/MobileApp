import { createAction } from "redux-actions";

export const types = {
  FETCH_NEWS: "FETCH_NEWS",
  FETCH_NEWS_SUCCESS: "FETCH_NEWS_SUCCESS",

  //   FETCH_MANGA_BY_ID: "FETCH_MANGA_BY_ID",
  //   FETCH_MANGA_BY_ID_SUCCESS: "FETCH_MANGA_BY_ID_SUCCESS",
};

export const actionCreators = {
    //3
  actFetchNews: createAction(types.FETCH_NEWS),
    //8
  actFetchNewsSuccess: createAction(types.FETCH_NEWS_SUCCESS),

  //   actFetchMangaById: createAction(types.FETCH_MANGA_BY_ID),
  //   actFetchMangaByIdSuccess: createAction(types.FETCH_MANGA_BY_ID_SUCCESS),
};
