import React, { useState, useEffect } from "react";
import axios from "axios"

// import { useHistory } from "react-router-dom";

const InputForm = () => {
  const [number, setNumber] = useState("");
  const [text, setText] = useState("");
  const [todos, setTodos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [trigger,setTrigger] = useState('')
  // const history = useHistory();
  // useEffect(()=>{
  //   axios.get("http://localhost:5000/api/flousi/get")
  //   .then((result)=>{
  //     setTodos(result.data)
  //   })
  //   .catch((err)=>console.log(err))
  // },[])
  
  useEffect(() => {
    axios.get("http://localhost:5000/api/flousi/get")
      .then((result) => {
        setTodos(result.data);
      })
      .catch((err) => console.log(err));
  }, [trigger]);
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  // const updatedTodos = [...todos];
  //      updatedTodos.splice(index, 1);
  // setTodos(updatedTodos);
//       const handleSearch = () =>{
//         todos.filter((flous) =>{
//           return  flous.category.toLowerCase().includes(searchTerm.toLowerCase())
//         }
     
// )}
const handleSearch = () => {
  if (!searchTerm){
setTrigger(!trigger)
  }
  const filteredTodos = todos.filter((flous) =>
    flous.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  setTodos(filteredTodos);
};
  const deleteTodo = (id) => {
    console.log("delete")
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const handleDelete=(id)=>{
  axios
  .delete(`http://localhost:5000/api/flousi/delete/${id}`)
  .then((response) => {console.log(response.data)
          window.location.reload()
  })
  .catch((err) => console.log(err));

}

  const handleAddTodo = () => {
    const newTodo = { number, text };
    setTodos([...todos, newTodo]);
    setNumber("");
    setText("");
  };
  const addTodo=()=>{
  axios
      .post("http://localhost:5000/api/flousi", {
        number:number,
        text:text
      })
      .then((response) => {console.log(response.data)
        setTodos([...todos, response.data])})
      .catch((err) => console.log(err))
    }
    
  

  return (
    <div>
      <h2>carnet de crédit</h2>
      <input type="text" value={number} onChange={(e)=>setNumber(e.target.value)} placeholder="Enter number" />
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder="Enter text" />
      <button onClick={addTodo}>Add</button>
      <input
     type="text"
       value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search"
/>
<button onClick={handleSearch}>Search</button>

      {/* {todos.map((todo, index) => (
      <div key={index}>
        Number: {todo.number}, Text: {todo.text} */}
        {/* <button onClick={deleteTodo }>Delete</button> */}
        {/* <button onClick={ handleTextChange}>Delete</button> */}
      {/* </div> */}
    


      <h2>mon argent</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            flousi: {todo.number}, name: {todo.text}
            <button onClick={() =>{handleDelete(todo._id)
            alert("deleted ")}}>Delete</button>
          </li>
        ))}
      </ul>

      <button>View Todos</button>
    </div>
  );
};

export default InputForm;
