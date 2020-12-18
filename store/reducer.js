import { combineReducers } from "redux";

import page from "./page/page.reducer";
import user from "./page/page.reducer";
import manga from "./manga/manga.reducer";

export default combineReducers({
  page,
  manga,
  user,
});
