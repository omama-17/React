import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";
import Display from "./components/Display";


function App() {
  return (
    
    <div className={styles.calculator}>
      <h1>Use the Calculator</h1>
   <Display/>
    <ButtonsContainer/> 
    </div>
  );
}

export default App;
