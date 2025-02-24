import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import { useState } from 'react';
import Counter from './Counter/Counter';


function App() {
  //const[theme,setTheme]=useState("light")

  return (
    <div className="App">
      {/* <div>Click me</div>
      <h1>current theme is {theme}</h1>
      
      <Button onClick={()=>{
        setTheme(theme==="light" ?"dark":"light")
      }}>
        {/* if change name Click me change Theme*/}
        {/* Change Theme */}
      {/* </Button> */} 
<Counter/>
    </div>
  );
}

export default App;
