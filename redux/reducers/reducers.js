import { combineReducers } from "redux";
import ageReducer from "./ageReducer";

const rootReducer = combineReducers({
  ageReducer,
});

export default rootReducer;
