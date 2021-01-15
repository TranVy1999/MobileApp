import { all, fork } from "redux-saga/effects";

import user from "./user/user.saga";
import manga from "./manga/manga.saga";
import news from "./news/news.saga";

export default function* rootSaga() {
  yield all([fork(user), fork(manga),fork(news)]);
}
