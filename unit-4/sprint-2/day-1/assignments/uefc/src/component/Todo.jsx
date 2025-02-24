import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios';

const Todo = (props) => {
  //console.log(props.text)

  return (
    <div>
    <h1>{props.text}</h1>



  </div>
  )
}

export default Todo