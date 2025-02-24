import logo from './logo.svg';
import './App.css';
import MobileOs from './components/MobileOs';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import Counter from './components/Counter';
import { Todo } from './components/Todo';


function App() {
  return (
    <>
    
    <div className="App">
      <Navbar/>
    <Counter title="Now show props"/>
    <Todo/>
    </div>

    <div>
    <MobileOs/>
    </div>

    </>
  );
}

export default App;
