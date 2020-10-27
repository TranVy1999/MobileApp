import { takeLatest, call, put } from "redux-saga/effects";
import { Modal } from "@ant-design/react-native";
import { types, actionCreator } from "./user.meta";
import {
  loginRequest,
  editProfileRequest,
  registerRequest,
} from "../../api/apiRouter";

const errMessage = {
  message: "Opp! Đã xảy ra lỗi",
  description: "Liên hệ ban quản trị viên để biết thêm thông tin chi tiết!",
};

const showAlert = (
  title = "",
  message = "",
  actions = [],
  timeout = 500000
) => {
  const alertInstance = Modal.alert(title, message, actions);
  setTimeout(() => {
    alertInstance.close();
  }, timeout);
};

function* login(action) {
  try {
    const { body } = yield call(loginRequest.request, {
      data: action.payload,
    });
    const { user, token } = body;
    if (token) {
      localStorage.setItem("pcutk", token);
      yield put(actionCreator.loginSuccess(user));
      showAlert("Đăng nhập thành công!", "", [], 1000);
      setTimeout(() => {
        // chuyển hướng sang home
      }, 1000);
    } else {
      throw Error;
    }
  } catch (error) {
    if (
      error.response &&
      error.response.status === 404 &&
      error.response.data.message === "LOGIN_FAIL"
    ) {
      return showAlert("Email hoặc password không đúng!", "", [
        { text: "Trở lại", style: { color: "#ff5454" } },
      ]);
    }
    showAlert(`${errMessage}`, "", [], 2000);
  }
}

function* editProfile(action) {
  try {
    const { body } = yield call(editProfileRequest.request, {
      data: action.payload,
    });
    const { user } = body;
    yield put(actionCreator.editProfileSuccess(user));
    showAlert("Cập nhật thông tin thành công!", "", [], 2000);
  } catch (error) {
    showAlert(`${errMessage}`, "", [], 2000);
  }
}

function* register(action) {
  try {
    const { body } = yield call(registerRequest.request, {
      data: action.payload,
    });
    const { user, token } = body;
    localStorage.setItem("utk", token);
    yield put(actionCreator.loginSuccess(user));
    showAlert("Đăng ký tài khoản thành công!", "", [], 1800);
    setTimeout(() => {
      //   Router.push("/home") => chuyển qua home
    }, 1800);
  } catch (error) {
    if (error.response && error.response.status === 409) {
      return showAlert(
        "Email đã tồn tại!",
        "Xin hãy thử lại với một email khác",
        [],
        2000
      );
    }
    showAlert(`${errMessage}`, "", [], 2000);
  }
}

export default function* userSaga() {
  yield takeLatest(types.EDIT_PROFILE, editProfile);
  yield takeLatest(types.LOGIN, login);
  yield takeLatest(types.REGISTER, register);
}
