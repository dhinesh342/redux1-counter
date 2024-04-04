import { useState } from 'react'
import {useDispatch,useSelector} from 'react-redux'

import {decrement, increment} from './redux/slices/counterSlice'
import Home from './Home'

import './App.css'

function App() {
  const dispatch=useDispatch();
  const count=useSelector((store)=>store.count.value);
  // console.log(count);

  return (
    <>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <span>{count}</span>
      <button onClick={()=>dispatch(decrement())}>decrement</button>
      <Home />
    </>
  )
}

export default App
