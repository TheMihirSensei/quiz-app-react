import React from 'react';
import "./Qna.css"

function Qna(props) {
  return <div className='qna'>
    <div id='question'>{props.question}</div>

    <div className='optionContainer'>
    {
      props.options.map(option => {
        return <div className='option'>
          {option}
          {/* <input id="op" className='radioInput' type="radio" value={option}></input> */}
          {/* <div for='op' >{option}</div> */}
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
