import logo from './logo.svg';
import './App.css';

import {useSelector,useDispatch} from "react-redux"
import {increment,decrement} from "./redux/action"

function App() {
  const count =useSelector(state=>state.count)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1> count: {count}</h1>
      <button onClick={()=> dispatch(increment(2))}>inc</button>
      <button onClick={()=> dispatch(decrement(1))}>dec</button>
          </div>
  );
}

export default App;
