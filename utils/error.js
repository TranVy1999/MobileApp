import { actionCreator } from "../store/page/page.meta";
import { call, put } from "redux-saga/effects";

export function sagaErrorWrapper(executor, customErrorHandling) {
  return function* (action) {
    try {
      yield put(actionCreator.setLoading(true));
      yield executor(action);
    } catch (error) {
      console.log(error, "sagaError");
      const { message, status } = error;
      if (customErrorHandling) {
        yield call(customErrorHandling, error);
        return;
      }

      if (status === 500) {
        const errorMessage = parseError(message);

        if (
          errorMessage === errorMessages.TOKEN_EXPIRE ||
          errorMessage === errorMessages.SESSION_EXPIRE
        ) {
          // session expired, get new token from refresh token
          yield call(refreshToken);
          return;
        }
        notification.error({
          message: errorMessage,
        });

        return;
      }
      notification.error({
        message: errorMessages["DEFAULT"],
      });
    } finally {
      yield put(actionCreator.setLoading(false));
    }
  };
}
