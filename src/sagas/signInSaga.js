import { call, put, takeEvery } from "redux-saga/effects";
import qs from "qs";
import { postCall } from "./api";
import { appUrl, BASE_URL } from "../constants/url";
import * as types from "../actionTypes";

function* signIn(action) {
  const { data, history } = action;
  const { response, error } = yield call(
    postCall,
    `${`${BASE_URL}/${appUrl.SIGN_IN}`}`,
    qs.stringify(data)
  );
  if (response) {
    yield put({
      type: types.SIGNIN_SUCCESS,
      payload: response.data
    });
    if (response.data.ok === true) {
      sessionStorage.setItem("token", response.data.token);
      history.push("/dashboard");
    } else {
      yield put({
        type: types.ERROR,
        payload: { isError: !response.data.ok, message: response.data.error }
      });
    }
  } else if (error) {
    yield put({
      type: types.ERROR,
      payload: { isError: true, message: "Server Error" }
    });
  }
}

export default function* signInWatcher() {
  yield takeEvery(types.SIGNIN_BEGIN, signIn);
}
