
import React,{ useReducer } from 'react'
const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "Increment":
      return state + 2
    case "Decrement":
      return state - 1
    case "Reset":
      return initialState
    default:
      return state
      
  }
}
function CounterOne() {
     const  [count, dispatch] = useReducer(reducer, initialState);
  return (
      <div>
          <div>
      <button onClick={()=>dispatch("Increment")}>Increment</button>
      <button onClick={()=>dispatch("Decrement")}>Drecrement</button>
      <button onClick={()=>dispatch("Reset")}>Reset</button>
    </div>
    <div>
      <p>Count-{count }</p>
      </div>
    </div>
  )
}

export default CounterOne