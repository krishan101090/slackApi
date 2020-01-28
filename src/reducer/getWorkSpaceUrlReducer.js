import { GET_WORKSPACE_URL_SUCCESS } from "../actionTypes";

const initialState = {
  ok: false
};

export default function getWorkSpaceUrlReducer(state = initialState, action) {
  switch (action.type) {
    case GET_WORKSPACE_URL_SUCCESS:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
}
