import axiosInstance from "../../config";
import { gridContants, quizConstants } from "../constants";

//get quiz
export const quizAction = (question) => {
  console.log("...quesiotn", question);
  return async (dispatch) => {
    try {
      dispatch({
        type: quizConstants.QUIZ_DATA_REQUEST,
      });
      dispatch({ type: quizConstants.QUIZ_DATA_SUCCESS, payload: question });
    } catch (err) {
      dispatch({ type: quizConstants.QUIZ_DATA_FAILURE });
    }
  };
};

export const gridAction = (payload) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: gridContants.GRID_DATA_REQUEST,
      });
      dispatch({ type: gridContants.GRID_DATA_SUCCESS, payload: payload });
    } catch (err) {
      dispatch({ type: gridContants.GRID_DATA_FAILURE });
    }
  };
};

//create API for stroing the response of quiz
// export const quizAction = (question) => {
//     const {questionId, answer} = question
//     console.log("...quesiotn", question)
//     return async (dispatch) => {
//       try {
//         dispatch({
//           type: quizConstants.QUIZ_DATA_REQUEST,
//         });
//         let res = await axiosInstance.get("/quiz/61fc06d724f2a6f6d98c1326");
//         const { data } = res;
//         dispatch({ type: quizConstants.QUIZ_DATA_SUCCESS, payload: data });
//       } catch (err) {
//         dispatch({ type: quizConstants.QUIZ_DATA_FAILURE });
//       }
//     };
//   };
