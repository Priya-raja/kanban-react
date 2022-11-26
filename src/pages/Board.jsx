import React from 'react'

import {useLocation} from 'react-router-dom';

const Board = () => {

  const {state} = useLocation();
  return (
    
    <div>
      { state != null ? <div>{state.newTitle}</div> : ""} 
    
    </div>
  )
}

export default Board