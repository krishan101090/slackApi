import { combineReducers } from "redux";
import getWorkSpaceUrlReducer from "./getWorkSpaceUrlReducer";
import error from "./errorReducer";
import signIn from "./siginReducer";

const rootReducer = combineReducers({
  workSpaceUrl: getWorkSpaceUrlReducer,
  signIn,
  error
});

export default rootReducer;
