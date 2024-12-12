import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import "./App.css";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";

function App() {
  const todoItems = [
    {
    name : "learn react",
    dueDate : "6/12/2024"
  },
  {
    name : "learn redux",
    dueDate : "22/12/2024"
  },  {
    name : "learn typescript",
    dueDate : "26/12/2024"
  },
];
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
    <TodoItems todoItems={todoItems}/>
    </center>
  );
}

export default App;