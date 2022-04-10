import { quizConstants } from "../constants";

const initQuizState = {
  quiz: {},
  loading: false,
};

export default (state = initQuizState, action) => {
  switch (action.type) {
    case quizConstants.QUIZ_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case quizConstants.QUIZ_INITIAL_REQUEST: {
      let quizObj = {
        quizId: action.payload.quizId,
        quizDescription: action.payload.quizDescription,
        quizTitle: action.payload.quizTitle,
      };
      let questions = action.payload.questions.map((item) => {
        return {
          questionId: item._id,
          question: item.question,
          point: item.point,
          options: item.options,
          answer: "",
        };
      });
      quizObj["questions"] = questions;
      return {
        ...state,
        quiz: quizObj,
        loading: true,
      };
    }

    case quizConstants.QUIZ_ADD_TO_ANSWER: {
      let quizObj = {};
      let previousObj = { ...state.quiz };
      let previousQuestions = previousObj.questions;
      let questionIndex = previousQuestions.findIndex(
        (item) => item.questionId === action.payload.questionId
      );

      previousQuestions[questionIndex].answer = action.payload.answer;
      return {
        ...state,
        quiz: { quizId: previousObj.quizId, questions: previousQuestions },
        loading: true,
      };
    }

    case quizConstants.QUIZ_DATA_FAILURE: {
      return {
        ...state,
        quiz: [],
        loading: false,
      };
    }

    case quizConstants.QUIZ_INITIAL_FAIL: {
      return {
        ...state,
        quiz: [],
        loading: false,
      };
    }

    case quizConstants.REMOVE_QUIZ_DATA: {
      return {
        ...state,
        quiz: [],
        loading: false,
      };
    }

    default:
      return state;
  }
};
