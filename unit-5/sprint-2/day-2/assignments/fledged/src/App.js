import logo from './logo.svg';
import './App.css';
import MainRoute from './pages/MainRoute';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainRoute/>
    </div>
  );
}

export default App;
