import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './component/Counter';
import Todo from './component/Todo';

function App() {
  return (
    <div className="App">
       <Counter/>
      <Todo/>
    </div>
  );
}

export default App;
