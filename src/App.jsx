import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

import { ToDoListForm } from './componants/ToDoListForm';
import { useState } from "react";
import{ToDo} from './componants/ToDo';
function App() {
  let [todos,setToDos]=useState([]);
  let [todoShow, setTodoShow]=useState("all");
  function updateTodoList(str){
    setTodoShow(str);
  };
  if(todoShow==="active"){
    todos=todos.filter(todo=> !todo.complete)
  }
  else if(todoShow==="complete"){
    todos=todos.filter(todo=> todo.complete);
  }
  function addToDo(todo){
    setToDos([todo ,...todos]);
  }

  // delete ToDo Function 
  const  deleteHandler=(id)=>{
    setToDos(todos.filter(todo=> todo.id !== id))
  }

  //toggle complete
  const toggleComplete=(id)=>{
    setToDos(
      todos.map((todo)=>{
        if(todo.id===id){
          return{
            ...todo,
            complete:!todo.complete
          }
        }else{
          return todo
        }
      })
    )

  }
  return (
   <div>
      <ToDoListForm  onSubmit={addToDo}/>
    {todos.map((todo)=>{
      return( <ToDo key={todo.id} task={todo} onDelete={()=>deleteHandler(todo.id)} toggleComplete={()=>toggleComplete(todo.id)}/> )
      
})}
  <div className="controls d-flex justify-content-center mt-5">
        <button className="btn bg-primary me-3 text-white" onClick={() => updateTodoList("all")}>All Tasks</button>
        <button className="btn bg-warning me-3 text-white" onClick={() => updateTodoList("active")}>Active</button>
        <button className="btn bg-success text-white" onClick={() => updateTodoList("complete")}>Completed</button>
      </div>
  
   </div>
  );
}

export default App;
