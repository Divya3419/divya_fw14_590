import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[count,setCount]=useState(0)
  return (
    <div className="App">
     <h1>count is {count}</h1>
     <button className="inc_button" onClick={()=>setCount(prev =>prev+1)}>inc</button>
     <button className="dec_button" 
     onClick={()=>setCount(prev =>prev-1)}>dec</button>
    </div>
  );
}

export default App;
