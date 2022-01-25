import React from 'react';
import "./AnimeInfo.css";



const titleClicked = (event) => {
  console.log("title is clicked:")
}
function AnimeInfo() {

 
  return <div className='animeInfo'>
      <div className='title' onClick={titleClicked} >
          My hero Academia
      </div>
      <hr style={{ width:"100%"}}/>
      <div className='description'>
      The series focuses on a middle school student Izuku Midoriya, who has no superpowers. ... Academies across the globe train their students to learn to fight crime with their powers. Izuku Midoriya, a boy born without any powers, dreams of being able to become a super hero too, but gets bullied for his unrealistic dreams.
      </div>

  </div>;
}

export default AnimeInfo;
