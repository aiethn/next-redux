import main from "./main";
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  main: main,
});
