import { call, put, takeEvery } from "redux-saga/effects";
import qs from "qs";
import { postCall } from "./api";
import { appUrl, BASE_URL } from "../constants/url";
import * as types from "../actionTypes";

function* getWorkSpaceUrl(action) {
  const { data, history } = action;
  const { response, error } = yield call(
    postCall,
    `${`${BASE_URL}/${appUrl.FIND_TEAM}`}`,
    qs.stringify(data)
  );
  if (response) {
    yield put({
      type: types.GET_WORKSPACE_URL_SUCCESS,
      payload: response.data
    });
    if (response.data.ok === true) {
      sessionStorage.setItem("team_id", response.data.team_id);
      sessionStorage.setItem("team_url", response.data.url);
      sessionStorage.setItem("team_name", data.domain);
      history.push(`${`/signin/${data.domain}`}`);
    } else {
      yield put({
        type: types.ERROR,
        payload: { isError: !response.data.ok, message: response.data.error }
      });
      history.push("/");
    }
  } else if (error) {
    yield put({
      type: types.ERROR,
      payload: { isError: true, message: "Server Error" }
    });
  }
}

export default function* getWorkSpaceUrlWatcher() {
  yield takeEvery(types.GET_WORKSPACE_URL_BEGIN, getWorkSpaceUrl);
}
