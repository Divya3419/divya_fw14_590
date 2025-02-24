
import  Data from "./components/Data"
import './App.css'
import { Route, Routes } from 'react-router';
import Home from './components/Home'
import Navbar from './components/Navbar';
import Login from "./components/Login/Login";


function App() {
  return (
    <div className="App">
    

    <br/>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/todo/:id" element={<Data/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    
    </div>
  );
}

export default App;
