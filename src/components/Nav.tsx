import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { MdLightMode } from "react-icons/md";

import { ThemeContext } from "../ThemeContext";
const Nav = () => {
  let navigate = useNavigate();

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ background: theme.foreground, color: theme.background }}>
      <div className="logo-container">Kanban</div>

      {/*  Theme */}

      <div className="controls-container">
        <div className="icon">
          <button
            style={{
              borderRadius: "30px",
              background: theme.background,
              color: theme.foreground,
            }}
            onClick={toggleTheme}
          >
            <MdLightMode />
            Theme
          </button>
        </div>

        <div
          className="icon"
          style={{ background: theme.background, color: theme.foreground }}
          onClick={() => navigate("/")}
        >
          Dashboard
        </div>
        <div
          className="icon"
          style={{ background: theme.background, color: theme.foreground }}
          onClick={() => navigate("/board")}
        >
          Board
        </div>
      </div>
    </nav>
  );
};

export default Nav;
