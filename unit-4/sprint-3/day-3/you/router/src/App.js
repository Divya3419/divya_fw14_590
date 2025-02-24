import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import About from './pages/About';
import Navbar from './components/Navbar';
import {Route,Routes} from 'react-router-dom';
import Product from './pages/Product';
import Products from './pages/Products';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* / is not mandetory */}
       <Routes>
        <Route path="" element={ <Home/>}/>
        <Route path="about" element={ <About/>}/>
      
     <Route path="product/*" element={ <Product/>}>
     <Route path=":id" element={ <Products/>}/>

     </Route>
  
     
     </Routes>
    </div>
  );
}

export default App;
