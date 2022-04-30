import React from "react";
import { useSelector } from "react-redux";
import "./GridQuestion.css";

const GridQuestion = (props) => {
  const selector = useSelector((state) => state.mulQuiz.quiz);
  const { swiperClick } = props;

  return (
    <div className="grid-question">
      <div className="alert-label">
        <div className="alert-txt">
          <span className="warning-icon alert-icons"></span>
          Unanswered
        </div>
        <div className="alert-txt">
          <span className="success-icon alert-icons"></span>
          answered
        </div>
      </div>
      <div className="grid-view">
        {selector.questions &&
          selector.questions.map((item, index) => (
            <div
              className={`grid-item ${
                item.answer !== "" ? "success" : "warning"
              }`}
              onClick={() => swiperClick(index)}
            >
              {index + 1}
            </div>
          ))}
      </div>
    </div>
  );
};

export default GridQuestion;
