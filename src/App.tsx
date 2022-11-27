
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboards from "./Pages/Dashboards";
import Board from "./Pages/Board";



const App = () => {  
  
  return (
    
   
    <div className="app" >
      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route path="/" element={<Dashboards />} />
          <Route path="/board" element={<Board/>} />
          {/* <Route path="/board/:id" element={<Board />}  /> */}
        </Routes>
      </BrowserRouter>
    </div>
    
  );
};

export default App;