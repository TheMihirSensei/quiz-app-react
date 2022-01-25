import React from 'react';
import "./Qna.css"

function Qna(props) {
  return <div className='qna'>
    <div id='question'>{props.question}</div>
    <div className='optionContainer'>
    {
      props.options.map((option, index) => {
        return <div key={index} className='option'>
          {option}
          </div>
      })
    } 
    </div>
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
