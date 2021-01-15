import { takeLatest, put, call, all } from "redux-saga/effects";
import { getNews } from "../../api/apiRouter";

import { sagaErrorWrapper } from "../../utils/error";
import { types, actionCreators } from "./news.meta";
  //5
function* sagaGetNews(action) {
  const { body, httpStatus } = yield call(getNews);
  if (httpStatus === 200) {
      //7
    yield put(actionCreators.actFetchNewsSuccess(body));
  }
}

// function* sagaFetchMangaById(action) {
//   const { id } = action.payload;
//   const { body, httpStatus } = yield call(getMangaById, id);
//   if (httpStatus === 200) {
//     yield put(actionCreators.actFetchMangaByIdSuccess(body));
//   }
// }

// Monitoring Sagas
function* newsMonitor() {
  yield all([
        //4
    takeLatest(types.FETCH_NEWS, sagaErrorWrapper(sagaGetNews)),
    // takeLatest(
    //   types.FETCH_PRODUCT_BY_ID,
    //   sagaErrorWrapper(sagaFetchProductById)
    // ),
  ]);
}

export default newsMonitor;
