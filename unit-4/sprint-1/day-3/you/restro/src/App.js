import logo from './logo.svg';
import './App.css';
import {Restro} from './components/Restdetail'
import Restform from './components/Restform';
import {useState} from 'react'

function App() {
  const [detail,setDetail]=useState(false)
  return (
    <div className="App">
      <button className="both" onClick={()=> setDetail(!detail)}>{!detail ?"Order Food" :"Add New Detail"}</button>
  {!detail ? <Restro/>:<Restform/>} 
    </div>
  );
}

export default App;
