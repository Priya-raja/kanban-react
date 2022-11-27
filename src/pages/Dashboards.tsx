import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars,  } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import useLocalStorage from "../localStorageFile/useLocalStorage";

const Dashboards = () => {
  let navigate = useNavigate();
  const [title, setTitle] = useLocalStorage('lists',[]);
  const [newTitle, setNewTitle] = useState("");

  const navigateToBoard = () => {
    navigate("/board", { state: { newTitle: newTitle } });
    
  };
  //handle name change
  const handleNameChange = (e: any) => {
    setNewTitle(e.target.value);
  };


  //handle new item addition
  const handleAddItem = () => {

   
      const titleAddition: any = [...title];
      titleAddition.push(newTitle);
      setTitle(titleAddition);
      setNewTitle('')
    
   
  };
  let items = Object.values(title);
  return (
    
    <div className="dashboard">
      
      <h2>My Project</h2>
      <div className="input-group">
        <input
          type="text"
          name="title"
          placeholder="Project title"
          onChange={handleNameChange}
        />
        <button className="btn" onClick={navigateToBoard}>
          Add Project
        </button>
        {/* <button className="btn" onClick ={handleAddItem}> 
        Show Projects
        </button> */}
      </div>

      {/** List container */}
      <div className="list-container">
        {items.map((item, index) => (
          <div key={index} className="list-item">
            <FontAwesomeIcon className="icon" icon={faBars} />
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboards;
