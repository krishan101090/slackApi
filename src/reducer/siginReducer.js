import { SIGNIN_SUCCESS } from "../actionTypes";

const initialState = {
  token: "",
  email: ""
};

export default function signInReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
