import React, { useState } from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";


function App() {
 
const [show,setShow] = useState("the items are")
const [foodItems,setFoodItems] = useState(["burger","pizza","sandwich"])
const onKeyDown = (event) =>{
  if(event.key === "Enter")
  {
    let newFoodItem = event.target.value;
    let newItems = [...foodItems,newFoodItem];
    setFoodItems(newItems);
  }
  
 
}
  return  <Container>
   <h1>healthy food</h1>
    <FoodInput handleKeyDown={onKeyDown}/>
    
    <ErrorMessage items={foodItems}/>
  <FoodItems items={foodItems}/>
    </Container>
 }

export default App
