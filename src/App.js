import React from "react";
import Nav from "./components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboards from "./pages/Dashboards";
import Board from "./pages/Board";

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
