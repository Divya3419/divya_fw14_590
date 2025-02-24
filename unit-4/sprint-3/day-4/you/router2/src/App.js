import logo from './logo.svg';
import './App.css';

import Home from './pages/Home';
import Login from './pages/Login';

import {Routes, Route} from 'react-router-dom'
import ReqiredAuth from './hoc/ReqiredAuth';
import Navbar from './components/Navbar';
import Feeds from './pages/Feeds';
import Posts from './pages/Posts';



function App() {
  
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path="" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/feeds" element={
      <ReqiredAuth>
      <Feeds/>
      </ReqiredAuth>}/>

      <Route path="/posts" element={
      <ReqiredAuth>
      <Posts/>
      </ReqiredAuth>}/>

    </Routes>
  
    </div>
  );
}

export default App;
