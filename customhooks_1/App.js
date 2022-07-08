import React, {useState} from "react"
import useCounter from "./useCounter"

function App() {
   // const {count, increment} = useCounter() // we use this if we return an object from our  custom hooks if we return an array we can rename this like below AND WE USE ARRAXY DESTURCTURING NOT OBJECT RESTRUCTURING
    
   const [number, add] = useCounter()
    
    return (
        <div>
            <h1>The count is {number}</h1>
            <button onClick={add}>Add 1</button>
        </div>
        /**
         * if we import it as an object  destructured way we have to use the same name when returning the object from custom hooks
         * <div>
            <h1>The count is {count}</h1>
            <button onClick={increment}>Add 1</button>
        </div>
         */
    )
}

export default App