import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { quizAction, quizAddToAnswerAction } from "../redux/actions/quiz";
import "./Qna.css";

function Qna(props) {
  const dispatch = useDispatch();
  const quizSelector = useSelector((state) => state.mulQuiz.quiz);
  const answer = useRef();
  const handleOptionSubmit = (questionId, e) => {
    dispatch(quizAddToAnswerAction({ questionId, answer: e.target.innerHTML }));
  };

  return (
    <div className="qna">
      <div className="headerQna">
        <span>
          <span style={{ color: "#7900ff" }}>{props.questionIndex + 1}</span>/
          <span>{quizSelector.questions.length}</span>
        </span>
      </div>
      <div id="question">{props.question}</div>
      <div className="optionContainer">
        {props.options.map((option, index) => {
          return (
            <div
              key={index}
              ref={answer}
              onClick={(e) => {
                handleOptionSubmit(props.id, e);
              }}
              className={`option ${
                props.answer === option ? "activeOption" : ""
              }`}
            >
              {option}
            </div>
          );
        })}
      </div>
    </div>
  );
}

Qna.defaultProps = {
  question: "this is default the question",
  options: [
    "this is option A",
    "this is option B",
    "this is option C",
    "this is option D",
  ],
};

export default Qna;
