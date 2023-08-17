import React from "react";
import { Link } from "react-router-dom";
// import 

const Todos = ({ todos }) => {
  return (
    <div>
      <h2>credit</h2>
      <ul>
        {todos.map((todo, index) =>{ 
          return (
          <li key={index}>
            Number: {todo.number}, Text: {todo.text}
        
          </li>
        )})}
      </ul>
      <Link to="/input">Back to Input Form</Link>
    </div>
  );
};

export default Todos;

