import { useState,useRef } from "react";

function AddTodo({handleNewItem}) {
 /* const [todoName,setTodoName] = useState();
  const [dueDate,setDueDate] = useState();

  const handleNameChange = (event) =>{
setTodoName(event.target.value);
  }

  const handleDateChange = (event) =>{
    setDueDate(event.target.value);
  }
    */
   const todoNameElement = useRef();
   const dueDateElement = useRef();
  const handleAddButtonClicked = () =>{
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    
    handleNewItem(todoName,dueDate);
 //   setDueDate("");
   // setTodoName("");
  }
    return (
      <div class="container text-center">
        <div class="row kg-row">
          <div class="col-6">
            <input type="text" placeholder="Enter Todo Here" ref={todoNameElement}
            //onChange={handleNameChange} value={todoName}
            />
          </div>
          <div class="col-4">
            <input type="date" ref={dueDateElement}
            //onChange={handleDateChange} value={dueDate}
            />
          </div>
          <div class="col-2">
            <button type="button" class="btn btn-success kg-button"
            onClick={handleAddButtonClicked}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
  
  export default AddTodo;