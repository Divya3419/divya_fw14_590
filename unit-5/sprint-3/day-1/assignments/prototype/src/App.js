import logo from './logo.svg';
import './App.css';
import PinInput from './component/PinInput';
import { useState } from 'react';

function App() {
  const [otp,setOtp]=useState("")
  return ( 
    <div className="App">
    <PinInput
     length={5} 
     onChangefirst={(e)=>{setOtp(e)}}/>
     

<h2>OTP value is : {otp}</h2>

    </div>
    
  );
}

export default App;
