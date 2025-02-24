import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';


import Navbar from './components/Navbar';
import Login from './pages/Login';
import Start from './pages/Start';
import Sell from './pages/Sell';
import Market from './pages/Market';
import Manage from './pages/Manage';
import Pricing from './pages/Pricing';
import Learn from './pages/Learn';
import Footer from './components/Footer';
import Products from './components/Products';




function App() {
  return (
    <>
    <div className="App">
     
      <Navbar/>
      <Routes>
     <Route path="start" element={<Start/>}/>
     <Route path="sell" element={<Sell/> }/>
<Route path="market" element={<Market/>}/>
<Route path="manage" element={<Manage/>}/>  
<Route path="pricing" element={<Pricing/>}/>
<Route path="learn" element={<Learn/>}/>

     <Route path="login" element={<Login/>}/>
     </Routes>
    </div>

    <Products/>
    <div>
     <Footer/>
     </div>
     </>
  );
}

export default App;
