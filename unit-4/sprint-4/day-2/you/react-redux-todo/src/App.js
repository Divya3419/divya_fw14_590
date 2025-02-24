
import './App.css';

import { Route, Routes } from 'react-router-dom';

import Todo from './Pages/Todo';
import TodoList from './Pages/TodoList';


function App() {
  return (
    <div className="App">
    
    <Routes>
      <Route path="/" element={<Todo/>}/>
      <Route path="/todo/:id" element={<TodoList/> }/>

      </Routes>
      
    </div>
  );
}

export default App;
