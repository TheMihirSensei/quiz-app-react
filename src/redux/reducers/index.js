import { combineReducers } from "redux";
import quizReducer from "./quizReducer";

const rootReducers = combineReducers({
  mulQuiz: quizReducer,

});
export default rootReducers;
