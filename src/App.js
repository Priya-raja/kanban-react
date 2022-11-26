import React from "react";
import Nav from "./components/nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboards from "./pages/dashboards";
import Board from "./pages/board";

const App = () => {
  
  return (
    <div className="app">
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Dashboards />} />
          <Route path="/board" element={<Board/>} />
          <Route path="/board/:id" element={<Board />} editMode={true} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
