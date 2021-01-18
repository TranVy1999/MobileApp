import { applyMiddleware, createStore, compose } from "redux";
import createSaga from "redux-saga";
import saga from "./saga";
import reducer from "./reducer";
import logger from "redux-logger";

const sagaMiddleware = createSaga();

export default function configureStore(initialState) {
  const enhancer = compose(applyMiddleware(logger, sagaMiddleware));
  const store = createStore(reducer, initialState, enhancer);
  sagaMiddleware.run(saga);
  return { store };
}
