import { ERROR_HIDE } from "../actionTypes";

export default function errorHide() {
  return {
    type: ERROR_HIDE,
    isError: false,
    message: ""
  };
}
