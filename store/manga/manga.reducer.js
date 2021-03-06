import { types } from "./manga.meta";
import { handleActions } from "redux-actions";

const defaultMangaState = {
  mangas: [],
  //   byId: {},
};
  //10
const getMangasSuccess = (state, action) => ({
  ...state,
  mangas: action.payload,
});

// const getMangaByIdSuccess = (state, action) => ({
//   ...state,
//   byId: action.payload,
// });

export default handleActions(
  {   //9
    [types.FETCH_MANGA_SUCCESS]: getMangasSuccess,
    // [types.FETCH_MANGA_BY_ID_SUCCESS]: getMangaByIdSuccess,
  },
  defaultMangaState
);
