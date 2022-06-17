import React from "react";
import { useSelector } from "react-redux";
import "./AnimeInfo.css";

const titleClicked = (event) => {
  console.log("title is clicked:");
};
function AnimeInfo() {
  const selector = useSelector((state) => state.mulQuiz.quiz);

  return (
    <div className="animeInfo">
      <div className="title" onClick={titleClicked}>
        {selector.quizTitle}
      </div>
      <hr style={{ width: "100%" }} />
      <div className="description">{selector.quizDescription}</div>
    </div>
  );
}

export default AnimeInfo;
