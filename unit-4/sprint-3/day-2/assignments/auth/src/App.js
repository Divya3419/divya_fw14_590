import logo from './logo.svg';
import './App.css';

import Login from './pages/Login';
import Home from './pages/Home';
import {useContext} from'react';
import {AuthContext} from './contexts/AuthContext'


function App() {
  const {isLogin}=useContext(AuthContext);
  return (
    <div className="App">{isLogin ? <Home/> : <Login/>}</div>
  );
}

export default App;
