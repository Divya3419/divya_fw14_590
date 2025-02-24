import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  const{isAuth}=useContext(AuthContext)
  return (
    <div className="App">
     {isAuth ? <Home/> :<Login/>}
    </div>
  );
}

export default App;
