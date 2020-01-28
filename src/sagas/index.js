import { all } from "redux-saga/effects";
import getWorkSpaceUrlWatcher from "./getWorkSpaceUrl";
import signInWatcher from "./signInSaga";

export default function* rootSaga() {
  yield all([getWorkSpaceUrlWatcher(), signInWatcher()]);
}
