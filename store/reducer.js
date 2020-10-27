import { combineReducers } from "redux";

import page from "./page/page.reducer";
import user from "./page/page.reducer";

export default combineReducers({
  page,
  user,
});
