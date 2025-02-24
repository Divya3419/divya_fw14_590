import logo from './logo.svg';
import './App.css';

import {Counter} from './components/Counter';
import { useState } from 'react';
import Timer from './components/Timer';
import Stopwatch from './components/Stopwatch';
import Watch from './components/Watch';



function App() {
  //for counter
  const [showcounter,setShowcounter]=useState(true);

  return (
    <div className="App">
     
{/* <button onClick={()=>setShowcounter(!showcounter)}>Toggle</button>
     {showcounter && <Counter/> } */}

     {/* <Timer/>  */}
  {/* <Stopwatch/>  */}
 <Watch start="0"  end="20"/>
    </div>
  );
}

export default App;
