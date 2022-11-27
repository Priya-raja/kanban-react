import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import ReactSwitch from "react-switch";

const Nav = () => {
  let navigate = useNavigate();
  return (
    <nav>
      <div className="logo-container">Kanban</div>

      {/* <MdLightMode /> Theme */}

      <div className="controls-container">
        <div className="icon" onClick={() => navigate("/")}>
          
          Dashboard
        </div>
        <div className="icon" onClick={() => navigate("/board")}>
        
          Board
        </div>
      </div>
    </nav>
  );
};

export default Nav;
