import logo from './logo.svg';
import './App.css';
import Todos from './component/Todos';



import { useState } from 'react';


function App() {
  const[toggle,setToggle]=useState(false)
return (
    <div className="App">
<button onClick={()=>setToggle(!toggle)}>{toggle ?"show":"hide"}</button>
{toggle ? "go back to page":<Todos/> }

      
  
    </div>
  );
}

export default App;
