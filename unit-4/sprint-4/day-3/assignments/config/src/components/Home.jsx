import React from 'react'
import { Todo } from './Todo/Todo'
import {useSelector} from 'react-redux'
const Home = () => {

  const isAuth=useSelector((state)=> state.isAuth)
  const token=useSelector((state)=> state.isAuth)
  // if(!isAuth){
  //   return <Link to='/login'/>;
  
  
  // }
  return (
    <div>
     
        <Todo/>
    </div>
  )
}

export default Home