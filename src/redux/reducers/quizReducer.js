import { quizConstants, gridContants } from "../constants";

const initQuizState = {
  quiz: [],
  loading: false,
};

const initGridState = {
  grid: [],
  loading: false,
};

export default (state = initQuizState, action) => {
  switch (action.type) {
    case quizConstants.QUIZ_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case quizConstants.QUIZ_DATA_SUCCESS:
      let previousState = [...state.quiz];
      let checkWithQuestionId = previousState.findIndex(
        (question) => question.questionId === action.payload.questionId
      );
      let quizdata = [];
      if (checkWithQuestionId === -1) {
        quizdata = [...previousState, action.payload];
      } else {
        previousState[checkWithQuestionId] = action.payload;
        quizdata = [...previousState];
      }
      return {
        ...state,
        // quiz.push(action.payload),
        quiz: quizdata,
        loading: false,
      };

    case quizConstants.QUIZ_DATA_FAILURE:
      return {
        ...state,
        quiz: [],
        loading: false,
      };
    case quizConstants.REMOVE_QUIZ_DATA:
      return {
        ...state,
        quiz: [],
        loading: false,
      };
    default:
      return state;
  }
};

export const gridReducer = (state = initGridState, action) => {
  switch (action.type) {
    case gridContants.GRID_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case gridContants.GRID_DATA_SUCCESS:
      return {
        ...state,
        // quiz.push(action.payload),
        grid: action.payload,
        loading: false,
      };

    case gridContants.GRID_DATA_FAILURE:
      return {
        ...state,
        grid: [],
        loading: false,
      };
    case gridContants.REMOVE_GRID_DATA:
      return {
        ...state,
        grid: [],
        loading: false,
      };
    default:
      return state;
  }
};
