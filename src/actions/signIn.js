import { SIGNIN_BEGIN, SIGNIN_SUCCESS } from "../actionTypes";

export function signInBegin(data, history) {
  return {
    type: SIGNIN_BEGIN,
    data,
    history
  };
}
export function signInSuccess(payload) {
  return {
    type: SIGNIN_SUCCESS,
    payload
  };
}
