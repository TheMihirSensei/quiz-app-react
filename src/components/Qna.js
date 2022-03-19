import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { quizAction } from "../redux/actions/quiz";
import "./Qna.css";

function Qna(props) {
  const dispatch = useDispatch();
  const answer = useRef();
  const handleOptionSubmit = (questionId, e) => {
    console.log("u clicked Me.", questionId);
    console.log("u clicked Meeeeee.", e.target);
    dispatch(quizAction({ questionId, answer: e.target.innerHTML }));
  };

  console.log(".....proppp....answer", props.answer);

  useEffect(() => {
    console.log("answer.....", answer.current.outerText);
  }, []);

  return (
    <div className="qna">
      <div className="headerQna">
        <span>
          <span style={{ color: "#7900ff" }}>{props.questionIndex + 1}</span>/
          <span>{props.totalQuestion}</span>
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
