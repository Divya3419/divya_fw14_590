import {Counter} from './components/Counter/Counter'
import  Data from "./components/Data"
import './App.css'
import { Route, Routes } from 'react-router';
import Home from './components/Home'
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
    {/* <Counter/> */}

    <br/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/todo/:id" element={<Data/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
