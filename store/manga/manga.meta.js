import { createAction } from "redux-actions";

export const types = {
  FETCH_MANGA: "FETCH_MANGA",
  FETCH_MANGA_SUCCESS: "FETCH_MANGA_SUCCESS",

  //   FETCH_MANGA_BY_ID: "FETCH_MANGA_BY_ID",
  //   FETCH_MANGA_BY_ID_SUCCESS: "FETCH_MANGA_BY_ID_SUCCESS",
};

export const actionCreators = {
    //3
  actFetchMangas: createAction(types.FETCH_MANGA),
    //8
  actFetchMangasSuccess: createAction(types.FETCH_MANGA_SUCCESS),

  //   actFetchMangaById: createAction(types.FETCH_MANGA_BY_ID),
  //   actFetchMangaByIdSuccess: createAction(types.FETCH_MANGA_BY_ID_SUCCESS),
};
