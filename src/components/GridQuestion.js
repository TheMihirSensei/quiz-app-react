import React from "react";
import { useSelector } from "react-redux";
import "./GridQuestion.css";

const GridQuestion = (props) => {
  //   const selector = useSelector((state) => state.mulQuiz.quiz);
  //   console.log("gridTable ", selector);
  const dummy = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
  // sliderId, IsAnswer , qa.length
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
        {dummy.map((item, index) => (
          <div className={`grid-item ${item % 2 == 0 ? "success" : "warning"}`}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridQuestion;
