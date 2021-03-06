import { takeLatest, put, call, all } from "redux-saga/effects";
import { getMangas, getMangaById } from "../../api/apiRouter";

import { sagaErrorWrapper } from "../../utils/error";
import { types, actionCreators } from "./manga.meta";
  //5
function* sagaGetMangas(action) {
  const { body, httpStatus } = yield call(getMangas);
  if (httpStatus === 200) {
      //7
    yield put(actionCreators.actFetchMangasSuccess(body));
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
function* mangaMonitor() {
  yield all([
        //4
    takeLatest(types.FETCH_MANGA, sagaErrorWrapper(sagaGetMangas)),
    // takeLatest(
    //   types.FETCH_PRODUCT_BY_ID,
    //   sagaErrorWrapper(sagaFetchProductById)
    // ),
  ]);
}

export default mangaMonitor;
