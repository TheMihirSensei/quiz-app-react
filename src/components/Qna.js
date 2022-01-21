import React from 'react';
import "./Qna.css"

function Qna(props) {
  return <div className='qna'>
    <div id='question'>{props.question}</div>
    {
      props.options.map(option => {
        return <div>
          <input type="radio" value={option}></input>
          {option}
          </div>
      })
    }
    <div id='options'></div>
  </div>;
}

Qna.defaultProps = {
  question:"this is default the question",
  options: [
    "this is option A",
    "this is option B",
    "this is option C",
    "this is option D"

  ]
}

export default Qna;
