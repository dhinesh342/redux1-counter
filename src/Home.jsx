import React from "react";
import { useDispatch,useSelector } from "react-redux";

import {increment,decrement} from './redux/slices/counterSlice'


export default function Home(){
    const dispatch=useDispatch();
    const count=useSelector((store)=>store.count.value);

    return(<div>
        <button onClick={()=>dispatch(increment())}>Add</button>
        <span>{count}</span>
        <button onClick={()=>dispatch(decrement())}>sub</button>
    </div>);
}