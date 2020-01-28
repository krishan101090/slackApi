import {
  GET_WORKSPACE_URL_BEGIN,
  GET_WORKSPACE_URL_SUCCESS
} from "../actionTypes";

export function getWorkspaceUrlBegin(data, history) {
  return {
    type: GET_WORKSPACE_URL_BEGIN,
    data,
    history
  };
}
export function getWorkspaceUrlSuccess(payload) {
  return {
    type: GET_WORKSPACE_URL_SUCCESS,
    payload
  };
}
