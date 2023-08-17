import React, { useState } from "react";
import { BrowserRouter as Router, Route,Routes} from "react-router-dom";
import InputForm from "./components/createCredit";
import Todos from "./components/credit";
import "./App.css"; 
import "./style.css" ; 

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/input"
          element ={<InputForm  todos={todos} setTodos={setTodos} />}
              
      
          />
          <Route
            path="/"
            element={ <Todos  todos={todos} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


