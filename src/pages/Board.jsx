import React,{useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom';
import './board.css'
import Panel from '../components/panel'
import CustomInputPanel from '../components/customInput'

const Board = () => {
  
const [boards, setBoards] = useState([])
  const {state} = useLocation();
  const addBoardHandler = (name) => {
    const tempBoardsList = [...boards];

    let boardObj = {id: boards.length === 0 ? 1 : boards[boards.length - 1].id + 1,
      // Date.now() + Math.random() * 2,
      title: name,
      cards: [],}
    tempBoardsList.push(boardObj);
    setBoards(tempBoardsList);
    console.log(boards)
  };

  return (
    
    <div className='board-container'>
      
<Panel id="p1" className="panel-container">
<div className="app-nav">
{ state != null ? 
      <div className="project-title">
        <h1>{state.newTitle}</h1>
        </div>
       : <h1>My Project</h1>
       } 
      </div>
      <div className="app-boards-container">
        <div className="app-boards">
          <div className="app-boards-last">
            <CustomInputPanel
              displayClass="app-boards-add-board"
              editClass="app-boards-add-board-edit"
              placeholder="Enter Panel Name"
              text="Add Panel"
              buttonText="Add Panel"
              onSubmit={addBoardHandler}
            />
          </div>
        </div>
      </div>
</Panel>
       
    </div>
  )
}

export default Board