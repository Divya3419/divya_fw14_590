import logo from './logo.svg';
import './App.css';
import Toggle from './components/Toggle';
import { useContext } from 'react';
import { ToggleContext } from './contexts/ToggleContext';

function App() {
  const{isLight}=useContext(ToggleContext)

  return (
    <div className={`App ${isLight ? 'light' :'dark'}`}>
     <Toggle/>
    </div>
  );
}

export default App;
